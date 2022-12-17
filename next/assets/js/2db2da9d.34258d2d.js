"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35361],{99044:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}c.isMDXComponent=!0},83803:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}c.isMDXComponent=!0},16911:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}c.isMDXComponent=!0},18254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>T,default:()=>S,frontMatter:()=>_,metadata:()=>I,toc:()=>C});var a=t(87462),o=(t(67294),t(3905)),l=t(34259),c=t(18679),i=t(69319);const s={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will melt native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Get a tokenId from your account balance after running example\n        // 22-mint-native-tokens.js\n        let tokenId =\n            '0x08e6210d29881310db2afde095e594f6f006fcdbd06e7a83b74bd2bdf3b5190d0e0200000000';\n        // `100` hex encoded\n        let meltAmount = \"0xc8\"\n\n        const response = await account.decreaseNativeTokenSupply(tokenId, meltAmount);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 30-decrease-native-token-supply.js"))}r.isMDXComponent=!0;const d={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0x2d6b40731bd6222d0f7670ea5a1b143e499703cf71fd51a821d32d91a77a5041',\n      outputs: [Array]\n    },\n    unlocks: [ [Object], [Object], [Object] ]\n  },\n  blockId: '0x350a89dad8a6d96dc5cd5e7abcafa334c287e14ee4187c0260d7b24209b4ff19',\n  inclusionState: 'Pending',\n  timestamp: '1671182041013',\n  transactionId: '0xd7b94f8487a817bc70febb80d83f0df93f1d7035851affaf7114cd7348cb610d',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x350a89dad8a6d96dc5cd5e7abcafa334c287e14ee4187c0260d7b24209b4ff19\n")))}u.isMDXComponent=!0;var p=t(99044);const m={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xbd9dc768e5676e9d141ab96622143127328c10361f319f919365c480972dbe83",\n          "transactionOutputIndex":0\n        },\n        {\n          "type":0,\n          "transactionId":"0xbd9dc768e5676e9d141ab96622143127328c10361f319f919365c480972dbe83",\n          "transactionOutputIndex":1\n        },\n        {\n          "type":0,\n          "transactionId":"0xbd9dc768e5676e9d141ab96622143127328c10361f319f919365c480972dbe83",\n          "transactionOutputIndex":2\n        }\n      ],\n      "inputsCommitment":"0xaea8c0e6b4af1afb241b9d4b850b54438dff3e5dfe36a54f1bbaccdc81d1b245",\n      "outputs":[\n        {\n          "type":4,\n          "amount":"50300",\n          "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef",\n          "stateIndex":6,\n          "stateMetadata":"0x",\n          "foundriesCounter":0,\n          "unlockConditions":[\n            {\n              "type":4,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":5,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        },\n        {\n          "type":5,\n          "amount":"52800",\n          "serialNumber":3,\n          "tokenScheme":{\n            "type":0,\n            "mintedTokens":"0x17",\n            "meltedTokens":"0x2",\n            "maximumSupply":"0x64"\n          },\n          "unlockConditions":[\n            {\n              "type":6,\n              "address":{\n                "type":8,\n                "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef"\n              }\n            }\n          ]\n        },\n        {\n          "type":3,\n          "amount":"57600",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n              "amount":"0x15"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xc9c5369388d5fce9297c816612af93eea35b34d1fd4575de9b5ba5f477186e84f2affe6a2ba230beb1d47e3e5ee31f20d484a857e9c3d18fe0fe5e334d6f1202"\n        }\n      },\n      {\n        "type":2,\n        "reference":0\n      },\n      {\n        "type":1,\n        "reference":0\n      }\n    ]\n  },\n  "blockId":"0x063c35701e459cb6515cd0be7d0ed691fd622f5a2dc3bb126213a4f06910ab54",\n  "inclusionState":"Pending",\n  "timestamp":"1664885556280",\n  "transactionId":"0xcbcfbbd9b36bd9a3d6830311ed428036d13fc37050bcd1cf82fb4e4b695570fd",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}b.isMDXComponent=!0;const k={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.DecreaseNativeTokenSupply;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.TokenId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class MeltNativeToken {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        TokenId tokenId = new TokenId("0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0500000000");\n        String meltAmount = "0x20";\n\n        // Send transaction.\n        Transaction t = a.meltNativeToken(new DecreaseNativeTokenSupply()\n                .withTokenId(tokenId)\n                .withMeltAmount(meltAmount)\n        );\n\n        // Print transaction.\n        System.out.println(t);\n    }\n\n}\n\n'))}f.isMDXComponent=!0;var h=t(16911);const y={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(h.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example decrease_native_token_supply --release\n// In this example we will melt an existing native token with its foundry\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::TokenId;\nuse iota_wallet::{account_manager::AccountManager, Result, U256};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before melting:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with a TokenId that is available in the account, the foundry output which minted it, also needs to be\n    // available.\n    let token_id = TokenId::from_str("0x08847bd287c912fadedb6bf38900bda9f2d377b75b2a0bece8738699f56ebca4130100000000")?;\n\n    // Melt some of the circulating supply\n    let melt_amount = U256::from(10);\n    let transaction = account\n        .decrease_native_token_supply(token_id, melt_amount, None)\n        .await?;\n\n    account\n        .retry_transaction_until_included(&transaction.transaction_id, None, None)\n        .await?;\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after melting:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example melt_native_token --release"))}v.isMDXComponent=!0;const w={toc:[]};function x(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"")))}x.isMDXComponent=!0;var g=t(83803);const _={title:"Melt Native Tokens",sidebar_label:"Melt",description:"How to melt native tokens with wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","melt native token","foundry","nodejs","python","java","rust"]},T=void 0,I={unversionedId:"how_tos/native_tokens/melt_native_token",id:"how_tos/native_tokens/melt_native_token",title:"Melt Native Tokens",description:"How to melt native tokens with wallet.rs",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/03_melt_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/melt_native_token",permalink:"/next/wallet.rs/how_tos/native_tokens/melt_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/03_melt_native_token.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Melt Native Tokens",sidebar_label:"Melt",description:"How to melt native tokens with wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","melt native token","foundry","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Send",permalink:"/next/wallet.rs/how_tos/native_tokens/send_native_token"},next:{title:"Burn",permalink:"/next/wallet.rs/how_tos/native_tokens/burn_native_token"}},N={},C=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],D={toc:C};function S(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},D,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may want to melt some of your circulating native tokens. To do so, you will need to call the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Account.melt_native_token(native_token, options)")," function."),(0,o.kt)("p",null,"If you melt your native tokens, you can still destroy the foundry that created them."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(g.ZP,{mdxType:"ReplaceNativeTokenId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Get the account's balance."),(0,o.kt)("li",{parentName:"ol"},"Melt 10 native tokens of the supplied ID.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"JavaOutput"}))))}S.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),o=t(86010);const l="tabItem_Ymn6";function c(e){let{children:n,hidden:t,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,c),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),l=t(86010),c=t(51048),i=t(33609),s=t(1943),r=t(72957);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:c,defaultValue:p,values:m,groupId:b,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[g,_]=(0,o.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,r.o5)();if(null!=b){const e=w[b];null!=e&&e!==g&&h.some((n=>n.value===e))&&_(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=h[t].value;a!==g&&(I(n),_(a),null!=b&&x(b,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},h.map((e=>{let{value:n,label:t,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:N,onClick:N},c,{className:(0,l.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":g===n})}),t??n)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function m(e){const n=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);