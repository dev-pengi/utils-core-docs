"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9106],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,d=p["".concat(s,".").concat(m)]||p[m]||y[m]||l;return t?a.createElement(d,i(i({ref:r},u),{},{components:t})):a.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8458:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const l={sidebar_position:6,id:"incluesArray",title:"incluesArray",sidebar_label:"incluesArray"},i=void 0,o={unversionedId:"arrays/incluesArray",id:"arrays/incluesArray",title:"incluesArray",description:"The incluesArray() function checks if an array includes at least one item of another array.",source:"@site/docs/arrays/incluesArray.md",sourceDirName:"arrays",slug:"/arrays/incluesArray",permalink:"/utils-core-docs/docs/arrays/incluesArray",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core-docs/tree/main/docs/arrays/incluesArray.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"incluesArray",title:"incluesArray",sidebar_label:"incluesArray"},sidebar:"tutorialSidebar",previous:{title:"chunk",permalink:"/utils-core-docs/docs/arrays/chunk"},next:{title:"Object utils",permalink:"/utils-core-docs/docs/category/object-utils"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"incluesArray()")," function checks if an array includes at least one item of another array."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"array1")," (",(0,n.kt)("inlineCode",{parentName:"li"},"Array"),"): The first array to check"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"array2")," (",(0,n.kt)("inlineCode",{parentName:"li"},"Array"),"): The second array to check")),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Boolean"),": True if array2 includes at least one item from array1, false otherwise.")),(0,n.kt)("h3",{id:"throws"},"Throws"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TypeError"),": If either parameter is not an array")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"match case")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst array1 = [1, 2, 3];\nconst array1 = [3, 4, 5];\n\nconst checkIncludes = utils.array.incluesArray(array1, array2)\n//output: true\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"unmatch case")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst array1 = [1, 2, 3];\nconst array1 = [4, 5, 6];\n\nconst checkIncludes = utils.array.incluesArray(array1, array2)\n//output: false\n")))}y.isMDXComponent=!0}}]);