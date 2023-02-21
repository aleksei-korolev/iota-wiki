"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75240],{17464:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Safe Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code. See our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/how_tos/backup_security"},"backup and security recommendations")," for production setups.")))}l.isMDXComponent=!0},85311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),o=a(17464),l=a(34259),s=a(18679),i=a(69319),u=a(47191);const c={title:"Getting Started With Rust",description:"Getting started with the official IOTA Wallet Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},d=void 0,m={unversionedId:"getting_started/rust",id:"getting_started/rust",title:"Getting Started With Rust",description:"Getting started with the official IOTA Wallet Rust library.",source:"@site/shimmer/external/wallet.rs/documentation/docs/getting_started/rust.mdx",sourceDirName:"getting_started",slug:"/getting_started/rust",permalink:"/shimmer/wallet.rs/getting_started/rust",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/getting_started/rust.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Rust",description:"Getting started with the official IOTA Wallet Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/shimmer/wallet.rs/getting_started/"},next:{title:"Getting Started With Node.js",permalink:"/shimmer/wallet.rs/getting_started/nodejs"}},p={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Include the Library",id:"include-the-library",level:2},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],g={toc:h};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The wallet.rs library is published on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/iota-wallet/versions"},"crates.io"),". You can also download\nthe source code from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs"},"official GitHub repository"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend you update ",(0,r.kt)("em",{parentName:"p"},"Rust")," to the latest stable\nversion ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"rustup update stable"),".")),(0,r.kt)("p",null,"The library uses ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/documentation/"},(0,r.kt)("em",{parentName:"a"},"cmake"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},(0,r.kt)("em",{parentName:"a"},"openssl")),". You may\nneed install additional build tools on your system to run the build process successfully using Cargo."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"You can install all needed prerequisites on Windows with ",(0,r.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages?q=msys"},"Chocolatey"),". If you have any of the tools already installed just remove them from the command"),(0,r.kt)("p",null,"Install Chocolatey with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n")),(0,r.kt)("p",null,"and install the needed packages with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choco install visualstudio2022buildtools visualstudio2022-workload-vctools rust-ms msys2 llvm\n"))),(0,r.kt)(s.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"You can install ",(0,r.kt)("em",{parentName:"p"},"cmake")," and ",(0,r.kt)("em",{parentName:"p"},"openssl")," with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.brew.sh/"},(0,r.kt)("em",{parentName:"a"},"Homebrew"))," by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\nbrew install openssl@1.1\n# you may want to add this to your .zshrc or .bashrc since you'll need it to compile the crate\nOPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)\n"))),(0,r.kt)(s.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"You can install ",(0,r.kt)("em",{parentName:"p"},"cmake")," and ",(0,r.kt)("em",{parentName:"p"},"openssl")," with your distro's package manager or download from their websites. On Debian and\nUbuntu you will also need the ",(0,r.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/build-essential"},(0,r.kt)("em",{parentName:"a"},"build-essential"))," package."))),(0,r.kt)("h2",{id:"include-the-library"},"Include the Library"),(0,r.kt)("p",null,"The only thing you need to do to start using the library is to add it as dependency in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"{2}","{2}":!0},'[dependencies]\niota-wallet = { git = "https://github.com/iotaledger/wallet.rs", branch = "develop" }\ntokio = "1.21.2"\n')),(0,r.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,r.kt)("p",null,"In order to use the library, you need to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager"),":"),(0,r.kt)(o.ZP,{mdxType:"WarningPasswordStorage"}),(0,r.kt)(i.Z,{className:"language-rust",showLineNumbers:!0,metastring:"{12,37-42}",mdxType:"CodeBlock"},u.Z),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/examples"},"code examples"),"."))}b.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),o=a(86010),l=a(51048),s=a(33609),i=a(1943),u=a(72957);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:p,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=p??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,i.U)(),[N,_]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&w.some((t=>t.value===e))&&_(e)}const x=e=>{const t=e.currentTarget,a=S.indexOf(t),n=w[a].value;n!==N&&(T(t),_(n),null!=h&&f(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},w.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:I,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},47191:(e,t,a)=>{a.d(t,{Z:()=>n});const n='// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example create_wallet --release\n// In this example we will create a new wallet\n// Rename `.env.example` to `.env` first\n\nuse std::{env, path::PathBuf};\n\nuse dotenv::dotenv;\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::constants::SHIMMER_COIN_TYPE,\n    secret::{stronghold::StrongholdSecretManager, SecretManager},\n    ClientOptions, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Setup Stronghold secret_manager\n    let mut secret_manager = StrongholdSecretManager::builder()\n        .password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .build(PathBuf::from("wallet.stronghold"))?;\n\n    // Only required the first time, can also be generated with `manager.generate_mnemonic()?`\n    let mnemonic = env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC").unwrap();\n\n    // The mnemonic only needs to be stored the first time\n    secret_manager.store_mnemonic(mnemonic).await?;\n\n    // Create the account manager with the secret_manager and client options\n    let client_options = ClientOptions::new().with_node(&env::var("NODE_URL").unwrap())?;\n\n    let manager = AccountManager::builder()\n        .with_secret_manager(SecretManager::Stronghold(secret_manager))\n        .with_client_options(client_options)\n        .with_coin_type(SHIMMER_COIN_TYPE)\n        .finish()\n        .await?;\n\n    // Create a new account\n    let _account = manager\n        .create_account()\n        .with_alias("Alice".to_string())\n        .finish()\n        .await?;\n\n    println!("Generated a new account");\n\n    Ok(())\n}\n'}}]);