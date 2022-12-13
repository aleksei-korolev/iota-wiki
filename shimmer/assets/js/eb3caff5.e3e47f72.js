"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29280],{39617:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}s.isMDXComponent=!0},7336:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}s.isMDXComponent=!0},94808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>x,default:()=>O,frontMatter:()=>v,metadata:()=>C,toc:()=>N});var a=n(87462),o=(n(67294),n(3905)),i=n(34259),s=n(18679),r=n(69319);const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'import org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.UnlockCondition;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.AliasId;\nimport org.iota.types.output_builder.AliasOutputBuilderParams;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class BuildAliasOutput {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple Alias output.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String hexAddress = client.bech32ToHex(client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 1)))[0]);\n        AliasId aliasId = new AliasId("0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa");\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{\n                new UnlockCondition("{ type: 4, address: { type: 0, pubKeyHash: \\"" + hexAddress + "\\" } }"),\n                new UnlockCondition("{ type: 5, address: { type: 0, pubKeyHash: \\"" + hexAddress + "\\" } }")\n        };\n        AliasOutputBuilderParams params = new AliasOutputBuilderParams()\n                .withAliasId(aliasId)\n                .withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildAliasOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}u.isMDXComponent=!0;const d={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 4,\n  "amount": "50300",\n  "aliasId": "0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa",\n  "stateIndex": 0,\n  "stateMetadata": "0x",\n  "foundryCounter": 0,\n  "unlockConditions": [\n    {\n      "type": 4,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    },\n    {\n      "type": 5,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0;var c=n(39617);const m={toc:[]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/13_build_alias_output.js\n\n// Build a basic output\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n        const secretManager = {\n            mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        const addresses = await client.generateAddresses(secretManager, {\n            range: {\n                start: 0,\n                end: 1,\n            },\n        });\n\n        const hexAddress = await client.bech32ToHex(addresses[0]);\n\n        const aliasOutput = await client.buildAliasOutput({\n            aliasId:\n                '0x0000000000000000000000000000000000000000000000000000000000000000',\n            amount: '1000000',\n            unlockConditions: [\n                {\n                    // StateControllerAddressUnlockCondition\n                    type: 4,\n                    address: {\n                        type: 0,\n                        pubKeyHash: hexAddress,\n                    },\n                },\n                {\n                    // GovernorAddressUnlockCondition\n                    type: 5,\n                    address: {\n                        type: 0,\n                        pubKeyHash: hexAddress,\n                    },\n                },\n            ],\n        });\n\n        console.log(aliasOutput);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/13_build_alias_output.js"))}h.isMDXComponent=!0;const b={toc:[]};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{\n  type: 4,\n  amount: '1000000',\n  aliasId: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  stateIndex: 0,\n  stateMetadata: '0x',\n  foundryCounter: 0,\n  unlockConditions: [ { type: 4, address: [Object] }, { type: 5, address: [Object] } ]\n}\n")))}f.isMDXComponent=!0;var _=n(7336);const k={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function w(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example alias --release\n\nuse iota_client::{\n    block::{\n        output::{\n            feature::{IssuerFeature, MetadataFeature, SenderFeature},\n            unlock_condition::{\n                GovernorAddressUnlockCondition, StateControllerAddressUnlockCondition, UnlockCondition,\n            },\n            AliasId, AliasOutputBuilder, Feature, Output, OutputId,\n        },\n        payload::{transaction::TransactionEssence, Payload},\n    },\n    request_funds_from_faucet,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\n\n/// In this example we will create an alias output\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let token_supply = client.get_token_supply().await?;\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?;\n    tokio::time::sleep(std::time::Duration::from_secs(15)).await;\n\n    //////////////////////////////////\n    // create new alias output\n    //////////////////////////////////\n    let alias_output_builder = AliasOutputBuilder::new_with_amount(1_000_000, AliasId::null())?\n        .add_feature(Feature::Sender(SenderFeature::new(address)))\n        .add_feature(Feature::Metadata(MetadataFeature::new(vec![1, 2, 3])?))\n        .add_immutable_feature(Feature::Issuer(IssuerFeature::new(address)))\n        .add_unlock_condition(UnlockCondition::StateControllerAddress(\n            StateControllerAddressUnlockCondition::new(address),\n        ))\n        .add_unlock_condition(UnlockCondition::GovernorAddress(GovernorAddressUnlockCondition::new(\n            address,\n        )));\n\n    let outputs = vec![alias_output_builder.clone().finish_output(token_supply)?];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction with new alias output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // create second transaction with the actual AliasId (BLAKE2b-160 hash of the Output ID that created the alias)\n    //////////////////////////////////\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let alias_id = AliasId::from(&alias_output_id);\n    let outputs = vec![\n        alias_output_builder\n            .with_alias_id(alias_id)\n            .with_state_index(1)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(alias_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with alias id set sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n    Ok(())\n}\n\n// helper function to get the output id for the first alias output\nfn get_alias_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Alias(_alias_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No alias output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example alias --release"))}w.isMDXComponent=!0;const y={toc:[]};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction with new alias output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0xa2fbd2ff5811c6a56d67f1c114d3202fbab9d24bfef7ce5fd1d025025d869b63\nTransaction with foundry output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x7d5f9c1b7e9eb664f680ff52baf5e1b1b5b48e73431852d3662ef54d16070713\nTransaction with native tokens burnt sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x81da03ffa6bcd77d99780fb040b7f47d8ffe3f0fad54c0b4c73bf4642b72dce7\nTransaction with native tokens sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x438780b57d3db9f01b371806437f1c2a192f9e3de176bcb30d100483b33f8c33\nSecond transaction with native tokens sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x04e7fc17e76fe77d6dd58ecbef258a6615bdfb1a7daabf056ffd69b0ad0d78db\nThird transaction with native tokens burned sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x527c93dec602053b86521125d1cc1c376a0274f4b0d5ec4a5f0d97a4034fcffc\n")))}g.isMDXComponent=!0;const v={title:"Build an Alias Output",description:"The following example will build and send an NFT output.",keywords:["how to","block","output","alias","java","nodejs","python","rust"]},x=void 0,C={unversionedId:"how_tos/build_alias_output",id:"how_tos/build_alias_output",title:"Build an Alias Output",description:"The following example will build and send an NFT output.",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/13_build_alias_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_alias_output",permalink:"/shimmer/iota.rs/how_tos/build_alias_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/13_build_alias_output.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Build an Alias Output",description:"The following example will build and send an NFT output.",keywords:["how to","block","output","alias","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Build a Foundry Output",permalink:"/shimmer/iota.rs/how_tos/build_foundry_output"},next:{title:"Listen to MQTT",permalink:"/shimmer/iota.rs/how_tos/mqtt"}},T={},N=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],E={toc:N};function O(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,o.kt)("li",{parentName:"ol"},"Build an Alias output.")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(w,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(_.ZP,{mdxType:"PythonCode"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(_.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),i=n(86010),s=n(51048),r=n(33609),l=n(1943),u=n(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:h,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,r.l)(_,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!_.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,l.U)(),[v,x]=(0,o.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==v&&_.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=C.indexOf(t),a=_[n].value;a!==v&&(T(t),x(a),null!=h&&g(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},b)},_.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:N,onClick:N},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,s.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);