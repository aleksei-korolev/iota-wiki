"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"Calling smart contract view functions with Solo.",image:"/img/tutorial/call_view.png",keywords:["how to","testing","solo","views","call","synchronous","entry points"]},o="Calling a View",s={unversionedId:"guide/solo/view-sc",id:"guide/solo/view-sc",title:"Calling a View",description:"Calling smart contract view functions with Solo.",source:"@site/shimmer/external/wasp/documentation/docs/guide/solo/view-sc.md",sourceDirName:"guide/solo",slug:"/guide/solo/view-sc",permalink:"/shimmer/smart-contracts/guide/solo/view-sc",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/solo/view-sc.md",tags:[],version:"current",frontMatter:{description:"Calling smart contract view functions with Solo.",image:"/img/tutorial/call_view.png",keywords:["how to","testing","solo","views","call","synchronous","entry points"]},sidebar:"tutorialSidebar",previous:{title:"Invoking Smart Contracts",permalink:"/shimmer/smart-contracts/guide/solo/invoking-sc"},next:{title:"Error Handling",permalink:"/shimmer/smart-contracts/guide/solo/error-handling"}},l={},c=[{value:"Decoding Results Returned by <em>PostRequestSync</em> and <em>CallView</em>",id:"decoding-results-returned-by-postrequestsync-and-callview",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calling-a-view"},"Calling a View"),(0,r.kt)("p",null,"The following snippet shows how you can call the view function ",(0,r.kt)("inlineCode",{parentName:"p"},"getString")," of the smart contract ",(0,r.kt)("inlineCode",{parentName:"p"},"solotutorial")," without\nparameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res, err := chain.CallView("example1", "getString")\n')),(0,r.kt)("p",null,"The call returns a collection of key/value pairs ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," and an error result ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," in the typical Go fashion."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(23376).Z},(0,r.kt)("img",{alt:"Calling a view process",src:n(27034).Z,width:"862",height:"452"}))),(0,r.kt)("p",null,"The basic principle of calling a view is similar to sending a request to the smart contract. The essential difference is\nthat calling a view does not constitute an asynchronous transaction; it is just a direct synchronous call to the view\nentry point exposed by the smart contract."),(0,r.kt)("p",null,"Therefore, calling a view does not involve any token transfers. Sending a request (either on-ledger or off-ledger) to a\nview entry point will result in an exception, returning all attached tokens to the sender minus fees (iif any)."),(0,r.kt)("p",null,"Views are used to retrieve information about the smart contract's state, for example, to display on a website. Certain\nSolo methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"chain.GetInfo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chain.GetGasFeePolicy"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"chain.L2Assets")," call views of\nthe ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/overview"},"core smart contracts")," behind the scenes to retrieve the information\nabout the chain or a specific smart contract."),(0,r.kt)("h2",{id:"decoding-results-returned-by-postrequestsync-and-callview"},"Decoding Results Returned by ",(0,r.kt)("em",{parentName:"h2"},"PostRequestSync")," and ",(0,r.kt)("em",{parentName:"h2"},"CallView")),(0,r.kt)("p",null,"The following is a specific technicality of the Go environment of ",(0,r.kt)("em",{parentName:"p"},"Solo"),"."),(0,r.kt)("p",null,"The result returned by the call to an entry point from the Solo environment is an instance of\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/kv/dict/dict.go"},(0,r.kt)("inlineCode",{parentName:"a"},"dict.Dict"))," type, which is essentially a\nmap of ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," key/value pairs, defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Dict map[kv.Key][]byte\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dict")," is also an implementation of\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/kv/kv.go"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.KVStore"))," interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"kv")," package and\nsubpackages provide many useful functions to work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dict")," type."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Both view and non-view entry points can produce results.\nIn normal operation, retrieving the result of an on-ledger request is impossible since it is an asynchronous operation."),(0,r.kt)("p",{parentName:"admonition"},"However, in the Solo environment, the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"PostRequestSync")," is synchronous, allowing the caller to inspect the\nresult.\nThis is a convenient difference between the mocked Solo environment and the distributed ledger used by Wasp nodes.\nYou can use it to make assertions about the results of a call in the tests.")),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," is a dictionary where keys and values are binary slices. The ",(0,r.kt)("inlineCode",{parentName:"p"},"getString")," view returns the\nvalue under the ",(0,r.kt)("inlineCode",{parentName:"p"},'"str"')," key, and the value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," encoded as a byte slice. The ",(0,r.kt)("inlineCode",{parentName:"p"},"codec")," package provides functions\nto encode/decode frequently used data types, including ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". The following is a commonly used pattern to get a value\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dict")," and decode it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var value string = codec.MustDecodeString(res["str"])\n')))}d.isMDXComponent=!0},23376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/call_view-199c30d7a223e75c2d43d7aa6ec08dde.png"},27034:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call_view-199c30d7a223e75c2d43d7aa6ec08dde.png"}}]);