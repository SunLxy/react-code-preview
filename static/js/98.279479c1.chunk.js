(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[98],{893:function(e,t,n){!function(e){"use strict";e.defineMode("solr",(function(){var e=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,t=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;function r(e){return parseFloat(e).toString()===e}function o(e){return function(t,n){for(var r,o=!1;null!=(r=t.next())&&(r!=e||o);)o=!o&&"\\"==r;return o||(n.tokenize=c),"string"}}function i(e){return function(t,n){var r="operator";return"+"==e?r+=" positive":"-"==e?r+=" negative":"|"==e?t.eat(/\|/):"&"==e?t.eat(/\&/):"^"==e&&(r+=" boost"),n.tokenize=c,r}}function u(t){return function(o,i){for(var u=t;(t=o.peek())&&null!=t.match(e);)u+=o.next();return i.tokenize=c,n.test(u)?"operator":r(u)?"number":":"==o.peek()?"field":"string"}}function c(n,r){var a=n.next();return'"'==a?r.tokenize=o(a):t.test(a)?r.tokenize=i(a):e.test(a)&&(r.tokenize=u(a)),r.tokenize!=c?r.tokenize(n,r):null}return{startState:function(){return{tokenize:c}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-solr","solr")}(n(72))}}]);
//# sourceMappingURL=98.279479c1.chunk.js.map