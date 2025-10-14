// functions/[[path]].ts
export const onRequest = async ({ request, next }) => {
  const res = await next();

  const url = new URL(request.url);
  const isGet = request.method === "GET";
  const looksLikeAFile = /\.[a-z0-9]+$/i.test(url.pathname);

  if (res.status === 404 && isGet && !looksLikeAFile) {
    const indexResp = await fetch(new URL("/index.html", url));
    return new Response(await indexResp.text(), {
      status: 200,
      headers: {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache"
    }
    });
  }

  return res;
};
