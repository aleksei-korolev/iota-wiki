"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48255],{39617:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(87462),o=(n(67294),n(3905));const d={toc:[]};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}u.isMDXComponent=!0},57610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>I,default:()=>Z,frontMatter:()=>C,metadata:()=>D,toc:()=>E});var a=n(87462),o=(n(67294),n(3905)),d=n(34259),u=n(18679),s=n(69319);const i={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'import org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.OutputMetadata;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.OutputId;\n\nimport java.util.Map;\n\npublic class GetOutputs {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Set up a output ID for this example.\n        OutputId outputId = ExampleUtils.setUpOutputId(client);\n        \n        // Get the output for the given output id.\n        Map.Entry<Output, OutputMetadata> outputData = client.getOutput(outputId);\n\n        // Print the output and its metadata.\n        System.out.println(outputData.getKey());\n        System.out.println(outputData.getValue());\n    }\n}'))}p.isMDXComponent=!0;const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 3,\n  "amount": "1000000000",\n  "unlockConditions": [\n    {\n      "type": 0,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0xf11b9d362a332263e7773350b0214b742ccffd364d678626bd15556514617058"\n      }\n    }\n  ]\n}{\n  "blockId": "0xb6e74f8a623756b26d6146ef34612890b6c858088482620eddaaf4ecb9c8b9fb",\n  "transactionId": "0xc66155c2bbbd8f22cb55940642aa65a8c5cd07fb1f93c7c4ff53414d45daa577",\n  "outputIndex": 0,\n  "isSpent": false,\n  "milestoneIndexBooked": 949,\n  "milestoneTimestampBooked": 1658138754,\n  "ledgerIndex": 749811\n}\n')))}l.isMDXComponent=!0;var c=n(39617);const m={toc:[]};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/04_get_output.js\n\n// In this example we will get output from a known outputId\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        const output = await client.getOutput(\n            '0xa0b9ad3f5aa2bfcaed30cde6e1d572e93b7e8bb5a417f5a7ef3502889b5dbcb40000',\n        );\n        console.log('Output: ', output);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/04_get_output.js"))}f.isMDXComponent=!0;const b={toc:[]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{\n  'metadata': {\n    'blockId': '0xa9f11aba1e9965173dc21a47ec4fbfe5b953a6e60277857a3f7a5c1499e7c454',\n    'transactionId': '0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c',\n    'outputIndex': 0,\n    'isSpent': True,\n    'milestoneIndexSpent': 249147,\n    'milestoneTimestampSpent': 1659379781,\n    'transactionIdSpent': '0xa927ea21d3c4a49d5c73169c80302ddb223894c182a4b7cfef0af89568262749',\n    'milestoneIndexBooked': 249145,\n    'milestoneTimestampBooked': 1659379771,\n    'ledgerIndex': 749737\n  },\n  'output': {\n    'type': 4,\n    'amount': '2000000',\n    'aliasId': '0x0000000000000000000000000000000000000000000000000000000000000000',\n    'stateIndex': 0,\n    'foundryCounter': 0,\n    'unlockConditions': [\n      {\n        'type': 4,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      },\n      {\n        'type': 5,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      }\n    ],\n    'features': [\n      {\n        'type': 0,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      },\n      {\n        'type': 2,\n        'data': '0x010203'\n      }\n    ],\n    'immutableFeatures': [\n      {\n        'type': 1,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      }\n    ]\n  }\n}\n")))}h.isMDXComponent=!0;const y={toc:[]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Get an outputs by its id\noutput = client.get_output('0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c0000')\nprint(f'{output}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 04_get_output.py"))}k.isMDXComponent=!0;const g={toc:[]};function x(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{\n  'metadata': {\n    'blockId': '0xa9f11aba1e9965173dc21a47ec4fbfe5b953a6e60277857a3f7a5c1499e7c454',\n    'transactionId': '0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c',\n    'outputIndex': 0,\n    'isSpent': True,\n    'milestoneIndexSpent': 249147,\n    'milestoneTimestampSpent': 1659379781,\n    'transactionIdSpent': '0xa927ea21d3c4a49d5c73169c80302ddb223894c182a4b7cfef0af89568262749',\n    'milestoneIndexBooked': 249145,\n    'milestoneTimestampBooked': 1659379771,\n    'ledgerIndex': 749737\n  },\n  'output': {\n    'type': 4,\n    'amount': '2000000',\n    'aliasId': '0x0000000000000000000000000000000000000000000000000000000000000000',\n    'stateIndex': 0,\n    'foundryCounter': 0,\n    'unlockConditions': [\n      {\n        'type': 4,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      },\n      {\n        'type': 5,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      }\n    ],\n    'features': [\n      {\n        'type': 0,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      },\n      {\n        'type': 2,\n        'data': '0x010203'\n      }\n    ],\n    'immutableFeatures': [\n      {\n        'type': 1,\n        'address': {\n          'type': 0,\n          'pubKeyHash': '0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3'\n        }\n      }\n    ]\n  }\n}\n")))}x.isMDXComponent=!0;const _={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/outputs/{outputId}`.\n//! Find an output, as JSON, by its identifier.\n//! Run: `cargo run --example node_api_core_get_output --release -- [NODE URL] [OUTPUT ID]`.\n\nuse std::str::FromStr;\n\nuse iota_client::{block::output::OutputId, Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    // Take the output ID from command line argument or use a default one.\n    let output_id =\n        OutputId::from_str(&std::env::args().nth(2).unwrap_or_else(|| {\n            String::from("0xb66fd384cb5755668f1890ea2e41d699db9cf32f3bc422ad3c24ffeb9c7f01d00000")\n        }))?;\n\n    // Get the output.\n    let output = client.get_output(&output_id).await?;\n\n    println!("{output:#?}");\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_output --release -- https://api.testnet.shimmer.network  0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can replace ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url."),(0,o.kt)("li",{parentName:"ul"},"You can replace ",(0,o.kt)("inlineCode",{parentName:"li"},"0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c")," with any other OutputID.")))}v.isMDXComponent=!0;const T={toc:[]};function w(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'OutputResponse {\n    metadata: OutputMetadataResponse {\n        block_id: "0xa9f11aba1e9965173dc21a47ec4fbfe5b953a6e60277857a3f7a5c1499e7c454",\n        transaction_id: "0x1e857d380f813d8035e487b6dfd2ff4740b6775273ba1b576f01381ba2a1a44c",\n        output_index: 0,\n        is_spent: true,\n        milestone_index_spent: Some(\n            249147,\n        ),\n        milestone_timestamp_spent: Some(\n            1659379781,\n        ),\n        transaction_id_spent: Some(\n            "0xa927ea21d3c4a49d5c73169c80302ddb223894c182a4b7cfef0af89568262749",\n        ),\n        milestone_index_booked: 249145,\n        milestone_timestamp_booked: 1659379771,\n        ledger_index: 918846,\n    },\n    output: Alias(\n        AliasOutputDto {\n            kind: 4,\n            amount: "2000000",\n            native_tokens: [],\n            alias_id: AliasIdDto(\n                "0x0000000000000000000000000000000000000000000000000000000000000000",\n            ),\n            state_index: 0,\n            state_metadata: "",\n            foundry_counter: 0,\n            unlock_conditions: [\n                StateControllerAddress(\n                    StateControllerAddressUnlockConditionDto {\n                        kind: 4,\n                        address: Ed25519(\n                            Ed25519AddressDto {\n                                kind: 0,\n                                pub_key_hash: "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3",\n                            },\n                        ),\n                    },\n                ),\n                GovernorAddress(\n                    GovernorAddressUnlockConditionDto {\n                        kind: 5,\n                        address: Ed25519(\n                            Ed25519AddressDto {\n                                kind: 0,\n                                pub_key_hash: "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3",\n                            },\n                        ),\n                    },\n                ),\n            ],\n            features: [\n                Sender(\n                    SenderFeatureDto {\n                        kind: 0,\n                        address: Ed25519(\n                            Ed25519AddressDto {\n                                kind: 0,\n                                pub_key_hash: "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3",\n                            },\n                        ),\n                    },\n                ),\n                Metadata(\n                    MetadataFeatureDto {\n                        kind: 2,\n                        data: "0x010203",\n                    },\n                ),\n            ],\n            immutable_features: [\n                Issuer(\n                    IssuerFeatureDto {\n                        kind: 1,\n                        address: Ed25519(\n                            Ed25519AddressDto {\n                                kind: 0,\n                                pub_key_hash: "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3",\n                            },\n                        ),\n                    },\n                ),\n            ],\n        },\n    ),\n}\n\n')))}w.isMDXComponent=!0;const C={title:"Get Outputs",description:"You can get outputs by their output ID using the Client.get_output(output_id) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","outputs","get_output","get output by id","java","nodejs","python","rust"]},I=void 0,D={unversionedId:"how_tos/get_output",id:"how_tos/get_output",title:"Get Outputs",description:"You can get outputs by their output ID using the Client.get_output(output_id) function.",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/04_get_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/get_output",permalink:"/shimmer/iota.rs/how_tos/get_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/04_get_output.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Get Outputs",description:"You can get outputs by their output ID using the Client.get_output(output_id) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","outputs","get_output","get output by id","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Generate Addresses",permalink:"/shimmer/iota.rs/how_tos/generate_addresses"},next:{title:"Build a Basic Output",permalink:"/shimmer/iota.rs/how_tos/build_output"}},N={},E=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],O={toc:E};function Z(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can get outputs by their output ID using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client.get_output(output_id)")," function."),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Get an output by its output ID.")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(d.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustCode"})),(0,o.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"NodejsCode"})),(0,o.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"PythonCode"})),(0,o.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(d.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(w,{mdxType:"RustOutput"})),(0,o.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"NodejsOutput"})),(0,o.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"PythonOutput"})),(0,o.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(l,{mdxType:"JavaOutput"}))))}Z.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),o=n(86010);const d="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(d,u),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),d=n(86010),u=n(51048),s=n(33609),i=n(1943),p=n(72957);const r="tabList__CuJ",l="tabItem_LNqP";function c(e){var t;const{lazy:n,block:u,defaultValue:c,values:m,groupId:f,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:_}=(0,i.U)(),[v,T]=(0,o.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=x[f];null!=e&&e!==v&&y.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==v&&(C(t),T(a),null!=f&&_(f,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,d.Z)("tabs-container",r)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},b)},y.map((e=>{let{value:t,label:n,attributes:u}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:I,onClick:I},u,{className:(0,d.Z)("tabs__item",l,null==u?void 0:u.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,u.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);