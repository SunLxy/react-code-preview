(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[529],{1140:function(t,e,n){!function(t){"use strict";function e(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}t.defineMode("ttcn",(function(t,e){var n,r=t.indentUnit,i=e.keywords||{},o=e.builtin||{},s=e.timerOps||{},a=e.portOps||{},c=e.configOps||{},l=e.verdictOps||{},p=e.sutOps||{},u=e.functionOps||{},f=e.verdictConsts||{},d=e.booleanConsts||{},m=e.otherConsts||{},b=e.types||{},h=e.visibilityModifiers||{},y=e.templateMatch||{},v=e.multiLineStrings,g=!1!==e.indentStatements,x=/[+\-*&@=<>!\/]/;function k(t,e){var r,g=t.next();if('"'==g||"'"==g)return e.tokenize=(r=g,function(t,e){for(var n,i=!1,o=!1;null!=(n=t.next());){if(n==r&&!i){var s=t.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||t.next()),o=!0;break}i=!i&&"\\"==n}return(o||!i&&!v)&&(e.tokenize=null),"string"}),e.tokenize(t,e);if(/[\[\]{}\(\),;\\:\?\.]/.test(g))return n=g,"punctuation";if("#"==g)return t.skipToEnd(),"atom preprocessor";if("%"==g)return t.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(g))return t.eatWhile(/[\w\.]/),"number";if("/"==g){if(t.eat("*"))return e.tokenize=O,O(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(x.test(g))return"@"==g&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(x),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var k=t.current();return i.propertyIsEnumerable(k)?"keyword":o.propertyIsEnumerable(k)?"builtin":s.propertyIsEnumerable(k)?"def timerOps":c.propertyIsEnumerable(k)?"def configOps":l.propertyIsEnumerable(k)?"def verdictOps":a.propertyIsEnumerable(k)?"def portOps":p.propertyIsEnumerable(k)?"def sutOps":u.propertyIsEnumerable(k)?"def functionOps":f.propertyIsEnumerable(k)?"string verdictConsts":d.propertyIsEnumerable(k)?"string booleanConsts":m.propertyIsEnumerable(k)?"string otherConsts":b.propertyIsEnumerable(k)?"builtin types":h.propertyIsEnumerable(k)?"builtin visibilityModifiers":y.propertyIsEnumerable(k)?"atom templateMatch":"variable"}function O(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=null;break}r="*"==n}return"comment"}function w(t,e,n,r,i){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=i}function E(t,e,n){var r=t.indented;return t.context&&"statement"==t.context.type&&(r=t.context.indented),t.context=new w(r,e,n,null,t.context)}function I(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}return{startState:function(t){return{tokenize:null,context:new w((t||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;n=null;var i=(e.tokenize||k)(t,e);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=r.type)if("{"==n)E(e,t.column(),"}");else if("["==n)E(e,t.column(),"]");else if("("==n)E(e,t.column(),")");else if("}"==n){for(;"statement"==r.type;)r=I(e);for("}"==r.type&&(r=I(e));"statement"==r.type;)r=I(e)}else n==r.type?I(e):g&&(("}"==r.type||"top"==r.type)&&";"!=n||"statement"==r.type&&"newstatement"==n)&&E(e,t.column(),"statement");else I(e);return e.startOfLine=!1,i},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}})),function(e,n){"string"==typeof e&&(e=[e]);var r=[];function i(t){if(t)for(var e in t)t.hasOwnProperty(e)&&r.push(e)}i(n.keywords),i(n.builtin),i(n.timerOps),i(n.portOps),r.length&&(n.helperType=e[0],t.registerHelper("hintWords",e[0],r));for(var o=0;o<e.length;++o)t.defineMIME(e[o],n)}(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:e("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:e("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:e("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:e("read running start stop timeout"),portOps:e("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:e("create connect disconnect done kill killed map unmap"),verdictOps:e("getverdict setverdict"),sutOps:e("action"),functionOps:e("apply derefers refers"),verdictConsts:e("error fail inconc none pass"),booleanConsts:e("true false"),otherConsts:e("null NULL omit"),visibilityModifiers:e("private public friend"),templateMatch:e("complement ifpresent subset superset permutation"),multiLineStrings:!0})}(n(47))}}]);
//# sourceMappingURL=529.51b82f0f.chunk.js.map