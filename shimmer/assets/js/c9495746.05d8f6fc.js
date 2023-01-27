"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[88692],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16201:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={description:"Claim an NFT under conditional transfer with iota.js.",image:"/img/client_banner.png",keywords:["tutorial","nft","output","claim","storage","deposit","conditional","transfer","refund"]},i="Claim NFT Under Conditional Transfer",u={unversionedId:"tutorials/nft-transactions/claim-nft",id:"tutorials/nft-transactions/claim-nft",title:"Claim NFT Under Conditional Transfer",description:"Claim an NFT under conditional transfer with iota.js.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/nft-transactions/05-claim-nft.md",sourceDirName:"tutorials/nft-transactions",slug:"/tutorials/nft-transactions/claim-nft",permalink:"/shimmer/iotajs/tutorials/nft-transactions/claim-nft",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/tutorials/nft-transactions/05-claim-nft.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Claim an NFT under conditional transfer with iota.js.",image:"/img/client_banner.png",keywords:["tutorial","nft","output","claim","storage","deposit","conditional","transfer","refund"]},sidebar:"docs",previous:{title:"Create an NFT Transaction",permalink:"/shimmer/iotajs/tutorials/nft-transactions/nft-transaction"},next:{title:"@iota/iota.js",permalink:"/shimmer/iotajs/references/client/api_ref"}},s={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Query For the NFT Output",id:"query-for-the-nft-output",level:2},{value:"Set the New Unlock Conditions",id:"set-the-new-unlock-conditions",level:2},{value:"Refund the NFT Issuer",id:"refund-the-nft-issuer",level:2},{value:"Calculate the NFT Storage Costs",id:"calculate-the-nft-storage-costs",level:2},{value:"Cover Storage Deposits",id:"cover-storage-deposits",level:2},{value:"Define the Remainder Output",id:"define-the-remainder-output",level:3},{value:"Find an Output With Enough Funds",id:"find-an-output-with-enough-funds",level:3},{value:"Define the Transaction",id:"define-the-transaction",level:2},{value:"Unlock the Outputs",id:"unlock-the-outputs",level:2},{value:"Submit the Block",id:"submit-the-block",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],p={toc:l};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"claim-nft-under-conditional-transfer"},"Claim NFT Under Conditional Transfer"),(0,a.kt)("p",null,"In the previous section of this tutorial, you ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/nft-transactions/nft-transaction"},"transferred and NFT")," to a new owner. However,\nsince you added\na ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#storage-deposit-return"},"storage deposit return unlock condition"),"\nto the transfer, the new owner will need to create a new Output to return the deposit."),(0,a.kt)("p",null,"This section will show you how to refund the issuer of the NFT and gain complete control over the NFT. To do so, you\nwill need to do the following:"),(0,a.kt)("p",null,"Issue a ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/nft-transactions/nft-transaction"},"new NFT transaction")," that changes the unlock conditions so that the only remaining\ncondition is\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#address"},"address"),"."),(0,a.kt)("p",null,"Create an additional Input with enough funds to cover the storage deposit for the new NFT Output,\nGenerate an Output to refund the issuer."),(0,a.kt)("p",null,"So, the transaction will include two Inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #1")," The ",(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/tutorials/nft-transactions/mint-new-nft"},"NFT Input you minted"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #2")," A Basic Input that holds enough funds to cover the storage deposit of the new NFT Output controlled by the\nnew NFT Owner.")),(0,a.kt)("p",null,"The transaction will also include three Outputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #1")," The new NFT Output, controlled by the new NFT Owner."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #2")," The refund Output, controlled by the NFT Issuer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #3")," The Output holding the remaining funds after covering the storage costs of ",(0,a.kt)("strong",{parentName:"li"},"Output #1")," (controlled by the NFT\nOwner).")),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"To create this transaction, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Shimmer Node. You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet nodes"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The NFT ID of your NFT, in hexadecimal format ",(0,a.kt)("inlineCode",{parentName:"p"},"0x7d08..."),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The keys of the address you ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/nft-transactions/nft-transaction"},"transferred your NFT to"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A UTXO controlled by the new owner of the NFT with enough funds to cover the new NFT Output storage costs."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\nconst nodeInfo = await client.info();\n\nconst nftOwnerAddr = "0x57d3...";\nconst nftOwnerBech32Addr = "rms1qpta...";\nconst nftOwnerPubKey = "0xd38f...";\nconst nftOwnerPrivateKey = "0xc2be...";\n')),(0,a.kt)("h2",{id:"query-for-the-nft-output"},"Query For the NFT Output"),(0,a.kt)("p",null,"You will first need to retrieve the NFT Output of your NFT from the network. The easiest way to do so is through a query\nto the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/inx-indexer/welcome/"},"indexation plugin")," by NFT ID. You need to obtain the full\nOutput details as you need to use them as Input for the transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexerPlugin = new IndexerPluginClient(client);\nconst outputList = await indexerPlugin.nft(nftId);\nif (outputList.items.length === 0) {\n    throw new Error("NFT not found");\n}\n\nconst consumedOutputId = outputList.items[0];\nconsole.log("Consumed Output Id", consumedOutputId);\n\nconst initialNftOutputDetails = await client.output(consumedOutputId);\nconst initialNftOutput: INftOutput = initialNftOutputDetails.output as INftOutput;\n')),(0,a.kt)("p",null,"At the end of this step you have obtained ",(0,a.kt)("strong",{parentName:"p"},"Input #1")," of your transaction."),(0,a.kt)("h2",{id:"set-the-new-unlock-conditions"},"Set the New Unlock Conditions"),(0,a.kt)("p",null,"You can create the new NFT Output by cloning the ",(0,a.kt)("a",{parentName:"p",href:"#query-nft-output"},"one received from the node"),", removing\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#storage-deposit-return"},"storage deposit return unlock condition"),",\nand only keep\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#address"},"address unlock condition"),".\nThat way, you will have full control of the NFT through your address keys."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," field is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so you can later calculate the minimum storage deposit needed for your new NFT Output.\nKeep in mind that you should ensure that you assign the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"nftId")," to your new NFT Output, in this case the\noriginal NFT ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const nextNftOutput: INftOutput = JSON.parse(JSON.stringify(initialNftOutput));\nnextNftOutput.unlockConditions =;\n\nconst nextNftOutput: INftOutput = JSON.parse(JSON.stringify(initialNftOutput));\nnextNftOutput.unlockConditions = nextNftOutput.unlockConditions.filter(\n    (condition) => condition.type !== STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_TYPE\n);\n\nnextNftOutput.nftId = nftId;\nnextNftOutput.amount = "0";\n')),(0,a.kt)("p",null,"At the end of this step you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #1")," of your transaction."),(0,a.kt)("h2",{id:"refund-the-nft-issuer"},"Refund the NFT Issuer"),(0,a.kt)("p",null,"In this step, you need to create a new Basic Output to refund the Issuer of the NFT so that you take full control over\nit. ",(0,a.kt)("strong",{parentName:"p"},"You don't need to use your own funds to refund the Issuer"),". You only need to take the ",(0,a.kt)("inlineCode",{parentName:"p"},"SMR")," deposited in the\noriginal NFT Output and transfer it to an Output controlled by the Issuer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const refundCondition = initialNftOutput.unlockConditions[1] as IStorageDepositReturnUnlockCondition;\n\nconst refundToBePerformed = bigInt(refundCondition.amount);\n\nconst refundOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: refundToBePerformed.toString(),\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: (refundCondition.returnAddress as IEd25519Address).pubKeyHash\n            }\n        }\n    ]\n};\n")),(0,a.kt)("p",null,"At the end of this step you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #2")," of your transaction."),(0,a.kt)("h2",{id:"calculate-the-nft-storage-costs"},"Calculate the NFT Storage Costs"),(0,a.kt)("p",null,"Once you have returned the original storage deposit, you will need to calculate the storage costs for your new NFT. This\nway, you will have an estimation of the minimum amount of funds that should be held by a transaction Output covering\nthem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const depositNft = bigInt(TransactionHelper.getStorageDeposit(nextNftOutput, nodeInfo.protocol.rentStructure));\nnextNftOutput.amount = depositNft.toString();\n")),(0,a.kt)("p",null,"At the end of this step, you have set the right amounts to cover NFT storage deposits."),(0,a.kt)("h2",{id:"cover-storage-deposits"},"Cover Storage Deposits"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#calculate-the-nft-storage-costs"},"calculated the storage deposit"),", you will need to find a Basic Output\nowned by the new NFT owner that can cover the deposit. The minimal amount of funds is determined by the storage cost of\nthe NFT plus the storage costs of the Output holding the remainder funds."),(0,a.kt)("h3",{id:"define-the-remainder-output"},"Define the Remainder Output"),(0,a.kt)("p",null,"The remainder Output is just a Basic Output, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const remainderOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: "0",\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: nftOwnerAddr\n            }\n        }\n    ]\n};\n\nconst remainderOutputCost = bigInt(TransactionHelper.getStorageDeposit(remainderOutput, nodeInfo.protocol.rentStructure));\nconst totalCost = depositNft.plus(remainderOutputCost);\n')),(0,a.kt)("p",null,"At the end of this sub-step you know the total cost that should be covered by your Output at a minimum."),(0,a.kt)("h3",{id:"find-an-output-with-enough-funds"},"Find an Output With Enough Funds"),(0,a.kt)("p",null,"You can find the right Basic Output by querying\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/inx-indexer/welcome/"},"indexation plugin"),". You should check that the Output has not\nbeen spent yet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},' const basicOutputList = await indexerPlugin.basicOutputs({\n    addressBech32: nftOwnerBech32Addr\n});\n\nlet costsOutput: IBasicOutput | undefined;\nlet costsOutputId: string | undefined;\nfor (const basicOutput of basicOutputList.items) {\n    const theOutput = await client.output(basicOutput)\n    if (theOutput.metadata.isSpent === false) {\n        const output = theOutput.output as IBasicOutput;\n        const amount = bigInt(output.amount);\n        if (amount.greater(totalCost)) {\n            costsOutputId = basicOutput;\n            costsOutput = output;\n            break;\n        }\n    }\n}\n\nif (!costsOutput) {\n    throw new Error("No Outputs found to refund and cover costs");\n}\n\nremainderOutput.amount = bigInt(costsOutput.amount).minus(depositNft).toString();\n')),(0,a.kt)("p",null,"At the end of this step you have defined ",(0,a.kt)("strong",{parentName:"p"},"Output #3")," of your transaction."),(0,a.kt)("h2",{id:"define-the-transaction"},"Define the Transaction"),(0,a.kt)("p",null,"The next thing you need to do is define the transaction essence, as shown bellow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const inputs: IUTXOInput[] = [];\nconst outputs: (INftOutput | IBasicOutput)[] = [];\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId));\ninputs.push(TransactionHelper.inputFromOutputId(costsOutputId as string));\n\noutputs.push(nextNftOutput);\noutputs.push(refundOutput);\noutputs.push(remainderOutput);\n\nconst inputsCommitment = TransactionHelper.getInputsCommitment([initialNftOutput, costsOutput]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: TransactionHelper.networkIdFromNetworkName(nodeInfo.protocol.networkName),\n    inputs,\n    inputsCommitment,\n    outputs\n};\n")),(0,a.kt)("p",null,"At the end of this step, you have created the transaction essence. It includes two Inputs :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"consumedOutputId"),", the last NFT unspent Output of your NFT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input #2"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"costsOutputId"),", which pays the storage costs.")),(0,a.kt)("p",null,"And three Outputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"nextNftOutput"),", the next NFT Output of your NFT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #2"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"refundOutput"),", the refund made to the Issuer of your NFT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output #3"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"remainderOutput"),", the remainder of the storage costs.")),(0,a.kt)("h2",{id:"unlock-the-outputs"},"Unlock the Outputs"),(0,a.kt)("p",null,"The unlock condition you need to provide corresponds to the signature calculated against the transaction essence using\nthe private key of the NFT Owner. The same signature also unlocks the second Input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const essenceHash = TransactionHelper.getTransactionEssenceHash(transactionEssence);\n\nconst unlockConditionNft: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: nftOwnerPubKey,\n        signature: Converter.bytesToHex(Ed25519.sign(Converter.hexToBytes(nftOwnerPrivateKey), essenceHash), true)\n    }\n};\n\nconst unlockConditionCost: IReferenceUnlock = {\n    type: REFERENCE_UNLOCK_TYPE,\n    reference: 0\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [unlockConditionNft, unlockConditionCost]\n};\n")),(0,a.kt)("h2",{id:"submit-the-block"},"Submit the Block"),(0,a.kt)("p",null,"Finally, you should submit the block. After the block is confirmed, if you query your NFT ID\nthrough ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/shimmer"},"the Shimmer Explorer"),", you will find the new NFT Output with the\nupdated state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const block: IBlock = {\n    protocolVersion: DEFAULT_PROTOCOL_VERSION,\n    parents: [],\n    payload: transactionPayload,\n    nonce: "0",\n};\n\nconst blockId = await client.blockSubmit(block);\nconsole.log("Block Id:", blockId);\n')),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,a.kt)("p",null,"The complete source code of this part of the tutorial is available in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/blob/feat/stardust/packages/iota/examples/shimmer-nft-transaction-tutorial/src/claim-nft.ts"},"official iota.js GitHub repository"),"."))}c.isMDXComponent=!0}}]);