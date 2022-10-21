"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13857],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),u=s(a),g=r,k=u["".concat(p,".").concat(g)]||u[g]||o[g]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39218:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={keywords:["data types","WasmLib","array","proxies","map","reference"],description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib versions of ISC-specific value data types.",image:"/img/logo/WASP_logo_dark.png"},i="WasmLib Data Types",m={unversionedId:"guide/wasm_vm/types",id:"guide/wasm_vm/types",title:"WasmLib Data Types",description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib versions of ISC-specific value data types.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/types.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/types",permalink:"/shimmer/smart-contracts/guide/wasm_vm/types",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/types.mdx",tags:[],version:"current",frontMatter:{keywords:["data types","WasmLib","array","proxies","map","reference"],description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib versions of ISC-specific value data types.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Data Access Proxies",permalink:"/shimmer/smart-contracts/guide/wasm_vm/proxies"},next:{title:"Structured Data Types",permalink:"/shimmer/smart-contracts/guide/wasm_vm/structs"}},p={},s=[{value:"Basic Value Data Types",id:"basic-value-data-types",level:2},{value:"ISC-specific Value Data Types",id:"isc-specific-value-data-types",level:2},{value:"Full Matrix of WasmLib Types",id:"full-matrix-of-wasmlib-types",level:2}],d={toc:s};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wasmlib-data-types"},"WasmLib Data Types"),(0,r.kt)("p",null,"You will need to manipulate data with your smart contracts. We distinguish two groups of\npredefined data types that can be used in schema definition files. The WasmLib\nimplementations for each supported programming language provide full support for these\npredefined data types. Each predefined data type can be (de)serialized as byte string or\nas human-readable text string."),(0,r.kt)("h2",{id:"basic-value-data-types"},"Basic Value Data Types"),(0,r.kt)("p",null,"These are mostly simple built-in scalar data types as provided by most programming\nlanguages. Each integer data type has a clearly defined storage size. The schema tool will\ntry to use the closest matching built-in data type when generating code for a specific\nlanguage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BigInt")," - An arbitrary-length unsigned integer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bool")," - An 8-bit boolean value (0 or 1)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bytes")," - An arbitrary-length byte array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int8")," - 8-bit signed integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int16")," - 16-bit signed integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int32")," - 32-bit signed integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int64")," - 64-bit signed integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," - An arbitrary-length UTF-8 encoded string value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint8")," - 8-bit unsigned integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint16")," - 16-bit unsigned integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint32")," - 32-bit unsigned integer value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint64")," - 64-bit unsigned integer value.")),(0,r.kt)("h2",{id:"isc-specific-value-data-types"},"ISC-specific Value Data Types"),(0,r.kt)("p",null,"These are ISC-specific value data types that are needed in the ISC sandbox function calls.\nMore detailed explanations about their specific uses can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/documentation/docs/misc/coretypes.md"},"ISC documentation"),"\n. WasmLib provides its own implementations for each of the ISC value data types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Address")," - A 33-byte encoded Tangle address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AgentID")," - An ISC Agent ID (Address + Hname)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ChainID")," - A 32-byte ISC Chain ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," - A 32-byte hash value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hname")," - A 4-byte unsigned integer hash value derived from a name string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NftID")," - A 32-byte ISC NFT ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RequestID")," - A 34-byte ISC transaction request ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenID")," - A 38-byte ISC token ID.")),(0,r.kt)("h2",{id:"full-matrix-of-wasmlib-types"},"Full Matrix of WasmLib Types"),(0,r.kt)("p",null,"WasmLib implements a full set of ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/proxies#value-proxies"},"value proxies")," for each\npredefined value type that provide access to data on the ISC host. But there is one aspect\nof this data that we have not considered yet. Some data provided by the host is mutable,\nwhereas other data may be immutable. To facilitate this distinction, each value proxy type\ncomes in two flavors that reflect this, and make sure that the data can only be used as\nintended."),(0,r.kt)("p",null,"The rule is that from an immutable container you can only derive immutable container and\nvalue proxies. The referenced data can never be changed through immutable proxies.\nSeparating these constraints for types into separate value proxy types allows the use of\ncompile-time type-checking to enforce these constraints. To guard against client code that\ntries to bypass them, the ISC sandbox will also check these constraints at runtime on the\nhost."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ISC type"),(0,r.kt)("th",{parentName:"tr",align:null},"WasmLib type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mutable proxy"),(0,r.kt)("th",{parentName:"tr",align:null},"Immutable proxy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"BigInt")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"BigInt")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"BigInt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Bool")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"byte array")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Bytes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"8-bit signed")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Int8")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Int8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"16-bit signed")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Int16")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Int16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"32-bit signed")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Int32")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Int32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"64-bit signed")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Int64")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Int64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"UTF-8 string")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uint8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"8-bit unsigned")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Uint8")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Uint8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uint16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"16-bit unsigned")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Uint16")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Uint16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uint32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"32-bit unsigned")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Uint32")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Uint32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uint64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"64-bit unsigned")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Uint64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AgentId"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"AgentId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"AgentId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"AgentId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChainId"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"ChainId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"ChainId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"ChainId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"Hash")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Hash")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hname"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"Hname")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"Hname")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"Hname"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NftID"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"NftID")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"NftID")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"NftID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"RequestId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"RequestId")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"RequestId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TokenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Sc",(0,r.kt)("strong",{parentName:"td"},"TokenID")),(0,r.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,r.kt)("strong",{parentName:"td"},"TokenID")),(0,r.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,r.kt)("strong",{parentName:"td"},"TokenID"))))),(0,r.kt)("p",null,"The consistent naming makes it easy to remember the type names. Bool, Bytes, String, and\nthe integer types are the odd ones out. They are implemented in WasmLib by the closest\nequivalents in the chosen WasmLib implementation programming language."),(0,r.kt)("p",null,"The schema tool will automatically generate the proper (im)mutable proxies from the schema\ndefinition. For example, View functions will only be able to access the state storage map\nthrough immutable proxies. The same goes for the params map that was passed into a Func\nor View, and for the results map that was returned from a call to a Func or View."),(0,r.kt)("p",null,"In the next section we will show how use these predefined types to create user-defined\n",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/structs"},"Structured Data Types"),"."))}o.isMDXComponent=!0}}]);