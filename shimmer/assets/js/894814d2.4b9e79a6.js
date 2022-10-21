"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={keywords:["Stardust","Shimmer","Upgrades","Unlock Condition","Output","Extended UTXO","Protocol Improvements","explanation"],description:"The new output unlock conditions make outputs configurable for conditional transfers.",image:"/img/logo/preview.png"},s="Output Unlock Conditions",a={unversionedId:"explanations/what_is_stardust/unlock_conditions",id:"explanations/what_is_stardust/unlock_conditions",title:"Output Unlock Conditions",description:"The new output unlock conditions make outputs configurable for conditional transfers.",source:"@site/shimmer/external/introduction-docs/docs/explanations/what_is_stardust/unlock_conditions.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/unlock_conditions",permalink:"/shimmer/introduction/explanations/what_is_stardust/unlock_conditions",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/what_is_stardust/unlock_conditions.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Unlock Condition","Output","Extended UTXO","Protocol Improvements","explanation"],description:"The new output unlock conditions make outputs configurable for conditional transfers.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Storage Deposit System",permalink:"/shimmer/introduction/explanations/what_is_stardust/storage_deposit"},next:{title:"Output Features",permalink:"/shimmer/introduction/explanations/what_is_stardust/output_features"}},u={},l=[{value:"Address",id:"address",level:2},{value:"Storage Deposit Return",id:"storage-deposit-return",level:2},{value:"Expiration",id:"expiration",level:2},{value:"Timelock",id:"timelock",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"output-unlock-conditions"},"Output Unlock Conditions"),(0,r.kt)("p",null,"As discussed ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/introduction/explanations/what_is_stardust/rethink_utxo"},"previously"),", the redesigned UTXO model allows for\nimplementing additional logic on transfers. Outputs, that are technically the results of a transfer, may define special\nunlocking logic. When these outputs are consumed in subsequent transfers they have to satisfy all unlock conditions that\nare defined on them."),(0,r.kt)("h2",{id:"address"},"Address"),(0,r.kt)("p",null,"Outputs are locked under addresses that are allowed to unlock them via a signatures. Chrysalis supports only this kind\nof output unlocking."),(0,r.kt)("h2",{id:"storage-deposit-return"},"Storage Deposit Return"),(0,r.kt)("p",null,"Due to the storage deposit rules, it is not possible to create an output with less than the minimum required storage\ndeposit funds. So how does one send such small amounts?"),(0,r.kt)("p",null,"The new storage deposit return unlock condition allows to specify a return amount that has to be refunded to the\nsender's account. Therefore, if one wants to send 1 token to someone but the minimum deposit is 10, they can send 11 tokens\nto the recipient and await 10 back. There is no cheating, the recipient has to send 10 tokens back if they wish to own\nthat 1 token."),(0,r.kt)("h2",{id:"expiration"},"Expiration"),(0,r.kt)("p",null,"In the previous example, what if the recipient never consumes the output? The sender's tokens are locked forever, even\nthough they are not in the possession of the recipient. A cautious sender would also define an Expiration Unlock Condition\non the output. As the name suggests, such outputs expire after a deadline has been met, meaning that the sender regains\nfull control of the tokens in the output."),(0,r.kt)("p",null,"Expiration is also an important feature for smart contracts, as one might decide to cancel an on-ledger smart contract\nrequest if it is not processed within a deadline."),(0,r.kt)("h2",{id:"timelock"},"Timelock"),(0,r.kt)("p",null,"Outputs may be timelocked, meaning no one can unlock them before a specific deadline is passed. With such a feature it\nbecomes possible to time smart contract requests in the future. An NFT auction organizer for example could prepare an\non-ledger smart contract request that closes the auction at a given date and time, transferring the to-be-sold NFT to\nthe highest bidder at that moment."))}d.isMDXComponent=!0}}]);