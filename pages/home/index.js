export default {
  title: "Home",
  metaDescription:
    "Explore our library of Edge Function examples and deploy your own to Netlify.",
  page: function () {
    return /* html */ `
    <section class="home__section">
    <h2>Examples</h2>
    <p>
      Explore the examples below, or over in the <a href="https://github.com/netlify/edge-functions-examples" target="_BLANK" rel="noopener">GitHub repository</a> for this site.
    </p>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">Responses</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/hello">Hello world</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/webhook">Webhook</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/json">Return JSON</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/image">Return an image</a></li>
      </ul>
    </section>

    <section class="home__section">
    <h3 class="home__sectionHeader">Rewrites and proxies</h3>
    <ul class="home__sectionList">
    <li class="home__sectionListItem home__sectionListItem"><a class="home__sectionListItemLink" href="/example/rewrite">Rewrite responses from another URL</a></li>
    <li class="home__sectionListItem home__sectionListItem"><a class="home__sectionListItemLink" href="/example/proxy-requests">Proxy requests to another source</a></li>
    </ul>
    </section>

    <section class="home__section">
    <h3 class="home__sectionHeader">HTTP Headers and Methods</h3>
    <ul class="home__sectionList">
    <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-request-header">Set custom HTTP request headers</a></li>
    <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-response-header">Set custom HTTP response headers</a></li>
    <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/method">Configure HTTP methods</a></li>
    </ul>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">Transforming responses</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/transform">Text transformations</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/htmlrewriter">HTML transformations</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/include">Content includes</a></li>
      </ul>
    </section>
    
    <section class="home__section">
      <h3 class="home__sectionHeader">Geolocation</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/geolocation">Determine a user's location</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/country-block">Block content according to country</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/localized-content">Serve localized content</a></li>
      </ul>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">Cookies</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-set">Set cookies</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-read">Read cookies</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-delete">Delete cookies</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/abtest">Set up an A/B test using cookies</a></li>
      </ul>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">Streams</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/long-running">Long-running edge functions</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/server-sent-events">Server-sent events (SSE)</a></li>
      </ul>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">WebAssembly</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/wasm">Edge WebAssembly</a></li>
      </ul>
    </section>

    <section class="home__section">
      <h3 class="home__sectionHeader">Environment and debugging</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/log">Write to the logs</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/environment">Use environment variables</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/uncaught-exceptions">Read logs for uncaught exceptions</a></li>
        <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/context-site">Access site information</a></li>
      </ul>
    </section>
  `;
  },
};
