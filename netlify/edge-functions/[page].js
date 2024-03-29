// A global page template for all of our HTML views
// You know, for consistency.
import layout from "../../components/layout.js";

// A bit convoluted, but necessary for the moment
// until we can import the page templates we need
// dynamically from withing the exported function
import pageHome from "../../pages/home/index.js";
import pageHello from "../../pages/hello/index.js";
import pageTransform from "../../pages/transform/index.js";
import pageHtmlrewriter from "../../pages/htmlrewriter/index.js";
import pageInclude from "../../pages/include/index.js";
import pageRewrite from "../../pages/rewrite/index.js";
import pageGeolocation from "../../pages/geolocation/index.js";
import pageJson from "../../pages/json/index.js";
import pageWebhook from "../../pages/webhook/index.js";
import pageSetRequestHeader from "../../pages/set-request-header/index.js";
import pageSetResponseHeader from "../../pages/set-response-header/index.js";
import pageMethod from "../../pages/method/index.js";
import pageCookiesSet from "../../pages/cookies-set/index.js";
import pageCookiesRead from "../../pages/cookies-read/index.js";
import pageCookiesDelete from "../../pages/cookies-delete/index.js";
import pageABTest from "../../pages/abtest/index.js";
import pageImage from "../../pages/image/index.js";
import pageLog from "../../pages/log/index.js";
import pageCountryBlock from "../../pages/country-block/index.js";
import pageLocalizedContent from "../../pages/localized-content/index.js";
import pageProxyRequests from "../../pages/proxy-requests/index.js";
import pageEnvironment from "../../pages/environment/index.js";
import pageUncaughtExceptions from "../../pages/uncaught-exceptions/index.js";
import pageContextSite from "../../pages/context-site/index.js";
import pageWasm from "../../pages/wasm/index.js";
import pageSse from "../../pages/server-sent-events/index.js";
import pageLongRunning from "../../pages/long-running/index.js";

// The keys here correspond to the path in the request to `/example/PATH`
const pages = {
  home: pageHome,
  hello: pageHello,
  transform: pageTransform,
  include: pageInclude,
  json: pageJson,
  webhook: pageWebhook,
  "set-response-header": pageSetResponseHeader,
  "set-request-header": pageSetRequestHeader,
  method: pageMethod,
  "cookies-set": pageCookiesSet,
  "cookies-read": pageCookiesRead,
  "cookies-delete": pageCookiesDelete,
  rewrite: pageRewrite,
  geolocation: pageGeolocation,
  abtest: pageABTest,
  image: pageImage,
  log: pageLog,
  "country-block": pageCountryBlock,
  "localized-content": pageLocalizedContent,
  "proxy-requests": pageProxyRequests,
  environment: pageEnvironment,
  "uncaught-exceptions": pageUncaughtExceptions,
  "context-site": pageContextSite,
  wasm: pageWasm,
  "server-sent-events": pageSse,
  "long-running": pageLongRunning,
  htmlrewriter: pageHtmlrewriter,
};

export default (request, context) => {
  const url = new URL(request.url);
  const path = context.params?.page || "home";

  console.log(`serve page for ${url} `);

  // render the appropriate page with the global layout
  const html = layout({
    url: url,
    title: pages[path].title,
    content: pages[path].page({ geo: context.geo }),
    metaDescription: pages[path].metaDescription,
  });

  // send our response
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
};

export const config = {
  path: ["/", "/example/:page"],
};
