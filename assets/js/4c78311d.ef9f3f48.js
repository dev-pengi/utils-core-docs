"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9510],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(v,a(a({ref:r},u),{},{components:t})):n.createElement(v,a({ref:r},u))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8522:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,id:"reverseString",title:"reverseString",sidebar_label:"reverseString"},a=void 0,l={unversionedId:"format/reverseString",id:"format/reverseString",title:"reverseString",description:"The reverseString() function reverses a string.",source:"@site/docs/format/reverseString.md",sourceDirName:"format",slug:"/format/reverseString",permalink:"/utils-core/docs/format/reverseString",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core/tree/main/docs/format/reverseString.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"reverseString",title:"reverseString",sidebar_label:"reverseString"},sidebar:"tutorialSidebar",previous:{title:"validateHex",permalink:"/utils-core/docs/format/validateHex"},next:{title:"isPalindrome",permalink:"/utils-core/docs/format/isPalindrome"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"reverseString()")," function reverses a string."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"): The string to reverse")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String"),": The reversed string")),(0,i.kt)("h3",{id:"throws"},"Throws"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Error"),": If the ",(0,i.kt)("inlineCode",{parentName:"li"},"str")," is not a valid string")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst str = 'hello world';\nconst reversed = utils.format.reverseString(str);\nconsole.log(reversed); \n// 'dlrow olleh'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst str = '123456';\nconst reversed = utils.format.reverseString(str);\nconsole.log(reversed); \n// '654321'\n")))}m.isMDXComponent=!0}}]);