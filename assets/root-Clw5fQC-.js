import{a as c,p as e,L as f,q as y,w as g,t as j,M as k,v as b,S as w,x as v,O as C,i as N}from"./chunk-OIYGIGL5-D7gniEBh.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase()),d=s=>{const t=A(s);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...s)=>s.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim(),_=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:n="",children:r,iconNode:m,...l},h)=>c.createElement("svg",{ref:h,...E,width:t,height:t,stroke:s,strokeWidth:a?Number(o)*24/Number(t):o,className:p("lucide",n),...!r&&!_(l)&&{"aria-hidden":"true"},...l},[...m.map(([u,x])=>c.createElement(u,x)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(s,t)=>{const o=c.forwardRef(({className:a,...n},r)=>c.createElement(M,{ref:r,iconNode:t,className:p(`lucide-${L(d(s))}`,`lucide-${s}`,a),...n}));return o.displayName=d(s),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$=i("book-open",S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],B=i("chart-column",z);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],R=i("compass",O);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],P=i("disc",I);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],D=i("info",T),V="/stella-sora-library/assets/game-icon-BtLOrND6.webp";function q(){const s=[{name:"Trekker",to:"/trekker",icon:e.jsx(R,{size:18})},{name:"Disc",to:"/disc",icon:e.jsx(P,{size:18})},{name:"Guide",to:"/guide",icon:e.jsx($,{size:18})},{name:"Tier List",to:"/tier-list",icon:e.jsx(B,{size:18})},{name:"About",to:"/about",icon:e.jsx(D,{size:18})}];return e.jsxs("aside",{className:"h-screen w-60 bg-[#18181d] text-gray-200 flex flex-col p-5",children:[e.jsxs(f,{to:"/",className:"flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity",children:[e.jsx("img",{src:V,alt:"Stella Sora logo",className:"w-9 h-9 rounded-full object-cover"}),e.jsx("h1",{className:"text-lg font-semibold text-[#6dd3ff]",children:"Stella Sora Library"})]}),e.jsx("nav",{className:"flex flex-col gap-2",children:s.map(t=>e.jsxs(y,{to:t.to,className:({isActive:o})=>`flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${o?"text-[#6dd3ff] bg-[#23242b]":"text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"}`,children:[t.icon,t.name]},t.name))})]})}function U({children:s}){return e.jsxs("div",{className:"flex h-screen",children:[e.jsx(q,{}),e.jsx("main",{className:"flex-1 p-6 overflow-y-auto",children:s})]})}const Z=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function G({children:s}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(k,{}),e.jsx(b,{})]}),e.jsxs("body",{children:[s,e.jsx(w,{}),e.jsx(v,{})]})]})}const K=g(function(){return e.jsx(U,{children:e.jsx(C,{})})}),F=j(function({error:t}){let o="Oops!",a="An unexpected error occurred.",n;return N(t)&&(o=t.status===404?"404":"Error",a=t.status===404?"The requested page could not be found.":t.statusText||a),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:o}),e.jsx("p",{children:a}),n]})});export{F as ErrorBoundary,G as Layout,K as default,Z as links};
