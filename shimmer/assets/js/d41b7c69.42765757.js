"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45479],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,s=function(t,e){if(null==t)return{};var n,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,u=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=c(n),m=s,h=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?o.createElement(h,i(i({ref:e},p),{},{components:n})):o.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,i=new Array(a);i[0]=d;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r.mdxType="string"==typeof t?t:s,i[1]=r;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61635:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(87462),s=(n(67294),n(3905));const a={description:"Learn how sweep your outputs into a single output to reduce storage costs.",image:"/img/client_banner.png",keywords:["tutorial","single output","unlock conditions","transactions payload","transactions essence","reference unlock conditions","main unlock conditions"]},i="Sweep Outputs to Reduce Deposits",r={unversionedId:"tutorials/value-transactions/sweep-outputs-to-reduce-deposits",id:"tutorials/value-transactions/sweep-outputs-to-reduce-deposits",title:"Sweep Outputs to Reduce Deposits",description:"Learn how sweep your outputs into a single output to reduce storage costs.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/10-sweep-outputs-to-reduce-deposits.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/sweep-outputs-to-reduce-deposits",permalink:"/shimmer/iotajs/tutorials/value-transactions/sweep-outputs-to-reduce-deposits",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/10-sweep-outputs-to-reduce-deposits.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Learn how sweep your outputs into a single output to reduce storage costs.",image:"/img/client_banner.png",keywords:["tutorial","single output","unlock conditions","transactions payload","transactions essence","reference unlock conditions","main unlock conditions"]},sidebar:"docs",previous:{title:"Understanding Deposits",permalink:"/shimmer/iotajs/tutorials/value-transactions/understanding-deposits"},next:{title:"Stardust for iota.js: Alias Transactions",permalink:"/shimmer/iotajs/tutorials/alias-transactions/introduction"}},u={},c=[{value:"Obtain the Existing Outputs",id:"obtain-the-existing-outputs",level:2},{value:"Define the Combined Output",id:"define-the-combined-output",level:2},{value:"Sweep the Transaction Payload",id:"sweep-the-transaction-payload",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],p={toc:c};function l(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sweep-outputs-to-reduce-deposits"},"Sweep Outputs to Reduce Deposits"),(0,s.kt)("p",null,"As introduced in ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/understanding-deposits"},"Understanding Deposits"),", if you would like to reduce your total storage\ndeposit, you can sweep your two outputs into a single output that will contain ",(0,s.kt)("inlineCode",{parentName:"p"},"0.10 SMR")," by combining each ",(0,s.kt)("inlineCode",{parentName:"p"},"0.05 SMR"),"\nexisting output. To do so, you will need to create a new transaction and use the two existing outputs as inputs."),(0,s.kt)("h2",{id:"obtain-the-existing-outputs"},"Obtain the Existing Outputs"),(0,s.kt)("p",null,"You can obtain the existing outputs by sending the address in Bech32 format to the indexer plugin. In this case, since\nyou want the two latest outputs; you can select the first two returned elements as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexerPlugin = new IndexerPluginClient(client);\nconst outputList = await indexerPlugin.basicOutputs({\n    addressBech32: destinationAddressBech32\n});\n\nconst consumedOutputId1 = outputList.items[0];\nconst consumedOutputId2 = outputList.items[1];\n")),(0,s.kt)("p",null,"You already know that each output will hold ",(0,s.kt)("inlineCode",{parentName:"p"},"0.05 SMR"),". Still, you can query each output and obtain its amount by calling\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/classes/SingleNodeClient#output"},(0,s.kt)("inlineCode",{parentName:"a"},"SingleNodeClient.output()"))," function as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const output1 = await client.output(consumedOutputId1);\nconst output2 = await client.output(consumedOutputId2);\n\n// The two outputs are combined into only one output (the final amount will be 100000 Glow, 0.1 Shimmer)\nconst amount1 = bigInt(output1.output.amount);\nconst amount2 = bigInt(output2.output.amount);\n")),(0,s.kt)("h2",{id:"define-the-combined-output"},"Define the Combined Output"),(0,s.kt)("p",null,"The new output will hold the sum amount of ",(0,s.kt)("inlineCode",{parentName:"p"},"output1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"output2"),"."),(0,s.kt)("p",null,"The unlock conditions correspond to the controller of the origin address. That means that, in this case, you are not\ntransferring funds to another address but to the same address collapsed into a single output."),(0,s.kt)("p",null,"Please note that you could also have transferred your new output to another address you control. Remember that with the initial seed, you can ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/generate-addresses"},"generate multiple deterministic addresses"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const combinedOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: amount1.add(amount2).toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: destAddress\n            }\n        }\n    ],\n    features: []\n};\n")),(0,s.kt)("h2",{id:"sweep-the-transaction-payload"},"Sweep the Transaction Payload"),(0,s.kt)("p",null,"To generate the sweep transaction, you need to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Convert your initial outputs to inputs."),(0,s.kt)("li",{parentName:"ol"},"Generate a commitment"),(0,s.kt)("li",{parentName:"ol"},"Create a transaction essence.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const inputs: IUTXOInput[] = [];\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId1));\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId2));\n\nconst inputsCommitment = TransactionHelper.getInputsCommitment([output1.output, output2.output]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: TransactionHelper.networkIdFromNetworkName(protocolInfo.networkName),\n    inputs,\n    inputsCommitment,\n    outputs: [combinedOutput]\n};\n")),(0,s.kt)("p",null,"Now, you need to unlock each Input by calculating a signature. To perform this calculation you will need the public and private keys of your address and the hash of the transaction essence."),(0,s.kt)("p",null,'In this particular case, the unlock signature will be the same for each Input, so the examples use a "Reference unlock type", ',(0,s.kt)("a",{parentName:"p",href:"../../references/client/api_ref#reference_unlock_type"},(0,s.kt)("inlineCode",{parentName:"a"},"REFERENCE_UNLOCK_TYPE")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const wsTsxEssence = new WriteStream();\nserializeTransactionEssence(wsTsxEssence, transactionEssence);\nconst essenceFinal = wsTsxEssence.finalBytes();\n\nconst essenceHash = Blake2b.sum256(essenceFinal);\n\nconst destAddressPubKey = "0x....";\nconst destAddressPrivateKey = "0x....";\n\n// Main unlock condition \nconst unlock1: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: destAddressPubKey,\n        signature: Converter.bytesToHex(Ed25519.sign(Converter.hexToBytes(destAddressPrivateKey), essenceHash), true)\n    }\n};\n\nconst unlock2: IReferenceUnlock = {\n    type: REFERENCE_UNLOCK_TYPE,\n    reference: 0\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [unlock1, unlock2]\n};\n')),(0,s.kt)("p",null,"You can now ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/transfer-funds#submit-the-block"},"submit your transaction payload as block"),". Once the transaction is\nconfirmed, you can observe that the storage deposit is now reduced to ",(0,s.kt)("inlineCode",{parentName:"p"},"42600")," Glow, but the balance is still ",(0,s.kt)("inlineCode",{parentName:"p"},"0.1 SMR"),"."),(0,s.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,s.kt)("p",null,"By this point in the tutorial, your ",(0,s.kt)("inlineCode",{parentName:"p"},"sweep-deposits.ts"),"file should look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Bip32Path, Bip39, Blake2b, Ed25519} from "@iota/crypto.js";\nimport {\n    ADDRESS_UNLOCK_CONDITION_TYPE,\n    BASIC_OUTPUT_TYPE,\n    Bech32Helper,\n    DEFAULT_PROTOCOL_VERSION,\n    ED25519_ADDRESS_TYPE,\n    ED25519_SIGNATURE_TYPE,\n    Ed25519Address,\n    Ed25519Seed,\n    generateBip44Address,\n    IBasicOutput,\n    IBlock,\n    IKeyPair, IndexerPluginClient, IReferenceUnlock,\n    ISignatureUnlock,\n    ITransactionEssence,\n    ITransactionPayload,\n    IUTXOInput, REFERENCE_UNLOCK_TYPE,\n    serializeTransactionEssence,\n    SIGNATURE_UNLOCK_TYPE,\n    SingleNodeClient,\n    TRANSACTION_ESSENCE_TYPE,\n    TRANSACTION_PAYLOAD_TYPE,\n    TransactionHelper\n} from "@iota/iota.js";\nimport {Converter, WriteStream} from "@iota/util.js";\nimport {NeonPowProvider} from "@iota/pow-neon.js";\nimport bigInt from "big-integer";\n\nconst API_ENDPOINT = "https://api.testnet.shimmer.network";\nconst client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\nconst protocolInfo = await client.protocolInfo();\n\nconsole.log(protocolInfo);\n\nconst sourceAddress = "0x696cc8b1e0d2c1e29fbf3a4f491c0c9dc730c6e4c4e0d0ab6011e9f1209af013";\nconst sourceAddressBech32 = "rms1qp5kej93urfvrc5lhuay7jgupjwuwvxxunzwp59tvqg7nufqntcpxp26uj8";\nconst sourceAddressPublicKey = "NEED KEYS FOR EXAMPLE ADDRESS";\nconst sourceAddressPrivateKey = "NEED KEYS FOR EXAMPLE ADDRESS";\n\nconst destAddress = "0xbc9a935696546212c237e49e881fc6bdbd90bd0ec6140391982172f05a01b095";\n\nconst indexerPlugin = new IndexerPluginClient(client);\nconst outputList = await indexerPlugin.basicOutputs({\n    addressBech32: sourceAddressBech32\n});\n\nconst consumedOutputId1 = outputList.items[0];\nconst consumedOutputId2 = outputList.items[1];\n\nconst output1 = await client.output(consumedOutputId1);\nconst output2 = await client.output(consumedOutputId2);\n\n// The two outputs are combined into only one output (the final amount will be 100000 Glow, 0.1 Shimmer)\nconst amount1 = bigInt(output1.output.amount);\nconst amount2 = bigInt(output2.output.amount);\n\nconst combinedOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: amount1.add(amount2).toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: destAddress\n            }\n        }\n    ],\n    features: []\n};\n\nconst inputs: IUTXOInput[] = [];\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId1));\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId2));\n\nconst inputsCommitment = TransactionHelper.getInputsCommitment([output1.output, output2.output]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: TransactionHelper.networkIdFromNetworkName(protocolInfo.networkName),\n    inputs,\n    inputsCommitment,\n    outputs: [combinedOutput]\n};\n\nconst wsTsxEssence = new WriteStream();\nserializeTransactionEssence(wsTsxEssence, transactionEssence);\nconst essenceFinal = wsTsxEssence.finalBytes();\n\nconst essenceHash = Blake2b.sum256(essenceFinal);\n\nconst destAddressPubKey = "0x....";\nconst destAddressPrivateKey = "0x....";\n\n// Main unlock condition\nconst unlock1: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: destAddressPubKey,\n        signature: Converter.bytesToHex(Ed25519.sign(Converter.hexToBytes(destAddressPrivateKey), essenceHash), true)\n    }\n};\n\nconst unlock2: IReferenceUnlock = {\n    type: REFERENCE_UNLOCK_TYPE,\n    reference: 0\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [unlock1, unlock2]\n};\n\nconst block: IBlock = {\n    protocolVersion: DEFAULT_PROTOCOL_VERSION,\n    parents: [],\n    payload: transactionPayload,\n    nonce: "0",\n};\n\nconst blockId = await client.blockSubmit(block);\n\nconsole.log(blockId);\n\n')))}l.isMDXComponent=!0}}]);