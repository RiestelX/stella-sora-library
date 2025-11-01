import{p as e,L as d,q as p,w as h,t as m,M as x,v as u,S as f,x as y,y as g,a as l,O as j,i as b}from"./chunk-OIYGIGL5-fBb4dIck.js";import{c as n}from"./createLucideIcon-DkcX5M8l.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],w=n("book-open",k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],N=n("chart-column",v);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],L=n("compass",S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],_=n("disc",M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],E=n("info",z),R="/stella-sora-library/icons/game-icon.webp";function B(){const s=[{name:"Trekker",to:"/trekker",icon:e.jsx(L,{size:18})},{name:"Disc",to:"/disc",icon:e.jsx(_,{size:18})},{name:"Guide",to:"/guide",icon:e.jsx(w,{size:18})},{name:"Tier List",to:"/tier-list",icon:e.jsx(N,{size:18})},{name:"About",to:"/about",icon:e.jsx(E,{size:18})}];return e.jsxs("aside",{className:"h-screen w-60 bg-[#18181d] text-gray-200 flex flex-col p-5",children:[e.jsxs(d,{to:"/",className:"flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity",children:[e.jsx("img",{src:R,alt:"Stella Sora logo",className:"w-9 h-9 rounded-full object-cover"}),e.jsx("h1",{className:"text-lg font-semibold text-[#6dd3ff]",children:"Stella Sora Library"})]}),e.jsx("nav",{className:"flex flex-col gap-2",children:s.map(t=>e.jsxs(p,{to:t.to,className:({isActive:o})=>`flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${o?"text-[#6dd3ff] bg-[#23242b]":"text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"}`,children:[t.icon,t.name]},t.name))})]})}function C({children:s}){return e.jsxs("div",{className:"flex h-screen",children:[e.jsx(B,{}),e.jsx("main",{className:"flex-1 p-6 overflow-y-auto",children:s})]})}const A=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function I({children:s}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(x,{}),e.jsx(u,{})]}),e.jsxs("body",{children:[s,e.jsx(f,{}),e.jsx(y,{})]})]})}const P=h(function(){const t=g(),[o,a]=l.useState(!1);return l.useEffect(()=>{if(typeof window>"u")return;const c=new URLSearchParams(window.location.search).get("redirect");if(c){const i=decodeURIComponent(c);window.history.replaceState(null,"","/stella-sora-library"+i),t(i,{replace:!0})}a(!0)},[t]),o?e.jsx(C,{children:e.jsx(j,{})}):null}),T=m(function({error:t}){let o="Oops!",a="An unexpected error occurred.",r;return b(t)&&(o=t.status===404?"404":"Error",a=t.status===404?"The requested page could not be found.":t.statusText||a),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:o}),e.jsx("p",{children:a}),r]})});export{T as ErrorBoundary,I as Layout,P as default,A as links};
