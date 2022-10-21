"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34462],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(i),f=a,p=u["".concat(d,".").concat(f)]||u[f]||h[f]||r;return i?n.createElement(p,o(o({ref:t},c),{},{components:i})):n.createElement(p,o({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},14956:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={description:"Glossary for IOTA Identity, defines the terms used in this specification and throughout decentralized identifier infrastructure.",image:"/img/Identity_icon.png",keywords:["W3C","terminology","IOTA","verification method","verifiable data registry","reference"]},o="Glossary",s={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Glossary for IOTA Identity, defines the terms used in this specification and throughout decentralized identifier infrastructure.",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/next/identity.rs/glossary",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/glossary.md",tags:[],version:"current",frontMatter:{description:"Glossary for IOTA Identity, defines the terms used in this specification and throughout decentralized identifier infrastructure.",image:"/img/Identity_icon.png",keywords:["W3C","terminology","IOTA","verification method","verifiable data registry","reference"]},sidebar:"docs",previous:{title:"Revocation Bitmap",permalink:"/next/identity.rs/specs/revocation_bitmap_2022"},next:{title:"Contribute",permalink:"/next/identity.rs/contribute"}},d={},l=[{value:"W3C Terminology",id:"w3c-terminology",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Decentralized Identifier (DID)",id:"decentralized-identifier-did",level:3},{value:"Decentralized Identity Management",id:"decentralized-identity-management",level:3},{value:"DID Controller",id:"did-controller",level:3},{value:"DID Delegate",id:"did-delegate",level:3},{value:"DID Document",id:"did-document",level:3},{value:"DID Fragment",id:"did-fragment",level:3},{value:"DID Method",id:"did-method",level:3},{value:"DID Path",id:"did-path",level:3},{value:"DID Query",id:"did-query",level:3},{value:"DID Resolution",id:"did-resolution",level:3},{value:"DID Resolver",id:"did-resolver",level:3},{value:"DID Scheme",id:"did-scheme",level:3},{value:"DID Subject",id:"did-subject",level:3},{value:"DID URL",id:"did-url",level:3},{value:"DID URL Dereferencing",id:"did-url-dereferencing",level:3},{value:"IOTA Terminology",id:"iota-terminology",level:2},{value:"Distributed Ledger (DLT)",id:"distributed-ledger-dlt",level:3},{value:"Public Key Description",id:"public-key-description",level:3},{value:"Resource",id:"resource",level:3},{value:"Representation",id:"representation",level:3},{value:"Service",id:"service",level:3},{value:"Service Endpoint",id:"service-endpoint",level:3},{value:"Uniform Resource Identifier (URI)",id:"uniform-resource-identifier-uri",level:3},{value:"Verifiable Credential",id:"verifiable-credential",level:3},{value:"Verifiable Data Registry",id:"verifiable-data-registry",level:3},{value:"Verifiable Timestamp",id:"verifiable-timestamp",level:3},{value:"Verification Method",id:"verification-method",level:3},{value:"Verification Relationship",id:"verification-relationship",level:3},{value:"Universally Unique Identifier (UUID)",id:"universally-unique-identifier-uuid",level:3}],c={toc:l};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,"This section defines the terms used in this specification, ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#terminology"},"sourced from W3"),", and throughout decentralized identifier infrastructure. A link to these terms is included whenever they appear in this specification."),(0,a.kt)("p",null,"The first part of the glossary describes the terminology by the W3C. The ",(0,a.kt)("a",{parentName:"p",href:"#iota-terminology"},"second describes")," the terminology for IOTA-related topics."),(0,a.kt)("h2",{id:"w3c-terminology"},"W3C Terminology"),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"A process (typically some type of protocol) by which an entity can prove it has a specific attribute or controls a specific secret using one or more verification methods. With DIDs, a common example would be proving control of the private key associated with a public key published in a DID document."),(0,a.kt)("h3",{id:"decentralized-identifier-did"},"Decentralized Identifier (DID)"),(0,a.kt)("p",null,"A globally unique persistent identifier that does not require a centralized registration authority because it is generated or registered cryptographically. The generic format of a DID is defined in the DID Core specification. A specific DID scheme is defined in a DID method specification. Many, but not all, DID methods make use of distributed ledger technology (DLT) or some other form of decentralized network."),(0,a.kt)("h3",{id:"decentralized-identity-management"},"Decentralized Identity Management"),(0,a.kt)("p",null,"An type of identity management that is based on the use of decentralized identifiers. Decentralized identity management extends authority for identifier generation, registration, and assignment beyond traditional roots of trust such as X.500 directory services, the Domain Name System, and most national ID systems."),(0,a.kt)("h3",{id:"did-controller"},"DID Controller"),(0,a.kt)("p",null,"An entity that has the capability to make changes to a DID document. A DID may have more than one DID controller. The DID controller(s) can be denoted by the optional controller property at the top level of the DID document. Note that one DID controller may be the DID subject."),(0,a.kt)("h3",{id:"did-delegate"},"DID Delegate"),(0,a.kt)("p",null,"An entity to whom a DID controller has granted permission to use a verification method associated with a DID via a DID document. For example, a parent who controls a child's DID document might permit the child to use their personal device for authentication purposes. In this case, the child is the DID delegate. The child's personal device would contain the private cryptographic material enabling the child to authenticate using the DID. However, the child may not be permitted to add other personal devices without the parent's permission."),(0,a.kt)("h3",{id:"did-document"},"DID Document"),(0,a.kt)("p",null,"A set of data describing the DID subject, including mechanisms, such as public keys and pseudonymous biometrics, that the DID subject or a DID delegate can use to authenticate itself and prove its association with the DID. A DID document may also contain other attributes or claims describing the DID subject. A DID document may have one or more different representations as defined in \xa7 6. Core Representations or in the W3C DID Specification Registries ","[DID-SPEC-REGISTRIES]","."),(0,a.kt)("h3",{id:"did-fragment"},"DID Fragment"),(0,a.kt)("p",null,"The portion of a DID URL that follows the first hash sign character (#). DID fragment syntax is identical to URI fragment syntax."),(0,a.kt)("h3",{id:"did-method"},"DID Method"),(0,a.kt)("p",null,"A definition of how a specific DID scheme must be implemented to work with a specific verifiable data registry. A DID method is defined by a DID method specification, which must specify the precise operations by which DIDs are created, resolved and deactivated, where DID documents are written and updated. See \xa7 7. Methods."),(0,a.kt)("h3",{id:"did-path"},"DID Path"),(0,a.kt)("p",null,"The portion of a DID URL that begins with and includes the first forward-slash (/) character and ends with either a question mark (?) character or a fragment hash sign (#) character (or the end of the DID URL). DID path syntax is identical to URI path syntax. See \xa7 3.2.3 Path."),(0,a.kt)("h3",{id:"did-query"},"DID Query"),(0,a.kt)("p",null,"The portion of a DID URL that follows and includes the first question mark character (?). DID query syntax is identical to URI query syntax. See \xa7 3.2.4 Query."),(0,a.kt)("h3",{id:"did-resolution"},"DID Resolution"),(0,a.kt)("p",null,'The function that takes, as an input, a DID and a set of input metadata and returns a DID document in a conforming representation plus additional metadata. This function relies on the "Read" operation of the applicable DID method. The inputs and outputs of this function are defined in \xa7 8. Resolution.'),(0,a.kt)("h3",{id:"did-resolver"},"DID Resolver"),(0,a.kt)("p",null,"A DID resolver is a software or hardware component that performs the DID resolution function by taking a DID as input and producing a conforming DID document as output."),(0,a.kt)("h3",{id:"did-scheme"},"DID Scheme"),(0,a.kt)("p",null,'The formal syntax of a decentralized identifier. The generic DID scheme begins with the prefix "did:" as defined in the section of the DID Core specification. Each DID method specification must define a specific DID scheme that works with that particular DID method. In a specific DID method scheme, the DID method name must follow the first colon and terminate with the second colon, such as "did:example:".'),(0,a.kt)("h3",{id:"did-subject"},"DID Subject"),(0,a.kt)("p",null,"The entity identified by a DID and described by a DID document. A DID has exactly one DID subject. Anything can be a DID subject: a person, group, organization, physical thing, digital thing, logical thing, and so on."),(0,a.kt)("h3",{id:"did-url"},"DID URL"),(0,a.kt)("p",null,"A DID plus any additional syntactic component that conforms to the definition in \xa7 3.2 DID URL Syntax. This includes an optional DID path, optional DID query (and its leading ? character), and optional DID fragment (and its leading # character)."),(0,a.kt)("h3",{id:"did-url-dereferencing"},"DID URL Dereferencing"),(0,a.kt)("p",null,"The function that takes as its input a DID URL, a DID document, plus a set of dereferencing options, and returns a resource. This resource may be a DID document plus additional metadata, or it may be a secondary resource contained within the DID document, or it may be a resource entirely external to the DID document. If the function begins with a DID URL, it uses the DID resolution function to fetch a DID document indicated by the DID contained within the DID URL. The dereferencing function can then perform additional processing on the DID document to return the dereferenced resource indicated by the DID URL. The inputs and outputs of this function are defined in \xa7 8.2 DID URL Dereferencing."),(0,a.kt)("h2",{id:"iota-terminology"},"IOTA Terminology"),(0,a.kt)("h3",{id:"distributed-ledger-dlt"},"Distributed Ledger (DLT)"),(0,a.kt)("p",null,"A distributed database in which the various nodes use a consensus protocol to maintain a shared ledger in which each transaction is cryptographically signed and chained to the previous transaction."),(0,a.kt)("h3",{id:"public-key-description"},"Public Key Description"),(0,a.kt)("p",null,"A data object contained inside a DID document that contains all the metadata necessary to use a public key or verification key."),(0,a.kt)("h3",{id:"resource"},"Resource"),(0,a.kt)("p",null,"As defined by ","[RFC3986]",": \"...the term 'resource' is used in a general sense for whatever might be identified by a URI.\" Similarly, any resource may serve as a DID subject identified by a DID."),(0,a.kt)("h3",{id:"representation"},"Representation"),(0,a.kt)("p",null,"As defined for HTTP by ","[RFC7231]",': "information that is intended to reflect a past, current, or desired state of a given resource, in a format that can be readily communicated via the protocol, and that consists of a set of representation metadata and a potentially unbounded stream of representation data." A DID document is a representation of information describing a DID subject. The \xa7 6. Core Representations section of the DID Core specification defines several representation formats for a DID document.'),(0,a.kt)("h3",{id:"service"},"Service"),(0,a.kt)("p",null,"A means of communicating or interacting with the DID subject or associated entities via one or more service endpoints. Examples include discovery services, agent services, social networking services, file storage services, and verifiable credential repository services."),(0,a.kt)("h3",{id:"service-endpoint"},"Service Endpoint"),(0,a.kt)("p",null,"A network address (such as an HTTP URL) at which a service operates on behalf of a DID subject."),(0,a.kt)("h3",{id:"uniform-resource-identifier-uri"},"Uniform Resource Identifier (URI)"),(0,a.kt)("p",null,"The standard identifier format for all resources on the World Wide Web as defined by ","[RFC3986]",". A DID is a type of URI scheme."),(0,a.kt)("h3",{id:"verifiable-credential"},"Verifiable Credential"),(0,a.kt)("p",null,"A standard data model and representation format for cryptographically-verifiable digital credentials as defined by the W3C ","[VC-DATA-MODEL]","."),(0,a.kt)("h3",{id:"verifiable-data-registry"},"Verifiable Data Registry"),(0,a.kt)("p",null,"A system that facilitates the creation, verification, updating, or deactivation of decentralized identifiers and DID documents. A verifiable data registry may also be used for other cryptographically-verifiable data structures such as verifiable credentials. For more information, see ","[VC-DATA-MODEL]","."),(0,a.kt)("h3",{id:"verifiable-timestamp"},"Verifiable Timestamp"),(0,a.kt)("p",null,"A verifiable timestamp enables a third-party to verify that a data object existed at a specific moment in time and that it has not been modified or corrupted since that moment in time. If the data integrity were to be reasonably modified or corrupted since that moment in time, the timestamp is not verifiable."),(0,a.kt)("h3",{id:"verification-method"},"Verification Method"),(0,a.kt)("p",null,"A set of parameters that can be used together with a process or protocol to independently verify a proof. For example, a public key can be used as a verification method with respect to a digital signature; in such usage, it verifies that the signer possessed the associated private key."),(0,a.kt)("p",null,'"Verification" and "proof" in this definition are intended to apply broadly. For example, a public key might be used during Diffie-Hellman key exchange to negotiate a shared symmetric key for encryption. This guarantees the integrity of the key agreement process. It is thus another type of verification method, even though descriptions of the process might not use the words "verification" or "proof."'),(0,a.kt)("h3",{id:"verification-relationship"},"Verification Relationship"),(0,a.kt)("p",null,"An expression of the relationship between the DID subject and a verification method. An example of a verification relationship is \xa7 5.4.1 authentication."),(0,a.kt)("h3",{id:"universally-unique-identifier-uuid"},"Universally Unique Identifier (UUID)"),(0,a.kt)("p",null,"A type of globally unique identifier defined by ","[RFC4122]",". UUIDs are similar to DIDs in that they do not require a centralized registration authority. UUIDs differ from DIDs in that they are not resolvable or cryptographically-verifiable.\nIn addition to the terminology above, this specification also uses terminology from the ","[INFRA]"," specification to formally define the abstract data model. When ","[INFRA]"," terminology is used, such as string, ordered set, and map, it is linked directly to that specification."))}h.isMDXComponent=!0}}]);