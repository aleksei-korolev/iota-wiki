"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,y=c["".concat(d,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"libraries/java/api/ReceiptPayload",id:"libraries/java/api/ReceiptPayload",title:"ReceiptPayload",description:"from(migrated_at, last, funds, transaction): ReceiptPayload",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/ReceiptPayload.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/ReceiptPayload",permalink:"/iota.rs/libraries/java/api/ReceiptPayload",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/ReceiptPayload.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"from(migrated_at, last, funds, transaction): ReceiptPayload",id:"frommigrated_at-last-funds-transaction-receiptpayload",level:3},{value:"migratedAt(): long",id:"migratedat-long",level:3},{value:"last(): boolean",id:"last-boolean",level:3},{value:"funds(): MigratedFundsEntry[]",id:"funds-migratedfundsentry",level:3},{value:"transaction(): TreasuryPayload",id:"transaction-treasurypayload",level:3},{value:"amount(): long",id:"amount-long",level:3}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"frommigrated_at-last-funds-transaction-receiptpayload"},"from(migrated_at, last, funds, transaction): ",(0,r.kt)("a",{parentName:"h3",href:"#receiptpayload"},"ReceiptPayload")),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migrated_at"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"funds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#migratedfundsentry"},"MigratedFundsEntry[]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messagepayload"},"MessagePayload")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"migratedat-long"},"migratedAt(): long"),(0,r.kt)("p",null,"Returns the milestone index at which the funds of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload")," were migrated at in the legacy network."),(0,r.kt)("h3",{id:"last-boolean"},"last(): boolean"),(0,r.kt)("p",null,"Returns whether a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload")," is the final one for a given migrated at index."),(0,r.kt)("h3",{id:"funds-migratedfundsentry"},"funds(): ",(0,r.kt)("a",{parentName:"h3",href:"#migratedfundsentry"},"MigratedFundsEntry[]")),(0,r.kt)("p",null,"The funds which were migrated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload"),"."),(0,r.kt)("h3",{id:"transaction-treasurypayload"},"transaction(): ",(0,r.kt)("a",{parentName:"h3",href:"#treasurypayload"},"TreasuryPayload")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TreasuryTransaction")," used to fund the funds of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload"),"."),(0,r.kt)("h3",{id:"amount-long"},"amount(): long"),(0,r.kt)("p",null,"Returns the sum of all ",(0,r.kt)("inlineCode",{parentName:"p"},"MigratedFundsEntry")," items within a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptPayload"),"."))}s.isMDXComponent=!0}}]);