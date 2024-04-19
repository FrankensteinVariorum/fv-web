import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_kzB3uNQ_.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/content-styles","type":"page","pattern":"^\\/content-styles\\/?$","segments":[[{"content":"content-styles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/content-styles.astro","pathname":"/content-styles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/method","type":"page","pattern":"^\\/method\\/?$","segments":[[{"content":"method","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/method.astro","pathname":"/method","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/people","type":"page","pattern":"^\\/people\\/?$","segments":[[{"content":"people","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/people.astro","pathname":"/people","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4ZQ0n2En.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/_unit_.CR2If5T6.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/viewer/[source]/[unit]","type":"page","pattern":"^\\/viewer\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"viewer","dynamic":false,"spread":false}],[{"content":"source","dynamic":true,"spread":false}],[{"content":"unit","dynamic":true,"spread":false}]],"params":["source","unit"],"component":"src/pages/viewer/[source]/[unit].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/data","type":"page","pattern":"^\\/data\\/?$","segments":[[{"content":"data","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/data.astro","pathname":"/data","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/about.amKZn-3G.css"},{"type":"external","src":"/_astro/index.AYIM0czZ.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://frankensteinvariorum.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/viewer/[source]/[unit].astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/content-styles.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/data.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/method.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/people.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/content-styles@_@astro":"pages/content-styles.astro.mjs","\u0000@astro-page:src/pages/method@_@astro":"pages/method.astro.mjs","\u0000@astro-page:src/pages/people@_@astro":"pages/people.astro.mjs","\u0000@astro-page:src/pages/viewer/[source]/[unit]@_@astro":"pages/viewer/_source_/_unit_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/data@_@astro":"pages/data.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/viewer/[source]/[unit].astro":"chunks/pages/_unit__iaCEXVMj.mjs","/src/pages/about.astro":"chunks/pages/about_7YIfyWGb.mjs","/src/pages/content-styles.astro":"chunks/pages/content-styles_UwPez4Eb.mjs","/src/pages/data.astro":"chunks/pages/data_vo41SOv8.mjs","/src/pages/index.astro":"chunks/pages/index_8jyMvbf7.mjs","/src/pages/method.astro":"chunks/pages/method_zs2tWLGF.mjs","/src/pages/people.astro":"chunks/pages/people_qUN5wQKf.mjs","\u0000@astrojs-manifest":"manifest_90IAvNr9.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.4ZQ0n2En.js","C:/Users/Admin/Documents/Github/fv/fv-web2023/node_modules/.pnpm/CETEIcean@1.8.0-beta.1_tw4ceufjyw36wu7odcdwt2if64/node_modules/CETEIcean/src/CETEI.js":"_astro/CETEI.-NaYvehL.js","/astro/hoisted.js?q=1":"_astro/hoisted.4PK_pqbL.js","C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/Viewer/Controls":"_astro/Controls.4JXM7JgK.js","C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/tei/tei":"_astro/tei.-9qL417Q.js","@astrojs/react/client.js":"_astro/client.w8nPYZx4.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
