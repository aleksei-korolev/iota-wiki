"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39661],{53654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));var o=n(74434);const r={title:"Delete an IOTA Identity",sidebar_label:"Delete",description:"How to deactivate or destroy an IOTA Identity",image:"/img/Identity_icon.png",keywords:["Delete","Deactivate","Destroy"]},d=void 0,s={unversionedId:"concepts/decentralized_identifiers/delete",id:"concepts/decentralized_identifiers/delete",title:"Delete an IOTA Identity",description:"How to deactivate or destroy an IOTA Identity",source:"@site/shimmer/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/delete.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/delete",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/delete",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/shimmer/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/delete.mdx",tags:[],version:"current",frontMatter:{title:"Delete an IOTA Identity",sidebar_label:"Delete",description:"How to deactivate or destroy an IOTA Identity",image:"/img/Identity_icon.png",keywords:["Delete","Deactivate","Destroy"]},sidebar:"docs",previous:{title:"Resolve",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/resolve"},next:{title:"Overview",permalink:"/shimmer/identity.rs/concepts/verifiable_credentials/overview"}},l={},c=[{value:"Deactivate",id:"deactivate",level:2},{value:"Example",id:"example",level:3},{value:"Destroy",id:"destroy",level:2},{value:"Example",id:"example-1",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two approaches to delete an IOTA Identity, with different implications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deactivate"},"Deactivate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#destroy"},"Destroy"))),(0,i.kt)("h2",{id:"deactivate"},"Deactivate"),(0,i.kt)("p",null,"As detailed in the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/specs/did/iota_did_method_spec#deactivate"},"IOTA DID Method Specification"),", the state controller of an IOTA Identity may ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#did-document-metadata"},"deactivate")," it by publishing an update that either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deletes the contents of the DID Document entirely, leaving the state metadata empty, OR"),(0,i.kt)("li",{parentName:"ul"},"sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"deactivated")," field in the DID Document metadata to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("p",null,"In both cases, the DID Document will be marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivated")," when resolved."),(0,i.kt)("p",null,"This operation is reversible: the identity can subsequently be reactivated at any time, by publishing an update restoring the DID Document's contents, or unsetting the ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivated")," field in the metadata respectively, depending on how it was initially deactivated."),(0,i.kt)("p",null,"Note that the governor (if different from the state controller) cannot deactivate an identity directly because it is disallowed from updating the DID Document, but it may ",(0,i.kt)("a",{parentName:"p",href:"#destroy"},"destroy")," it."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example demonstrates deactivating and reactivating an IOTA DID Document, and optionally reclaiming the storage deposit."),(0,i.kt)(o.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, MnemonicSecretManager } from "@iota/client-wasm/node";\nimport { Bip39 } from "@iota/crypto.js";\nimport { IotaDocument, IotaIdentityClient } from "@iota/identity-wasm/node";\nimport { IAliasOutput, IRent, TransactionHelper } from "@iota/iota.js";\nimport { API_ENDPOINT, createDid } from "../util";\n\n/** Demonstrates how to deactivate a DID in an Alias Output. */\nexport async function deactivateIdentity() {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Creates a new wallet and identity (see "0_create_did" example).\n    let { document } = await createDid(client, secretManager);\n    const did = document.id();\n\n    // Resolve the latest state of the DID document, so we can reactivate it later.\n    // Technically this is equivalent to the document above.\n    document = await didClient.resolveDid(did);\n\n    // Deactivate the DID by publishing an empty document.\n    // This process can be reversed since the Alias Output is not destroyed.\n    // Deactivation may only be performed by the state controller of the Alias Output.\n    let deactivatedOutput: IAliasOutput = await didClient.deactivateDidOutput(did);\n\n    // Optional: reduce and reclaim the storage deposit, sending the tokens to the state controller.\n    const rentStructure: IRent = await didClient.getRentStructure();\n    deactivatedOutput.amount = TransactionHelper.getStorageDeposit(deactivatedOutput, rentStructure).toString();\n\n    // Publish the deactivated DID document.\n    await didClient.publishDidOutput(secretManager, deactivatedOutput);\n\n    // Resolving a deactivated DID returns an empty DID document\n    // with its `deactivated` metadata field set to `true`.\n    let deactivated: IotaDocument = await didClient.resolveDid(did);\n    console.log("Deactivated DID document:", JSON.stringify(deactivated, null, 2));\n    if (deactivated.metadataDeactivated() !== true) {\n        throw new Error("Failed to deactivate DID document");\n    }\n\n    // Re-activate the DID by publishing a valid DID document.\n    let reactivatedOutput: IAliasOutput = await didClient.updateDidOutput(document);\n\n    // Increase the storage deposit to the minimum again, if it was reclaimed during deactivation.\n    reactivatedOutput.amount = TransactionHelper.getStorageDeposit(reactivatedOutput, rentStructure).toString();\n    await didClient.publishDidOutput(secretManager, reactivatedOutput);\n\n    // Resolve the reactivated DID document.\n    let reactivated: IotaDocument = await didClient.resolveDid(did);\n    if (reactivated.metadataDeactivated() === true) {\n        throw new Error("Failed to reactivate DID document");\n    }\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::iota::block::address::Address;\nuse identity_iota::iota::IotaClientExt;\nuse identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::block::output::AliasOutputBuilder;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to deactivate a DID in an Alias Output.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Create a new DID in an Alias Output for us to modify.\n  let (_, document, _): (Address, IotaDocument, KeyPair) = create_did(&client, &mut secret_manager).await?;\n  let did: IotaDID = document.id().clone();\n\n  // Resolve the latest state of the DID document.\n  let document: IotaDocument = client.resolve_did(&did).await?;\n\n  // Deactivate the DID by publishing an empty document.\n  // This process can be reversed since the Alias Output is not destroyed.\n  // Deactivation may only be performed by the state controller of the Alias Output.\n  let deactivated_output: AliasOutput = client.deactivate_did_output(&did).await?;\n\n  // Optional: reduce and reclaim the storage deposit, sending the tokens to the state controller.\n  let rent_structure = client.get_rent_structure().await?;\n  let deactivated_output = AliasOutputBuilder::from(&deactivated_output)\n    .with_minimum_storage_deposit(rent_structure)\n    .finish(client.get_token_supply().await?)?;\n\n  // Publish the deactivated DID document.\n  let _ = client.publish_did_output(&secret_manager, deactivated_output).await?;\n\n  // Resolving a deactivated DID returns an empty DID document\n  // with its `deactivated` metadata field set to `true`.\n  let deactivated: IotaDocument = client.resolve_did(&did).await?;\n  println!("Deactivated DID document: {:#}", deactivated);\n  assert_eq!(deactivated.metadata.deactivated, Some(true));\n\n  // Re-activate the DID by publishing a valid DID document.\n  let reactivated_output: AliasOutput = client.update_did_output(document.clone()).await?;\n\n  // Increase the storage deposit to the minimum again, if it was reclaimed during deactivation.\n  let rent_structure = client.get_rent_structure().await?;\n  let reactivated_output = AliasOutputBuilder::from(&reactivated_output)\n    .with_minimum_storage_deposit(rent_structure)\n    .finish(client.get_token_supply().await?)?;\n  client.publish_did_output(&secret_manager, reactivated_output).await?;\n\n  // Resolve the reactivated DID document.\n  let reactivated: IotaDocument = client.resolve_did(&did).await?;\n  assert_eq!(document, reactivated);\n  assert!(!reactivated.metadata.deactivated.unwrap_or_default());\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/0_basic/3_deactivate_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/0_basic/3_deactivate_did.rs",mdxType:"CodeSnippet"}),(0,i.kt)("h2",{id:"destroy"},"Destroy"),(0,i.kt)("p",null,"Alternatively, an IOTA Identity can be permanently ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/specs/did/iota_did_method_spec#destroy"},"destroyed"),"."),(0,i.kt)("p",null,"This is achieved by the governor of a DID publishing a transaction consuming the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/specs/did/iota_did_method_spec#alias-output"},"Alias Output")," containing the IOTA DID Document, without a corresponding Alias Output on the output side."),(0,i.kt)("p",null,"Any coins and tokens in the Alias Output are reclaimed and can be sent to another address."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Destroying an IOTA Identity is permanent and irreversible.")),(0,i.kt)("p",null,"Note that historical versions may still be stored off-ledger or on a permanode, so sensitive or Personal Identifiable Information (PII) should NEVER be stored in a DID Document. Even with a previous version available, a destroyed DID can never be restored."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"The following example demonstrates a governor destroying an IOTA Identity and sending the storage deposit back to itself."),(0,i.kt)(o.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, MnemonicSecretManager } from "@iota/client-wasm/node";\nimport { Bip39 } from "@iota/crypto.js";\nimport { IotaIdentityClient } from "@iota/identity-wasm/node";\nimport { API_ENDPOINT, createDid } from "../util";\n\n/** Demonstrates how to delete a DID in an Alias Output, reclaiming the storage deposit. */\nexport async function deleteIdentity() {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Creates a new wallet and identity (see "0_create_did" example).\n    const { address, document } = await createDid(client, secretManager);\n    const did = document.id();\n\n    // Deletes the Alias Output and its contained DID Document, rendering the DID permanently destroyed.\n    // This operation is *not* reversible.\n    // Deletion can only be done by the governor of the Alias Output.\n    const destinationAddress = address;\n    await didClient.deleteDidOutput(secretManager, destinationAddress, did);\n\n    // Attempting to resolve a deleted DID results in a `NotFound` error.\n    let deleted = false;\n    try {\n        await didClient.resolveDid(did);\n    } catch (err) {\n        deleted = true;\n    }\n    if (!deleted) {\n        throw new Error("failed to delete DID");\n    }\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::iota::Error;\nuse identity_iota::iota::IotaClientExt;\n\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse iota_client::block::address::Address;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to delete a DID in an Alias Output, reclaiming the storage deposit.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Create a new DID in an Alias Output for us to modify.\n  let (address, document, _): (Address, IotaDocument, KeyPair) = create_did(&client, &mut secret_manager).await?;\n  let did = document.id().clone();\n\n  // Deletes the Alias Output and its contained DID Document, rendering the DID permanently destroyed.\n  // This operation is *not* reversible.\n  // Deletion can only be done by the governor of the Alias Output.\n  client.delete_did_output(&secret_manager, address, &did).await?;\n\n  // Attempting to resolve a deleted DID results in a `NotFound` error.\n  let error: Error = client.resolve_did(&did).await.unwrap_err();\n  assert!(matches!(\n    error,\n    identity_iota::iota::Error::DIDResolutionError(iota_client::Error::NotFound(..))\n  ));\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/0_basic/4_delete_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/0_basic/4_delete_did.rs",mdxType:"CodeSnippet"}))}m.isMDXComponent=!0},74434:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(86010),i=n(67294),o=n(69319);function r(e){let{nodeReplitLink:t,nodeContent:n,rustContent:r,nodeGithubLink:d,rustGithubLink:s}=e;const[l,c]=i.useState("node"),u=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),a=e||"node";"node"!==a||t||n||(a="rust"),"rust"!==a||r||(a="node"),c(a)})),i.createElement("div",null,i.createElement("div",{className:(0,a.Z)("langSelector")},r&&i.createElement("button",{className:(0,a.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&i.createElement("button",{className:(0,a.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),i.createElement("div",{className:(0,a.Z)("codeSnippetContainer")},"node"===l&&t?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===l&&n?i.createElement("div",{className:(0,a.Z)("nodeContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"typescript"},n)):i.createElement("div",{className:(0,a.Z)("rustContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"rust"},r))),i.createElement("div",{className:(0,a.Z)("githubLink")},d&&"node"===l&&i.createElement("a",{href:d,target:"_blank"},"GitHub\xa0",u),s&&"rust"===l&&i.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}}}]);