(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[517],{1129:function(t,e,n){!function(t){"use strict";t.defineMode("sparql",(function(t){var e,n=t.indentUnit;function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}var i=r(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),u=r(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]),a=/[*+\-<>=&|\^\/!\?]/;function o(t,n){var r,c=t.next();if(e=null,"$"==c||"?"==c)return"?"==c&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variable-2");if("<"!=c||t.match(/^[\s\u00a0=]/,!1)){if('"'==c||"'"==c)return n.tokenize=(r=c,function(t,e){for(var n,i=!1;null!=(n=t.next());){if(n==r&&!i){e.tokenize=o;break}i=!i&&"\\"==n}return"string"}),n.tokenize(t,n);if(/[{}\(\),\.;\[\]]/.test(c))return e=c,"bracket";if("#"==c)return t.skipToEnd(),"comment";if(a.test(c))return t.eatWhile(a),"operator";if(":"==c)return t.eatWhile(/[\w\d\._\-]/),"atom";if("@"==c)return t.eatWhile(/[a-z\d\-]/i),"meta";if(t.eatWhile(/[_\w\d]/),t.eat(":"))return t.eatWhile(/[\w\d_\-]/),"atom";var s=t.current();return i.test(s)?"builtin":u.test(s)?"keyword":"variable"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function c(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function s(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:o,context:null,indent:0,col:0}},token:function(t,n){if(t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation()),t.eatSpace())return null;var r=n.tokenize(t,n);if("comment"!=r&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==e)c(n,")",t.column());else if("["==e)c(n,"]",t.column());else if("{"==e)c(n,"}",t.column());else if(/[\]\}\)]/.test(e)){for(;n.context&&"pattern"==n.context.type;)s(n);n.context&&e==n.context.type&&(s(n),"}"==e&&n.context&&"pattern"==n.context.type&&s(n))}else"."==e&&n.context&&"pattern"==n.context.type?s(n):/atom|string|variable/.test(r)&&n.context&&(/[\}\]]/.test(n.context.type)?c(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return r},indent:function(t,e){var r=e&&e.charAt(0),i=t.context;if(/[\]\}]/.test(r))for(;i&&"pattern"==i.type;)i=i.prev;var u=i&&r==i.type;return i?"pattern"==i.type?i.col:i.align?i.col+(u?0:1):i.indent+(u?0:n):0},lineComment:"#"}})),t.defineMIME("application/sparql-query","sparql")}(n(47))}}]);
//# sourceMappingURL=517.94144d44.chunk.js.map