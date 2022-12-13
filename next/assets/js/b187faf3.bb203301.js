"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75233],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75443:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended to store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},96347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(75443);const o={title:"Getting Started With Java",description:"Getting started with the official IOTA Wallet Java library.",image:"/img/logo/iota_mark_light.png",keywords:["Java","jar","Maven","Gradle"]},l=void 0,p={unversionedId:"getting_started/java",id:"getting_started/java",title:"Getting Started With Java",description:"Getting started with the official IOTA Wallet Java library.",source:"@site/next/external/wallet.rs/documentation/docs/getting_started/java.mdx",sourceDirName:"getting_started",slug:"/getting_started/java",permalink:"/next/wallet.rs/getting_started/java",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/getting_started/java.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Java",description:"Getting started with the official IOTA Wallet Java library.",image:"/img/logo/iota_mark_light.png",keywords:["Java","jar","Maven","Gradle"]},sidebar:"docs",previous:{title:"Getting Started With Node.js",permalink:"/next/wallet.rs/getting_started/nodejs"},next:{title:"Getting Started With Python",permalink:"/next/wallet.rs/getting_started/python"}},s={},c=[],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"WarningPasswordStorage"}),(0,r.kt)("p",null,(0,r.kt)("h1",{parentName:"p"},"IOTA Wallet Java Library"),(0,r.kt)("p",{parentName:"p"},"Get started with the official IOTA Wallet Java library."),(0,r.kt)("h2",{parentName:"p"},"Requirements"),(0,r.kt)("p",{parentName:"p"},"Minimum Java version: Java 8"),(0,r.kt)("h2",{parentName:"p"},"Use in your Android project (Android Studio)"),(0,r.kt)("ol",{parentName:"p"},(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"iota-wallet-1.0.0-rc.1.jar")," file from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wallet.rs/releases/tag/iota-wallet-java-1.0.0-rc.1-new"},"GitHub release")," and add it as a library to your project."),(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"iota-wallet-1.0.0-rc.1-android.zip")," file from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wallet.rs/releases/tag/iota-wallet-java-1.0.0-rc.1-new"},"GitHub release"),", unzip it and add the ",(0,r.kt)("inlineCode",{parentName:"li"},"jniLibs")," folder with its contents to your Android Studio project as shown below:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"project/\n\u251c\u2500\u2500libs/\n|  \u2514\u2500\u2500 *.jar <-- if your library has jar files, they go here\n\u251c\u2500\u2500src/\n   \u2514\u2500\u2500 main/\n       \u251c\u2500\u2500 AndroidManifest.xml\n       \u251c\u2500\u2500 java/\n       \u2514\u2500\u2500 jniLibs/ \n           \u251c\u2500\u2500 arm64-v8a/           <-- ARM 64bit\n           \u2502   \u2514\u2500\u2500 libiota-wallet.so\n           \u2502   \u2514\u2500\u2500 libc++_shared.so\n           \u251c\u2500\u2500 armeabi-v7a/         <-- ARM 32bit\n           \u2502   \u2514\u2500\u2500 libiota-wallet.so\n           \u2502   \u2514\u2500\u2500 libc++_shared.so\n           \u2502\u2500\u2500 x86/                 <-- Intel 32bit\n           \u2502  \u2514\u2500\u2500 libiota-wallet.so\n           \u2502  \u2514\u2500\u2500 libc++_shared.so\n           \u2514\u2500\u2500 x86_64/              <-- Intel 64bit\n              \u2514\u2500\u2500 libiota-wallet.so\n              \u2514\u2500\u2500 libc++_shared.so\n")),(0,r.kt)("h2",{parentName:"p"},"Use in your Java project (Linux, macOS, Windows)"),(0,r.kt)("p",{parentName:"p"},"Depending on your operating system, add one of the following dependencies to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("h4",{parentName:"p"},"linux-x86_64"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-wallet:1.0.0-rc.1:linux-x86_64'\n")),(0,r.kt)("h4",{parentName:"p"},"windows-x86_64"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-wallet:1.0.0-rc.1:windows-x86_64'\n")),(0,r.kt)("h4",{parentName:"p"},"aarch64-apple-darwin"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-wallet:1.0.0-rc.1:aarch64-apple-darwin'\n")),(0,r.kt)("h4",{parentName:"p"},"osx-x86_64"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"implementation 'org.iota:iota-wallet:1.0.0-rc.1:osx-x86_64'\n")),(0,r.kt)("h2",{parentName:"p"},"Use the Library"),(0,r.kt)("p",{parentName:"p"},"In order to use the library, you need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," instance.\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": Android applications must necessarily configure a suitable storage path for the wallet to avoid problems with file system permissions. You can specify a suitable storage path using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withStoragePath()")," as illustrated below:"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.AccountHandle;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.CoinType;\nimport org.iota.types.WalletConfig;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class CreateAccount {\n    private static final String DEFAULT_DEVELOPMENT_MNEMONIC = "hidden enroll proud copper decide negative orient asset speed work dolphin atom unhappy game cannon scheme glow kid ring core name still twist actor";\n\n    public static void main(String[] args) throws WalletException {\n        // Build the wallet.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n                // Set a suitable storage path for the wallet.\n                //.withStoragePath("/data/data/com.example.myapplication/")\n        );\n        wallet.storeMnemonic(DEFAULT_DEVELOPMENT_MNEMONIC);\n\n        // Create an account.\n        AccountHandle a = wallet.createAccount("Alice");\n\n        // Print the account.\n        System.out.println(a);\n    }\n}\n')),(0,r.kt)("h2",{parentName:"p"},"What's Next?"),(0,r.kt)("p",{parentName:"p"},"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/wallet.rs/how_tos/run_how_tos/"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/java/examples/src"},"code examples"),".")))}m.isMDXComponent=!0}}]);