"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},o="The `evm` Contract",l={unversionedId:"guide/core_concepts/core_contracts/evm",id:"guide/core_concepts/core_contracts/evm",title:"The `evm` Contract",description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",source:"@site/next/external/wasp/documentation/docs/guide/core_concepts/core_contracts/evm.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/evm",permalink:"/next/smart-contracts/guide/core_concepts/core_contracts/evm",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/core_concepts/core_contracts/evm.md",tags:[],version:"current",frontMatter:{description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `errors` Contract",permalink:"/next/smart-contracts/guide/core_concepts/core_contracts/errors"},next:{title:"How Accounts Work",permalink:"/next/smart-contracts/guide/core_concepts/accounts/how-accounts-work"}},c={},p=[{value:"Entry Points",id:"entry-points",level:2},{value:"<code>init()</code>",id:"init",level:3},{value:"<code>registerERC20NativeToken</code>",id:"registererc20nativetoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Schemas",id:"schemas",level:2},{value:"<code>GenesisAlloc</code>",id:"genesisalloc",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-evm-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h1"},"evm")," Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," contract is one of the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts chain."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.\nIt also includes the implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/evm/magic"},"ISC Magic contract"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about how ISC supports EVM contracts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/evm/introduction"},"EVM")," section.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"Most entry points of the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract are meant to be accessed through the JSON-RPC service provided\nautomatically by the Wasp node so that the end users can use standard EVM tools like ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),".\nWe only list the entry points not exposed through the JSON-RPC interface in this document."),(0,r.kt)("h3",{id:"init"},(0,r.kt)("inlineCode",{parentName:"h3"},"init()")),(0,r.kt)("p",null,"Called automatically when the ISC is deployed."),(0,r.kt)("p",null,"Some parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," contract can be specified by passing them to the\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/root#init"},(0,r.kt)("inlineCode",{parentName:"a"},"root")," contract ",(0,r.kt)("inlineCode",{parentName:"a"},"init")," entry point"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmg")," (optional ",(0,r.kt)("a",{parentName:"p",href:"#genesisalloc"},(0,r.kt)("inlineCode",{parentName:"a"},"GenesisAlloc")),"): The genesis allocation. The balance of all accounts must be 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmgl")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64")," - default: 15000000): The EVM block gas limit (EVM gas units)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmbk")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"int32")," - default: keep all): Amount of EVM blocks to keep in the state.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmchid")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"uint16")," - default: 1074): EVM chain iD"),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended and can be a security risk. For serious usage, register a unique\nChain ID on ",(0,r.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default. ",(0,r.kt)("strong",{parentName:"p"},"It is not possible to change\nthe EVM chain ID after deployment.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmw")," (optional ",(0,r.kt)("a",{parentName:"p",href:"#gasratio"},(0,r.kt)("inlineCode",{parentName:"a"},"GasRatio"))," - default: ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1"),"): The ISC to EVM gas ratio."))),(0,r.kt)("h3",{id:"registererc20nativetoken"},(0,r.kt)("inlineCode",{parentName:"h3"},"registerERC20NativeToken")),(0,r.kt)("p",null,"Registers an ERC20 contract to act as a proxy for the native tokens, at address\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x107402xxxxxxxx00000000000000000000000000"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxxxxxx")," is the\nlittle-endian encoding of the foundry serial number."),(0,r.kt)("p",null,"Only the foundry owner can call this endpoint."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fs")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"): The foundry serial number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The token name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"t")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The ticker symbol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint8"),"): The token decimals")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"genesisalloc"},(0,r.kt)("inlineCode",{parentName:"h3"},"GenesisAlloc")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GenesisAlloc")," is encoded as the concatenation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amount of accounts ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," times:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ethereum address (",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size)."),(0,r.kt)("li",{parentName:"ul"},"Account code (",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size)."),(0,r.kt)("li",{parentName:"ul"},"Amount of storage key/value pairs ",(0,r.kt)("inlineCode",{parentName:"li"},"m"),"(",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," times:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Key (",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size)."),(0,r.kt)("li",{parentName:"ul"},"Value(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size)."))),(0,r.kt)("li",{parentName:"ul"},"Account balance (must be 0)(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size)."),(0,r.kt)("li",{parentName:"ul"},"Account nonce  (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Account private key (may be used for tests)(",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),").")))))}m.isMDXComponent=!0}}]);