(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{106:function(e,I,t){"use strict";t.r(I),t.d(I,"frontMatter",(function(){return c})),t.d(I,"metadata",(function(){return C})),t.d(I,"rightToc",(function(){return n})),t.d(I,"default",(function(){return l}));var g=t(3),i=t(7),a=(t(0),t(116)),c={title:"Operators",id:"operators"},C={unversionedId:"concepts/operators",id:"concepts/operators",isDocsHomePage:!1,title:"Operators",description:'{% include toc icon="columns" title="Operators" %}',source:"@site/docs\\concepts\\operators.md",slug:"/concepts/operators",permalink:"/docs/concepts/operators",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/concepts/operators.md",version:"current",sidebar:"docs",previous:{title:"Higher Order Operators",permalink:"/docs/concepts/higher_order"},next:{title:"Package Manager",permalink:"/docs/concepts/packages"}},n=[{value:"Source",id:"source",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Sink",id:"sink",children:[]},{value:"Combinator",id:"combinator",children:[]},{value:"Combinators by Category",id:"combinators-by-category",children:[{value:"{{ site.data.category-textcategory.name }}",id:"-sitedatacategory-textcategoryname-",children:[]},{value:"{{ category.name }}",id:"-categoryname-",children:[]}]}],o={rightToc:n};function l(e){var I=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(g.a)({},o,c,{components:I,mdxType:"MDXLayout"}),Object(a.b)("p",null,'{% include toc icon="columns" title="Operators" %}'),Object(a.b)("p",null,"When building a Bonsai program, you chain together reactive operators to create new observable sequences. There are many different operators, which can create all kinds of observable sequences. These operators can be roughly grouped into different categories, depending on their shared characteristics."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(g.a)({parentName:"tr"},{align:"center"}),"Category"),Object(a.b)("th",Object(g.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(a.b)("img",{alt:"Source",src:t(140).default})),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"generate event streams from devices or files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(a.b)("img",{alt:"Transform",src:t(141).default})),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"convert or process individual data items")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(a.b)("img",{alt:"Condition",src:t(199).default})),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"filter data items matching some specific condition")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(a.b)("img",{alt:"Sink",src:t(142).default})),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"save data or trigger external outputs")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(a.b)("img",{alt:"Combinator",src:t(143).default})),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"manage control flow or synchronize parallel inputs")))),Object(a.b)("h2",{id:"source"},"Source"),Object(a.b)("p",null,"Sources create sequences that generate notifications spontaneously. This means that you can place these nodes without connecting them to any input. Every Bonsai program will contain at least one source. Usually sources represent streams of data which are acquired from devices or files, such as cameras, microphones, accelerometers, WAV files, network sockets, touchpads, etc."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ProTip:")," Even though all sources can be placed independently, sometimes you can still connect an input to them. For example, if you place a ",Object(a.b)("inlineCode",{parentName:"p"},"FileCapture")," source by itself, it will playback all frames of the movie at the specified frame rate. However, if you connect it to an input, the next frame will now be played only when a new notification arrives, allowing you to precisely control video playback.\n{: .notice--info}"),Object(a.b)("h2",{id:"transform"},"Transform"),Object(a.b)("p",null,"Transforms apply an operation to individual data items in a sequence. They always take exactly one input sequence, and generate another sequence which has the same number of elements as the input, but where each item has been modified according to the function specified by the transform."),Object(a.b)("p",null,"In other words, all transforms have a similar style of marble diagram:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Transform operator",src:t(200).default})),Object(a.b)("p",null,"Every transform will always produce exactly one item for every notification generated by the input sequence. Each item that is produced will be the result of applying the transform function on the elements of the input sequence, and is sent out immediately whenever a new notification is received. When the input sequence terminates successfully (or exceptionally), the transformed sequence also terminates."),Object(a.b)("p",null,"The only distinction between different transforms will be in the exact function that is applied to each element (e.g., ",Object(a.b)("inlineCode",{parentName:"p"},"Grayscale")," will convert a sequence of color images to a sequence of grayscale images, while ",Object(a.b)("inlineCode",{parentName:"p"},"FindContours")," will convert a sequence of binary images into a sequence of contours)."),Object(a.b)("h2",{id:"condition"},"Condition"),Object(a.b)("p",null,"Condition operators apply a filter on individual data items in a sequence. Similar to transforms, they always take exactly one input sequence, and generate another sequence where the only emitted elements are items from the original sequence that match the condition criteria."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Condition operator",src:t(201).default})),Object(a.b)("p",null,"The condition function is applied to individual items immediately whenever a new notification is received from the input sequence, and valid items are sent out as soon as they are found to match the criteria. When the input sequence terminates successfully (or exceptionally), the filtered sequence also terminates."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ProTip:")," The ",Object(a.b)("inlineCode",{parentName:"p"},"Condition")," operator allows you to specify arbitrary matching criteria using a node group. The input to the nested node group is the unfiltered sequence, and the output must be a sequence of elements of type ",Object(a.b)("inlineCode",{parentName:"p"},"bool"),", i.e. logical values indicating ",Object(a.b)("inlineCode",{parentName:"p"},"true")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false")," depending on whether the current item is considered to match the criteria.\n{: .notice--info}"),Object(a.b)("h2",{id:"sink"},"Sink"),Object(a.b)("p",null,"Whenever you need to save data into a file, trigger an external output, move a motor, or otherwise generate some kind of side effect with the data processed in Bonsai, you probably need to use a sink operator. Similar to transforms and conditions, sinks also apply a function to every individual element of an observable sequence. However, the application of the function will not modify or filter the input items in any way, which means the output sequence generated by a sink is identical to the input sequence."),Object(a.b)("p",null,"For this reason, all sinks also share a very similar style of marble diagram:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Sink operator",src:t(202).default})),Object(a.b)("p",null,"Because the output sequence of a sink is exactly the same as the input sequence, sinks can always be placed at any point of the workflow without breaking existing behaviour."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ProTip:")," You can chain multiple sinks sequentially as long as the input is compatible. This can be very convenient when you need to run multiple side effects on a single data stream. A common application is to log data into a file while simultaneously transmitting it to an external device.\n{: .notice--info}"),Object(a.b)("h2",{id:"combinator"},"Combinator"),Object(a.b)("p",null,"Although a lot can be done with the right sequence of sources, transforms and sinks, there are many other operators which allow you to express more complex combinations of observables. These operators are grouped together under the ",Object(a.b)("inlineCode",{parentName:"p"},"Combinator")," category, but their behaviour can be extremely diverse."),Object(a.b)("p",null,"Combinators can be used to merge data from multiple sources; control when observable sequences start and stop; or even to create entirely new sequences dynamically. Together, they provide an incredibly flexible toolkit to manipulate asynchronous data streams."),Object(a.b)("h2",{id:"combinators-by-category"},"Combinators by Category"),Object(a.b)("p",null,"{: .no_toc}"),Object(a.b)("p",null,"{% assign operators-by-category = site.operators | group_by: 'category' %}\n{% for category in operators-by-category %}\n{% if site.data.category-text","[category.name]"," %}"),Object(a.b)("h3",{id:"-sitedatacategory-textcategoryname-"},"{{ site.data.category-text","[category.name]"," }}"),Object(a.b)("p",null,"{: .no_toc}\n{% else %}"),Object(a.b)("h3",{id:"-categoryname-"},"{{ category.name }}"),Object(a.b)("p",null,"{: .no_toc}\n{% endif %}\n{% for operator in category.items %}"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[{{ operator.title }}]","({{ operator.url }}) -- {{ operator.excerpt }}\n{% endfor %}\n{% endfor %}")))}l.isMDXComponent=!0},116:function(e,I,t){"use strict";t.d(I,"a",(function(){return A})),t.d(I,"b",(function(){return m}));var g=t(0),i=t.n(g);function a(e,I,t){return I in e?Object.defineProperty(e,I,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[I]=t,e}function c(e,I){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);I&&(g=g.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),t.push.apply(t,g)}return t}function C(e){for(var I=1;I<arguments.length;I++){var t=null!=arguments[I]?arguments[I]:{};I%2?c(Object(t),!0).forEach((function(I){a(e,I,t[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(t,I))}))}return e}function n(e,I){if(null==e)return{};var t,g,i=function(e,I){if(null==e)return{};var t,g,i={},a=Object.keys(e);for(g=0;g<a.length;g++)t=a[g],I.indexOf(t)>=0||(i[t]=e[t]);return i}(e,I);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(g=0;g<a.length;g++)t=a[g],I.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),l=function(e){var I=i.a.useContext(o),t=I;return e&&(t="function"==typeof e?e(I):C(C({},I),e)),t},A=function(e){var I=l(e.components);return i.a.createElement(o.Provider,{value:I},e.children)},r={inlineCode:"code",wrapper:function(e){var I=e.children;return i.a.createElement(i.a.Fragment,{},I)}},b=i.a.forwardRef((function(e,I){var t=e.components,g=e.mdxType,a=e.originalType,c=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),A=l(t),b=g,m=A["".concat(c,".").concat(b)]||A[b]||r[b]||a;return t?i.a.createElement(m,C(C({ref:I},o),{},{components:t})):i.a.createElement(m,C({ref:I},o))}));function m(e,I){var t=arguments,g=I&&I.mdxType;if("string"==typeof e||g){var a=t.length,c=new Array(a);c[0]=b;var C={};for(var n in I)hasOwnProperty.call(I,n)&&(C[n]=I[n]);C.originalType=e,C.mdxType="string"==typeof e?e:g,c[1]=C;for(var o=2;o<a;o++)c[o]=t[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},140:function(e,I,t){"use strict";t.r(I),I.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzOG1tIg0KICAgaGVpZ2h0PSIxMm1tIg0KICAgdmlld0JveD0iMCAwIDM3Ljk5OTk5OCAxMiINCiAgIHZlcnNpb249IjEuMSINCiAgIGlkPSJzdmc0NTk2Ig0KICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InNvdXJjZS5zdmciPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczQ1OTAiPg0KICAgIDxjbGlwUGF0aA0KICAgICAgIGlkPSIxMl90ZXh0X2NsaXBwZXIiPg0KICAgICAgPHJlY3QNCiAgICAgICAgIHg9IjYiDQogICAgICAgICB5PSI3NiINCiAgICAgICAgIHdpZHRoPSIxMjYuMTMiDQogICAgICAgICBoZWlnaHQ9IjI2LjM4OTk5OSINCiAgICAgICAgIGlkPSIxMyIgLz4NCiAgICA8L2NsaXBQYXRoPg0KICAgIDxjbGlwUGF0aA0KICAgICAgIGlkPSI0OF90ZXh0X2NsaXBwZXIiPg0KICAgICAgPHJlY3QNCiAgICAgICAgIHg9IjYiDQogICAgICAgICB5PSI1NTYiDQogICAgICAgICB3aWR0aD0iMTUyLjYwMDAxIg0KICAgICAgICAgaGVpZ2h0PSIyNi4zODk5OTkiDQogICAgICAgICBpZD0iNDkiIC8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJiYXNlIg0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnpvb209IjIuOTQwNzY2MSINCiAgICAgaW5rc2NhcGU6Y3g9IjQyLjI1MTM0OCINCiAgICAgaW5rc2NhcGU6Y3k9IjMxLjYxOTM2NCINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiDQogICAgIHNob3dncmlkPSJmYWxzZSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIg0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgZml0LW1hcmdpbi10b3A9IjAiDQogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCINCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCINCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+DQogIDxtZXRhZGF0YQ0KICAgICBpZD0ibWV0YWRhdGE0NTkzIj4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIg0KICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTkuNTkxODIsMjA5LjM0MjM4KSI+DQogICAgPHRleHQNCiAgICAgICBjbGlwLXBhdGg9InVybCgjMTJfdGV4dF9jbGlwcGVyKSINCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjIxcHg7Zm9udC1mYW1pbHk6J01pY3Jvc29mdCBTYW5zIFNlcmlmJztvcGFjaXR5OjE7ZmlsbDojMDAwMDAwO3N0cm9rZTpub25lO3NoYXBlLXJlbmRlcmluZzphdXRvIg0KICAgICAgIHk9Ijc2Ig0KICAgICAgIHg9IjYiDQogICAgICAgaWQ9IjEwIg0KICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTgxODE4MTgsMCwwLDAuMTgxODE4MTgsLTQwMi44NTQyNSwtMjE5LjYxMjE5KSI+DQogICAgICA8dHNwYW4NCiAgICAgICAgIGlkPSIxNCINCiAgICAgICAgIGR5PSIxNS43NXB0Ij5Tb3VyY2U8L3RzcGFuPg0KICAgIDwvdGV4dD4NCiAgICA8Zw0KICAgICAgIGlkPSJnMjciDQogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45Mzg1MTk3NywwLDAsMC45Mzg1MTk3NywtNS42OTExMzgsMS42MjYxNzkpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIg0KICAgICAgICAgaWQ9Ijk2Ig0KICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7c3Ryb2tlOiNhOWE5YTk7c3Ryb2tlLXdpZHRoOjAuODUyNDA2MDg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6OTtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICAgIGQ9Im0gLTQyNS45MTQ0MSwtMjIyLjU3MjM1IGMgMS42Mjc4OCwyLjUxMTEgMS42MjA1OSw1Ljc0NjA3IC0wLjAxODUsOC4yNTAwMSIgLz4NCiAgICAgIDxjaXJjbGUNCiAgICAgICAgIHI9IjYuMzkzMDQ1OSINCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNWJiMjdlO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQyNjIwMzA0O3NoYXBlLXJlbmRlcmluZzphdXRvIg0KICAgICAgICAgY3g9Ii00MzIuODA5OTQiDQogICAgICAgICBjeT0iLTIxOC4zOTU1NyINCiAgICAgICAgIGlkPSI5NyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K"},141:function(e,I,t){"use strict";t.r(I),I.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzOG1tIg0KICAgaGVpZ2h0PSIxMm1tIg0KICAgdmlld0JveD0iMCAwIDM4LjAwMDAwMSAxMiINCiAgIHZlcnNpb249IjEuMSINCiAgIGlkPSJzdmc1MTk4Ig0KICAgc29kaXBvZGk6ZG9jbmFtZT0idHJhbnNmb3JtLnN2ZyINCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczUxOTIiPg0KICAgIDxjbGlwUGF0aA0KICAgICAgIGlkPSIyNF90ZXh0X2NsaXBwZXIiPg0KICAgICAgPHJlY3QNCiAgICAgICAgIHg9IjYiDQogICAgICAgICB5PSIyMzYiDQogICAgICAgICB3aWR0aD0iMTAzLjMiDQogICAgICAgICBoZWlnaHQ9IjI2LjM4OTk5OSINCiAgICAgICAgIGlkPSIyNSIgLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9ImJhc2UiDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6em9vbT0iMi45NDA3NjYxIg0KICAgICBpbmtzY2FwZTpjeD0iMTI3LjU3NzMzIg0KICAgICBpbmtzY2FwZTpjeT0iMS41MzU3ODE0Ig0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSINCiAgICAgc2hvd2dyaWQ9ImZhbHNlIg0KICAgICBmaXQtbWFyZ2luLXRvcD0iMCINCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIg0KICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIg0KICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIg0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTUxOTUiPg0KICAgIDxyZGY6UkRGPg0KICAgICAgPGNjOldvcmsNCiAgICAgICAgIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgIDxkYzp0eXBlDQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPg0KICAgICAgPC9jYzpXb3JrPg0KICAgIDwvcmRmOlJERj4NCiAgPC9tZXRhZGF0YT4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiDQogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDkuOTczNjUsLTkxLjE3NzY5MikiPg0KICAgIDx0ZXh0DQogICAgICAgY2xpcC1wYXRoPSJ1cmwoIzI0X3RleHRfY2xpcHBlcikiDQogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICB5PSIyMzYiDQogICAgICAgeD0iNiINCiAgICAgICBpZD0iMjIiDQogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xODE4MTgxOCwwLDAsMC4xODE4MTgxOCwzNjYuNzk4ODUsNTEuODE2OTg2KSI+DQogICAgICA8dHNwYW4NCiAgICAgICAgIGlkPSIyNiINCiAgICAgICAgIGR5PSIxNS43NXB0Ij5UcmFuc2Zvcm08L3RzcGFuPg0KICAgIDwvdGV4dD4NCiAgICA8Y2lyY2xlDQogICAgICAgaWQ9Ijc3Ig0KICAgICAgIGN5PSI5Ny4xNzc2ODkiDQogICAgICAgY3g9IjM1Ny42NzM2NSINCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzQ0OWFkZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zOTk5OTk5ODtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICByPSI2IiAvPg0KICA8L2c+DQo8L3N2Zz4NCg=="},142:function(e,I,t){"use strict";t.r(I),I.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzOG1tIg0KICAgaGVpZ2h0PSIxNG1tIg0KICAgdmlld0JveD0iMCAwIDM4LjAwMDAwMSAxNCINCiAgIHZlcnNpb249IjEuMSINCiAgIGlkPSJzdmc1ODU2Ig0KICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InNpbmsuc3ZnIj4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnM1ODUwIj4NCiAgICA8Y2xpcFBhdGgNCiAgICAgICBpZD0iMzZfdGV4dF9jbGlwcGVyIj4NCiAgICAgIDxyZWN0DQogICAgICAgICB4PSI2Ig0KICAgICAgICAgeT0iMzk2Ig0KICAgICAgICAgd2lkdGg9IjQ5LjIwOTk5OSINCiAgICAgICAgIGhlaWdodD0iMjYuMzg5OTk5Ig0KICAgICAgICAgaWQ9IjM3IiAvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0iYmFzZSINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTp6b29tPSI0LjE1ODg3MTMiDQogICAgIGlua3NjYXBlOmN4PSI2LjQ4MzU1MDEiDQogICAgIGlua3NjYXBlOmN5PSIyNS4xODgyMjMiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIg0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGZpdC1tYXJnaW4tdG9wPSIwIg0KICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiDQogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiDQogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPg0KICA8bWV0YWRhdGENCiAgICAgaWQ9Im1ldGFkYXRhNTg1MyI+DQogICAgPHJkZjpSREY+DQogICAgICA8Y2M6V29yaw0KICAgICAgICAgcmRmOmFib3V0PSIiPg0KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4NCiAgICAgICAgPGRjOnR5cGUNCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4NCiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+DQogICAgICA8L2NjOldvcms+DQogICAgPC9yZGY6UkRGPg0KICA8L21ldGFkYXRhPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSINCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NC45NjUxOCwtMTQ2LjYzMDA4KSI+DQogICAgPHRleHQNCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjE4MTgxODE4LDAsMCwwLjE4MTgxODE4LDE5MS43MDI3NSw3OC4zNDI4OCkiDQogICAgICAgY2xpcC1wYXRoPSJ1cmwoIzM2X3RleHRfY2xpcHBlcikiDQogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICB5PSIzOTYiDQogICAgICAgeD0iNiINCiAgICAgICBpZD0iMzQiPg0KICAgICAgPHRzcGFuDQogICAgICAgICBpZD0iMzgiDQogICAgICAgICBkeT0iMTUuNzVwdCI+U2luazwvdHNwYW4+DQogICAgPC90ZXh0Pg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7c3Ryb2tlOiNhOWE5YTk7c3Ryb2tlLXdpZHRoOjAuODAwMDAyMTY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6OTtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICBpZD0iNTkiDQogICAgICAgZD0ibSAxODAuNzI4MzcsMTYwLjA3NDQ5IGMgLTIuNzAxMDUsLTAuNTc2MzUgLTQuODA3NjEsLTIuNjkyMzMgLTUuMzcxNjIsLTUuMzk2MDEiDQogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4NCiAgICA8Y2lyY2xlDQogICAgICAgaWQ9IjYwIg0KICAgICAgIGN5PSIxNTIuNzk0NDkiDQogICAgICAgY3g9IjE4Mi42NjUxNiINCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzliNWJiMztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40MDAwMDEwODtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICByPSI2LjAwMDAxNjciIC8+DQogIDwvZz4NCjwvc3ZnPg0K"},143:function(e,I,t){"use strict";t.r(I),I.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzOG1tIg0KICAgaGVpZ2h0PSIxMm1tIg0KICAgdmlld0JveD0iMCAwIDM4IDEyIg0KICAgdmVyc2lvbj0iMS4xIg0KICAgaWQ9InN2ZzY0OTYiDQogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIg0KICAgc29kaXBvZGk6ZG9jbmFtZT0iY29tYmluYXRvci5zdmciPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczY0OTAiPg0KICAgIDxjbGlwUGF0aA0KICAgICAgIGlkPSI0OF90ZXh0X2NsaXBwZXIiPg0KICAgICAgPHJlY3QNCiAgICAgICAgIHg9IjYiDQogICAgICAgICB5PSI1NTYiDQogICAgICAgICB3aWR0aD0iMTUyLjYwMDAxIg0KICAgICAgICAgaGVpZ2h0PSIyNi4zODk5OTkiDQogICAgICAgICBpZD0iNDkiIC8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJiYXNlIg0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnpvb209IjIuMDc5NDM1NiINCiAgICAgaW5rc2NhcGU6Y3g9IjEwNC4yNTAzMyINCiAgICAgaW5rc2NhcGU6Y3k9IjIxLjkzODY0MSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiDQogICAgIHNob3dncmlkPSJmYWxzZSINCiAgICAgZml0LW1hcmdpbi10b3A9IjAiDQogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCINCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCINCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+DQogIDxtZXRhZGF0YQ0KICAgICBpZD0ibWV0YWRhdGE2NDkzIj4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIg0KICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDEuMTU2NDk1LC0zNS45OTMxNykiPg0KICAgIDx0ZXh0DQogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xODE4MTgxOCwwLDAsMC4xODE4MTgxOCw1Ny44ODY2MDksLTYxLjU0OTM1NCkiDQogICAgICAgY2xpcC1wYXRoPSJ1cmwoIzQ4X3RleHRfY2xpcHBlcikiDQogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byINCiAgICAgICB5PSI1NTYiDQogICAgICAgeD0iNiINCiAgICAgICBpZD0iNDYiPg0KICAgICAgPHRzcGFuDQogICAgICAgICBpZD0iNTAiDQogICAgICAgICBkeT0iMTUuNzVwdCI+Q29tYmluYXRvcjwvdHNwYW4+DQogICAgPC90ZXh0Pg0KICAgIDxjaXJjbGUNCiAgICAgICBpZD0iNjkiDQogICAgICAgY3k9IjQxLjk5MzE3MiINCiAgICAgICBjeD0iNDguODU2NDk1Ig0KICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZWVjMDRiO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjM5OTk5OTk4O3NoYXBlLXJlbmRlcmluZzphdXRvIg0KICAgICAgIHI9IjYiIC8+DQogIDwvZz4NCjwvc3ZnPg0K"},199:function(e,I,t){"use strict";t.r(I),I.default=t.p+"assets/images/condition-899ef32ea7f597f266dc6bc71fccb3f6.svg"},200:function(e,I,t){"use strict";t.r(I),I.default=t.p+"assets/images/transform-marble-15a8419102b42c0c3a8861d81872941e.svg"},201:function(e,I,t){"use strict";t.r(I),I.default=t.p+"assets/images/condition-marble-4fe6f5afde49e242272833c60ef1c5a7.svg"},202:function(e,I,t){"use strict";t.r(I),I.default=t.p+"assets/images/sink-marble-ef09ca6b1bd81d9aa26750da4033f0d2.svg"}}]);