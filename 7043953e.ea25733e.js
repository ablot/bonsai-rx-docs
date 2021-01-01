(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(a),u=n,s=m["".concat(b,".").concat(u)]||m[u]||O[u]||i;return a?r.a.createElement(s,c(c({ref:t},p),{},{components:a})):r.a.createElement(s,c({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<i;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),i=(a(0),a(121)),b={id:"camera_capture",title:"CameraCapture"},c={unversionedId:"fundamentals/video/camera_capture",id:"fundamentals/video/camera_capture",isDocsHomePage:!1,title:"CameraCapture",description:"Prerequisites:",source:"@site/docs/fundamentals/video/camera_capture.md",slug:"/fundamentals/video/camera_capture",permalink:"/bonsai-rx-docs/docs/fundamentals/video/camera_capture",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/video/camera_capture.md",version:"current",sidebar:"docs",previous:{title:"SpinnakerCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/spinnaker/spinnaker_capture"},next:{title:"Crop",permalink:"/bonsai-rx-docs/docs/fundamentals/video/crop"}},l=[],p={rightToc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bonsai Vision Library")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Source"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Acquires a sequence of images from a DirectShow-compatible camera with the specified index. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CaptureProperties")," (",Object(i.b)("em",{parentName:"li"},"Bonsai.Vision.CapturePropertyCollection"),") - OpenCV capture properties, which can be set by opening the ",Object(i.b)("em",{parentName:"li"},"CapturePropertyAssignment Collection Editor")," and adding a new member",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Property")," - a drop-down list of OpenCV capture properties; whether a given property is configurable depends on the particular camera"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Value")," - value of the selected property"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Index")," (",Object(i.b)("em",{parentName:"li"},"int"),") - index of the camera to acquire images from")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"OpenCV.Net.IpIImage"),") - 2D matrix of pixels, accepted as input by ",Object(i.b)("inlineCode",{parentName:"p"},"VideoWriter")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(i.b)("em",{parentName:"li"},"bool"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Size")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.IpIDepth"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WidthStep")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ImageData")," (",Object(i.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ChannelOfInterest")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Y")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(i.b)("em",{parentName:"li"},"bool"),")")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": Write video to file using ",Object(i.b)("inlineCode",{parentName:"p"},"VideoWriter")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": To visualise the video during acquisition, install the bonsai Vision Design Library and open ",Object(i.b)("inlineCode",{parentName:"p"},"Bonsai.Vision.Design.IplImageVisualizer"),"from the ",Object(i.b)("inlineCode",{parentName:"p"},"CameraCapture")," node"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": If ",Object(i.b)("inlineCode",{parentName:"p"},"CameraCapture")," acquires frames at a high rate and is followed by a long processing pipeline, processing delays may result in dropped frames. This is because ",Object(i.b)("inlineCode",{parentName:"p"},"CameraCapture")," can only stream a new frame once the downstream processing of the previous frame has completed. Up to a limit, this issue can be solved by including buffers.  "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": For industrial cameras, use dedicated Bonsai libraries:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"Camera")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"Bonsai")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Basler"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pylon Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"FLIR"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Spinnaker Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Intel RealSense"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RealSense Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PCO"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PCO Library*")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PointGrey"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PointGrey Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PSEye"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CLEyeMulticam Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"uEye"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"uEye Library")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Not yet distributed (as of Dec'20), but can be compiled from the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bonsai-rx/pco"}),"github repository"),". ")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Common errors"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Runtime error: Unable to acquire camera frame"),"\nOne possible reason is that the camera is currently open in another software."))}o.isMDXComponent=!0}}]);