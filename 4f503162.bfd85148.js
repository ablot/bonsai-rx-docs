(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(121)),l={id:"analog_input",title:"AnalogInput"},o={unversionedId:"fundamentals/daqmx/analog_input",id:"fundamentals/daqmx/analog_input",isDocsHomePage:!1,title:"AnalogInput",description:"Prerequisites:",source:"@site/docs/fundamentals/daqmx/analog_input.md",slug:"/fundamentals/daqmx/analog_input",permalink:"/bonsai-rx-docs/docs/fundamentals/daqmx/analog_input",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/daqmx/analog_input.md",version:"current",sidebar:"docs",previous:{title:"BitwiseNot",permalink:"/bonsai-rx-docs/docs/core/expressions/bitwise_not"},next:{title:"AnalogOutput",permalink:"/bonsai-rx-docs/docs/fundamentals/daqmx/analog_output"}},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bonsai DAQmx Library"),Object(r.b)("li",{parentName:"ul"},"NI DAQmx driver from the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669"}),"NI website"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Category"),": Source"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Brief"),": Generates a sequence of voltage measurements from one or more DAQmx analog input channels"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Properties"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ActiveEdge"),"(",Object(r.b)("em",{parentName:"li"},"NationalInstruments.DAQmx.SampleClockActiveEdge"),") - the edges (",Object(r.b)("inlineCode",{parentName:"li"},"Rising")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Falling"),") of the NI-DAQmx device's sample clock signal used for sample acquisition"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BufferSize")," (",Object(r.b)("em",{parentName:"li"},"int"),") - the number of samples acquired in a single hardware buffer; the upper limit of the buffer (FIFO - 'first-in, first-out') depends on the DAQ board; if set to ",Object(r.b)("inlineCode",{parentName:"li"},"0"),", acquisition is timed by the hardware without a buffer"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(r.b)("em",{parentName:"li"},"System.Collections.ObjectModel.Collection","<","Bonsai.DAQmx.AnalogInputChannelConfiguration",">"),") - all analog input channels to acquire voltage samples from, specified by adding channels in the ",Object(r.b)("inlineCode",{parentName:"li"},"AnalogInputChannelConfiguration Collection Editor")," and setting its parameters as appropriate:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PhysicalChannel")," - the physical analog input channel on the board, selected from the drop-down list once the device is connected"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ChannelName")," - can be anything"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MaximumValue")," - maximum voltage value expected in measurements, not to be confused with device range; limiting the input to as small a range as appropriate can improve measurement precision"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MinimumValue")," - minimum voltage value expected in measurements, analogous to ",Object(r.b)("inlineCode",{parentName:"li"},"MaximumValue")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TerminalConfiguration")," - input terminal configuration as ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ni.com/documentation/en/ni-daqmx/20.1/devconsid/defaulttermconfig/"}),"appropriate for the particular device"),"; for more information about the options (",Object(r.b)("inlineCode",{parentName:"li"},"Differential"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Pseudodifferential"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Rse"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Nrse"),") see the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000019QRZSA2&l=en-GB"}),"NI website")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"VoltageUnits")," - the units used to return voltage measurement from the channel; for more information about the options (",Object(r.b)("inlineCode",{parentName:"li"},"Volts"),", ",Object(r.b)("inlineCode",{parentName:"li"},"FromCustomScale"),", ",Object(r.b)("inlineCode",{parentName:"li"},"FromTeds"),"), see the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ni.com/documentation/en/ni-daqmx/latest/daqmx-prop-ref/task-ai-voltage-units-1094/"}),"NI website")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SampleMode")," (",Object(r.b)("em",{parentName:"li"},"NationalInstruments.DAQmx.SampleQuantityMode"),") - specifies whether samples are acquired until the task is stopped (",Object(r.b)("inlineCode",{parentName:"li"},"SampleContinuous"),") or a specific number of samples, set by ",Object(r.b)("inlineCode",{parentName:"li"},"BufferSize"),", is reached (",Object(r.b)("inlineCode",{parentName:"li"},"FiniteSamples"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SampleRate")," (",Object(r.b)("em",{parentName:"li"},"double"),") - sampling rate in samples per second. It should be greater than twice the highest frequency component expected in the measured signal, respecting the Nyquist Sampling Theorem. The upper limit depends of the DAQ board."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SamplesPerRead")," (",Object(r.b)("em",{parentName:"li"},"int"),") - the number of samples bonsai tries to read at any time; the default value of ",Object(r.b)("inlineCode",{parentName:"li"},"-1")," means that all available data, set by ",Object(r.b)("inlineCode",{parentName:"li"},"BufferSize"),", are acquired; positive values smaller than ",Object(r.b)("inlineCode",{parentName:"li"},"BufferSize")," means that data from the hardware buffer are read more often"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SignalSource")," (",Object(r.b)("em",{parentName:"li"},"string"),") - source terminal of the clock; if not specified, the internal clock of the device will be used")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Output")," (",Object(r.b)("em",{parentName:"p"},"OpenCV.Net.Mat"),"): "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Size")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Rows")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Cols")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Step")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Depth"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ElementSize")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Data")," (",Object(r.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(r.b)("em",{parentName:"li"},"bool"),")")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": To avoid missing data due to subscription delays, this node should be initialised before any nodes whose output ",Object(r.b)("inlineCode",{parentName:"p"},"AnalogInput")," is supposed to acquire. For example, if the output of ",Object(r.b)("inlineCode",{parentName:"p"},"AnalogOutput")," is fed back into ",Object(r.b)("inlineCode",{parentName:"p"},"AnalogInput"),", the latter should be placed higher in the workflow than the former."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": write data to file using ",Object(r.b)("inlineCode",{parentName:"p"},"MatrixWriter")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Common errors"),":"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Runtime Error: Device cannot be accessed"),"\nMost likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message."))}p.isMDXComponent=!0}}]);