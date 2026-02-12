import type { APIRoute } from "astro";
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const submission = url.searchParams.get("submission");
  if (!submission) return new Response("Missing submission", { status: 400 });

  const base = import.meta.env.N8N_RESULTS_LOOKUP_URL;
  if (!base)
    return new Response("N8N_RESULTS_LOOKUP_URL not set", { status: 500 });

  const lookupUrl = `${base}?submission=${encodeURIComponent(submission)}`;
  const r = await fetch(lookupUrl);
  const html = await r.text();

  return new Response(html, {
    status: r.status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
