/**
 * The landing is a static build, but Cloudflare serves a static asset before
 * it ever invokes this Worker. That is why `run_worker_first` is on: a person
 * who types `http://autoreelvn.com` gets the asset without this code running,
 * and the redirect below never happens.
 *
 * Once the Worker runs, every request is handed back to the asset binding, so
 * the build's own 404 page and caching rules still apply.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
