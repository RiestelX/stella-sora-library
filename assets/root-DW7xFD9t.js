import{a as n,p as t,L as f,q as y,w as g,t as j,M as w,v as k,S as b,x as v,O as C,i as N}from"./chunk-OIYGIGL5-D7gniEBh.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),d=s=>{const e=A(s);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...s)=>s.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim(),E=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=n.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:c="",children:r,iconNode:m,...l},h)=>n.createElement("svg",{ref:h,...S,width:e,height:e,stroke:s,strokeWidth:a?Number(o)*24/Number(e):o,className:p("lucide",c),...!r&&!E(l)&&{"aria-hidden":"true"},...l},[...m.map(([u,x])=>n.createElement(u,x)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(s,e)=>{const o=n.forwardRef(({className:a,...c},r)=>n.createElement(_,{ref:r,iconNode:e,className:p(`lucide-${L(d(s))}`,`lucide-${s}`,a),...c}));return o.displayName=d(s),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$=i("book-open",M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],R=i("chart-column",z);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],O=i("compass",B);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],I=i("disc",P);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],U=i("info",T),D="/stella-sora-library/assets/game-icon-BtLOrND6.webp";function V(){const s=[{name:"Trekker",to:"/trekker",icon:t.jsx(O,{size:18})},{name:"Disc",to:"/disc",icon:t.jsx(I,{size:18})},{name:"Guide",to:"/guide",icon:t.jsx($,{size:18})},{name:"Tier List",to:"/tier-list",icon:t.jsx(R,{size:18})},{name:"About",to:"/about",icon:t.jsx(U,{size:18})}];return t.jsxs("aside",{className:"h-screen w-60 bg-[#18181d] text-gray-200 flex flex-col p-5",children:[t.jsxs(f,{to:"/",className:"flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity",children:[t.jsx("img",{src:D,alt:"Stella Sora logo",className:"w-9 h-9 rounded-full object-cover"}),t.jsx("h1",{className:"text-lg font-semibold text-[#6dd3ff]",children:"Stella Sora Library"})]}),t.jsx("nav",{className:"flex flex-col gap-2",children:s.map(e=>t.jsxs(y,{to:e.to,className:({isActive:o})=>`flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${o?"text-[#6dd3ff] bg-[#23242b]":"text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"}`,children:[e.icon,e.name]},e.name))})]})}function q({children:s}){return t.jsxs("div",{className:"flex h-screen",children:[t.jsx(V,{}),t.jsx("main",{className:"flex-1 p-6 overflow-y-auto",children:s})]})}const Z=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function G({children:s}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(k,{})]}),t.jsxs("body",{children:[s,t.jsx(b,{}),t.jsx(v,{})]})]})}const K=g(function(){return n.useEffect(()=>{if(typeof window>"u")return;const o=new URLSearchParams(window.location.search).get("redirect");if(o){const a=decodeURIComponent(o);window.history.replaceState(null,"","/stella-sora-library"+a)}},[]),t.jsx(q,{children:t.jsx(C,{})})}),F=j(function({error:e}){let o="Oops!",a="An unexpected error occurred.",c;return N(e)&&(o=e.status===404?"404":"Error",a=e.status===404?"The requested page could not be found.":e.statusText||a),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:o}),t.jsx("p",{children:a}),c]})});export{F as ErrorBoundary,G as Layout,K as default,Z as links};
