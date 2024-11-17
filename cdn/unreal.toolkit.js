!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.UnrealToolkit=n():e.UnrealToolkit=n()}(this,(()=>(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{default:()=>i});var t=function(){function e(){}return Object.defineProperty(e,"Bridge",{get:function(){return null==e._Bridge&&(e._Bridge=new o),e._Bridge},enumerable:!1,configurable:!0}),e._Bridge=null,e}(),o=function(){function e(){this.ListenerDictionary={},this.HandleWindowMessage=this.HandleWindowMessage.bind(this),window.addEventListener("message",this.HandleWindowMessage)}return e.prototype.PostWindowMessage=function(n,t){try{null==e.ContentFrames&&(e.ContentFrames=document.querySelectorAll("iframe")),null!=e.ContentFrames?e.ContentFrames.forEach((function(o){var i;try{null!=e.PostWindowID&&""!==e.PostWindowID&&o.id!==e.PostWindowID||null===(i=o.contentWindow)||void 0===i||i.postMessage({source:"unrealtoolkit",message:n,args:t},e.TargetOrigin)}catch(e){console.warn(e)}})):console.warn("EventBus: No Content Frames Found!")}catch(e){console.warn(e)}},e.prototype.OnWindowMessage=function(e,n){var t;null==this.ListenerDictionary[e]?(t=[],this.ListenerDictionary[e]=t):t=this.ListenerDictionary[e],t.findIndex((function(e){return n==e}))<0&&t.push(n)},e.prototype.CreateWindow=function(e,n){void 0===n&&(n="block");var t=document.getElementById(e);if(null!=t)return t;var o=document.createElement("iframe");return o.id=e||"game",o.allow="cross-origin-isolated",o.crossOrigin="anonymous",o.sandbox.add("allow-same-origin","allow-scripts","allow-popups","allow-forms","allow-pointer-lock"),o.style.position="absolute",o.style.width="100%",o.style.height="100%",o.style.minHeight="100vh",o.style.border="none",o.style.outline="none",o.style.zIndex="0",o.style.display=n||"block",document.body.insertBefore(o,document.body.firstChild),o},e.prototype.RemoveHandler=function(e,n){var t=this.ListenerDictionary[e];if(null!=t){var o=t.findIndex((function(e){return n==e}));o>=0&&t.splice(o,1)}},e.prototype.ResetHandlers=function(){this.ListenerDictionary={}},e.prototype.ResetContentFrames=function(){e.ContentFrames=null},e.prototype.Dispose=function(){this.ResetHandlers(),this.ResetContentFrames(),window.removeEventListener("message",this.HandleWindowMessage)},e.prototype.HandleWindowMessage=function(n){if(null!=n&&null!=n.origin&&null!=n.data)if(null==e.AllowedOrigin||""===e.AllowedOrigin||"*"===e.AllowedOrigin||n.origin===e.AllowedOrigin){var t=null,o=null;null!=n.data.type?"progress"===n.data.type?(t="WM_PROGRESS",o=null!=n.data.value?[n.data.value.toString()]:null):"loaded"===n.data.type?(t="WM_LOADED",o=null):"focus"===n.data.type?(t="WM_FOCUS",o=null):"blur"===n.data.type?(t="WM_BLUR",o=null):"pointer-lock-active"===n.data.type?(t="WM_POINTER_LOCK_ACTIVE",o=null):"pointer-lock-inactive"===n.data.type&&(t="WM_POINTER_LOCK_INACTIVE",o=null):null!=n.data.source&&"unrealtoolkit"===n.data.source&&null!=n.data.message&&(t=n.data.message,o=null!=n.data.args?n.data.args:null);try{null!=t&&this.OnDispatchMessage(t,o)}catch(e){console.warn(e)}}else console.warn("EventBus: Invalid Origin: "+n.origin)},e.prototype.OnDispatchMessage=function(e,n){void 0===n&&(n=null);var t=this.ListenerDictionary[e];null!=t&&t.forEach((function(e){try{e&&e(n)}catch(e){console.warn(e)}}))},e.PostWindowID=null,e.AllowedOrigin="*",e.TargetOrigin="*",e.ContentFrames=null,e}();console.log("Unreal Toolkit Runtime - Version 0.1.8");const i=t;return n.default})()));