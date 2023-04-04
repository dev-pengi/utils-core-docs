"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3,id:"generateRandomString",title:"generateRandomString",sidebar_label:"generateRandomString"},i=void 0,l={unversionedId:"random/generateRandomString",id:"random/generateRandomString",title:"generateRandomString",description:"The generateRandomString() function generate a random string with customizable options.",source:"@site/docs/random/generateRandomString.md",sourceDirName:"random",slug:"/random/generateRandomString",permalink:"/utils-core/docs/random/generateRandomString",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core/tree/main/docs/random/generateRandomString.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"generateRandomString",title:"generateRandomString",sidebar_label:"generateRandomString"},sidebar:"tutorialSidebar",previous:{title:"getRandomItem",permalink:"/utils-core/docs/random/getRandomItem"},next:{title:"gamble",permalink:"/utils-core/docs/random/gamble"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Examples",id:"examples",level:3}],p={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"generateRandomString()")," function generate a random string with customizable options."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Objects"),"): The options for generating the random string",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeNumbers")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to include numbers in the generated string. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeSymbols")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to include symbols in the generated string. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"length")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),"): The length of the generated string. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secure")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to use cryptographically secure random number generator. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix")," (",(0,a.kt)("inlineCode",{parentName:"li"},"String"),"): A prefix to add to the beginning of the generated string. Defaults to an empty string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suffix")," (",(0,a.kt)("inlineCode",{parentName:"li"},"String"),"): A suffix to add to the end of the generated string. Defaults to an empty string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"capitalize")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to capitalize the first character of the generated string. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lowercase")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to convert the generated string to lowercase. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uppercase")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"): Whether to convert the generated string to uppercase. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String"),": The generated random string")),(0,a.kt)("h3",{id:"throws"},"Throws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": If an invalid option is passed")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string with default options:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst randomString = utils.random.generateRandomString();\nconsole.log(randomString); \n//Output: for example: \"xrp9F7YU6S\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string with a length of 20:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n  length: 20,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"ac9J7Q2d8v3V3m4w6PKB\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string with a prefix and suffix")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    prefix: 'user_',\n    suffix: '_pass',\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"user_yrP5tT9V7T_pass\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string with symbols included")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    includeSymbols: true,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"rN;cE|aT/l\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string with numbers and symbols included, capitalized, and with a length of 5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    includeNumbers: true, \n    includeSymbols: true,\n    capitalize: true,\n    length: 5,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"Q3@D6\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a cryptographically secure random string with a length of 50:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    secure: true,\n    length: 50,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"Zl*<C7V8?pT0X1DyOx%mHgPbM#RUS$|]kwQ2)N!a3@f\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string in lowercase:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    lowercase: true,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"ehtkzvlyns\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate a random string in uppercase:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst options = {\n    uppercase: true,\n};\n\nconst randomString = utils.random.generateRandomString(options);\nconsole.log(randomString); \n//Output: for example: \"YQJFZDGESM\"\n")))}d.isMDXComponent=!0}}]);