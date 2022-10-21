"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",image:"/img/logo/wallet_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","getting started"]},o="Getting Started with Node.js",l={unversionedId:"getting_started/nodejs",id:"getting_started/nodejs",title:"Getting Started with Node.js",description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",source:"@site/iota/external/wallet.rs/production/documentation/docs/getting_started/nodejs.md",sourceDirName:"getting_started",slug:"/getting_started/nodejs",permalink:"/wallet.rs/getting_started/nodejs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/getting_started/nodejs.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",image:"/img/logo/wallet_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","getting started"]},sidebar:"docs",previous:{title:"Getting Started with Rust",permalink:"/wallet.rs/getting_started/rust"},next:{title:"Getting Started with Python",permalink:"/wallet.rs/getting_started/python"}},s={},p=[{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"IOTA Wallet Node.js binding")," is published on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can find a guide for exchanges and the most common use cases in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/exchange"},"Chrysalis documentation"),", which is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js"),". ")),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code. For reference, see our ",(0,a.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The package is published in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"npmjs"),". We also use ",(0,a.kt)("em",{parentName:"p"},"dotenv")," for password management in the examples."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To install with NPM, you can run the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @iota/wallet dotenv\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To install with yarn, you can run the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install @iota/wallet dotenv\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You can find more information on using the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library's node.js binding in the ",(0,a.kt)("a",{parentName:"p",href:"/wallet.rs/examples/nodejs"},"examples section"),"."))}c.isMDXComponent=!0}}]);