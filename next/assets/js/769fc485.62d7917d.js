"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(n),p=s,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),s=(n(67294),n(3905));const o={description:"Smart contracts can exchange assets between themselves on the same chain and between different chains, as well as with addresses on the L1 ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},r="The L2 Ledger",i={unversionedId:"guide/solo/the-l2-ledger",id:"guide/solo/the-l2-ledger",title:"The L2 Ledger",description:"Smart contracts can exchange assets between themselves on the same chain and between different chains, as well as with addresses on the L1 ledger.",source:"@site/next/external/wasp/documentation/docs/guide/solo/the-l2-ledger.md",sourceDirName:"guide/solo",slug:"/guide/solo/the-l2-ledger",permalink:"/next/smart-contracts/guide/solo/the-l2-ledger",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/solo/the-l2-ledger.md",tags:[],version:"current",frontMatter:{description:"Smart contracts can exchange assets between themselves on the same chain and between different chains, as well as with addresses on the L1 ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/next/smart-contracts/guide/solo/error-handling"},next:{title:"Running a Node",permalink:"/next/smart-contracts/guide/chains_and_nodes/running-a-node"}},l={},d=[{value:"Deposit and Withdraw Tokens",id:"deposit-and-withdraw-tokens",level:2},{value:"Deposit Requests",id:"deposit-requests",level:3},{value:"1. Request to Deposit Funds",id:"1-request-to-deposit-funds",level:4},{value:"2. Add Base Tokens",id:"2-add-base-tokens",level:4},{value:"3. Calculate Gas Fees",id:"3-calculate-gas-fees",level:4},{value:"4. Estimate Storage Deposit",id:"4-estimate-storage-deposit",level:4},{value:"5. Add Gas Budget to the Request",id:"5-add-gas-budget-to-the-request",level:4},{value:"6. Send the On-Ledger Request",id:"6-send-the-on-ledger-request",level:4},{value:"7. The Chain Picks Up the Request",id:"7-the-chain-picks-up-the-request",level:4},{value:"8. The chain executes the request",id:"8-the-chain-executes-the-request",level:4},{value:"9. The Transfer is Complete",id:"9-the-transfer-is-complete",level:4},{value:"Withdraw Request",id:"withdraw-request",level:3},{value:"1. Ensure the L1 Transaction Can Cover the Storage Deposit",id:"1-ensure-the-l1-transaction-can-cover-the-storage-deposit",level:4},{value:"2.Set the Request&#39;s Allowance",id:"2set-the-requests-allowance",level:4}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-l2-ledger"},"The L2 Ledger"),(0,s.kt)("p",null,"Each chain in IOTA Smart Contracts contains its own L2 ledger, independent of the L1 ledger.\nSmart contracts can exchange assets between themselves on the same chain, between different chains, and with addresses\non the L1 Ledger."),(0,s.kt)("p",null,"Imagine that you have a wallet with some tokens on the L1 ledger, and you want to send those tokens to a smart contract\non a chain and later receive these tokens back on L1."),(0,s.kt)("p",null,"On the L1 ledger, your wallet's private key is represented by an address, which holds some tokens.\nThose tokens are ",(0,s.kt)("em",{parentName:"p"},"controlled")," by the private key."),(0,s.kt)("p",null,"In IOTA Smart Contracts the L2 ledger is a collection of ",(0,s.kt)("em",{parentName:"p"},"on-chain accounts")," (sometimes also called just ",(0,s.kt)("em",{parentName:"p"},"accounts"),").\nEach L2 account is controlled by the same private key as its associated address and can hold tokens on the chain's\nledger, just like an address can hold tokens on L1.\nThis way, the chain is essentially a custodian of the tokens deposited in its accounts."),(0,s.kt)("h2",{id:"deposit-and-withdraw-tokens"},"Deposit and Withdraw Tokens"),(0,s.kt)("p",null,"The following test demonstrates how a wallet can deposit tokens in a chain\naccount and then withdraw them."),(0,s.kt)("p",null,"Note that the math is made somewhat more complex by the gas fees and storage deposit.\nYou could ignore them, but we include them in the example to show you exactly how you can handle them."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"func TestTutorialAccounts(t *testing.T) {\n    env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})\n    chain := env.NewChain()\n\n    // create a wallet with some base tokens on L1:\n    userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(0))\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount)\n\n    // the wallet can we identified on L2 by an AgentID:\n    userAgentID := isc.NewAgentID(userAddress)\n    // for now our on-chain account is empty:\n    chain.AssertL2BaseTokens(userAgentID, 0)\n\n    // send 1 Mi from the L1 wallet to own account on-chain, controlled by the same wallet\n    req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).\n        AddBaseTokens(1 * isc.Million)\n\n    // estimate the gas fee and storage deposit\n    gas1, gasFee1, err := chain.EstimateGasOnLedger(req, userWallet, true)\n    require.NoError(t, err)\n    storageDeposit1, err := chain.EstimateNeededStorageDeposit(req, userWallet)\n    require.NoError(t, err)\n    require.Zero(t, storageDeposit1) // since 1 Mi is enough\n\n    // send the deposit request\n    req.WithGasBudget(gas1).\n        AddBaseTokens(gasFee1) // including base tokens for gas fee\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // our L1 balance is 1 Mi + gas fee short\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount-1*isc.Million-gasFee1)\n    // our L2 balance is 1 Mi\n    chain.AssertL2BaseTokens(userAgentID, 1*isc.Million)\n    // (the gas fee went to the chain's private account)\n\n    // withdraw all base tokens back to L1\n    req = solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name).\n        WithAllowance(isc.NewAssetsBaseTokens(1 * isc.Million))\n\n    // estimate the gas fee and storage deposit\n    gas2, gasFee2, err := chain.EstimateGasOnLedger(req, userWallet, true)\n    require.NoError(t, err)\n    storageDeposit2, err := chain.EstimateNeededStorageDeposit(req, userWallet)\n    require.NoError(t, err)\n\n    // send the withdraw request\n    req.WithGasBudget(gas2).\n        AddBaseTokens(gasFee2 + storageDeposit2). // including base tokens for gas fee and storage\n        AddAllowanceBaseTokens(storageDeposit2)   // and withdrawing the storage as well\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // we are back to the initial situation, having been charged some gas fees\n    // in the process:\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount-gasFee1-gasFee2)\n    chain.AssertL2BaseTokens(userAgentID, 0)\n}\n")),(0,s.kt)("p",null,"The example above creates a chain and a wallet with ",(0,s.kt)("inlineCode",{parentName:"p"},"utxodb.FundsFromFaucetAmount")," base tokens on L1.\nThen, it sends 1 million tokens to the corresponding on-chain account by posting a\n",(0,s.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/accounts#deposit"},(0,s.kt)("inlineCode",{parentName:"a"},"deposit"))," request to the\n",(0,s.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," on the chain."),(0,s.kt)("p",null,"Finally, it sends a ",(0,s.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/accounts#withdraw"},(0,s.kt)("inlineCode",{parentName:"a"},"withdraw"))," request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"accounts")," core\ncontract to get the tokens back to L1."),(0,s.kt)("p",null,"Both requests are affected by the gas fees and the storage deposit.\nIn some cases, it is possible to ignore these amounts if they are negligible compared to the transferred amounts.\nIn this case, however, we want to be very precise."),(0,s.kt)("h3",{id:"deposit-requests"},"Deposit Requests"),(0,s.kt)("h4",{id:"1-request-to-deposit-funds"},"1. Request to Deposit Funds"),(0,s.kt)("p",null,"The first step in the deposit request is to create a request to deposit the funds with ",(0,s.kt)("inlineCode",{parentName:"p"},"solo.NewCallParams"),"."),(0,s.kt)("h4",{id:"2-add-base-tokens"},"2. Add Base Tokens"),(0,s.kt)("p",null,"In the example above we want to deposit 1 Mi, so we call ",(0,s.kt)("inlineCode",{parentName:"p"},"AddBaseTokens(1 * isc.Million)"),"."),(0,s.kt)("p",null,"This instructs Solo to take that amount from the L1 balance and add it to the transaction. This is only possible for\non-ledger requests."),(0,s.kt)("h4",{id:"3-calculate-gas-fees"},"3. Calculate Gas Fees"),(0,s.kt)("p",null,"Once the chain executes the request, it will be charged a gas fee."),(0,s.kt)("p",null,"We use ",(0,s.kt)("inlineCode",{parentName:"p"},"chain.EstimateGasOnLedger")," before actually sending the request to estimate this fee."),(0,s.kt)("h4",{id:"4-estimate-storage-deposit"},"4. Estimate Storage Deposit"),(0,s.kt)("p",null,"On-ledger requests also require a storage deposit. We use ",(0,s.kt)("inlineCode",{parentName:"p"},"EstimateNeededStorageDeposit")," for this. As the 1 Mi already\nincluded is enough for the storage deposit there\u2019s no need to add more."),(0,s.kt)("h4",{id:"5-add-gas-budget-to-the-request"},"5. Add Gas Budget to the Request"),(0,s.kt)("p",null,"We adjust the request with the gas budget and the gas fee with ",(0,s.kt)("inlineCode",{parentName:"p"},"WithGasBudget")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"AddBaseTokens"),", respectively."),(0,s.kt)("h4",{id:"6-send-the-on-ledger-request"},"6. Send the On-Ledger Request"),(0,s.kt)("p",null,"Finally, we send the on-ledger request with ",(0,s.kt)("inlineCode",{parentName:"p"},"PostRequestSync"),"."),(0,s.kt)("h4",{id:"7-the-chain-picks-up-the-request"},"7. The Chain Picks Up the Request"),(0,s.kt)("p",null,"Any attached base tokens (1 Mi + gas fee) are automatically credited to the sender's L2 account."),(0,s.kt)("h4",{id:"8-the-chain-executes-the-request"},"8. The chain executes the request"),(0,s.kt)("p",null,"The gas fee is deducted from the sender's L2 account."),(0,s.kt)("h4",{id:"9-the-transfer-is-complete"},"9. The Transfer is Complete"),(0,s.kt)("p",null,"We have exactly 1 Mi on our L2 balance."),(0,s.kt)("h3",{id:"withdraw-request"},"Withdraw Request"),(0,s.kt)("p",null,"The process for the ",(0,s.kt)("inlineCode",{parentName:"p"},"withdraw")," request is similar to the ",(0,s.kt)("a",{parentName:"p",href:"#deposit-requests"},"deposit process"),", with two main\ndifferences:"),(0,s.kt)("h4",{id:"1-ensure-the-l1-transaction-can-cover-the-storage-deposit"},"1. Ensure the L1 Transaction Can Cover the Storage Deposit"),(0,s.kt)("p",null,"As the storage deposit is larger than the gas fee, we must ensure that the L1 transaction contains enough funds for the\nstorage deposit. These tokens are automatically deposited in our L2 account, and we immediately withdraw them."),(0,s.kt)("h4",{id:"2set-the-requests-allowance"},"2.Set the Request's Allowance"),(0,s.kt)("p",null,"We use ",(0,s.kt)("inlineCode",{parentName:"p"},"AddAllowanceBaseTokens")," to set the ",(0,s.kt)("em",{parentName:"p"},"allowance")," of our request. The allowance specifies the maximum amount of\ntokens the smart contract can debit from the sender's L2 account."),(0,s.kt)("p",null,"It would fail if we posted the same ",(0,s.kt)("inlineCode",{parentName:"p"},"deposit")," request from another user wallet (another private key).\nTry it! Only the address owner can move those funds from the on-chain account."),(0,s.kt)("p",null,"You can also try removing the ",(0,s.kt)("inlineCode",{parentName:"p"},"AddAllowanceBaseTokens")," call. It will fail because a smart contract cannot deduct funds from the\nsender's L2 balance unless explicitly authorized by the allowance."))}u.isMDXComponent=!0}}]);