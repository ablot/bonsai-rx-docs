(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),m=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=m(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=m(n),j=a,u=o["".concat(r,".").concat(j)]||o[j]||O[j]||l;return n?i.a.createElement(u,b(b({ref:t},p),{},{components:n})):i.a.createElement(u,b({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=j;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<l;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),l=(n(0),n(116)),r={id:"spinnaker_capture",title:"SpinnakerCapture"},b={unversionedId:"fundamentals/spinnaker/spinnaker_capture",id:"fundamentals/spinnaker/spinnaker_capture",isDocsHomePage:!1,title:"SpinnakerCapture",description:"Prerequisites:",source:"@site/docs/fundamentals/spinnaker/spinnaker_capture.md",slug:"/fundamentals/spinnaker/spinnaker_capture",permalink:"/bonsai-rx-docs/docs/fundamentals/spinnaker/spinnaker_capture",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/fundamentals/spinnaker/spinnaker_capture.md",version:"current",sidebar:"docs",previous:{title:"PylonCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/pylon/pylon_capture"},next:{title:"CameraCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/video/camera_capture"}},c=[],p={rightToc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bonsai Spinnaker Library"),Object(l.b)("li",{parentName:"ul"},"Spinnaker SDK 1.29.0.5 from the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://meta.box.lenovo.com/v/link/view/a1995795ffba47dbbe45771477319cc3"}),"FLIR website"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Category"),": Source"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Brief"),": Acquires a sequence of images from a FLIR camera using the Spinnaker software"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ColorProcessing")," - the methodDefault vs. NoColorProcessing"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Index")," - index of the camera to acquire images from")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Output")," (",Object(l.b)("em",{parentName:"p"},"Bonsai.Spinnaker.SpinnakerDataFrame"),"):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Image")," (",Object(l.b)("em",{parentName:"li"},"OpenCV.Net.IpIImage"),") - 2D matrix of pixels, accepted as\ninput by ",Object(l.b)("inlineCode",{parentName:"li"},"VideoWriter"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(l.b)("em",{parentName:"li"},"bool"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Size")," (",Object(l.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Width")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Height")," (",Object(l.b)("em",{parentName:"li"},"int"),")"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(l.b)("em",{parentName:"li"},"OpenCV.Net.IpIDepth"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Width")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Height")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"WidthStep")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ImageData")," (",Object(l.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ChannelOfInterest")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(l.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"X")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Y")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Width")," (",Object(l.b)("em",{parentName:"li"},"int"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Height")," (",Object(l.b)("em",{parentName:"li"},"int"),")"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(l.b)("em",{parentName:"li"},"bool"),")"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ChunkData")," (",Object(l.b)("em",{parentName:"li"},"SpinnakerNET.ManagedChunkData"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"InferenceBoundingBoxResult"),"(",Object(l.b)("em",{parentName:"li"},"SpinnakerNET.ManagedInferenceBoundingBoxResult"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"InferenceConfidence")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"InferenceResult")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dCoordinateReferenceValue")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dTransformValue")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dAxisMax")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dAxisMin")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dInvalidDataValue")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dCoordinateOffset")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Scan3dCoordinateScale")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"StreamChannelID")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TransferQueueCurrentBlockCount")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TransferBlockID")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"LinePitch")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"EncoderValue")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ScanLineSelector")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TimerValue")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CounterValue")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"LineStatusAll")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TimestampLatchValue")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PixelDynamicRangeMax")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PixelDynamicRangeMin")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PartSelector")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SerialDataLength")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"OffsetY")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"OffsetX")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CRC")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SequencerSetActive")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Gain")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Height")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Image")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Width")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ExposureEndLineStatusAll")," (",Object(l.b)("em",{parentName:"li"},"long"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Timestamp")," (",Object(l.b)("em",{parentName:"li"},"long"),") - hardware timestamp"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ExposureTime")," (",Object(l.b)("em",{parentName:"li"},"double"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FrameID")," (",Object(l.b)("em",{parentName:"li"},"long"),") - 1-based frame index"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BlackLevel")," (",Object(l.b)("em",{parentName:"li"},"double"),")")))),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tip"),": Write video to file using ",Object(l.b)("inlineCode",{parentName:"p"},"VideoWriter")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tip"),": To visualise the video during acquisition, install the bonsai Vision Design Library and open ",Object(l.b)("inlineCode",{parentName:"p"},"Bonsai.Vision.Design.IpIImageVisualizer"),"from the ",Object(l.b)("inlineCode",{parentName:"p"},"Image")," output node of the respective image capture node"),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Common errors"),":"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Runtime error: Unable to acquire camera frame"),"\nOne possible reason is that the camera is currently open in SpinView."))}m.isMDXComponent=!0}}]);