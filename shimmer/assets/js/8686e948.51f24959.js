"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"Prepare a development environment to run the alias transactions in iota.js tutorial.",image:"/img/client_banner.png",keywords:["tutorial","Node.js 16","auxiliary library","proof of work","pow","shimmer","testnet node"]},i="Prepare Your Development Environment",s={unversionedId:"tutorials/alias-transactions/prepare-the-dev-env",id:"tutorials/alias-transactions/prepare-the-dev-env",title:"Prepare Your Development Environment",description:"Prepare a development environment to run the alias transactions in iota.js tutorial.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/alias-transactions/02-prepare-the-dev-env.md",sourceDirName:"tutorials/alias-transactions",slug:"/tutorials/alias-transactions/prepare-the-dev-env",permalink:"/shimmer/iotajs/tutorials/alias-transactions/prepare-the-dev-env",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/tutorials/alias-transactions/02-prepare-the-dev-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Prepare a development environment to run the alias transactions in iota.js tutorial.",image:"/img/client_banner.png",keywords:["tutorial","Node.js 16","auxiliary library","proof of work","pow","shimmer","testnet node"]},sidebar:"docs",previous:{title:"Stardust for iota.js: Alias Transactions",permalink:"/shimmer/iotajs/tutorials/alias-transactions/introduction"},next:{title:"Mint a New Alias Address",permalink:"/shimmer/iotajs/tutorials/alias-transactions/mint-new-alias"}},l={},p=[{value:"(optional) Download the Code",id:"optional-download-the-code",level:2},{value:"Available Commands",id:"available-commands",level:3},{value:"Mint Alias Output",id:"mint-alias-output",level:4},{value:"Transition Alias Output",id:"transition-alias-output",level:4},{value:"Create Your package.json File",id:"create-your-packagejson-file",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,r.kt)("p",null,"To run the code in this tutorial, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v16.16.0/"},"Node.js 16"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/iota.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/iota.js"))," library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.js")," auxiliary libraries:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/crypto.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/crypto.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/util.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/util.js")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/pow-neon.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/pow-neon.js"))," to run Proof of Work (PoW). Alternatively,\nyou can spin up your own node to run the PoW remotely."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access to a Stardust Node (Hornet 2.0.0). You can use the Shimmer testnet Nodes\nat ",(0,r.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"https://api.testnet.shimmer.network"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Optional) A TypeScript compiler and related packages"))),(0,r.kt)("h2",{id:"optional-download-the-code"},"(optional) Download the Code"),(0,r.kt)("p",null,"You\ncan ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples/shimmer-alias-transaction-tutorial"},"download the tutorials codebase"),"\nto follow while you read the next sections."),(0,r.kt)("admonition",{title:"Running Code Examples",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you plan on using the provided code example, please read the article ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/iotajs/how_tos/run_how_tos"},"How To Run Code Examples"),".")),(0,r.kt)("admonition",{title:"Shimmer Addresses and Outputs",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The tutorial's codebase uses several predefined Shimmer addresses and outputs. If you are going to use other addresses, you will need to update the code accordingly. Likewise, the tutorial codebase assumes a particular state of the addresses and outputs. Before executing the code, please ensure your addresses and outputs are in the expected state.")),(0,r.kt)("h3",{id:"available-commands"},"Available Commands"),(0,r.kt)("h4",{id:"mint-alias-output"},"Mint Alias Output"),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint-new-alias")," script by running the following command from the example's directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run mint <outputID>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Where")," ",(0,r.kt)("inlineCode",{parentName:"p"},"outputID")," is the ID of an Output that has enough funds to cover the storage deposit of your newly minted Alias. "),(0,r.kt)("h4",{id:"transition-alias-output"},"Transition Alias Output"),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"alias-transaction")," script by running the following command from the example's directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run alias-transaction <AliasID>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Where")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AliasID")," is the Alias ID you want to transact with so that it transitions to a new state. "),(0,r.kt)("h2",{id:"create-your-packagejson-file"},"Create Your package.json File"),(0,r.kt)("p",null,"You can create your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file from the example below and place it in your projects base directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "tutorial-alias",\n  "version": "1.0.0",\n  "scripts": {\n    "dist": "tsc",\n    "mint": "node dist/mint-new-alias",\n    "alias-transaction": "node dist/alias-transaction"\n  },\n  "dependencies": {\n    "@iota/crypto.js": "2.0.0-rc.1",\n    "@iota/iota.js": "2.0.0-rc.2",\n    "@iota/util.js": "2.0.0-rc.1",\n    "@iota/pow-neon.js": "2.0.0-rc.2"\n  },\n  "devDependencies": {\n    "typescript": "^4.4.3",\n    "@types/node": "18.7.23"\n  }\n}\n')),(0,r.kt)("p",null,"After you have created the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, you can install all the necessary dependencies by running the following\ncommand from the same directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you are getting any errors during the installation process please make sure your system is\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v16.16.0/"},"Node.js 16"),". You can check your node version by running the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")))}c.isMDXComponent=!0}}]);