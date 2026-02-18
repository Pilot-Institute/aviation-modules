/**
 * Cloudflare Worker: serve static assets and optionally handle root redirect.
 * Assets are served from the ASSETS binding (./public).
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
