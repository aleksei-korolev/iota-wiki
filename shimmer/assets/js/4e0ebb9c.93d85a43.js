"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={description:"Derive a public address from an Ed25519 public key.",image:"/img/client_banner.png",keywords:["public key","ed25519","different address format","hash","bech32","rms","shimmer testnet"]},i="Public Addresses",o={unversionedId:"tutorials/value-transactions/public-addresses",id:"tutorials/value-transactions/public-addresses",title:"Public Addresses",description:"Derive a public address from an Ed25519 public key.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/05-public-addresses.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/public-addresses",permalink:"/shimmer/iotajs/tutorials/value-transactions/public-addresses",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/05-public-addresses.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Derive a public address from an Ed25519 public key.",image:"/img/client_banner.png",keywords:["public key","ed25519","different address format","hash","bech32","rms","shimmer testnet"]},sidebar:"docs",previous:{title:"Generate Addresses",permalink:"/shimmer/iotajs/tutorials/value-transactions/generate-addresses"},next:{title:"Request Funds from the Testnet Faucet",permalink:"/shimmer/iotajs/tutorials/value-transactions/request-funds-from-the-faucet"}},d={},l=[{value:"Putting It All Together",id:"putting-it-all-together",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"public-addresses"},"Public Addresses"),(0,s.kt)("p",null,"As it usually happens in Blockchain, public addresses are derived from a public key by hashing it. In the Stardust\nprotocol, they are derived from the ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/generate-a-seed#generate-an-ed25519-master-seed"},"Ed25519 public key"),"."),(0,s.kt)("p",null,"There are two different address formats:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Ed25519"),": A hash of the Ed25519 public key.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Bech32"),": An easily identified and error-resistant format that complies\nwith ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"},"BECH32"),"."),(0,s.kt)("p",{parentName:"li"},"In the case of the ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network"},"Shimmer mainnet"),", the BECH32 human-readable part (HRP) is ",(0,s.kt)("inlineCode",{parentName:"p"},"smr"),",\nand ",(0,s.kt)("inlineCode",{parentName:"p"},"rms")," is used for the Shimmer testnet. Those HRPs are also provided as ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/query-output-details"},"metadata elements of the ",(0,s.kt)("inlineCode",{parentName:"a"},"info"),"\nprimitive of the protocol"),"."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const publicAddresses: { ed25519: string, bech32: string }[] = [];\n\nfor (const keyPair of keyPairs) {\n    const ed25519Address = new Ed25519Address(keyPair.publicKey);\n    // Address in bytes\n    const ed25519AddressBytes = ed25519Address.toAddress();\n    // Conversion to BECH32\n    const bech32Addr = Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, ed25519AddressBytes, "rms");\n\n    const publicAddress = {\n        ed25519: Converter.bytesToHex(ed25519AddressBytes, true),\n        bech32: bech32Addr\n    };\n    publicAddresses.push(publicAddress);\n\n    console.log(publicAddress);\n}\n')),(0,s.kt)("p",null,"As you can see, the BECH32 address is generated from the Ed25519 address, which it is a hash of the public key."),(0,s.kt)("p",null,"This results in the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"{\n  ed25519: '0x1696e3735e8871ce7086af6a9920e1a3b83cdf8b265adf449fc4bda86b91e2bb',\n  bech32: 'rms1qqtfdcmnt6y8rnnss6hk4xfqux3ms0xl3vn94h6ynlztm2rtj83tk9qkzrx'\n}\n")),(0,s.kt)("p",null,"The Ed25519 format has a length of ",(0,s.kt)("inlineCode",{parentName:"p"},"64")," hex chars (32 bytes) as the Ed25519 public key. On the other hand, the BECH32\naddress starts with ",(0,s.kt)("inlineCode",{parentName:"p"},"rms")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"smr")," and continues with a ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," character."),(0,s.kt)("p",null,"You can now transform the BECH32 address into an Ed25519 address using\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/classes/Bech32Helper#frombech32"},(0,s.kt)("inlineCode",{parentName:"a"},"Bech32Helper.fromBech32()"))," function, as shown in the\nfollowing snippet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const ed25519Addr = Bech32Helper.fromBech32(bech32Address, "rms").addressBytes;\n')),(0,s.kt)("p",null,"However, you cannot derive your Ed25519 public key, as it is a hash of a public key, and hashes are irreversible\nfunctions."),(0,s.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,s.kt)("p",null,"By this point in the tutorial, your ",(0,s.kt)("inlineCode",{parentName:"p"},"generate-addresses.ts")," file should look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Bip32Path, Bip39} from "@iota/crypto.js";\nimport {\n    Bech32Helper,\n    ED25519_ADDRESS_TYPE,\n    Ed25519Address,\n    Ed25519Seed,\n    generateBip44Address,\n    IKeyPair\n} from "@iota/iota.js";\nimport {Converter} from "@iota/util.js";\n\n// Default entropy length is 256\nconst randomMnemonic = Bip39.randomMnemonic();\n\nconsole.log("Seed phrase:", randomMnemonic);\n\nconst masterSeed = Ed25519Seed.fromMnemonic(randomMnemonic);\n\nconst NUM_ADDR = 6;\nconst addressGeneratorAccountState = {\n    accountIndex: 0,\n    addressIndex: 0,\n    isInternal: false\n};\nconst paths: string[] = [];\nfor (let i = 0; i < NUM_ADDR; i++) {\n    const path = generateBip44Address(addressGeneratorAccountState);\n    paths.push(path);\n\n    console.log(`${path}`);\n}\n\n\nconst keyPairs: IKeyPair[] = [];\n\nfor (const path of paths) {\n    // Master seed was generated previously\n    const addressSeed = masterSeed.generateSeedFromPath(new Bip32Path(path));\n    const addressKeyPair = addressSeed.keyPair();\n    keyPairs.push(addressKeyPair);\n\n    console.log(Converter.bytesToHex(addressKeyPair.privateKey, true));\n    console.log(Converter.bytesToHex(addressKeyPair.publicKey, true));\n}\n\nconst publicAddresses: { ed25519: string, bech32: string }[] = [];\n\nfor (const keyPair of keyPairs) {\n    const ed25519Address = new Ed25519Address(keyPair.publicKey);\n    // Address in bytes\n    const ed25519AddressBytes = ed25519Address.toAddress();\n    // Conversion to BECH32\n    const bech32Addr = Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, ed25519AddressBytes, "rms");\n\n    const publicAddress = {\n        ed25519: Converter.bytesToHex(ed25519AddressBytes, true),\n        bech32: bech32Addr\n    };\n    publicAddresses.push(publicAddress);\n\n    console.log(publicAddress);\n}\n')))}p.isMDXComponent=!0}}]);