"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2897],{29163:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}c.isMDXComponent=!0},73479:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}c.isMDXComponent=!0},2343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>S,contentTitle:()=>C,default:()=>O,frontMatter:()=>I,metadata:()=>A,toc:()=>D});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),c=t(18679),d=t(69319);const i={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will send native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Get a tokenId from your account balance after running example\n        // 22-mint-native-tokens.js\n        let tokenId =\n            '0x087ec7c0a543e60cfc92850ed053d3b323c0d7181e63b24c6ef24dd591814006950100000000';\n        // `100` hex encoded\n        let tokenAmount = \"0x64\"\n\n        // Send native tokens with a storage deposit return and an expiraiton of one day\n        // This means that the receiver has to claim the output in time (can be done with 21-claim-outputs.js),\n        // where the storage deposit of the output is returned, or if not, the sender gets full control back after one day passed.\n        const response = await account.sendNativeTokens([\n            {\n                //TODO: Replace with the address of your choice!\n                address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n                nativeTokens: [[tokenId, tokenAmount]],\n            }\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 24-send-native-tokens.js"))}r.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xaf866f45f6418098b2bb3b8359f39ca55ecb57c666c65c40c4f982af365f37d6',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x1630e8423fe5eb11f7c6ad9afcb2198ac731fb2b10efa7e903f30fd79ddd5c14',\n  inclusionState: 'Pending',\n  timestamp: '1662659637387',\n  transactionId: '0xd4a81db105132dfa0c51a29eaecff1d796bf66d4be91be15a9864c88ee8f2c67',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x1630e8423fe5eb11f7c6ad9afcb2198ac731fb2b10efa7e903f30fd79ddd5c14\n")))}u.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_wallet import IotaWallet\n\n# In this example we will send native tokens\n\nwallet = IotaWallet(\'./alice-database\')\n\naccount = wallet.get_account(\'Alice\')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f\'Synced: {response}\')\n\nwallet.set_stronghold_password("some_hopefully_secure_password")\n\noutputs = [{\n    "address": "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu",\n    "nativeTokens": [(\n        "0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000",\n        # 10 hex encoded\n        "0xA"\n    )],\n}];\n\ntransaction = account.send_native_tokens(outputs, None)\n\nprint(f\'Sent transaction: {transaction}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 5-send-native-tokens.py"))}m.isMDXComponent=!0;const f={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced:{\n    'baseCoin':{\n        'total':'3302230302',\n        'available':'3302230302'\n    },\n    'requiredStorageDeposit':'910252700',\n    'nativeTokens':[\n        {\n            'tokenId':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n            'total':'0x3e8',\n            'available':'0x3e8'\n        },\n        {\n            'tokenId':'0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n            'total':'0x64',\n            'available':'0x64'\n        }\n    ],\n    'nfts':[\n        '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n        '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c',\n        '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n        '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n        '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n        '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n        '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f'\n    ],\n    'aliases':[\n        '0x97eb7a447cd62e1c373ff8188ba422f5c1b0687707d38e10e8366a1c20d33fea',\n        '0xf9c702ffe50c35d331b2df02295c2cc6d92f883530ff231bd76d1f6a72cb1d95',\n        '0xa5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d',\n        '0x96717e6d19c13b1c5b120d60b23217f541b5b779e51212e01d72e7fa1f7090cf'\n    ],\n    'foundries':[\n        '0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000'\n    ],\n    'potentiallyLockedOutputs':{\n        '0x850c1e43dff1a28a42d71edc6d4ad0b9f251c03993f9b0684a34f645514ffe270000':False\n    }\n}\nSent transaction:{\n    'payload':{\n        'type':6,\n        'essence':{\n            'type':1,\n            'networkId':'8342982141227064571',\n            'inputs':[\n                {\n                    'type':0,\n                    'transactionId':'0x9d1e61384fc78777c8db475a3d6eaec6465c136dc3ce586ee46a9453aa3dfdc4',\n                    'transactionOutputIndex':2\n                },\n                {\n                    'type':0,\n                    'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                    'transactionOutputIndex':32\n                }\n            ],\n            'inputsCommitment':'0xff484e025ea72e4ae90d556b645c01f8f763235caac2d128359f1a6410a65c86',\n            'outputs':[\n                {\n                    'type':3,\n                    'amount':'57600',\n                    'nativeTokens':[\n                        {\n                            'id':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n                            'amount':'0xa'\n                        }\n                    ],\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0x60200bad8137a704216e84f8f9acfe65b972d9f4155becb4815282b03cef99fe'\n                            }\n                        },\n                        {\n                            'type':1,\n                            'returnAddress':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            },\n                            'amount':'57600'\n                        },\n                        {\n                            'type':3,\n                            'returnAddress':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            },\n                            'unixTime':1666004529\n                        }\n                    ]\n                },\n                {\n                    'type':3,\n                    'amount':'91600',\n                    'nativeTokens':[\n                        {\n                            'id':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n                            'amount':'0x3de'\n                        }\n                    ],\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            }\n                        }\n                    ]\n                }\n            ]\n        },\n        'unlocks':[\n            {\n                'type':0,\n                'signature':{\n                    'type':0,\n                    'publicKey':'0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n                    'signature':'0x1c90f0d05b6b3902ebc1e8ad489432bdc16e0810179671ad091c5d93b920dc4151eb38f13a4a9b3018d2132e8ca3e8a79788478f5d5b6826b262ca0c3658eb09'\n                }\n            },\n            {\n                'type':1,\n                'reference':0\n            }\n        ]\n    },\n    'blockId':'0xabddf4905e86ed11ea2ab2784fdf5a79a1176ef2f353dc0f2db80537d17d59b0',\n    'inclusionState':'Pending',\n    'timestamp':'1665918129925',\n    'transactionId':'0x9a5869b61b29f17326e04b6161d9cd169687e79476c556bd0c3cbbc3648d4ff6',\n    'networkId':'8342982141227064571',\n    'incoming':False,\n    'note':None\n}\n")))}b.isMDXComponent=!0;const k={toc:[]};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0x8f83b8c88e396be189d8456a462f67c9806d3acb773fb027bce9027485f6b74d",\n          "transactionOutputIndex":1\n        }\n      ],\n      "inputsCommitment":"0x45643c2e9481d7d8645881f976280e414239691fe562ad56823867c4dd25d5d6",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"57600",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n              "amount":"0x17"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":1,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "amount":"57600"\n            },\n            {\n              "type":3,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "unixTime":1664884308\n            }\n          ]\n        },\n        {\n          "type":3,\n          "amount":"2096368900",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0400000000",\n              "amount":"0x17"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0x136ebfea089a7cfd3b5fdae595a53acb54b19a2483eb3dcf76b852169a2d4e16d4331e1c95f6654488150beacbd7bef033be605207139b33c385822fd09a2a03"\n        }\n      }\n    ]\n  },\n  "blockId":"0x5227e054723e38dcc86df357cfd1b4715fd622fb7a2a3702931295a4b432bc46",\n  "inclusionState":"Pending",\n  "timestamp":"1664884309679",\n  "transactionId":"0x68454a9dbf31790aa072910a1caa0d3b32cc9ab89c476219a7d184a6dffbcc5c",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}h.isMDXComponent=!0;const v={toc:[]};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SendNativeTokens;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.TokenId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class SendNativeToken {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        String receiverAddress = a.getPublicAddresses()[0].getAddress();\n        TokenId tokenId = new TokenId("0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000");\n        String tokenAmount = "0x17"; // `100` hex encoded\n\n        // Send transaction.\n        Transaction t = a.sendNativeTokens(new SendNativeTokens().withAddressesNativeTokens(new AddressNativeTokens[]{ new AddressNativeTokens()\n                .withAddress(receiverAddress)\n                .withNativeTokens(new AddressNativeTokens.NativeTokenTuple[] {\n                        new AddressNativeTokens.NativeTokenTuple(tokenId, tokenAmount)\n                })\n        }));\n\n        // Print transaction.\n        System.out.println(t);\n    }\n\n}'))}y.isMDXComponent=!0;var x=t(73479);const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(x.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(d.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_native_tokens --release\n// In this example we will send native tokens\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::block::{\n        address::Address,\n        output::{unlock_condition::AddressUnlockCondition, BasicOutputBuilder, NativeToken, TokenId, UnlockCondition},\n    },\n    AddressNativeTokens, Result,\n};\nuse primitive_types::U256;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let bech32_address = "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string();\n    // Replace with a TokenId that is available in the account\n    let token_id = TokenId::from_str("0x08847bd287c912fadedb6bf38900bda9f2d377b75b2a0bece8738699f56ebca4130100000000")?;\n\n    let outputs = vec![AddressNativeTokens {\n        address: bech32_address.clone(),\n        native_tokens: vec![(token_id, U256::from(10))],\n        ..Default::default()\n    }];\n\n    let transaction = account.send_native_tokens(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    // Send native tokens together with the required storage deposit\n    let rent_structure = account.client().get_rent_structure().await?;\n\n    let outputs = vec![\n        BasicOutputBuilder::new_with_minimum_storage_deposit(rent_structure)?\n            .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(\n                Address::try_from_bech32(bech32_address)?.1,\n            )))\n            .with_native_tokens(vec![NativeToken::new(token_id, U256::from(10))?])\n            .finish_output(account.client().get_token_supply().await?)?,\n    ];\n\n    let transaction = account.send(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_native_tokens --release"))}g.isMDXComponent=!0;const _={toc:[]};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x649987dd056ac5ad87adb5dbfa2648262856f2dfcd0ac7039e520fc6ccbc2b1f \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x1e2126e848f10cf2c77d122f3bd003454267c1f46c20f4a3458b74f5639ce818\n")))}T.isMDXComponent=!0;var N=t(29163);const I={title:"Send Native Tokens",sidebar_label:"Send",description:"How to send native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","send native token","send","native token","nodejs","python","java","rust"]},C=void 0,A={unversionedId:"how_tos/native_tokens/send_native_token",id:"how_tos/native_tokens/send_native_token",title:"Send Native Tokens",description:"How to send native tokens using wallet.rs.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/02_send_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/send_native_token",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/send_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/02_send_native_token.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send Native Tokens",sidebar_label:"Send",description:"How to send native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","send native token","send","native token","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Mint",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},next:{title:"Melt",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/melt_native_token"}},S={},D=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:D};function O(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you have ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},"minted")," a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/tokenization#native-tokens"},"native tokens"),",\nyou can easily send it by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send_native_tokens(addresses_native_tokens, options)")," function."),(0,o.kt)("p",null,"As with any output, you can set a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/storage_deposit"},"storage deposit")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions"},"output unlock conditions"),".\nKeep in mind that if you set unlock conditions, whoever you send the native tokens to may need to\n",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/claim_outputs"},"claim them"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(N.ZP,{mdxType:"ReplaceNativeTokenId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Define the type of native token and amount to send."),(0,o.kt)("li",{parentName:"ol"},"Send the native tokens calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_native_tokens(addresses_native_tokens, options)")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function c(e){let{children:n,hidden:t,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,c),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),s=t(86010),c=t(51048),d=t(33609),i=t(1943),r=t(72957);const l="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:c,defaultValue:p,values:m,groupId:f,className:b}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,d.l)(h,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,i.U)(),[g,_]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,r.o5)();if(null!=f){const e=x[f];null!=e&&e!==g&&h.some((n=>n.value===e))&&_(e)}const I=e=>{const n=e.currentTarget,t=T.indexOf(n),a=h[t].value;a!==g&&(N(n),_(a),null!=f&&w(f,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},h.map((e=>{let{value:n,label:t,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:I,onClick:I},c,{className:(0,s.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":g===n})}),t??n)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function m(e){const n=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);