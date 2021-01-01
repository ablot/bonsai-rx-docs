(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(121)),b={id:"crop",title:"Crop"},l={unversionedId:"fundamentals/video/crop",id:"fundamentals/video/crop",isDocsHomePage:!1,title:"Crop",description:"Prerequisites:",source:"@site/docs/fundamentals/video/crop.md",slug:"/fundamentals/video/crop",permalink:"/bonsai-rx-docs/docs/fundamentals/video/crop",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/video/crop.md",version:"current",sidebar:"docs",previous:{title:"CameraCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/video/camera_capture"},next:{title:"FileCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/video/file_capture"}},p=[],c={rightToc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bonsai Vision Library")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Transform"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Crops out a subregion of the input image"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input")," (",Object(i.b)("em",{parentName:"p"},"OpenCV.Net.IpIImage"),") - 2D matrix of pixels, such as that produced by ",Object(i.b)("inlineCode",{parentName:"p"},"FileCapture"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CameraCapture"),", or the ",Object(i.b)("inlineCode",{parentName:"p"},"Image")," output of other camera source nodes"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),") - region to be cropped out inside the input image",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X")," (",Object(i.b)("em",{parentName:"li"},"int"),") - X coordinate of the upper left corner"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Y")," (",Object(i.b)("em",{parentName:"li"},"int"),") - Y coordinate of the upper left corner"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),") ")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"OpenCV.Net.IpIImage"),") - inherited from the input image"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(i.b)("em",{parentName:"li"},"bool"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Size")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net"),".",Object(i.b)("em",{parentName:"li"},"IpIDepth"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WidthStep")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ImageData")," (",Object(i.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ChannelOfInterest")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(i.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Y")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Width")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Height")," (",Object(i.b)("em",{parentName:"li"},"int"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(i.b)("em",{parentName:"li"},"bool"),")")))}o.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||u[O]||i;return n?r.a.createElement(j,l(l({ref:t},c),{},{components:n})):r.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var c=2;c<i;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);