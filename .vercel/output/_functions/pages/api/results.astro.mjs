import { Pool } from 'pg';
export { renderers } from '../../renderers.mjs';

const prerender = false;
let pool;
function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not configured");
    }
    pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false }
    });
  }
  return pool;
}
const GET = async ({ url }) => {
  const submission = url.searchParams.get("submission");
  if (!submission) {
    return new Response(JSON.stringify({ error: "Missing submission" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const client = getPool();
    const query = `
      select results
      from humtech.assessment_results
      where submission_id = $1
      limit 1
    `;
    const { rows } = await client.query(query, [submission]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(rows[0].results), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        detail: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
