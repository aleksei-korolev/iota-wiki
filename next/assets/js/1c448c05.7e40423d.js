"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","TestNet"]},o="Testnet",s={unversionedId:"guide/chains_and_nodes/testnet",id:"guide/chains_and_nodes/testnet",title:"Testnet",description:"A public testnet for developers to try out smart contracts",source:"@site/next/external/wasp/documentation/docs/guide/chains_and_nodes/testnet.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/testnet",permalink:"/next/smart-contracts/guide/chains_and_nodes/testnet",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/chains_and_nodes/testnet.md",tags:[],version:"current",frontMatter:{description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","TestNet"]},sidebar:"tutorialSidebar",previous:{title:"Chain Management",permalink:"/next/smart-contracts/guide/chains_and_nodes/chain-management"},next:{title:"intro",permalink:"/next/smart-contracts/guide/wasm_vm/intro"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Configuring <code>wasp-cli</code>",id:"configuring-wasp-cli",level:2},{value:"Initialize <code>wasp-cli</code>",id:"initialize-wasp-cli",level:3},{value:"Configure for the test chain",id:"configure-for-the-test-chain",level:3},{value:"Request Funds",id:"request-funds",level:3},{value:"Interact with EVM",id:"interact-with-evm",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,"The testnet is deployed for the community to use for testing and interacting with smart contracts."),(0,r.kt)("admonition",{title:"unscheduled network resets",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While we are in active development we might update and reset this chain at any time without prior notice; Keep this in mind while testing.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This testnet is deployed on the Shimmer Beta Network (testnet). Multiple committee nodes do the work for\nthe chain and multiple access nodes are exposed via the endpoints listed below. We do throttle the endpoints to prevent\noverloading the testnet because we are looking for functionality testing more than stress testing."),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"You can access the testnet via the following endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sc.testnet.shimmer.network"},"https://sc.testnet.shimmer.network")," ",(0,r.kt)("strong",{parentName:"li"},"Username"),": wasp ",(0,r.kt)("strong",{parentName:"li"},"Password"),": wasp",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Wasp dashboard to explore the node configuration and view peering/chain configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.sc.testnet.shimmer.network"},"https://api.sc.testnet.shimmer.network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Wasp api to deploy and interact with smart contracts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.sc.testnet.shimmer.network/info"},"https://api.sc.testnet.shimmer.network/info"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Information about the Wasp access node"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org/doc"},"https://api.wasp.sc.iota.org/doc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API reference for the Wasp API"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.sc.testnet.shimmer.network/evm/jsonrpc"},"https://api.sc.testnet.shimmer.network/evm/jsonrpc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The URL to interact with the Ethereum Virtual Machine on our testnet"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"https://api.testnet.shimmer.network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The public API exposed by Hornet for the Shimmer Beta network (testnet)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://faucet.testnet.shimmer.network"},"https://faucet.testnet.shimmer.network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The faucet for the Shimmer Beta network"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sc.testnet.shimmer.network/metrics"},"https://sc.testnet.shimmer.network/metrics"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"System metrics")))),(0,r.kt)("h2",{id:"configuring-wasp-cli"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h2"},"wasp-cli")),(0,r.kt)("h3",{id:"initialize-wasp-cli"},"Initialize ",(0,r.kt)("inlineCode",{parentName:"h3"},"wasp-cli")),(0,r.kt)("p",null,"You will need to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," to create a seed that will be used to generate addresses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init\n")),(0,r.kt)("h3",{id:"configure-for-the-test-chain"},"Configure for the test chain"),(0,r.kt)("p",null,"Next, you should tell ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," how to reach our test chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set l1.apiaddress https://api.testnet.shimmer.network\nwasp-cli set l1.faucetaddress https://faucet.testnet.shimmer.network\nwasp-cli chain add testchain rms1prr4r7az8e46qhagz5atugjm6x0xrg27d84677e3lurg0s6s76jr59dw4ls\n")),(0,r.kt)("h3",{id:"request-funds"},"Request Funds"),(0,r.kt)("p",null,"To deploy a smart contract, you will need some funds. The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," tool makes this easy on our testnet. Run the\nfollowing command to request some funds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli request-funds\n")),(0,r.kt)("h2",{id:"interact-with-evm"},"Interact with EVM"),(0,r.kt)("p",null,"We have deployed an experimental EVM chain that you can interact with. To begin, add a custom network to Metamask with\nthe following configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.sc.testnet.shimmer.network/evm/jsonrpc"},"https://api.sc.testnet.shimmer.network/evm/jsonrpc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"1076")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The other values (network name and currency symbol) can be whatever value you like.")),(0,r.kt)("p",null,"We have a faucet for you to use directly with your EVM address which can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://toolkit.sc.testnet.shimmer.network/"},"https://toolkit.sc.testnet.shimmer.network/"),"\nWe also have a withdrawal interface to get any native assets deposited to a EVM chain back into your L1 address on the same link."))}m.isMDXComponent=!0}}]);