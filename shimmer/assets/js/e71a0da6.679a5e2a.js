"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,h=g["".concat(u,".").concat(c)]||g[c]||p[c]||r;return t?i.createElement(h,l(l({ref:n},d),{},{components:t})):i.createElement(h,l({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={description:"The Plugin system allows to quickly and easily add and remove modules that need to be started. In GoShimmer, this is taken to an extreme, everything is run through plugins.",image:"/img/logo/goshimmer_light.png",keywords:["plugin","events","configure","event handlers","handler function"]},l="Plugin System",o={unversionedId:"implementation_design/plugin",id:"implementation_design/plugin",title:"Plugin System",description:"The Plugin system allows to quickly and easily add and remove modules that need to be started. In GoShimmer, this is taken to an extreme, everything is run through plugins.",source:"@site/shimmer/external/goshimmer/documentation/docs/implementation_design/plugin.md",sourceDirName:"implementation_design",slug:"/implementation_design/plugin",permalink:"/shimmer/goshimmer/implementation_design/plugin",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/implementation_design/plugin.md",tags:[],version:"current",frontMatter:{description:"The Plugin system allows to quickly and easily add and remove modules that need to be started. In GoShimmer, this is taken to an extreme, everything is run through plugins.",image:"/img/logo/goshimmer_light.png",keywords:["plugin","events","configure","event handlers","handler function"]},sidebar:"docs",previous:{title:"Dependency of Packages and Plugins",permalink:"/shimmer/goshimmer/implementation_design/packages_plugins"},next:{title:"Configuration Parameters",permalink:"/shimmer/goshimmer/implementation_design/configuration_parameters"}},u={},s=[{value:"Plugin Structure",id:"plugin-structure",level:2},{value:"Plugin Events",id:"plugin-events",level:2},{value:"Creating a New Plugin",id:"creating-a-new-plugin",level:2},{value:"Running a New Plugin",id:"running-a-new-plugin",level:2},{value:"Background workers",id:"background-workers",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin-system"},"Plugin System"),(0,a.kt)("p",null,"GoShimmer is a complex application that is used in a research environment where requirements often changed and new ideas arise.\nThe Plugin system allows to quickly and easily add and remove modules that need to be started. However, one thing that might be non-intuitive about the use of plugins is that it's taken to an extreme - everything is run through plugins.\nThe only code that is not executed through a plugin system is the code responsible for configuring and starting the plugins.\nAll new future features added to the GoShimmer must be added by creating a new plugin. "),(0,a.kt)("h2",{id:"plugin-structure"},"Plugin Structure"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," structure is defined as following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Plugin struct {\n    Node   *Node\n    Name   string\n    Status int\n    Events pluginEvents\n    wg     *sync.WaitGroup\n}\n")),(0,a.kt)("p",null,"Below is a brief description of each field: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node")," - contains a pointer to ",(0,a.kt)("inlineCode",{parentName:"li"},"Node")," object which contains references to all the plugins and node-level logger. #TODO: figure out why it is there - not really used anywhere"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," - descriptive name of the plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Status")," - flag indicating whether plugin is enabled or disabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Events")," - structure containing events used to properly deploy the plugin. Details described below."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wg")," - a private field containing WaitGroup. #TODO: figure out why it is there - not really used anywhere")),(0,a.kt)("h2",{id:"plugin-events"},"Plugin Events"),(0,a.kt)("p",null,"Each plugin defines 3 events: ",(0,a.kt)("inlineCode",{parentName:"p"},"Init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),".\nThose events are triggered during different stages of node startup, but the plugin doesn't have to define handlers for all of those events in order to do what it's been designed for.\nExecution order and purpose of each event is described below: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Init")," - is triggered almost immediately after a node is started. It's used in plugins that are critical for GoShimmer such as reading config file or initializing global logger. Most plugins don't need to use this event."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," - this event is used to configure the plugin before it is started. It is used to define events related to internal plugin logic or initialize objects used by the plugin. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Run")," - this event is triggered as the last one. The event handler function contains the main logic of the plugin.\nFor many plugins, the event handler function creates a separate worker that works in the background, so that the handler function for one plugin can finish and allow other plugins to be started.  ")),(0,a.kt)("p",null,"Each event could potentially have more than one handler, however currently all existing plugins follow a convention where each event has only one handler."),(0,a.kt)("p",null,"It is important to note that each event is triggered for all plugins sequentially, so that the event ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," is triggered for all plugins, then ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure")," is triggered for all plugins and finally ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),".\nSuch order is crucial, because some plugins rely on other plugins' initialization or configuration. The order in which plugins are initialized, configured and run is also important and this is described below. "),(0,a.kt)("p",null,"Handler functions for all plugin events share the same interface, so they could potentially be used interchangeably. Sample handler functions look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func configure(_ *node.Plugin) {\n    // configure stuff\n}\n\nfunc run(*node.Plugin) { \n    // run plugin   \n}\n")),(0,a.kt)("p",null,"The handler functions receive one argument of type ",(0,a.kt)("inlineCode",{parentName:"p"},"*Plugin"),". The code responsible for triggering those events passes a pointer to the plugin object itself.\nThe object needs to be passed so that the handler function can access plugin fields (e.g. plugin name to configure logger)."),(0,a.kt)("h2",{id:"creating-a-new-plugin"},"Creating a New Plugin"),(0,a.kt)("p",null,"A plugin object can be created by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.NewPlugin")," method.\nThe method creates and returns a new plugin object, as well as registers it so that GoShimmer knows the plugin is available.\nIt accepts the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name string")," - plugin name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status int")," - flag indicating whether plugin is enabled or disabled by default. This can be overridden by enabling/disabling the plugin in the external configuration file. Possible values: ",(0,a.kt)("inlineCode",{parentName:"li"},"node.Enabled"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"node.Disabled"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callbacks ...Callback")," - list of event handler functions. The method will correctly create a plugin when passing up to 2 callbacks. Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"type Callback = func(plugin *Plugin)"),", which is a raw function type without being wrapped in ",(0,a.kt)("inlineCode",{parentName:"li"},"events.Closure"),".")),(0,a.kt)("p",null,"There is a couple of ways that the method can be called, depending on which plugin events need to be configured. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Run")," event handlers. It's the most common usage that plugins currently use. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"plugin = node.NewPlugin(PluginName, node.Enabled, configure, run)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define only ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," event. It's used for plugins that are used to configure objects used (or managed) by other plugins, such as creating API endpoints. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"plugin = node.NewPlugin(PluginName, node.Enabled, configure)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define a plugin without ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Run")," event handlers. This is used to create plugins that perform some action when the ",(0,a.kt)("inlineCode",{parentName:"li"},"Init")," event is triggered.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"plugin = node.NewPlugin(PluginName, node.Enabled)\n")),(0,a.kt)("p",null,"However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," event handler cannot be attached using the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.NewPlugin")," method.\nIn order to specify this handler, plugin creator needs to attach it manually to the event, for example inside the package's ",(0,a.kt)("inlineCode",{parentName:"p"},"init()")," method in the file containing the rest of the plugin definition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func init() {\n    plugin.Events.Init.Attach(events.NewClosure(func(*node.Plugin) {\n        // do something\n    }))\n}\n")),(0,a.kt)("p",null,"It's important to note, that the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.NewPlugin")," accepts handler functions in a raw format, that is, without being wrapped by the ",(0,a.kt)("inlineCode",{parentName:"p"},"events.Closure")," object as the method does the wrapping inside.\nHowever, when attaching the ",(0,a.kt)("inlineCode",{parentName:"p"},"Init")," event handler manually, it must be wrapped by the ",(0,a.kt)("inlineCode",{parentName:"p"},"events.Closure")," object. "),(0,a.kt)("p",null,"It's crucial that each plugin is created only once and ",(0,a.kt)("inlineCode",{parentName:"p"},"sync.Once")," class is used to guarantee that. Contents of a file containing sample plugin definition is presented. All plugins follow this format.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const PluginName = "SamplePlugin"\n\nvar (\n    // plugin is the plugin instance of the new plugin plugin.\n    plugin     *node.Plugin\n    pluginOnce sync.Once\n)\n\n// Plugin gets the plugin instance.\nfunc Plugin() *node.Plugin {\n    pluginOnce.Do(func() {\n        plugin = node.NewPlugin(PluginName, node.Enabled, configure, run)\n    })\n    return plugin\n}\n\n// Handler functions\nfunc init() {\n    plugin.Events.Init.Attach(events.NewClosure(func(*node.Plugin) {\n        // do something\n    }))\n}\nfunc configure(_ *node.Plugin) {\n    // configure stuff\n}\n\nfunc run(*node.Plugin) {\n    // run stuff    \n}\n')),(0,a.kt)("h2",{id:"running-a-new-plugin"},"Running a New Plugin"),(0,a.kt)("p",null,"In order to correctly add a new plugin to GoShimmer, apart from defining it, it must also be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.Run")," method.\nBecause there are plenty of plugins, in order to improve readability and make managing plugins easier, they are grouped into separate wrappers passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.Run")," method.\nWhen adding a new plugin, it must be added into one of those groups, or a new group must be created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"node.Run(\n    plugins.Core,\n    plugins.Research,\n    plugins.UI,\n    plugins.WebAPI,\n)\n")),(0,a.kt)("p",null,"You can add a plugin simply by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin()")," method of the newly created plugin and passing the argument further. An example group definition is presented below. When it's added, the plugin is correctly added and will be run when GoShimmer starts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var Core = node.Plugins(\n    banner.Plugin(),\n    newPlugin.Plugin(),\n    // other plugins ommited \n)\n")),(0,a.kt)("h2",{id:"background-workers"},"Background workers"),(0,a.kt)("p",null,"In order to run plugins beyond the scope of the short-lived ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," event handler, possibly multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"daemon.BackgroundWorker")," instances can be started inside the handler function.\nThis allows the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," event handler to finish quickly, and the plugin logic can continue running concurrently in a separate goroutine. "),(0,a.kt)("p",null,"Background worker can be started by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"daemon.BackgroundWorker")," method, which accepts following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name string")," - background worker name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handler WorkerFunc")," - long-running function that will be started in its own goroutine. It accepts a single argument of type ",(0,a.kt)("inlineCode",{parentName:"li"},"<-chan struct{}"),". When something is sent to that channel, the worker will shut down. Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"type WorkerFunc = func(shutdownSignal <-chan struct{})")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"order ...int")," - value used to define in which shutdown order this particular background worker must be shut down (higher = earlier).\nThe parameter can either accept one or zero values, more values will be ignored. When passing zero values, default value of ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," is assumed.\nValues are normalized in the ",(0,a.kt)("inlineCode",{parentName:"li"},"github.com/iotaledger/goshimmer/packages/shutdown")," package, and it should be used instead of passing integers manually.\nCorrect shutdown order is as important as correct start order, because different plugins depend on others working correctly, so when one plugin shuts down too soon, other plugins may run into errors, crash and leave an incorrect state. ")),(0,a.kt)("p",null,"An example code for creating a background worker: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func start(shutdownSignal <-chan struct{}) {\n    // long-running function\n    // possibly start goroutines here\n    // wait for shutdown signal\n    <-shutdownSignal\n}\n\nif err := daemon.BackgroundWorker(backgroundWorkerName, start, shutdown.PriorityGossip); err != nil {\n    log.Panicf("Failed to start as daemon: %s", err)\n}\n')))}p.isMDXComponent=!0}}]);