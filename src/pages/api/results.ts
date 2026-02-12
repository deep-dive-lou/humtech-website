import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const submission = url.searchParams.get("submission");

  if (!submission) {
    return new Response(JSON.stringify({ error: "Missing submission" }), {
      status: 400,
    });
  }

  try {
    const lookupUrl = `${import.meta.env.N8N_RESULTS_LOOKUP_URL}?submission=${encodeURIComponent(submission)}`;

    const response = await fetch(lookupUrl);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
      });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        detail: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
};
