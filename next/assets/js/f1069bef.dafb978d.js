"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56204],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(i),d=r,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return i?o.createElement(y,n(n({ref:t},p),{},{components:i})):o.createElement(y,n({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,n=new Array(a);n[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var l=2;l<a;l++)n[l]=i[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},11668:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(87462),r=(i(67294),i(3905));const a={description:"We value your input.  Please take your time to create an issue to help improve the wiki.",tags:["create issue","create bug","request feature","request topic","contribute","update"],image:"/img/iota-wiki.png"},n="Create an Issue",s={unversionedId:"contribute-to-wiki/how_tos/create_an_issue",id:"contribute-to-wiki/how_tos/create_an_issue",title:"Create an Issue",description:"We value your input.  Please take your time to create an issue to help improve the wiki.",source:"@site/next/community/contribute-to-wiki/how_tos/create_an_issue.md",sourceDirName:"contribute-to-wiki/how_tos",slug:"/contribute-to-wiki/how_tos/create_an_issue",permalink:"/next/community/contribute-to-wiki/how_tos/create_an_issue",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/community/contribute-to-wiki/how_tos/create_an_issue.md",tags:[{label:"create issue",permalink:"/next/community/tags/create-issue"},{label:"create bug",permalink:"/next/community/tags/create-bug"},{label:"request feature",permalink:"/next/community/tags/request-feature"},{label:"request topic",permalink:"/next/community/tags/request-topic"},{label:"contribute",permalink:"/next/community/tags/contribute"},{label:"update",permalink:"/next/community/tags/update"}],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{description:"We value your input.  Please take your time to create an issue to help improve the wiki.",tags:["create issue","create bug","request feature","request topic","contribute","update"],image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Quick Advice",permalink:"/next/community/contribute-to-wiki/getting_started/quick_advice"},next:{title:"Write a Good Tutorial",permalink:"/next/community/contribute-to-wiki/how_tos/write_a_good_tutorial"}},u={},l=[{value:"Bug Report",id:"bug-report",level:2},{value:"Request a Feature",id:"request-a-feature",level:2},{value:"Request a Topic",id:"request-a-topic",level:2}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-issue"},"Create an Issue"),(0,r.kt)("p",null,"As any GitHub repository, the wiki has associated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iota-wiki/iota-wiki/issues"},"issues"),". You can\ncreate the following issue types."),(0,r.kt)("h2",{id:"bug-report"},"Bug Report"),(0,r.kt)("p",null,"You can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iota-wiki/iota-wiki/issues/new?assignees=&labels=bug&template=bug_report.md&title="},"create a bug report"),"\nto let the wiki team know that something is wrong. Some examples of bug reports are dead links, Misaligned texts or\nbuttons, partially visible elements, missing buttons or sections, and typos."),(0,r.kt)("p",null,"It is important that you provide all the steps you followed so whoever works on the bug is able to reproduce it. You\nshould also provide details as to what device, browser and OS you were using as these may be relevant."),(0,r.kt)("h2",{id:"request-a-feature"},"Request a Feature"),(0,r.kt)("p",null,"You can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iota-wiki/iota-wiki/issues/new?assignees=&labels=feature&template=feature_request.md&title="},"request a feature"),"\nto let the wiki team know what you would like them to implement to the wiki. Some examples of features are implementing\nan image gallery, changing a components behaviour or adding support for a new media type."),(0,r.kt)("p",null,"If you want your feature request to be successful, you should provide as much detail as possible so whoever works on it\ncan understand what you want properly. Ideally, you should provide some form of solution rather than just raise a\nproblem. However, if you don't know how to resolve the issue, but you managed to identify it, this is also helpful."),(0,r.kt)("h2",{id:"request-a-topic"},"Request a Topic"),(0,r.kt)("p",null,"You can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iota-wiki/iota-wiki/issues/new?assignees=&labels=documentation&template=topic-request.md&title="},"request a topic"),"\nto the wiki team know that you'd like to add a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#about-topics"},"topic"),"\nto the wiki repository. Topics can be managed by the repository admins, and are used to classify the repository. Helpful\ntopics to classify a repository include the repository's intended purpose, subject area, community, or language."))}c.isMDXComponent=!0}}]);