"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Learn how to install and run a Hornet node using Hornet's apt repository using this tutorial. It is recommended for Linux and Ubuntu.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Ubuntu","apt","install","how to"]},i="Hornet `apt` Repository (Linux-distro specific)",l={unversionedId:"how_tos/hornet_apt_repository",id:"how_tos/hornet_apt_repository",title:"Hornet `apt` Repository (Linux-distro specific)",description:"Learn how to install and run a Hornet node using Hornet's apt repository using this tutorial. It is recommended for Linux and Ubuntu.",source:"@site/iota/external/hornet/production/documentation/docs/how_tos/hornet_apt_repository.md",sourceDirName:"how_tos",slug:"/how_tos/hornet_apt_repository",permalink:"/hornet/how_tos/hornet_apt_repository",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/production/documentation/iota/external/hornet/production/documentation/docs/how_tos/hornet_apt_repository.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a Hornet node using Hornet's apt repository using this tutorial. It is recommended for Linux and Ubuntu.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Ubuntu","apt","install","how to"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/hornet/getting_started/"},next:{title:"Using Docker",permalink:"/hornet/how_tos/using_docker"}},s={},p=[{value:"Ubuntu/Debian",id:"ubuntudebian",level:2},{value:"Start the Node",id:"start-the-node",level:3},{value:"Managing the Node",id:"managing-the-node",level:3},{value:"Displaying log output",id:"displaying-log-output",level:4},{value:"Restarting Hornet",id:"restarting-hornet",level:4},{value:"Stopping Hornet",id:"stopping-hornet",level:4},{value:"Example of Systemd Unit File",id:"example-of-systemd-unit-file",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hornet-apt-repository-linux-distro-specific"},"Hornet ",(0,r.kt)("inlineCode",{parentName:"h1"},"apt")," Repository (Linux-distro specific)"),(0,r.kt)("p",null,"Hornet developers maintain the Hornet ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," repository. It installs Hornet as a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service under a user called ",(0,r.kt)("inlineCode",{parentName:"p"},"hornet"),". "),(0,r.kt)("h2",{id:"ubuntudebian"},"Ubuntu/Debian"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the public key that is used to sign the software release:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO - https://ppa.hornet.zone/pubkey.txt | sudo apt-key add -\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the Hornet APT repository to your APT sources:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo \"deb http://ppa.hornet.zone stable main\" >> /etc/apt/sources.list.d/hornet.list'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," package lists and install Hornet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install hornet\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable hornet.service\n")))),(0,r.kt)("p",null,"You can find the Hornet configuration files under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/hornet")," directory. You can also find more details on how to configure Hornet in the ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"post installation")," article."),(0,r.kt)("p",null,"Additionally, the Environment file for configuring multiple default parameters can be found under the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/default/hornet")," directory."),(0,r.kt)("h3",{id:"start-the-node"},"Start the Node"),(0,r.kt)("p",null,"You can use  the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service to start running Hornet on the Mainnet by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service hornet start\n")),(0,r.kt)("h3",{id:"managing-the-node"},"Managing the Node"),(0,r.kt)("h4",{id:"displaying-log-output"},"Displaying log output"),(0,r.kt)("p",null,"You can display the nodes logs by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu hornet\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),": instructs ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl")," to continue displaying the log to stdout until CTRL+C is pressed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u hornet"),": filters the log output by user name")),(0,r.kt)("h4",{id:"restarting-hornet"},"Restarting Hornet"),(0,r.kt)("p",null,"You can restart ",(0,r.kt)("inlineCode",{parentName:"p"},"hornet")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart hornet\n")),(0,r.kt)("h4",{id:"stopping-hornet"},"Stopping Hornet"),(0,r.kt)("p",null,"You can stop ",(0,r.kt)("inlineCode",{parentName:"p"},"hornet")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop hornet\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Hornet uses an in-memory cache. To save all data to the underlying persistent storage, a grace period of at least 200 seconds for shutting down is required.")),(0,r.kt)("p",null,"You can find more details on how to configure Hornet in the ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"post installation")," article."),(0,r.kt)("h1",{id:"pre-built-binaries"},"Pre-built Binaries"),(0,r.kt)("p",null,"There are several pre-built binaries of Hornet for major platforms available including some default configuration JSON files."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All installation methods mentioned in this article from this point should be considered advanced for production use as you will have to prepare a system environment to run the executable as a service (in daemon mode), using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"supervisord"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the latest release compiled for your system from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/hornet/releases"},"GitHub release assets"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://github.com/iotaledger/hornet/releases/download/v1.2.2/HORNET-1.2.2_Linux_x86_64.tar.gz\n")),(0,r.kt)("p",{parentName:"li"},"Please make sure to download the binaries for your system:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HORNET-X.Y.Z_Linux_x86_64.tar.gz"),": standard 64-bit-linux-based executable, such as Ubuntu, Debian, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HORNET-X.Y.Z_Linux_arm64.tar.gz"),": executable for 64bit ARM based systems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HORNET-X.Y.Z_Windows_x86_64.zip"),": executable for Windows 10-64-bit-based systems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HORNET-X.Y.Z_macOS_x86_64.tar.gz"),": executable for macOS."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the files in a folder of your choice (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt")," on Linux):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xf HORNET-1.2.2_Linux_x86_64.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you have extracted the files, you get a main executable file. You can also find sample ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"configuration")," JSON files available in the archive (tar or zip)."))),(0,r.kt)("p",null,"You can run Hornet using ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to get all executable-related arguments by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet --help\n")),(0,r.kt)("p",null,"You can double-check that you have version 0.6.0+ deployed by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet --version\n")),(0,r.kt)("p",null,"You can run Hornet using default settings by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet\n")),(0,r.kt)("h2",{id:"example-of-systemd-unit-file"},"Example of Systemd Unit File"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," unit file. If you have extracted the Hornet executable to ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/hornet")," together with configuration files, this file should work as is. If you have extracted the Hornet executable in another location, please review the configuration and update it accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"[Unit]\nDescription=Hornet\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=hornet\nPrivateDevices=yes\nPrivateTmp=yes\nProtectSystem=full\nProtectHome=yes\n\nUser=hornet\nWorkingDirectory=/opt/hornet\nTimeoutSec=1200\nRestart=always\nExecStart=/opt/hornet/hornet\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("h1",{id:"build-from-source"},"Build From Source"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Go:")),(0,r.kt)("p",null,"You can find installation instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"official Go documentation"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install dependencies: ",(0,r.kt)("inlineCode",{parentName:"p"},"Git")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"build-essentials"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install git build-essential\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the golang/git version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go version\ngit --version\n")),(0,r.kt)("p",{parentName:"li"},"Make sure you have the latest version from ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the Hornet source code from GitHub:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/hornet.git && cd hornet && git checkout mainnet\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the Hornet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build_hornet_rocksdb.sh\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This command will build Hornet based on the latest commit from the currently chosen branch."),(0,r.kt)("li",{parentName:"ul"},"This may take a couple of minutes."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once it is compiled, then the executable file named ",(0,r.kt)("inlineCode",{parentName:"p"},"hornet")," should be available in the current directory. You can check the version by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet --version\n")),(0,r.kt)("p",{parentName:"li"},"Example of version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"HORNET c37bbe0f\n")),(0,r.kt)("p",{parentName:"li"},"For self-compiled binaries, the version is the short commit ",(0,r.kt)("inlineCode",{parentName:"p"},"sha"),", which you can use to check which commit the given version is compiled against."))),(0,r.kt)("p",null,"You can run Hornet using ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to get all executable-related arguments by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet --help\n")),(0,r.kt)("p",null,"You can double-check that you have version 0.6.0+ deployed by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet --version\n")),(0,r.kt)("p",null,"You can run Hornet using default settings by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet\n")),(0,r.kt)("p",null,"Using this method, you have to make sure the executable runs in a daemon mode using for example ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),"."))}d.isMDXComponent=!0}}]);