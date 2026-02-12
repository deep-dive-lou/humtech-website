import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CzW-1WBZ.mjs';
import { manifest } from './manifest_BwM-mzBd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/results.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/case-study.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/free-ai-diagnostic.astro.mjs');
const _page9 = () => import('./pages/pricing.astro.mjs');
const _page10 = () => import('./pages/results.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/team.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.2_@types+node@25_1470e8d57f28824c3c31ddae08ff81f9/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/results.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/case-study.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/free-ai-diagnostic.astro", _page8],
    ["src/pages/pricing.astro", _page9],
    ["src/pages/results.astro", _page10],
    ["src/pages/services.astro", _page11],
    ["src/pages/team.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "13abdfd6-9497-410c-a79d-8a74d2848a35",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
