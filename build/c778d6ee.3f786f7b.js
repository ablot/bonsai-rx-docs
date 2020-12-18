(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(116)),o={id:"digital_output",title:"DigitalOutput"},l={unversionedId:"fundamentals/daqmx/digital_output",id:"fundamentals/daqmx/digital_output",isDocsHomePage:!1,title:"DigitalOutput",description:"Prerequisites:",source:"@site/docs\\fundamentals\\daqmx\\digital_output.md",slug:"/fundamentals/daqmx/digital_output",permalink:"/docs/fundamentals/daqmx/digital_output",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/fundamentals/daqmx/digital_output.md",version:"current",sidebar:"docs",previous:{title:"AnalogOutput",permalink:"/docs/fundamentals/daqmx/analog_output"},next:{title:"FunctionGenerator",permalink:"/docs/fundamentals/dsp/function_generator"}},p=[],c={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bonsai DAQmx Library"),Object(i.b)("li",{parentName:"ul"},"NI DAQmx driver from the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669"}),"NI website"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Sink"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Writes a sequence of logical values to one or more DAQmx digital output channels"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input")," (",Object(i.b)("em",{parentName:"p"},"bool"),")"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(i.b)("em",{parentName:"li"},"System.Collections.ObjectModel.Collection","<","Bonsai.DAQmx.DigitalOutputChannelConfiguration",">"),") - all analog output channels that the voltage signal will be fed to, specified by adding channels in the ",Object(i.b)("inlineCode",{parentName:"li"},"DigitalOutputChannelConfiguration Collection Editor")," and setting its parameters as appropriate:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ChannelName")," - can be anything"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Grouping")," - specifies how to group digital output lines into virtual channels; if one or more ports are specified with the ",Object(i.b)("inlineCode",{parentName:"li"},"Lines")," parameter, this must be ",Object(i.b)("inlineCode",{parentName:"li"},"OneChannelForEachLine")," (instead of ",Object(i.b)("inlineCode",{parentName:"li"},"OneChannelForAllLines"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Lines")," - the physical digital output line on the board, selected from the drop-down list once the device is connected")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"bool"),")"),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": To generate a square pulse of type ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),", one can repeatedly toggle a boolean at specific time intervals. The workflow might be: ",Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," --\x3e ",Object(i.b)("inlineCode",{parentName:"p"},"Take")," (",Object(i.b)("inlineCode",{parentName:"p"},"Count"),": 1) --\x3e ",Object(i.b)("inlineCode",{parentName:"p"},"Delay")," (","#","reactive ",Object(i.b)("inlineCode",{parentName:"p"},"DueTime"),": 00:00:00.5 for 500 ms) --\x3e ",Object(i.b)("inlineCode",{parentName:"p"},"BitwiseNot"),". Then use ",Object(i.b)("inlineCode",{parentName:"p"},"Merge")," to combine ",Object(i.b)("inlineCode",{parentName:"p"},"Take")," and ",Object(i.b)("inlineCode",{parentName:"p"},"BitwiseNot"),". Follow that by ",Object(i.b)("inlineCode",{parentName:"p"},"Delay")," (Reactive) and ",Object(i.b)("inlineCode",{parentName:"p"},"Repeat"),". Note that this boolean toggling will be subject to jitter of the operating system's clock, which may deem this approach inappropriate for applications requiring high temporal precision. In such cases, a combination of ",Object(i.b)("inlineCode",{parentName:"p"},"FunctionGenerator")," and ",Object(i.b)("inlineCode",{parentName:"p"},"AnalogOutput")," can  be used instead. "),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Common errors"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Runtime Error: Device cannot be accessed"),"\nMost likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message."))}b.isMDXComponent=!0}}]);