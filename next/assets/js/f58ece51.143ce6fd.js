"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:"the-tech-behind-IOTA-2",title:"The Tech Behind IOTA \u2014 Part 2 (Consensus)",authors:"lstanisic",tags:["Community","Coordicide","Mana"],url:"https://luka99.medium.com/the-tech-behind-iota-part-2-consensus-88c74917b993"},i=void 0,c={permalink:"/next/blog/the-tech-behind-IOTA-2",source:"@site/blog/2021-01-31_The_tech_behind_IOTA_2.md",title:"The Tech Behind IOTA \u2014 Part 2 (Consensus)",description:"Coordicide",date:"2021-01-31T00:00:00.000Z",formattedDate:"January 31, 2021",tags:[{label:"Community",permalink:"/next/blog/tags/community"},{label:"Coordicide",permalink:"/next/blog/tags/coordicide"},{label:"Mana",permalink:"/next/blog/tags/mana"}],hasTruncateMarker:!1,authors:[{name:"Luka Stanisic",title:"X-Team Member",url:"https://luka99.medium.com",twitter:"https://twitter.com/lukastanisic99",imageURL:"https://pbs.twimg.com/profile_images/1340659523070136325/ivYifVE1_400x400.jpg",key:"lstanisic"}],frontMatter:{slug:"the-tech-behind-IOTA-2",title:"The Tech Behind IOTA \u2014 Part 2 (Consensus)",authors:"lstanisic",tags:["Community","Coordicide","Mana"],url:"https://luka99.medium.com/the-tech-behind-iota-part-2-consensus-88c74917b993"},prevItem:{title:"The Chirping Machine",permalink:"/next/blog/the-chirping-machine"},nextItem:{title:"Why IOTA?",permalink:"/next/blog/why-iota"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*9DcgQ-EnPojAQADRUsi8Rg.png",alt:"Coordicide"})),(0,a.kt)("p",null,"I\u2019ve long thought of how to structure these tech series. It\u2019s hard to choose a technical level of proficiency that everyone can follow, because everyone comes from a different background.",(0,a.kt)("br",{parentName:"p"}),"\n","If you\u2019re new, take a look at the first article of the series to get a general idea how the Tangle works and how it\u2019s different from a blockchain."),(0,a.kt)("p",null,"Read the article on:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://luka99.medium.com/the-tech-behind-iota-part-2-consensus-88c74917b993"},"Medium")))}p.isMDXComponent=!0}}]);