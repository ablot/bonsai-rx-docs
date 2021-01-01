(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"Highlight",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),c=(a(0),a(121)),b={id:"writing_docs",title:"Writing Documentation"},r={unversionedId:"meta/writing_docs",id:"meta/writing_docs",isDocsHomePage:!1,title:"Writing Documentation",description:"How to develop a doc page",source:"@site/docs\\meta\\writing_docs.md",slug:"/meta/writing_docs",permalink:"/bonsai-rx-docs/docs/meta/writing_docs",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/meta/writing_docs.md",version:"current",sidebar:"docs",previous:{title:"KeyDown",permalink:"/bonsai-rx-docs/docs/fundamentals/windows_input/key_down"},next:{title:"Creating Packages",permalink:"/bonsai-rx-docs/docs/meta/creating_packages"}},l=[{value:"How to develop a doc page",id:"how-to-develop-a-doc-page",children:[]},{value:"How to start working locally using <code>yarn</code>",id:"how-to-start-working-locally-using-yarn",children:[]},{value:"Documentation Style Guide",id:"documentation-style-guide",children:[]},{value:"Markdown Cheatsheet",id:"markdown-cheatsheet",children:[{value:"Headers",id:"headers",children:[]}]},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",children:[{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",children:[]},{value:"Emphasis",id:"emphasis",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Links",id:"links",children:[]},{value:"Internal links",id:"internal-links",children:[]},{value:"Images",id:"images",children:[]},{value:"Code",id:"code",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Blockquotes",id:"blockquotes",children:[]},{value:"Inline HTML",id:"inline-html",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Javascript",id:"javascript",children:[]}]}],o=function(e){var t=e.children,a=e.color;return Object(c.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},j={rightToc:l,Highlight:o};function s(e){var t=e.components,b=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},j,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-develop-a-doc-page"},"How to develop a doc page"),Object(c.b)("p",null,"All documentation is composed in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub-flavored Markdown syntax"),". To add pages you'll need to be willing to submit a pull request so your documentation draft can be reviewed and merged into the documentation."),Object(c.b)("p",null,"There are two ways"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"If your change is just a typo or additional text, just use the ",Object(c.b)("inlineCode",{parentName:"li"},"Edit this page")," button on GitHub."),Object(c.b)("li",{parentName:"ol"},"If your change requires a new page or additional files, follow the instructions to edit on your local machine and submit a pull request")),Object(c.b)("p",null,"Please see the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/spewil/bonsai-rx-docs"}),"GitHub repo")," for instructions, and don't hesitate to reach out on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitter.im/bonsai-docs/community"}),"Gitter")," for questions."),Object(c.b)("h2",{id:"how-to-start-working-locally-using-yarn"},"How to start working locally using ",Object(c.b)("inlineCode",{parentName:"h2"},"yarn")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install ",Object(c.b)("inlineCode",{parentName:"li"},"yarn")," on your system"),Object(c.b)("li",{parentName:"ul"},"Go to the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/spewil/bonsai-rx-docs"}),"docs repo")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"git clone")," the repo and make a new feature branch for your contributions"),Object(c.b)("li",{parentName:"ul"},"Inside the folder, run ",Object(c.b)("inlineCode",{parentName:"li"},"yarn"),", this will install packages"),Object(c.b)("li",{parentName:"ul"},"Run ",Object(c.b)("inlineCode",{parentName:"li"},"yarn start")," to build and serve the site, this should open a local development server"),Object(c.b)("li",{parentName:"ul"},"You can now make changes to files in ",Object(c.b)("inlineCode",{parentName:"li"},"docs")," and the site should update"),Object(c.b)("li",{parentName:"ul"},"If you want to add a new page, you must add it to the ",Object(c.b)("inlineCode",{parentName:"li"},"sidebars.js")," file, for more information see ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/docs/sidebar/"}),"here")),Object(c.b)("li",{parentName:"ul"},"If you want to embed an image in a doc, save it as an ",Object(c.b)("inlineCode",{parentName:"li"},".svg")," file in an ",Object(c.b)("inlineCode",{parentName:"li"},"Images")," folder inside the same directory as the respective doc. To save your workflow as ",Object(c.b)("inlineCode",{parentName:"li"},".svg")," use ",Object(c.b)("inlineCode",{parentName:"li"},"Ctrl + Shift + E")),Object(c.b)("li",{parentName:"ul"},"When you're finished editing or ready to show off your new contribution, fork the repo, push your branch to the forked repo, and submit a pull request for your branch on GitHub with an explanation of your changes; for more information about this process, see the ",Object(c.b)("inlineCode",{parentName:"li"},"Public Forked Project")," section ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project"}),"here"))),Object(c.b)("h2",{id:"documentation-style-guide"},"Documentation Style Guide"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Each page not in ",Object(c.b)("inlineCode",{parentName:"li"},"Tutorials")," should reflect the use of a single or handful of nodes"),Object(c.b)("li",{parentName:"ul"},"The filename of a doc page should be identical to its ",Object(c.b)("inlineCode",{parentName:"li"},"id")," in the markdown header"),Object(c.b)("li",{parentName:"ul"},"Match the formatting you see in the rest of the project")),Object(c.b)("h2",{id:"markdown-cheatsheet"},"Markdown Cheatsheet"),Object(c.b)("p",null,"You can write content using"),Object(c.b)("h3",{id:"headers"},"Headers"),Object(c.b)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),Object(c.b)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),Object(c.b)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),Object(c.b)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),Object(c.b)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),Object(c.b)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"emphasis"},"Emphasis"),Object(c.b)("p",null,"Emphasis, aka italics, with ",Object(c.b)("em",{parentName:"p"},"asterisks")," or ",Object(c.b)("em",{parentName:"p"},"underscores"),"."),Object(c.b)("p",null,"Strong emphasis, aka bold, with ",Object(c.b)("strong",{parentName:"p"},"asterisks")," or ",Object(c.b)("strong",{parentName:"p"},"underscores"),"."),Object(c.b)("p",null,"Combined emphasis with ",Object(c.b)("strong",{parentName:"p"},"asterisks and ",Object(c.b)("em",{parentName:"strong"},"underscores")),"."),Object(c.b)("p",null,"Strikethrough uses two tildes. ",Object(c.b)("del",{parentName:"p"},"Scratch this.")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"lists"},"Lists"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"First ordered list item"),Object(c.b)("li",{parentName:"ol"},"Another item",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Unordered sub-list."))),Object(c.b)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Ordered sub-list"))),Object(c.b)("li",{parentName:"ol"},"And another item.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unordered list can use asterisks")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Or minuses")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Or pluses")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"links"},"Links"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.google.com/"}),"I'm an inline-style link")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.google.com/",title:"Google's Homepage"}),"I'm an inline-style link with title")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mozilla.org/"}),"I'm a reference-style link")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://slashdot.org/"}),"You can use numbers for reference-style link definitions")),Object(c.b)("p",null,"Or leave it empty and use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.reddit.com/"}),"link text itself"),"."),Object(c.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," and sometimes example.com (but not on GitHub, for example)."),Object(c.b)("p",null,"Some text to show that the reference links can follow later."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"internal-links"},"Internal links"),Object(c.b)("p",null,"This is a link to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../fundamentals/video_acquisition"}),"another document.")," This is a link to an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com/"}),"external page.")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"images"},"Images"),Object(c.b)("p",null,"Here's our logo (hover to see the title text):"),Object(c.b)("p",null,"Inline-style: ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"}))),Object(c.b)("p",null,"Reference-style: ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"}))),Object(c.b)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to markdown file."),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(205).default})),Object(c.b)("hr",null),Object(c.b)("h3",{id:"code"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'s = "Python syntax highlighting"\nprint(s)\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tables"},"Tables"),Object(c.b)("p",null,"Colons can be used to align columns."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tables"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Are"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cool"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 3 is"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"right-aligned"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$1600")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 2 is"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"centered"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$12")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zebra stripes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"are neat"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$1")))),Object(c.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Markdown"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Less"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pretty"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"Still")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"renders")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"nicely"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"blockquotes"},"Blockquotes"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.")),Object(c.b)("p",null,"Quote break."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",Object(c.b)("em",{parentName:"p"},"put")," ",Object(c.b)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inline-html"},"Inline HTML"),Object(c.b)("dl",null,Object(c.b)("dt",null,"Definition list"),Object(c.b)("dd",null,"Is something people use sometimes."),Object(c.b)("dt",null,"Markdown in HTML"),Object(c.b)("dd",null,"Does *not* work **very** well. Use HTML ",Object(c.b)("em",null,"tags"),".")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"line-breaks"},"Line Breaks"),Object(c.b)("p",null,"Here's a line for us to start with."),Object(c.b)("p",null,"This line is separated from the one above by two newlines, so it will be a ",Object(c.b)("em",{parentName:"p"},"separate paragraph"),"."),Object(c.b)("p",null,"This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the ",Object(c.b)("em",{parentName:"p"},"same paragraph"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"admonitions"},"Admonitions"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a note"))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a tip"))),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is important"))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a caution"))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a warning"))),Object(c.b)("h3",{id:"javascript"},"Javascript"),Object(c.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(c.b)(o,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(c.b)(o,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(c.b)("p",null,"I can write ",Object(c.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(c.b)("em",{parentName:"p"},"JSX"),"!"))}s.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),j=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=j(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=j(a),g=n,u=s["".concat(b,".").concat(g)]||s[g]||N[g]||c;return a?i.a.createElement(u,r(r({ref:t},o),{},{components:a})):i.a.createElement(u,r({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var o=2;o<c;o++)b[o]=a[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},205:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzMCINCiAgIGhlaWdodD0iMzAiDQogICBpZD0ic3ZnMjk4NSINCiAgIHZlcnNpb249IjEuMSINCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJCb25zYWkuc3ZnIg0KICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJCb25zYWkucG5nIg0KICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjEwMzQuMTcyNyINCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMDM0LjE3MjciPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczI5ODciIC8+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9ImJhc2UiDQogICAgIHBhZ2Vjb2xvcj0iIzQ3NDc0NyINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnpvb209IjgiDQogICAgIGlua3NjYXBlOmN4PSIxOC44NTU2OTQiDQogICAgIGlua3NjYXBlOmN5PSItOC43NjMyMzQiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIyIg0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTczNSINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA4MCINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE4Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iNTEiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiDQogICAgIHVuaXRzPSJweCINCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSINCiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSI+DQogICAgPHNvZGlwb2RpOmd1aWRlDQogICAgICAgb3JpZW50YXRpb249IjAsMSINCiAgICAgICBwb3NpdGlvbj0iLTYzLjc2OTUzMSwxNSINCiAgICAgICBpZD0iZ3VpZGU0NDQ0Ig0KICAgICAgIGlua3NjYXBlOmxvY2tlZD0iZmFsc2UiDQogICAgICAgaW5rc2NhcGU6bGFiZWw9IiINCiAgICAgICBpbmtzY2FwZTpjb2xvcj0icmdiKDAsMCwyNTUpIiAvPg0KICAgIDxzb2RpcG9kaTpndWlkZQ0KICAgICAgIG9yaWVudGF0aW9uPSIxLDAiDQogICAgICAgcG9zaXRpb249IjE1LDQ1LjcyNzUzOSINCiAgICAgICBpZD0iZ3VpZGU0NDQ2Ig0KICAgICAgIGlua3NjYXBlOmxvY2tlZD0iZmFsc2UiDQogICAgICAgaW5rc2NhcGU6bGFiZWw9IiINCiAgICAgICBpbmtzY2FwZTpjb2xvcj0icmdiKDAsMCwyNTUpIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTI5OTAiPg0KICAgIDxyZGY6UkRGPg0KICAgICAgPGNjOldvcmsNCiAgICAgICAgIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgIDxkYzp0eXBlDQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICAgIDxkYzp0aXRsZSAvPg0KICAgICAgPC9jYzpXb3JrPg0KICAgIDwvcmRmOlJERj4NCiAgPC9tZXRhZGF0YT4NCiAgPGcNCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMiINCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPg0KICAgIDxjaXJjbGUNCiAgICAgICBzdHlsZT0iZmlsbDojZWMyMjI3O3N0cm9rZS13aWR0aDoyIg0KICAgICAgIGlkPSJwYXRoMTIwNiINCiAgICAgICBjeD0iMTUiDQogICAgICAgY3k9IjE0Ljk5OTk4MyINCiAgICAgICByPSIxNSIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMTcxNTA0ODMiDQogICAgICAgZD0iTSAxMi4yNjE3MTksMy4zNjkxNDA2IEMgMTAuNjI5Njc4LDMuMzY5MTQwNiA5LjI2ODI3NDEsNC41MzA2NjU2IDguOTYwOTM3NSw2LjA3MjI2NTYgOC43MTAwMjYsNS45MzM2NjU2IDguNDIwNzIyOSw1Ljg1ODA0MDYgOC4xMTEzMjgxLDUuODY5MTQwNiA3LjI3NTU4NTEsNS44OTk3NDA2IDYuNTg0NjgyOSw2LjU3NzEwOTQgNi41MzkwNjI1LDcuNDEyMTA5NCA2LjQ4NzYxMTIsOC4zNTY4MDkgNy4yMzgzNzQyLDkuMTM4NjcyIDguMTcxODc1LDkuMTM4NjcyIDguNjc3Mjk5OCw5LjEzODY3MiA5LjEyOTcyNTYsOC45MDkxMjggOS40Mjk2ODc1LDguNTQ4ODI4IDkuODAzOTEzMSw5LjEzMTMyOCAxMC4zNTIyOTIsOS41OTI2NjkgMTEuMDAxOTUzLDkuODU1NDY5IDExLjAwMDkyMyw5Ljg3NzI2OSAxMSw5Ljg5NzkyMiAxMSw5LjkxOTkyMiAxMC41NDQzMTIsOS42MzI4MjIgMTAuMDA0MDk5LDkuNDY2Nzk3IDkuNDI1NzgxMiw5LjQ2Njc5NyA3Ljc5MzA1NTQsOS40NjY3OTcgNi40NzA3MDMxLDEwLjc4OTM3NSA2LjQ3MDcwMzEsMTIuNDIxODc1IDYuNDcwNzAzMSwxMi40NTE3NzUgNi40NzE3OTg3LDEyLjQ4MjMxOSA2LjQ3MjY1NjIsMTIuNTExNzE5IDYuMTg3NDQzNywxMi40MzM1MTkgNS44NzkzNzQ0LDEyLjQwNzU3MiA1LjU2MDU0NjksMTIuNDUxMTcyIDQuNDkwNTI4MiwxMi41OTc3NzIgMy42NjUyNDczLDEzLjUwMzEzMSAzLjYxMzI4MTIsMTQuNTgyMDMxIDMuNTg5OTU2NiwxNS4wNjg0MzEgMy43MTkzOTIyLDE1LjUyMzY0NCAzLjk1ODk4NDQsMTUuOTAyMzQ0IDMuNTk2MDgwMiwxNi4xMzkyNDQgMy4zNjU1NzUyLDE2LjU1OTkwMyAzLjQwMDM5MDYsMTcuMDMzMjAzIDMuNDQ1ODM5NCwxNy42NDc5MDMgMy45NTQ2MTAyLDE4LjE0NDA4MSA0LjU3MDMxMjUsMTguMTc1NzgxIDUuMjc4NjI3NCwxOC4yMTIxODEgNS44NjUzOTU3LDE3LjY1NDgzMSA1Ljg3NSwxNi45NTcwMzEgNi4xNzUzMDQ5LDE2Ljk1NjgzMSA2LjQ2MDU5NywxNi44OTczMTYgNi43MjI2NTYyLDE2Ljc5MTAxNiA3LjMyMzk1MjEsMTYuNjI4NDE2IDguNzI0Njg1LDE2LjMzODA1NiAxMC4wMzUxNTYsMTYuNzIyNjU2IDExLjE2MTc3MSwxNy4wNTMzNTYgMTIuMDMyNzA2LDE4LjE5MTk5MSAxMi4wNDg4MjgsMTguMjEyODkxIDEyLjUyODUyOCwxOS4yMTY4OTEgMTQuMDM0MzA0LDE5Ljg4MjI5NyAxNC4wOTU3MDMsMjAuNTI5Mjk3IDE0LjI4NDcwMSwyMi41MjQxOTcgOS44MTUwOTIyLDIzLjIwNzk3OCA3LjI4NzEwOTQsMjMuODkyNTc4IDExLjc0ODE4NywyNy42MzU4NzggMTguMjUxODEzLDI3LjU1Nzc1MyAyMi43MTI4OTEsMjMuODE0NDUzIDIyLjcxMjg5MSwyMy44MTQ0NTMgMTcuNzA2ODQ5LDIzLjE1NTA5MSAxNi42OTUzMTIsMjAuMzM3ODkxIDE1LjkzMzgzMSwxOC4yMTY5OTEgMTQuMDY5MzYsMTcuOTk1MjY5IDE0LjA2MjUsMTcuMjMwNDY5IDE0LjA1MTY5NiwxNi4wMzc5NjkgMTYuMDU3NTYzLDE2LjAwOTg2OSAxNi4wOTM3NSwxNC41NDI5NjkgMTYuMDk4NTUzLDE0LjM0ODU2OSAxNi4wNzU0NTksMTQuMTc0NDMxIDE2LjAzNTE1NiwxNC4wMTk1MzEgMTYuNjc2OTI3LDEzLjk2NDYzMSAxNy4yNjQyMDQsMTMuNzIwODUgMTcuNzQyMTg4LDEzLjM0Mzc1IDE3Ljc0NzY3NSwxMy4zNTQ5NSAxNy43NTQyNzgsMTMuMzY1NzUzIDE3Ljc1OTc2NiwxMy4zNzY5NTMgMTcuMzc4MTY4LDEzLjY2NjI1MyAxNy4xNTMyMTUsMTQuMTUxMjk0IDE3LjIzODI4MSwxNC42ODM1OTQgMTcuMzMxNDA5LDE1LjI2NTk5NCAxNy44MDYzMDgsMTUuNzI3NTQxIDE4LjM5MDYyNSwxNS44MDY2NDEgMTguOTY3NzM4LDE1Ljg4NDY0MSAxOS40ODQxNjcsMTUuNTk5NTM3IDE5Ljc1LDE1LjE0ODQzOCAyMC4xMzc2MDEsMTUuMjkwMDM4IDIwLjU1NzQ5LDE1LjM2NzE4OCAyMC45OTQxNDEsMTUuMzY3MTg4IDIyLjc1NzM4MiwxNS4zNjcxODggMjQuMjI1MTk5LDE0LjEwODQ1MyAyNC41NDg4MjgsMTIuNDM5NDUzIDI1LjM1OTcwMywxMi4zMTA5NTMgMjUuOTY4ODMxLDExLjU3MjM4NCAyNS44OTA2MjUsMTAuNzA4OTg0IDI1LjgyMjcwOSw5Ljk1OTQ4NCAyNS4yMjA3Niw5LjM0ODY3OCAyNC40NzI2NTYsOS4yNjc1NzggMjQuMjA2MTM4LDkuMjM4Nzc4IDIzLjk1MjEyOSw5LjI3NzAzNCAyMy43MjI2NTYsOS4zNjUyMzQgMjMuMDU4NTg5LDguNjA0NjM0IDIyLjA4MzE5Nyw4LjEyMzA0NyAyMC45OTQxNDEsOC4xMjMwNDcgMjAuMDE4Nzk0LDguMTIzMDQ3IDE5LjEzMzYyNiw4LjUwOTkxOSAxOC40ODI0MjIsOS4xMzY3MTkgMTguMDU4NjM0LDguNDU2MDE5IDE3LjM4NzMwMyw3Ljk0NTcyMTkgMTYuNTkzNzUsNy43MzI0MjE5IDE3LjA1Mjg2OSw3LjUwMDUyMTkgMTcuMzY5MjA3LDcuMDI1NjYyNSAxNy4zNzEwOTQsNi40NzY1NjI1IDE3LjM3MzY2Niw1LjczMzI2MjUgMTYuODE5MDI1LDUuMTI2MDUzMSAxNi4wNzgxMjUsNS4wNjQ0NTMxIDE1Ljc4NTE5NCw1LjAzOTk1MzEgMTUuNTEwMzUzLDUuMTA2MDI4MSAxNS4yNzUzOTEsNS4yMzYzMjgxIDE0LjcyNDM0Niw0LjEyOTEyODEgMTMuNTgyNDc3LDMuMzY5MTQwNiAxMi4yNjE3MTksMy4zNjkxNDA2IFogTSAxNC40MzU1NDcsMTQuMDE5NTMxIEMgMTQuNDYwNDE0LDE0LjEyMDMzMSAxNC40NzY1NjMsMTQuMjI3NzUgMTQuNDc2NTYyLDE0LjM0Mzc1IDE0LjQ3NjU2MiwxNC45NTI4NSAxMi45MDAyNDMsMTUuNTEyNDY5IDEyLjIxNjc5NywxNi42MDU0NjkgMTEuNzgzMDYxLDE2LjI1Mzc2OSAxMS4yNjUxMTYsMTUuOTE2NzU5IDEwLjczMjQyMiwxNS43NTU4NTkgOS44MDA4MDcsMTUuNDc0MTU5IDguNTg5MTA1NSwxNS41NzgxNzUgNy45MTQwNjI1LDE1LjY3MTg3NSA4LjAwNDI3NCwxNS40ODM1NzUgOC4wNzAxMzg4LDE1LjI3OTIwNiA4LjEwNTQ2ODgsMTUuMDY2NDA2IDguNTAzMzU5OSwxNS4yNjU4MDYgOC45NTA1NDE1LDE1LjM3ODkwNiA5LjQyNTc4MTIsMTUuMzc4OTA2IDEwLjM4NTAxLDE1LjM3ODkwNiAxMS4yMzcyNzQsMTQuOTIyOTQ0IDExLjc3NzM0NCwxNC4yMTQ4NDQgMTIuMTIzMDk3LDE0LjQ0MDM0NCAxMi41MzUwMDQsMTQuNTcwMzEyIDEyLjk3ODUxNiwxNC41NzAzMTIgMTMuNTM3MTA3LDE0LjU3MDMxMiAxNC4wNDcyNTksMTQuMzYyMTMxIDE0LjQzNTU0NywxNC4wMTk1MzEgWiINCiAgICAgICBpZD0icGF0aDEwODIiDQogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4NCiAgPC9nPg0KPC9zdmc+DQo="}}]);