"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={description:"Discover how Stronghold models threats using STRIDE and how the different threat levels are handled",image:"/img/logo/Stronghold_icon.png",keywords:["threat modeling","security","explanation"]},i="Stronghold Threat Modeling",o={unversionedId:"reference/specs/threat-modeling",id:"reference/specs/threat-modeling",title:"Stronghold Threat Modeling",description:"Discover how Stronghold models threats using STRIDE and how the different threat levels are handled",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/reference/specs/threat-modeling.md",sourceDirName:"reference/specs",slug:"/reference/specs/threat-modeling",permalink:"/shimmer/stronghold.rs/reference/specs/threat-modeling",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/reference/specs/threat-modeling.md",tags:[],version:"current",frontMatter:{description:"Discover how Stronghold models threats using STRIDE and how the different threat levels are handled",image:"/img/logo/Stronghold_icon.png",keywords:["threat modeling","security","explanation"]},sidebar:"mySidebar",previous:{title:"Stronghold Engineering Specification",permalink:"/shimmer/stronghold.rs/reference/specs/engineering"},next:{title:"Contribute to the project",permalink:"/shimmer/stronghold.rs/contribute"}},s={},d=[{value:"Stronghold\u2019s Model",id:"strongholds-model",level:2},{value:"Typical use of Stronghold:",id:"typical-use-of-stronghold",level:3},{value:"Typical use of Stronghold",id:"typical-use-of-stronghold-1",level:3},{value:"Model",id:"model",level:3},{value:"Assets",id:"assets",level:2},{value:"High Importance",id:"high-importance",level:3},{value:"Mid Importance",id:"mid-importance",level:3},{value:"Low Importance",id:"low-importance",level:3},{value:"Attack Surface",id:"attack-surface",level:2},{value:"Potential threats STRIDE",id:"potential-threats-stride",level:2},{value:"Level 1: Procedure API",id:"level-1-procedure-api",level:3},{value:"Level 2: Permanent Storage, File System",id:"level-2-permanent-storage-file-system",level:3},{value:"Level 3: Memory",id:"level-3-memory",level:3},{value:"Level 4: Side-channels",id:"level-4-side-channels",level:3}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stronghold-threat-modeling"},"Stronghold Threat Modeling"),(0,n.kt)("p",null,"As a security software, Stronghold prevents attackers from accessing the secrets that it stores.\nThreat modeling is a systematic approach that tries to assess all the potential\nattack scenarios on software."),(0,n.kt)("p",null,"There are multiple steps to this process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#model"},"Model your software"),"."),(0,n.kt)("li",{parentName:"ol"},"Define the ",(0,n.kt)("a",{parentName:"li",href:"#assets"},"assets")," and security property you protect."),(0,n.kt)("li",{parentName:"ol"},"List ",(0,n.kt)("a",{parentName:"li",href:"#potential-threats-stride"},"potential threats")," using existing classification (STRIDE in our case)."),(0,n.kt)("li",{parentName:"ol"},"Propose mitigations to those threats")),(0,n.kt)("h2",{id:"strongholds-model"},"Stronghold\u2019s Model"),(0,n.kt)("p",null,"Stronghold is simple in concept; it is used to store secrets.\nThese secrets should never be revealed, even to their owners.\nUsers can interact with secrets through controlled methods called ",(0,n.kt)("a",{parentName:"p",href:"./../../explanations/procedures"},"procedures"),"."),(0,n.kt)("h3",{id:"typical-use-of-stronghold"},"Typical use of Stronghold:"),(0,n.kt)("h3",{id:"typical-use-of-stronghold-1"},"Typical use of Stronghold"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./../../how_tos/cli/generate_key_pair"},"Generate a key in Stronghold"),"."),(0,n.kt)("li",{parentName:"ol"},"Use Stronghold procedures to use the key for encryption, decryption, signatures, etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./../../how_tos/cli/create_snapshot"},"Store Stronghold state")," for future usage in permanent storage called ",(0,n.kt)("a",{parentName:"li",href:"../structure/engine/snapshot"},"Snapshot"),".")),(0,n.kt)("h3",{id:"model"},"Model"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stronghold model",src:a(53066).Z,width:"521",height:"311"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users can only interact with secrets through the procedures API."),(0,n.kt)("li",{parentName:"ul"},"Users can only use procedures on the secrets they own"),(0,n.kt)("li",{parentName:"ul"},"Procedures cannot reveal/temper secrets (can delete them though) "),(0,n.kt)("li",{parentName:"ul"},"Secrets can be kept permanently in an encrypted form in a Snapshot (filesystem)")),(0,n.kt)("h2",{id:"assets"},"Assets"),(0,n.kt)("p",null,"The sole asset of Stronghold is its secrets."),(0,n.kt)("h3",{id:"high-importance"},"High Importance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confidentiality"),": Secrets are never revealed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integrity"),": Secrets cannot be modified, only deleted."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authentication"),": Only authorized users can interact with secrets,")),(0,n.kt)("h3",{id:"mid-importance"},"Mid Importance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Availability"),": A user can interact with its secrets anytime.")),(0,n.kt)("h3",{id:"low-importance"},"Low Importance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Least privilege"),": There are no privileged users in Stronghold."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Non-repudiation"),": A user can't disprove that it has used a procedure on a secret.")),(0,n.kt)("h2",{id:"attack-surface"},"Attack Surface"),(0,n.kt)("p",null,"Stronghold defends against multiple types of attackers.\nLevels also represent how likely it is for an attacker to appear."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level 1"),": ",(0,n.kt)("a",{parentName:"li",href:"#level-1-procedure-api"},"Procedure API"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level 2"),": ",(0,n.kt)("a",{parentName:"li",href:"#level-2-permanent-storage-file-system"},"Permanent storage: Snapshot in the filesystem"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level 3"),": ",(0,n.kt)("a",{parentName:"li",href:"#level-3-memory"},"Memory"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The attacker can read memory."),(0,n.kt)("li",{parentName:"ul"},"Through cold-boot attacks or memory dumps."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level 4"),": ",(0,n.kt)("a",{parentName:"li",href:"#level-4-side-channels"},"Side-channels"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Timing attacks."),(0,n.kt)("li",{parentName:"ul"},"Power consumption.")))),(0,n.kt)("p",null,"A type of attacker that we don't represent here but is also important comes from potential vulnerabilities in the tools used to build the software."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bonus"),": Tools:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Packages."),(0,n.kt)("li",{parentName:"ul"},"Rust language."),(0,n.kt)("li",{parentName:"ul"},"Compilation."),(0,n.kt)("li",{parentName:"ul"},"Crypto algorithms used.")))),(0,n.kt)("h2",{id:"potential-threats-stride"},"Potential threats STRIDE"),(0,n.kt)("p",null,"We use the ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/Threat_Modeling_Process"},"STRIDE")," threats classification.\nStride is applied to all the types of attacks listed ",(0,n.kt)("a",{parentName:"p",href:"#attack-surface"},"above"),".\nMentions of ",(0,n.kt)("strong",{parentName:"p"},"WIP"),' means that it is still "Work In Progress".'),(0,n.kt)("h3",{id:"level-1-procedure-api"},"Level 1: Procedure API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Remediation"),(0,n.kt)("th",{parentName:"tr",align:null},"Severity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spoofed"),(0,n.kt)("td",{parentName:"tr",align:null},"An unauthorized user executes procedures"),(0,n.kt)("td",{parentName:"tr",align:null},"When restoring Stronghold state from a snapshot a key is required to decrypt the snapshot"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tampered"),(0,n.kt)("td",{parentName:"tr",align:null},"Secrets are tampered with using procedures"),(0,n.kt)("td",{parentName:"tr",align:null},"Procedures are developed and audited by the team so they don't modify secrets"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repudiated"),(0,n.kt)("td",{parentName:"tr",align:null},"A user is accused to have used secrets maliciously/incorrectly"),(0,n.kt)("td",{parentName:"tr",align:null},"Log all the procedures that have been processed ",(0,n.kt)("strong",{parentName:"td"},"(WIP)")),(0,n.kt)("td",{parentName:"tr",align:null},"Low")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,n.kt)("td",{parentName:"tr",align:null},"A secret is revealed through procedures"),(0,n.kt)("td",{parentName:"tr",align:null},"Procedures are developed and audited by the team to ensure they don't reveal secrets"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Spamming procedures to block the system"),(0,n.kt)("td",{parentName:"tr",align:null},"This is the responsability of the software that uses"),(0,n.kt)("td",{parentName:"tr",align:null},"Mid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elevation of Privileges"),(0,n.kt)("td",{parentName:"tr",align:null},"None, there are no privileged users in Stronghold"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"level-2-permanent-storage-file-system"},"Level 2: Permanent Storage, File System"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Remediation"),(0,n.kt)("th",{parentName:"tr",align:null},"Severity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spoofed"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"OS responsibility"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tampered"),(0,n.kt)("td",{parentName:"tr",align:null},"Files storing the secrets are modified. Secrets can be lost."),(0,n.kt)("td",{parentName:"tr",align:null},"Check the integrity of snapshot with a checksum. Keep an older snapshot to be able to restore the correct state"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repudiated"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"OS responsibility"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,n.kt)("td",{parentName:"tr",align:null},"Snapshot content is read"),(0,n.kt)("td",{parentName:"tr",align:null},"Snapshot content is encrypted"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Host file system is unavailable. Stronghold cannot commit its current state or load a previous state"),(0,n.kt)("td",{parentName:"tr",align:null},"Stronghold can continue, but can't commit"),(0,n.kt)("td",{parentName:"tr",align:null},"Mid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elevation of Privileges"),(0,n.kt)("td",{parentName:"tr",align:null},"Attacker has elevated privilege on the host machine, and can read, write or delete snapshots on the file system"),(0,n.kt)("td",{parentName:"tr",align:null},"Same case as Tampered and Info Disclosure attacks, the snapshot is encrypted and can be restored if it has a valid checksum"),(0,n.kt)("td",{parentName:"tr",align:null},"High")))),(0,n.kt)("h3",{id:"level-3-memory"},"Level 3: Memory"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Remediation"),(0,n.kt)("th",{parentName:"tr",align:null},"Severity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spoofed"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"OS responsibility"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tampered"),(0,n.kt)("td",{parentName:"tr",align:null},"Host system gets its memory corrupted. Procedures will produce wrong outputs, so original data can be lost"),(0,n.kt)("td",{parentName:"tr",align:null},"Secrets are backed by permanent a storage called Snapshot. User may use a previous snapshot to restore a previous state"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repudiated"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"OS responsibility"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,n.kt)("td",{parentName:"tr",align:null},"Secrets are revealed through reading the memory directly"),(0,n.kt)("td",{parentName:"tr",align:null},"Secrets are stored encrypted in the memory and are only decrypted for the minimum amount of time. Moreover the Boojum scheme protects encryption keys in memory."),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Memory is not accessible, preventing Stronghold from working"),(0,n.kt)("td",{parentName:"tr",align:null},"OS responsibility"),(0,n.kt)("td",{parentName:"tr",align:null},"Mid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elevation of Privileges"),(0,n.kt)("td",{parentName:"tr",align:null},"Attacker has elevated privileges on the host machine and can access the secrets in Stronghold"),(0,n.kt)("td",{parentName:"tr",align:null},"Same case as Tampered and Info Disclosure attacks, the snapshot is encrypted and can be restored if it has a valid checksum"),(0,n.kt)("td",{parentName:"tr",align:null},"High")))),(0,n.kt)("h3",{id:"level-4-side-channels"},"Level 4: Side-channels"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Attack"),(0,n.kt)("th",{parentName:"tr",align:null},"Remediation"),(0,n.kt)("th",{parentName:"tr",align:null},"Severity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spoofed"),(0,n.kt)("td",{parentName:"tr",align:null},"No potential attack"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tampered"),(0,n.kt)("td",{parentName:"tr",align:null},"Tamper memory using side-channels"),(0,n.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,n.kt)("a",{parentName:"td",href:"#level-3-memory"},"memory")," and ",(0,n.kt)("a",{parentName:"td",href:"#level-2-permanent-storage-file-system"},"storage")," tables"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repudiated"),(0,n.kt)("td",{parentName:"tr",align:null},"No potential attack"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,n.kt)("td",{parentName:"tr",align:null},"Secrets are revealed through side-channels"),(0,n.kt)("td",{parentName:"tr",align:null},"Make sure the procedure are constant in time and energy usage ",(0,n.kt)("strong",{parentName:"td"},"(WIP)"),". This also depends on the cryptographic implementation used"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Prevent normal behaviour of stronghold through side-channels such as electromagnetic waves"),(0,n.kt)("td",{parentName:"tr",align:null},"You can't protect this from software, it is the host's responsibility"),(0,n.kt)("td",{parentName:"tr",align:null},"Mid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("del",{parentName:"td"},"Elevation of Privileges")),(0,n.kt)("td",{parentName:"tr",align:null},"No potential attack"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},53066:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stronghold_model.drawio-13228153d6ad5b78c802b14a57d90f82.png"}}]);