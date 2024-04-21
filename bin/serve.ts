import { join } from "node:path";

import { compile } from "../src/svg";

const root = join(import.meta.dir, "..");
const template = await Bun.file(join(root, "index.html")).text();
const cache = join(root, "node_modules", ".shamoji");
const emojis = join(root, "emojis");

const dump = async (fn) => {
  const src = join(emojis, `${fn}.tsx`);
  if (!(await Bun.file(src).exists())) {
    return false;
  }

  const rev = Date.now();
  const dist = join(cache, `${fn}.svg`);

  const emojifier = (await import(`${src}?version=${rev}`)).default;
  const svg = await compile(emojifier);

  Bun.write(dist, svg);

  console.log(`render to ${dist} (${rev})`);

  return true;
};

const serve = async (r) => {
  const href = new URL(r.url);

  if (href.pathname === "/") {
    return new Response("Usage: /{svg}");
  }

  if (href.pathname.match(/\.svg$/)) {
    const fn = href.pathname.replace(/\.svg$/g, "").replace(/\./g, "");

    console.log(fn);

    const file = Bun.file(join(cache, `${fn}.svg`));

    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  }

  const fn = href.pathname.replace(/\./g, "");
  const ok = await dump(fn);

  if (!ok) {
    return new Response("404", { "Content-Type": "text/plain" });
  }

  return new Response(template, {
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
