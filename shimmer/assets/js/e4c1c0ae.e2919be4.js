"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68980],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,u=t.parentName,l=r(t,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||s;return n?o.createElement(m,i(i({ref:e},l),{},{components:n})):o.createElement(m,i({ref:e},l))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r.mdxType="string"==typeof t?t:a,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61677:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={description:"Send native tokens with iota.js.",image:"/img/client_banner.png",keywords:["tutorial","native tokens","token","digital","asset","output","transaction"]},i="Send Native Tokens",r={unversionedId:"tutorials/native-token-transactions/native-tokens-transaction",id:"tutorials/native-token-transactions/native-tokens-transaction",title:"Send Native Tokens",description:"Send native tokens with iota.js.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/native-token-transactions/04-native-tokens-transaction.md",sourceDirName:"tutorials/native-token-transactions",slug:"/tutorials/native-token-transactions/native-tokens-transaction",permalink:"/shimmer/iotajs/tutorials/native-token-transactions/native-tokens-transaction",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/tutorials/native-token-transactions/04-native-tokens-transaction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Send native tokens with iota.js.",image:"/img/client_banner.png",keywords:["tutorial","native tokens","token","digital","asset","output","transaction"]},sidebar:"docs",previous:{title:"Mint Native Tokens",permalink:"/shimmer/iotajs/tutorials/native-token-transactions/mint-native-tokens"},next:{title:"Melting Native Tokens",permalink:"/shimmer/iotajs/tutorials/native-token-transactions/melt-native-tokens"}},u={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Query Native Tokens Output to be Spent",id:"query-native-tokens-output-to-be-spent",level:2},{value:"Define the New Native Tokens Output",id:"define-the-new-native-tokens-output",level:2},{value:"Define the Output for the Remaining NativeTokens",id:"define-the-output-for-the-remaining-nativetokens",level:2},{value:"Calculate the Storage Costs",id:"calculate-the-storage-costs",level:2},{value:"Find an Output That Can Cover Storage Costs",id:"find-an-output-that-can-cover-storage-costs",level:2},{value:"Define the Transaction Essence",id:"define-the-transaction-essence",level:2},{value:"Provide the Transaction\u2019s Unlock Signature",id:"provide-the-transactions-unlock-signature",level:2},{value:"Submit the Block",id:"submit-the-block",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],l={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-native-tokens"},"Send Native Tokens"),(0,a.kt)("p",null,"Outputs that hold native tokens can be spent within transactions to transfer some of their native tokens to a new Output. As usual, if there are remaining native tokens, you need to put them into a new Output controlled by your source address. In principle, there is no need to involve protocol-defined tokens (",(0,a.kt)("inlineCode",{parentName:"p"},"SMR"),") in this kind of transaction. However, you need to take into account that there are additional storage costs corresponding to the new Outputs you generate. For instance, if you use the ","[Output you created in the previous step of this tutorial]","(/shimmer/iotajs/tutorials/native-token-transactions/mint-native-tokens#define the-basic-output-that-will-hold-the-initial-batch-of-minted-tokens\n) as Input, that Output only has funds to cover its own storage costs. In this case, you will need to find a second unspent Output that will fund the storage costs of the new Outputs. To cover storage costs in this particular case, you can define a transaction with two Inputs and three Outputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Input #1"),": Corresponds to the UTXO holding the native tokens minted in step 1 of this tutorial. Remember that it also holds some ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," tokens that cover its own storage costs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Input #2"),": A UTXO that holds enough funds to cover the storage costs of ",(0,a.kt)("strong",{parentName:"p"},"Output #1")," and ",(0,a.kt)("strong",{parentName:"p"},"Output #3")," (see below).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Output #1"),": The Output holding some of the native tokens transferred from ",(0,a.kt)("strong",{parentName:"p"},"Input #1"),".  This Output also holds enough ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," tokens to cover its own storage costs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Output #2"),": The Output holding the remaining native tokens from ",(0,a.kt)("strong",{parentName:"p"},"Input #1")," that were not transferred to ",(0,a.kt)("strong",{parentName:"p"},"Output #1"),". This Output will also keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," tokens from ",(0,a.kt)("strong",{parentName:"p"},"Input #1")," to cover its storage costs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Output #3"),": The Output holding the remaining ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," from ",(0,a.kt)("strong",{parentName:"p"},"Input #2"),". It must at least cover its own storage costs."))),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"To perform this transaction, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Shimmer Node. You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"Shimmer testnet nodes"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The address that controls ",(0,a.kt)("strong",{parentName:"p"},"Output #1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x647f7..."),", the source address.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The keys of said address that allow unlocking its Outputs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The source address must also control at least another UTXO with enough funds to cover the storage costs of the new Outputs created by this transaction."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const client = new SingleNodeClient(API_ENDPOINT, { powProvider: new NeonPowProvider() });\nconst nodeInfo = await client.info();\n\n// The source address that controls an output with native tokens\nconst sourceAddress = "0x647f7...";\nconst sourceAddressBech32 = "rms1qpj8775lm...";\nconst sourceAddressPublicKey = "0x554....";\nconst sourceAddressPrivateKey = "0xa060ff...";\n\n// The address that will receive the native tokens in a new Output\nconst destAddress = "0xc8413...";\n')),(0,a.kt)("h2",{id:"query-native-tokens-output-to-be-spent"},"Query Native Tokens Output to be Spent"),(0,a.kt)("p",null,"The first thing you need to do is to find the Basic Output that holds the native tokens. The easiest way to do it is through a query to the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/inx-indexer/welcome/"},"indexation plugin"),", as shown below. You will need to obtain the full Output details, as you will need to use it as Input for your following transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexerPlugin = new IndexerPluginClient(client);\nconst outputList = await indexerPlugin.basicOutputs({\n    addressBech32: sourceAddressBech32,\n    hasNativeTokens: true\n});\n\nif (outputList.items.length === 0) {\n    throw new Error("No output with native tokens found on the source address");\n}\n\nconst consumedOutputNativeTokensID = outputList.items[0];\nconst consumedOutputNativeTokensDetails = await client.output(consumedOutputNativeTokensID);\nconst theOutput = consumedOutputNativeTokensDetails.output as IBasicOutput;\n\nif (!Array.isArray(theOutput.nativeTokens)) {\n    throw new Error("No native tokens to spend");\n}\n\n// 12 native tokens will be transferred\nconst nativeAmountTransferred = bigInt(12);\n\nconst currentNativeAmount = HexHelper.toBigInt256(theOutput.nativeTokens[0].amount);\nconst remainingNativeAmount = currentNativeAmount.minus(nativeAmountTransferred);\n \nif (remainingNativeAmount.lesser(bigInt(0))) {\n    throw new Error("Not enough funds");\n}\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputNativeTokensID));\n')),(0,a.kt)("p",null,"The query made to the indexation plugin includes the filter parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"hasNativeTokens")," so that you can easily find the Basic Output you are looking for in this case. In this tutorial, the Output holds at least ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," native tokens. Please take into account that in a real-world case, you would also need to ensure that the Output holds tokens of the class ID you are expecting."),(0,a.kt)("p",null,"At the end of this step, you know ",(0,a.kt)("strong",{parentName:"p"},"Input #1"),"."),(0,a.kt)("h2",{id:"define-the-new-native-tokens-output"},"Define the New Native Tokens Output"),(0,a.kt)("p",null,"The next step is to define ",(0,a.kt)("strong",{parentName:"p"},"Output #1")," that will hold the ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," native tokens as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const nativeTokensOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    // We don\'t know yet\n    amount: "0",\n    nativeTokens: [{\n        id: theOutput.nativeTokens[0].id,\n        amount: HexHelper.fromBigInt256(nativeAmountTransferred)\n    }],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: destAddress\n            }\n        }\n    ],\n    features: []\n};\n')),(0,a.kt)("p",null,"As in previous examples, the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," field is initially set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," so that you can later assign it depending on the storage costs of this Output. The unlock conditions refer to the destination address that will control this Output."),(0,a.kt)("p",null,"At the end of this step, you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #1"),"."),(0,a.kt)("h2",{id:"define-the-output-for-the-remaining-nativetokens"},"Define the Output for the Remaining NativeTokens"),(0,a.kt)("p",null,"The remainder Output is defined in the following snippet. In this case, the amount of protocol-defined tokens is set to be exactly the same as the original Input, as that should cover the storage costs of this Output. In fact, it is similar to the original one; the only difference is the number of native tokens. The unlock conditions refer to the source address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const remainderNativeTokensOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    // Amount is the same as we are not spending any protocol-defined tokens\n    amount: theOutput.amount,\n    nativeTokens: [{\n        id: theOutput.nativeTokens[0].id,\n        amount: HexHelper.fromBigInt256(remainingNativeAmount)\n    }],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: sourceAddress\n            }\n        }\n    ],\n    features: []\n};\n")),(0,a.kt)("p",null,"At the end of this step, you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #2"),"."),(0,a.kt)("h2",{id:"calculate-the-storage-costs"},"Calculate the Storage Costs"),(0,a.kt)("p",null,"In this step, you need to calculate the storage costs of the new native tokens Output, ",(0,a.kt)("strong",{parentName:"p"},"Output #3"),". The purpose of this calculation is to know the minimal amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," you need to use to cover the new Outputs you are going to generate. The storage cost corresponds to the previously defined ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeTokensOutput"),". However, to be on the safe side, you will need an Output that holds an amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," that can also cover the remaining amount once the storage costs of ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeTokensOutput")," are covered. To do so, you can pre-define the Output that will hold the remaining amount so that it can be calculated as its an extra cost. As a result, you can calculate the minimum amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," needed (",(0,a.kt)("inlineCode",{parentName:"p"},"minimumNeeded"),") for the target Output as shown bellow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const nativeTokensOutputStorageDeposit = TransactionHelper.\n        getStorageDeposit(nativeTokensOutput, nodeInfo.protocol.rentStructure);\nnativeTokensOutput.amount = nativeTokensOutputStorageDeposit.toString();\n\n// The remaining output remains in the origin address\nconst remainderStorageBasicOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    // We don\'t know yet\n    amount: "0",\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: sourceAddress\n            }\n        }\n    ],\n    features: []\n};\n\nconst remainderStorageDeposit = TransactionHelper.\n        getStorageDeposit(remainderStorageBasicOutput, nodeInfo.protocol.rentStructure);\n\nconst minimumNeeded = bigInt(nativeTokensOutputStorageDeposit).plus(bigInt(remainderStorageDeposit));\n')),(0,a.kt)("p",null,"At the end of this step, you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #3")," and you know the storage costs."),(0,a.kt)("h2",{id:"find-an-output-that-can-cover-storage-costs"},"Find an Output That Can Cover Storage Costs"),(0,a.kt)("p",null,"Once you know the storage costs, the problem is simply finding a suitable target Output from the Outputs your source address is controlling, as shown in the snippet below. The indexer plugin is used to find the unspent Basic Outputs that can fit your purpose. The ",(0,a.kt)("inlineCode",{parentName:"p"},"hasNativeTokens")," filter condition is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to avoid conflicts with ",(0,a.kt)("strong",{parentName:"p"},"Input #1"),". Once you have a list of potential Outputs, the first that has the minimal amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," you need will be used. ",(0,a.kt)("strong",{parentName:"p"},"Please take into account that the edge case of obtaining an Output of the exact amount is not covered in this script"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const outputList2 = await indexerPlugin.basicOutputs({\n    addressBech32: sourceAddressBech32,\n    hasNativeTokens: false\n});\n\nif (outputList2.items.length === 0) {\n    throw new Error("There are no outputs that can cover the storage cost");\n}\n\nlet storageCostsOutput: IBasicOutput | undefined = undefined;\nlet storageCostsOutputID: string | undefined = undefined;\nfor (const output of outputList2.items) {\n    const outputData = await client.output(output);\n    const outputAmount = bigInt(outputData.output.amount);\n    // We are not treating the case where the output amount is equal to the storage cost\n    if (outputAmount.greater(minimumNeeded)) {\n        storageCostsOutput = outputData.output as IBasicOutput;\n        storageCostsOutputID = output;\n        break;\n    }\n}\n\nif (!storageCostsOutput) {\n    throw new Error("There are no outputs that can cover the storage cost");\n}\n\nconsole.log("Output used to cover the storage costs: ", storageCostsOutputID);\n')),(0,a.kt)("p",null,"The Output obtained from this step becomes ",(0,a.kt)("strong",{parentName:"p"},"Input #2")," of our transaction."),(0,a.kt)("h2",{id:"define-the-transaction-essence"},"Define the Transaction Essence"),(0,a.kt)("p",null,"In this step, you will create the transaction essence. Before that, you will need to calculate and set the remaining amount. It will be equal to the original amount held by ",(0,a.kt)("strong",{parentName:"p"},"Input #2")," minus the storage cost of the native token Output (",(0,a.kt)("strong",{parentName:"p"},"Output #1"),"). As per the previous calculations, you know beforehand that the remaining amount will suffice to cover the storage costs of ",(0,a.kt)("strong",{parentName:"p"},"Output #3"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const remainderAmount = bigInt(storageCostsOutput.amount).minus(bigInt(nativeTokensOutputStorageDeposit));\nremainderStorageBasicOutput.amount = remainderAmount.toString();\n\ninputs.push(TransactionHelper.inputFromOutputId(storageCostsOutputID as string));\n\noutputs.push(nativeTokensOutput);\noutputs.push(remainderNativeTokensOutput);\noutputs.push(remainderStorageBasicOutput);\n\nconst inputsCommitment = TransactionHelper.\n        getInputsCommitment([consumedOutputNativeTokensDetails.output, storageCostsOutput]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: TransactionHelper.networkIdFromNetworkName(nodeInfo.protocol.networkName),\n    inputs,\n    inputsCommitment,\n    outputs\n};\n\nconst wsTsxEssence = new WriteStream();\nserializeTransactionEssence(wsTsxEssence, transactionEssence);\nconst essenceFinal = wsTsxEssence.finalBytes();\nconst essenceHash = Blake2b.sum256(essenceFinal);\n")),(0,a.kt)("p",null,"At the end of this step, you have created the transaction essence. It includes two Inputs :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"consumedOutputNativeTokensID"),", the source of the transferred native tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #2"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"storageCostsOutputID")," which pays the storage costs.")),(0,a.kt)("p",null,"And three Outputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"nativeTokensOutput"),", the destination of some of the native tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #2"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"remainderNativeTokensOutput"),", the remainder native tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #3"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"remainderStorageBasicOutput"),", the remainder of the storage costs.")),(0,a.kt)("h2",{id:"provide-the-transactions-unlock-signature"},"Provide the Transaction\u2019s Unlock Signature"),(0,a.kt)("p",null,"As two Inputs are being involved in this transaction, you will need to provide two unlocks. But, since the two Inputs are controlled by the same address, the second one is just a reference to the first one as shown bellow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const unlockSignature: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: sourceAddressPublicKey,\n        signature: Converter.bytesToHex(Ed25519.sign(Converter.hexToBytes(sourceAddressPrivateKey), essenceHash), true)\n    }\n};\n\nconst unlockRef: IReferenceUnlock = {\n    type: REFERENCE_UNLOCK_TYPE,\n    reference: 0\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [unlockSignature, unlockRef]\n};\n")),(0,a.kt)("h2",{id:"submit-the-block"},"Submit the Block"),(0,a.kt)("p",null,"Finally, you have to submit a Block. After the block is confirmed, you can query the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/"},"Shimmer Explorer")," to see the state of the different addresses and Outputs involved in this tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const block: IBlock = {\n    protocolVersion: DEFAULT_PROTOCOL_VERSION,\n    parents: [],\n    payload: transactionPayload,\n    nonce: "0",\n};\n\nconst blockId = await client.blockSubmit(block);\nconsole.log("Block Id:", blockId);\n')),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,a.kt)("p",null,"You can download the code to send native tokens from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples/shimmer-native-token-transaction-tutorial/src/native-tokens-transaction.ts"},"iota.js repository"),"."))}c.isMDXComponent=!0}}]);