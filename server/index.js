import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Link, NavLink } from "react-router-dom";
import { Compass, Disc, BookOpen, BarChart3, Info } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const logo = "/stella-sora-library/assets/game-icon-BtLOrND6.webp";
function Sidebar() {
  const links2 = [
    { name: "Trekker", to: "/trekker", icon: /* @__PURE__ */ jsx(Compass, { size: 18 }) },
    { name: "Disc", to: "/disc", icon: /* @__PURE__ */ jsx(Disc, { size: 18 }) },
    { name: "Guide", to: "/guide", icon: /* @__PURE__ */ jsx(BookOpen, { size: 18 }) },
    { name: "Tier List", to: "/tier-list", icon: /* @__PURE__ */ jsx(BarChart3, { size: 18 }) },
    { name: "About", to: "/about", icon: /* @__PURE__ */ jsx(Info, { size: 18 }) }
  ];
  return /* @__PURE__ */ jsxs("aside", { className: "h-screen w-60 bg-[#18181d] text-gray-200 flex flex-col p-5", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logo,
              alt: "Stella Sora logo",
              className: "w-9 h-9 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold text-[#6dd3ff]", children: "Stella Sora Library" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2", children: links2.map((link) => /* @__PURE__ */ jsxs(
      NavLink,
      {
        to: link.to,
        className: ({ isActive }) => `flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${isActive ? "text-[#6dd3ff] bg-[#23242b]" : "text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"}`,
        children: [
          link.icon,
          link.name
        ]
      },
      link.name
    )) })
  ] });
}
function AppLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 p-6 overflow-y-auto", children })
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(AppLayout, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Stella Sora Library"
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const trekker = UNSAFE_withComponentProps(function Trekker() {
  return /* @__PURE__ */ jsx("h2", {
    children: "Trekker"
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: trekker
}, Symbol.toStringTag, { value: "Module" }));
const disc = UNSAFE_withComponentProps(function Disc2() {
  return /* @__PURE__ */ jsx("h2", {
    children: "Disc"
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: disc
}, Symbol.toStringTag, { value: "Module" }));
const guide = UNSAFE_withComponentProps(function Guide() {
  return /* @__PURE__ */ jsx("h2", {
    children: "Guide"
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: guide
}, Symbol.toStringTag, { value: "Module" }));
const tierlist = UNSAFE_withComponentProps(function TierList() {
  return /* @__PURE__ */ jsx("h2", {
    children: "Tier List"
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tierlist
}, Symbol.toStringTag, { value: "Module" }));
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsx("h2", {
    children: "About"
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/stella-sora-libraryassets/entry.client-N6LqzHTl.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/stella-sora-libraryassets/root-Clw5fQC-.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": ["/stella-sora-libraryassets/root-DYGl6bc9.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/home-MGBLojNk.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/trekker": { "id": "routes/trekker", "parentId": "root", "path": "trekker", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/trekker-DRe7NoWG.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/disc": { "id": "routes/disc", "parentId": "root", "path": "disc", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/disc-CThYotN8.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/guide": { "id": "routes/guide", "parentId": "root", "path": "guide", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/guide-Czb4KVnR.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/tierlist": { "id": "routes/tierlist", "parentId": "root", "path": "tier-list", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/tierlist-Dqhg9SSF.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/stella-sora-libraryassets/about-ZXOLOuRF.js", "imports": ["/stella-sora-libraryassets/chunk-OIYGIGL5-D7gniEBh.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/stella-sora-libraryassets/manifest-23d436a7.js", "version": "23d436a7", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/stella-sora-library";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/trekker": {
    id: "routes/trekker",
    parentId: "root",
    path: "trekker",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/disc": {
    id: "routes/disc",
    parentId: "root",
    path: "disc",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/guide": {
    id: "routes/guide",
    parentId: "root",
    path: "guide",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/tierlist": {
    id: "routes/tierlist",
    parentId: "root",
    path: "tier-list",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
