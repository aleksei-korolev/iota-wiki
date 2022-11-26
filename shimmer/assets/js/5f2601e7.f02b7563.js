"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29911],{53855:(n,e,t)=>{t.d(e,{ZP:()=>d});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function d(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}d.isMDXComponent=!0},35416:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>T,default:()=>O,frontMatter:()=>w,metadata:()=>v,toc:()=>I});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),d=t(18679),u=t(69319);const c={toc:[]};function r(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example lists the outputs of the first account\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        \n        await account.sync();\n        const outputs = await account.outputs()\n        console.log('Listing Outputs:', outputs); \n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 12a-list-outputs.js"))}r.isMDXComponent=!0;const l={toc:[]};function i(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Listing Outputs: [\n  {\n    outputId: '0x72240e6d6dc463e4dd962a2e34f2233a41b56a259c84faf895fbbb96820773050100',\n    metadata: {\n      blockId: '0x1106c1e0da5b2e10762fcf0ed3bc2a4790ffd2a81895afbc58df6b447c70ad3a',\n      transactionId: '0x72240e6d6dc463e4dd962a2e34f2233a41b56a259c84faf895fbbb9682077305',\n      outputIndex: 1,\n      isSpent: false,\n      milestoneIndexBooked: 972425,\n      milestoneTimestampBooked: 1662996908,\n      ledgerIndex: 974093\n    },\n    output: {\n      type: 5,\n      amount: '53600',\n      serialNumber: 4,\n      tokenScheme: [Object],\n      unlockConditions: [Array],\n      immutableFeatures: [Array]\n    },\n    isSpent: false,\n    address: {\n      type: 0,\n      pubKeyHash: '0xeed1e4e3e9e7555e2f1592594bf916523e7fef3a9a8c0d630a4934440b822647'\n    },\n    networkId: '8342982141227064571',\n    remainder: false,\n    chain: [ [Object], [Object], [Object], [Object], [Object] ]\n  },\n  [...]\n]\n\n")))}i.isMDXComponent=!0;const p={toc:[]};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# In this example we will get outputs stored in the account\n\nwallet = IotaWallet('./alice-database')\n\naccount = wallet.get_account('Alice')\n\n# All outputs stored in the account\noutputs = account.outputs()\nprint(f'Outputs: {outputs}')\n\n# Only the unspent outputs in the account\nunspent_outputs = account.outputs()\nprint(f'Unspent outputs: {unspent_outputs}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 9-list-outputs.py"))}m.isMDXComponent=!0;const b={toc:[]};function f(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Outputs:[\n    {\n        'outputId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec140000',\n        'metadata':{\n            'blockId':'0x77b1fec7bd1ebb9ecfdf1ed9501dbf17acc4b1aa3889f310be95d5d82a5b5674',\n            'transactionId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec14',\n            'outputIndex':0,\n            'isSpent':False,\n            'milestoneIndexBooked':1571314,\n            'milestoneTimestampBooked':1665991915,\n            'ledgerIndex':1571314\n        },\n        'output':{\n            'type':3,\n            'amount':'1000000000',\n            'unlockConditions':[\n                {\n                    'type':0,\n                    'address':{\n                        'type':0,\n                        'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n                    }\n                }\n            ]\n        },\n        'isSpent':False,\n        'address':{\n            'type':0,\n            'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n        },\n        'networkId':'8342982141227064571',\n        'remainder':False,\n        'chain':[\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    44\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    16,\n                    123\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            }\n        ]\n    }\n]\nUnspent outputs:[\n    {\n        'outputId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec140000',\n        'metadata':{\n            'blockId':'0x77b1fec7bd1ebb9ecfdf1ed9501dbf17acc4b1aa3889f310be95d5d82a5b5674',\n            'transactionId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec14',\n            'outputIndex':0,\n            'isSpent':False,\n            'milestoneIndexBooked':1571314,\n            'milestoneTimestampBooked':1665991915,\n            'ledgerIndex':1571314\n        },\n        'output':{\n            'type':3,\n            'amount':'1000000000',\n            'unlockConditions':[\n                {\n                    'type':0,\n                    'address':{\n                        'type':0,\n                        'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n                    }\n                }\n            ]\n        },\n        'isSpent':False,\n        'address':{\n            'type':0,\n            'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n        },\n        'networkId':'8342982141227064571',\n        'remainder':False,\n        'chain':[\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    44\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    16,\n                    123\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            },\n            {\n                'hardened':True,\n                'bs':[\n                    128,\n                    0,\n                    0,\n                    0\n                ]\n            }\n        ]\n    }\n]\n")))}f.isMDXComponent=!0;const h={toc:[]};function y(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-java",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.Outputs;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class ListOutputs {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Get outputs.\n        OutputData[] outputs = a.getOutputs(new Outputs());\n\n        // Print outputs.\n        for (OutputData o : outputs)\n            System.out.println(o);\n    }\n}"))}y.isMDXComponent=!0;const x={toc:[]};function k(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "outputId":"0xb23dc6681903672b76aae4f74c405fcd684c6fcf5d21fc367addcbafd0c3770c1a00",\n  "metadata":{\n    "blockId":"0xcfb891e37d261bf48381ec5fd7a6957396ce9296dab35d8111cc8bb4369dc2cd",\n    "transactionId":"0xb23dc6681903672b76aae4f74c405fcd684c6fcf5d21fc367addcbafd0c3770c",\n    "outputIndex":26,\n    "isSpent":false,\n    "milestoneIndexBooked":831306,\n    "milestoneTimestampBooked":1662290619,\n    "ledgerIndex":1351681\n  },\n  "output":{\n    "type":3,\n    "amount":"50600",\n    "unlockConditions":[\n      {\n        "type":0,\n        "address":{\n          "type":0,\n          "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n        }\n      },\n      {\n        "type":1,\n        "returnAddress":{\n          "type":0,\n          "pubKeyHash":"0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af"\n        },\n        "amount":"50600"\n      },\n      {\n        "type":3,\n        "returnAddress":{\n          "type":0,\n          "pubKeyHash":"0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af"\n        },\n        "unixTime":1662895377\n      }\n    ]\n  },\n  "isSpent":false,\n  "address":{\n    "type":0,\n    "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n  },\n  "networkId":"8342982141227064571",\n  "remainder":false,\n  "chain":[\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        44\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        16,\n        123\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    }\n  ]\n}\n{\n  "outputId":"0x94f6bdabbfc0b3f39961ffe7a19c3a26fde2908cce6b879beb4c20ed27cdad420000",\n  "metadata":{\n    "blockId":"0x6079cabb638789187cb372d521c033afdf15f52093cc1b922330fe81bb3574d3",\n    "transactionId":"0x94f6bdabbfc0b3f39961ffe7a19c3a26fde2908cce6b879beb4c20ed27cdad42",\n    "outputIndex":0,\n    "isSpent":false,\n    "milestoneIndexBooked":1350472,\n    "milestoneTimestampBooked":1664887705,\n    "ledgerIndex":1351681\n  },\n  "output":{\n    "type":3,\n    "amount":"50601",\n    "unlockConditions":[\n      {\n        "type":0,\n        "address":{\n          "type":0,\n          "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n        }\n      },\n      {\n        "type":1,\n        "returnAddress":{\n          "type":0,\n          "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n        },\n        "amount":"50600"\n      },\n      {\n        "type":3,\n        "returnAddress":{\n          "type":0,\n          "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n        },\n        "unixTime":1664887701\n      }\n    ]\n  },\n  "isSpent":false,\n  "address":{\n    "type":0,\n    "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n  },\n  "networkId":"8342982141227064571",\n  "remainder":false,\n  "chain":[\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        44\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        16,\n        123\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      "hardened":true,\n      "bs":[\n        128,\n        0,\n        0,\n        0\n      ]\n    }\n  ]\n}\n{\n   "outputId":"0xaccae1f4e78ee169d0fc1d99843e6cd417290da91aa62c696fa507d21fd245cc0200",\n   "metadata":{\n      "blockId":"0x8f9f12a968c32cc3d51e978f4de34252bc769ee7188e33a21f9351a7c1f122f3",\n      "transactionId":"0xaccae1f4e78ee169d0fc1d99843e6cd417290da91aa62c696fa507d21fd245cc",\n      "outputIndex":2,\n      "isSpent":false,\n      "milestoneIndexBooked":1350405,\n      "milestoneTimestampBooked":1664887370,\n      "ledgerIndex":1351681\n   },\n   "output":{\n      "type":3,\n      "amount":"2096427899",\n      "nativeTokens":[\n         {\n            "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n            "amount":"0x3233"\n         },\n         {\n            "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n            "amount":"0x3233"\n         },\n         {\n            "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0400000000",\n            "amount":"0x17"\n         }\n      ],\n      "unlockConditions":[\n         {\n            "type":0,\n            "address":{\n               "type":0,\n               "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n            }\n         }\n      ]\n   },\n   "isSpent":false,\n   "address":{\n      "type":0,\n      "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n   },\n   "networkId":"8342982141227064571",\n   "remainder":false,\n   "chain":[\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            44\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            16,\n            123\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      }\n   ]\n}\n')))}k.isMDXComponent=!0;var g=t(53855);const w={title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get outputs","list outputs","listOutputs","nodejs","python","java","rust"]},T=void 0,v={unversionedId:"how_tos/outputs_and_transactions/list_outputs",id:"how_tos/outputs_and_transactions/list_outputs",title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/03_list_outputs.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/list_outputs",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/list_outputs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/03_list_outputs.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get outputs","list outputs","listOutputs","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Send a Micro Transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_micro_transaction"},next:{title:"Claim Outputs",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/claim_outputs"}},_={},I=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],C={toc:I};function O(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},C,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can list all the outputs related to an account by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.outputs()")," function."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"List all the outputs related to Alice's account.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g.ZP,{mdxType:"RustCode"})),(0,o.kt)(d.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(d.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g.ZP,{mdxType:"RustOutput"})),(0,o.kt)(d.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsOutput"})),(0,o.kt)(d.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonOutput"})),(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function d(n){let{children:e,hidden:t,className:d}=n;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,d),hidden:t},e)}},34259:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(87462),o=t(67294),s=t(86010),d=t(51048),u=t(33609),c=t(1943),r=t(72957);const l="tabList__CuJ",i="tabItem_LNqP";function p(n){var e;const{lazy:t,block:d,defaultValue:p,values:m,groupId:b,className:f}=n,h=o.Children.map(n.children,(n=>{if((0,o.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),x=(0,u.l)(y,((n,e)=>n.value===e.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(e=h.find((n=>n.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==k&&!y.some((n=>n.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,c.U)(),[T,v]=(0,o.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:I}=(0,r.o5)();if(null!=b){const n=g[b];null!=n&&n!==T&&y.some((e=>e.value===n))&&v(n)}const C=n=>{const e=n.currentTarget,t=_.indexOf(e),a=y[t].value;a!==T&&(I(e),v(a),null!=b&&w(b,String(a)))},O=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=_.indexOf(n.currentTarget)+1;t=_[e]??_[0];break}case"ArrowLeft":{const e=_.indexOf(n.currentTarget)-1;t=_[e]??_[_.length-1];break}}null==(e=t)||e.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},y.map((n=>{let{value:e,label:t,attributes:d}=n;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:n=>_.push(n),onKeyDown:O,onFocus:C,onClick:C},d,{className:(0,s.Z)("tabs__item",i,null==d?void 0:d.className,{"tabs__item--active":T===e})}),t??e)}))),t?(0,o.cloneElement)(h.filter((n=>n.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==T})))))}function m(n){const e=(0,d.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},n))}}}]);