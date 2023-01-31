"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>x,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var a=n(87462),o=(n(67294),n(3905)),r=n(34259),l=n(18679);const i={toc:[{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Run Code Examples",id:"run-code-examples",level:2}]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,o.kt)("p",null,"To run the examples, you will first need to clone the repository. You can do so by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/iota.rs.git\n")),(0,o.kt)("p",null,"Then, move into the Java examples folder by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/client/bindings/java/examples\n")),(0,o.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,o.kt)("p",null,"The IOTA Client Java library has numerous ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/client/bindings/java/examples/src"},"examples"),"\nyou can run to get acquainted with the library. You can run any example with the following\ncommand from the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".././gradlew run -Pexample=GetInfo\n")),(0,o.kt)("p",null,"To run another example of your choice, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"GetInfo")," with the name of any other example from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/java/examples/src"},"Java examples directory"),"."))}s.isMDXComponent=!0;const p={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the Examples",id:"build-the-examples",level:2},{value:"Set Up Your <code>.env</code> File",id:"set-up-your-env-file",level:3},{value:"Build All the Examples",id:"build-all-the-examples",level:3},{value:"Build a Single Example",id:"build-a-single-example",level:3},{value:"Run the Examples",id:"run-the-examples",level:2}]};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can run the examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./../getting_started/nodejs"},"Node.js Getting Started guide")," to install\nthe library."),(0,o.kt)("h2",{id:"build-the-examples"},"Build the Examples"),(0,o.kt)("h3",{id:"set-up-your-env-file"},"Set Up Your ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," File"),(0,o.kt)("p",null,"The examples use variables from a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. Though you can create your own, for the examples you can simply copy the\nexisting ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/blob/develop/bindings/nodejs/.env.example"},(0,o.kt)("inlineCode",{parentName:"a"},".env.example"))," file. You can\ndo this running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/nodejs")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,o.kt)("h3",{id:"build-all-the-examples"},"Build All the Examples"),(0,o.kt)("p",null,"Since the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," are written in\nTypeScript, they first need to be compiled to JavaScript, before you can run them. To do this run the following command\nin the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples folder")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"After you have run this command, you should have a newly create ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder within the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," folder with all the\ncompiled examples."),(0,o.kt)("h3",{id:"build-a-single-example"},"Build a Single Example"),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc exampleName.js")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," folder to compile a specific example."),(0,o.kt)("h2",{id:"run-the-examples"},"Run the Examples"),(0,o.kt)("p",null,"To run any Node.js example, you need to select any of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/nodejs/examples"},"Node.js examples")," and run it with your local\nNode.js interpreter. The following snippet runs ",(0,o.kt)("inlineCode",{parentName:"p"},"00_get_info.js")," from the project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node client/bindings/nodejs/examples/dist/00_get_info.js\n")))}u.isMDXComponent=!0;const m={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run Code Examples",id:"run-code-examples",level:2}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can run the examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./../getting_started/python"},"Python Getting Started guide")," to install\nthe library."),(0,o.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,o.kt)("p",null,"The iota.rs library has numerous ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/examples"},"examples"),"\nyou can run to get acquainted with the library. After you have followed the instructions to\n",(0,o.kt)("a",{parentName:"p",href:"./../getting_started/python#install-the-library"},"install the library"),", you can run any example with the following\ncommand from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/python")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 example/[example file name]\n")),(0,o.kt)("p",null,"Where ","[example file name]"," is one of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/examples"},"examples"),"."),(0,o.kt)("p",null,"For instance, to run\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/blob/develop/bindings/python/examples/00_get_info.py"},(0,o.kt)("inlineCode",{parentName:"a"},"00_get_info.py")," "),",\nyou should run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 examples/00_get_info.py\n")))}d.isMDXComponent=!0;const c={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Set Up Your .env file",id:"set-up-your-env-file",level:3},{value:"Run Code Examples",id:"run-code-examples",level:2},{value:"Examples List",id:"examples-list",level:2}]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can run the examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./../getting_started/rust"},"Rust Getting Started guide")," to install\nthe library."),(0,o.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,o.kt)("p",null,"To run the rust examples, you will first need to clone the repository. You can do so by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/iota.rs.git\n")),(0,o.kt)("h3",{id:"set-up-your-env-file"},"Set Up Your .env file"),(0,o.kt)("p",null,"After you have ",(0,o.kt)("a",{parentName:"p",href:"#clone-the-repository"},"cloned the project"),", you should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move into the project directory by running the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create your ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file by making a copy of the ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," file by running the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,o.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,o.kt)("p",null,"The iota.rs library has numerous ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"examples"),"\nyou can run to get acquainted with the library. After you have followed the instructions to\n",(0,o.kt)("a",{parentName:"p",href:"./../getting_started/rust#install-the-library"},"install the library"),", you can run any example with the following\ncommand from the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example node_api_core_get_health --release\n")),(0,o.kt)("h2",{id:"examples-list"},"Examples List"),(0,o.kt)("p",null,"You can replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_api_core_get_health")," by any other example from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/examples"},"Rust examples directory"),"."),(0,o.kt)("p",null,"You can get a full list of examples by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example\n")))}h.isMDXComponent=!0;const g={title:"Run Code Examples",description:"The iota.rs has multiple code examples to get you up and running in no time. However, these require a specific set up depending on your language of choice.",image:"/img/logo/iota_mark_light.png",keywords:["how to","examples","npm","cargo","yarn","java","nodejs","python","rust"]},y=void 0,f={unversionedId:"how_tos/run_how_tos",id:"how_tos/run_how_tos",title:"Run Code Examples",description:"The iota.rs has multiple code examples to get you up and running in no time. However, these require a specific set up depending on your language of choice.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/00_run_how_tos.mdx",sourceDirName:"how_tos",slug:"/how_tos/run_how_tos",permalink:"/next/iota.rs/how_tos/run_how_tos",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/00_run_how_tos.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Run Code Examples",description:"The iota.rs has multiple code examples to get you up and running in no time. However, these require a specific set up depending on your language of choice.",image:"/img/logo/iota_mark_light.png",keywords:["how to","examples","npm","cargo","yarn","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Getting Started With Python",permalink:"/next/iota.rs/getting_started/python"},next:{title:"Get Node Information",permalink:"/next/iota.rs/how_tos/get_node_info"}},b={},v=[],k={toc:v};function x(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each language has different set up instructions you need to follow to get the code examples up and running."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"RustGetCode"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsGetCode"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"PythonGetCode"})),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(s,{mdxType:"JavaCode"}))))}x.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),o=n(67294),r=n(86010),l=n(51048),i=n(33609),s=n(1943),p=n(72957);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:c,groupId:h,className:g}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[w,N]=(0,o.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==w&&(T(t),N(a),null!=h&&x(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:j,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);