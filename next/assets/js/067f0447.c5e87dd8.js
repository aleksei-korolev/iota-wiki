"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={keywords:["Ledger","UTXO","explanation"],description:"Simple Transfers in Stardust.",image:"/img/logo/preview.png"},o="Simple Transactions",s={unversionedId:"explanations/ledger/simple_transfers",id:"explanations/ledger/simple_transfers",title:"Simple Transactions",description:"Simple Transfers in Stardust.",source:"@site/next/external/introduction-docs/docs/explanations/ledger/simple_transfers.md",sourceDirName:"explanations/ledger",slug:"/explanations/ledger/simple_transfers",permalink:"/next/introduction/explanations/ledger/simple_transfers",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/next/external/introduction-docs/docs/explanations/ledger/simple_transfers.md",tags:[],version:"current",frontMatter:{keywords:["Ledger","UTXO","explanation"],description:"Simple Transfers in Stardust.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Stardust Ledger",permalink:"/next/introduction/explanations/ledger/intro"},next:{title:"Alias Transactions",permalink:"/next/introduction/explanations/ledger/alias"}},p={},l=[{value:"Transfer of Funds",id:"transfer-of-funds",level:2},{value:"Transfer of Funds with Expiration",id:"transfer-of-funds-with-expiration",level:2},{value:"Timelocking Funds in Transfers",id:"timelocking-funds-in-transfers",level:2},{value:"Storage Deposit Returns in Transfers",id:"storage-deposit-returns-in-transfers",level:2},{value:"Sender Feature",id:"sender-feature",level:2},{value:"Metadata Feature",id:"metadata-feature",level:2},{value:"Tag Feature",id:"tag-feature",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple-transactions"},"Simple Transactions"),(0,i.kt)("h2",{id:"transfer-of-funds"},"Transfer of Funds"),(0,i.kt)("p",null,"A simple transaction moves funds from one user account to another. On a high level, transactions must define 3 things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inputs"),": previously created unpsent transaction outputs holding funds that the transaction consumes,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unlock Blocks"),": they hold the signatures authorizing the consumption of inputs,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Outputs"),": newly created outputs holding transferred funds.")),(0,i.kt)("p",null,"In Stardust a simple transfer may be realized with an output type called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#basic-output"},"Basic Output"),".\nJust like every other output type, Basic Outputs define the base token funds they hold in the ",(0,i.kt)("em",{parentName:"p"},"Amount")," field. They have\nto have at least one ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#unlock-conditions"},"Unlock Condition"),"\ndefined: the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#address-unlock-condition"},"Address Unlock Condition"),"."),(0,i.kt)("p",null,"It means that in order to unlock the output in a transaction, one has to present a valid signature for the given address.\nThe signature signs the whole content of the transaction, thereby authorizing the consumption of inputs but also\ndeclaring the intention to create new outputs."),(0,i.kt)("p",null,"Transaction A simply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consumes as input a ",(0,i.kt)("em",{parentName:"li"},"Basic Output")," with ",(0,i.kt)("em",{parentName:"li"},"100i")," locked under ",(0,i.kt)("em",{parentName:"li"},"ownerAddress"),","),(0,i.kt)("li",{parentName:"ul"},"provides an ",(0,i.kt)("em",{parentName:"li"},"Unlock"),", namely a ",(0,i.kt)("em",{parentName:"li"},"Signature Unlock")," that contains a valid signature of the transaction content corresponding\nto the private key behind ",(0,i.kt)("em",{parentName:"li"},"ownerAddress"),","),(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("em",{parentName:"li"},"Basic Output")," with ",(0,i.kt)("em",{parentName:"li"},"100i")," locked under the recipients address, namely ",(0,i.kt)("em",{parentName:"li"},"recipientAddress"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction A - Changing owner",src:n(34122).Z,width:"842",height:"602"})),(0,i.kt)("h2",{id:"transfer-of-funds-with-expiration"},"Transfer of Funds with Expiration"),(0,i.kt)("p",null,"The first new ",(0,i.kt)("em",{parentName:"p"},"Unlock Condition")," we are going to look at is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#expiration-unlock-condition"},"Expiration Unlock Condition"),".\nIt lets the creator of the output define an ",(0,i.kt)("em",{parentName:"p"},"Expiration Deadline"),". Before the deadline, the recipient can consume and\nunlock the output in a transaction, but once the deadline expired, only the ",(0,i.kt)("em",{parentName:"p"},"Return Address")," defined in the\n",(0,i.kt)("em",{parentName:"p"},"Expiration Unlock Condition")," can unlock it."),(0,i.kt)("p",null,"Transaction B defines an output that can only be unlocked by the recipient in a transaction that is confirmed by a\nmilestone where ",(0,i.kt)("em",{parentName:"p"},"Milestone Unix Timestamp")," is less, than the ",(0,i.kt)("em",{parentName:"p"},"Unix Time")," defined in the ",(0,i.kt)("em",{parentName:"p"},"Expiration Unlock Condition"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction B - Sending funds with expiration",src:n(70129).Z,width:"842",height:"602"})),(0,i.kt)("p",null,"Transaction C shows how the recipient can consume the output before the deadline and take the funds into full, unconditional\ncustody."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction C - Recipient claims non-expired funds",src:n(67997).Z,width:"842",height:"882"})),(0,i.kt)("p",null,"Transaction D depicts how the original sender claims an expired output. Note, that it is not necessary for the sender\nto sweep the funds into their own wallet, they can just treat it as funds they have full custody of."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction D - Original sender claims expired funds",src:n(37425).Z,width:"842",height:"882"})),(0,i.kt)("h2",{id:"timelocking-funds-in-transfers"},"Timelocking Funds in Transfers"),(0,i.kt)("p",null,"With Stardust, it is possible to lock funds away based on time. When an output has a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#timelock-unlock-condition"},"Timelock Unlock Condition"),"\ndefined, not even its rightful owner can unlock it before the timelock expires. Just like in the case of the Transaction C and D,\nthe notion of time in the ledger is determined by the timestamp of the milestone that confirms the transaction."),(0,i.kt)("p",null,"Transaction E creates an output owned by the recipient but timelocked until ",(0,i.kt)("em",{parentName:"p"},"May 24 2022 18:00:00"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction E - Sending funds with timelock",src:n(47284).Z,width:"842",height:"612"})),(0,i.kt)("p",null,"The recipient has no way to unlock the output before the deadline. Once the timelock expired, the funds can be moved, as\ndepicted on Transaction F."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction F - Recipient unlocks timelocked funds",src:n(70620).Z,width:"843",height:"863"})),(0,i.kt)("h2",{id:"storage-deposit-returns-in-transfers"},"Storage Deposit Returns in Transfers"),(0,i.kt)("p",null,"Stardust introduces a new system to protect the ledger size and hence node storage resources, called Byte-cost based\nStorage Deposit System. You can read more about it in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/master/tips/TIP-0019/tip-0019.md"},"TIP-19"),".\nIn short, every output in the ledger need to carry enough base tokens to cover for its network storage use."),(0,i.kt)("p",null,"Implicitly this means that an output has to have a minimum amount of base tokens, otherwise it is considered invalid.\nThe exact minimum depends on the size of the output and the protocol parameter ",(0,i.kt)("em",{parentName:"p"},"Virtual Byte Cost"),". The implication of\nthis is that is no longer possible to store microfunds in an output. So suppose you wanted to send 1i (0.000001 MIOTA):\nis it still possible?"),(0,i.kt)("p",null,"The answer is yes. With the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#storage-deposit-return-unlock-condition"},"Storage Deposit Return Unlock Condition"),"\nit is possible to define spending constraints on outputs that you create. Let's assume that the minimum amount of funds\nthat need to be present in an output is 100i. If you wanted to send only 1i to the recipient, you would transfer\n101i to the recipient's address with the extra condition that she can only use the funds if she refunds you in the\nvery same transaction with 100i."),(0,i.kt)("p",null,"Transaction G show the creation of an output with ",(0,i.kt)("em",{parentName:"p"},"Storage Deposit Return Unlock Condition"),". Notice, that ",(0,i.kt)("em",{parentName:"p"},"Basic Output #11"),"\nholds 101i, and the unlock condition defines the ",(0,i.kt)("em",{parentName:"p"},"Return Amount")," of 100i to ",(0,i.kt)("em",{parentName:"p"},"ReturnAddress")," ",(0,i.kt)("em",{parentName:"p"},"ownerAddress"),". All in all,\nthe recipient can only freely use 1i when she consumes the output in Transaction H."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction G - Sending microfunds",src:n(44637).Z,width:"843",height:"643"})),(0,i.kt)("p",null,"In order for the recipient to claim the 1i, she needs to sweep it into one of her own outputs. Therefore, she consumes\n",(0,i.kt)("em",{parentName:"p"},"Basic Output #12")," in the transaction that holds her funds. On the output side, she has to have ",(0,i.kt)("em",{parentName:"p"},"Basic Output #13")," that\nrefunds the original sender, plus she creates ",(0,i.kt)("em",{parentName:"p"},"Basic Output #14")," into which she sweeps the 1i."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction H - Receiving microfunds",src:n(79456).Z,width:"842",height:"1072"})),(0,i.kt)("p",null,"What forces the recipient to post and execute Transaction H? Nothing. She can just keep the sender's 100i in limbo forever.\nThat is why it is handy that you can combine unlock conditions. For example, the sender can add an expiration\ncondition to ",(0,i.kt)("em",{parentName:"p"},"Basic Output #11"),". Once the output is expired, the recipient won't be able to claim the 1i and the sender\ntakes full custody of the 101i in the output."),(0,i.kt)("h2",{id:"sender-feature"},"Sender Feature"),(0,i.kt)("p",null,"Next to ",(0,i.kt)("em",{parentName:"p"},"Unlock Conditions"),", Stardust allows to define optional ",(0,i.kt)("em",{parentName:"p"},"Features")," on outputs of a transfer that do not impact\nthe actual unlocking of the created output.  The ",(0,i.kt)("em",{parentName:"p"},"Sender")," feature is one of such features, which lets the creator of the output\ndefine an explicit ",(0,i.kt)("em",{parentName:"p"},"Sender Address")," attribute for an output."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Sender")," attribute is validated on protocol level. Validation ensures that the transaction that created the output\nunlocked the ",(0,i.kt)("em",{parentName:"p"},"Sender")," address on the input side. Therefore, this feature is a protocol validated proof that the output\nwas created by someone who controls the ",(0,i.kt)("em",{parentName:"p"},"Sender")," address."),(0,i.kt)("p",null,"Transaction J shows how one can add a sender attribute to a created output. Note, that Transaction J would be invalid\nif:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Basic Output #15")," wouldn't be locked to ",(0,i.kt)("em",{parentName:"li"},"senderAddress"),", or"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Basic Output #16")," would define ",(0,i.kt)("em",{parentName:"li"},"Sender")," as anything else than ",(0,i.kt)("em",{parentName:"li"},"senderAddress")," from ",(0,i.kt)("em",{parentName:"li"},"Basic Output #15"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction J - Sender Feature",src:n(18557).Z,width:"843",height:"633"})),(0,i.kt)("p",null,"On-ledger (originating from L1) requests of IOTA Smart Contracts use this feature heavily, but it is also possible to\nfetch outputs created by a specific party with the ",(0,i.kt)("em",{parentName:"p"},"Sender Feature")," through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gohornet/inx-indexer"},"INX UTXO indexer application"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md"},"REST API"),"."),(0,i.kt)("h2",{id:"metadata-feature"},"Metadata Feature"),(0,i.kt)("p",null,"Another handy tool is the ",(0,i.kt)("em",{parentName:"p"},"Metadata Feature")," of outputs. This feature makes it possible to store arbitrary data in outputs.\nOf course, storing data in outputs increases the minimum base token requirement, but in turn it provides a data storage option\nthat is 24/7 available on any network node."),(0,i.kt)("p",null,"As soon as the output with metadata is consumed, it is pruned from nodes' databases and base tokens used as storage\ndeposit are freed up."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction K - Metadata Feature",src:n(97276).Z,width:"842",height:"632"})),(0,i.kt)("h2",{id:"tag-feature"},"Tag Feature"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Tag Feature")," makes it possible to associate a maximum 64 bytes long indexation tag with an output. Similarly to\nthe ",(0,i.kt)("em",{parentName:"p"},"Metadata Feature"),", the actual ",(0,i.kt)("em",{parentName:"p"},"Tag")," is treated as binary data by the protocol."),(0,i.kt)("p",null,"Note, that by default nodes do not store and expose the indexation by tag, however the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md"},"Indexer API"),' does. In an "IOTA as a payment method" use case the ',(0,i.kt)("em",{parentName:"p"},"Tag"),"\nfield could be used as a payment reference field, much like the payment reference option of a regular wire transfer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction L - Tag Feature",src:n(65915).Z,width:"842",height:"632"})))}u.isMDXComponent=!0},34122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_A-45773dfd2d99e2d73c0d99ea276b0413.svg"},70129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_B-bfde05cf17cb6c834a6e7aef55cafa12.svg"},67997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_C-b9ebeba9060b427d5e83446f90b58e44.svg"},37425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_D-1fba5ccdbcc3558a20219deb49162198.svg"},47284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_E-b7253edea7d546388da89f2db286dcb7.svg"},70620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_F-13957919b13d3f73411c12b9cd09572e.svg"},44637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_G-07a6fa0e7f422601cad45c1ce8dd6188.svg"},79456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_H-782a050b9c6a49185020a5de493a0a77.svg"},18557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_J-4bd80299fab9b9a74a9e54e33c6f29b8.svg"},97276:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_K-861c910d4eb55926f3ec952b65b5ffab.svg"},65915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tx_L-1bf36fdadcd1cd240b03c58fe826f401.svg"}}]);