"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46910],{2565:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Account Approaches",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Wallet.rs supports a ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/explanations/account_approaches#multi-account-approach"},"multi-account approach")," and\na ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/explanations/account_approaches#single-account-approach"},"single-account approach"),".")))}r.isMDXComponent=!0},73479:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},31171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>O,contentTitle:()=>M,default:()=>D,frontMatter:()=>N,metadata:()=>A,toc:()=>S});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),r=t(18679),l=t(69319);const c={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example creates a new database and account\n */\n\nrequire('dotenv').config({ path: '../.env' });\nconst { AccountManager, CoinType } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = await createAccountManager();\n\n        const account = await manager.createAccount({\n            alias: 'Alice',\n        });\n        console.log('Account created:', account);\n\n        const secondAccount = await manager.createAccount({\n            alias: 'Bob',\n        });\n        console.log('Account created:', secondAccount);\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nasync function createAccountManager() {\n    const accountManagerOptions = {\n        storagePath: './alice-database',\n        clientOptions: {\n            nodes: ['https://api.testnet.shimmer.network'],\n            localPow: true,\n        },\n        coinType: CoinType.Shimmer,\n        secretManager: {\n            Stronghold: {\n                snapshotPath: `./wallet.stronghold`,\n                password: `${process.env.SH_PASSWORD}`,\n            },\n        },\n    };\n\n    const manager = new AccountManager(accountManagerOptions);\n    await manager.storeMnemonic(process.env.MNEMONIC);\n    return manager;\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 1-create-account.js"))}i.isMDXComponent=!0;const u={toc:[]};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Account created: Account {\n  meta: {\n    index: 0,\n    coinType: 4219,\n    alias: 'Alice',\n    publicAddresses: [ [Object] ],\n    internalAddresses: [],\n    addressesWithUnspentOutputs: [],\n    outputs: {},\n    lockedOutputs: [],\n    unspentOutputs: {},\n    transactions: {},\n    pendingTransactions: [],\n    incomingTransactions: {}\n  },\n  messageHandler: MessageHandler { messageHandler: [External: 7f29dde5bf80] }\n}\nAccount created: Account {\n  meta: {\n    index: 1,\n    coinType: 4219,\n    alias: 'Bob',\n    publicAddresses: [ [Object] ],\n    internalAddresses: [],\n    addressesWithUnspentOutputs: [],\n    outputs: {},\n    lockedOutputs: [],\n    unspentOutputs: {},\n    transactions: {},\n    pendingTransactions: [],\n    incomingTransactions: {}\n  },\n  messageHandler: MessageHandler { messageHandler: [External: 7f29dde5bf80] }\n}\n\n")))}p.isMDXComponent=!0;const d={toc:[]};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet, StrongholdSecretManager\n\n# This example creates a new database and account\n\nclient_options = {\n    'nodes': ['https://api.testnet.shimmer.network'],\n}\n\n# Shimmer coin type\ncoin_type = 4219\n\nsecret_manager = StrongholdSecretManager(\"wallet.stronghold\", \"some_hopefully_secure_password\")\n\nwallet = IotaWallet('./alice-database', client_options, coin_type, secret_manager)\n\n# Store the mnemonic in the Stronghold snapshot, this only needs to be done once\naccount = wallet.store_mnemonic(\"flame fever pig forward exact dash body idea link scrub tennis minute \" +\n          \"surge unaware prosper over waste kitten ceiling human knife arch situate civil\")\n\naccount = wallet.create_account('Alice')\nprint(account)\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 0-create-account.py"))}m.isMDXComponent=!0;const h={toc:[]};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  'index': 0,\n  'coinType': 4219,\n  'alias': 'Alice',\n  'publicAddresses': [\n    {\n      'address': 'rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46',\n      'keyIndex': 0,\n      'internal': False,\n      'used': False\n    }\n  ],\n  'internalAddresses': [],\n  'addressesWithUnspentOutputs': [],\n  'outputs': {},\n  'lockedOutputs': [],\n  'unspentOutputs': {},\n  'transactions': {},\n  'pendingTransactions': [],\n  'incomingTransactions': {}\n}\n")))}g.isMDXComponent=!0;const w={toc:[]};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.AccountHandle;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.CoinType;\nimport org.iota.types.WalletConfig;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class CreateAccount {\n    public static void main(String[] args) throws WalletException, InitializeWalletException {\n        // Build the wallet.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Add the mnemonic secret to the secret manager.\n        wallet.storeMnemonic(Env.MNEMONIC);\n\n        // Create an account.\n        AccountHandle a = wallet.createAccount(Env.ACCOUNT_NAME);\n\n        // Print the account.\n        System.out.println(a);\n    }\n}"))}y.isMDXComponent=!0;const _={toc:[]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "index": 0,\n  "coinType": 4219,\n  "alias": "Hans",\n  "publicAddresses": [\n    {\n      "address": "rms1qpx0mcrqq7t6up73n4na0zgsuuy4p0767ut0qq67ngctj7pg4tm2ynsuynp",\n      "keyIndex": 0,\n      "isInternal": false,\n      "used": false\n    }\n  ],\n  "internalAddresses": [],\n  "addressesWithUnspentOutputs": [],\n  "outputs": {},\n  "lockedOutputs": [],\n  "unspentOutputs": {},\n  "transactions": {},\n  "pendingTransactions": [],\n  "incomingTransactions": {}\n}\n')))}k.isMDXComponent=!0;var v=t(73479);const x={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(v.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example create_wallet --release\n// In this example we will create a new wallet\n// Rename `.env.example` to `.env` first\n\nuse std::{env, path::PathBuf};\n\nuse dotenv::dotenv;\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::constants::SHIMMER_COIN_TYPE,\n    secret::{stronghold::StrongholdSecretManager, SecretManager},\n    ClientOptions, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Setup Stronghold secret_manager\n    let mut secret_manager = StrongholdSecretManager::builder()\n        .password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .build(PathBuf::from("wallet.stronghold"))?;\n\n    // Only required the first time, can also be generated with `manager.generate_mnemonic()?`\n    let mnemonic = env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC").unwrap();\n\n    // The mnemonic only needs to be stored the first time\n    secret_manager.store_mnemonic(mnemonic).await?;\n\n    // Create the account manager with the secret_manager and client options\n    let client_options = ClientOptions::new().with_node(&env::var("NODE_URL").unwrap())?;\n\n    let manager = AccountManager::builder()\n        .with_secret_manager(SecretManager::Stronghold(secret_manager))\n        .with_client_options(client_options)\n        .with_coin_type(SHIMMER_COIN_TYPE)\n        .finish()\n        .await?;\n\n    // Create a new account\n    let _account = manager\n        .create_account()\n        .with_alias("Alice".to_string())\n        .finish()\n        .await?;\n\n    println!("Generated a new account");\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example create_wallet --release"))}T.isMDXComponent=!0;const b={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Generated a new account\n")))}f.isMDXComponent=!0;var C=t(2565);const N={title:"Create a Wallet Account",description:"How to create a wallet account to start sending value transactions to a Hornet node.",image:"/img/logo/iota_mark_light.png",keywords:["how to","create account","create wallet","account manager","multi account approach","single account approach","nodejs","python","java","rust"]},M=void 0,A={unversionedId:"how_tos/accounts_and_addresses/create_a_wallet_account",id:"how_tos/accounts_and_addresses/create_a_wallet_account",title:"Create a Wallet Account",description:"How to create a wallet account to start sending value transactions to a Hornet node.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/01_create_a_wallet_account.mdx",sourceDirName:"how_tos/accounts_and_addresses",slug:"/how_tos/accounts_and_addresses/create_a_wallet_account",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/01_create_a_wallet_account.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a Wallet Account",description:"How to create a wallet account to start sending value transactions to a Hornet node.",image:"/img/logo/iota_mark_light.png",keywords:["how to","create account","create wallet","account manager","multi account approach","single account approach","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Run Code Examples",permalink:"/shimmer/wallet.rs/how_tos/run_how_tos"},next:{title:"Generate an Address",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/generate_address"}},O={},S=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],E={toc:S};function D(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first thing you will need to do when you are getting started with the wallet.rs library is to create a wallet account."),(0,o.kt)(C.ZP,{mdxType:"TipAccountApproaches"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Use it to store the ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/stronghold.rs/welcome"},"Stronghold")," mnemonic."),(0,o.kt)("li",{parentName:"ol"},'Create a wallet with the alias "Alice".')),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"PythonOutput"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),s=t(86010),r=t(51048),l=t(33609),c=t(1943),i=t(72957);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:r,defaultValue:d,values:m,groupId:h,className:g}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??w.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),_=(0,l.l)(y,((e,n)=>e.value===n.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)??w[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,c.U)(),[T,b]=(0,o.useState)(k),f=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=h){const e=v[h];null!=e&&e!==T&&y.some((n=>n.value===e))&&b(e)}const N=e=>{const n=e.currentTarget,t=f.indexOf(n),a=y[t].value;a!==T&&(C(n),b(a),null!=h&&x(h,String(a)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=f.indexOf(e.currentTarget)+1;t=f[n]??f[0];break}case"ArrowLeft":{const n=f.indexOf(e.currentTarget)-1;t=f[n]??f[f.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},g)},y.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>f.push(e),onKeyDown:M,onFocus:N,onClick:N},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,o.cloneElement)(w.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}}}]);