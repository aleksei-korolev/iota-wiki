"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[63826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",image:"/img/Banner/banner_hornet_using_docker.png",keywords:["IOTA Node","HORNET Node","Docker","Install","Run","macOS","Windows","how to"]},i="Install HORNET using Docker",l={unversionedId:"how_tos/using_docker",id:"how_tos/using_docker",title:"Install HORNET using Docker",description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",source:"@site/next/external/hornet/documentation/docs/how_tos/using_docker.md",sourceDirName:"how_tos",slug:"/how_tos/using_docker",permalink:"/next/hornet/how_tos/using_docker",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/develop/documentation/next/external/hornet/documentation/docs/how_tos/using_docker.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",image:"/img/Banner/banner_hornet_using_docker.png",keywords:["IOTA Node","HORNET Node","Docker","Install","Run","macOS","Windows","how to"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/hornet/getting_started/"},next:{title:"Post-installation",permalink:"/next/hornet/how_tos/post_installation"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Download the latest release",id:"download-the-latest-release",level:2},{value:"Prepare",id:"prepare",level:2},{value:"1. Setup Environment",id:"1-setup-environment",level:3},{value:"1.1 HTTPS",id:"11-https",level:4},{value:"1.2 HTTP",id:"12-http",level:4},{value:"2. Setup neighbors",id:"2-setup-neighbors",level:3},{value:"3. Create the <code>data</code> folder",id:"3-create-the-data-folder",level:3},{value:"4. Set dashboard credentials",id:"4-set-dashboard-credentials",level:3},{value:"5. Enable additional monitoring",id:"5-enable-additional-monitoring",level:3},{value:"6. Enable Wasp node",id:"6-enable-wasp-node",level:3},{value:"Run",id:"run",level:2},{value:"Starting the node",id:"starting-the-node",level:3},{value:"HTTPS",id:"https",level:4},{value:"HTTP",id:"http",level:4},{value:"Displaying Log Output",id:"displaying-log-output",level:3},{value:"Stopping the node",id:"stopping-the-node",level:3},{value:"Tools",id:"tools",level:3},{value:"JWT Auth",id:"jwt-auth",level:2},{value:"INX",id:"inx",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-hornet-using-docker"},"Install HORNET using Docker"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HORNET Node using Docker",src:n(78532).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"This guide represents the recommended setup to run a HORNET node.\nIt includes everything required to setup a public node accessible by wallets and applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet"},"HORNET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://traefik.io"},"Traefik")," - Reverse proxy using SSL certificates to secure access to the node API and dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")," - Metrics scraper configured to collect all metrics from HORNET and INX extensions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com"},"Grafana")," - Data visualizer that can be used to display the metrics collected by Prometheus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-dashboard"},"inx-dashboard")," - Node dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-dashboard"},"inx-indexer")," - Indexer extension for wallets and applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-mqtt"},"inx-mqtt")," - MQTT extension providing the Event API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-participation"},"inx-participation")," - Participation extension providing on-tangle-voting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-poi"},"inx-poi")," - Extention to generate proofs of inclusion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-spammer"},"inx-spammer")," - Network spammer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp"},"wasp")," - L2 Node for IOTA Smart Contracts.")),(0,o.kt)("p",null,"We only recommend running a node on hosted servers and not on personal computers.\nPlease take into consideration the points explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/nodes/explanations/security_101#securing-your-device"},"Security 101"),"."),(0,o.kt)("p",null,"HORNET Docker images (amd64/x86_64 and arm64 architecture) are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/hornet"},"iotaledger/hornet")," Docker hub."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A recent release of Docker enterprise or community edition. You can find installation instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"official Docker documentation"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose CLI plugin"),"."),(0,o.kt)("li",{parentName:"ol"},"A registered domain name pointing to the public IP address of your server. ",(0,o.kt)("em",{parentName:"li"},"(optional if not using HTTPS)")),(0,o.kt)("li",{parentName:"ol"},"Opening up the following ports in your servers firewall:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"15600 TCP")," - Used for HORNET gossip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"14626 UDP")," - Used for HORNET autopeering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"80 TCP")," - Used for HTTP. ",(0,o.kt)("em",{parentName:"li"},"(can be changed, see below)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"443 TCP")," - Used for HTTPS. ",(0,o.kt)("em",{parentName:"li"},"(optional if not using HTTPS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4000 UDP")," - Used for Wasp gossip. ",(0,o.kt)("em",{parentName:"li"},"(optional if not using Wasp)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"5550 TCP")," - Used for Wasp nanomsg events. ",(0,o.kt)("em",{parentName:"li"},"(optional if not using Wasp)"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl"),".")),(0,o.kt)("h2",{id:"download-the-latest-release"},"Download the latest release"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": The commands assume you are using Linux.")),(0,o.kt)("p",null,"Once you have completed all the installation ",(0,o.kt)("a",{parentName:"p",href:"#requirements"},"requirements"),", you can download the latest release by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir hornet\ncd hornet\ncurl -L -O "https://github.com/iotaledger/node-docker-setup/releases/download/v1.0.0-rc.1/node-docker-setup-v1.0.0-rc.1.tar.gz"\ntar -zxf node-docker-setup-v1.0.0-rc.1.tar.gz\n')),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("h3",{id:"1-setup-environment"},"1. Setup Environment"),(0,o.kt)("p",null,"You can configure your node to either use HTTP or HTTPS. For publicly exposed nodes we heavily recommend using HTTPS."),(0,o.kt)("h4",{id:"11-https"},"1.1 HTTPS"),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," add the following to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"COMPOSE_FILE=docker-compose.yml:docker-compose-https.yml\n\nACME_EMAIL=your-email@example.com\n\nNODE_HOST=node.your-domain.com\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"your-email@example.com")," with the e-mail used for issuing a ",(0,o.kt)("a",{parentName:"li",href:"https://letsencrypt.org"},"Let's Encrypt")," SSL certificate."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"node.your-domain.com")," with the domain pointing to your public IP address as described in the ",(0,o.kt)("a",{parentName:"li",href:"#requirements"},"requirements"),".")),(0,o.kt)("h4",{id:"12-http"},"1.2 HTTP"),(0,o.kt)("p",null,"By default this setup will expose the Traefik reverse proxy on the default HTTP port ",(0,o.kt)("inlineCode",{parentName:"p"},"80"),".\nIf you want to change the port to a different value you can create a file named  ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and add the following to e.g. expose it over port ",(0,o.kt)("inlineCode",{parentName:"p"},"9000"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP_PORT=9000\n")),(0,o.kt)("h3",{id:"2-setup-neighbors"},"2. Setup neighbors"),(0,o.kt)("p",null,"Add your HORNET neighbor addresses to the ",(0,o.kt)("inlineCode",{parentName:"p"},"peering.json")," file."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step is recommended, but optional if you are using autopeering.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/next/hornet/references/peering"},"peering")," for more information.")),(0,o.kt)("h3",{id:"3-create-the-data-folder"},"3. Create the ",(0,o.kt)("inlineCode",{parentName:"h3"},"data")," folder"),(0,o.kt)("p",null,"All files used by HORNET, the INX extensions, Wasp, Traefik & co will be stored in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),".\nDocker image runs under user with user id 65532 and group id 65532, so this directory needs to have the correct permissions to be accessed by the containers.\nTo create this directory with correct permissions run the contained script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./prepare_docker.sh\n")),(0,o.kt)("h3",{id:"4-set-dashboard-credentials"},"4. Set dashboard credentials"),(0,o.kt)("p",null,"To access your HORNET dashboard, a set of credentials need to be configured.\nRun the following command to generate a password hash and salt for the dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose run hornet tool pwd-hash\n")),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if you did not create it already and add the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DASHBOARD_PASSWORD=0000000000000000000000000000000000000000000000000000000000000000\nDASHBOARD_SALT=0000000000000000000000000000000000000000000000000000000000000000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"DASHBOARD_PASSWORD")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"DASHBOARD_SALT")," values in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the result of the previous command.")),(0,o.kt)("p",null,"If you want to change the default ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," username, you can add this line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DASHBOARD_USERNAME=someotherusername\n")),(0,o.kt)("h3",{id:"5-enable-additional-monitoring"},"5. Enable additional monitoring"),(0,o.kt)("p",null,"To enable additional monitoring (cAdvisor, Prometheus, Grafana), the docker compose profile needs to be configured.\nCreate a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if you did not create it already and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"COMPOSE_PROFILES=monitoring\n")),(0,o.kt)("h3",{id:"6-enable-wasp-node"},"6. Enable Wasp node"),(0,o.kt)("p",null,"To also run a Wasp node, the docker compose profile needs to be configured.\nCreate a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if you did not create it already and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"COMPOSE_PROFILES=wasp\n")),(0,o.kt)("p",null,"If you already enabled the ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring")," profile, modify the profiles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"COMPOSE_PROFILES=monitoring,wasp\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("h3",{id:"starting-the-node"},"Starting the node"),(0,o.kt)("p",null,"You can start the HORNET node and INX extensions by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up -d\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d")," Instructs Docker to start the containers in the background.")),(0,o.kt)("h4",{id:"https"},"HTTPS"),(0,o.kt)("p",null,"After starting the node you will be able to access your services at the following endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/api/routes")),(0,o.kt)("li",{parentName:"ul"},"HORNET Dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/dashboard")),(0,o.kt)("li",{parentName:"ul"},"Grafana: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/grafana"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "monitoring" profile)')),(0,o.kt)("li",{parentName:"ul"},"Wasp API: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/wasp/api"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "wasp" profile)')),(0,o.kt)("li",{parentName:"ul"},"Wasp Dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/wasp/dashboard"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "wasp" profile)'))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"   After starting your node for the first time, please change the default grafana credentials",(0,o.kt)("br",null),"\nUser: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),(0,o.kt)("br",null),"\nPassword: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"))),(0,o.kt)("p",null,"You can configure your wallet software to use ",(0,o.kt)("inlineCode",{parentName:"p"},"https://node.your-domain.com")),(0,o.kt)("h4",{id:"http"},"HTTP"),(0,o.kt)("p",null,"After starting the node you will be able to access your services at the following endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost/api/routes")),(0,o.kt)("li",{parentName:"ul"},"HORNET Dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost/dashboard")),(0,o.kt)("li",{parentName:"ul"},"Grafana: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost/grafana"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "monitoring" profile)')),(0,o.kt)("li",{parentName:"ul"},"Wasp API: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost/wasp/api"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "wasp" profile)')),(0,o.kt)("li",{parentName:"ul"},"Wasp Dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost/wasp/dashboard"),"  ",(0,o.kt)("em",{parentName:"li"},'(optional if using "wasp" profile)'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"   If you changed the default ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_PORT")," value, you will need to add the port to the urls.")),(0,o.kt)("p",null,"You can configure your wallet software to use ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")),(0,o.kt)("h3",{id:"displaying-log-output"},"Displaying Log Output"),(0,o.kt)("p",null,"You can display the HORNET logs by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose logs -f hornet\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f"),"\nInstructs Docker to continue displaying the log to ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," until CTRL+C is pressed.")),(0,o.kt)("h3",{id:"stopping-the-node"},"Stopping the node"),(0,o.kt)("p",null,"You can stop the HORNET node and INX extensions by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose down\n")),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"To access the tools provided inside HORNET you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool <tool-name>\n")),(0,o.kt)("p",null,"To see the list of tools included run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool -h\n")),(0,o.kt)("h2",{id:"jwt-auth"},"JWT Auth"),(0,o.kt)("p",null,"To generate a JWT token to be used to access protected routes you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool jwt-api --databasePath data/p2pstore\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you changed the ",(0,o.kt)("inlineCode",{parentName:"li"},"restAPI.jwtAuth.salt")," value in the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),", then you need to pass that value as a parameter as ",(0,o.kt)("inlineCode",{parentName:"li"},"--salt <restAPI.jwtAuth.salt value from your config.json>"))),(0,o.kt)("h2",{id:"inx"},"INX"),(0,o.kt)("p",null,"This setup includes the INX extensions listed at the beginning of this guide.\nIf you want to disable certain extensions you can comment out the different services in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and restart the node."),(0,o.kt)("h1",{id:"more-information"},"More Information"),(0,o.kt)("p",null,"For more information look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/node-docker-setup"},"Github repository")))}u.isMDXComponent=!0},78532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner_hornet_using_docker-feb9ddd072b8a345152bf4e2a70b040b.png"}}]);