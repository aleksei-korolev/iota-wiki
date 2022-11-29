"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77038:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(87462),r=(n(67294),n(3905));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Never store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}a.isMDXComponent=!0},5683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),o=n(77038);const a={description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","jar","Maven","Gradle"]},l=void 0,s={unversionedId:"getting_started/java",id:"getting_started/java",title:"java",description:"Getting started with the official IOTA Client Library Java binding.",source:"@site/next/external/iota.rs/documentation/docs/getting_started/java.mdx",sourceDirName:"getting_started",slug:"/getting_started/java",permalink:"/next/iota.rs/getting_started/java",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/getting_started/java.mdx",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","jar","Maven","Gradle"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/iota.rs/getting_started/"},next:{title:"Getting Started with Node.js",permalink:"/next/iota.rs/getting_started/nodejs"}},d={},p=[{value:"Security",id:"security",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Use in your Android project (Android Studio)",id:"use-in-your-android-project-android-studio",level:2},{value:"Use in your Java project (Linux, macOS, Windows)",id:"use-in-your-java-project-linux-macos-windows",level:2},{value:"linux-x86_64",id:"linux-x86_64",level:4},{value:"windows-x86_64",id:"windows-x86_64",level:4},{value:"aarch64-apple-darwin",id:"aarch64-apple-darwin",level:4},{value:"osx-x86_64",id:"osx-x86_64",level:4},{value:"Try the library",id:"try-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)(o.ZP,{mdxType:"WarningPasswordStorage"}),(0,r.kt)("h1",{id:"iota-client-java-library"},"IOTA Client Java Library"),(0,r.kt)("p",null,"Get started with the official IOTA Client Java Library."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Minimum Java version: Java 8"),(0,r.kt)("h2",{id:"use-in-your-android-project-android-studio"},"Use in your Android project (Android Studio)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add following dependency to your ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-client:1.0.0-rc.1'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"iota-client-1.0.0-rc.1-android-jni.zip")," file from the GitHub release and unzip it."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"jniLibs")," folder with its contents to your Android Studio project as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"project/\n\u251c\u2500\u2500libs/\n|  \u2514\u2500\u2500 *.jar <-- if your library has jar files, they go here\n\u251c\u2500\u2500src/\n   \u2514\u2500\u2500 main/\n       \u251c\u2500\u2500 AndroidManifest.xml\n       \u251c\u2500\u2500 java/\n       \u2514\u2500\u2500 jniLibs/\n           \u251c\u2500\u2500 arm64-v8a/           <-- ARM 64bit\n           \u2502   \u2514\u2500\u2500 libiota-client.so\n           \u2502   \u2514\u2500\u2500 libc++_shared.so\n           \u251c\u2500\u2500 armeabi-v7a/         <-- ARM 32bit\n           \u2502   \u2514\u2500\u2500 libiota-client.so\n           \u2502   \u2514\u2500\u2500 libc++_shared.so\n           \u2514\u2500\u2500 x86/                 <-- Intel 32bit\n              \u2514\u2500\u2500 libiota-client.so\n              \u2514\u2500\u2500 libc++_shared.so\n")),(0,r.kt)("h2",{id:"use-in-your-java-project-linux-macos-windows"},"Use in your Java project (Linux, macOS, Windows)"),(0,r.kt)("p",null,"Depending on your operating system, add one of the following dependencies to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("h4",{id:"linux-x86_64"},"linux-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-client:1.0.0-rc.1:linux-x86_64'\n")),(0,r.kt)("h4",{id:"windows-x86_64"},"windows-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-client:1.0.0-rc.1:windows-x86_64'\n")),(0,r.kt)("h4",{id:"aarch64-apple-darwin"},"aarch64-apple-darwin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-client:1.0.0-rc.1:aarch64-apple-darwin'\n")),(0,r.kt)("h4",{id:"osx-x86_64"},"osx-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-client:1.0.0-rc.1:osx-x86_64'\n")),(0,r.kt)("h2",{id:"try-the-library"},"Try the library"),(0,r.kt)("p",null,"In order to try with the library, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.responses.NodeInfoResponse;\n\npublic class HelloWorld {\n    public static void main(String[] args) throws InitializeClientException, ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Get the node information for a given node.\n        NodeInfoResponse response = client.getNodeInfo();\n\n        // Print the URL of the node that was requested.\n        System.out.println(response.getNodeUrl());\n\n        // Print the node information for the requested node.\n        System.out.println(response.getNodeInfo());\n    }\n}\n')),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/client/bindings/java/examples/src"},"code examples"),"."))}u.isMDXComponent=!0}}]);