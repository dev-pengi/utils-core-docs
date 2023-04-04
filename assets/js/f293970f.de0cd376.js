"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2120],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),u=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(m.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,g=d["".concat(m,".").concat(p)]||d[p]||c[p]||o;return r?t.createElement(g,i(i({ref:n},s),{},{components:r})):t.createElement(g,i({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4627:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,id:"randomInRange",title:"randomInRange",sidebar_label:"randomInRange"},i=void 0,l={unversionedId:"random/randomInRange",id:"random/randomInRange",title:"randomInRange",description:"The randomInRange() function Generates a random number within a given range.",source:"@site/docs/random/randomInRange.md",sourceDirName:"random",slug:"/random/randomInRange",permalink:"/utils-core/docs/random/randomInRange",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core/tree/main/docs/random/randomInRange.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"randomInRange",title:"randomInRange",sidebar_label:"randomInRange"},sidebar:"tutorialSidebar",previous:{title:"Random utils",permalink:"/utils-core/docs/category/random-utils"},next:{title:"getRandomItem",permalink:"/utils-core/docs/random/getRandomItem"}},m={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3},{value:"See also",id:"see-also",level:3}],s={toc:u},d="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"randomInRange()")," function Generates a random number within a given range."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),"): The minimum value of the range"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),"): The maximum value of the range")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Number"),": A random number within the given range")),(0,a.kt)("h3",{id:"throws"},"Throws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": if one of or both the arguments aren't a valid numbers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": if the maximum value is less than the minimum value")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst randomInt = randomInRange(1, 10);\nconsole.log(randomInt);\n// Output: a random integer between 1 and 10, for example: 4\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst randomInt = randomInRange(1900, 2023);\nconsole.log(randomInt);\n// Output: a random integer between 1900 and 2023, for example: 1945\n")),(0,a.kt)("h3",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"},"Math.random()")," - Returns a random number between 0 and 1.")))}c.isMDXComponent=!0}}]);