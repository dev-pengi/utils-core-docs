"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(v,c(c({ref:t},p),{},{components:n})):r.createElement(v,c({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,id:"circle",title:"circle",sidebar_label:"circle"},c=void 0,l={unversionedId:"canvas/circle",id:"canvas/circle",title:"circle",description:"The circle() function draws a circular clipping region on a canvas context.",source:"@site/docs/canvas/circle.md",sourceDirName:"canvas",slug:"/canvas/circle",permalink:"/utils-core-docs/docs/canvas/circle",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core-docs/tree/main/docs/canvas/circle.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"circle",title:"circle",sidebar_label:"circle"},sidebar:"tutorialSidebar",previous:{title:"Canvas utils",permalink:"/utils-core-docs/docs/category/canvas-utils"},next:{title:"round",permalink:"/utils-core-docs/docs/canvas/round"}},o={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3},{value:"See also",id:"see-also",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"circle()")," function draws a circular clipping region on a canvas context."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx")," (",(0,a.kt)("inlineCode",{parentName:"li"},"CanvasRenderingContext2D"),"): The canvas rendering context to draw on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," (",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"): The x-coordinate of the center of the circle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," (",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"): The y-coordinate of the center of the circle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," (",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"): The width of the clipping region."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," (",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"): The height of the clipping region.")),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CanvasRenderingContext2D"),": The canvas context with the new circular clipping region.")),(0,a.kt)("h3",{id:"throws"},"Throws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": Missing canvas context or invalid argument types.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { createCanvas, loadImage } = require('canvas');\nconst utils = require('utils-core.js');\nconst canvas = createCanvas(500, 500);\nconst ctx = canvas.getContext('2d');\n\n// Draw a circle clipping region in the center of the canvas\nconst centerX = canvas.width / 2;\nconst centerY = canvas.height / 2;\nconst radius = Math.min(canvas.width, canvas.height) / 2;\nctx.save();\nutils.canvas.circle(ctx, centerX - radius, centerY - radius, radius * 2, radius * 2);\n\n// Draw an image that is clipped to the circle region\nconst image = await loadImage('myImage.png');\nctx.drawImage(image, 0, 0, canvas.width, canvas.height);\nctx.restore();\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"this example uses await to wait for the request which means the code has to be inside an async function.")),(0,a.kt)("h3",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip"},"CanvasRenderingContext2D.clip()"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"clip()")," method can be used to create arbitrary clipping regions on a canvas context."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc"},"CanvasRenderingContext2D.arc()"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"arc()")," method is used to draw circular arcs on a canvas context.")))}d.isMDXComponent=!0}}]);