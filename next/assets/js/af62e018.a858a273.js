"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47151],{50247:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}c.isMDXComponent=!0},43243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>v,default:()=>O,frontMatter:()=>g,metadata:()=>_,toc:()=>T});var a=n(87462),o=(n(67294),n(3905)),s=n(34259),c=n(18679),u=n(69319);const i={toc:[]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA tokens with an expiration date and claims them.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nlet manager\nlet bob\n\nasync function run() {\n    try {\n        manager = await getUnlockedManager();\n        const alice = await manager.getAccount('Alice');\n        bob = await manager.getAccount('Bob');\n\n        manager.listen(['NewOutput'], handleNewOutputOfBob)\n\n        const recipientAddress = bob.meta.publicAddresses[0].address\n        const amount = '1000000';\n\n        const outputData = await alice.prepareOutput(\n            {\n                recipientAddress,\n                amount,\n                unlocks: {\n                    expiration: {\n                        unixTime: Math.round(new Date().getTime() / 1000) + 15000\n                    }\n                }\n            },\n        );\n\n        const resp = await alice.sendOutputs([outputData])\n        console.log('Transaction is sent', resp)\n\n        // Sync account to get the output event\n        setTimeout(async () => {\n            await bob.sync();\n        }, 10000)\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n}\n\nasync function handleNewOutputOfBob(err, data) {\n    console.log('Output received:', data)\n    const event = JSON.parse(data)\n    if (event.accountIndex === bob.meta.index) {\n        const outputId = event.event.NewOutput.output.outputId\n        await bob.sync()\n        const resp = await bob.claimOutputs([outputId])\n        console.log('Output has been claimed in the following transaction:', resp)\n        process.exit(0)\n    }\n}\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 21-claim-outputs.js"))}d.isMDXComponent=!0;const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Transaction is sent {\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: \'8342982141227064571\',\n      inputs: [Array],\n      inputsCommitment: \'0xe564a6ec7749b3c09e06b05c76c95b37a34d0fd026dfb4082b8e4ff900f9dc81\',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: \'0x8ce286630d376d3f6f2c74c1f758e38a0b88d776887aa6e4c7af0c125b533c7f\',\n  inclusionState: \'Pending\',\n  timestamp: \'1663005430349\',\n  transactionId: \'0xad3f8e00af9d56d22eff5ec730e01918e52d80c87e94859e00907099091aa95a\',\n  networkId: \'8342982141227064571\',\n  incoming: false,\n  note: null\n}\nOutput received: {"accountIndex":0,"event":{"NewOutput":{"output":{"outputId":"0xad3f8e00af9d56d22eff5ec730e01918e52d80c87e94859e00907099091aa95a0100","metadata":{"blockId":"0x8ce286630d376d3f6f2c74c1f758e38a0b88d776887aa6e4c7af0c125b533c7f","transactionId":"0xad3f8e00af9d56d22eff5ec730e01918e52d80c87e94859e00907099091aa95a","outputIndex":1,"isSpent":false,"milestoneIndexBooked":974130,"milestoneTimestampBooked":1663005433,"ledgerIndex":974130},"output":{"type":3,"amount":"998837200","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0xeed1e4e3e9e7555e2f1592594bf916523e7fef3a9a8c0d630a4934440b822647"}}]},"isSpent":false,"address":{"type":0,"pubKeyHash":"0xeed1e4e3e9e7555e2f1592594bf916523e7fef3a9a8c0d630a4934440b822647"},"networkId":"8342982141227064571","remainder":true,"chain":[{"hardened":true,"bs":[128,0,0,44]},{"hardened":true,"bs":[128,0,16,123]},{"hardened":true,"bs":[128,0,0,0]},{"hardened":true,"bs":[128,0,0,0]},{"hardened":true,"bs":[128,0,0,0]}]},"transaction":null,"transactionInputs":null}}}\nOutput received: {"accountIndex":1,"event":{"NewOutput":{"output":{"outputId":"0xad3f8e00af9d56d22eff5ec730e01918e52d80c87e94859e00907099091aa95a0000","metadata":{"blockId":"0x8ce286630d376d3f6f2c74c1f758e38a0b88d776887aa6e4c7af0c125b533c7f","transactionId":"0xad3f8e00af9d56d22eff5ec730e01918e52d80c87e94859e00907099091aa95a","outputIndex":0,"isSpent":false,"milestoneIndexBooked":974130,"milestoneTimestampBooked":1663005433,"ledgerIndex":974131},"output":{"type":3,"amount":"1000000","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0x085748b21812b9fd706d58983a7b16dabe8a068bd8473ee1cd322fc9e02d8703"}}]},"isSpent":false,"address":{"type":0,"pubKeyHash":"0x085748b21812b9fd706d58983a7b16dabe8a068bd8473ee1cd322fc9e02d8703"},"networkId":"8342982141227064571","remainder":false,"chain":[{"hardened":true,"bs":[128,0,0,44]},{"hardened":true,"bs":[128,0,16,123]},{"hardened":true,"bs":[128,0,0,1]},{"hardened":true,"bs":[128,0,0,0]},{"hardened":true,"bs":[128,0,0,0]}]},"transaction":null,"transactionInputs":null}}}\nOutput has been claimed in the following transaction: [\n  {\n    payload: { type: 6, essence: [Object], unlocks: [Array] },\n    blockId: \'0x3881d8a790b70d6cd3d5b7e4ade65f20cc2a1a9c88af76d612b3646fdd471d7a\',\n    inclusionState: \'Pending\',\n    timestamp: \'1663005447689\',\n    transactionId: \'0x046a1112ba53beeee146dd4b0a28c59565fda3f62628b53655b5719b326e25d0\',\n    networkId: \'8342982141227064571\',\n    incoming: false,\n    note: null\n  }\n]\n\n')))}r.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# In this example we will claim outputs that have additional unlock conditions as expiration or storage deposit return\n\nwallet = IotaWallet('./alice-database')\n\naccount = wallet.get_account('Alice')\n\nwallet.set_stronghold_password(\"some_hopefully_secure_password\")\n\n# Sync account with the node\nresponse = account.sync_account()\n\n# Only the unspent outputs in the account\noutput_ids = account.get_outputs_with_additional_unlock_conditions('All')\n\nprint(f'Available outputs to claim: {output_ids}')\n\ntransaction = account.claim_outputs(output_ids)\n\nprint(f'Sent transaction: {transaction}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 10-claim-outputs.py"))}m.isMDXComponent=!0;const b={toc:[]};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Available outputs to claim:[\n    '0x79edb042038431009408d734a337f6fae9dcec97b0d7572665d0c184ea74b82f0000'\n]\nSent transaction:{\n    'payload':{\n        'type':6,\n        'essence':{\n            'type':1,\n            'networkId':'8342982141227064571',\n            'inputs':[\n                {\n                    'type':0,\n                    'transactionId':'0x79edb042038431009408d734a337f6fae9dcec97b0d7572665d0c184ea74b82f',\n                    'transactionOutputIndex':0\n                },\n                {\n                    'type':0,\n                    'transactionId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec14',\n                    'transactionOutputIndex':0\n                }\n            ],\n            'inputsCommitment':'0x51a6fe8c7670746c2a45f620be0055c1853f84599c68490a7258ee3c41ba2332',\n            'outputs':[\n                {\n                    'type':3,\n                    'amount':'50600',\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0xf8ba764448d689422aa59a5c5dc97108450a29cb8956208f631ab4a82338468a'\n                            }\n                        }\n                    ]\n                },\n                {\n                    'type':3,\n                    'amount':'1000000001',\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n                            }\n                        }\n                    ]\n                }\n            ]\n        },\n        'unlocks':[\n            {\n                'type':0,\n                'signature':{\n                    'type':0,\n                    'publicKey':'0xee4164cca9a455db3164ec2a3c3ebc2db57aec8c4cb3231c3dc6cda0c700e1bd',\n                    'signature':'0xf474de893c5a47d9114d2a95f1bd0e4c83b464e8a17886a07ea8d04046949a17dbb8173183c08d4cadbe530c7f42a65fa3286a5f28644a76cf59f6411a04220f'\n                }\n            },\n            {\n                'type':1,\n                'reference':0\n            }\n        ]\n    },\n    'blockId':'0x99d29eceb87b44664361f7faf9d8f3b072c6e3e890953fdf956f6d148d9b04b2',\n    'inclusionState':'Pending',\n    'timestamp':'1665992931904',\n    'transactionId':'0xeed7357bf0c0bbdca809e5e537af5a10872e488b26a157af78c68e104420ad75',\n    'networkId':'8342982141227064571',\n    'incoming':False,\n    'note':None\n}\n")))}f.isMDXComponent=!0;const h={toc:[]};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.OutputId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class ClaimOutputs {\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateAccount.java\xb4 example.\n        // If you haven\'t run the \xb4CreateAccount.java\xb4 example yet, you must run it first to be able to load the wallet as shown below:\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        OutputId outputId = new OutputId("0xeb572c09b9cdf4e29c65ecbe10c06d484c04d33da3bea6d9bb1653aa6617e8450000");\n\n        // Claim the given outputs\n        Transaction t = a.claimOutputs(new org.iota.types.account_methods.ClaimOutputs().withOutputIdsToClaim(new OutputId[]{\n                outputId\n        }));\n\n        // Print the transaction\n        System.out.println(t);\n    }\n}'))}y.isMDXComponent=!0;const w={toc:[]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xeb572c09b9cdf4e29c65ecbe10c06d484c04d33da3bea6d9bb1653aa6617e845",\n          "transactionOutputIndex":0\n        }\n      ],\n      "inputsCommitment":"0x4ef5a27871871d370f7bcf41b783f6b1c44221b228624e74c760923dac9efe99",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"1000000",\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xa0ec431d1272d27147809b6178b0e69760de49e7d8f78122cc255362e48f1500345968c0500e07f7b01d35b836c22613c56667e59510b02480c5b257ff74ef04"\n        }\n      }\n    ]\n  },\n  "blockId":"0x4090b35d0a819b291201e09308eba4a39ffc3cffe2127dae4a29e1e78af64aec",\n  "inclusionState":"Pending",\n  "timestamp":"1664900613290",\n  "transactionId":"0x4893b9813145001e67fe89394c2e9464c9a2d07dea1536d36beb83258e5aa1c0",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}k.isMDXComponent=!0;var x=n(50247);const g={title:"Claim Outputs",description:"How to send and claim funds with a time-lock using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","time-lock","unlock conditions","claim output","send output","nodejs","python","java","rust"]},v=void 0,_={unversionedId:"how_tos/outputs_and_transactions/claim_outputs",id:"how_tos/outputs_and_transactions/claim_outputs",title:"Claim Outputs",description:"How to send and claim funds with a time-lock using wallet.rs.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/04_claim_outputs.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/claim_outputs",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/claim_outputs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/04_claim_outputs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Claim Outputs",description:"How to send and claim funds with a time-lock using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","time-lock","unlock conditions","claim output","send output","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"List Outputs",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/list_outputs"},next:{title:"List Transactions",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/list_transactions"}},I={},T=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],C={toc:T};function O(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use wallet.rs to send\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/simple_transfers#transfer-of-funds-with-expiration"},"funds with an expiration"),".\nIf you don't claim these funds within the expiration period, they will be returned to the sender."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's and Bob's account which were ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Prepare and send an output with an expiration unlock."),(0,o.kt)("li",{parentName:"ol"},"Sync Bob's account to get the output event."),(0,o.kt)("li",{parentName:"ol"},"Claim the output by calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"account.claimOutputs([outputId])")," function from Bob's account.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x.ZP,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x.ZP,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),o=n(86010);const s="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,c),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),s=n(86010),c=n(51048),u=n(33609),i=n(1943),d=n(72957);const l="tabList__CuJ",r="tabItem_LNqP";function p(e){var t;const{lazy:n,block:c,defaultValue:p,values:m,groupId:b,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,u.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:g}=(0,i.U)(),[v,_]=(0,o.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=b){const e=x[b];null!=e&&e!==v&&y.some((t=>t.value===e))&&_(e)}const C=e=>{const t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==v&&(T(t),_(a),null!=b&&g(b,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},y.map((e=>{let{value:t,label:n,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:C,onClick:C},c,{className:(0,s.Z)("tabs__item",r,null==c?void 0:c.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);