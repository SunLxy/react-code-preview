(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[103],{324:function(e,a){var t;(t=Prism).languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:t.languages.javascript}},t.hooks.add("before-tokenize",(function(e){t.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)})),t.hooks.add("after-tokenize",(function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"ejs")}))}}]);
//# sourceMappingURL=103.cf1130e0.chunk.js.map