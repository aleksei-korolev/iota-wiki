"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,d=p["".concat(s,".").concat(m)]||p[m]||l[m]||o;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={description:"Reference guides are technical descriptions of the project.",image:"/img/libraries/messages_in_tangle.svg",keywords:["reference","API"]},c="Reference",a={unversionedId:"contribute-to-wiki/reference/structure/reference",id:"contribute-to-wiki/reference/structure/reference",title:"Reference",description:"Reference guides are technical descriptions of the project.",source:"@site/next/community/contribute-to-wiki/reference/structure/reference.md",sourceDirName:"contribute-to-wiki/reference/structure",slug:"/contribute-to-wiki/reference/structure/reference",permalink:"/next/community/contribute-to-wiki/reference/structure/reference",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/community/contribute-to-wiki/reference/structure/reference.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{description:"Reference guides are technical descriptions of the project.",image:"/img/libraries/messages_in_tangle.svg",keywords:["reference","API"]},sidebar:"learn",previous:{title:"Explanations",permalink:"/next/community/contribute-to-wiki/reference/structure/explanations"}},s={},u=[],f={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reference"},"Reference"),(0,i.kt)("p",null,"You should use ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/reference/"},"reference")," files to provide the schematics to your project. More likely\nthan not, you should probably look into generating these files from the codebase as this folder usually houses API\nreferences, and software specifications."))}l.isMDXComponent=!0}}]);