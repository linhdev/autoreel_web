/**
 * The landing is a static build, but Cloudflare serves a static asset before
 * it ever invokes this Worker. That is why `run_worker_first` is on: a person
 * who types `http://autoreelvn.com` gets the asset without this code running,
 * and the redirect below never happens.
 *
 * Once the Worker runs, every request is handed back to the asset binding, so
 * the build's own 404 page and caching rules still apply.
 */
import { handleApi, runCleanup } from "./api/index.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol === "http:" && !local && env.ENVIRONMENT === "production") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      return handleApi(request, env, ctx);
    }
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runCleanup(env));
  },
};
