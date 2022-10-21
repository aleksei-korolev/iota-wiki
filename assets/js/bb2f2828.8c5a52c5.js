"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"Running a node is the best way to use IOTA. You have direct access to the Tangle and you help the IOTA network to become more distributed and resilient.",image:"/img/logo/bee_logo.png",keywords:["node","HTTP","API","ports","TCP","IOTA Network","REST","explanation"]},i="Getting Started",s={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Running a node is the best way to use IOTA. You have direct access to the Tangle and you help the IOTA network to become more distributed and resilient.",source:"@site/iota/external/bee/production/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/bee/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/production/documentation/iota/external/bee/production/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Running a node is the best way to use IOTA. You have direct access to the Tangle and you help the IOTA network to become more distributed and resilient.",image:"/img/logo/bee_logo.png",keywords:["node","HTTP","API","ports","TCP","IOTA Network","REST","explanation"]},sidebar:"mySidebar",previous:{title:"Welcome",permalink:"/bee/welcome"},next:{title:"Set Up a Node",permalink:"/bee/how_tos/setup_a_node"}},l={},u=[{value:"Recommended Requirements",id:"recommended-requirements",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to\nconnect to and trust someone else's node. And by doing so, you help the IOTA network to become more distributed and resilient. Below are a few references to ensure you have everything you need to get started."),(0,r.kt)("p",null,"As the node software is the backbone of the IOTA network, you can learn more about the tasks a node is responsible for in ",(0,r.kt)("a",{parentName:"p",href:"/bee/explanations/nodes_101"},"Nodes 101"),"."),(0,r.kt)("p",null,"Because of the node's importance, you need to make sure that your device meets the minimum security requirements for running a node, which you can learn about in ",(0,r.kt)("a",{parentName:"p",href:"/bee/explanations/security_101"},"Security 101"),"."),(0,r.kt)("h2",{id:"recommended-requirements"},"Recommended Requirements"),(0,r.kt)("p",null,"To handle a potentially high rate of messages per second, nodes need enough computational power to run reliably, so they\nshould have the following minimum specifications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4 cores or 4 vCPU."),(0,r.kt)("li",{parentName:"ul"},"8 GB RAM."),(0,r.kt)("li",{parentName:"ul"},"SSD storage."),(0,r.kt)("li",{parentName:"ul"},"A public IP address.")),(0,r.kt)("p",null,"The amount of storage you need will depend on whether and how often you plan on pruning old data from your local\ndatabase."),(0,r.kt)("p",null,"Bee exposes different functionalities on different ports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"15600 TCP - Gossip protocol port."),(0,r.kt)("li",{parentName:"ul"},"14265 TCP - REST HTTP API port (optional)."),(0,r.kt)("li",{parentName:"ul"},"8081 TCP - Dashboard (optional).")),(0,r.kt)("p",null,"The mentioned ports are important for flawless node operation. The REST HTTP API port is optional and is only needed if you want to offer access to your node's API. All ports can be customized inside the ",(0,r.kt)("a",{parentName:"p",href:"/bee/references/configuration"},"config.toml")," file."),(0,r.kt)("p",null,"The default dashboard only listens on localhost:8081 per default. If you want to make it accessible from the Internet, you need to change the default configuration (though we recommend using a reverse proxy)."))}c.isMDXComponent=!0}}]);