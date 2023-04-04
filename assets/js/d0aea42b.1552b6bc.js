"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,id:"extract",title:"extract",sidebar_label:"extract"},i=void 0,l={unversionedId:"arrays/extract",id:"arrays/extract",title:"extract",description:"The extract() function takes an array of objects and a key as arguments and returns an array containing the values of the specified key from each object in the input array.",source:"@site/docs/arrays/extract.md",sourceDirName:"arrays",slug:"/arrays/extract",permalink:"/utils-core-docs/docs/arrays/extract",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core-docs/tree/main/docs/arrays/extract.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"extract",title:"extract",sidebar_label:"extract"},sidebar:"tutorialSidebar",previous:{title:"Arrays utils",permalink:"/utils-core-docs/docs/category/arrays-utils"},next:{title:"countOccurrences",permalink:"/utils-core-docs/docs/arrays/countOccurrences"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3},{value:"See also",id:"see-also",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"extract()")," function takes an array of objects and a key as arguments and returns an array containing the values of the specified key from each object in the input array."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arr")," (",(0,n.kt)("inlineCode",{parentName:"li"},"Array"),"): The array of objects to extract values from."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key")," (",(0,n.kt)("inlineCode",{parentName:"li"},"string"),"): The name of the key to extract values for.")),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Array"),": An array with the extracted values.")),(0,n.kt)("h3",{id:"throws"},"Throws"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error"),": If the array is empty or undefined, or if the key is not a string or is an empty string.")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'const utils = require(\'utils-core.js\');\nconst data = [\n  { id: 1, name: "sif", age: 30 },\n  { id: 2, name: "Jane", age: 25 },\n  { id: 3, name: "Bob", age: 40 },\n];\n\nconst names = utils.arrays.extract(data, "name");\n\nconsole.log(names); // ["sif", "Jane", "Bob"]\n')),(0,n.kt)("h3",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"Array.prototype.filter()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},"Array.prototype.reduce()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map()"))))}d.isMDXComponent=!0}}]);