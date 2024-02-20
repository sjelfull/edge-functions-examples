import type { Context, Config } from "@netlify/edge-functions";

import { isValidSignature } from "@sanity/webhook";

export default async (request: Request, context: Context) => {
  console.log(Object.fromEntries(request.headers.entries()), request.body);
  const signature = request.headers.get("x-sanity-signature")!;
  const body = await request.text();
  const secret = "my-secret";
  const validRequest = await isValidSignature(body, signature, secret);

  return Response.json({
    signature,
    validRequest,
  });
};

export const config: Config = {
  path: "/webhook",
};
