"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const o={description:"Transfer funds using the iota.js library: prepare the input and outputs, submit the block and check your results.",image:"/img/client_banner.png",keywords:["tutorial","origin address","ed25519 format","destination address","output","new output","unlock conditions","transactions payload","transactions essence","output id","public key"]},r="Transfer Funds",i={unversionedId:"tutorials/value-transactions/transfer-funds",id:"tutorials/value-transactions/transfer-funds",title:"Transfer Funds",description:"Transfer funds using the iota.js library: prepare the input and outputs, submit the block and check your results.",source:"@site/next/external/iota.js/documentation/docs/tutorials/value-transactions/08-transfer-funds.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/transfer-funds",permalink:"/next/iotajs/tutorials/value-transactions/transfer-funds",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/tutorials/value-transactions/08-transfer-funds.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Transfer funds using the iota.js library: prepare the input and outputs, submit the block and check your results.",image:"/img/client_banner.png",keywords:["tutorial","origin address","ed25519 format","destination address","output","new output","unlock conditions","transactions payload","transactions essence","output id","public key"]},sidebar:"docs",previous:{title:"Query Output Details",permalink:"/next/iotajs/tutorials/value-transactions/query-output-details"},next:{title:"Understanding Deposits",permalink:"/next/iotajs/tutorials/value-transactions/understanding-deposits"}},u={},c=[{value:"Prepare the Input",id:"prepare-the-input",level:2},{value:"Prepare the Outputs",id:"prepare-the-outputs",level:2},{value:"Define the Output Type",id:"define-the-output-type",level:3},{value:"Provide the Unlock Conditions",id:"provide-the-unlock-conditions",level:3},{value:"Create a Transaction Payload",id:"create-a-transaction-payload",level:3},{value:"Create a transaction essence",id:"create-a-transaction-essence",level:4},{value:"Sign the transaction essence",id:"sign-the-transaction-essence",level:4},{value:"Submit the Block",id:"submit-the-block",level:2},{value:"Check the Results",id:"check-the-results",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transfer-funds"},"Transfer Funds"),(0,s.kt)("p",null,"This example uses the following addresses declared as constants, but you should use\nthe ",(0,s.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/generate-addresses"},"addresses you generated"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Origin address"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"rms1qp5kej93urfvrc5lhuay7jgupjwuwvxxunzwp59tvqg7nufqntcpxp26uj8"),"\nor ",(0,s.kt)("inlineCode",{parentName:"p"},"0x696cc8b1e0d2c1e29fbf3a4f491c0c9dc730c6e4c4e0d0ab6011e9f1209af013")," in Ed25519 format.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Destination address:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"rms1qz7f4y6kje2xyykzxljfazqlc67mmy9apmrpgqu3nqsh9uz6qxcf2zqse0d"),"\nor ",(0,s.kt)("inlineCode",{parentName:"p"},"0xbc9a935696546212c237e49e881fc6bdbd90bd0ec6140391982172f05a01b095")," in Ed25519 format."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const sourceAddress = "0x696cc...";\nconst sourceAddressBech32 = "rms1qp5kej9...";\nconst sourceAddressPublicKey = "0x5782872d...";\nconst sourceAddressPrivateKey = "0x003dd7e...";\n\nconst destAddress = "0xbc9a935...";\n')),(0,s.kt)("p",null,"You will need to take the following steps to transfer funds:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#prepare-the-input"},"Prepare the input")," by selecting the output to be consumed and turn into a transaction input."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#prepare-the-outputs"},"Prepare the outputs"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#define-the-output-type"},"Determine the new outputs that will be generated")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#provide-the-unlock-conditions"},"Provide the unlock conditions for such new outputs")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#create-a-transaction-payload"},"Create a transaction payload"),", by wrapping the inputs and outputs into a\n",(0,s.kt)("a",{parentName:"li",href:"#create-a-transaction-essence"},"transaction essence"),"."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#sign-the-transaction-essence"},"Sign the transaction essence")," with the corresponding private key so those inputs\ncan be unlocked."),(0,s.kt)("li",{parentName:"ol"},"Attach a transaction payload (essence + unlock conditions) into a block and ",(0,s.kt)("a",{parentName:"li",href:"#submit-the-block"},"submit the block"),"\n.")))),(0,s.kt)("h2",{id:"prepare-the-input"},"Prepare the Input"),(0,s.kt)("p",null,"In this example, we will consume the output that holds the initial\nfunds ",(0,s.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/request-funds-from-the-faucet"},"requested from the testnet Faucet"),". As\nthe unit of measurement is the Glow, you should use a ",(0,s.kt)("inlineCode",{parentName:"p"},"BigInt")," data type to perform arithmetic operations. In this\ncase, the transferred value is ",(0,s.kt)("inlineCode",{parentName:"p"},"50000")," Glow."),(0,s.kt)("p",null,"An input is represented by the type ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/interfaces/IUTXOInput"},(0,s.kt)("inlineCode",{parentName:"a"},"IUTXOInput")),", and can be easily\nobtained from an output ID using\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/classes/TransactionHelper#inputfromoutputid"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionHelper.inputFromOutputId()")),"\nfunction, as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const consumedOutputId = "0xcba9a6616df8e8e323d8203ea5d1a42e2e7c64dc9ead6b59f5d26bdc301efa540000";\nconst outputDetails = await client.output(consumedOutputId);\nconst totalFunds = bigInt(outputDetails.output.amount);\n\nconst amountToSend = bigInt("50000");\n\nconst inputs: IUTXOInput[] = [];\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId));\n')),(0,s.kt)("h2",{id:"prepare-the-outputs"},"Prepare the Outputs"),(0,s.kt)("p",null,"In this case, you will need to generate two new outputs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The output where the ",(0,s.kt)("inlineCode",{parentName:"li"},"50000")," Glow will reside, associated to the destination address."),(0,s.kt)("li",{parentName:"ul"},"The output where the remaining funds will stay, associated to the origin address.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst outputs: IBasicOutput[] = [];\n\nconst basicOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: amountToSend.toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: destAddress\n            }\n        }\n    ],\n    features: []\n};\n")),(0,s.kt)("h3",{id:"define-the-output-type"},"Define the Output Type"),(0,s.kt)("p",null,"You can define a basic output by assigning the ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/api_ref#basic_output_type"},(0,s.kt)("inlineCode",{parentName:"a"},"BASIC_OUTPUT_TYPE")),"\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"type")," field."),(0,s.kt)("h3",{id:"provide-the-unlock-conditions"},"Provide the Unlock Conditions"),(0,s.kt)("p",null,"This example above uses\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/api_ref#address_unlock_condition_type"},(0,s.kt)("inlineCode",{parentName:"a"},"ADDRESS_UNLOCK_CONDITION_TYPE")),".\nThis means that whoever controls the specified address can unlock the funds (i.e. the owner of the corresponding\nprivate key)."),(0,s.kt)("p",null,"The output that will hold the remaining funds is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// The remaining output that remains in the origin address\nconst remainderBasicOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: totalFunds.minus(amountToSend).toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: originAddress\n            }\n        }\n    ],\n    features: []\n};\n\noutputs.push(basicOutput);\noutputs.push(remainderBasicOutput);\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Where"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of funds will be the total funds of the original input minus the amount now held by the new output."),(0,s.kt)("li",{parentName:"ul"},"The unlock condition, in this case, will still be ",(0,s.kt)("inlineCode",{parentName:"li"},"ADDRESS_UNLOCK_CONDITION_TYPE"),", but it will correspond to the\norigin Ed25519 address.")),(0,s.kt)("h3",{id:"create-a-transaction-payload"},"Create a Transaction Payload"),(0,s.kt)("h4",{id:"create-a-transaction-essence"},"Create a transaction essence"),(0,s.kt)("p",null,"Before you can create a transaction payload, you will need to create a transaction essence, as it will\nbe used to calculate a hash for the corresponding signature."),(0,s.kt)("p",null,"The transaction essence must include the commitments to the inputs so that it is ensured that those outputs already\nexist at the time of submitting the transaction. You can retrieve them using\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/classes/TransactionHelper#getinputscommitment"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionHelper.getInputsCommitment()")),"\nfunction as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const inputsCommitment = TransactionHelper.getInputsCommitment([outputDetails.output]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: protocolInfo.networkId,\n    inputs,\n    inputsCommitment,\n    outputs\n};\n\nconst wsTsxEssence = new WriteStream();\nserializeTransactionEssence(wsTsxEssence, transactionEssence);\nconst essenceFinal = wsTsxEssence.finalBytes();\n\nconst essenceHash = Blake2b.sum256(essenceFinal);\n")),(0,s.kt)("h4",{id:"sign-the-transaction-essence"},"Sign the transaction essence"),(0,s.kt)("p",null,"Once you have calculated the hash of the transaction essence, you can create the final transaction payload by adding the\ncorresponding signature unlock:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const privateKey = Converter.hexToBytes(sourceAddressPrivateKey);\nconst signatureUnlock: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: sourceAddressPublicKey,\n        signature: Converter.bytesToHex(Ed25519.sign(privateKey, essenceHash), true)\n    }\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [signatureUnlock]\n};\n")),(0,s.kt)("p",null,"The signature unlock is composed of the ",(0,s.kt)("strong",{parentName:"p"},"public key")," corresponding to the source address (not the\nhash) and the signature represented in hex format. The node receiving the transaction needs the public key to properly\nverify the attached signature."),(0,s.kt)("p",null,"You must note that ",(0,s.kt)("em",{parentName:"p"},"for each input")," there should be one unlock in the transaction payload. If you need to\nunlock other\ninputs with the same signature, then you should\nuse ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/interfaces/IReferenceUnlock"},(0,s.kt)("inlineCode",{parentName:"a"},"IReferenceUnlock"))," (\nsee ",(0,s.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/sweep-outputs-to-reduce-deposits"},"Sweep Outputs To Reduce Deposits"),")."),(0,s.kt)("h2",{id:"submit-the-block"},"Submit the Block"),(0,s.kt)("p",null,"In order the transaction to be attached to the Tangle, you will need to add it to a block.\nYou can retrieve the parents for the block using\nthe ",(0,s.kt)("a",{parentName:"p",href:"../../references/client/classes/SingleNodeClient#tips"},(0,s.kt)("inlineCode",{parentName:"a"},"SingleNodeClient.tips()"))," function or you can leave it\nempty if you are using the ",(0,s.kt)("a",{parentName:"p",href:"../../references/pow-neon/classes/NeonPowProvider"},(0,s.kt)("inlineCode",{parentName:"a"},"NeonPowProvider")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const block: IBlock = {\n    protocolVersion: DEFAULT_PROTOCOL_VERSION,\n    parents: [],\n    payload: transactionPayload,\n    nonce: "0",\n};\n\nconst blockId = await client.blockSubmit(block);\n\nconsole.log(blockId);\n')),(0,s.kt)("h2",{id:"check-the-results"},"Check the Results"),(0,s.kt)("p",null,"If you have transferred the funds successfully, you have:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Created a new block identified by a certain ",(0,s.kt)("inlineCode",{parentName:"li"},"Block Id")," (Block Ids are ",(0,s.kt)("inlineCode",{parentName:"li"},"32")," bytes long, i.e. ",(0,s.kt)("inlineCode",{parentName:"li"},"256")," bit)."),(0,s.kt)("li",{parentName:"ul"},"Create a new transaction identified by a ",(0,s.kt)("inlineCode",{parentName:"li"},"transaction Id")," (Transaction Ids are ",(0,s.kt)("inlineCode",{parentName:"li"},"32")," bytes long)."),(0,s.kt)("li",{parentName:"ul"},"Created two new outputs on the ledger, one associated with each address and identified by their corresponding ID (\nOutput Ids are ",(0,s.kt)("inlineCode",{parentName:"li"},"34")," bytes long)."),(0,s.kt)("li",{parentName:"ul"},"After the transaction is confirmed, the funds of the origin address will be ",(0,s.kt)("inlineCode",{parentName:"li"},"999.95 SMR")," and the funds of the\ndestination address will be ",(0,s.kt)("inlineCode",{parentName:"li"},"0.05 SMR")," (",(0,s.kt)("inlineCode",{parentName:"li"},"50,000 Glow"),") as ",(0,s.kt)("inlineCode",{parentName:"li"},"1 SMR")," is ",(0,s.kt)("inlineCode",{parentName:"li"},"10^6")," (",(0,s.kt)("inlineCode",{parentName:"li"},"1M"),") Glow.")),(0,s.kt)("p",null,"You can now check the balance of both addresses using\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"Shimmer Testnet Explorer"),"."),(0,s.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,s.kt)("p",null,"By this point in the tutorial, your ",(0,s.kt)("inlineCode",{parentName:"p"},"send-value-transactions.ts"),"file should look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Bip32Path, Bip39, Blake2b, Ed25519} from "@iota/crypto.js";\nimport {\n    ADDRESS_UNLOCK_CONDITION_TYPE,\n    BASIC_OUTPUT_TYPE,\n    Bech32Helper, DEFAULT_PROTOCOL_VERSION,\n    ED25519_ADDRESS_TYPE, ED25519_SIGNATURE_TYPE,\n    Ed25519Address,\n    Ed25519Seed,\n    generateBip44Address,\n    IBasicOutput, IBlock,\n    IKeyPair, ISignatureUnlock,\n    ITransactionEssence, ITransactionPayload,\n    IUTXOInput,\n    serializeTransactionEssence, SIGNATURE_UNLOCK_TYPE,\n    SingleNodeClient,\n    TRANSACTION_ESSENCE_TYPE, TRANSACTION_PAYLOAD_TYPE,\n    TransactionHelper\n} from "@iota/iota.js";\nimport {Converter} from "@iota/util.js";\nimport {NeonPowProvider} from "@iota/pow-neon.js";\nimport {Converter, WriteStream} from "@iota/util.js";\n\n\nconst API_ENDPOINT = "https://api.testnet.shimmer.network";\nconst client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\nconst protocolInfo = async () => {\n    await client.protocolInfo();\n}\n\nconsole.log(protocolInfo);\n\nconst sourceAddress = "0x1f3df4a2c6e785cf61bac23c68363fc226c2268cc03175e07b84c01f370dcd11";\nconst sourceAddressBech32 = "rms1qq0nma9zcmnctnmphtprc6pk8lpzds3x3nqrza0q0wzvq8ehphx3znqy4vh";\nconst sourceAddressPublicKey = "0xb549f7f8be80eb101ec5d4ea5be2c2e5aaed110ab12941550456c5e5c1e83ff0f7a2e789c9fd56d44d856fd45389e7b44dac1428a31be42de86ab902be5ae2f9";\nconst sourceAddressPrivateKey = "0xf7a2e789c9fd56d44d856fd45389e7b44dac1428a31be42de86ab902be5ae2f9";\n\nconst destAddress = "0xb94bf2aa9c30ada6690a98b11c1e75f30871621e8f076e73e97d8360aee5a71b";\n\nconst consumedOutputId = "0xcba9a6616df8e8e323d8203ea5d1a42e2e7c64dc9ead6b59f5d26bdc301efa540000";\nconst outputDetails = await client.output(consumedOutputId);\nconst totalFunds = bigInt(outputDetails.output.amount);\n\nconst amountToSend = bigInt("50000");\n\nconst inputs: IUTXOInput[] = [];\n\ninputs.push(TransactionHelper.inputFromOutputId(consumedOutputId));\n\n\nconst outputs: IBasicOutput[] = [];\n\nconst basicOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: amountToSend.toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: destAddress\n            }\n        }\n    ],\n    features: []\n};\n\n// The remaining output that remains in the origin address\nconst remainderBasicOutput: IBasicOutput = {\n    type: BASIC_OUTPUT_TYPE,\n    amount: totalFunds.minus(amountToSend).toString(),\n    nativeTokens: [],\n    unlockConditions: [\n        {\n            type: ADDRESS_UNLOCK_CONDITION_TYPE,\n            address: {\n                type: ED25519_ADDRESS_TYPE,\n                pubKeyHash: sourceAddress\n            }\n        }\n    ],\n    features: []\n};\n\noutputs.push(basicOutput);\noutputs.push(remainderBasicOutput);\n\nconst inputsCommitment = TransactionHelper.getInputsCommitment([outputDetails.output]);\n\nconst transactionEssence: ITransactionEssence = {\n    type: TRANSACTION_ESSENCE_TYPE,\n    networkId: protocolInfo.networkId,\n    inputs,\n    inputsCommitment,\n    outputs\n};\n\nconst wsTsxEssence = new WriteStream();\nserializeTransactionEssence(wsTsxEssence, transactionEssence);\nconst essenceFinal = wsTsxEssence.finalBytes();\n\nconst essenceHash = Blake2b.sum256(essenceFinal);\n\nconst privateKey = Converter.hexToBytes(sourceAddressPrivateKey);\nconst signatureUnlock: ISignatureUnlock = {\n    type: SIGNATURE_UNLOCK_TYPE,\n    signature: {\n        type: ED25519_SIGNATURE_TYPE,\n        publicKey: sourceAddressPublicKey,\n        signature: Converter.bytesToHex(Ed25519.sign(privateKey, essenceHash), true)\n    }\n};\n\nconst transactionPayload: ITransactionPayload = {\n    type: TRANSACTION_PAYLOAD_TYPE,\n    essence: transactionEssence,\n    unlocks: [signatureUnlock]\n};\n\nconst block: IBlock = {\n    protocolVersion: DEFAULT_PROTOCOL_VERSION,\n    parents: [],\n    payload: transactionPayload,\n    nonce: "0",\n};\n\nconst blockId = await client.blockSubmit(block);\n\nconsole.log(blockId);\n')))}p.isMDXComponent=!0}}]);