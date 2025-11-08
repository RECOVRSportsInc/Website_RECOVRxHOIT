// functions/api/translate.js
// Requires Cloudflare Pages "Workers AI" binding named AI (you already added it)

export const onRequestPost = async ({ request, env }) => {
  try {
    const { text, source = "en", target = "fr" } = await request.json();

    if (typeof text !== "string" || !text.trim()) {
      return new Response(JSON.stringify({ error: "Bad text" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    // Call Workers AI multilingual model (en ↔ fr and many others)
    const result = await env.AI.run("@cf/meta/m2m100-1.2b", {
      text,
      source_lang: source,
      target_lang: target,
    });

    return new Response(
      JSON.stringify({ translated: result.translated_text }),
      { headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || "translate failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
