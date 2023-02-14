"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Interface: IMilestonePayload",o={unversionedId:"references/client/interfaces/IMilestonePayload",id:"references/client/interfaces/IMilestonePayload",title:"Interface: IMilestonePayload",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IMilestonePayload.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IMilestonePayload",permalink:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IMilestonePayload.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IMigratedFunds",permalink:"/shimmer/iotajs/references/client/interfaces/IMigratedFunds"},next:{title:"Interface: IMilestoneUtxoChangesResponse",permalink:"/shimmer/iotajs/references/client/interfaces/IMilestoneUtxoChangesResponse"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"index",id:"index",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"protocolVersion",id:"protocolversion",level:3},{value:"previousMilestoneId",id:"previousmilestoneid",level:3},{value:"parents",id:"parents",level:3},{value:"inclusionMerkleRoot",id:"inclusionmerkleroot",level:3},{value:"appliedMerkleRoot",id:"appliedmerkleroot",level:3},{value:"metadata",id:"metadata",level:3},{value:"options",id:"options",level:3},{value:"signatures",id:"signatures",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-imilestonepayload"},"Interface: IMilestonePayload"),(0,i.kt)("p",null,"Milestone payload."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ITypeBase")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"7"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IMilestonePayload"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#type"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#index"},"index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#timestamp"},"timestamp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#protocolversion"},"protocolVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#previousmilestoneid"},"previousMilestoneId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#parents"},"parents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#inclusionmerkleroot"},"inclusionMerkleRoot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#appliedmerkleroot"},"appliedMerkleRoot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#metadata"},"metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#options"},"options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#signatures"},"signatures"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"7")),(0,i.kt)("p",null,"The type of the object."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase"},"ITypeBase"),".",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase#type"},"type")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"index"},"index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The index name."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timestamp"},"timestamp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The timestamp of the milestone."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"protocolversion"},"protocolVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"protocolVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The protocol version."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"previousmilestoneid"},"previousMilestoneId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"previousMilestoneId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The id of the previous milestone."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parents"},"parents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"parents"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"The parents where this milestone attaches to."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inclusionmerkleroot"},"inclusionMerkleRoot"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inclusionMerkleRoot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The Merkle tree hash of all blocks confirmed by this milestone."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"appliedmerkleroot"},"appliedMerkleRoot"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"appliedMerkleRoot"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The Merkle tree hash of all blocks applied by this milestone."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"metadata"},"metadata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"metadata"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The metadata."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/api_ref#milestoneoptiontypes"},(0,i.kt)("inlineCode",{parentName:"a"},"MilestoneOptionTypes")),"[]"),(0,i.kt)("p",null,"The milestone options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signatures"},"signatures"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"signatures"),": ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IEd25519Signature"},(0,i.kt)("inlineCode",{parentName:"a"},"IEd25519Signature")),"[]"),(0,i.kt)("p",null,"The signatures."))}m.isMDXComponent=!0}}]);