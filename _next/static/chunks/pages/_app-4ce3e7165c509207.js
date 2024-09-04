(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(e,t,r){e.exports=r(6958)},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(926)}])},3225:function(e,t,r){"use strict";let n=(0,r(7294).createContext)({theme:"light",switchTheme:e=>{}});t.Z=n},926:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(7544),s=r.n(o),i=r(1686),a={light:{body:"#f8f8f8",text:"#363537",linkFocus:"#63689B",linkHover:"#D99191",title:"#63689B",background:"#f8f8f8",gradient:"linear-gradient(#F2BFB3, #D99191)",borderColor:"#eaeaea",linkUnderline:"#63689B"},dark:{body:"#111111",text:"#dbdbdb",linkFocus:"#F2BFB3",linkHover:"#B4B6D9",title:"#D99191",background:"#111111",gradient:"linear-gradient(#63689B, #B4B6D9)",borderColor:"#161616",linkUnderline:"#D99191"}};let c=(0,i.vJ)(["*,*::after,*::before{box-sizing:border-box;}body{padding:0;margin:0;background:",";font-family:'Inconsolata',monospace;}p{line-height:1.3em;}a{color:inherit;font-weight:inherit;text-decoration:underline;text-decoration-color:",";text-decoration-thickness:1.5px;&:focus{outline:1px dashed ",";outline-offset:2px;}}a:hover{text-decoration-color:",";}button{cursor:pointer;&:focus{outline:1px dashed ",";outline-offset:3px;}}h3{font-size:1.4em;}"],e=>{let{theme:t}=e;return t.gradient},e=>{let{theme:t}=e;return t.linkUnderline},e=>{let{theme:t}=e;return t.linkFocus},e=>{let{theme:t}=e;return t.linkHover},e=>{let{theme:t}=e;return t.linkFocus});var u=r(3225);class l extends s(){switchTheme(){let{theme:e}=this.state;"light"===e?this.setState({theme:"dark"}):this.setState({theme:"light"})}render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.Z.Provider,{value:this.state,children:(0,n.jsx)(u.Z.Consumer,{children:r=>(0,n.jsxs)(i.f6,{theme:a[r.theme],children:[(0,n.jsx)(c,{}),(0,n.jsx)(e,{...t})]})})})})}constructor(){super(),this.state={theme:"light",switchTheme:this.switchTheme.bind(this)}}}},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c=[],u=!1,l=-1;function f(){u&&n&&(u=!1,n.length?c=n.concat(c):l=-1,c.length&&h())}function h(){if(!u){var e=a(f);u=!0;for(var t=c.length;t;){for(n=c,c=[];++l<t;)n&&n[l].run();l=-1,t=c.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||u||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}},i=!0;try{t[e](s,s.exports,n),i=!1}finally{i&&delete r[e]}return s.exports}n.ab="//";var o=n(229);e.exports=o}()},6774:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var l=e[u],f=t[u];if(!1===(o=r?r.call(n,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},1686:function(e,t,r){"use strict";r.d(t,{qH:function(){return tv},LC:function(){return e6},f6:function(){return ta},vJ:function(){return tm},ZP:function(){return td}});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t,r){if(r||2==arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var s=r(7294),i=r(6774),a=r.n(i),c="-ms-",u="-moz-",l="-webkit-",f="comm",h="rule",p="decl",d="@keyframes",g=Math.abs,m=String.fromCharCode,v=Object.assign;function y(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,r){return e.replace(t,r)}function S(e,t,r){return e.indexOf(t,r)}function w(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function C(e){return e.length}function k(e,t){return t.push(e),e}function I(e,t){return e.filter(function(e){return!y(e,t)})}var P=1,E=1,A=0,$=0,_=0,T="";function O(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:P,column:E,length:i,return:"",siblings:a}}function R(e,t){return v(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=R(e.root,{children:[e]});k(e,e.siblings)}function j(){return _=$<A?w(T,$++):0,E++,10===_&&(E=1,P++),_}function D(){return w(T,$)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){var t,r;return(t=$-1,r=function e(t){for(;j();)switch(_){case t:return $;case 34:case 39:34!==t&&39!==t&&e(_);break;case 40:41===t&&e(t);break;case 92:j()}return $}(91===e?e+2:40===e?e+1:e),x(T,t,r)).trim()}function z(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function L(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case f:return"";case d:return e.return=e.value+"{"+z(e.children,n)+"}";case h:if(!C(e.value=e.props.join(",")))return""}return C(r=z(e.children,n))?e.return=e.value+"{"+r+"}":""}function G(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:e.return=function e(t,r,n){var o;switch(o=r,45^w(t,0)?(((o<<2^w(t,0))<<2^w(t,1))<<2^w(t,2))<<2^w(t,3):0){case 5103:return l+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+t+t;case 4789:return u+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return l+t+u+t+c+t+t;case 5936:switch(w(t,r+11)){case 114:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return l+t+c+t+t;case 6165:return l+t+c+"flex-"+t+t;case 5187:return l+t+b(t,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+t;case 5443:return l+t+c+"flex-item-"+b(t,/flex-|-self/g,"")+(y(t,/flex-|baseline/)?"":c+"grid-row-"+b(t,/flex-|-self/g,""))+t;case 4675:return l+t+c+"flex-line-pack"+b(t,/align-content|flex-|-self/g,"")+t;case 5548:return l+t+c+b(t,"shrink","negative")+t;case 5292:return l+t+c+b(t,"basis","preferred-size")+t;case 6060:return l+"box-"+b(t,"-grow","")+l+t+c+b(t,"grow","positive")+t;case 4554:return l+b(t,/([^-])(transform)/g,"$1"+l+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+t+t;case 4200:if(!y(t,/flex-|baseline/))return c+"grid-column-align"+x(t,r)+t;break;case 2592:case 3360:return c+b(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,y(e.props,/grid-\w+-end/)}))return~S(t+(n=n[r].value),"span",0)?t:c+b(t,"-start","")+t+c+"grid-row-span:"+(~S(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(t,/\d+/))+";";return c+b(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return y(e.props,/grid-\w+-start/)})?t:c+b(b(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,l+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(t)-1-r>6)switch(w(t,r+1)){case 109:if(45!==w(t,r+4))break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==w(t,r+3)?"$3":"$2-$3"))+t;case 115:return~S(t,"stretch",0)?e(b(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return b(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,o,s,i,a){return c+r+":"+n+a+(o?c+r+"-span:"+(s?i:+i-+n)+a:"")+t});case 4949:if(121===w(t,r+6))return b(t,":",":"+l)+t;break;case 6444:switch(w(t,45===w(t,14)?18:11)){case 120:return b(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===w(t,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+t;case 100:return b(t,":",":"+c)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case d:return z([R(e,{value:b(e.value,"@","@"+l)})],n);case h:if(e.length){var o,s;return o=r=e.props,s=function(t){switch(y(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N(R(e,{props:[b(t,/:(read-\w+)/,":"+u+"$1")]})),N(R(e,{props:[t]})),v(e,{props:I(r,n)});break;case"::placeholder":N(R(e,{props:[b(t,/:(plac\w+)/,":"+l+"input-$1")]})),N(R(e,{props:[b(t,/:(plac\w+)/,":"+u+"$1")]})),N(R(e,{props:[b(t,/:(plac\w+)/,c+"input-$1")]})),N(R(e,{props:[t]})),v(e,{props:I(r,n)})}return""},o.map(s).join("")}}}function M(e,t,r,n,o,s,i,a,c,u,l,f){for(var p=o-1,d=0===o?s:[""],m=d.length,v=0,y=0,S=0;v<n;++v)for(var w=0,C=x(e,p+1,p=g(y=i[v])),k=e;w<m;++w)(k=(y>0?d[w]+" "+C:b(C,/&\f/g,d[w])).trim())&&(c[S++]=k);return O(e,t,r,0===o?h:a,c,u,l,f)}function W(e,t,r,n,o){return O(e,t,r,p,x(e,0,n),x(e,n+1,-1),n,o)}var H={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y=r(3454),q=void 0!==Y&&void 0!==Y.env&&(Y.env.REACT_APP_SC_ATTR||Y.env.SC_ATTR)||"data-styled",U="active",Z="data-styled-version",J="6.1.13",V="/*!sc*/\n",X="undefined"!=typeof window&&"HTMLElement"in window,K=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==Y.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Y.env.REACT_APP_SC_DISABLE_SPEEDY&&Y.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==Y&&void 0!==Y.env&&void 0!==Y.env.SC_DISABLE_SPEEDY&&""!==Y.env.SC_DISABLE_SPEEDY&&"false"!==Y.env.SC_DISABLE_SPEEDY&&Y.env.SC_DISABLE_SPEEDY),Q={},ee=Object.freeze([]),et=Object.freeze({});function er(e,t,r){return void 0===r&&(r=et),e.theme!==r.theme&&e.theme||t||r.theme}var en=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,es=/(^-|-$)/g;function ei(e){return e.replace(eo,"-").replace(es,"")}var ea=/(a)(d)/gi,ec=function(e){return String.fromCharCode(e+(e>25?39:97))};function eu(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ec(t%52)+r;return(ec(t%52)+r).replace(ea,"$1-$2")}var el,ef=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},eh=function(e){return ef(5381,e)};function ep(e){return"string"==typeof e}var ed="function"==typeof Symbol&&Symbol.for,eg=ed?Symbol.for("react.memo"):60115,em=ed?Symbol.for("react.forward_ref"):60112,ev={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eS=((el={})[em]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[eg]=eb,el);function ew(e){return("type"in e&&e.type.$$typeof)===eg?eb:"$$typeof"in e?eS[e.$$typeof]:ev}var ex=Object.defineProperty,eC=Object.getOwnPropertyNames,ek=Object.getOwnPropertySymbols,eI=Object.getOwnPropertyDescriptor,eP=Object.getPrototypeOf,eE=Object.prototype;function eA(e){return"function"==typeof e}function e$(e){return"object"==typeof e&&"styledComponentId"in e}function e_(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eT(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eO(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eR(e,t){Object.defineProperty(e,"toString",{value:t})}function eN(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ej=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw eN(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(V);return t},e}(),eD=new Map,eF=new Map,eB=1,ez=function(e){if(eD.has(e))return eD.get(e);for(;eF.has(eB);)eB++;var t=eB++;return eD.set(e,t),eF.set(t,e),t},eL=function(e,t){eB=t+1,eD.set(e,t),eF.set(t,e)},eG="style[".concat(q,"][").concat(Z,'="').concat(J,'"]'),eM=new RegExp("^".concat(q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eW=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},eH=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(V),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var c=a.match(eM);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(eL(l,u),eW(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},eY=function(e){for(var t=document.querySelectorAll(eG),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(q)!==U&&(eH(e,o),o.parentNode&&o.parentNode.removeChild(o))}},eq=function(e){var t,n=document.head,o=e||n,s=document.createElement("style"),i=(t=Array.from(o.querySelectorAll("style[".concat(q,"]"))))[t.length-1],a=void 0!==i?i.nextSibling:null;s.setAttribute(q,U),s.setAttribute(Z,J);var c=r.nc;return c&&s.setAttribute("nonce",c),o.insertBefore(s,a),s},eU=function(){function e(e){this.element=eq(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw eN(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eZ=function(){function e(e){this.element=eq(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eJ=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eV=X,eX={isServer:!X,useCSSOMInjection:!K},eK=function(){function e(e,t,r){void 0===e&&(e=et),void 0===t&&(t={});var o=this;this.options=n(n({},eX),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&X&&eV&&(eV=!1,eY(this)),eR(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++)(function(r){var o=eF.get(r);if(void 0!==o){var s=e.names.get(o),i=t.getGroup(r);if(void 0!==s&&s.size&&0!==i.length){var a="".concat(q,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(V)}}})(o);return n}(o)})}return e.registerId=function(e){return ez(e)},e.prototype.rehydrate=function(){!this.server&&X&&eY(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new ej(e.isServer?new eJ(r):t?new eU(r):new eZ(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ez(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ez(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ez(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eQ=/&/g,e1=/^\s*\/\/.*$/gm;function e0(e){var t,r,n,o=void 0===e?et:e,s=o.options,i=void 0===s?et:s,a=o.plugins,c=void 0===a?ee:a,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push(function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eQ,r).replace(n,u))}),i.prefix&&l.push(G),l.push(L);var p=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,r=o,n=RegExp("\\".concat(r,"\\b"),"g");var c,u,h,p,d,v,y=e.replace(e1,""),I=(d=function e(t,r,n,o,s,i,a,c,u){for(var l,h=0,p=0,d=a,v=0,y=0,I=0,A=1,R=1,N=1,z=0,L="",G=s,H=i,Y=o,q=L;R;)switch(I=z,z=j()){case 40:if(108!=I&&58==w(q,d-1)){-1!=S(q+=b(B(z),"&","&\f"),"&\f",g(h?c[h-1]:0))&&(N=-1);break}case 34:case 39:case 91:q+=B(z);break;case 9:case 10:case 13:case 32:q+=function(e){for(;_=D();)if(_<33)j();else break;return F(e)>2||F(_)>3?"":" "}(I);break;case 92:q+=function(e,t){for(var r;--t&&j()&&!(_<48)&&!(_>102)&&(!(_>57)||!(_<65))&&(!(_>70)||!(_<97)););return r=$+(t<6&&32==D()&&32==j()),x(T,e,r)}($-1,7);continue;case 47:switch(D()){case 42:case 47:k(O(l=function(e,t){for(;j();)if(e+_===57)break;else if(e+_===84&&47===D())break;return"/*"+x(T,t,$-1)+"*"+m(47===e?e:j())}(j(),$),r,n,f,m(_),x(l,2,-2),0,u),u);break;default:q+="/"}break;case 123*A:c[h++]=C(q)*N;case 125*A:case 59:case 0:switch(z){case 0:case 125:R=0;case 59+p:-1==N&&(q=b(q,/\f/g,"")),y>0&&C(q)-d&&k(y>32?W(q+";",o,n,d-1,u):W(b(q," ","")+";",o,n,d-2,u),u);break;case 59:q+=";";default:if(k(Y=M(q,r,n,h,p,s,c,L,G=[],H=[],d,i),i),123===z){if(0===p)e(q,r,Y,Y,G,i,d,c,H);else switch(99===v&&110===w(q,3)?100:v){case 100:case 108:case 109:case 115:e(t,Y,Y,o&&k(M(t,Y,Y,0,0,s,c,L,s,G=[],d,H),H),s,H,d,c,o?G:H);break;default:e(q,Y,Y,Y,[""],H,0,c,H)}}}h=p=y=0,A=N=1,L=q="",d=a;break;case 58:d=1+C(q),y=I;default:if(A<1){if(123==z)--A;else if(125==z&&0==A++&&125==(_=$>0?w(T,--$):0,E--,10===_&&(E=1,P--),_))continue}switch(q+=m(z),z*A){case 38:N=p>0?1:(q+="\f",-1);break;case 44:c[h++]=(C(q)-1)*N,N=1;break;case 64:45===D()&&(q+=B(j())),v=D(),p=d=C(L=q+=function(e){for(;!F(D());)j();return x(T,e,$)}($)),z++;break;case 45:45===I&&2==C(q)&&(A=0)}}return i}("",null,null,null,[""],(p=h=s||o?"".concat(s," ").concat(o," { ").concat(y," }"):y,P=E=1,A=C(T=p),$=0,h=[]),0,[0],h),T="",d);i.namespace&&(I=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(I,i.namespace));var R=[];return z(I,(u=(c=l.concat((v=function(e){return R.push(e)},function(e){!e.root&&(e=e.return)&&v(e)}))).length,function(e,t,r,n){for(var o="",s=0;s<u;s++)o+=c[s](e,t,r,n)||"";return o})),R};return p.hash=c.length?c.reduce(function(e,t){return t.name||eN(15),ef(e,t.name)},5381).toString():"",p}var e2=new eK,e5=e0(),e3=s.createContext({shouldForwardProp:void 0,styleSheet:e2,stylis:e5}),e4=(e3.Consumer,s.createContext(void 0));function e9(){return(0,s.useContext)(e3)}function e6(e){var t=(0,s.useState)(e.stylisPlugins),r=t[0],n=t[1],o=e9().styleSheet,i=(0,s.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),c=(0,s.useMemo)(function(){return e0({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,s.useEffect)(function(){a()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var u=(0,s.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}},[e.shouldForwardProp,i,c]);return s.createElement(e3.Provider,{value:u},s.createElement(e4.Provider,{value:c},e.children))}var e8=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e5);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eR(this,function(){throw eN(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e5),this.name+e.hash},e}();function e7(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var te=function(e){return null==e||!1===e||""===e},tt=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!te(n)&&(Array.isArray(n)&&n.isCss||eA(n)?t.push("".concat(e7(r),":"),n,";"):eO(n)?t.push.apply(t,o(o(["".concat(r," {")],tt(n),!1),["}"],!1)):t.push("".concat(e7(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in H||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function tr(e,t,r,n){return te(e)?[]:e$(e)?[".".concat(e.styledComponentId)]:eA(e)?!eA(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:tr(e(t),t,r,n):e instanceof e8?r?(e.inject(r,n),[e.getName(n)]):[e]:eO(e)?tt(e):Array.isArray(e)?Array.prototype.concat.apply(ee,e.map(function(e){return tr(e,t,r,n)})):[e.toString()]}function tn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eA(r)&&!e$(r))return!1}return!0}var to=eh(J),ts=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&tn(e),this.componentId=t,this.baseHash=ef(to,t),this.baseStyle=r,eK.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=e_(n,this.staticRulesId);else{var o=eT(tr(this.rules,e,t,r)),s=eu(ef(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}n=e_(n,s),this.staticRulesId=s}}else{for(var a=ef(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=eT(tr(l,e,t,r));a=ef(a,f+u),c+=f}}if(c){var h=eu(a>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(c,".".concat(h),void 0,this.componentId)),n=e_(n,h)}}return n},e}(),ti=s.createContext(void 0);function ta(e){var t=s.useContext(ti),r=(0,s.useMemo)(function(){return function(e,t){if(!e)throw eN(14);if(eA(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw eN(8);return t?n(n({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?s.createElement(ti.Provider,{value:r},e.children):null}ti.Consumer;var tc={};function tu(e,t,r){var o,i,a,c,u=e$(e),l=!ep(e),f=t.attrs,h=void 0===f?ee:f,p=t.componentId,d=void 0===p?(o=t.displayName,i=t.parentComponentId,tc[a="string"!=typeof o?"sc":ei(o)]=(tc[a]||0)+1,c="".concat(a,"-").concat(eu(eh(J+a+tc[a])>>>0)),i?"".concat(i,"-").concat(c):c):p,g=t.displayName,m=void 0===g?ep(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,v=t.displayName&&t.componentId?"".concat(ei(t.displayName),"-").concat(t.componentId):t.componentId||d,y=u&&e.attrs?e.attrs.concat(h).filter(Boolean):h,b=t.shouldForwardProp;if(u&&e.shouldForwardProp){var S=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;b=function(e,t){return S(e,t)&&w(e,t)}}else b=S}var x=new ts(r,v,u?e.componentStyle:void 0);function C(e,t){return function(e,t,r){var o,i=e.attrs,a=e.componentStyle,c=e.defaultProps,u=e.foldedComponentIds,l=e.styledComponentId,f=e.target,h=s.useContext(ti),p=e9(),d=e.shouldForwardProp||p.shouldForwardProp,g=er(t,h,c)||et,m=function(e,t,r){for(var o,s=n(n({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=eA(o=e[i])?o(s):o;for(var c in a)s[c]="className"===c?e_(s[c],a[c]):"style"===c?n(n({},s[c]),a[c]):a[c]}return t.className&&(s.className=e_(s.className,t.className)),s}(i,t,g),v=m.as||f,y={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b&&m.theme===g||("forwardedAs"===b?y.as=m.forwardedAs:d&&!d(b,v)||(y[b]=m[b]));var S=(o=e9(),a.generateAndInjectStyles(m,o.styleSheet,o.stylis)),w=e_(u,l);return S&&(w+=" "+S),m.className&&(w+=" "+m.className),y[ep(v)&&!en.has(v)?"class":"className"]=w,y.ref=r,(0,s.createElement)(v,y)}(k,e,t)}C.displayName=m;var k=s.forwardRef(C);return k.attrs=y,k.componentStyle=x,k.displayName=m,k.shouldForwardProp=b,k.foldedComponentIds=u?e_(e.foldedComponentIds,e.styledComponentId):"",k.styledComponentId=v,k.target=u?e.target:e,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=u?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eO(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)t[o]=e(t[o],r[o]);else if(eO(r))for(var o in r)t[o]=e(t[o],r[o]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eR(k,function(){return".".concat(k.styledComponentId)}),l&&function e(t,r,n){if("string"!=typeof r){if(eE){var o=eP(r);o&&o!==eE&&e(t,o,n)}var s=eC(r);ek&&(s=s.concat(ek(r)));for(var i=ew(t),a=ew(r),c=0;c<s.length;++c){var u=s[c];if(!(u in ey||n&&n[u]||a&&u in a||i&&u in i)){var l=eI(r,u);try{ex(t,u,l)}catch(e){}}}}return t}(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function tl(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var tf=function(e){return Object.assign(e,{isCss:!0})};function th(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eA(e)||eO(e)?tf(tr(tl(ee,o([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?tr(e):tf(tr(tl(e,t)))}var tp=function(e){return function e(t,r,s){if(void 0===s&&(s=et),!r)throw eN(1,r);var i=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return t(r,s,th.apply(void 0,o([e],n,!1)))};return i.attrs=function(o){return e(t,r,n(n({},s),{attrs:Array.prototype.concat(s.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return e(t,r,n(n({},s),o))},i}(tu,e)},td=tp;en.forEach(function(e){td[e]=tp(e)});var tg=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=tn(e),eK.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(eT(tr(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eK.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function tm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=th.apply(void 0,o([e],t,!1)),a="sc-global-".concat(eu(eh(JSON.stringify(i))>>>0)),c=new tg(i,a),u=function(e){var t=e9(),r=s.useContext(ti),n=s.useRef(t.styleSheet.allocateGSInstance(a)).current;return t.styleSheet.server&&l(n,e,t.styleSheet,r,t.stylis),s.useLayoutEffect(function(){if(!t.styleSheet.server)return l(n,e,t.styleSheet,r,t.stylis),function(){return c.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function l(e,t,r,o,s){if(c.isStatic)c.renderStyles(e,Q,r,s);else{var i=n(n({},t),{theme:er(t,o,u.defaultProps)});c.renderStyles(e,i,r,s)}}return s.memo(u)}var tv=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=r.nc,o=eT([n&&'nonce="'.concat(n,'"'),"".concat(q,'="true"'),"".concat(Z,'="').concat(J,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eN(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eN(2);var t,o=e.instance.toString();if(!o)return[];var i=((t={})[q]="",t[Z]=J,t.dangerouslySetInnerHTML={__html:o},t),a=r.nc;return a&&(i.nonce=a),[s.createElement("style",n({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eK({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw eN(2);return s.createElement(e6,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw eN(3)},e}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);