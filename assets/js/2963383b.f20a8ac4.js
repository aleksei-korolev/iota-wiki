"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25533],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),y=r,c=m["".concat(d,".").concat(y)]||m[y]||s[y]||i;return a?n.createElement(c,l(l({ref:e},u),{},{components:a})):n.createElement(c,l({ref:e},u))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77679:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"libraries/java/api/IndexationPayload",id:"libraries/java/api/IndexationPayload",title:"IndexationPayload",description:"fromBytes(index, data): IndexationPayload",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/IndexationPayload.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/IndexationPayload",permalink:"/iota.rs/libraries/java/api/IndexationPayload",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/IndexationPayload.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"fromBytes(index, data): IndexationPayload",id:"frombytesindex-data-indexationpayload",level:3},{value:"fromStrings(index, data): IndexationPayload",id:"fromstringsindex-data-indexationpayload",level:3},{value:"index(): byte[]",id:"index-byte",level:3},{value:"indexString(): String",id:"indexstring-string",level:3},{value:"data(): byte[]",id:"data-byte",level:3},{value:"dataString(): String",id:"datastring-string",level:3}],u={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"frombytesindex-data-indexationpayload"},"fromBytes(index, data): ",(0,r.kt)("a",{parentName:"h3",href:"#indexationpayload"},"IndexationPayload")),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The data linked ot this index")))),(0,r.kt)("h3",{id:"fromstringsindex-data-indexationpayload"},"fromStrings(index, data): ",(0,r.kt)("a",{parentName:"h3",href:"#indexationpayload"},"IndexationPayload")),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," from strings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The data linked ot this index")))),(0,r.kt)("h3",{id:"index-byte"},"index(): byte[]"),(0,r.kt)("p",null,"Returns the index of an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,r.kt)("h3",{id:"indexstring-string"},"indexString(): String"),(0,r.kt)("p",null,"Returns the index of an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,r.kt)("h3",{id:"data-byte"},"data(): byte[]"),(0,r.kt)("p",null,"Returns the data of an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,r.kt)("h3",{id:"datastring-string"},"dataString(): String"),(0,r.kt)("p",null,"Returns the data of an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."))}s.isMDXComponent=!0}}]);