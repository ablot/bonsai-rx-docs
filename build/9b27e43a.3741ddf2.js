(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/take-447c45a66f9f4ef3282d4a7eeb935058.svg"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(116)),c={id:"take",title:"Take"},i={unversionedId:"core/reactive/take",id:"core/reactive/take",isDocsHomePage:!1,title:"Take",description:"Category: Combinator (filtering)",source:"@site/docs/core/reactive/take.md",slug:"/core/reactive/take",permalink:"/bonsai-rx-docs/docs/core/reactive/take",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/take.md",version:"current",sidebar:"docs",previous:{title:"SkipUntil",permalink:"/bonsai-rx-docs/docs/core/reactive/skip_until"},next:{title:"TakeUntil",permalink:"/bonsai-rx-docs/docs/core/reactive/take_until"}},s=[],p={rightToc:s};function u(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Brief"),": Returns the specified number of contiguous elements from the start of the sequence."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Properties"),":\n",Object(a.b)("inlineCode",{parentName:"p"},"Count")," (",Object(a.b)("em",{parentName:"p"},"int"),") - the number of elements to take"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output"),": Same type as input"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Take")," operator allows you to truncate an observable sequence by specifying a maximum number of notifications that should be allowed as the output. As soon as the requested number of notifications is received, ",Object(a.b)("inlineCode",{parentName:"p"},"Take")," will terminate successfully."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Take operator",src:r(181).default})))}u.isMDXComponent=!0}}]);