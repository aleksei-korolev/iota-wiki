"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Spammer","IOTA","Shimmer","Node Software","Welcome","explanation"]},i="Welcome to INX-Spammer",c={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-Spammer",description:"INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates.",source:"@site/next/external/inx-spammer/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/next/inx-spammer/welcome",draft:!1,editUrl:"https://github.com/iotaledger/inx-spammer/edit/develop/documentation/next/external/inx-spammer/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Spammer","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Core Configuration",permalink:"/next/inx-spammer/configuration"}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Value Spam",id:"value-spam",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"Source Code",id:"source-code",level:2}],m={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-inx-spammer"},"Welcome to INX-Spammer"),(0,o.kt)("p",null,"INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The recommended setup is to use the provided ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-spammer"},"Docker images"),".\nThese images are also used in our ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.iota.org/hornet/develop/how_tos/using_docker"},"HORNET recommended setup using Docker"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The spammer is configured by default to connect to your HORNET instance."),(0,o.kt)("p",null,"You can find all the configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"/next/inx-spammer/configuration"},"configuration section"),"."),(0,o.kt)("h3",{id:"value-spam"},"Value Spam"),(0,o.kt)("p",null,"The spammer can also be used to create value spam in the network."),(0,o.kt)("p",null,"For this to work, you need to fund an address upfront and pass the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SPAMMER_MNEMONIC")," with the corresponding 24 word Mnemonic for the private key of the address."),(0,o.kt)("p",null,"In case you use the recommended Docker setup, you can create a new Mnemonic and address using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose run hornet tool ed25519-key --hrp BECH32HRP\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BECH32HRP")," must be replaced with the correct HRP for your network."),(0,o.kt)("p",null,"The value spam can be enabled via Dashboard or by setting the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"valueSpamEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the configuration."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You must not use the spammer in a network with real funds. You may loose access to your funds if you do so.")),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-dashboard"},"INX-Dashboard")," on your node, you can control the spammer directly from your browser."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"The source code of the project is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-spammer"},"GitHub"),"."))}s.isMDXComponent=!0}}]);