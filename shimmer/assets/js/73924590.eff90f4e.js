"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},a="Interface: SingleNodeClientOptions",l={unversionedId:"references/client/interfaces/SingleNodeClientOptions",id:"references/client/interfaces/SingleNodeClientOptions",title:"Interface: SingleNodeClientOptions",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/SingleNodeClientOptions.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/SingleNodeClientOptions",permalink:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/SingleNodeClientOptions.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IUTXOInput",permalink:"/shimmer/iotajs/references/client/interfaces/IUTXOInput"},next:{title:"Class: ArrayHelper",permalink:"/shimmer/iotajs/references/crypto/classes/ArrayHelper"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"basePath",id:"basepath",level:3},{value:"powProvider",id:"powprovider",level:3},{value:"protocolVersion",id:"protocolversion",level:3},{value:"timeout",id:"timeout",level:3},{value:"userName",id:"username",level:3},{value:"password",id:"password",level:3},{value:"headers",id:"headers",level:3},{value:"Index signature",id:"index-signature",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-singlenodeclientoptions"},"Interface: SingleNodeClientOptions"),(0,i.kt)("p",null,"Options used when constructing SingleNodeClient."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#basepath"},"basePath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#powprovider"},"powProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#protocolversion"},"protocolVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#timeout"},"timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#username"},"userName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#password"},"password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions#headers"},"headers"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"basepath"},"basePath"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"basePath"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Base path for API location, defaults to /api/."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"powprovider"},"powProvider"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"powProvider"),": ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IPowProvider"},(0,i.kt)("inlineCode",{parentName:"a"},"IPowProvider"))),(0,i.kt)("p",null,"Use a custom pow provider instead of the one on the node."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"protocolversion"},"protocolVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"protocolVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The protocol version for blocks."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timeout"},"timeout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"timeout"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Timeout for API requests."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"username"},"userName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"userName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Username for the endpoint."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Password for the endpoint."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"headers"},"headers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"headers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Additional headers to include in the requests."),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[id: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0}}]);