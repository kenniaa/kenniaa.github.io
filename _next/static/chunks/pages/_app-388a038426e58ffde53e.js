_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r=n("nKUr");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n("1OyB"),c=n("vuIU"),u=n("JX7q"),a=n("Ji7U"),s=n("md7G"),f=n("foSv"),l=n("8Bbg"),p=n.n(l),h=n("vOnD");var d={light:{body:"#f8f8f8",text:"#363537",linkFocus:"#63689B",linkHover:"#D99191",title:"#63689B",background:"#f8f8f8",gradient:"linear-gradient(#F2BFB3, #D99191)",borderColor:"#eaeaea",linkUnderline:"#63689B"},dark:{body:"#111111",text:"#b8b8b8",linkFocus:"#F2BFB3",linkHover:"#B4B6D9",title:"#D99191",background:"#111111",gradient:"linear-gradient(#63689B, #B4B6D9)",borderColor:"#161616",linkUnderline:"#D99191"}};function b(){var t,e,n=(t=["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    background: ",";\n    font-family: 'Inconsolata', monospace;\n  }\n\n  p {\n    line-height: 1.3em;\n  }\n\n  a {\n    color: inherit;\n    font-weight: inherit;\n    text-decoration: underline;\n    text-decoration-color: ",";\n    text-decoration-thickness: 1.5px;\n   \n    &:focus {\n      outline: 1px dashed ",";\n      outline-offset: 2px;\n    }\n  }\n\n  a:hover {\n    text-decoration-color: ",";\n  }\n\n  button {\n    cursor: pointer;\n\n    &:focus {\n      outline: 1px dashed ",";\n      outline-offset: 3px;\n    }\n  }\n\n  h3 {\n    font-size: 1.4em;\n  }\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return b=function(){return n},n}var v=Object(h.b)(b(),(function(t){return t.theme.gradient}),(function(t){return t.theme.linkUnderline}),(function(t){return t.theme.linkFocus}),(function(t){return t.theme.linkHover}),(function(t){return t.theme.linkFocus})),g=n("KKvC");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var j=function(t){Object(a.a)(n,t);var e=m(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={theme:"light",switchTheme:t.switchTheme.bind(Object(u.a)(t))},t}return Object(c.a)(n,[{key:"switchTheme",value:function(){"light"===this.state.theme?this.setState({theme:"dark"}):this.setState({theme:"light"})}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g.a.Provider,{value:this.state,children:Object(r.jsx)(g.a.Consumer,{children:function(t){return Object(r.jsxs)(h.a,{theme:d[t.theme],children:[Object(r.jsx)(v,{}),Object(r.jsx)(e,O({},n))]})}})})})}}]),n}(p.a)},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),i=n("W8MJ"),c=n("7W2i"),u=n("a1gu"),a=n("Nsbk"),s=n("yXPU");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=g,e.default=void 0;var p=l(n("q1tI")),h=n("g/15");function d(t){return b.apply(this,arguments)}function b(){return(b=s(r.mark((function t(e){var n,o,i;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,o);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=h.AppInitialProps,e.NextWebVitalsMetric=h.NextWebVitalsMetric;var v=function(t){c(n,t);var e=f(n);function n(){return o(this,n),e.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,i=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:g(e)}))}}]),n}(p.default.Component);function g(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=v,v.origGetInitialProps=d,v.getInitialProps=d},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])}},[[0,0,2,1,3]]]);