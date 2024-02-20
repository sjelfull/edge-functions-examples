import repoLink from "../../components/repo-link.js";

export default {
  title: "Webhook validation",
  metaDescription: "Use Edge Functions to validate a request using Response.json().",
  page: function () {
    return `
    <section>
      <h1>Webhook validation</h1>
      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "world" });
};
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/webhook">View the response from the Edge Function</a></li>
        <li><form action="/webhook" method="post">
        <button type="submit">Send webhook</button>
        <div id="response-area"></div>
      </form></li>
        <li>${repoLink("webhook.ts")}</li>
      </ul>

      <div class="protip">
        <h2>Pro tip!</h2>
        <p>Need to return text/html from an Edge Function? Check out the <a href="/example/hello">Hello, world</a> example.</p>
      </div>
    </section>
    <script type="module">
    import {encodeSignatureHeader} from 'https://esm.sh/@sanity/webhook'

    (async function () {
      const secret = 'my-secret'
      const payload = {
        message: 'Hello, world!',
        date: new Date().toISOString()
      }
      const payloadString = JSON.stringify(payload)
      const signedRequest = await encodeSignatureHeader(payloadString, Date.now(), secret)
      const form = document.querySelector('form');
      const responseArea = document.querySelector('#response-area');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const url = form.action;
        const verb = (form.method || 'post').toUpperCase();
        fetch(url, {
          method: verb,
          headers: {
            'X-Sanity-Signature': signedRequest,
            'Content-Type': 'application/json',
          },
          body: payloadString
        }).then(function (res) {
          if(res.ok) {
            return res.json();
          }
          throw new Error('Network response was not ok.');
        }).then(function(json) {
          responseArea.innerText = JSON.stringify(json, null, 2);
        }).catch(function (error) {
          responseArea.innerText = error.message
        })
      })
    })()
  </script>
  `;
  },
};
