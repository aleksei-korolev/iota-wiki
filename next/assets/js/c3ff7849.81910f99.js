"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[77596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(34259),s=a(18679);const i={keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the call context that deal with token balances. The balances() method can be used to determine the current asset balances. The allowance() method can be used to determine the caller assets that the function is allowed to use.",image:"/img/logo/WASP_logo_dark.png"},l="Token Transfers",c={unversionedId:"guide/wasm_vm/transfers",id:"guide/wasm_vm/transfers",title:"Token Transfers",description:"There are two methods in the call context that deal with token balances. The balances() method can be used to determine the current asset balances. The allowance() method can be used to determine the caller assets that the function is allowed to use.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/transfers.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/transfers",permalink:"/next/smart-contracts/guide/wasm_vm/transfers",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/transfers.mdx",tags:[],version:"current",frontMatter:{keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the call context that deal with token balances. The balances() method can be used to determine the current asset balances. The allowance() method can be used to determine the caller assets that the function is allowed to use.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Initialization",permalink:"/next/smart-contracts/guide/wasm_vm/init"},next:{title:"Function Descriptors",permalink:"/next/smart-contracts/guide/wasm_vm/funcdesc"}},d={},m=[],u={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-transfers"},"Token Transfers"),(0,r.kt)("p",null,"There are two methods in the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context")," that deal with token balances.\nThe first one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances()")," method, which can be used to determine the current asset\nbalances that are governed by this smart contract. The second one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowance()"),"\nmethod, which can be used to determine the caller assets that the current call to the\nsmart contract function is allowed to use."),(0,r.kt)("p",null,"Both methods provide access to zero or more balances of assets, through a special\n",(0,r.kt)("inlineCode",{parentName:"p"},"ScBalances")," proxy. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowance()")," balances are not automatically transferred\nto the smart contract but instead will need to explicitly be transferred by the function.\nThat way, if a function cannot handle the transfer the tokens will stay safely in the\ncaller's on-chain account. The function explicitly transfers only assets it understands,\nand only in the amount that its algorithm defines, and never more than the allowed amount."),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_allowed()")," method in the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context")," that can\ntransfer assets from the caller's on-chain account to any other on-chain account. The\nassets to be transferred are provided to the method through a special ",(0,r.kt)("inlineCode",{parentName:"p"},"ScTransfer")," proxy,\nwhich is essentially a mutable version of ",(0,r.kt)("inlineCode",{parentName:"p"},"ScBalances"),". We will be using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_allowed()")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example to disperse the incoming iotas to\nthe member accounts."),(0,r.kt)("p",null,"The idea behind the dividend smart contract is that once we have set up the list of\nmembers, consisting of address/factor pairs, and knowing the total sum of the factors, we\ncan automatically pay out a dividend to each of the members in the list according to the\nfactors involved. Whatever amount of iotas gets sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide()")," function will be\ndivided over the members in proportion based on their respective factors. For example, you\ncould set it up so that address A has a factor of 50, B has 30, and C has 20, for a total\nof 100 to divide. Then whenever an amount of iotas gets sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide()")," function,\naddress A will receive 50/100th, address B will receive 30/100th, and address C will\nreceive 20/100th of that amount."),(0,r.kt)("p",null,"Here is the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the accounts in the member list according to the dispersion\n// factors associated with these accounts.\n// Anyone can send iotas to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining tokens in the sender account.\nfunc funcDivide(ctx wasmlib.ScFuncContext, f *DivideContext) {\n    // Create an ScBalances proxy to the allowance balances for this\n    // smart contract.\n    var allowance *wasmlib.ScBalances = ctx.Allowance()\n\n    // Retrieve the amount of plain iota tokens from the account balance.\n    var amount uint64 = allowance.BaseTokens()\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    var totalFactor uint64 = f.State.TotalFactor().Value()\n\n    // Get the proxy to the 'members' map in the state storage.\n    var members MapAddressToMutableUint64 = f.State.Members()\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    var memberList ArrayOfMutableAddress = f.State.MemberList()\n\n    // Determine the current length of the memberList array.\n    var size uint32 = memberList.Length()\n\n    // Loop through all indexes of the memberList array.\n    for i := uint32(0); i < size; i++ {\n        // Retrieve the next indexed address from the memberList array.\n        var address wasmtypes.ScAddress = memberList.GetAddress(i).Value()\n\n        // Retrieve the factor associated with the address from the members map.\n        var factor uint64 = members.GetUint64(address).Value()\n\n        // Calculate the fair share of tokens to disperse to this member based on the\n        // factor we just retrieved. Note that the result will been truncated.\n        var share uint64 = amount * factor / totalFactor\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfer map proxy that transfers the\n            // calculated amount of tokens.\n            var transfer *wasmlib.ScTransfer = wasmlib.NewScTransferBaseTokens(share)\n\n            // Perform the actual transfer of tokens from the caller allowance\n            // to the member account.\n            ctx.TransferAllowed(address.AsAgentID(), transfer, true)\n        }\n    }\n}\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the accounts in the member list according to the dispersion\n// factors associated with these accounts.\n// Anyone can send iotas to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining tokens in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\npub fn func_divide(ctx: &ScFuncContext, f: &DivideContext) {\n\n    // Create an ScBalances proxy to the allowance balances for this\n    // smart contract.\n    let allowance: ScBalances = ctx.allowance();\n\n    // Retrieve the amount of plain iota tokens from the account balance.\n    let amount: u64 = allowance.base_tokens();\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    let total_factor: u64 = f.state.total_factor().value();\n\n    // Get the proxy to the 'members' map in the state storage.\n    let members: MapAddressToMutableUint64 = f.state.members();\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    let member_list: ArrayOfMutableAddress = f.state.member_list();\n\n    // Determine the current length of the memberList array.\n    let size: u32 = member_list.length();\n\n    // Loop through all indexes of the memberList array.\n    for i in 0..size {\n        // Retrieve the next indexed address from the memberList array.\n        let address: ScAddress = member_list.get_address(i).value();\n\n        // Retrieve the factor associated with the address from the members map.\n        let factor: u64 = members.get_uint64(&address).value();\n\n        // Calculate the fair share of tokens to disperse to this member based on the\n        // factor we just retrieved. Note that the result will be truncated.\n        let share: u64 = amount * factor / total_factor;\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfer map proxy that transfers the\n            // calculated amount of tokens.\n            let transfers: ScTransfer = ScTransfer::base_tokens(share);\n\n            // Perform the actual transfer of tokens from the caller allowance\n            // to the member account.\n            ctx.transfer_allowed(&address.as_agent_id(), &transfers, true);\n        }\n    }\n}\n"))),(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the accounts in the member list according to the dispersion\n// factors associated with these accounts.\n// Anyone can send iotas to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining tokens in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\nexport function funcDivide(ctx: wasmlib.ScFuncContext, f: sc.DivideContext): void {\n\n    // Create an ScBalances proxy to the allowance balances for this\n    // smart contract.\n    let allowance: wasmlib.ScBalances = ctx.allowance();\n\n    // Retrieve the allowed amount of plain iota tokens from the account balance.\n    let amount: u64 = allowance.baseTokens();\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    let totalFactor: u64 = f.state.totalFactor().value();\n\n    // Get the proxy to the 'members' map in the state storage.\n    let members: sc.MapAddressToMutableUint64 = f.state.members();\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    let memberList: sc.ArrayOfMutableAddress = f.state.memberList();\n\n    // Determine the current length of the memberList array.\n    let size: u32 = memberList.length();\n\n    // Loop through all indexes of the memberList array.\n    for (let i: u32 = 0; i < size; i++) {\n        // Retrieve the next indexed address from the memberList array.\n        let address: wasmlib.ScAddress = memberList.getAddress(i).value();\n\n        // Retrieve the factor associated with the address from the members map.\n        let factor: u64 = members.getUint64(address).value();\n\n        // Calculate the fair share of tokens to disperse to this member based on the\n        // factor we just retrieved. Note that the result will be truncated.\n        let share: u64 = amount * factor / totalFactor;\n\n        // Is there anything to disperse to this member?\n        if (share > 0) {\n            // Yes, so let's set up an ScTransfer proxy that transfers the\n            // calculated amount of tokens.\n            let transfers: wasmlib.ScTransfer = wasmlib.ScTransfer.baseTokens(share);\n\n            // Perform the actual transfer of tokens from the caller allowance\n            // to the member account.\n            ctx.transferAllowed(address.asAgentID(), transfers, true);\n        }\n    }\n}\n")))),(0,r.kt)("p",null,"In the next section we will introduce ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/funcdesc"},"Function Descriptors")," that can be\nused to initiate smart contract functions."))}h.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),o=a(86010),s=a(51048),i=a(33609),l=a(1943),c=a(72957);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:s,defaultValue:u,values:h,groupId:f,className:p}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,i.l)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,l.U)(),[x,T]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=f){const e=g[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=N.indexOf(t),n=v[a].value;n!==x&&(C(t),T(n),null!=f&&k(f,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},p)},v.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:S,onFocus:_,onClick:_},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,s.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}}}]);