"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4,id:"gamble",title:"gamble",sidebar_label:"gamble"},l=void 0,i={unversionedId:"random/gamble",id:"random/gamble",title:"gamble",description:"The gamble() function simulates a gambling game by returning true or false based on a given win percentage.",source:"@site/docs/random/gamble.md",sourceDirName:"random",slug:"/random/gamble",permalink:"/utils-core-docs/docs/random/gamble",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core-docs/tree/main/docs/random/gamble.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"gamble",title:"gamble",sidebar_label:"gamble"},sidebar:"tutorialSidebar",previous:{title:"generateRandomString",permalink:"/utils-core-docs/docs/random/generateRandomString"},next:{title:"Regex utils",permalink:"/utils-core-docs/docs/category/regex-utils"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3}],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"gamble()")," function simulates a gambling game by returning true or false based on a given win percentage."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"percentage")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),"): The win percentage (between 0 and 100).")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),": True if the player wins, false otherwise")),(0,a.kt)("h3",{id:"throws"},"Throws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": if the ",(0,a.kt)("inlineCode",{parentName:"li"},"percentage")," value is invalid")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const utils = require(\'utils-core.js\');\nconst winChance = 50; // 50% win chance\nif (utils.random.gamble(winChance)) {\n    console.log("Congratulations! You won!");\n} else {\n    console.log("Sorry, you lost.");\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const utils = require(\'utils-core.js\');\nconst winChance = 20; // 20% win chance\nif (utils.random.gamble(winChance)) {\n    console.log("Congratulations! You won!");\n} else {\n    console.log("Sorry, you lost.");\n}\n')))}p.isMDXComponent=!0}}]);