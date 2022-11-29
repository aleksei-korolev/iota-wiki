"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17469],{35763:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(87462),r=(t(67294),t(3905));const s={toc:[]};function o(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Dotenv",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}o.isMDXComponent=!0},76785:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(87462),r=(t(67294),t(3905));const s={toc:[]};function o(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Iota.js",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,r.kt)("a",{href:t.exampleURL}," iota.js library"))))}o.isMDXComponent=!0},20906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>E,default:()=>D,frontMatter:()=>N,metadata:()=>M,toc:()=>I});var a=t(87462),r=(t(67294),t(3905)),s=t(34259),o=t(18679),i=t(69319);const l={toc:[]};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class GenerateAddresses {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Generate the addresses from the given mnemonic.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String[] addresses = client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 5)));\n\n        // Print the addresses.\n        for (String address : addresses) {\n            System.out.println(address);\n        }\n    }\n}'))}d.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy\nrms1qzzk86qv30l4e85ljtccxa0ruy8y7u8zn2dle3g8dv2tl2m4cu227a7n2wj\nrms1qqjrtmslm36l3lyd8086w9qdxd9mudu2z2qyywlltpycn2ftxsdmu9ulj47\nrms1qzz75j5h7vd5melxwersz49jja36m2vvnawedu0l6rlhg70ylzqp52lx8zf\nrms1qzvs2rvq5ef79vhuel354mnvzfz049gyyf808zmjculuatt56u92vc4v4p3\n")))}p.isMDXComponent=!0;var u=t(35763);const m={toc:[]};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,r.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    Client,\n    CoinType,\n    initLogger,\n    SHIMMER_TESTNET_BECH32_HRP,\n} from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/02_generate_addresses.js\n\n// In this example we will create addresses from a mnemonic defined in .env\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n        const secretManager = {\n            mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        // Generate public address with custom account index and range.\n        const address = await client.generateAddresses(secretManager, {\n            accountIndex: 0,\n            range: {\n                start: 0,\n                end: 1,\n            },\n        });\n        console.log('First public address:', address, '\\n');\n\n        // Generate an internal address with custom account index and range.\n        const internalAddress = await client.generateAddresses(secretManager, {\n            accountIndex: 0,\n            range: {\n                start: 0,\n                end: 1,\n            },\n            internal: true,\n        });\n        console.log('First internal address:', internalAddress, '\\n');\n\n        // Generate addresses with providing all inputs, that way it can also be done offline without a node.\n        const offlineGeneratedAddresses = await client.generateAddresses(\n            secretManager,\n            {\n                coinType: CoinType.Shimmer,\n                accountIndex: 0,\n                range: {\n                    start: 0,\n                    end: 2,\n                },\n                internal: false,\n                // Generating addresses with client.generateAddresses(secretManager, {}), will by default get the bech32_hrp (Bech32\n                // human readable part) from the node info, generating it \"offline\" requires setting it in the generateAddressesOptions\n                bech32Hrp: SHIMMER_TESTNET_BECH32_HRP,\n            },\n        );\n        console.log(\n            'List of offline generated public addresses:',\n            offlineGeneratedAddresses,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,r.kt)("p",null,"You can run the example by running the following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/02_generate_addresses.js"))}g.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"First public address: [ 'rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy' ] \n\nFirst internal address: [ 'rms1qp6w3v03qwtwkh52avtdvejpdqp8yfpk4z94m5dg3evuzu9hynyucvmxd59' ] \n\nList of offline generated public addresses: [\n  'rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy',\n  'rms1qzzk86qv30l4e85ljtccxa0ruy8y7u8zn2dle3g8dv2tl2m4cu227a7n2wj'\n]\n")))}f.isMDXComponent=!0;const k={toc:[]};function w(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\n# In this example we will create addresses from a mnemonic\n\nsecret_manager = MnemonicSecretManager("flame fever pig forward exact dash body idea link scrub tennis minute " +\n    "surge unaware prosper over waste kitten ceiling human knife arch situate civil")\n\n\n# Generate public address with custom account index and range.\naddress = client.generate_addresses(secret_manager, {\n    "accountIndex": 0,\n    "range": {\n        "start": 0,\n        "end": 1,\n    },\n})\n\nprint(f\'Address: {address[0]}\')\n'),(0,r.kt)("p",null,"You can run the example by running the following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 02_generate_addresses.py"))}w.isMDXComponent=!0;const y={toc:[]};function x(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Address: rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46\n")))}x.isMDXComponent=!0;const v={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function _(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,r.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example generate_addresses --release -- [NODE URL]\n\nuse iota_client::{\n    api::GetAddressesBuilder,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv::dotenv().ok();\n\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args()\n        .nth(1)\n        .unwrap_or_else(|| std::env::var("NODE_URL").unwrap());\n\n    // Create a client instance\n    let client = Client::builder()\n        .with_node(&node_url)? // Insert your node URL here\n        .finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    // Generate addresses with default account index and range\n    let addresses = client.get_addresses(&secret_manager).finish().await?;\n\n    println!("List of generated public addresses:\\n{addresses:#?}\\n");\n\n    // Generate addresses with custom account index and range\n    let addresses = client\n        .get_addresses(&secret_manager)\n        .with_account_index(0)\n        .with_range(0..4)\n        .finish()\n        .await?;\n\n    println!("List of generated public addresses:\\n{addresses:#?}\\n");\n\n    // Generating addresses with `client.get_addresses(&secret_manager)`, will by default get the bech32_hrp (Bech32\n    // human readable part) from the node info, generating it "offline" requires setting it with\n    // `with_bech32_hrp(bech32_hrp)`\n    let addresses = GetAddressesBuilder::new(&secret_manager)\n        .with_bech32_hrp(client.get_bech32_hrp().await?)\n        .with_account_index(0)\n        .with_range(0..4)\n        .finish()\n        .await?;\n\n    println!("List of offline generated public addresses:\\n{addresses:#?}\\n");\n\n    Ok(())\n}\n'),(0,r.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,r.kt)("p",null,"Run the example by running the following command:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example generate_addresses --release  -- https://api.testnet.shimmer.network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can replace ",(0,r.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url.")))}_.isMDXComponent=!0;const b={toc:[]};function T(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"First public address: rms1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jaxzt70zy\n")))}T.isMDXComponent=!0;var C=t(76785);const N={title:"Generate Addresses",description:"You can generate an IOTA address using the Client.get_addresses() function that will return a list of tuples with the generated addresses.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust","wasm"]},E=void 0,M={unversionedId:"how_tos/generate_addresses",id:"how_tos/generate_addresses",title:"Generate Addresses",description:"You can generate an IOTA address using the Client.get_addresses() function that will return a list of tuples with the generated addresses.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/03_generate_addresses.mdx",sourceDirName:"how_tos",slug:"/how_tos/generate_addresses",permalink:"/next/iota.rs/how_tos/generate_addresses",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/03_generate_addresses.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Generate Addresses",description:"You can generate an IOTA address using the Client.get_addresses() function that will return a list of tuples with the generated addresses.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust","wasm"]},sidebar:"docs",previous:{title:"Generate a Mnemonic",permalink:"/next/iota.rs/how_tos/generate_mnemonic"},next:{title:"Get Outputs",permalink:"/next/iota.rs/how_tos/get_output"}},j={},I=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:I};function D(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can generate an IOTA address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client.get_addresses()")," function that will return a list of tuples with the\ngenerated addresses."),(0,r.kt)("p",null,"The following code example will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,r.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,r.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,r.kt)("li",{parentName:"ol"},"Generate a public address."),(0,r.kt)("li",{parentName:"ol"},"Generate an internal address."),(0,r.kt)("li",{parentName:"ol"},"Generate an offline address.")),(0,r.kt)(C.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/address",mdxType:"IotaJs"}),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)(_,{mdxType:"RustCode"})),(0,r.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"NodejsCode"})),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(w,{mdxType:"PythonCode"})),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"JavaCode"}))),(0,r.kt)("h2",{id:"expected-output"},"Expected Output"),(0,r.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)(T,{mdxType:"RustOutput"})),(0,r.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)(f,{mdxType:"NodejsOutput"})),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(x,{mdxType:"PythonOutput"})),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const s="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),s=t(86010),o=t(51048),i=t(33609),l=t(1943),d=t(72957);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var n;const{lazy:t,block:o,defaultValue:u,values:m,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),w=(0,i.l)(k,((e,n)=>e.value===n.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:v}=(0,l.U)(),[_,b]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=g){const e=x[g];null!=e&&e!==_&&k.some((n=>n.value===e))&&b(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==_&&(C(n),b(a),null!=g&&v(g,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>T.push(e),onKeyDown:E,onFocus:N,onClick:N},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===n})}),t??n)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function m(e){const n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}}}]);