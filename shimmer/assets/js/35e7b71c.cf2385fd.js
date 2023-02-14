"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24026],{5801:(e,a,d)=>{d.r(a),d.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>f});var n=d(87462),t=(d(67294),d(3905)),s=d(69319);const r={description:"Learn how to manage addresses with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","address","manage","bip44","create","generate seed","ed25519"]},c="Create an Address",o={unversionedId:"how_tos/address",id:"how_tos/address",title:"Create an Address",description:"Learn how to manage addresses with the iota.js client library.",source:"@site/shimmer/external/iota.js/documentation/docs/how_tos/address.mdx",sourceDirName:"how_tos",slug:"/how_tos/address",permalink:"/shimmer/iotajs/how_tos/address",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/feat/stardust/documentation/shimmer/external/iota.js/documentation/docs/how_tos/address.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to manage addresses with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","address","manage","bip44","create","generate seed","ed25519"]},sidebar:"docs",previous:{title:"Connect to a Node",permalink:"/shimmer/iotajs/how_tos/simple"},next:{title:"Manage Peers",permalink:"/shimmer/iotajs/how_tos/peers"}},i={},f=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Generate A Seed",id:"generate-a-seed",level:3},{value:"Constructor",id:"constructor",level:4},{value:"From Mnemonic",id:"from-mnemonic",level:4},{value:"Generate a Random Mnemonic",id:"generate-a-random-mnemonic",level:5},{value:"Create an Address",id:"create-an-address-1",level:2},{value:"Bip44 Address",id:"bip44-address",level:3},{value:"generateBip44Address()",id:"generatebip44address",level:4},{value:"Ed25519 Address",id:"ed25519-address",level:3},{value:"Retrieve an Address",id:"retrieve-an-address",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3}],b={toc:f};function l(e){let{components:a,...d}=e;return(0,t.kt)("wrapper",(0,n.Z)({},b,d,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"create-an-address"},"Create an Address"),(0,t.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,t.kt)("p",null,"Before you can create a transaction, you will need to:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/shimmer/iotajs/how_tos/simple"},"Connect to a Node"),".")),(0,t.kt)("h3",{id:"generate-a-seed"},"Generate A Seed"),(0,t.kt)("h4",{id:"constructor"},"Constructor"),(0,t.kt)("p",null,"You can generate a seed from random bytes by instantiating the ",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed"},"Ed255119Seed class")," using\nits ",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#constructor"},"constructor"),"."),(0,t.kt)("h4",{id:"from-mnemonic"},"From Mnemonic"),(0,t.kt)("p",null,"You can also generate a seed from a mnemonic by using the ",(0,t.kt)("a",{parentName:"p",href:"../references/client/classes/Ed25519Seed#frommnemonic"},"Ed25519Seed.fromMnemonic(mnemonic)"),"\nfunction."),(0,t.kt)("h5",{id:"generate-a-random-mnemonic"},"Generate a Random Mnemonic"),(0,t.kt)("p",null,"You can generate a random mnemonic using the ",(0,t.kt)("a",{parentName:"p",href:"../references/crypto/classes/Bip39#randommnemonic"},"Bip39.randomMnemonic(length?)")," function."),(0,t.kt)("h2",{id:"create-an-address-1"},"Create an Address"),(0,t.kt)("h3",{id:"bip44-address"},"Bip44 Address"),(0,t.kt)("h4",{id:"generatebip44address"},"generateBip44Address()"),(0,t.kt)("p",null,"You can generate a new Bip44 address using the ",(0,t.kt)("a",{parentName:"p",href:"../references/client/api_ref#generatebip44address"},"generateBip44Address(generatorState\t)")," function. You will need to provide an ",(0,t.kt)("a",{parentName:"p",href:"../references/client/interfaces/IBip44GeneratorState"},"IBip44GeneratorState")," as ",(0,t.kt)("inlineCode",{parentName:"p"},"generatorState"),"."),(0,t.kt)("h3",{id:"ed25519-address"},"Ed25519 Address"),(0,t.kt)("p",null,"You can create a new ",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Address"},"Ed25519Address")," by providing a public key to its\n",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Address#constructor"},"constructor"),"."),(0,t.kt)("h3",{id:"retrieve-an-address"},"Retrieve an Address"),(0,t.kt)("p",null,"You can retrieve an address by using the ",(0,t.kt)("a",{parentName:"p",href:"../references/client/classes/Ed25519Address#toaddress"},"Ed25519Address.toAddress()"),"\nfunction."),(0,t.kt)("p",null,"You can then use the ",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/util/classes/Converter#bytestohex"},"Converter.bytesToHex(array, includePrefix?, startIndex?, length?, reverse?)")," and  ",(0,t.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Bech32Helper#tobech32"},"Bech32Helper.toBech32()")," functions to convert the address\nto Ed25519 or Bech32 formats."),(0,t.kt)("h2",{id:"example-code"},"Example Code"),(0,t.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import { Converter } from "@iota/util.js";\nimport { Bip32Path, Bip39 } from "@iota/crypto.js";\nimport {\n    Bech32Helper,\n    Ed25519Address,\n    Ed25519Seed,\n    ED25519_ADDRESS_TYPE,\n    generateBip44Address,\n    COIN_TYPE_IOTA,\n    SingleNodeClient\n} from "@iota/iota.js";\n\nconst API_ENDPOINT = "http://localhost:14265/";\n\nasync function run() {\n    const client = new SingleNodeClient(API_ENDPOINT);\n\n    const info = await client.info();\n\n    console.log("Base");\n\n    // Generate a random mnemonic.\n    const randomMnemonic = Bip39.randomMnemonic();\n    console.log("\\tMnemonic:", randomMnemonic);\n\n    // Generate the seed from the Mnemonic\n    const baseSeed = Ed25519Seed.fromMnemonic(randomMnemonic);\n    console.log("\\tSeed", Converter.bytesToHex(baseSeed.toBytes()));\n\n    // Generate the next addresses for your account.\n    console.log();\n    console.log("Generated Addresses using Bip44 Format");\n    const addressGeneratorAccountState = {\n        accountIndex: 0,\n        addressIndex: 0,\n        isInternal: false\n    };\n    for (let i = 0; i < 6; i++) {\n        const path = generateBip44Address(addressGeneratorAccountState);\n\n        console.log(`Wallet Index ${path}`);\n\n        const addressSeed = baseSeed.generateSeedFromPath(new Bip32Path(path));\n        const addressKeyPair = addressSeed.keyPair();\n\n        console.log("\\tPrivate Key", Converter.bytesToHex(addressKeyPair.privateKey, true));\n        console.log("\\tPublic Key", Converter.bytesToHex(addressKeyPair.publicKey, true));\n\n        const indexEd25519Address = new Ed25519Address(addressKeyPair.publicKey);\n        const indexPublicKeyAddress = indexEd25519Address.toAddress();\n        console.log("\\tAddress Ed25519", Converter.bytesToHex(indexPublicKeyAddress, true));\n        console.log(\n            "\\tAddress Bech32",\n            Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, indexPublicKeyAddress, info.protocol.bech32Hrp)\n        );\n        console.log();\n    }\n\n    console.log();\n    console.log("Generated Addresses manually using Bip44 Format");\n    console.log();\n\n    // You can perform the same process as the generator manually as follows.\n    const basePath = new Bip32Path(`m/44\'/${COIN_TYPE_IOTA}\'`);\n\n    const accountIndex = 0;\n    let isInternal = false;\n    let addressIndex = 0;\n    for (let i = 0; i < 6; i++) {\n        basePath.pushHardened(accountIndex);\n        basePath.pushHardened(isInternal ? 1 : 0);\n        basePath.pushHardened(addressIndex);\n\n        console.log(`Wallet Index ${basePath.toString()}`);\n\n        // Create a new seed from the base seed using the path\n        const indexSeed = baseSeed.generateSeedFromPath(basePath);\n        console.log("\\tSeed", Converter.bytesToHex(indexSeed.toBytes()));\n\n        // Get the public and private keys for the path seed\n        const indexSeedKeyPair = indexSeed.keyPair();\n        console.log("\\tPrivate Key", Converter.bytesToHex(indexSeedKeyPair.privateKey, true));\n        console.log("\\tPublic Key", Converter.bytesToHex(indexSeedKeyPair.publicKey, true));\n\n        // Get the address for the path seed which is actually the Blake2b.sum256 of the public key\n        // display it in both Ed25519 and Bech 32 format\n        const indexEd25519Address = new Ed25519Address(indexSeedKeyPair.publicKey);\n        const indexPublicKeyAddress = indexEd25519Address.toAddress();\n        console.log("\\tAddress Ed25519", Converter.bytesToHex(indexPublicKeyAddress, true));\n        console.log(\n            "\\tAddress Bech32",\n            Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, indexPublicKeyAddress, info.protocol.bech32Hrp)\n        );\n        console.log();\n\n        basePath.pop();\n        basePath.pop();\n        basePath.pop();\n\n        if (isInternal) {\n            addressIndex++;\n        }\n        isInternal = !isInternal;\n    }\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n'),(0,t.kt)("h3",{id:"expected-output"},"Expected Output"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-plaintext"},"\nBase\n        Mnemonic: chronic crucial obtain kit birth river fiber medal napkin month spare reduce increase transfer fan uncover rifle hidden quiz agent bright young bring asthma\n        Seed acb5eb1312a07f47d147d8ec097d82e2b807478bad17776b965b58d670c14eb35569ee525697f267e85a6c05f3f8aeb333cbbedf9a647316198a3fc423c54c95\n\nGenerated Addresses using Bip44 Format\nWallet Index m/44'/4218'/0'/0'/0'\n        Private Key 0xdad2a6b0760bf0dad66fb1fd0c7dafe6bc713ea64f44b32917c91407736fdcc0488e77cbb0075d58fecefaa1e4397148674ea54ae8fe189c8a62e99cd4a3ee24\n        Public Key 0x488e77cbb0075d58fecefaa1e4397148674ea54ae8fe189c8a62e99cd4a3ee24\n        Address Ed25519 0xe4c72f2db3de883e3366cb8dc7055ab5ea30d30e602ea4774dfc849bc6336cdd\n        Address Bech32 rms1qrjvwtedk00gs03nvm9cm3c9t2675vxnpeszafrhfh7gfx7xxdkd6j5t63e\n\nWallet Index m/44'/4218'/0'/1'/0'\n        Private Key 0xdb3076273184f2a1c5385166cd22699dbc88f8c97e1b201b2ee505ae77e6b588ae0a85f5986547ec5137bc213c04777b6d708ae11d6fe338e9ec3970d70e2d3c\n        Public Key 0xae0a85f5986547ec5137bc213c04777b6d708ae11d6fe338e9ec3970d70e2d3c\n        Address Ed25519 0x10f48fb4680954d073bd6ec25534e64ea8b38d47e3d3c41bfe3436f845a361a4\n        Address Bech32 rms1qqg0fra5dqy4f5rnh4hvy4f5ue823vudgl3a83qmlc6rd7z95ds6gg84dug\n\nWallet Index m/44'/4218'/0'/0'/1'\n        Private Key 0xca6befa2029677174e2de4afb3a54b5a44e186b9c3466d208d083bb5215587fd6f19e84ba4e0733b9e5f984aa5b6a63832d06215bb15749dd415e3bab2a0f3bf\n        Public Key 0x6f19e84ba4e0733b9e5f984aa5b6a63832d06215bb15749dd415e3bab2a0f3bf\n        Address Ed25519 0x5786019fde4a7b5568c2ee277c29df1aebaa6013c990e18f3eaea726a57a51d6\n        Address Bech32 rms1qptcvqvlme98k4tgcthzwlpfmudwh2nqz0yepcv086h2wf490fgavsmad30\n\nWallet Index m/44'/4218'/0'/1'/1'\n        Private Key 0x538cf517996ffe0eb7fab5d3c1bf712eec8806f8c342a893cadfe951669ab30d9db8b31f652b149fc8214cfcea775731be67908f41f95058ffb32263dccedaa2\n        Public Key 0x9db8b31f652b149fc8214cfcea775731be67908f41f95058ffb32263dccedaa2\n        Address Ed25519 0x0e25c5ed55c498e5a643e2262ae3838a1405c85f5912e902a095158da8d884b1\n        Address Bech32 rms1qq8zt30d2hzf3edxg03zv2hrsw9pgpwgtav396gz5z23trdgmzztzvwhn0t\n\nWallet Index m/44'/4218'/0'/0'/2'\n        Private Key 0x622468ba55412093993ee9625b9ffd031311f8c998fbcb63d4ff4b0409b00142db1dfaad2a9782b965f81d8a8b919e9cf73a68478077de5760ada7e0a2f0f42b\n        Public Key 0xdb1dfaad2a9782b965f81d8a8b919e9cf73a68478077de5760ada7e0a2f0f42b\n        Address Ed25519 0x539ad9bd4ab1ce54f4433b0f51d63d3fc0d1c8e5f39063c61ea56fc6d54dfd4c\n        Address Bech32 rms1qpfe4kdaf2cuu485gvas75wk85lup5wguheeqc7xr6jkl3k4fh75cylay9t\n\nWallet Index m/44'/4218'/0'/1'/2'\n        Private Key 0x580820e4a1c853831421dbf3f78084f2cade850179c0b97aa973c19981b519c21b95f800d65709cbda1dc20180d72c897439ae0e01a4ecccbb8f092cae4839b0\n        Public Key 0x1b95f800d65709cbda1dc20180d72c897439ae0e01a4ecccbb8f092cae4839b0\n        Address Ed25519 0xf97157ced9d74a3d5af98e4fcf9239ad520f019d9220acccfc76156da537a252\n        Address Bech32 rms1qruhz47wm8t55026lx8ylnuj8xk4yrcpnkfzptxvl3mp2md9x739y9sy9cq\n\n\nGenerated Addresses manually using Bip44 Format\n\nWallet Index m/44'/4218'/0'/0'/0'\n        Seed dad2a6b0760bf0dad66fb1fd0c7dafe6bc713ea64f44b32917c91407736fdcc0\n        Private Key 0xdad2a6b0760bf0dad66fb1fd0c7dafe6bc713ea64f44b32917c91407736fdcc0488e77cbb0075d58fecefaa1e4397148674ea54ae8fe189c8a62e99cd4a3ee24\n        Public Key 0x488e77cbb0075d58fecefaa1e4397148674ea54ae8fe189c8a62e99cd4a3ee24\n        Address Ed25519 0xe4c72f2db3de883e3366cb8dc7055ab5ea30d30e602ea4774dfc849bc6336cdd\n        Address Bech32 rms1qrjvwtedk00gs03nvm9cm3c9t2675vxnpeszafrhfh7gfx7xxdkd6j5t63e\n\nWallet Index m/44'/4218'/0'/1'/0'\n        Seed db3076273184f2a1c5385166cd22699dbc88f8c97e1b201b2ee505ae77e6b588\n        Private Key 0xdb3076273184f2a1c5385166cd22699dbc88f8c97e1b201b2ee505ae77e6b588ae0a85f5986547ec5137bc213c04777b6d708ae11d6fe338e9ec3970d70e2d3c\n        Public Key 0xae0a85f5986547ec5137bc213c04777b6d708ae11d6fe338e9ec3970d70e2d3c\n        Address Ed25519 0x10f48fb4680954d073bd6ec25534e64ea8b38d47e3d3c41bfe3436f845a361a4\n        Address Bech32 rms1qqg0fra5dqy4f5rnh4hvy4f5ue823vudgl3a83qmlc6rd7z95ds6gg84dug\n\nWallet Index m/44'/4218'/0'/0'/1'\n        Seed ca6befa2029677174e2de4afb3a54b5a44e186b9c3466d208d083bb5215587fd\n        Private Key 0xca6befa2029677174e2de4afb3a54b5a44e186b9c3466d208d083bb5215587fd6f19e84ba4e0733b9e5f984aa5b6a63832d06215bb15749dd415e3bab2a0f3bf\n        Public Key 0x6f19e84ba4e0733b9e5f984aa5b6a63832d06215bb15749dd415e3bab2a0f3bf\n        Address Ed25519 0x5786019fde4a7b5568c2ee277c29df1aebaa6013c990e18f3eaea726a57a51d6\n        Address Bech32 rms1qptcvqvlme98k4tgcthzwlpfmudwh2nqz0yepcv086h2wf490fgavsmad30\n\nWallet Index m/44'/4218'/0'/1'/1'\n        Seed 538cf517996ffe0eb7fab5d3c1bf712eec8806f8c342a893cadfe951669ab30d\n        Private Key 0x538cf517996ffe0eb7fab5d3c1bf712eec8806f8c342a893cadfe951669ab30d9db8b31f652b149fc8214cfcea775731be67908f41f95058ffb32263dccedaa2\n        Public Key 0x9db8b31f652b149fc8214cfcea775731be67908f41f95058ffb32263dccedaa2\n        Address Ed25519 0x0e25c5ed55c498e5a643e2262ae3838a1405c85f5912e902a095158da8d884b1\n        Address Bech32 rms1qq8zt30d2hzf3edxg03zv2hrsw9pgpwgtav396gz5z23trdgmzztzvwhn0t\n\nWallet Index m/44'/4218'/0'/0'/2'\n        Seed 622468ba55412093993ee9625b9ffd031311f8c998fbcb63d4ff4b0409b00142\n        Private Key 0x622468ba55412093993ee9625b9ffd031311f8c998fbcb63d4ff4b0409b00142db1dfaad2a9782b965f81d8a8b919e9cf73a68478077de5760ada7e0a2f0f42b\n        Public Key 0xdb1dfaad2a9782b965f81d8a8b919e9cf73a68478077de5760ada7e0a2f0f42b\n        Address Ed25519 0x539ad9bd4ab1ce54f4433b0f51d63d3fc0d1c8e5f39063c61ea56fc6d54dfd4c\n        Address Bech32 rms1qpfe4kdaf2cuu485gvas75wk85lup5wguheeqc7xr6jkl3k4fh75cylay9t\n\nWallet Index m/44'/4218'/0'/1'/2'\n        Seed 580820e4a1c853831421dbf3f78084f2cade850179c0b97aa973c19981b519c2\n        Private Key 0x580820e4a1c853831421dbf3f78084f2cade850179c0b97aa973c19981b519c21b95f800d65709cbda1dc20180d72c897439ae0e01a4ecccbb8f092cae4839b0\n        Public Key 0x1b95f800d65709cbda1dc20180d72c897439ae0e01a4ecccbb8f092cae4839b0\n        Address Ed25519 0xf97157ced9d74a3d5af98e4fcf9239ad520f019d9220acccfc76156da537a252\n        Address Bech32 rms1qruhz47wm8t55026lx8ylnuj8xk4yrcpnkfzptxvl3mp2md9x739y9sy9cq\n\nDone\n")))}l.isMDXComponent=!0}}]);