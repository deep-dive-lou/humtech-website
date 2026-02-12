import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_DAxRCJff.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BmxrdKoA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/loumk/humtech-website/","cacheDir":"file:///C:/Users/loumk/humtech-website/node_modules/.astro/","outDir":"file:///C:/Users/loumk/humtech-website/dist/","srcDir":"file:///C:/Users/loumk/humtech-website/src/","publicDir":"file:///C:/Users/loumk/humtech-website/public/","buildClientDir":"file:///C:/Users/loumk/humtech-website/dist/client/","buildServerDir":"file:///C:/Users/loumk/humtech-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"case-study/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/case-study","isIndex":false,"type":"page","pattern":"^\\/case-study\\/?$","segments":[[{"content":"case-study","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/case-study.astro","pathname":"/case-study","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"free-ai-diagnostic/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/free-ai-diagnostic","isIndex":false,"type":"page","pattern":"^\\/free-ai-diagnostic\\/?$","segments":[[{"content":"free-ai-diagnostic","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/free-ai-diagnostic.astro","pathname":"/free-ai-diagnostic","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pricing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"results/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/results","isIndex":false,"type":"page","pattern":"^\\/results\\/?$","segments":[[{"content":"results","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/results.astro","pathname":"/results","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"team/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.17.2_@types+node@25_1470e8d57f28824c3c31ddae08ff81f9/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/results","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/results\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"results","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/results.ts","pathname":"/api/results","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://astroship.web3templates.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/loumk/humtech-website/src/pages/results.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/loumk/humtech-website/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/loumk/humtech-website/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/loumk/humtech-website/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/case-study.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/free-ai-diagnostic.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/services.astro",{"propagation":"none","containsHead":true}],["C:/Users/loumk/humtech-website/src/pages/team.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.17.2_@types+node@25_1470e8d57f28824c3c31ddae08ff81f9/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/results@_@ts":"pages/api/results.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/case-study@_@astro":"pages/case-study.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/free-ai-diagnostic@_@astro":"pages/free-ai-diagnostic.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/results@_@astro":"pages/results.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/team@_@astro":"pages/team.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BwM-mzBd.mjs","C:/Users/loumk/humtech-website/node_modules/.pnpm/astro@5.17.2_@types+node@25_1470e8d57f28824c3c31ddae08ff81f9/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DU2rC7e-.mjs","C:\\Users\\loumk\\humtech-website\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\loumk\\humtech-website\\.astro\\content-modules.mjs":"chunks/content-modules_DJRrNe23.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BG66kKsl.mjs","C:/Users/loumk/humtech-website/src/content/blog/kitchensink.mdx?astroPropagatedAssets":"chunks/kitchensink_C58jFwHr.mjs","C:/Users/loumk/humtech-website/src/content/blog/kitchensink.mdx":"chunks/kitchensink_AFM7S3qN.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/trusted-logo-ecop._TM9Q0Dm.webp","/_astro/trusted-logo-lmf.Dt7QBfup.webp","/_astro/trusted-logo-ghs.O1NwsmEO.webp","/_astro/friction-graphic-bg.BEj_6_FZ.png","/_astro/cycle-hire-bg.pyhMbdtJ.png","/_astro/trusted-logo-resg.BeaQaDMh.png","/_astro/latency-bg.DuBxiHCI.png","/_astro/hero-core-graphic.CytIckkS.png","/_astro/inter-cyrillic-ext-wght-normal.BOeWTOD4.woff2","/_astro/inter-cyrillic-wght-normal.DqGufNeO.woff2","/_astro/inter-greek-wght-normal.CkhJZR-_.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/inter-greek-ext-wght-normal.DlzME5K_.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/about.VDfe88tP.css","/_astro/index.CQUxWJTK.css","/favicon.svg","/robots.txt","/public/banner.jpg","/public/banner.png","/public/bg-banner.png","/public/bg-humtech.png","/public/bg-logo.png","/public/chris_r.png","/public/chris_s.png","/public/logo.jpg","/public/logo.png","/public/lou.png","/404.html","/about/index.html","/blog/index.html","/case-study/index.html","/contact/index.html","/free-ai-diagnostic/index.html","/pricing/index.html","/results/index.html","/services/index.html","/team/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"QK2TCiw89+Rd7yqbW5REB6o32BRPA/cj/Ve5z+iTtK4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
