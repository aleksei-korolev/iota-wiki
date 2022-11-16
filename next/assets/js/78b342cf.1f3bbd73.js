"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40419],{35763:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}r.isMDXComponent=!0},63543:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},50727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>I,frontMatter:()=>x,metadata:()=>T,toc:()=>C});var a=n(87462),o=(n(67294),n(3905)),s=n(34259),r=n(18679),u=n(63543),i=n(69319);var l=n(35763);const d={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/05_get_address_balance.js\n\n// In this example we will get the outputs of an address that has no additional unlock\n// conditions and sum the amounts and native tokens\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n        const secretManager = {\n            mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        // Generate the first address\n        const addresses = await client.generateAddresses(secretManager, {\n            accountIndex: 0,\n            range: {\n                start: 0,\n                end: 1,\n            },\n        });\n\n        // Get output ids of basic outputs that can be controlled by this address without further unlock constraints\n        const outputIds = await client.basicOutputIds([\n            { address: addresses[0] },\n            { hasExpiration: false },\n            { hasTimelock: false },\n            { hasStorageDepositReturn: false },\n        ]);\n\n        // Get outputs by their IDs\n        const addressOutputs = await client.getOutputs(outputIds);\n\n        // Calculate the total amount and native tokens\n        let totalAmount = 0;\n        const totalNativeTokens: { [id: string]: number } = {};\n        for (const outputResponse of addressOutputs) {\n            const output = outputResponse['output'];\n\n            if ('nativeTokens' in output) {\n                output.nativeTokens?.forEach(\n                    (token) =>\n                        (totalNativeTokens[token.id] =\n                            (totalNativeTokens[token.id] || 0) +\n                            parseInt(token.amount)),\n                );\n            }\n\n            totalAmount += parseInt(output.amount);\n        }\n\n        console.log(\n            `Outputs controlled by ${addresses[0]} have: ${totalAmount} glow and native tokens: `,\n            totalNativeTokens,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/05_get_address_balance.ts"))}c.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Outputs controlled by rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy have: 2609275800 glow and native tokens:  {\n  '0x0808fb702d67fdb320b5959f152c0f962630515d904c71ed09447c341a6cc171de0100000000': 100,\n  '0x0822ceb3166ad125d310e6660f5fc292356f87f2f9566e982ea22154cec3847b3f0100000000': 100,\n  '0x085c6b799750bdf7e5a5c81144465a0676bc11dab74b997444ca369949341720e80100000000': 100,\n  '0x08f708a29e9619e847916de76c2e167e87a704c235dcbd7cda018865be7f561b5a0100000000': 50,\n  '0x08f1802858831220b282ccc4c557676d61f79833869de378ce9a81f736976ce39f0100000000': 50\n}\n")))}m.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\naddress = 'rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy'\n\n# Get output ids of basic outputs that can be controlled by this address without further unlock constraints\noutput_ids = client.basic_output_ids([{\"address\": address},\n                                      {\"hasExpiration\": False},\n                                      {\"hasTimelock\": False},\n                                      {\"hasStorageDepositReturn\": False}, ])\nprint(f'{output_ids}')\n\n# Get the outputs by their id\noutputs = client.get_outputs(output_ids)\nprint(f'{outputs}')\n\n\n# Calculate the total amount and native tokens\ntotal_amount = 0\nnative_tokens = []\nfor output_response in outputs:\n    output = output_response['output']\n    total_amount += int(output['amount'])\n    if 'nativeTokens' in output:\n        native_tokens.append(output['nativeTokens'])\n\nprint(\n    f'Outputs controlled by {address} have {total_amount} glow and native tokens: {native_tokens}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 05_get_address_balance.py"))}f.isMDXComponent=!0;const k={toc:[]};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Outputs controlled by rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy have\n2609275800 glow and nativetokens: [\n  [\n    {\n      'id': '0x0808fb702d67fdb320b5959f152c0f962630515d904c71ed09447c341a6cc171de0100000000',\n      'amount': '0x64'\n    },\n    {\n      'id': '0x0822ceb3166ad125d310e6660f5fc292356f87f2f9566e982ea22154cec3847b3f0100000000',\n      'amount': '0x64'\n    },\n    {\n      'id': '0x085c6b799750bdf7e5a5c81144465a0676bc11dab74b997444ca369949341720e80100000000',\n      'amount': '0x64'\n    },\n    {\n      'id': '0x08f708a29e9619e847916de76c2e167e87a704c235dcbd7cda018865be7f561b5a0100000000',\n      'amount': '0x32'\n    }\n  ],\n  [\n    {\n      'id': '0x08f1802858831220b282ccc4c557676d61f79833869de378ce9a81f736976ce39f0100000000',\n      'amount': '0x32'\n    }\n  ]\n]\n")))}b.isMDXComponent=!0;const v={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 02_get_address_balance --release\n//! In this example we will get the outputs of an address that have no additional unlock conditions and sum the amounts\n//! and native tokens.\n\nuse iota_client::{\n    block::output::{NativeTokensBuilder, Output},\n    node_api::indexer::query_parameters::QueryParameter,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n\n    // Create a client instance\n    let client = Client::builder()\n        .with_node(&node_url)? // Insert your node URL here\n        .finish()?;\n\n    let secret_manager =\n        MnemonicSecretManager::try_from_mnemonic(&std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap())?;\n\n    let token_supply = client.get_token_supply().await?;\n\n    // Generate the first address\n    let addresses = client\n        .get_addresses(&SecretManager::Mnemonic(secret_manager))\n        .with_account_index(0)\n        .with_range(0..1)\n        .finish()\n        .await?;\n\n    // Get output ids of outputs that can be controlled by this address without further unlock constraints\n    let output_ids = client\n        .basic_output_ids(vec![\n            QueryParameter::Address(addresses[0].clone()),\n            QueryParameter::HasExpiration(false),\n            QueryParameter::HasTimelock(false),\n            QueryParameter::HasStorageDepositReturn(false),\n        ])\n        .await?;\n\n    // Get the outputs by their id\n    let outputs_responses = client.get_outputs(output_ids).await?;\n\n    // Calculate the total amount and native tokens\n    let mut total_amount = 0;\n    let mut total_native_tokens = NativeTokensBuilder::new();\n    for output_response in outputs_responses {\n        let output = Output::try_from_dto(&output_response.output, token_supply)?;\n\n        if let Some(native_tokens) = output.native_tokens() {\n            total_native_tokens.add_native_tokens(native_tokens.clone())?;\n        }\n        total_amount += output.amount();\n    }\n\n    println!(\n        "Outputs controlled by {} have: {:?}i and native tokens: {:?}",\n        addresses[0],\n        total_amount,\n        total_native_tokens.finish_vec()?\n    );\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example 02_get_address_balance --release"))}_.isMDXComponent=!0;const g={toc:[]};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Outputs controlled by rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy\nhave: 2609275800i and nativetokens: [\n  NativeToken{\n    token_id: TokenId(0x085c6b799750bdf7e5a5c81144465a0676bc11dab74b997444ca369949341720e80100000000),\n    amount: 100\n  },\n  NativeToken{\n    token_id: TokenId(0x0822ceb3166ad125d310e6660f5fc292356f87f2f9566e982ea22154cec3847b3f0100000000),\n    amount: 100\n  },\n  NativeToken{\n    token_id: TokenId(0x08f708a29e9619e847916de76c2e167e87a704c235dcbd7cda018865be7f561b5a0100000000),\n    amount: 50\n  },\n  NativeToken{\n    token_id: TokenId(0x0808fb702d67fdb320b5959f152c0f962630515d904c71ed09447c341a6cc171de0100000000),\n    amount: 100\n  },\n  NativeToken{\n    token_id: TokenId(0x08f1802858831220b282ccc4c557676d61f79833869de378ce9a81f736976ce39f0100000000),\n    amount: 50\n  }\n]\n")))}y.isMDXComponent=!0;const x={title:"Get Address Balance",description:"You can retrieve the outputs for any given address using the Client.basicOutputIds(queryParameters) function. You can then use the retrieved outputs to calculate the balance.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","get balance","get outputs","java","nodejs","python","rust"]},w=void 0,T={unversionedId:"how_tos/get_address_balances",id:"how_tos/get_address_balances",title:"Get Address Balance",description:"You can retrieve the outputs for any given address using the Client.basicOutputIds(queryParameters) function. You can then use the retrieved outputs to calculate the balance.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/06_get_address_balances.mdx",sourceDirName:"how_tos",slug:"/how_tos/get_address_balances",permalink:"/next/iota.rs/how_tos/get_address_balances",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/06_get_address_balances.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get Address Balance",description:"You can retrieve the outputs for any given address using the Client.basicOutputIds(queryParameters) function. You can then use the retrieved outputs to calculate the balance.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","get balance","get outputs","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Build a Basic Output",permalink:"/next/iota.rs/how_tos/build_output"},next:{title:"Create a Block",permalink:"/next/iota.rs/how_tos/create_block"}},N={},C=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],E={toc:C};function I(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can retrieve the outputs for any given address using the Client.basicOutputIds(queryParameters) function.\nYou can then use the retrieved outputs to calculate the balance."),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,o.kt)("li",{parentName:"ol"},"Get outputs for the ",(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_addresses"},"generated address"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the total amount of native tokens and outputs."),(0,o.kt)("li",{parentName:"ol"},"Log the results from step 4 to console.")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(_,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonCode"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(u.ZP,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(u.ZP,{mdxType:"JavaOutput"}))))}I.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),s=n(86010),r=n(51048),u=n(33609),i=n(1943),l=n(72957);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:m,groupId:h,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,u.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==_&&!b.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,i.U)(),[x,w]=(0,o.useState)(_),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=h){const e=g[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==x&&(N(t),w(a),null!=h&&y(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},f)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:C,onClick:C},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);