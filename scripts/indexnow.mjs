/**
 * Tell IndexNow about the URLs that just changed.
 *
 * IndexNow is supported by Bing, Yandex, Naver and a handful of smaller
 * engines — **not Google**, which never turned the protocol on. It matters here
 * because Bing's index feeds Copilot, DuckDuckGo and (in part) ChatGPT search;
 * a new article that Bing finds a week late is a week of missing citations.
 *
 * Default is every URL in the sitemap, which is right for the first submission
 * and wrong for every day after it. Pass explicit URLs for a normal deploy:
 *
 *   node scripts/indexnow.mjs https://autoreelvn.com/blog/new-post/
 *
 * The key file is public by design (`/3100….txt`), not a secret. A stale key
 * file is the usual reason a submission comes back 403.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'autoreelvn.com';
const KEY = '3100178b07d989fa101e82cbae4e54de';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

async function urlsFromSitemap() {
  const xml = await readFile(join(ROOT, 'dist', 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
  const urlList = args.length ? args : await urlsFromSitemap();
  if (!urlList.length) throw new Error('no URLs to submit');

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  // 200 = accepted; 202 = key validation pending. Everything else is a real
  // failure: 403 is almost always a key file that is not reachable, and 422 is
  // a host/URL mismatch.
  if (![200, 202].includes(response.status)) {
    const text = await response.text().catch(() => '');
    throw new Error(`IndexNow ${response.status}: ${text.slice(0, 300)}`);
  }

  console.log(`indexnow: submitted ${urlList.length} URL(s), status ${response.status}`);
}

main().catch((error) => {
  console.error(`indexnow failed: ${error.message}`);
  process.exit(1);
});
