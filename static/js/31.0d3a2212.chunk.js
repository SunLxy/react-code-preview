(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[31],{818:function(e,t,a){!function(e){"use strict";function t(e){var t=e.match(/^\s*\S/);return e.skipToEnd(),t?"error":null}e.defineMode("asciiarmor",(function(){return{token:function(e,a){var r;if("top"==a.state)return e.sol()&&(r=e.match(/^-----BEGIN (.*)?-----\s*$/))?(a.state="headers",a.type=r[1],"tag"):t(e);if("headers"==a.state){if(e.sol()&&e.match(/^\w+:/))return a.state="header","atom";var i=t(e);return i&&(a.state="body"),i}return"header"==a.state?(e.skipToEnd(),a.state="headers","string"):"body"==a.state?e.sol()&&(r=e.match(/^-----END (.*)?-----\s*$/))?r[1]!=a.type?"error":(a.state="end","tag"):e.eatWhile(/[A-Za-z0-9+\/=]/)?null:(e.next(),"error"):"end"==a.state?t(e):void 0},blankLine:function(e){"headers"==e.state&&(e.state="body")},startState:function(){return{state:"top",type:null}}}})),e.defineMIME("application/pgp","asciiarmor"),e.defineMIME("application/pgp-encrypted","asciiarmor"),e.defineMIME("application/pgp-keys","asciiarmor"),e.defineMIME("application/pgp-signature","asciiarmor")}(a(72))}}]);
//# sourceMappingURL=31.0d3a2212.chunk.js.map