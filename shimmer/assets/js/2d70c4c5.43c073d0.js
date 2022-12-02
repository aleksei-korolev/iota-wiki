"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67279],{39617:(e,n,t)=>{t.d(n,{ZP:()=>c});var o=t(87462),a=(t(67294),t(3905));const l={toc:[]};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}c.isMDXComponent=!0},59240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>Z,contentTitle:()=>N,default:()=>B,frontMatter:()=>_,metadata:()=>E,toc:()=>I});var o=t(87462),a=(t(67294),t(3905)),l=t(34259),c=t(18679),i=t(69319);const r={toc:[]};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.Block;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.BlockId;\n\nimport java.util.Map;\n\npublic class CreateBlock {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Create the most simple block.\n        Map.Entry<BlockId, Block> b = client.buildAndPostBlock(null, null);\n\n        // Print the block.\n        System.out.println(b);\n    }\n}'))}s.isMDXComponent=!0;const d={toc:[]};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 3,\n  "amount": "1000000",\n  "unlockConditions": [\n    {\n      "type": 0,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0;var u=t(39617);const m={toc:[]};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/06_simple_block.js\n\n// In this example we will send a block without a payload\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        // Create block with no payload\n        const blockIdAndBlock = await client.buildAndPostBlock();\n        console.log('Block:', blockIdAndBlock, '\\n');\n\n        console.log(\n            `Empty block sent: ${process.env.EXPLORER_URL}/block/${blockIdAndBlock[0]}`,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/06_simple_block.js"))}k.isMDXComponent=!0;const b={toc:[]};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"Block: [\n  '0x7531a0983f941e50b1764165d8cf1e205605c269f43796d18e38264ddfce8d06',\n  {\n    protocolVersion: 2,\n    parents: [\n      '0x649914f510d1f9e8bb54f3ea0c810f7b591377a36edae8698df8a5be7e080e36',\n      '0x76e0ce892ae9b3f0707ea6c068a3ee4faf98ac66e8089773a6ffe3951c6f111a',\n      '0x8461d818b5fca64848f475aae434d994592bf0f5648b3ff7470e75437768295d',\n      '0x994bcacab8bfc939a201e9ccf5a75eec2d047324a8a905cf1a4c1e09f3e1002a'\n    ],\n    nonce: '3074457345618276659'\n  }\n] \n\nEmpty block sent: https://explorer.shimmer.network/testnet/block/0x7531a0983f941e50b1764165d8cf1e205605c269f43796d18e38264ddfce8d06\n")))}h.isMDXComponent=!0;const f={toc:[]};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Create and post a block without payload\nblock = client.build_and_post_block()\nprint(f'{block}')\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,a.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 06_simple_block.py"))}y.isMDXComponent=!0;const x={toc:[]};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"[\n  '0xa76b3551777d24fd20a045b2ebae11346c9f7ce76e2351eccb044b8842769250',\n  {\n    'protocolVersion': 2,\n    'parents': [\n      '0x485f44a5528b341a179db493fdd19138096f823fc034ba207a9ed85ebee5a109',\n      '0x4a77573beb29edfa67ec00ee10577b31fe6a9e50b19ace0c833cfd1166069f7a',\n      '0xa8edca4bda2db44e7bd29dd9282eff6011ff73fc1e318ba5950a67387be562da',\n      '0xac283aa0ea563f81d7be39d2ae78bbadae838142e6d81280aeae02e96e35f013'\n    ],\n    'nonce': '12297829382473042444'\n  }\n]\n\n")))}g.isMDXComponent=!0;const v={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function w(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example sends a block with no payload.\n//! Run: `cargo run --example block_no_payload --release -- [NODE URL]`.\n\nuse iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    // Create and send the block.\n    let block = client.block().finish().await?;\n\n    println!("{block:#?}");\n\n    println!(\n        "Block with no payload sent: {}/block/{}",\n        std::env::var("EXPLORER_URL").unwrap(),\n        block.id()\n    );\n\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example simple_block --release"))}w.isMDXComponent=!0;const C={toc:[]};function T(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Block {\n    protocol_version: 2,\n    parents: Parents(\n        BoxedSlicePrefix([\n            BlockId(0x2f68b25006f0e1b55ada3e9278e69796380971e97587c233d138c593139d255d),\n            BlockId(0x76d25ac0073d14381d9a38c61ecb9665241d771bd89564e467c7fdf98e770ddd),\n            BlockId(0xd072addb86a5a59a69b17d0e8fc3368771dc5ea7f7c2257045e508ae37f27a46),\n            BlockId(0xfea2e90318a1b234569a3d698e97906d2c6a0084eb571971bf9ce9c4d31ee6c9),\n        ]),\n    ),\n    payload: OptionalPayload(\n        None,\n    ),\n    nonce: 4420,\n}\nBlock with no payload sent: https://explorer.shimmer.network/testnet/block/0x9f794dde42c7be9cd209cc992f69e1f8b7b40578303825049079d8ac128aa20f\n")))}T.isMDXComponent=!0;const _={title:"Create a Block",description:"The simplest block you can create is an empty block. You will only need connect your client to a node and then call the `Client.block(&self)` function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","block","create","create empty block","java","nodejs","python","rust"]},N=void 0,E={unversionedId:"how_tos/create_block",id:"how_tos/create_block",title:"Create a Block",description:"The simplest block you can create is an empty block. You will only need connect your client to a node and then call the `Client.block(&self)` function.",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/07_create_block.mdx",sourceDirName:"how_tos",slug:"/how_tos/create_block",permalink:"/shimmer/iota.rs/how_tos/create_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/07_create_block.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Create a Block",description:"The simplest block you can create is an empty block. You will only need connect your client to a node and then call the `Client.block(&self)` function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","block","create","create empty block","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Get Address Balance",permalink:"/shimmer/iota.rs/how_tos/get_address_balances"},next:{title:"Post a Data Block",permalink:"/shimmer/iota.rs/how_tos/post_block"}},Z={},I=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],D={toc:I};function B(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},D,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The simplest block you can create is an empty block. You will only need connect your client to a node and then call the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Client.block(&self)")," function."),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Build and post an empty block.")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(w,{mdxType:"RustCode"})),(0,a.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(k,{mdxType:"NodejsCode"})),(0,a.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y,{mdxType:"PythonCode"})),(0,a.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(T,{mdxType:"RustOutput"})),(0,a.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(h,{mdxType:"NodejsOutput"})),(0,a.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(g,{mdxType:"PythonOutput"})),(0,a.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"JavaOutput"}))))}B.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(67294),a=t(86010);const l="tabItem_Ymn6";function c(e){let{children:n,hidden:t,className:c}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,c),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),a=t(67294),l=t(86010),c=t(51048),i=t(33609),r=t(1943),s=t(72957);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var n;const{lazy:t,block:c,defaultValue:u,values:m,groupId:k,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),y=(0,i.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===u?u:u??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,r.U)(),[w,C]=(0,a.useState)(x),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=k){const e=g[k];null!=e&&e!==w&&f.some((n=>n.value===e))&&C(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),o=f[t].value;o!==w&&(_(n),C(o),null!=k&&v(k,String(o)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},f.map((e=>{let{value:n,label:t,attributes:c}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>T.push(e),onKeyDown:E,onFocus:N,onClick:N},c,{className:(0,l.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,c.Z)();return a.createElement(u,(0,o.Z)({key:String(n)},e))}}}]);