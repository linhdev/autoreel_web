import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildNotification, isAllowedPushEndpoint, normalizeLanguage,
  validateSubscription,
} from '../src/api/push.js';

const AUTH = Buffer.alloc(16, 2).toString('base64url');

// A valid uncompressed point starts with 0x04.
const P256DH_VALID = Buffer.concat([
  Buffer.from([4]), Buffer.alloc(64, 7),
]).toString('base64url');

test('push endpoints are limited to the real browser services', () => {
  assert.equal(isAllowedPushEndpoint('https://fcm.googleapis.com/fcm/send/x'), true);
  assert.equal(isAllowedPushEndpoint('https://updates.push.services.mozilla.com/wpush/v2/x'), true);
  assert.equal(isAllowedPushEndpoint('https://web.push.apple.com/x'), true);
  assert.equal(isAllowedPushEndpoint('https://wns2-par02p.notify.windows.com/x'), true);
  assert.equal(isAllowedPushEndpoint('http://fcm.googleapis.com/x'), false);
  assert.equal(isAllowedPushEndpoint('https://fcm.googleapis.com:8443/x'), false);
  assert.equal(isAllowedPushEndpoint('https://user:pass@fcm.googleapis.com/x'), false);
  assert.equal(isAllowedPushEndpoint('https://127.0.0.1/x'), false);
  assert.equal(isAllowedPushEndpoint('https://evil.example/x'), false);
});

test('a subscription carries a P-256 point and a 16-byte auth secret', () => {
  const valid = validateSubscription({
    endpoint: 'https://fcm.googleapis.com/fcm/send/x',
    keys: { p256dh: P256DH_VALID, auth: AUTH },
  });
  assert.equal(valid?.endpoint, 'https://fcm.googleapis.com/fcm/send/x');
  assert.equal(validateSubscription({
    endpoint: 'https://fcm.googleapis.com/fcm/send/x',
    keys: { p256dh: Buffer.alloc(65, 1).toString('base64url'), auth: AUTH },
  }), null);
  assert.equal(validateSubscription({
    endpoint: 'https://fcm.googleapis.com/fcm/send/x',
    keys: { p256dh: P256DH_VALID, auth: Buffer.alloc(8).toString('base64url') },
  }), null);
});

test('the notification says which job and where to open it', () => {
  const note = buildNotification({
    id: 'a'.repeat(32), file_name: 'Video thử.mp4', file_size: 3 * 1024 * 1024,
  }, { lang: 'vi', origin: 'https://autoreelvn.com' });
  assert.equal(note.web_push, 8030);
  assert.match(note.notification.title, /sẵn sàng/);
  assert.match(note.notification.body, /3\.0 MB/);
  assert.match(note.notification.navigate, /\/downloads\/\?job=a{32}$/);
  assert.equal(note.notification.data.jobId, 'a'.repeat(32));
  const english = buildNotification({ id: 'b'.repeat(32), file_name: 'x.mp4' },
    { lang: 'en', origin: 'https://autoreelvn.com' });
  assert.match(english.notification.navigate, /\/en\/downloads\/\?job=b{32}$/);
  assert.equal(normalizeLanguage('EN'), 'en');
  assert.equal(normalizeLanguage('vi'), 'vi');
  assert.equal(normalizeLanguage('fr'), 'vi');
});
