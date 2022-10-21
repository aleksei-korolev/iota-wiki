"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28693],{53855:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}l.isMDXComponent=!0},29163:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}l.isMDXComponent=!0},73479:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}l.isMDXComponent=!0},64066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>_,default:()=>D,frontMatter:()=>T,metadata:()=>N,toc:()=>C});var a=t(87462),o=(t(67294),t(3905)),r=t(34259),l=t(18679),s=t(69319);const c={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will burn an NFT\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const { initLogger } = require('@iota/wallet');\n    initLogger({\n        name: './wallet.log',\n        levelFilter: 'debug',\n        targetExclusions: [\"h2\", \"hyper\", \"rustls\"]\n    });\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        //TODO: Replace with an NFT id from your account, you can mint one with `25-mint-nft.js`.\n        const response = await account.burnNft('0xeb7a7f6b4b8f932ed0d60d5a6018cb51dfa53af1173f9ca8944d1ab49772dd2b');\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 27-burn-nft.js"))}i.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0x8ed6de2d3570269b4cfe2eb7ad29ee324c1b6ff78ad1f608db2b4e40c03db366',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x2ea37ddeeaad7e6546e22cb92821ada3a213760b6a799c49b68d57a287d68a3b',\n  inclusionState: 'Pending',\n  timestamp: '1663000414059',\n  transactionId: '0x8e178dddc6c65be31ebe9fc980add3a62573d972a15deee03ac2434fc91812c5',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x2ea37ddeeaad7e6546e22cb92821ada3a213760b6a799c49b68d57a287d68a3b\n\n")))}d.isMDXComponent=!0;var p=t(53855);const m={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.NftId;\nimport org.iota.types.ids.TokenId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class BurnNft {\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateAccount.java\xb4 example.\n        // If you haven\'t run the \xb4CreateAccount.java\xb4 example yet, you must run it first to be able to load the wallet as shown below:\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        NftId nftId = new NftId("0xf95f4d5344217a2ba19a6c19a47f97d267edf8c4d76a7b8c08072ad35acbebbe");\n\n        // Send transaction.\n        Transaction t = a.burnNft(new org.iota.types.account_methods.BurnNft()\n                .withNftId(nftId)\n        );\n\n        // Print transaction.\n        System.out.println(t);\n    }\n}'))}b.isMDXComponent=!0;const f={toc:[]};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xf5e022f199d90f2020ab941de947368e9d02a4f05139fcb44f66feade216f150",\n          "transactionOutputIndex":0\n        }\n      ],\n      "inputsCommitment":"0xd64acb6fec68315c200484458fb0a2c1e9b7d06106aecdcb9c86403d955ad69a",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"52000",\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xd602074065070b6dada7ce8f5a3c0181a2662443e6e71d7599dcf1464ac04938bdb9b2a39e1f36152cd3226840ab8d63c77d4035a30407ab029b607a7ff4d108"\n        }\n      }\n    ]\n  },\n  "blockId":"0x6bc73ef16d51924154fecf4cc2da1b14297b1aa75ff5261800ab88411185d7c2",\n  "inclusionState":"Pending",\n  "timestamp":"1664876190299",\n  "transactionId":"0x9c26110d611ea78fc0542dca45834abb35497c5ec6045448713f5a588e7f4292",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}h.isMDXComponent=!0;var y=t(73479);const g={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(y.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example burn_nft --release\n// In this example we will burn an existing nft output\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::NftId;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before burning:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with an NftId that is available in the account\n    let nft_id = NftId::from_str("0xe192461b30098a5da889ef6abc9e8130bf3b2d980450fa9201e5df404121b932")?;\n    let transaction = account.burn_nft(nft_id, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn nft failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after burning:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example burn_nft --release"))}k.isMDXComponent=!0;const w={toc:[]};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Balance before burning:\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209996955000,\n    available: 209996955000\n  },\n  required_storage_deposit: 902500,\n  native_tokens: [\n    \n  ],\n  nfts: [\n    NftId(0xe314d76664f0ffe8d5fbe670527f108328c14bc8dad89b234dde3ff8deb58ec9)\n  ],\n  aliases: [\n    \n  ],\n  foundries: [\n    \n  ],\n  potentially_locked_outputs: {\n    \n  }\n}\nBalance after burning:\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209996955000,\n    available: 209996955000\n  },\n  required_storage_deposit: 852000,\n  native_tokens: [\n    \n  ],\n  nfts: [\n    \n  ],\n  aliases: [\n    \n  ],\n  foundries: [\n    \n  ],\n  potentially_locked_outputs: {\n    \n  }\n}\n")))}v.isMDXComponent=!0;var x=t(29163);const T={title:"Burn NFTs",sidebar_label:"Burn",description:"How to burn an NFT using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","NFT","burn","burn NFT","nodejs","python","rust","java"]},_=void 0,N={unversionedId:"how_tos/NFT/burn_nft",id:"how_tos/NFT/burn_nft",title:"Burn NFTs",description:"How to burn an NFT using wallet.rs",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/NFT/03_burn_nft.mdx",sourceDirName:"how_tos/NFT",slug:"/how_tos/NFT/burn_nft",permalink:"/shimmer/wallet.rs/how_tos/NFT/burn_nft",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/NFT/03_burn_nft.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Burn NFTs",sidebar_label:"Burn",description:"How to burn an NFT using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","NFT","burn","burn NFT","nodejs","python","rust","java"]},sidebar:"docs",previous:{title:"Send",permalink:"/shimmer/wallet.rs/how_tos/NFT/send_nft"},next:{title:"More Examples",permalink:"/shimmer/wallet.rs/how_tos/more_examples"}},I={},C=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:C};function D(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may want to burn some of your circulating NFTs. To do so, you will need to call the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Account.burn_nft(native_token, options)")," function."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(x.ZP,{mdxType:"ReplaceNFTId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Burn an NFT of the supplied ID.")),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"RustCode"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsCode"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"})),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustOutput"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsOutput"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),r=t(86010),l=t(51048),s=t(33609),c=t(1943),i=t(72957);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n;const{lazy:t,block:l,defaultValue:p,values:m,groupId:b,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(y,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,c.U)(),[x,T]=(0,o.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=b){const e=w[b];null!=e&&e!==x&&y.some((n=>n.value===e))&&T(e)}const I=e=>{const n=e.currentTarget,t=_.indexOf(n),a=y[t].value;a!==x&&(N(n),T(a),null!=b&&v(b,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>_.push(e),onKeyDown:C,onFocus:I,onClick:I},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);