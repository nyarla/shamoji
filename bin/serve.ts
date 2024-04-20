import { join } from "node:path";

import { compile } from "./compile";

const root = join(import.meta.dir, "..");
const template = await Bun.file(join(root, "index.html")).text();
const svg = join(root, "svg");

const serve = async (r) => {
  const href = new URL(r.url);

  if (href.pathname === "/") {
    return new Response("Usage: /{svg}");
  }

  if (href.pathname.match(/\.svg$/)) {
    const fn = href.pathname.match(/([^/]+)\.svg$/)[1];
    const file = Bun.file(join(svg, `${fn}.svg`));
    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  }

  const fn = href.pathname.match(/([^/]+)$/)[1];
  const html = String(template).replace("@svg@", fn);

  await compile(fn);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
};

const PORT = Bun.env.PORT || 1313;
const BIND = Bun.env.BIND || "0.0.0.0";

console.log(`listen on ${BIND}:${PORT}`);

Bun.serve({
  port: PORT,
  host: BIND,
  fetch: serve,
});
