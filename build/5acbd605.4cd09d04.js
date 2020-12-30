(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},175:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/amb-85f52def9df27adf36ddef27ec4df9f2.svg"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(116)),c={id:"amb",title:"Amb"},i={unversionedId:"core/reactive/amb",id:"core/reactive/amb",isDocsHomePage:!1,title:"Amb",description:"Category: Combinator",source:"@site/docs/core/reactive/amb.md",slug:"/core/reactive/amb",permalink:"/bonsai-rx-docs/docs/core/reactive/amb",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/amb.md",version:"current",sidebar:"docs",previous:{title:"Subjects",permalink:"/bonsai-rx-docs/docs/concepts/subjects"},next:{title:"CombineLatest",permalink:"/bonsai-rx-docs/docs/core/reactive/combine_latest"}},s=[],p={rightToc:s};function u(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Category"),": Combinator "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Brief"),": Propagates the observable sequence that reacts first."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) as long as all inputs are of the same type"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output"),": Same as input"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Amb")," operator allows you to setup a race condition between two or more observable sequences. This operator will emit all the items only from the first of the input sequences to produce a notification. You can think of it as a choice between all of the input sequences, where the decision criteria is speed of first response."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Amb operator",src:r(175).default})),Object(a.b)("p",null,"As soon as the first item or notification arrives from the winning sequence, all the subscriptions to the remaining sequences will be cancelled."))}u.isMDXComponent=!0}}]);