(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[61],{853:function(r,t,e){!function(r){"use strict";r.defineMode("http",(function(){function r(r,t){return r.skipToEnd(),t.cur=c,"error"}function t(t,n){return t.match(/^HTTP\/\d\.\d/)?(n.cur=e,"keyword"):t.match(/^[A-Z]+/)&&/[ \t]/.test(t.peek())?(n.cur=i,"keyword"):r(t,n)}function e(t,e){var i=t.match(/^\d+/);if(!i)return r(t,e);e.cur=n;var u=Number(i[0]);return u>=100&&u<200?"positive informational":u>=200&&u<300?"positive success":u>=300&&u<400?"positive redirect":u>=400&&u<500?"negative client-error":u>=500&&u<600?"negative server-error":"error"}function n(r,t){return r.skipToEnd(),t.cur=c,null}function i(r,t){return r.eatWhile(/\S/),t.cur=u,"string-2"}function u(t,e){return t.match(/^HTTP\/\d\.\d$/)?(e.cur=c,"keyword"):r(t,e)}function c(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function o(r){return r.skipToEnd(),null}return{token:function(r,t){var e=t.cur;return e!=c&&e!=o&&r.eatSpace()?null:e(r,t)},blankLine:function(r){r.cur=o},startState:function(){return{cur:t}}}})),r.defineMIME("message/http","http")}(e(72))}}]);
//# sourceMappingURL=61.38ecb15f.chunk.js.map