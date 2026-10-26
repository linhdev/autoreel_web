import assert from 'node:assert/strict';
import test from 'node:test';

import {
  contentDisposition, isIpLiteral, safeEqual, sanitizeFilename, vnDayStart,
} from '../src/api/http.js';
import { batchLimit, requestedUrls } from '../src/api/jobs.js';
import { normalizeUrl } from '../src/api/urls.js';

const OK = [
  ['https://www.tiktok.com/@user/video/1234567890123456789', 'tiktok'],
  ['https://vm.tiktok.com/ZMabc123/', 'tiktok'],
  ['https://youtu.be/dQw4w9WgXcQ', 'youtube'],
  ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'youtube'],
  ['https://youtube.com/shorts/abc123456', 'youtube'],
  ['https://www.douyin.com/video/7000000000000000000', 'douyin'],
  ['https://www.douyin.com/jingxuan?modal_id=7000000000000000000', 'douyin'],
  ['https://v.douyin.com/abc123', 'douyin'],
  ['https://www.bilibili.com/video/BV1xx411c7mD', 'bilibili'],
  ['https://bilibili.tv/vi/video/4787314444868096', 'bilibili'],
  ['https://hongguoduanju.com/player/7690494161551625241', 'hongguo'],
  ['https://www.iq.com/play/fated-hearts-episode-1-1ggw7a63yug', 'iq'],
];

test('accepts one url per supported source', () => {
  for (const [url, source] of OK) {
    const result = normalizeUrl(url);
    assert.equal(result.ok, true, `${url} should be accepted`);
    assert.equal(result.source, source, url);
  }
});

const BAD = [
  'https://youtube.com.evil.com/watch?v=abc123',
  'https://evil.com/watch?v=abc123&youtube.com',
  'http://127.0.0.1:8787/watch?v=abc123',
  'http://[::1]/watch?v=abc123',
  'https://youtube.com:8443/watch?v=abc123',
  'https://user:pass@youtube.com/watch?v=abc123',
  'https://youtube.com./watch?v=abc123',
  'file:///etc/passwd',
  'javascript:alert(1)',
  'ftp://youtube.com/watch?v=abc123',
  'https://youtube.com/channel/UC1234567890',
  'https://www.youtube.com/playlist?list=PL123',
  'https://www.tiktok.com/@user',
  'https://www.tiktok.com/@user/video/12345',
  'https://vm.tiktok.com/',
  'https://youtu.be/',
  'https://www.bilibili.com/bangumi/play/ss123',
  `https://youtube.com/watch?v=${'x'.repeat(2100)}`,
];

test('rejects lookalikes, private hosts and non-video urls', () => {
  for (const url of BAD) {
    const result = normalizeUrl(url);
    assert.equal(result.ok, false, `${url} should be rejected`);
    assert.ok(['BAD_URL', 'UNSUPPORTED', 'NOT_A_VIDEO'].includes(result.code));
  }
});

test('normalizes the accepted url through URL.toString', () => {
  const result = normalizeUrl('  https://YOUTU.BE/dQw4w9WgXcQ  ');
  assert.equal(result.ok, true);
  assert.equal(result.url, 'https://youtu.be/dQw4w9WgXcQ');
  assert.equal(result.host, 'youtu.be');
});

test('detects IP literals and ordinary hosts', () => {
  assert.equal(isIpLiteral('127.0.0.1'), true);
  assert.equal(isIpLiteral('192.168.1.1'), true);
  assert.equal(isIpLiteral('::1'), true);
  assert.equal(isIpLiteral('youtube.com'), false);
  assert.equal(isIpLiteral('not-an-ip'), false);
});

test('sanitizes filenames for headers and filesystems', () => {
  assert.equal(sanitizeFilename('a/b\\c:d*e?f"g<h>i|j'), 'a b c d e f g h i j.mp4');
  assert.equal(sanitizeFilename('line\r\nbreak'), 'line break.mp4');
  assert.equal(sanitizeFilename('already.MP4'), 'already.MP4');
  assert.equal(sanitizeFilename(''), 'video.mp4');
  assert.equal(sanitizeFilename('', 'video-abc.mp4'), 'video-abc.mp4');
});

test('contentDisposition carries an ascii fallback and a utf-8 name', () => {
  const header = contentDisposition('Video thử nghiệm.mp4');
  assert.match(header, /^attachment; filename="Video th_ nghi_m.mp4"; filename\*=UTF-8''/);
  assert.match(header, /Video%20th%E1%BB%AD%20nghi%E1%BB%87m\.mp4/);
});

test('safeEqual only accepts identical strings', () => {
  assert.equal(safeEqual('abc', 'abc'), true);
  assert.equal(safeEqual('abc', 'abd'), false);
  assert.equal(safeEqual('abc', 'ab'), false);
  assert.equal(safeEqual(null, 'abc'), false);
});

test('vnDayStart is midnight in Vietnam, not UTC', () => {
  // 2026-10-26T17:00:00Z is 2026-10-27T00:00 in UTC+7.
  const midnightVn = Date.UTC(2026, 9, 26, 17, 0, 0);
  assert.equal(vnDayStart(midnightVn), midnightVn);
  assert.equal(
    vnDayStart(Date.UTC(2026, 9, 26, 16, 59, 59)),
    Date.UTC(2026, 9, 25, 17, 0, 0),
  );
});

test('the dashboard can lower the batch size but never raise it past five', () => {
  assert.equal(batchLimit({ batch_max: 5 }), 5);
  assert.equal(batchLimit({ batch_max: 3 }), 3);
  assert.equal(batchLimit({ batch_max: 1 }), 1);
  assert.equal(batchLimit({ batch_max: 0 }), 1);
  assert.equal(batchLimit({ batch_max: 9 }), 5);
  assert.equal(batchLimit({}), 5);
  assert.equal(batchLimit({ batch_max: 'nope' }), 5);
});

test('a submission may carry one url or a list', () => {
  assert.deepEqual(requestedUrls({ url: 'https://youtu.be/abc123' }), [
    'https://youtu.be/abc123',
  ]);
  assert.deepEqual(requestedUrls({ urls: ['a', 'b'] }), ['a', 'b']);
  assert.deepEqual(requestedUrls({ urls: [] }), []);
  assert.equal(requestedUrls({}), null);
  assert.equal(requestedUrls({ urls: 'not-a-list' }), null);
});
