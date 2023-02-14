"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69405],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),l=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:e},p),{},{components:n})):o.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93475:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={description:"Learn how to create user-defined native tokens, also known as Digital Assets, with IOTA's Stardust protocol in the Shimmer network using iota.js.",image:"/img/client_banner.png",keywords:["tutorial","UTXO","native token","token","foundry","digital","asset","mint","melt","shimmer","ledger","outputs","inputs"]},i="Stardust for iota.js: Digital Assets",s={unversionedId:"tutorials/native-token-transactions/introduction",id:"tutorials/native-token-transactions/introduction",title:"Stardust for iota.js: Digital Assets",description:"Learn how to create user-defined native tokens, also known as Digital Assets, with IOTA's Stardust protocol in the Shimmer network using iota.js.",source:"@site/next/external/iota.js/documentation/docs/tutorials/native-token-transactions/01-introduction.md",sourceDirName:"tutorials/native-token-transactions",slug:"/tutorials/native-token-transactions/introduction",permalink:"/next/iotajs/tutorials/native-token-transactions/introduction",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/next/external/iota.js/documentation/docs/tutorials/native-token-transactions/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to create user-defined native tokens, also known as Digital Assets, with IOTA's Stardust protocol in the Shimmer network using iota.js.",image:"/img/client_banner.png",keywords:["tutorial","UTXO","native token","token","foundry","digital","asset","mint","melt","shimmer","ledger","outputs","inputs"]},sidebar:"docs",previous:{title:"Create an Alias Transaction",permalink:"/next/iotajs/tutorials/alias-transactions/alias-transaction"},next:{title:"Prepare Your Development Environment",permalink:"/next/iotajs/tutorials/native-token-transactions/prepare-the-dev-env"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Costs and Deposits",id:"storage-costs-and-deposits",level:2}],p={toc:l};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stardust-for-iotajs-digital-assets"},"Stardust for iota.js: Digital Assets"),(0,a.kt)("p",null,"This tutorial will show you how to user-defined native tokens, also known as ",(0,a.kt)("strong",{parentName:"p"},"Digital Assets"),", with IOTA's Stardust protocol in the Shimmer network using iota.js"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Starting from ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/welcome"},"Chrysalis"),", IOTA is\na ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/reference/details#unspent-transaction-output-utxo"},"UTXO-based (Unspent Transaction Output)"),"\nLedger. Each UTXO, also known as ",(0,a.kt)("strong",{parentName:"p"},"output"),", has an associated number of tokens, protocol-defined Tokens (SMR) and, optionally, user-defined native tokens) that determines its value.\nThus, the permanent data on the ledger is composed of a set of records (",(0,a.kt)("em",{parentName:"p"},"Outputs"),") that can be unlocked by the owner of\nits associated address, i.e., the one who knows the address' private key."),(0,a.kt)("p",null,"There are different ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/learn/outputs"},"Output types")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/welcome"},"Stardust Protocol"),". This tutorial will focus on\noutputs that involve user-defined ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/foundry/"},"native tokens"),", a.k.a digital assets. The tutorial will also use ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/alias/"},"Alias")," and ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/learn/outputs/#foundry-output"},"Foundry")," Outputs."),(0,a.kt)("admonition",{title:"Foundries",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("em",{parentName:"p"},"Foundry Output")," is an Output that controls the supply of user-defined, custom tokens, also known as  ",(0,a.kt)("em",{parentName:"p"},"native tokens"),".")),(0,a.kt)("p",null,"Last but not least, you will learn how to define ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/rethink_utxo/"},"UTXOs")," to transfer native tokens among addresses."),(0,a.kt)("admonition",{title:"NFTs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to mint Non-Fungible Tokens (NFTs), you can check out this ",(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/how_tos/mint_nft"},"how-to guide"),".")),(0,a.kt)("h2",{id:"storage-costs-and-deposits"},"Storage Costs and Deposits"),(0,a.kt)("p",null,"You need to take into account that both Alias and Foundry outputs need to be stored by ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/hornet/welcome"},"Hornet Nodes"),", so there is a ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/iotajs/tutorials/value-transactions/introduction/#storage-costs-and-deposits"},"storage cost")," as with any UTXO."))}d.isMDXComponent=!0}}]);