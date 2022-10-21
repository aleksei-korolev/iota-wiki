"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[14847],{53855:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}i.isMDXComponent=!0},29163:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}i.isMDXComponent=!0},73479:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}i.isMDXComponent=!0},20781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>w,default:()=>I,frontMatter:()=>y,metadata:()=>_,toc:()=>x});var a=t(87462),o=(t(67294),t(3905)),c=t(34259),i=t(18679),r=t(53855);const l={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xcbcfbbd9b36bd9a3d6830311ed428036d13fc37050bcd1cf82fb4e4b695570fd",\n          "transactionOutputIndex":2\n        }\n      ],\n      "inputsCommitment":"0x3f44d0e0f31bd57f028d80d8c9b07b0e12406e6cd5b2e8b6ed0abd178a1e1b1b",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"57600",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n              "amount":"0x10"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xfd9964cdcfa6bda25419968c3d74d29e35611bbc2a9ddad2be0eadc816da270fcf739c2e7ecc4be4e46f33b32aa37370534e0ee322c23755ecb608de9618ae0a"\n        }\n      }\n    ]\n  },\n  "blockId":"0xb53140f385372ca247d7d66ee14755a2e18d8ca750fd85122a6b5b6b0c1abf7c",\n  "inclusionState":"Pending",\n  "timestamp":"1664885731096",\n  "transactionId":"0xbb7f884e81ed32dbfe4f9c880b0f6577c9c90744b7ab33d84950706d2924c18c",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}d.isMDXComponent=!0;var s=t(69319);const u={toc:[]};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.TokenId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class BurnNativeToken {\n\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateAccount.java\xb4 example.\n        // If you haven\'t run the \xb4CreateAccount.java\xb4 example yet, you must run it first to be able to load the wallet as shown below:\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        TokenId tokenId = new TokenId("0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000");\n        String burnAmount = "0x5";\n\n        // Send transaction.\n        Transaction t = a.burnNativeToken(new org.iota.types.account_methods.BurnNativeToken()\n                .withTokenId(tokenId)\n                .withBurnAmount(burnAmount)\n        );\n\n        // Print transaction.\n        System.out.println(t);\n    }\n}'))}p.isMDXComponent=!0;var b=t(73479);const m={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(b.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example burn_native_token --release\n// In this example we will burn an existing native token, this will not increase the melted supply in the foundry,\n// therefore the foundry output is also not required. But this will also make it impossible to destroy the foundry\n// output that minted it.\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::TokenId;\nuse iota_wallet::{account_manager::AccountManager, Result, U256};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before burning:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with a TokenId that is available in the account\n    let token_id = TokenId::from_str("0x08847bd287c912fadedb6bf38900bda9f2d377b75b2a0bece8738699f56ebca4130100000000")?;\n\n    // Burn a native token\n    let burn_amount = U256::from(1);\n    let transaction = account.burn_native_token(token_id, burn_amount, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn native token transaction failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after burning:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example burn_native_token --release"))}f.isMDXComponent=!0;const h={toc:[]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"{10-14,45-49}","{10-14,45-49}":!0},"Balancebeforeburning: \n\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209995515000,\n    available: 209995515000\n  },\n  required_storage_deposit: 1787500,\n  native_tokens: [\n    NativeTokensBalance{\n      token_id: TokenId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0300000000),\n      total: 100,\n      available: 100\n    }\n  ],\n  nfts: [\n    \n  ],\n  aliases: [\n    AliasId(0xadbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde)\n  ],\n  foundries: [\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0200000000),\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0100000000),\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0300000000)\n  ],\n  potentially_locked_outputs: {\n    OutputId(0x452a212cbe8512ea7844759402f1679bc1c1e6a088f1f3faaed6aeaa0ac246ee0000): false,\n    OutputId(0xb8572c3386616ae4be668a46756fcc46bf9cdf178bd50122cf70c81dbec362200000): false,\n    OutputId(0x041a90dc4d9b23a3ef91c64b7aa69da27e90d3306f644fc7b1647016925d5ff30000): false,\n    OutputId(0xcb30fa5cbb34b7bb10c0408b4e2bbe323b73fcb9b30b0a9446c1866210cf82d80000): false,\n    OutputId(0x2c0a9874a309ac3ffce684a8d5f38be54f12760d40ef8fd72f043a11fd4b76110000): false\n  }\n}\n\nBalanceafterburning: \n\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209995515000,\n    available: 209995515000\n  },\n  required_storage_deposit: 1787500,\n  native_tokens: [\n    NativeTokensBalance{\n      token_id: TokenId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0300000000),\n      total: 99,\n      available: 99\n    }\n  ],\n  nfts: [\n    \n  ],\n  aliases: [\n    AliasId(0xadbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde)\n  ],\n  foundries: [\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0200000000),\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0100000000),\n    FoundryId(0x08adbd5f0844fdc9bf4eafe2df929ac42cc90336e68da284cce96f22523bd87cde0300000000)\n  ],\n  potentially_locked_outputs: {\n    OutputId(0x2c0a9874a309ac3ffce684a8d5f38be54f12760d40ef8fd72f043a11fd4b76110000): false,\n    OutputId(0x452a212cbe8512ea7844759402f1679bc1c1e6a088f1f3faaed6aeaa0ac246ee0000): false,\n    OutputId(0x041a90dc4d9b23a3ef91c64b7aa69da27e90d3306f644fc7b1647016925d5ff30000): false,\n    OutputId(0xb8572c3386616ae4be668a46756fcc46bf9cdf178bd50122cf70c81dbec362200000): false,\n    OutputId(0xcb30fa5cbb34b7bb10c0408b4e2bbe323b73fcb9b30b0a9446c1866210cf82d80000): false\n  }\n}\n")))}k.isMDXComponent=!0;var v=t(29163);const y={title:"Burn Native Tokens",sidebar_label:"Burn",description:"How to burn native tokens",image:"/img/logo/iota_mark_light.png",keywords:["how to","burn","burn native token","foundry","nodejs","python","java","rust"]},w=void 0,_={unversionedId:"how_tos/native_tokens/burn_native_token",id:"how_tos/native_tokens/burn_native_token",title:"Burn Native Tokens",description:"How to burn native tokens",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/04_burn_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/burn_native_token",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/burn_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/04_burn_native_token.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Burn Native Tokens",sidebar_label:"Burn",description:"How to burn native tokens",image:"/img/logo/iota_mark_light.png",keywords:["how to","burn","burn native token","foundry","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Melt",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/melt_native_token"},next:{title:"Destroy a Foundry",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/destroy_foundry"}},g={},x=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:x};function I(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may want to burn some of your circulating native tokens. To do so, you will need to call the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Account.burn_native_token(native_token, options)")," function."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you burn your native tokens, you will not be able to destroy the foundry that created them. If you want to destroy\nthe foundry in the future, you should consider ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/melt_native_token"},"melting your native tokens"))),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(v.ZP,{mdxType:"ReplaceNativeTokenId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Burn 1 native tokens of the supplied ID.")),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"RustCode"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r.ZP,{mdxType:"NodejsCode"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.ZP,{mdxType:"PythonCode"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"RustOutput"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r.ZP,{mdxType:"NodejsOutput"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"JavaOutput"}))))}I.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(86010);const c="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,i),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(87462),o=t(67294),c=t(86010),i=t(51048),r=t(33609),l=t(1943),d=t(72957);const s="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:b,groupId:m,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,r.l)(k,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:_}=(0,l.U)(),[g,x]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=m){const e=w[m];null!=e&&e!==g&&k.some((n=>n.value===e))&&x(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==g&&(I(n),x(a),null!=m&&_(m,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:N,onClick:N},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":g===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function b(e){const n=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);