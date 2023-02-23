"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Get started with the IOTA Wallet Library and choose your programming language.",image:"/img/logo/wallet_light.png",keywords:["rust","node.js","python","java","javascript","wallet","accounts"]},i="Getting Started",l={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Get started with the IOTA Wallet Library and choose your programming language.",source:"@site/shimmer/external/wallet.rs/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/shimmer/wallet.rs/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Get started with the IOTA Wallet Library and choose your programming language.",image:"/img/logo/wallet_light.png",keywords:["rust","node.js","python","java","javascript","wallet","accounts"]},sidebar:"docs",previous:{title:"Account Approaches",permalink:"/shimmer/wallet.rs/explanations/account_approaches"},next:{title:"Getting Started With Rust",permalink:"/shimmer/wallet.rs/getting_started/rust"}},s={},p=[{value:"Connect to the Testnet API",id:"connect-to-the-testnet-api",level:2},{value:"Explore the Network",id:"explore-the-network",level:2},{value:"Get Test Tokens",id:"get-test-tokens",level:2},{value:"Available Programming Languages",id:"available-programming-languages",level:2}],c={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"You can use this section to get your wallet up and running in\nthe ",(0,a.kt)("a",{parentName:"p",href:"#available-programming-languages"},"programming language of your choice"),",\n",(0,a.kt)("a",{parentName:"p",href:"#connect-to-the-testnet-api"},"connect to the testnet"),", ",(0,a.kt)("a",{parentName:"p",href:"#explore-the-network"},"explore the network"),",\nand ",(0,a.kt)("a",{parentName:"p",href:"#get-test-tokens"},"get test tokens")," to develop your application."),(0,a.kt)("h2",{id:"connect-to-the-testnet-api"},"Connect to the Testnet API"),(0,a.kt)("p",null,"We recommended that you start your interactions with Shimmer on a ",(0,a.kt)("em",{parentName:"p"},"testnet")," network. The ",(0,a.kt)("em",{parentName:"p"},"testnet")," will allow you to\nsafely get acquainted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, without the risk of losing any funds if you make a mistake along the\nway."),(0,a.kt)("p",null,"You can use this public load-balanced Shimmer Testnet API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://api.testnet.shimmer.network\n")),(0,a.kt)("h2",{id:"explore-the-network"},"Explore the Network"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"Shimmer Tangle Explorer")," to view transactions and data stored\nin the Tangle."),(0,a.kt)("h2",{id:"get-test-tokens"},"Get Test Tokens"),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens. You can get\nsome testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"Shimmer Faucet"),"."),(0,a.kt)("h2",{id:"available-programming-languages"},"Available Programming Languages"),(0,a.kt)("p",null,"The wallet.rs library is written in ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/getting_started/rust"},"Rust"),", and also has convenient bindings\nin ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/getting_started/nodejs"},"Node.js"),", ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/getting_started/java"},"Java")," and ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/getting_started/python"},"Python"),". Each of these languages has specific\ninstructions you will need to follow to use wallet.rs in your project."))}g.isMDXComponent=!0}}]);