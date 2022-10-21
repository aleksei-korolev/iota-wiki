"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||c[d]||s;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(34259),o=n(18679);const l={keywords:["functions","state","structures","storage","named fields"],description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",image:"/img/logo/WASP_logo_dark.png"},u="Structured Data Types",i={unversionedId:"guide/wasm_vm/structs",id:"guide/wasm_vm/structs",title:"Structured Data Types",description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/structs.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/structs",permalink:"/next/smart-contracts/guide/wasm_vm/structs",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/structs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","state","structures","storage","named fields"],description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"WasmLib Data Types",permalink:"/next/smart-contracts/guide/wasm_vm/types"},next:{title:"Type Definitions",permalink:"/next/smart-contracts/guide/wasm_vm/typedefs"}},m={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"structured-data-types"},"Structured Data Types"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," allows you to define your own structured data types that are\ncomposed of the predefined WasmLib value data types. The tool will generate a struct with\nnamed fields according to the definition in the schema definition file, and also will\ngenerate code to serialize and deserialize the structure to a byte array, so that it can\nbe saved as a single unit of data bytes, for example in state storage."),(0,r.kt)("p",null,"You can use structs directly as a type in state storage definitions and the\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will automatically generate the proxy code to access and\n(de)serialize it properly."),(0,r.kt)("p",null,"For example, let's say you are creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"betting")," smart contract. Then you would want to\nstore information for each bet. The Bet structure could consist of the bet amount and\ntime, the number of the item that was bet on, and the agent ID of the one who placed the\nbet. And you would keep track of all bets in state storage in an array of Bet structs. To\ndo so, you would insert the following into the schema definition file:"),(0,r.kt)(s.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"structs:\n  Bet:\n    amount: Int64 # bet amount\n    better: AgentID # who placed this bet\n    number: Int32 # number of item we bet on\n    time: Int64 # timestamp of this bet\nstate:\n  bets: Bet[] # all bets that were made in this round\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will generate the following code in ",(0,r.kt)("inlineCode",{parentName:"p"},"structs.xx")," for the Bet\nstruct:"),(0,r.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"\n\ntype Bet struct {\n    // bet amount\n    Amount int64\n    // who placed this bet\n    Better wasmtypes.ScAgentID\n    // number of item we bet on\n    Number int32\n    // timestamp of this bet\n    Time   int64\n}\n\nfunc NewBetFromBytes(buf []byte) *Bet {\n    dec := wasmtypes.NewWasmDecoder(buf)\n    data := &Bet{}\n    data.Amount = wasmtypes.Int64Decode(dec)\n    data.Better = wasmtypes.AgentIDDecode(dec)\n    data.Number = wasmtypes.Int32Decode(dec)\n    data.Time   = wasmtypes.Int64Decode(dec)\n    dec.Close()\n    return data\n}\n\nfunc (o *Bet) Bytes() []byte {\n    enc := wasmtypes.NewWasmEncoder()\n    wasmtypes.Int64Encode(enc, o.Amount)\n    wasmtypes.AgentIDEncode(enc, o.Better)\n    wasmtypes.Int32Encode(enc, o.Number)\n    wasmtypes.Int64Encode(enc, o.Time)\n    return enc.Buf()\n}\n\ntype ImmutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (o ImmutableBet) Exists() bool {\n    return o.proxy.Exists()\n}\n\nfunc (o ImmutableBet) Value() *Bet {\n    return NewBetFromBytes(o.proxy.Get())\n}\n\ntype MutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (o MutableBet) Delete() {\n    o.proxy.Delete()\n}\n\nfunc (o MutableBet) Exists() bool {\n    return o.proxy.Exists()\n}\n\nfunc (o MutableBet) SetValue(value *Bet) {\n    o.proxy.Set(value.Bytes())\n}\n\nfunc (o MutableBet) Value() *Bet {\n    return NewBetFromBytes(o.proxy.Get())\n}\n'))),(0,r.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\n\n#[derive(Clone)]\npub struct Bet {\n    // bet amount\n    pub amount : i64,\n    // who placed this bet\n    pub better : ScAgentID,\n    // number of item we bet on\n    pub number : i32,\n    // timestamp of this bet\n    pub time   : i64,\n}\n\nimpl Bet {\n    pub fn from_bytes(bytes: &[u8]) -> Bet {\n        let mut dec = WasmDecoder::new(bytes);\n        Bet {\n            amount : int64_decode(&mut dec),\n            better : agent_id_decode(&mut dec),\n            number : int32_decode(&mut dec),\n            time   : int64_decode(&mut dec),\n        }\n    }\n\n    pub fn to_bytes(&self) -> Vec<u8> {\n        let mut enc = WasmEncoder::new();\n        int64_encode(&mut enc, self.amount);\n        agent_id_encode(&mut enc, &self.better);\n        int32_encode(&mut enc, self.number);\n        int64_encode(&mut enc, self.time);\n        enc.buf()\n    }\n}\n\n#[derive(Clone)]\npub struct ImmutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ImmutableBet {\n    pub fn exists(&self) -> bool {\n        self.proxy.exists()\n    }\n\n    pub fn value(&self) -> Bet {\n        Bet::from_bytes(&self.proxy.get())\n    }\n}\n\n#[derive(Clone)]\npub struct MutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl MutableBet {\n    pub fn delete(&self) {\n        self.proxy.delete();\n    }\n\n    pub fn exists(&self) -> bool {\n        self.proxy.exists()\n    }\n\n    pub fn set_value(&self, value: &Bet) {\n        self.proxy.set(&value.to_bytes());\n    }\n\n    pub fn value(&self) -> Bet {\n        Bet::from_bytes(&self.proxy.get())\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmtypes from "wasmlib/wasmtypes";\n\nexport class Bet {\n    // bet amount\n    amount : i64 = 0;\n    // who placed this bet\n    better : wasmtypes.ScAgentID = wasmtypes.agentIDFromBytes([]);\n    // number of item we bet on\n    number : i32 = 0;\n    // timestamp of this bet\n    time   : i64 = 0;\n\n    static fromBytes(buf: u8[]): Bet {\n        const dec = new wasmtypes.WasmDecoder(buf);\n        const data = new Bet();\n        data.amount = wasmtypes.int64Decode(dec);\n        data.better = wasmtypes.agentIDDecode(dec);\n        data.number = wasmtypes.int32Decode(dec);\n        data.time   = wasmtypes.int64Decode(dec);\n        dec.close();\n        return data;\n    }\n\n    bytes(): u8[] {\n        const enc = new wasmtypes.WasmEncoder();\n        wasmtypes.int64Encode(enc, this.amount);\n        wasmtypes.agentIDEncode(enc, this.better);\n        wasmtypes.int32Encode(enc, this.number);\n        wasmtypes.int64Encode(enc, this.time);\n        return enc.buf();\n    }\n}\n\nexport class ImmutableBet extends wasmtypes.ScProxy {\n\n    exists(): bool {\n        return this.proxy.exists();\n    }\n\n    value(): Bet {\n        return Bet.fromBytes(this.proxy.get());\n    }\n}\n\nexport class MutableBet extends wasmtypes.ScProxy {\n\n    delete(): void {\n        this.proxy.delete();\n    }\n\n    exists(): bool {\n        return this.proxy.exists();\n    }\n\n    setValue(value: Bet): void {\n        this.proxy.set(value.bytes());\n    }\n\n    value(): Bet {\n        return Bet.fromBytes(this.proxy.get());\n    }\n}\n')))),(0,r.kt)("p",null,"Notice how the generated ImmutableBet and MutableBet proxies use the fromBytes() and\ntoBytes() (de)serialization code to automatically transform byte arrays into Bet structs."),(0,r.kt)("p",null,"The generated code in ",(0,r.kt)("inlineCode",{parentName:"p"},"state.xx")," that implements the state interface is shown here:"),(0,r.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"\n\ntype ArrayOfImmutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfImmutableBet) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfImmutableBet) GetBet(index uint32) ImmutableBet {\n    return ImmutableBet{proxy: a.proxy.Index(index)}\n}\n\ntype ImmutableBettingState struct {\n    proxy wasmtypes.Proxy\n}\n\n// all bets that were made in this round\nfunc (s ImmutableBettingState) Bets() ArrayOfImmutableBet {\n    return ArrayOfImmutableBet{proxy: s.proxy.Root(StateBets)}\n}\n\n// current owner of this smart contract\nfunc (s ImmutableBettingState) Owner() wasmtypes.ScImmutableAgentID {\n    return wasmtypes.NewScImmutableAgentID(s.proxy.Root(StateOwner))\n}\n\ntype ArrayOfMutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfMutableBet) AppendBet() MutableBet {\n    return MutableBet{proxy: a.proxy.Append()}\n}\n\nfunc (a ArrayOfMutableBet) Clear() {\n    a.proxy.ClearArray()\n}\n\nfunc (a ArrayOfMutableBet) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfMutableBet) GetBet(index uint32) MutableBet {\n    return MutableBet{proxy: a.proxy.Index(index)}\n}\n\ntype MutableBettingState struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (s MutableBettingState) AsImmutable() ImmutableBettingState {\n    return ImmutableBettingState(s)\n}\n\n// all bets that were made in this round\nfunc (s MutableBettingState) Bets() ArrayOfMutableBet {\n    return ArrayOfMutableBet{proxy: s.proxy.Root(StateBets)}\n}\n\n// current owner of this smart contract\nfunc (s MutableBettingState) Owner() wasmtypes.ScMutableAgentID {\n    return wasmtypes.NewScMutableAgentID(s.proxy.Root(StateOwner))\n}\n'))),(0,r.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\nuse crate::*;\n\n#[derive(Clone)]\npub struct ArrayOfImmutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfImmutableBet {\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_bet(&self, index: u32) -> ImmutableBet {\n        ImmutableBet { proxy: self.proxy.index(index) }\n    }\n}\n\n#[derive(Clone)]\npub struct ImmutableBettingState {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ImmutableBettingState {\n    // all bets that were made in this round\n    pub fn bets(&self) -> ArrayOfImmutableBet {\n        ArrayOfImmutableBet { proxy: self.proxy.root(STATE_BETS) }\n    }\n\n    // current owner of this smart contract\n    pub fn owner(&self) -> ScImmutableAgentID {\n        ScImmutableAgentID::new(self.proxy.root(STATE_OWNER))\n    }\n}\n\n#[derive(Clone)]\npub struct ArrayOfMutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfMutableBet {\n\n    pub fn append_bet(&self) -> MutableBet {\n        MutableBet { proxy: self.proxy.append() }\n    }\n    pub fn clear(&self) {\n        self.proxy.clear_array();\n    }\n\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_bet(&self, index: u32) -> MutableBet {\n        MutableBet { proxy: self.proxy.index(index) }\n    }\n}\n\n#[derive(Clone)]\npub struct MutableBettingState {\n    pub(crate) proxy: Proxy,\n}\n\nimpl MutableBettingState {\n    pub fn as_immutable(&self) -> ImmutableBettingState {\n        ImmutableBettingState { proxy: self.proxy.root("") }\n    }\n\n    // all bets that were made in this round\n    pub fn bets(&self) -> ArrayOfMutableBet {\n        ArrayOfMutableBet { proxy: self.proxy.root(STATE_BETS) }\n    }\n\n    // current owner of this smart contract\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.proxy.root(STATE_OWNER))\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmtypes from "wasmlib/wasmtypes";\nimport * as sc from "./index";\n\nexport class ArrayOfImmutableBet extends wasmtypes.ScProxy {\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBet(index: u32): sc.ImmutableBet {\n        return new sc.ImmutableBet(this.proxy.index(index));\n    }\n}\n\nexport class ImmutableBettingState extends wasmtypes.ScProxy {\n    // all bets that were made in this round\n    bets(): sc.ArrayOfImmutableBet {\n        return new sc.ArrayOfImmutableBet(this.proxy.root(sc.StateBets));\n    }\n\n    // current owner of this smart contract\n    owner(): wasmtypes.ScImmutableAgentID {\n        return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.StateOwner));\n    }\n}\n\nexport class ArrayOfMutableBet extends wasmtypes.ScProxy {\n\n    appendBet(): sc.MutableBet {\n        return new sc.MutableBet(this.proxy.append());\n    }\n\n    clear(): void {\n        this.proxy.clearArray();\n    }\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBet(index: u32): sc.MutableBet {\n        return new sc.MutableBet(this.proxy.index(index));\n    }\n}\n\nexport class MutableBettingState extends wasmtypes.ScProxy {\n    asImmutable(): sc.ImmutableBettingState {\n        return new sc.ImmutableBettingState(this.proxy);\n    }\n\n    // all bets that were made in this round\n    bets(): sc.ArrayOfMutableBet {\n        return new sc.ArrayOfMutableBet(this.proxy.root(sc.StateBets));\n    }\n\n    // current owner of this smart contract\n    owner(): wasmtypes.ScMutableAgentID {\n        return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.StateOwner));\n    }\n}\n')))),(0,r.kt)("p",null,"The end results are ImmutableBettingState and MutableBettingState structures that can\ndirectly interface to the state of the betting contract."),(0,r.kt)("p",null,"Note how the comments from the schema definition file have been copied to the structure\ndefinition in the code and also to the access functions for the fields. This will allow\nyour development environment to pop up context-sensitive help for those fields and access\nfunctions."),(0,r.kt)("p",null,"In the next section we will look at how to use ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/typedefs"},"type definitions")," to\nproperly define container nesting relationships."))}d.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),s=n(86010),o=n(51048),l=n(33609),u=n(1943),i=n(72957);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:d,groupId:b,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,l.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==x&&!g.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:B}=(0,u.U)(),[v,I]=(0,r.useState)(x),S=[],{blockElementScrollPositionUntilNextRender:k}=(0,i.o5)();if(null!=b){const e=h[b];null!=e&&e!==v&&g.some((t=>t.value===e))&&I(e)}const T=e=>{const t=e.currentTarget,n=S.indexOf(t),a=g[n].value;a!==v&&(k(t),I(a),null!=b&&B(b,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},y)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>S.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);