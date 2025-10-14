export const onRequest: PagesFunction = async ({ request, next }) => {
  // Let static files and normal routes resolve first
  const res = await next();

  const url = new URL(request.url);
  const isGet = request.method === "GET";
  const looksLikeAFile = /\.[a-z0-9]+$/i.test(url.pathname); // has .ext

  // If a GET to a route returns 404 and it is not a file, serve index.html
  if (res.status === 404 && isGet && !looksLikeAFile) {
    const indexResp = await fetch(new URL("/index.html", url));
    return new Response(await indexResp.text(), {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return res;
};
