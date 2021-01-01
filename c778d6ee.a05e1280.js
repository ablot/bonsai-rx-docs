(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,I,i){"use strict";i.r(I),i.d(I,"frontMatter",(function(){return c})),i.d(I,"metadata",(function(){return l})),i.d(I,"rightToc",(function(){return j})),i.d(I,"default",(function(){return g}));var t=i(3),n=i(7),a=(i(0),i(121)),c={id:"digital_output",title:"DigitalOutput"},l={unversionedId:"fundamentals/daqmx/digital_output",id:"fundamentals/daqmx/digital_output",isDocsHomePage:!1,title:"DigitalOutput",description:"Prerequisites:",source:"@site/docs\\fundamentals\\daqmx\\digital_output.md",slug:"/fundamentals/daqmx/digital_output",permalink:"/bonsai-rx-docs/docs/fundamentals/daqmx/digital_output",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/daqmx/digital_output.md",version:"current",sidebar:"docs",previous:{title:"AnalogOutput",permalink:"/bonsai-rx-docs/docs/fundamentals/daqmx/analog_output"},next:{title:"ConvertScale",permalink:"/bonsai-rx-docs/docs/fundamentals/dsp/convert_scale"}},j=[],M={rightToc:j};function g(e){var I=e.components,c=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},M,c,{components:I,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"bonsai DAQmx Library"),Object(a.b)("li",{parentName:"ul"},"NI DAQmx driver from the ",Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669"}),"NI website"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Category"),": Sink"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Brief"),": Writes a sequence of logical values to one or more DAQmx digital output channels"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input")," (",Object(a.b)("em",{parentName:"p"},"bool"),")"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Properties"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(a.b)("em",{parentName:"li"},"System.Collections.ObjectModel.Collection","<","Bonsai.DAQmx.DigitalOutputChannelConfiguration",">"),") - all analog output channels that the voltage signal will be fed to, specified by adding channels in the ",Object(a.b)("inlineCode",{parentName:"li"},"DigitalOutputChannelConfiguration Collection Editor")," and setting its parameters as appropriate:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ChannelName")," - can be anything"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Grouping")," - specifies how to group digital output lines into virtual channels; if one or more ports are specified with the ",Object(a.b)("inlineCode",{parentName:"li"},"Lines")," parameter, this must be ",Object(a.b)("inlineCode",{parentName:"li"},"OneChannelForEachLine")," (instead of ",Object(a.b)("inlineCode",{parentName:"li"},"OneChannelForAllLines"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Lines")," - the physical digital output line on the board, selected from the drop-down list once the device is connected")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output")," (",Object(a.b)("em",{parentName:"p"},"bool"),")"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tip"),": A boolean square pulse can be generated by sampling from ",Object(a.b)("inlineCode",{parentName:"p"},"FunctionGenerator")," (",Object(a.b)("inlineCode",{parentName:"p"},"BufferLength")," = 1) one item at a time and applying a threshold (e.g. using ",Object(a.b)("inlineCode",{parentName:"p"},"GreaterThan"),") to obtain output of type ",Object(a.b)("em",{parentName:"p"},"bool"),". This method seems to work well for ",Object(a.b)("inlineCode",{parentName:"p"},"SamplingRate")," <= 100 Hz. Note that ",Object(a.b)("inlineCode",{parentName:"p"},"Frequency")," must be less than half of the ",Object(a.b)("inlineCode",{parentName:"p"},"SamplingRate")," value in line with the ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem"}),"Nyquist Sampling Theorem"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Digital pulse",src:i(203).default})),Object(a.b)("p",null," If higher frequency signals are needed, a combination of ",Object(a.b)("inlineCode",{parentName:"p"},"FunctionGenerator")," and ",Object(a.b)("inlineCode",{parentName:"p"},"AnalogOutput")," can  be used instead (where possible)."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Common errors"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Runtime Error: Device cannot be accessed"),"\nMost likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message."))}g.isMDXComponent=!0},121:function(e,I,i){"use strict";i.d(I,"a",(function(){return b})),i.d(I,"b",(function(){return p}));var t=i(0),n=i.n(t);function a(e,I,i){return I in e?Object.defineProperty(e,I,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[I]=i,e}function c(e,I){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);I&&(t=t.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var I=1;I<arguments.length;I++){var i=null!=arguments[I]?arguments[I]:{};I%2?c(Object(i),!0).forEach((function(I){a(e,I,i[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(i,I))}))}return e}function j(e,I){if(null==e)return{};var i,t,n=function(e,I){if(null==e)return{};var i,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],I.indexOf(i)>=0||(n[i]=e[i]);return n}(e,I);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],I.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var M=n.a.createContext({}),g=function(e){var I=n.a.useContext(M),i=I;return e&&(i="function"==typeof e?e(I):l(l({},I),e)),i},b=function(e){var I=g(e.components);return n.a.createElement(M.Provider,{value:I},e.children)},N={inlineCode:"code",wrapper:function(e){var I=e.children;return n.a.createElement(n.a.Fragment,{},I)}},r=n.a.forwardRef((function(e,I){var i=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,M=j(e,["components","mdxType","originalType","parentName"]),b=g(i),r=t,p=b["".concat(c,".").concat(r)]||b[r]||N[r]||a;return i?n.a.createElement(p,l(l({ref:I},M),{},{components:i})):n.a.createElement(p,l({ref:I},M))}));function p(e,I){var i=arguments,t=I&&I.mdxType;if("string"==typeof e||t){var a=i.length,c=new Array(a);c[0]=r;var l={};for(var j in I)hasOwnProperty.call(I,j)&&(l[j]=I[j]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var M=2;M<a;M++)c[M]=i[M];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,i)}r.displayName="MDXCreateElement"},203:function(e,I,i){"use strict";i.r(I),I.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJ5ZXMiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiWw0KPCFFTlRJVFkgRTExICdzdHJva2U6bm9uZTtvcGFjaXR5OjE7ZmlsbDpyZ2IoNjgsMTU0LDIyMyk7Jz48IUVOVElUWSBFMTYgJ21hdHJpeCgxLjI1IDAuMDAgMC4wMCAxLjI1IDIwNS4wMCA1LjAwICkgJz48IUVOVElUWSBFOSAnbWF0cml4KDEuMDAgMC4wMCAwLjAwIDEuMDAgMC4wMCAwLjAwICkgJz48IUVOVElUWSBFNyAnc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7b3BhY2l0eToxO2ZpbGw6cmdiKDI1NSwyNTUsMjU1KTsnPjwhRU5USVRZIEUzICdzdHJva2U6cmdiKDE2OSwxNjksMTY5KTtmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbWl0ZXJsaW1pdDo5O29wYWNpdHk6MTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWpvaW46bWl0ZXI7Jz48IUVOVElUWSBFMTMgJ3N0cm9rZTpyZ2IoMjU1LDI1NSwyNTUpO2ZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1taXRlcmxpbWl0Ojk7b3BhY2l0eToxO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lam9pbjptaXRlcjsnPjwhRU5USVRZIEUxMiAnTSAxNi44NDkgMTAuMDYyIDIzLjQwMjcgMTAuMDYyIE0gMTYuNjAzOCAxOS42MDg0IDIzLjM1MDUgMTkuNjA4NCBNIDEyLjMwNzUgMTcuMTYxNSA3LjU3MTkgMjEuODk3MSBNIDcuNTc3MzM1IDE3LjE1MiAxMi4zMTcwNCAyMS44OTE3IE0gNi41NjQxMzYgMTAuMDA0NyAxMy4zMDkwNCAxMC4wMDQ3IE0gOS45MzY2MzYgNi42Mjg4IDkuOTM2NjM2IDEzLjM4MDYgJz48IUVOVElUWSBFMTQgJ3N0cm9rZTpub25lO29wYWNpdHk6MTtmaWxsOnJnYigyNTUsMjU1LDI1NSk7Jz48IUVOVElUWSBFMjEgJ21hdHJpeCgxLjI1IDAuMDAgMC4wMCAxLjI1IDEwNS4wMCA1LjAwICkgJz48IUVOVElUWSBFNCAnbWF0cml4KDEuMjUgMC4wMCAwLjAwIDEuMjUgNDA1LjAwIDUuMDAgKSAnPjwhRU5USVRZIEUxMCAnbWF0cml4KDEuMjUgMC4wMCAwLjAwIDEuMjUgMzA1LjAwIDUuMDAgKSAnPjwhRU5USVRZIEUxICdzdHJva2U6cmdiKDE2OSwxNjksMTY5KTtmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbWl0ZXJsaW1pdDo5O29wYWNpdHk6MTtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWpvaW46bWl0ZXI7Jz48IUVOVElUWSBFMjQgJ21hdHJpeCgxLjI1IDAuMDAgMC4wMCAxLjI1IDUuMDAgNS4wMCApICc+DQpdPjxzdmcgd2lkdGg9IjQ4OC4yMTUxIiBoZWlnaHQ9IjgxLjQyNzczIiBpZD0iU3ZnR2RpX291dHB1dCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBpZD0iYmFja2dyb3VuZCIgaGVpZ2h0PSIxMDAuMDAlIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDI1NSwyNTUpOyIgd2lkdGg9IjEwMC4wMCUiIHk9IjAuMDAiIHg9IjAuMDAiIC8+PGcgc3R5bGU9InNoYXBlLXJlbmRlcmluZzphdXRvOyIgaWQ9InJvb3RfZ3JvdXAiPjxsaW5lIHkxPSIyMy43NSIgc3R5bGU9IiZFMTsiIGlkPSI1NCIgeDI9IjQwMC4wMCIgeTI9IjIzLjc1IiB4MT0iMzQ3LjUwIiAvPjxsaW5lIHkxPSIyMy43NSIgc3R5bGU9IiZFMTsiIGlkPSI1NSIgeDI9IjMwMC4wMCIgeTI9IjIzLjc1IiB4MT0iMjQ3LjUwIiAvPjxsaW5lIHkxPSIyMy43NSIgc3R5bGU9IiZFMTsiIGlkPSI1NiIgeDI9IjIwMC4wMCIgeTI9IjIzLjc1IiB4MT0iMTQ3LjUwIiAvPjxsaW5lIHkxPSIyMy43NSIgc3R5bGU9IiZFMTsiIGlkPSI1NyIgeDI9IjEwMC4wMCIgeTI9IjIzLjc1IiB4MT0iNDcuNTAiIC8+PHBhdGggc3R5bGU9IiZFMzsiIHRyYW5zZm9ybT0iJkU0OyIgaWQ9IjU4IiBkPSJNIDEwLjE1OCAzMy4yIEMgMy40MDU0IDMxLjc1OTEgLTEuODYxIDI2LjQ2OTIgLTMuMjcxIDE5LjcxICIgLz48ZWxsaXBzZSBpZD0iNTkiIGN5PSIxNS4wMCIgY3g9IjE1LjAwIiB0cmFuc2Zvcm09IiZFNDsiIHJ4PSIxNS4wMCIgcnk9IjE1LjAwIiBzdHlsZT0ic3Ryb2tlOm5vbmU7b3BhY2l0eToxO2ZpbGw6cmdiKDE1NSw5MSwxNzkpOyIgLz48cGF0aCBzdHlsZT0iJkU3OyIgdHJhbnNmb3JtPSImRTQ7IiBpZD0iNjAiIGQ9Ik0gMTEuNTI5IDI1LjQ0NCAyMC43ODM0IDEyLjkwOCAxNi4zMjAzIDEyLjkwOCAxOC4zNTUgNC43Njg3IDkuMTAwNjAxIDE3LjMwNDcgMTMuNTYzNyAxNy4zMDQ3IHogIiAvPjx0ZXh0IGlkPSI2MSIgdHJhbnNmb3JtPSImRTk7IiB4PSI0MDUuMDAiIHk9IjQ4Ljc1IiBzdHlsZT0ic3Ryb2tlOm5vbmU7Y2xpcC1wYXRoOnVybCgjNjNfdGV4dF9jbGlwcGVyKTtmb250LWZhbWlseTpNaWNyb3NvZnQgU2FucyBTZXJpZjtmaWxsOnJnYigwLDAsMCk7Zm9udC1zaXplOjkuNzVwdDtvcGFjaXR5OjE7Ij48dHNwYW4gZHk9IjkuNzVwdCIgaWQ9IjY1Ij5EaWdpdGFsT3V0cHV0PC90c3Bhbj48L3RleHQ+PGVsbGlwc2UgaWQ9IjY3IiBjeT0iMTUuMDAiIGN4PSIxNS4wMCIgdHJhbnNmb3JtPSImRTEwOyIgcng9IjE1LjAwIiByeT0iMTUuMDAiIHN0eWxlPSImRTExOyIgLz48cGF0aCBkPSImRTEyOyIgc3R5bGU9IiZFMTM7IiB0cmFuc2Zvcm09IiZFMTA7IiBpZD0iNjgiIC8+PGVsbGlwc2UgaWQ9IjY5IiBjeT0iMTYuMzMiIGN4PSIxOS45MyIgdHJhbnNmb3JtPSImRTEwOyIgcng9IjEuMzAiIHJ5PSIxLjMwIiBzdHlsZT0iJkUxNDsiIC8+PGVsbGlwc2UgaWQ9IjcwIiBjeT0iMjIuODMiIGN4PSIxOS45MyIgdHJhbnNmb3JtPSImRTEwOyIgcng9IjEuMzAiIHJ5PSIxLjMwIiBzdHlsZT0iJkUxNDsiIC8+PHRleHQgaWQ9IjcxIiB0cmFuc2Zvcm09IiZFOTsiIHg9IjMwNS4wMCIgeT0iNDguNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtjbGlwLXBhdGg6dXJsKCM3M190ZXh0X2NsaXBwZXIpO2ZvbnQtZmFtaWx5Ok1pY3Jvc29mdCBTYW5zIFNlcmlmO2ZpbGw6cmdiKDAsMCwwKTtmb250LXNpemU6OS43NXB0O29wYWNpdHk6MTsiPjx0c3BhbiBkeT0iOS43NXB0IiBpZD0iNzUiPkdyZWF0ZXJUaGFuPC90c3Bhbj48L3RleHQ+PGVsbGlwc2UgaWQ9Ijc3IiBjeT0iMTUuMDAiIGN4PSIxNS4wMCIgdHJhbnNmb3JtPSImRTE2OyIgcng9IjE1LjAwIiByeT0iMTUuMDAiIHN0eWxlPSImRTExOyIgLz48cGF0aCBzdHlsZT0iJkU3OyIgdHJhbnNmb3JtPSImRTE2OyIgaWQ9Ijc4IiBkPSJNIDE5LjE1NiAxMy44ODggMTkuMTU2IDEwLjM2NDcgMTkuMTU2IDYuODQxMzk5IDI1LjI1ODUgMTAuMzY0NyAyMi4yMDcyIDEyLjEyNjQgeiAiIC8+PHBhdGggc3R5bGU9IiZFNzsiIHRyYW5zZm9ybT0iJkUxNjsiIGlkPSI3OSIgZD0iTSAxOS4xNTYgMjIuOTcgMTkuMTU2IDE5LjQ0NjcgMTkuMTU2IDE1LjkyMzQgMjUuMjU4NSAxOS40NDY3IDIyLjIwNzIgMjEuMjA4NCB6ICIgLz48cGF0aCBzdHlsZT0iJkUxMzsiIHRyYW5zZm9ybT0iJkUxNjsiIGlkPSI4MCIgZD0iTSA1LjUwMDEgMTkuNDg0IDEwLjY0OTMgMTkuNDg0IDE2LjI3NDMgMTAuMjQ4NSAxOS4zNzI4IDEwLjI0ODUgTSAxNC42NzY5IDE3LjE0ODEgMTYuMzA4OSAxOS40ODI4IDE5LjIyMDIgMTkuNDgyOCBNIDUuNTAwMTk5IDEwLjI0MzcgMTAuNzU4NiAxMC4yNDM3IDEyLjE2NTIgMTIuODcwNyAiIC8+PHRleHQgaWQ9IjgxIiB0cmFuc2Zvcm09IiZFOTsiIHg9IjIwNS4wMCIgeT0iNDguNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtjbGlwLXBhdGg6dXJsKCM4M190ZXh0X2NsaXBwZXIpO2ZvbnQtZmFtaWx5Ok1pY3Jvc29mdCBTYW5zIFNlcmlmO2ZpbGw6cmdiKDAsMCwwKTtmb250LXNpemU6OS43NXB0O29wYWNpdHk6MTsiPjx0c3BhbiBkeT0iOS43NXB0IiBpZD0iODUiPlZhbDA8L3RzcGFuPjwvdGV4dD48ZWxsaXBzZSBpZD0iODciIGN5PSIxNS4wMCIgY3g9IjE1LjAwIiB0cmFuc2Zvcm09IiZFMjE7IiByeD0iMTUuMDAiIHJ5PSIxNS4wMCIgc3R5bGU9IiZFMTE7IiAvPjxwYXRoIGQ9IiZFMTI7IiBzdHlsZT0iJkUxMzsiIHRyYW5zZm9ybT0iJkUyMTsiIGlkPSI4OCIgLz48ZWxsaXBzZSBpZD0iODkiIGN5PSIxNi4zMyIgY3g9IjE5LjkzIiB0cmFuc2Zvcm09IiZFMjE7IiByeD0iMS4zMCIgcnk9IjEuMzAiIHN0eWxlPSImRTE0OyIgLz48ZWxsaXBzZSBpZD0iOTAiIGN5PSIyMi44MyIgY3g9IjE5LjkzIiB0cmFuc2Zvcm09IiZFMjE7IiByeD0iMS4zMCIgcnk9IjEuMzAiIHN0eWxlPSImRTE0OyIgLz48dGV4dCBpZD0iOTEiIHRyYW5zZm9ybT0iJkU5OyIgeD0iMTA1LjAwIiB5PSI0OC43NSIgc3R5bGU9InN0cm9rZTpub25lO2NsaXAtcGF0aDp1cmwoIzkzX3RleHRfY2xpcHBlcik7Zm9udC1mYW1pbHk6TWljcm9zb2Z0IFNhbnMgU2VyaWY7ZmlsbDpyZ2IoMCwwLDApO2ZvbnQtc2l6ZTo5Ljc1cHQ7b3BhY2l0eToxOyI+PHRzcGFuIGR5PSI5Ljc1cHQiIGlkPSI5NSI+SW5kZXg8L3RzcGFuPjwvdGV4dD48cGF0aCBzdHlsZT0iJkUzOyIgdHJhbnNmb3JtPSImRTI0OyIgaWQ9Ijk3IiBkPSJNIDMxLjE3OSA1LjIgQyAzNC45OTg1IDExLjA5MTggMzQuOTgxNCAxOC42ODIgMzEuMTM1NTIgMjQuNTU3ICIgLz48ZWxsaXBzZSBpZD0iOTgiIGN5PSIxNS4wMCIgY3g9IjE1LjAwIiB0cmFuc2Zvcm09IiZFMjQ7IiByeD0iMTUuMDAiIHJ5PSIxNS4wMCIgc3R5bGU9InN0cm9rZTpub25lO29wYWNpdHk6MTtmaWxsOnJnYig5MSwxNzgsMTI2KTsiIC8+PHBhdGggc3R5bGU9IiZFMTM7IiB0cmFuc2Zvcm09IiZFMjQ7IiBpZD0iOTkiIGQ9Ik0gMjAuODI0IDIzLjExNSAyMC44MjQgNy4wOTg5OTkgTSAxNy4zNTcyIDE3LjQ4IDE3LjM1NzIgMTIuNzMzOSBNIDEzLjg5MDQgMjEuMjA0NiAxMy44OTA0IDkuMDA5NjAyIE0gMTAuNDIzNiAxOC42MjQ4IDEwLjQyMzYgMTEuNTg5NiBNIDYuOTU2OCAxNi4zOTIzIDYuOTU2OCAxMy44MjIgIiAvPjxlbGxpcHNlIGlkPSIxMDAiIGN5PSIyMy43NSIgY3g9IjUuMDAiIHJ4PSIzLjc1IiByeT0iMy43NSIgc3R5bGU9InN0cm9rZTpyZ2IoMTY5LDE2OSwxNjkpO2ZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1taXRlcmxpbWl0Ojk7b3BhY2l0eToxO3N0cm9rZS13aWR0aDoyLjU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyOyIgLz48ZWxsaXBzZSBpZD0iMTAxIiBjeT0iMjMuNzUiIGN4PSI1LjAwIiByeD0iMy43NSIgcnk9IjMuNzUiIHN0eWxlPSImRTE0OyIgLz48dGV4dCBpZD0iMTAyIiB0cmFuc2Zvcm09IiZFOTsiIHg9IjUuMDAiIHk9IjQ4Ljc1IiBzdHlsZT0ic3Ryb2tlOm5vbmU7Y2xpcC1wYXRoOnVybCgjMTA0X3RleHRfY2xpcHBlcik7Zm9udC1mYW1pbHk6TWljcm9zb2Z0IFNhbnMgU2VyaWY7ZmlsbDpyZ2IoMCwwLDApO2ZvbnQtc2l6ZTo5Ljc1cHQ7b3BhY2l0eToxOyI+PHRzcGFuIGR5PSI5Ljc1cHQiIGlkPSIxMDYiPkZ1bmN0aW9uPC90c3Bhbj48L3RleHQ+PHRleHQgaWQ9IjEwOCIgdHJhbnNmb3JtPSImRTk7IiB4PSI1LjAwIiB5PSI2My40NiIgc3R5bGU9InN0cm9rZTpub25lO2NsaXAtcGF0aDp1cmwoIzExMF90ZXh0X2NsaXBwZXIpO2ZvbnQtZmFtaWx5Ok1pY3Jvc29mdCBTYW5zIFNlcmlmO2ZpbGw6cmdiKDAsMCwwKTtmb250LXNpemU6OS43NXB0O29wYWNpdHk6MTsiPjx0c3BhbiBkeT0iOS43NXB0IiBpZD0iMTEyIj5HZW5lcmF0b3I8L3RzcGFuPjwvdGV4dD48L2c+PGRlZnMgaWQ9ImNsaXBzX2hhdGNoZXNfYW5kX2dyYWRpZW50cyI+PGNsaXBQYXRoIGlkPSI2M190ZXh0X2NsaXBwZXIiPjxyZWN0IHg9IjQwNS4wMCIgeT0iNDguNzUiIHdpZHRoPSI4MS45NyIgaGVpZ2h0PSIxNi4zNCIgaWQ9IjY0IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSI3M190ZXh0X2NsaXBwZXIiPjxyZWN0IHg9IjMwNS4wMCIgeT0iNDguNzUiIHdpZHRoPSI4MC4yNCIgaGVpZ2h0PSIxNi4zNCIgaWQ9Ijc0IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSI4M190ZXh0X2NsaXBwZXIiPjxyZWN0IHg9IjIwNS4wMCIgeT0iNDguNzUiIHdpZHRoPSIzMS4yMSIgaGVpZ2h0PSIxNi4zNCIgaWQ9Ijg0IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSI5M190ZXh0X2NsaXBwZXIiPjxyZWN0IHg9IjEwNS4wMCIgeT0iNDguNzUiIHdpZHRoPSIzNy4wOSIgaGVpZ2h0PSIxNi4zNCIgaWQ9Ijk0IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSIxMDRfdGV4dF9jbGlwcGVyIj48cmVjdCB4PSI1LjAwIiB5PSI0OC43NSIgd2lkdGg9IjY0LjYxIiBoZWlnaHQ9IjMyLjY4IiBpZD0iMTA1IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSIxMTBfdGV4dF9jbGlwcGVyIj48cmVjdCB4PSI1LjAwIiB5PSI2My40NiIgd2lkdGg9IjY0LjYxIiBoZWlnaHQ9IjMyLjY4IiBpZD0iMTExIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=="}}]);