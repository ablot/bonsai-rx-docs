(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),O=i,d=m["".concat(l,".").concat(O)]||m[O]||u[O]||r;return n?a.a.createElement(d,b(b({ref:t},c),{},{components:n})):a.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:i,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(121)),l={id:"file_capture",title:"FileCapture"},b={unversionedId:"fundamentals/video/file_capture",id:"fundamentals/video/file_capture",isDocsHomePage:!1,title:"FileCapture",description:"Prerequisites:",source:"@site/docs\\fundamentals\\video\\file_capture.md",slug:"/fundamentals/video/file_capture",permalink:"/bonsai-rx-docs/docs/fundamentals/video/file_capture",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/video/file_capture.md",version:"current",sidebar:"docs",previous:{title:"Crop",permalink:"/bonsai-rx-docs/docs/fundamentals/video/crop"},next:{title:"VideoWriter",permalink:"/bonsai-rx-docs/docs/fundamentals/video/video_writer"}},o=[],c={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bonsai Vision Library")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Category"),": Source"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Brief"),": Produces a sequence of images from the specified movie file. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Properties"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FileName")," (",Object(r.b)("em",{parentName:"li"},"string"),") - name of the video file or, if file directory is different from the working directory, full path to the video file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Loop")," (",Object(r.b)("em",{parentName:"li"},"bool"),") - indicates whether the video sequence should loop after reaching the end of the file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PlaybackRate"),"(",Object(r.b)("em",{parentName:"li"},"double"),") - rate at which frames are read from the file; if ",Object(r.b)("inlineCode",{parentName:"li"},"0"),", frames are read at the native rate"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Playing")," (",Object(r.b)("em",{parentName:"li"},"bool"),") - playback can be paused and resumed by toggling this argument"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PositionUnits")," (",Object(r.b)("em",{parentName:"li"},"Bonsai.Vision.CapturePosition"),") - units of ",Object(r.b)("inlineCode",{parentName:"li"},"StartPosition")," (",Object(r.b)("inlineCode",{parentName:"li"},"Frames"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Milliseconds"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Aviratio"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"StartPosition")," (",Object(r.b)("em",{parentName:"li"},"double"),") - position in file to start the playback from (units specified by ",Object(r.b)("inlineCode",{parentName:"li"},"PositionUnits"),")")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Output")," (",Object(r.b)("em",{parentName:"p"},"OpenCV.Net.IplImage"),") - 2D matrix of pixels"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Size")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.IplDepth"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WidthStep")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ImageData")," (",Object(r.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ChannelOfInterest")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"X")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Y")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(r.b)("em",{parentName:"li"},"bool"),")")))}p.isMDXComponent=!0}}]);