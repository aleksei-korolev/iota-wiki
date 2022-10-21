"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"Learn how to run the iota.js client library's how tos and examples.",image:"/img/client_banner.png",keywords:["how to","example","run examples","run how tos"]},l="Run Code Examples",i={unversionedId:"how_tos/run_how_tos",id:"how_tos/run_how_tos",title:"Run Code Examples",description:"Learn how to run the iota.js client library's how tos and examples.",source:"@site/next/external/iota.js/documentation/docs/how_tos/run_how_tos.mdx",sourceDirName:"how_tos",slug:"/how_tos/run_how_tos",permalink:"/next/iotajs/how_tos/run_how_tos",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/how_tos/run_how_tos.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to run the iota.js client library's how tos and examples.",image:"/img/client_banner.png",keywords:["how to","example","run examples","run how tos"]},sidebar:"docs",previous:{title:"Getting Started With iota.js",permalink:"/next/iotajs/getting_started"},next:{title:"Connect to a Node",permalink:"/next/iotajs/how_tos/simple"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-code-examples"},"Run Code Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the project by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/iota.js.git\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Change directory into the project by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.js\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust"},(0,r.kt)("inlineCode",{parentName:"a"},"feat/stardust"))," branch by running the\nfollowing command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout feat/stardust\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install the packages dependencies by running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"The Iota package examples make use of the other ",(0,r.kt)("a",{parentName:"li",href:"../getting_started#additional-packages"},"packages")," included in this\nrepository. You can run the following commands to set up all of them:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dist-neon\nnpm run dist-all\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Change the directory to the desired how-to.  For instance, the following command will change into the\n",(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/how_tos/simple"},"How To Create a Simple Connection")," article:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/iota/examples/simple/\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"You can now run the example by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))}u.isMDXComponent=!0}}]);