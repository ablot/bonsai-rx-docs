(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},165:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/take-323449dce2639e6829e97a61aa16c565.svg"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(116)),c={id:"take",title:"Take"},i={unversionedId:"core/reactive/take",id:"core/reactive/take",isDocsHomePage:!1,title:"Take",description:"Category: Combinator (filtering)",source:"@site/docs\\core\\reactive\\take.md",slug:"/core/reactive/take",permalink:"/docs/core/reactive/take",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/take.md",version:"current",sidebar:"docs",previous:{title:"SkipUntil",permalink:"/docs/core/reactive/skip_until"},next:{title:"TakeUntil",permalink:"/docs/core/reactive/take_until"}},p=[],u={rightToc:p};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Brief"),": Returns the specified number of contiguous elements from the start of the sequence."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Properties"),":\n",Object(o.b)("inlineCode",{parentName:"p"},"Count")," (",Object(o.b)("em",{parentName:"p"},"int"),") - the number of elements to take"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output"),": Same type as input"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Take")," operator allows you to truncate an observable sequence by specifying a maximum number of notifications that should be allowed as the output. As soon as the requested number of notifications is received, ",Object(o.b)("inlineCode",{parentName:"p"},"Take")," will terminate successfully."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Take operator",src:r(165).default})))}s.isMDXComponent=!0}}]);