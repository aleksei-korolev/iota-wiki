"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,f=c["".concat(m,".").concat(u)]||c[u]||o[u]||l;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},s="@iota/wallet",i={unversionedId:"references/nodejs/api_ref",id:"references/nodejs/api_ref",title:"@iota/wallet",description:"Table of contents",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/api_ref.md",sourceDirName:"references/nodejs",slug:"/references/nodejs/api_ref",permalink:"/shimmer/wallet.rs/references/nodejs/api_ref",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/api_ref.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/shimmer/wallet.rs/references/rust_api_reference"},next:{title:"Class: Account",permalink:"/shimmer/wallet.rs/references/nodejs/classes/Account"}},m={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classes",id:"classes",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Enumerations",id:"enumerations",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"AccountId",id:"accountid",level:3},{value:"EventType",id:"eventtype",level:3},{value:"Auth",id:"auth",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Node",id:"node",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"SecretManager",id:"secretmanager",level:3},{value:"RemainderValueStrategy",id:"remaindervaluestrategy",level:3},{value:"ChangeAddress",id:"changeaddress",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"ReuseAddress",id:"reuseaddress",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"CustomAddress",id:"customaddress",level:3},{value:"Type declaration",id:"type-declaration-4",level:4}],d={toc:p};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iotawallet"},"@iota/wallet"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"classes"},"Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/classes/Account"},"Account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/classes/AccountManager"},"AccountManager"))),(0,n.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#accountid"},"AccountId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#eventtype"},"EventType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#auth"},"Auth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#node"},"Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#secretmanager"},"SecretManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#remaindervaluestrategy"},"RemainderValueStrategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#changeaddress"},"ChangeAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#reuseaddress"},"ReuseAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/api_ref#customaddress"},"CustomAddress"))),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AccountBalance"},"AccountBalance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/BaseCoinBalance"},"BaseCoinBalance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/RequiredStorageDeposit"},"RequiredStorageDeposit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenBalance"},"NativeTokenBalance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/SyncOptions"},"SyncOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AccountSyncOptions"},"AccountSyncOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AliasSyncOptions"},"AliasSyncOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NftSyncOptions"},"NftSyncOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AccountMeta"},"AccountMeta")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AccountMetadata"},"AccountMetadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/CreateAccountPayload"},"CreateAccountPayload")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/FilterOptions"},"FilterOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AccountManagerOptions"},"AccountManagerOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Address"},"Address")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressWithAmount"},"AddressWithAmount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressWithUnspentOutputs"},"AddressWithUnspentOutputs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressWithMicroAmount"},"AddressWithMicroAmount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressNativeTokens"},"AddressNativeTokens")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressNftId"},"AddressNftId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AddressGenerationOptions"},"AddressGenerationOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/GenerateAddressOptions"},"GenerateAddressOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/BuildAliasOutputData"},"BuildAliasOutputData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/BuildBasicOutputData"},"BuildBasicOutputData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/BuildFoundryOutputData"},"BuildFoundryOutputData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/BuildNftOutputData"},"BuildNftOutputData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/LoggerConfig"},"LoggerConfig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NetworkInfo"},"NetworkInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/ClientOptions"},"ClientOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NodeInfoWrapper"},"NodeInfoWrapper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/OutputData"},"OutputData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Segment"},"Segment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/OutputOptions"},"OutputOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Assets"},"Assets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Features"},"Features")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Unlocks"},"Unlocks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/StorageDeposit"},"StorageDeposit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/PreparedTransactionData"},"PreparedTransactionData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/InputSigningData"},"InputSigningData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/RemainderData"},"RemainderData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/LedgerNanoSecretManager"},"LedgerNanoSecretManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/MnemonicSecretManager"},"MnemonicSecretManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/SeedSecretManager"},"SeedSecretManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/StrongholdSecretManager"},"StrongholdSecretManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/LedgerNanoStatus"},"LedgerNanoStatus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/LedgerApp"},"LedgerApp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/SignedTransactionEssence"},"SignedTransactionEssence")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction"},"Transaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/MintTokenTransaction"},"MintTokenTransaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/TransactionOptions"},"TransactionOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/IncreaseNativeTokenSupplyOptions"},"IncreaseNativeTokenSupplyOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenOptions"},"NativeTokenOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NftOptions"},"NftOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/AliasOutputOptions"},"AliasOutputOptions"))),(0,n.kt)("h3",{id:"enumerations"},"Enumerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/CoinType"},"CoinType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/AddressType"},"AddressType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/WalletEvent"},"WalletEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/Network"},"Network")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/OutputsToClaim"},"OutputsToClaim")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/ReturnStrategy"},"ReturnStrategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/LedgerDeviceType"},"LedgerDeviceType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState"},"InclusionState"))),(0,n.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,n.kt)("h3",{id:"accountid"},"AccountId"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"AccountId"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Account identifier\nCould be the account index (number) or account alias (string)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"eventtype"},"EventType"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"EventType"),": ",(0,n.kt)("inlineCode",{parentName:"p"},'"*"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"ConsolidationRequired"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"LedgerAddressGeneration"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"NewOutput"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"SpentOutput"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"TransactionInclusion"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"TransactionProgress"')),(0,n.kt)("p",null,"Wallet event types"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"auth"},"Auth"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"Auth"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"Basic Auth or JWT"),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"jwt?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"basicAuthNamePwd?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),"]")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"node"},"Node"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"Node"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"A node object for the client"),(0,n.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"auth?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/shimmer/wallet.rs/references/nodejs/api_ref#auth"},(0,n.kt)("inlineCode",{parentName:"a"},"Auth")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"disabled?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"secretmanager"},"SecretManager"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"SecretManager"),": ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/LedgerNanoSecretManager"},(0,n.kt)("inlineCode",{parentName:"a"},"LedgerNanoSecretManager"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/MnemonicSecretManager"},(0,n.kt)("inlineCode",{parentName:"a"},"MnemonicSecretManager"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/StrongholdSecretManager"},(0,n.kt)("inlineCode",{parentName:"a"},"StrongholdSecretManager"))),(0,n.kt)("p",null,"Supported secret managers"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"remaindervaluestrategy"},"RemainderValueStrategy"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"RemainderValueStrategy"),": ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/api_ref#changeaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"ChangeAddress"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/api_ref#reuseaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"ReuseAddress"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/api_ref#customaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomAddress"))),(0,n.kt)("p",null,"The RemainderValueStrategy"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"changeaddress"},"ChangeAddress"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"ChangeAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"ChangeAddress variant of RemainderValueStrategy"),(0,n.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"strategy")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"ChangeAddress"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"reuseaddress"},"ReuseAddress"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"ReuseAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"ReuseAddress variant of RemainderValueStrategy"),(0,n.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"strategy")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"ReuseAddress"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"customaddress"},"CustomAddress"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"CustomAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"CustomAddress variant of RemainderValueStrategy"),(0,n.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"strategy")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"CustomAddress"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))}o.isMDXComponent=!0}}]);