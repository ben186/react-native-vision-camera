(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?n.a.createElement(d,o(o({ref:r},l),{},{components:t})):n.a.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var b in r)hasOwnProperty.call(r,b)&&(o[b]=r[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return b})),t.d(r,"default",(function(){return p}));var a=t(3),n=t(7),i=(t(0),t(123)),c={id:"cameraerror.errorwithcause",title:"Interface: ErrorWithCause",sidebar_label:"ErrorWithCause",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/cameraerror.errorwithcause",id:"api/interfaces/cameraerror.errorwithcause",isDocsHomePage:!1,title:"Interface: ErrorWithCause",description:"Interface: ErrorWithCause",source:"@site/docs/api/interfaces/cameraerror.errorwithcause.md",slug:"/api/interfaces/cameraerror.errorwithcause",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause",editUrl:null,version:"current",sidebar_label:"ErrorWithCause",sidebar:"visionSidebar",previous:{title:"Interface: FrameRateRange",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"},next:{title:"Interface: CameraProps",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraprops.cameraprops-1"}},b=[{value:"Properties",id:"properties",children:[{value:"cause",id:"cause",children:[]},{value:"code",id:"code",children:[]},{value:"details",id:"details",children:[]},{value:"domain",id:"domain",children:[]},{value:"message",id:"message",children:[]},{value:"stacktrace",id:"stacktrace",children:[]}]}],l={toc:b};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-errorwithcause"},"Interface: ErrorWithCause"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameraerror"},"CameraError"),".ErrorWithCause"),Object(i.b)("p",null,"Represents a JSON-style error cause. This contains native ",Object(i.b)("inlineCode",{parentName:"p"},"NSError"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Throwable")," information, and can have recursive ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause#cause"},Object(i.b)("inlineCode",{parentName:"a"},".cause"))," properties until the ultimate cause has been found."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"cause"},"cause"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"cause"),": ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause"},Object(i.b)("em",{parentName:"a"},"ErrorWithCause"))),Object(i.b)("p",null,"Optional additional cause for nested errors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: N/A"),Object(i.b)("li",{parentName:"ul"},"Android: ",Object(i.b)("inlineCode",{parentName:"li"},"Throwable.cause"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L84"},"CameraError.ts:84")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"code"},"code"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"code"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"The native error's code."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: ",Object(i.b)("inlineCode",{parentName:"li"},"NSError.code")),Object(i.b)("li",{parentName:"ul"},"Android: N/A")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L49"},"CameraError.ts:49")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"details"},"details"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"details"),": ",Object(i.b)("em",{parentName:"p"},"Record"),"<string, unknown",">"),Object(i.b)("p",null,"Optional additional details"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: ",Object(i.b)("inlineCode",{parentName:"li"},"NSError.userInfo")),Object(i.b)("li",{parentName:"ul"},"Android: N/A")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L70"},"CameraError.ts:70")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"domain"},"domain"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"domain"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"The native error's domain."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: ",Object(i.b)("inlineCode",{parentName:"li"},"NSError.domain")),Object(i.b)("li",{parentName:"ul"},"Android: N/A")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L56"},"CameraError.ts:56")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"message"},"message"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"message"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"The native error description"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: ",Object(i.b)("inlineCode",{parentName:"li"},"NSError.message")),Object(i.b)("li",{parentName:"ul"},"Android: ",Object(i.b)("inlineCode",{parentName:"li"},"Throwable.message"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L63"},"CameraError.ts:63")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stacktrace"},"stacktrace"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stacktrace"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Optional Java stacktrace"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"iOS: N/A"),Object(i.b)("li",{parentName:"ul"},"Android: ",Object(i.b)("inlineCode",{parentName:"li"},"Throwable.stacktrace.toString()"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/d1221f2/src/CameraError.ts#L77"},"CameraError.ts:77")))}p.isMDXComponent=!0}}]);