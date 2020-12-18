(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,b=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.a.createElement(b,i(i({ref:t},l),{},{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/packagemanager-49d137554db1eae05f5e00efb60717bf.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(116)),c={title:"Package Manager",id:"packages"},i={unversionedId:"concepts/packages",id:"concepts/packages",isDocsHomePage:!1,title:"Package Manager",description:"Bonsai can be extended by installing software packages containing operators designed for specific tasks, such as video processing or OpenGL shaders.",source:"@site/docs\\concepts\\packages.md",slug:"/concepts/packages",permalink:"/docs/concepts/packages",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/concepts/packages.md",version:"current",sidebar:"docs",previous:{title:"Operators",permalink:"/docs/concepts/operators"},next:{title:"Subjects",permalink:"/docs/concepts/subjects"}},s=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Configure package sources",id:"configure-package-sources",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bonsai can be extended by installing software packages containing operators designed for specific tasks, such as video processing or OpenGL shaders."),Object(o.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("p",null,"When you first run Bonsai, any required packages will be automatically installed and the built-in package manager will be launched so you can further customize your installation:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"The Bonsai package manager",src:n(179).default})),Object(o.b)("p",null,'Packages that are already installed are displayed with a green tick mark to the right of the title. You can install new packages by selecting a package title or description and then clicking on the "Install" button that appears to the right. You can also search for available packages using the text box in the upper-right corner.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ProTip:"),' If you want to start playing with Bonsai quickly, just download the "Starter Pack". This will automatically install all major dependencies used in this guide.\n{: .notice--info}'),Object(o.b)("p",null,'In the "Installed packages" tab you can browse currently installed packages and optionally uninstall them. The "Updates" tab will show you which of those packages can be updated to a newer version.'),Object(o.b)("h2",{id:"configure-package-sources"},"Configure package sources"),Object(o.b)("p",null,'The "Settings" button in the lower-left corner will open a new dialog where you can configure the active package sources. This allows you to specify directly where Bonsai should look for new packages, either online or in your local file system.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Installing custom packages:"),' Most of the available Bonsai packages can be found in the official package source. However, at some point you may want to install your own custom packages, or packages that were shared with you by other means. See the "Extending Bonsai" tutorial section for detailed instructions on how to configure local package sources.\n{: .notice--info}'),Object(o.b)("p",null,"When you are done managing your packages, you can click the \u201cClose\u201d button or hit the Escape key to exit the package manager."))}p.isMDXComponent=!0}}]);