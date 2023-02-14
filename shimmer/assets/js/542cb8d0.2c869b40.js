"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(r),k=a,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return r?n.createElement(c,l(l({ref:t},m),{},{components:r})):n.createElement(c,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Class: HexHelper",p={unversionedId:"references/util/classes/HexHelper",id:"references/util/classes/HexHelper",title:"Class: HexHelper",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/util/classes/HexHelper.md",sourceDirName:"references/util/classes",slug:"/references/util/classes/HexHelper",permalink:"/shimmer/iotajs/references/util/classes/HexHelper",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/references/util/classes/HexHelper.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: Converter",permalink:"/shimmer/iotajs/references/util/classes/Converter"},next:{title:"Class: RandomHelper",permalink:"/shimmer/iotajs/references/util/classes/RandomHelper"}},s={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties-1",level:2},{value:"BIG_INT_MAX_256_BIT",id:"big_int_max_256_bit",level:3},{value:"Methods",id:"methods-1",level:2},{value:"fromBigInt256",id:"frombigint256",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"toBigInt256",id:"tobigint256",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"stripPrefix",id:"stripprefix",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"addPrefix",id:"addprefix",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"hasPrefix",id:"hasprefix",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3}],m={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-hexhelper"},"Class: HexHelper"),(0,a.kt)("p",null,"Helper methods for hex conversions."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#big_int_max_256_bit"},"BIG","_","INT","_","MAX","_","256","_","BIT"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#frombigint256"},"fromBigInt256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#tobigint256"},"toBigInt256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#stripprefix"},"stripPrefix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#addprefix"},"addPrefix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#hasprefix"},"hasPrefix"))),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/HexHelper#constructor"},"constructor"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"big_int_max_256_bit"},"BIG","_","INT","_","MAX","_","256","_","BIT"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"BIG","_","INT","_","MAX","_","256","_","BIT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInteger")),(0,a.kt)("p",null,"Const defining the maximum value for a 256 bit int."),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"frombigint256"},"fromBigInt256"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fromBigInt256"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Convert the big int 256 bit to hex string."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BigInteger")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The big int value to convert.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The hex encoded big int."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tobigint256"},"toBigInt256"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"toBigInt256"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInteger")),(0,a.kt)("p",null,"Convert the hex string to a big int."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hex")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The hex value to convert.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BigInteger")),(0,a.kt)("p",null,"The big int."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stripprefix"},"stripPrefix"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"stripPrefix"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Strip the 0x prefix if it exists."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hex")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The hex value to strip.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The stripped hex without the prefix."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"addprefix"},"addPrefix"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"addPrefix"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Add the 0x prefix if it does not exist."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hex")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The hex value to add the prefix to.")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The hex with the prefix."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasprefix"},"hasPrefix"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"hasPrefix"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Does the hex string have the prefix."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hex")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The hex value to check for the prefix.")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"True if the hex string has the prefix."),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new HexHelper"),"()"))}d.isMDXComponent=!0}}]);