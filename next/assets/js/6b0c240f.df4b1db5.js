"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56155],{75418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));var o=a(73756),d=a(34259),r=a(18679);a(69319);const s={title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},c=void 0,l={unversionedId:"concepts/decentralized_identifiers/update",id:"concepts/decentralized_identifiers/update",title:"Update DID Documents",description:"How DID Documents can be manipulated and how updates should be published",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/update.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/update",permalink:"/next/identity.rs/concepts/decentralized_identifiers/update",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/update.mdx",tags:[],version:"current",frontMatter:{title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},sidebar:"docs",previous:{title:"Create and Publish",permalink:"/next/identity.rs/concepts/decentralized_identifiers/create"},next:{title:"Resolve",permalink:"/next/identity.rs/concepts/decentralized_identifiers/resolve"}},u={},p=[{value:"Verification Methods",id:"verification-methods",level:3},{value:"Verification Relationships",id:"verification-relationships",level:3},{value:"Services",id:"services",level:3},{value:"Example",id:"example",level:2},{value:"Creating Identity",id:"creating-identity",level:3},{value:"Adding Verification Method",id:"adding-verification-method",level:3},{value:"Adding Verification Relationships",id:"adding-verification-relationships",level:3},{value:"Adding a Service",id:"adding-a-service",level:3},{value:"Removing Verification Method",id:"removing-verification-method",level:3},{value:"Publishing",id:"publishing",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DID Documents can be extended by adding ",(0,i.kt)("a",{parentName:"p",href:"#verification-methods"},"verification methods"),", ",(0,i.kt)("a",{parentName:"p",href:"#services"},"services")," and custom properties.\nA verification method adds public keys, which can be used to digitally sign things like a DID message or a verifiable credential, while a service can provide metadata around the identity via URIs."),(0,i.kt)("h3",{id:"verification-methods"},"Verification Methods"),(0,i.kt)("p",null,"As demonstrated by the ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example")," below, the IOTA Identity framework offers easy-to-use methods for adding ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-methods"},"verification methods"),"."),(0,i.kt)("p",null,"The following properties can be specified for a verification method:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": a ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for the verification method. It can be specified by setting the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),": specifies the type of the verification method. The framework supports ",(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"X25519")," key types. This property is automatically filled by the framework when specifying the verification material."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"publicKeyMultibase"),": multibase encoded public key which concludes the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#verification-material"},"verification material"),". This can be automatically generated by the framework or manually provided by users.")),(0,i.kt)("h3",{id:"verification-relationships"},"Verification Relationships"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-relationships"},"Verification relationships")," express the relationship between the DID subject and the verification method. It can be used to specify the\nthe purpose of the verification method."),(0,i.kt)("p",null,"The following relationships are supported by the Identity Framework:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#authentication"},"Authentication")),": used to specify authentication methods for the DID subject."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Assertion")),": can be used for verifiable credential verification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Key Agreement")),": used for establishing secure communication channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-invocation"},"Capability Invocation")),": can be used to authorize updates to the DID Document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-delegation"},"Capability Delegation")),": a mechanism to delegate cryptographic capability to another party.")),(0,i.kt)("p",null,"Verification methods can be either ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#referring-to-verification-methods"},"embedded or referenced"),". Referencing verification\nmethods allow them to be used by more than one verification relationship.\nUpon creating a verification method using the identity framework, specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"MethodScope")," option will result in an embedded verification method. Leaving that option unset will create the verification method as\na map entry of the ",(0,i.kt)("inlineCode",{parentName:"p"},"verificationMethod")," property. Verification relationships can be added afterwards using references."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Updates to the DID Document are done through a state transition of the ",(0,i.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#alias-output"},"Alias Output")," by its state controller. The public key or address of the state controller does not need to be a verification method in the DID Document, since it is defined in the containing Alias Output.")),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"Services")," allow adding other ways of communicating with the DID subject. An endpoint included in the DID Document can offer a way of reaching services for different purposes\nlike authentication, communicating, and discovery."),(0,i.kt)("p",null,"The following properties can be specified for a service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": a ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for referencing the service in the DID document.\nIt can be specified by setting the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),": a string used to maximize interoperability between services. The framework does not perform any checks on the content of this string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"serviceEndpoint"),": a URL that points to the service endpoint.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example demonstrates managing verification methods and services in a DID Document."),(0,i.kt)(o.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Bip39 } from "@iota/crypto.js";\nimport {\n    IotaDocument,\n    IotaIdentityClient,\n    IotaService,\n    IotaVerificationMethod,\n    KeyPair,\n    KeyType,\n    MethodRelationship,\n    MethodScope,\n    Timestamp,\n} from "@iota/identity-wasm/node";\nimport { Client, MnemonicSecretManager } from "@iota/iota-client-wasm/node";\nimport { IAliasOutput, IRent, TransactionHelper } from "@iota/iota.js";\nimport { API_ENDPOINT, createDid } from "../util";\n\n/** Demonstrates how to update a DID document in an existing Alias Output. */\nexport async function updateIdentity() {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Creates a new wallet and identity (see "0_create_did" example).\n    let { document } = await createDid(client, secretManager);\n    const did = document.id();\n\n    // Resolve the latest state of the document.\n    // Technically this is equivalent to the document above.\n    document = await didClient.resolveDid(did);\n\n    // Insert a new Ed25519 verification method in the DID document.\n    let keypair = new KeyPair(KeyType.Ed25519);\n    let method = new IotaVerificationMethod(document.id(), keypair.type(), keypair.public(), "#key-2");\n    document.insertMethod(method, MethodScope.VerificationMethod());\n\n    // Attach a new method relationship to the inserted method.\n    document.attachMethodRelationship(did.join("#key-2"), MethodRelationship.Authentication);\n\n    // Add a new Service.\n    const service: IotaService = new IotaService({\n        id: did.join("#linked-domain"),\n        type: "LinkedDomains",\n        serviceEndpoint: "https://iota.org/",\n    });\n    document.insertService(service);\n    document.setMetadataUpdated(Timestamp.nowUTC());\n\n    // Remove a verification method.\n    let originalMethod = document.resolveMethod("key-1") as IotaVerificationMethod;\n    document.removeMethod(originalMethod?.id());\n\n    // Resolve the latest output and update it with the given document.\n    const aliasOutput: IAliasOutput = await didClient.updateDidOutput(document);\n\n    // Because the size of the DID document increased, we have to increase the allocated storage deposit.\n    // This increases the deposit amount to the new minimum.\n    const rentStructure: IRent = await didClient.getRentStructure();\n    aliasOutput.amount = TransactionHelper.getStorageDeposit(aliasOutput, rentStructure).toString();\n\n    // Publish the output.\n    const updated: IotaDocument = await didClient.publishDidOutput(secretManager, aliasOutput);\n    console.log("Updated DID document:", JSON.stringify(updated, null, 2));\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::core::json;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::Timestamp;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::crypto::KeyType;\nuse identity_iota::did::DIDUrl;\nuse identity_iota::did::Document;\nuse identity_iota::did::MethodRelationship;\nuse identity_iota::did::MethodScope;\nuse identity_iota::did::Service;\nuse identity_iota::did::DID;\nuse identity_iota::iota::block::address::Address;\nuse identity_iota::iota::block::output::RentStructure;\nuse identity_iota::iota::IotaClientExt;\nuse identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse identity_iota::iota::IotaService;\nuse identity_iota::iota::IotaVerificationMethod;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::block::output::AliasOutputBuilder;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to update a DID document in an existing Alias Output.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Create a new DID in an Alias Output for us to modify.\n  let (_, document, _): (Address, IotaDocument, KeyPair) = create_did(&client, &mut secret_manager).await?;\n  let did: IotaDID = document.id().clone();\n\n  // Resolve the latest state of the document.\n  let mut document: IotaDocument = client.resolve_did(&did).await?;\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::new(document.id().clone(), keypair.type_(), keypair.public(), "#key-2")?;\n  document.insert_method(method, MethodScope::VerificationMethod)?;\n\n  // Attach a new method relationship to the inserted method.\n  document.attach_method_relationship(\n    &document.id().to_url().join("#key-2")?,\n    MethodRelationship::Authentication,\n  )?;\n\n  // Add a new Service.\n  let service: IotaService = Service::from_json_value(json!({\n    "id": document.id().to_url().join("#linked-domain")?,\n    "type": "LinkedDomains",\n    "serviceEndpoint": "https://iota.org/"\n  }))?;\n  assert!(document.insert_service(service).is_ok());\n  document.metadata.updated = Some(Timestamp::now_utc());\n\n  // Remove a verification method.\n  let original_method: DIDUrl<IotaDID> = document.resolve_method("key-1", None).unwrap().id().clone();\n  document.remove_method(&original_method).unwrap();\n\n  // Resolve the latest output and update it with the given document.\n  let alias_output: AliasOutput = client.update_did_output(document.clone()).await?;\n\n  // Because the size of the DID document increased, we have to increase the allocated storage deposit.\n  // This increases the deposit amount to the new minimum.\n  let rent_structure: RentStructure = client.get_rent_structure().await?;\n  let alias_output: AliasOutput = AliasOutputBuilder::from(&alias_output)\n    .with_minimum_storage_deposit(rent_structure)\n    .finish(client.get_token_supply().await?)?;\n\n  // Publish the updated Alias Output.\n  let updated: IotaDocument = client.publish_did_output(&secret_manager, alias_output).await?;\n  println!("Updated DID document: {:#}", updated);\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/0_basic/1_update_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/0_basic/1_update_did.rs",mdxType:"CodeSnippet"}),(0,i.kt)("h3",{id:"creating-identity"},"Creating Identity"),(0,i.kt)("p",null,"The example above starts by ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/concepts/decentralized_identifiers/create"},"creating an identity"),"."),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Create a new client to interact with the IOTA ledger.\nlet client: Client = Client::builder().with_primary_node(NETWORK_ENDPOINT, None)?.finish()?;\n\n// Create a new secret manager backed by a Stronghold.\nlet mut secret_manager: SecretManager = SecretManager::Stronghold(\nStrongholdSecretManager::builder()\n  .password("secure_password")\n  .build(random_stronghold_path())?,\n);\n\n// Create a new DID in an Alias Output for us to modify.\nlet (_, did): (Address, StardustDID) = create_did(&client, &mut secret_manager).await?;\n\n'))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {didClient, secretManager, did} = await createIdentity();\n")))),(0,i.kt)("p",null,"This creates and publishes an Alias Output containing a DID Document with one verification method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n    "verificationMethod": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-1",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "z94fP8Vo6qJtejpycjUcYtiSTbLGuCNYUTrjQX9hT2gSv"\n      }\n    ]\n  },\n  "meta": {\n    "created": "2022-09-12T21:58:06Z",\n    "updated": "2022-09-12T21:58:06Z"\n  }\n}\n')),(0,i.kt)("h3",{id:"adding-verification-method"},"Adding Verification Method"),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'  // Insert a new Ed25519 verification method in the DID document.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::new(document.id().clone(), keypair.type_(), keypair.public(), "#key-2")?;\n  document.insert_method(method, MethodScope::VerificationMethod)?;\n'))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Insert a new Ed25519 verification method in the DID document.\nlet keypair = new KeyPair(KeyType.Ed25519);\nlet method = new IotaVerificationMethod(document.id(), keypair.type(), keypair.public(), "#key-2");\ndocument.insertMethod(method, MethodScope.VerificationMethod());\n')))),(0,i.kt)("p",null,"This creates a new verification method that includes a newly generated Ed25519 public key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n    "verificationMethod": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-1",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "z94fP8Vo6qJtejpycjUcYtiSTbLGuCNYUTrjQX9hT2gSv"\n      },\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "zHiCj7kbZdWznNvBhqxXwgoEChYseKrArLFdi5kPKAVRq"\n      }\n    ]\n  },\n  "meta": {\n    "created": "2022-09-12T21:58:06Z",\n    "updated": "2022-09-12T21:58:06Z"\n  }\n}\n')),(0,i.kt)("p",null,"Notice that these changes to the document are not published yet. This will be done in a later stage."),(0,i.kt)("h3",{id:"adding-verification-relationships"},"Adding Verification Relationships"),(0,i.kt)("p",null,"Verification relationship can be attached to a verification method by referencing its fragment."),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Attach a new method relationship to the existing method.\ndocument.attach_method_relationship(\n    &document.id().to_url().join("#key-1")?,\n    MethodRelationship::Authentication,\n)?;\n'))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Attach a new method relationship to the existing method.\ndocument.attachMethodRelationship(did.join("#key-1"), MethodRelationship.Authentication);\n')))),(0,i.kt)("p",null,"This will add ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")," relationship to the verification method with the fragment ",(0,i.kt)("inlineCode",{parentName:"p"},"key-1"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")," references the already included verification method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n    "verificationMethod": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-1",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "z94fP8Vo6qJtejpycjUcYtiSTbLGuCNYUTrjQX9hT2gSv"\n      },\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "zHiCj7kbZdWznNvBhqxXwgoEChYseKrArLFdi5kPKAVRq"\n      }\n    ],\n    "authentication": ["did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2"]\n  },\n  "meta": {\n    "created": "2022-09-12T21:58:06Z",\n    "updated": "2022-09-12T21:58:06Z"\n  }\n}\n')),(0,i.kt)("h3",{id:"adding-a-service"},"Adding a Service"),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Add a new Service.\nlet service: StardustService = Service::from_json_value(json!({\n    "id": document.id().to_url().join("#linked-domain")?,\n    "type": "LinkedDomains",\n    "serviceEndpoint": "https://iota.org/"\n}))?;\nassert!(document.insert_service(service));\ndocument.metadata.updated = Some(Timestamp::now_utc());\n'))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Add a new Service.\nconst service: StardustService = new StardustService({\n  id: did.join("#linked-domain"),\n  type: "LinkedDomains",\n  serviceEndpoint: "https://iota.org/"\n});\ndocument.insertService(service);\ndocument.setMetadataUpdated(Timestamp.nowUTC());\n')))),(0,i.kt)("p",null,"Additionally, custom properties can be added to a service by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," in both Rust and JavaScript."),(0,i.kt)("p",null,"The updated Document with the newly created service looks as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n    "verificationMethod": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-1",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "z94fP8Vo6qJtejpycjUcYtiSTbLGuCNYUTrjQX9hT2gSv"\n      },\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "zHiCj7kbZdWznNvBhqxXwgoEChYseKrArLFdi5kPKAVRq"\n      }\n    ],\n    "authentication": ["did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2"],\n    "service": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#linked-domain",\n        "type": "LinkedDomains",\n        "serviceEndpoint": "https://iota.org/"\n      }\n    ]\n  },\n  "meta": {\n    "created": "2022-09-12T21:58:06Z",\n    "updated": "2022-09-12T21:58:19Z"\n  }\n}\n')),(0,i.kt)("h3",{id:"removing-verification-method"},"Removing Verification Method"),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Remove a verification method.\nlet original_method: DIDUrl<IotaDID> = document.resolve_method("key-1", None).unwrap().id().clone();\ndocument.remove_method(&original_method).unwrap();\n'))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Remove a verification method.\nlet originalMethod = document.resolveMethod("key-1") as IotaVerificationMethod;\ndocument.removeMethod(originalMethod?.id());\n')))),(0,i.kt)("p",null,"This removes the original verification method with the fragment ",(0,i.kt)("inlineCode",{parentName:"p"},"key-1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n    "verificationMethod": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2",\n        "controller": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "zHiCj7kbZdWznNvBhqxXwgoEChYseKrArLFdi5kPKAVRq"\n      }\n    ],\n    "authentication": ["did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#key-2"],\n    "service": [\n      {\n        "id": "did:iota:rms:0x6fdcc441ab461aaee2ec1837ea5068fe2bc643a9ac0729a055ef5df42a762483#linked-domain",\n        "type": "LinkedDomains",\n        "serviceEndpoint": "https://iota.org/"\n      }\n    ]\n  },\n  "meta": {\n    "created": "2022-09-12T21:58:06Z",\n    "updated": "2022-09-12T21:58:19Z"\n  }\n}\n')),(0,i.kt)("h3",{id:"publishing"},"Publishing"),(0,i.kt)("p",null,"Publish the updated DID Document inside the Alias Output taking into account the increase in the storage deposit needed."),(0,i.kt)(d.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Resolve the latest output and update it with the given document.\nlet alias_output: AliasOutput = client.update_did_output(document.clone()).await?;\n\n// Because the size of the DID document increased, we have to increase the allocated storage deposit.\n// This increases the deposit amount to the new minimum.\nlet rent_structure: RentStructure = client.get_rent_structure().await?;\nlet alias_output: AliasOutput = AliasOutputBuilder::from(&alias_output)\n  .with_minimum_storage_deposit(rent_structure)\n  .finish()?;\n\n// Publish the updated Alias Output.\nlet updated: StardustDocument = client.publish_did_output(&secret_manager, alias_output).await?;\n"))),(0,i.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Resolve the latest output and update it with the given document.\nconst aliasOutput: IAliasOutput = await didClient.updateDidOutput(document);\n\n// Because the size of the DID document increased, we have to increase the allocated storage deposit.\n// This increases the deposit amount to the new minimum.\nconst rentStructure: IRent = await didClient.getRentStructure();\naliasOutput.amount = TransactionHelper.getStorageDeposit(aliasOutput, rentStructure).toString();\n\n// Publish the output.\nconst updated: StardustDocument = await didClient.publishDidOutput(secretManager, aliasOutput);\n")))))}h.isMDXComponent=!0},73756:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(86010),i=a(67294),o=a(69319);function d(e){let{nodeReplitLink:t,nodeContent:a,rustContent:d,nodeGithubLink:r,rustGithubLink:s}=e;const[c,l]=i.useState("node"),u=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),n=e||"node";"node"!==n||t||a||(n="rust"),"rust"!==n||d||(n="node"),l(n)})),i.createElement("div",null,i.createElement("div",{className:(0,n.Z)("langSelector")},d&&i.createElement("button",{className:(0,n.Z)("button","languageButton",{activeButton:"rust"==c,inactiveButton:"rust"!==c}),onClick:()=>{localStorage.setItem("lang","rust"),l("rust")}},"Rust"),(t||a)&&i.createElement("button",{className:(0,n.Z)("button","languageButton","mr-sm",{activeButton:"node"===c,inactiveButton:"node"!==c}),onClick:()=>{localStorage.setItem("lang","node"),l("node")}},"Node.js")),i.createElement("div",{className:(0,n.Z)("codeSnippetContainer")},"node"===c&&t?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===c&&a?i.createElement("div",{className:(0,n.Z)("nodeContainer")},i.createElement(o.Z,{className:(0,n.Z)("noMarginBottom"),language:"typescript"},a)):i.createElement("div",{className:(0,n.Z)("rustContainer")},i.createElement(o.Z,{className:(0,n.Z)("noMarginBottom"),language:"rust"},d))),i.createElement("div",{className:(0,n.Z)("githubLink")},r&&"node"===c&&i.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",u),s&&"rust"===c&&i.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}},18679:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),i=a(86010);const o="tabItem_Ymn6";function d(e){let{children:t,hidden:a,className:d}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,d),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),o=a(86010),d=a(51048),r=a(33609),s=a(1943),c=a(72957);const l="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:a,block:d,defaultValue:p,values:m,groupId:h,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[_,D]=(0,i.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==_&&b.some((t=>t.value===e))&&D(e)}const T=e=>{const t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==_&&(N(t),D(n),null!=h&&w(h,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",l)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:t,label:a,attributes:d}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>I.push(e),onKeyDown:x,onFocus:T,onClick:T},d,{className:(0,o.Z)("tabs__item",u,null==d?void 0:d.className,{"tabs__item--active":_===t})}),a??t)}))),a?(0,i.cloneElement)(g.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,d.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);