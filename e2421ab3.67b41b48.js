(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(121)),c={id:"time_interval",title:"TimeInterval"},o={unversionedId:"core/reactive/time_interval",id:"core/reactive/time_interval",isDocsHomePage:!1,title:"TimeInterval",description:"Category: Combinator",source:"@site/docs/core/reactive/time_interval.md",slug:"/core/reactive/time_interval",permalink:"/bonsai-rx-docs/docs/core/reactive/time_interval",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/core/reactive/time_interval.md",version:"current",sidebar:"docs",previous:{title:"TakeUntil",permalink:"/bonsai-rx-docs/docs/core/reactive/take_until"},next:{title:"Zip",permalink:"/bonsai-rx-docs/docs/core/reactive/zip"}},l=[],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Combinator"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Records the time interval between consecutive elements produced by the sequence."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (integers, strings, tuples, arrays) "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"System.Reactive.TimeInterval<input_type>"),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Interval")," (",Object(i.b)("em",{parentName:"li"},"System.TimeSpan"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Ticks")," (",Object(i.b)("em",{parentName:"li"},"long"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Days")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hours")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Milliseconds")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Minutes")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Seconds")," (",Object(i.b)("em",{parentName:"li"},"int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TotalDays")," (",Object(i.b)("em",{parentName:"li"},"double"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TotalHours")," (",Object(i.b)("em",{parentName:"li"},"double"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TotalMilliseconds")," (",Object(i.b)("em",{parentName:"li"},"double"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TotalMinutes")," (",Object(i.b)("em",{parentName:"li"},"double"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TotalSeconds")," (",Object(i.b)("em",{parentName:"li"},"double"),")")))))}p.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,O=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);