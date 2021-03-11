(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(r),u=i,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||n;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var i=r(3),a=r(7),n=(r(0),r(123)),o={id:"videofile.videofile-1",title:"Interface: VideoFile",sidebar_label:"VideoFile",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/videofile.videofile-1",id:"api/interfaces/videofile.videofile-1",isDocsHomePage:!1,title:"Interface: VideoFile",description:"Interface: VideoFile",source:"@site/docs/api/interfaces/videofile.videofile-1.md",slug:"/api/interfaces/videofile.videofile-1",permalink:"/react-native-vision-camera/docs/api/interfaces/videofile.videofile-1",editUrl:null,version:"current",sidebar_label:"VideoFile",sidebar:"someSidebar",previous:{title:"Interface: RecordVideoOptions",permalink:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"duration",id:"duration",children:[]},{value:"path",id:"path",children:[]},{value:"size",id:"size",children:[]}]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interface-videofile"},"Interface: VideoFile"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/videofile"},"VideoFile"),".VideoFile"),Object(n.b)("p",null,"Represents a Video taken by the Camera written to the local filesystem."),Object(n.b)("p",null,"Related: ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#startrecording"},Object(n.b)("inlineCode",{parentName:"a"},"Camera.startRecording()")),", ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#stoprecording"},Object(n.b)("inlineCode",{parentName:"a"},"Camera.stopRecording()"))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/temporaryfile.temporaryfile-1"},Object(n.b)("em",{parentName:"a"},"TemporaryFile"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"VideoFile")))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"duration"},"duration"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"duration"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Represents the duration of the video, in seconds."),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/74adb50/src/VideoFile.ts#L56"},"VideoFile.ts:56")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"path"},"path"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"path"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"The path of the file."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," If you want to consume this file (e.g. for displaying it in an ",Object(n.b)("inlineCode",{parentName:"p"},"<Image>")," component), you might have to add the ",Object(n.b)("inlineCode",{parentName:"p"},"file://")," prefix.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," This file might get deleted once the app closes because it lives in the temp directory."))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/temporaryfile.temporaryfile-1"},"TemporaryFile"),".",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/temporaryfile.temporaryfile-1#path"},"path")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/74adb50/src/TemporaryFile.ts#L12"},"TemporaryFile.ts:12")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"size"},"size"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"size"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Represents the file size of the recorded Video File, in bytes."),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/74adb50/src/VideoFile.ts#L60"},"VideoFile.ts:60")))}b.isMDXComponent=!0}}]);