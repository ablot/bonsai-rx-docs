(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),o=a(7),n=(a(0),a(121)),s={id:"observables",title:"Observables"},i={unversionedId:"concepts/observables",id:"concepts/observables",isDocsHomePage:!1,title:"Observables",description:"Bonsai makes use of a unified model for asynchronous data streams: the observable sequence. This model was introduced by the popular ReactiveX framework. Our favorite approach to explain what exactly is an observable sequence is to use a metaphor.",source:"@site/docs\\concepts\\observables.md",slug:"/concepts/observables",permalink:"/bonsai-rx-docs/docs/concepts/observables",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/concepts/observables.md",version:"current",sidebar:"docs",previous:{title:"Bonsai Gallery",permalink:"/bonsai-rx-docs/docs/concepts/gallery"},next:{title:"Property Mapping",permalink:"/bonsai-rx-docs/docs/concepts/property_mapping"}},c=[{value:"A metaphor for asynchronous computation",id:"a-metaphor-for-asynchronous-computation",children:[]},{value:"The Bonsai visual language",id:"the-bonsai-visual-language",children:[]},{value:"Marble diagrams",id:"marble-diagrams",children:[]},{value:"Hot versus cold observable sequences {#temperature}",id:"hot-versus-cold-observable-sequences-temperature",children:[]}],l={rightToc:c};function b(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Bonsai makes use of a unified model for asynchronous data streams: the observable sequence. This model was introduced by the popular ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://reactivex.io/"}),"ReactiveX")," framework. Our favorite approach to explain what exactly is an observable sequence is to use a metaphor."),Object(n.b)("h2",{id:"a-metaphor-for-asynchronous-computation"},"A metaphor for asynchronous computation"),Object(n.b)("p",null,"Think about your favorite social networking service, and how your personal account works within that service. There are usually two main actions you have available:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Post text messages or share content such as pictures or videos."),Object(n.b)("li",{parentName:"ol"},"Follow other accounts so that you get notified whenever they send out their own messages. Very often users will post new messages in reaction to other posts they have just seen.")),Object(n.b)("p",null,"Social network accounts can also be terminated. The user can naturally close her own account, indicating there will be no more future posts, or the account can be terminated exceptionally by a moderator, perhaps due to a breach in the terms of service."),Object(n.b)("p",null,'Now imagine you had a webcam with its own user account in the social network. From time to time, the camera would take a picture and post it on the network. Other accounts would now be able to "follow" the camera in order to react whenever it posts a new image. Some of these followers might repost the camera images, either in their original form or with modifications (e.g., a grayscale or colorizing filter).'),Object(n.b)("p",null,"Other devices could have their own accounts, such as keyboards, microphones or temperature sensors. In this case, some users might follow both the camera and the keyboard, and start to aggregate posts by whether they happened close in time. For example, one user might repost an image from the camera only after the keyboard sent out a key press notification."),Object(n.b)("p",null,'Observable sequences are asynchronous sequences of data which behave in exactly this way. They are sources of data which can be "followed", or rather subscribed to, so that its observers get notified whenever there are new items available in the sequence. Observable sequences can generate items spontaneously or in reaction to notifications from other sequences they are subscribing.'),Object(n.b)("p",null,"Observable sequences can also terminate naturally when there is no more data to send out, or exceptionally, if there is an error with the device or during data processing."),Object(n.b)("h2",{id:"the-bonsai-visual-language"},"The Bonsai visual language"),Object(n.b)("p",null,"The Bonsai programming language manipulates such reactive networks explicitly using workflow diagrams where observable sequences are represented graphically as colored nodes. Nodes can be connected to other nodes, from left to right, indicating that the rightmost node subscribes to the notifications of the leftmost node."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Example workflow",src:a(210).default})),Object(n.b)("p",null,"By chaining networks of observable sequences in this way, it becomes possible to express very complex interactive systems in a surprisingly compact format. For example, the workflow diagram above describes a system that saves a grayscale snapshot from a camera into a file whenever there is a key press."),Object(n.b)("h2",{id:"marble-diagrams"},"Marble diagrams"),Object(n.b)("p",null,"To understand how this example works we need to know not only the network of connections -- who follows who -- but also the rules used by each operator to generate new items. In order to analyse the behaviour and dynamics of individual operators, we use a different representation called a marble diagram."),Object(n.b)("p",null,"Marble diagrams allow you to describe not only ",Object(n.b)("em",{parentName:"p"},"what")," items are emitted by observable sequences, but also ",Object(n.b)("em",{parentName:"p"},"when")," they are emitted. The ",Object(n.b)("inlineCode",{parentName:"p"},"Grayscale")," operator is used below to describe the main components of marble diagrams."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Grayscale operator",src:a(211).default})),Object(n.b)("p",null,'Arrows entering the box indicate that the operator is receiving notifications from the observable sequence that it is subscribing to, or "following". Arrows leaving the box show items that are emitted by the operator itself.'),Object(n.b)("p",null,"The diagram shows that the ",Object(n.b)("inlineCode",{parentName:"p"},"Grayscale")," operator is reacting to each of the input notifications by sending out new images where all color information has been removed. This is an example of an operator which simply transforms incoming values into a different form. However, there are other operators like ",Object(n.b)("inlineCode",{parentName:"p"},"Sample")," which can have slightly more interesting marble diagrams."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Sample operator",src:a(212).default})),Object(n.b)("p",null,"We can see from the workflow diagram above that the ",Object(n.b)("inlineCode",{parentName:"p"},"Sample")," operator subscribes to two sequences: ",Object(n.b)("inlineCode",{parentName:"p"},"Grayscale")," and ",Object(n.b)("inlineCode",{parentName:"p"},"KeyDown"),". The marble diagram shows an hypothetical example of these two independent streams. ",Object(n.b)("inlineCode",{parentName:"p"},"Grayscale")," is sending out images periodically, following the camera. However, ",Object(n.b)("inlineCode",{parentName:"p"},"KeyDown")," sends out a notification only when there is a key press, which can happen at any moment, even in between camera images."),Object(n.b)("p",null,"The diagram makes clear the behaviour of ",Object(n.b)("inlineCode",{parentName:"p"},"Sample"),": it sends out the latest image that was received from ",Object(n.b)("inlineCode",{parentName:"p"},"Grayscale")," whenever there was a new key press. Marble diagrams are a useful tool to convey graphically the intuition of what a reactive operator is doing and will be used extensively throughout these pages."),Object(n.b)("h2",{id:"hot-versus-cold-observable-sequences-temperature"},"Hot versus cold observable sequences {#temperature}"),Object(n.b)("p",null,"Some of the most subtle, but very important, aspects of the behaviour of observable sequences are the effects of subscription. When an image processing operator subscribes to a sequence of frames from a camera, that camera is turned on and acquisition is started. When the same operator subscribes to a sequence of frames from a video file, that file is opened and frames begin to be decoded into memory. These and other subscription side effects are necessary in order to generate the data items emitted from a sequence."),Object(n.b)("p",null,"The effects of subscription can have very different implications on the behaviour of reactive operators, depending on the nature of the underlying observable sequence. Consider again the difference between a video camera and a video file."),Object(n.b)("p",null,"A video camera generates a live broadcast of images. If an operator subscribes to the camera at any one time, it will get the images that are being captured by the camera at that time. If another operator subscribes to the camera at a later time, it will not receive the same images that the first operator received. When observable sequences have this fire-and-forget behaviour, they are said to be ",Object(n.b)("em",{parentName:"p"},"hot"),"."),Object(n.b)("p",null,"A video file also generates a sequence of images, but in contrast to the camera, these images are generated on-demand. They are permanently stored on disk, and whenever an operator subscribes to the file, all the images can be played back from the beginning. Every operator will receive all the frames from the file, no matter when they subscribe to the sequence. When observable sequences have this on-demand behaviour, they are said to be ",Object(n.b)("em",{parentName:"p"},"cold"),"."),Object(n.b)("p",null,"Understanding the ",Object(n.b)("em",{parentName:"p"},"temperature")," of an observable sequence is particularly important when that sequence is shared between multiple operators. It can help to understand whether those operators will see the same data items, and what the effects of subscribing to the shared sequence at different times are going to be."),Object(n.b)("p",null,"It is also possible to change the temperature of observable sequences using reactive operators. One operator can subscribe to the camera and start recording all incoming images. It can then replay all images on-demand to every downstream operator, even if they subscribe late. The originally ",Object(n.b)("em",{parentName:"p"},"hot")," sequence has been turned into a ",Object(n.b)("em",{parentName:"p"},"cold")," observable by this replay behaviour."),Object(n.b)("p",null,"Conversely, another operator can subscribe to a video file and start posting all the images to downstream operators. However, when other operators subscribe to it, instead of requesting a new subscription to the video, it simply starts to share the images coming from the original subscription, at whatever point of the video it is in. The originally ",Object(n.b)("em",{parentName:"p"},"cold")," sequence has been turned into a ",Object(n.b)("em",{parentName:"p"},"hot")," observable by this sharing, or publishing, behaviour."),Object(n.b)("p",null,"In the Bonsai visual language, whenever two operators receive data from the same source, i.e. whenever there are branches in the workflow, subscriptions are shared by default. This means that the default sharing behaviour of Bonsai sequences is ",Object(n.b)("em",{parentName:"p"},"hot")," by default. It is possible to change this by using specialized sharing operators, called ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/concepts/subjects/"}),"Subjects"),"."))}b.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=b(a),p=r,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||n;return a?o.a.createElement(m,i(i({ref:t},l),{},{components:a})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sampleframe-fdebd094e5d49f2fb1a57663f2845dc6.svg"},211:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/grayscale-8e8787ff49100fe7b3bbb42045882090.svg"},212:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sample-0c30753869763a8885d463b4f7d78f88.svg"}}]);