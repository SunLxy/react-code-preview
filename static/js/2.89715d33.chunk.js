(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[2],{1040:function(e,t,n){!function(e){"use strict";function t(e,t,n,r,o,a){this.indented=e,this.column=t,this.type=n,this.info=r,this.align=o,this.prev=a}function n(e,n,r,o){var a=e.indented;return e.context&&"statement"==e.context.type&&"statement"!=r&&(a=e.context.indented),e.context=new t(a,n,r,o,null,e.context)}function r(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function o(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0}function a(e){for(;;){if(!e||"top"==e.type)return!0;if("}"==e.type&&"namespace"!=e.prev.info)return!1;e=e.prev}}function i(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function l(e,t){return"function"===typeof e?e(t):e.propertyIsEnumerable(t)}e.defineMode("clike",(function(i,s){var c,u,d=i.indentUnit,f=s.statementIndentUnit||d,p=s.dontAlignCalls,m=s.keywords||{},h=s.types||{},y=s.builtin||{},g=s.blockKeywords||{},k=s.defKeywords||{},x=s.atoms||{},b=s.hooks||{},v=s.multiLineStrings,w=!1!==s.indentStatements,_=!1!==s.indentSwitch,S=s.namespaceSeparator,T=s.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,C=s.numberStart||/[\d\.]/,I=s.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,N=s.isOperatorChar||/[+\-*&%=<>!?|\/]/,M=s.isIdentifierChar||/[\w\$_\xa1-\uffff]/,L=s.isReservedIdentifier||!1;function D(e,t){var n,r=e.next();if(b[r]){var o=b[r](e,t);if(!1!==o)return o}if('"'==r||"'"==r)return t.tokenize=(n=r,function(e,t){for(var r,o=!1,a=!1;null!=(r=e.next());){if(r==n&&!o){a=!0;break}o=!o&&"\\"==r}return(a||!o&&!v)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(T.test(r))return c=r,null;if(C.test(r)){if(e.backUp(1),e.match(I))return"number";e.next()}if("/"==r){if(e.eat("*"))return t.tokenize=P,P(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(N.test(r)){for(;!e.match(/^\/[\/*]/,!1)&&e.eat(N););return"operator"}if(e.eatWhile(M),S)for(;e.match(S);)e.eatWhile(M);var a=e.current();return l(m,a)?(l(g,a)&&(c="newstatement"),l(k,a)&&(u=!0),"keyword"):l(h,a)?"type":l(y,a)||L&&L(a)?(l(g,a)&&(c="newstatement"),"builtin"):l(x,a)?"atom":"variable"}function P(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function E(e,t){s.typeFirstDefinitions&&e.eol()&&a(t.context)&&(t.typeAtEndOfLine=o(e,t,e.pos))}return{startState:function(e){return{tokenize:null,context:new t((e||0)-d,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var i=t.context;if(e.sol()&&(null==i.align&&(i.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return E(e,t),null;c=u=null;var l=(t.tokenize||D)(e,t);if("comment"==l||"meta"==l)return l;if(null==i.align&&(i.align=!0),";"==c||":"==c||","==c&&e.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==t.context.type;)r(t);else if("{"==c)n(t,e.column(),"}");else if("["==c)n(t,e.column(),"]");else if("("==c)n(t,e.column(),")");else if("}"==c){for(;"statement"==i.type;)i=r(t);for("}"==i.type&&(i=r(t));"statement"==i.type;)i=r(t)}else c==i.type?r(t):w&&(("}"==i.type||"top"==i.type)&&";"!=c||"statement"==i.type&&"newstatement"==c)&&n(t,e.column(),"statement",e.current());if("variable"==l&&("def"==t.prevToken||s.typeFirstDefinitions&&o(e,t,e.start)&&a(t.context)&&e.match(/^\s*\(/,!1))&&(l="def"),b.token){var d=b.token(e,t,l);void 0!==d&&(l=d)}return"def"==l&&!1===s.styleDefs&&(l="variable"),t.startOfLine=!1,t.prevToken=u?"def":l||c,E(e,t),l},indent:function(t,n){if(t.tokenize!=D&&null!=t.tokenize||t.typeAtEndOfLine)return e.Pass;var r=t.context,o=n&&n.charAt(0),a=o==r.type;if("statement"==r.type&&"}"==o&&(r=r.prev),s.dontIndentStatements)for(;"statement"==r.type&&s.dontIndentStatements.test(r.info);)r=r.prev;if(b.indent){var i=b.indent(t,r,n,d);if("number"==typeof i)return i}var l=r.prev&&"switch"==r.prev.info;if(s.allmanIndentation&&/[{(]/.test(o)){for(;"top"!=r.type&&"}"!=r.type;)r=r.prev;return r.indented}return"statement"==r.type?r.indented+("{"==o?0:f):!r.align||p&&")"==r.type?")"!=r.type||a?r.indented+(a?0:d)+(a||!l||/^(?:case|default)\b/.test(n)?0:d):r.indented+f:r.column+(a?0:1)},electricInput:_?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}}));var s="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",c="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",u="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",d="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",f=i("int long char short double float unsigned signed void bool"),p=i("SEL instancetype id Class Protocol BOOL");function m(e){return l(f,e)||/.+_t$/.test(e)}function h(e){return m(e)||l(p,e)}var y="case do else for if switch while struct enum union";function g(e,t){if(!t.startOfLine)return!1;for(var n,r=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){r=g;break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break;e.next()}return t.tokenize=r,"meta"}function k(e,t){return"type"==t.prevToken&&"type"}function x(e){return!(!e||e.length<2)&&"_"==e[0]&&("_"==e[1]||e[1]!==e[1].toLowerCase())}function b(e){return e.eatWhile(/[\w\.']/),"number"}function v(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/);return!!n&&(t.cpp11RawStringDelim=n[1],t.tokenize=S,S(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function w(e){var t=/(\w+)::~?(\w+)$/.exec(e);return t&&t[1]==t[2]}function _(e,t){for(var n;null!=(n=e.next());)if('"'==n&&!e.eat('"')){t.tokenize=null;break}return"string"}function S(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&");return e.match(new RegExp(".*?\\)"+n+'"'))?t.tokenize=null:e.skipToEnd(),"string"}function T(t,n){"string"==typeof t&&(t=[t]);var r=[];function o(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}o(n.keywords),o(n.types),o(n.builtin),o(n.atoms),r.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],r));for(var a=0;a<t.length;++a)e.defineMIME(t[a],n)}function C(e,t){for(var n=!1;!e.eol();){if(!n&&e.match('"""')){t.tokenize=null;break}n="\\"==e.next()&&!n}return"string"}function I(e){return function(t,n){for(var r;r=t.next();){if("*"==r&&t.eat("/")){if(1==e){n.tokenize=null;break}return n.tokenize=I(e-1),n.tokenize(t,n)}if("/"==r&&t.eat("*"))return n.tokenize=I(e+1),n.tokenize(t,n)}return"comment"}}T(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:i(s),types:m,blockKeywords:i(y),defKeywords:i("struct enum union"),typeFirstDefinitions:!0,atoms:i("NULL true false"),isReservedIdentifier:x,hooks:{"#":g,"*":k},modeProps:{fold:["brace","include"]}}),T(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:i(s+" "+c),types:m,blockKeywords:i(y+" class try catch"),defKeywords:i("struct enum union class namespace"),typeFirstDefinitions:!0,atoms:i("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:x,hooks:{"#":g,"*":k,u:v,U:v,L:v,R:v,0:b,1:b,2:b,3:b,4:b,5:b,6:b,7:b,8:b,9:b,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&w(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),T("text/x-java",{name:"clike",keywords:i("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:i("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:i("catch class do else finally for if switch try while"),defKeywords:i("class interface enum @interface"),typeFirstDefinitions:!0,atoms:i("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),T("text/x-csharp",{name:"clike",keywords:i("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:i("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:i("catch class do else finally for foreach if struct switch try while"),defKeywords:i("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:i("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=_,_(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),T("text/x-scala",{name:"clike",keywords:i("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:i("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:i("catch class enum do else finally for forSome if match switch try while"),defKeywords:i("class enum def object package trait type val var"),atoms:i("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=C,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,n){var r=n.context;return!("}"!=r.type||!r.align||!e.eat(">"))&&(n.context=new t(r.indented,r.column,r.type,r.info,null,r.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=I(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),T("text/x-kotlin",{name:"clike",keywords:i("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:i("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:i("catch class do else finally for if where try while enum"),defKeywords:i("class val var object interface fun"),atoms:i("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){var n;return t.tokenize=(n=e.match('""'),function(e,t){for(var r,o=!1,a=!1;!e.eol();){if(!n&&!o&&e.match('"')){a=!0;break}if(n&&e.match('"""')){a=!0;break}r=e.next(),!o&&"$"==r&&e.match("{")&&e.skipTo("}"),o=!o&&"\\"==r&&!n}return!a&&n||(t.tokenize=null),"string"}),t.tokenize(e,t)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=I(1),t.tokenize(e,t))},indent:function(e,t,n,r){var o=n&&n.charAt(0);return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n&&"}"!=e.context.type||"variable"==e.prevToken&&"."==o||("}"==e.prevToken||")"==e.prevToken)&&"."==o?2*r+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:r):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),T(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:i("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:i("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:i("for while do if else struct"),builtin:i("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:i("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":g},modeProps:{fold:["brace","include"]}}),T("text/x-nesc",{name:"clike",keywords:i(s+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:m,blockKeywords:i(y),atoms:i("null true false"),hooks:{"#":g},modeProps:{fold:["brace","include"]}}),T("text/x-objectivec",{name:"clike",keywords:i(s+" "+u),types:h,builtin:i(d),blockKeywords:i(y+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:i("struct enum union @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:i("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:x,hooks:{"#":g,"*":k},modeProps:{fold:["brace","include"]}}),T("text/x-objectivec++",{name:"clike",keywords:i(s+" "+u+" "+c),types:h,builtin:i(d),blockKeywords:i(y+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:i("struct enum union @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:i("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:x,hooks:{"#":g,"*":k,u:v,U:v,L:v,R:v,0:b,1:b,2:b,3:b,4:b,5:b,6:b,7:b,8:b,9:b,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&w(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),T("text/x-squirrel",{name:"clike",keywords:i("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:m,blockKeywords:i("case catch class else for foreach if switch try while"),defKeywords:i("function local class"),typeFirstDefinitions:!0,atoms:i("true false null"),hooks:{"#":g},modeProps:{fold:["brace","include"]}});var N=null;T("text/x-ceylon",{name:"clike",keywords:i("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0);return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:i("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:i("class dynamic function interface module object package value"),builtin:i("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:i("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=function e(t){return function(n,r){for(var o,a=!1,i=!1;!n.eol();){if(!a&&n.match('"')&&("single"==t||n.match('""'))){i=!0;break}if(!a&&n.match("``")){N=e(t),i=!0;break}o=n.next(),a="single"==t&&!a&&"\\"==o}return i&&(r.tokenize=null),"string"}}(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!N||!e.match("`"))&&(t.tokenize=N,N=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})}(n(47))}}]);
//# sourceMappingURL=2.89715d33.chunk.js.map