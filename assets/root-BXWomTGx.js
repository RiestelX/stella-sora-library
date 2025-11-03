import{a as c,p as e,L as d,q as p,w as h,t as m,M as f,v as u,S as x,x as y,y as g,O as b,i as j}from"./chunk-OIYGIGL5-CqnSy69x.js";import{c as r}from"./createLucideIcon-BiySaqhs.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],v=r("book-open",w);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],N=r("chart-column",k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],z=r("chevron-left",S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=r("chevron-right",L);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$=r("compass",M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],C=r("disc",E);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],I=r("info",R),B="/stella-sora-library/icons/game-icon.webp";function O(){const[t,o]=c.useState(!1),[i,a]=c.useState(!1);c.useEffect(()=>{const s=()=>{const n=window.innerWidth<768;a(n),o(n)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const l=[{name:"Trekker",to:"/trekker",icon:e.jsx($,{size:18})},{name:"Disc",to:"/disc",icon:e.jsx(C,{size:18})},{name:"Guide",to:"/guide",icon:e.jsx(v,{size:18})},{name:"Tier List",to:"/tier-list",icon:e.jsx(N,{size:18})},{name:"About",to:"/about",icon:e.jsx(I,{size:18})}];return e.jsxs("div",{className:"relative",children:[e.jsxs("aside",{className:`h-screen bg-[#18181d] text-gray-200 flex flex-col px-2 pt-5 transition-all duration-300
        ${t?"w-20":"w-60"}`,children:[e.jsxs(d,{to:"/",className:`flex items-center gap-3 border-b border-gray-700 pb-4 mb-4 hover:opacity-90 transition-opacity ${t?"justify-center":""}`,children:[e.jsx("img",{src:B,alt:"Stella Sora logo",className:"w-9 h-9 rounded-full object-cover"}),!t&&e.jsx("h1",{className:"text-lg font-semibold text-[#6dd3ff] whitespace-nowrap",children:"Stella Sora Library"})]}),e.jsx("nav",{className:"flex flex-col gap-2",children:l.map(s=>e.jsxs(p,{to:s.to,className:({isActive:n})=>`flex items-center gap-2 px-3 py-3 rounded-md text-[15px] font-medium transition-all duration-200 ${n?"text-[#6dd3ff] bg-[#23242b]":"text-gray-300 hover:text-[#6dd3ff] hover:bg-[#23242b]"} ${t?"justify-center":""}`,children:[s.icon,!t&&e.jsx("span",{children:s.name})]},s.name))})]}),e.jsx("button",{onClick:()=>o(!t),className:`absolute top-4.5 z-20 bg-[#23242b] hover:bg-[#2f3139]
          text-gray-300 hover:text-[#6dd3ff] p-2 rounded-full shadow-md border border-gray-700
          transition-all duration-300
          ${t?"left-20":"left-60"} -translate-x-1/2`,children:t?e.jsx(_,{size:22}):e.jsx(z,{size:22})})]})}function P({children:t}){return e.jsxs("div",{className:"flex h-screen overflow-hidden",children:[e.jsx(O,{}),e.jsx("main",{className:"flex-1 p-6 overflow-y-auto transition-all duration-300",children:t})]})}const q=()=>[{title:"Stella Sora Library"},{name:"description",content:"This is an application for Stella Sora enjoyers, created because no one has made one for this game"}],V=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"},{rel:"icon",type:"image/png",href:"/stella-sora-library/icons/game-icon.webp"}];function D({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(f,{}),e.jsx(u,{})]}),e.jsxs("body",{children:[t,e.jsx(x,{}),e.jsx(y,{})]})]})}const U=h(function(){const o=g(),[i,a]=c.useState(!1);return c.useEffect(()=>{if(typeof window>"u")return;const s=new URLSearchParams(window.location.search).get("redirect");if(s){const n=decodeURIComponent(s);window.history.replaceState(null,"","/stella-sora-library"+n),o(n,{replace:!0})}a(!0)},[o]),i?e.jsx(P,{children:e.jsx(b,{})}):null}),G=m(function({error:o}){let i="Oops!",a="An unexpected error occurred.",l;return j(o)&&(i=o.status===404?"404":"Error",a=o.status===404?"The requested page could not be found.":o.statusText||a),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:i}),e.jsx("p",{children:a}),l]})});export{G as ErrorBoundary,D as Layout,U as default,V as links,q as meta};
