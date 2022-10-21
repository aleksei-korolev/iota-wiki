"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={description:"Create a static GoShimmer identity using a random 32byte autopeering seed, open ssl or rand-seed.",image:"/img/logo/goshimmer_light.png",keywords:["seed","static","identity","tools","base64"]},a="Create a Static Identity",s={unversionedId:"tutorials/static_identity",id:"tutorials/static_identity",title:"Create a Static Identity",description:"Create a static GoShimmer identity using a random 32byte autopeering seed, open ssl or rand-seed.",source:"@site/shimmer/external/goshimmer/documentation/docs/tutorials/static_identity.md",sourceDirName:"tutorials",slug:"/tutorials/static_identity",permalink:"/shimmer/goshimmer/tutorials/static_identity",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/tutorials/static_identity.md",tags:[],version:"current",frontMatter:{description:"Create a static GoShimmer identity using a random 32byte autopeering seed, open ssl or rand-seed.",image:"/img/logo/goshimmer_light.png",keywords:["seed","static","identity","tools","base64"]},sidebar:"docs",previous:{title:"Manual Peering",permalink:"/shimmer/goshimmer/tutorials/manual_peering"},next:{title:"Setting up Monitoring Dashboard",permalink:"/shimmer/goshimmer/tutorials/monitoring"}},l={},d=[],m={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-static-identity"},"Create a Static Identity"),(0,o.kt)("p",null,"To create a static GoShimmer identity, you will need to generate a random 32 byte seed. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"rand-seed")," tool we provide under the GoShimmer folder ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/rand-seed"),".\nFor example, by running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openssl rand -base64 32"),": generates a random 32 byte sequence encoded in base64. The output should look like: ",(0,o.kt)("inlineCode",{parentName:"li"},"gP0uRLhwBG2yJJmnLySX4S4R5G250Z3dbN9yBR6VSyY=")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go run main.go")," under the GoShimmer folder ",(0,o.kt)("inlineCode",{parentName:"li"},"tools/rand-seed"),": generates a random 32 byte sequence encoded in both base64 and base58. The output is written into the file ",(0,o.kt)("inlineCode",{parentName:"li"},"random-seed.txt")," and should look like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"base64:nQW9MhNSLpIqBUiZe90XI320g680zxFoB1UIK09Acus=\nbase58:BZx5tDLymckUV5wiswXJtajgQrBEzTBBRR4uGfr1YNGS\n")),(0,o.kt)("p",null,"You can now copy one of that strings (together with the encoding type prefix) and paste it into the GoShimmer ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"node": {\n  "seed":"base64:gP0uRLhwBG2yJJmnLySX4S4R5G250Z3dbN9yBR6VSyY=",\n  "disablePlugins": [],\n  "enablePlugins": []\n},\n')),(0,o.kt)("p",null,"Or if you are using docker and prefer to set this with a command, you can define the same by changing the GoShimmer docker-compose.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'goshimmer:\n  network_mode: host\n  image: iotaledger/goshimmer\n  build:\n    context: ./\n    dockerfile: Dockerfile\n  container_name: iota_goshimmer\n  command: >\n    --node.enablePlugins=prometheus\n    --node.seed="base64:gP0uRLhwBG2yJJmnLySX4S4R5G250Z3dbN9yBR6VSyY="\n    # Mount volumes:\n    # make sure to give read/write access to the folder ./mainnetdb (e.g., chmod -R 777 ./mainnetdb)\n    # optionally, you can mount a config.json into the container\n    volumes:\n      - ./mainnetdb/:/app/mainnetdb/:rw\n      - ./config.json:/app/config.json:ro\n    # Expose ports:\n    # gossip:       - "14666:14666/tcp"\n    # autoPeering:  - "14626:14626/udp"\n    # webAPI:       - "8080:8080/tcp"\n    # dashboard:    - "8081:8081/tcp"\n    ports:\n      - "14666:14666/tcp"\n      - "14626:14626/udp"\n      - "9311:9311/tcp" # prometheus exporter\n      - "8080:8080/tcp" # webApi\n      - "8081:8081/tcp" # dashboard\n')))}c.isMDXComponent=!0}}]);