"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57862],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},23489:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={keywords:["Stardust","Shimmer","Upgrades","Dynamic POW","Proof-of-work","Congestion control","Protocol Improvements","explanation"],description:"Stardust prepares the protocol for the support of dynamic proof-of-work.",image:"/img/logo/preview.png"},a="Dynamic Proof of Work",s={unversionedId:"explanations/what_is_stardust/dynamic_pow",id:"explanations/what_is_stardust/dynamic_pow",title:"Dynamic Proof of Work",description:"Stardust prepares the protocol for the support of dynamic proof-of-work.",source:"@site/shimmer/external/introduction-docs/docs/explanations/what_is_stardust/dynamic_pow.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/dynamic_pow",permalink:"/shimmer/introduction/explanations/what_is_stardust/dynamic_pow",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/what_is_stardust/dynamic_pow.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Dynamic POW","Proof-of-work","Congestion control","Protocol Improvements","explanation"],description:"Stardust prepares the protocol for the support of dynamic proof-of-work.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Offloading Data Processing",permalink:"/shimmer/introduction/explanations/what_is_stardust/data_processing"},next:{title:"Stardust Ledger",permalink:"/shimmer/introduction/explanations/ledger/intro"}},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dynamic-proof-of-work"},"Dynamic Proof of Work"),(0,n.kt)("p",null,"Proof of Work (PoW) is currently employed in IOTA  for congestion control. Every block must include a small amount of\ncomputational work if it is to be considered valid. Note that, while in blockchain networks miners compete to solve the\ncryptographic puzzle of PoW first and hence wasting a huge amount of energy in the process, IOTA users who submit\nblocks to the network take part in a cooperative effort."),(0,n.kt)("p",null,"Chrysalis has a fixed PoW difficulty factor for a unit of data submitted to the network. Therefore, the actual\ncomplexity of the challenge for a block is dependent on its length only."),(0,n.kt)("p",null,"Stardust protocol design incorporates a dynamic PoW difficulty factor based on the congestion of the network. The added\nutility of the protocol upgrade could result in higher network activity. If this load reaches a certain threshold near\nthe limit of the network throughput capabilities, the protocol self-adjusts the PoW difficulty factor.\nWhen the load is reduced, the process reverses to lower the difficulty until the threshold is reached again."),(0,n.kt)("p",null,"This mechanism will be supported by the network after the first ever fluid protocol upgrade, meaning the feature will\nbe activated in the already running, live network without any downtime. The node software is being refactored to\nhandle many more of such future protocol upgrades."))}d.isMDXComponent=!0}}]);