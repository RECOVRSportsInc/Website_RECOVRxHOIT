// functions/api/translate.ts
// Cloudflare Pages Function using Workers AI translation

export const onRequestPost = async ({ request, env }: any) => {
  try {
    const body = await request.json();
    const text = String(body.text ?? "").trim();
    const source = (body.source ?? "en") as string;
    const target = (body.target ?? "fr") as string;

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Bad text" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // Workers AI multilingual model
    const result: any = await env.AI.run("@cf/meta/m2m100-1.2b", {
      text,
      source_lang: source,
      target_lang: target,
    });

    return new Response(
      JSON.stringify({ translated: result.translated_text }),
      { headers: { "content-type": "application/json" } }
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e?.message || "translate failed" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
};