_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n("nKUr"),o=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),c=n("md7G"),u=n("foSv"),s=n("q1tI"),f=n("g4pe"),l=n.n(f),d=n("YFqc"),p=n.n(d),h=n("vOnD"),m=h.c.button.withConfig({displayName:"IconButton"})(["background:none;border:none;font-size:1.15em;"]),v=n("KKvC"),b=["\u2601\ufe0f","\ud83c\udf28\ufe0f","\ud83c\udf27\ufe0f","\ud83c\udf29\ufe0f","\u26c8\ufe0f","\u26c5","\ud83c\udf24\ufe0f","\ud83c\udf25\ufe0f","\ud83c\udf26\ufe0f"],y=function(){var e=Math.floor(Math.random()*b.length);return b[e]},g=function(){var e=Object(s.useState)(y()),t=e[0],n=e[1],o=function(){var e=y();n(e)};return Object(s.useEffect)((function(){var e=setInterval(o,3e3);return function(){return clearInterval(e)}})),Object(r.jsx)(m,{onClick:o,children:t})};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var O=function(e){Object(i.a)(n,e);var t=j(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.className;return Object(r.jsxs)("header",{className:e,children:[Object(r.jsxs)(w,{children:["Kenia ",Object(r.jsx)(g,{})]}),Object(r.jsx)(_,{children:Object(r.jsx)(v.a.Consumer,{children:function(e){var t=e.switchTheme,n=e.theme;return Object(r.jsx)(m,{onClick:function(){return t(n)},children:"light"===n?Object(r.jsx)(r.Fragment,{children:"\ud83c\udf1e"}):Object(r.jsx)(r.Fragment,{children:"\ud83c\udf19"})})}})})]})}}]),n}(s.Component),x=Object(h.c)(O).withConfig({displayName:"Header"})(["display:flex;justify-content:space-between;align-items:center;margin:0 auto;max-width:960px;width:100%;padding:1.45rem 1.0875rem;"]),w=h.c.h1.withConfig({displayName:"Header__Title"})(["font-weight:700;font-size:1.5em;color:",""],(function(e){return e.theme.title})),_=h.c.nav.withConfig({displayName:"Header__Nav"})(["font-size:16px;"]);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(e){Object(i.a)(n,e);var t=M(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.title;return Object(r.jsxs)(E,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("title",{children:n}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(x,{}),Object(r.jsx)(C,{children:t}),Object(r.jsxs)(I,{children:[Object(r.jsx)(p.a,{href:"http://github.com/kenniaa",children:Object(r.jsx)("a",{target:"_blank",children:"github"})}),Object(r.jsx)(p.a,{href:"https://www.linkedin.com/in/kenia-c-6b19bb50",children:Object(r.jsx)("a",{target:"_blank",children:"linkedin"})})]})]})}}]),n}(s.Component),C=h.c.main.withConfig({displayName:"Layout__Main"})(["padding:1.45rem 1.0875rem;flex:1;margin:1em 0 0 0;max-width:960px;width:100%;"]),I=h.c.footer.withConfig({displayName:"Layout__Footer"})(["width:100%;height:100px;border-top:1px solid ",";display:flex;justify-content:center;align-items:center;margin:0 0 1em 0;> a{margin-left:1em;margin-right:1em;}"],(function(e){return e.theme.borderColor})),E=h.c.div.withConfig({displayName:"Layout__Container"})(["min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";color:",";margin:1em;"],(function(e){return e.theme.body}),(function(e){return e.theme.text}));function R(){return Object(r.jsxs)(k,{title:"Home",children:[Object(r.jsxs)("p",{children:["I'm a frontend developer based in Brooklyn working on ",Object(r.jsx)("a",{href:"https://gomdrop.com",target:"_blank",children:"GOMdrop"}),", a platform that helps people buy and sell hobby items."]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"Things I'm into: React Hooks, styled-components, Storybook, downshift"}),Object(r.jsx)("p",{children:"Things I care about: accessibility, responsive design, soft colors"}),Object(r.jsx)("p",{children:"Things I'm doing: reading Dune, working on GOMdrop's direct pay feature"})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=l.href,p=l.as,h=e.children,m=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),j=g&&"object"===typeof g&&g.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],_=x[1],M=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,a.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,_,y,t,n]);var k={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}))}(e,n,d,p,m,v,b,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof y?y:n&&n.locale,I=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);k.href=I||(0,i.addBasePath)((0,i.addLocale)(p,C,n&&n.defaultLocale))}return a.default.cloneElement(g,k)};t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[["/EDR",0,2,1,3]]]);