(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var o=i<0||arguments.length<=i?void 0:arguments[i];o.nodeType===1||o.nodeType===11?this.appendChild(o):this.appendChild(document.createTextNode(String(o)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var c=o.length;if(n)for(c||n.removeChild(this);c--;){var f=o[c];typeof f!="object"?f=this.ownerDocument.createTextNode(f):f.parentNode&&f.parentNode.removeChild(f),c?n.insertBefore(this.previousSibling,f):n.replaceChild(f,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function _t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function st(t,e,r){return e&&ot(t.prototype,e),r&&ot(t,r),t}function Rt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?at(Object(r),!0).forEach(function(n){Rt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function ut(t,e){return Dt(t)||Mt(t,e)||ft(t,e)||jt()}function O(t){return Nt(t)||kt(t)||ft(t)||Pt()}function Nt(t){if(Array.isArray(t))return z(t)}function Dt(t){if(Array.isArray(t))return t}function kt(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Mt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,o=void 0;try{for(var a=t[Symbol.iterator](),c;!(n=(c=a.next()).done)&&(r.push(c.value),!(e&&r.length===e));n=!0);}catch(f){i=!0,o=f}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw o}}return r}}function ft(t,e){if(t){if(typeof t=="string")return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,e)}}function z(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),o=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,o||i)},{})}function $(t){return typeof t=="string"}function Z(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=P(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=($(r)||Z(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function Q(t){var e=$(t)||Z(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Y(t){return t!==null&&typeof t=="object"}function Wt(t){return Y(t)&&/^(1|3|11)$/.test(t.nodeType)}function Ut(t){return typeof t=="number"&&t>-1&&t%1===0}function Bt(t){return Y(t)&&Ut(t.length)}function W(t){return Z(t)?t:t==null?[]:Bt(t)?Array.prototype.slice.call(t):[t]}function lt(t){var e=t;return $(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),W(e).reduce(function(r,n){return[].concat(O(r),O(W(n).filter(Wt)))},[])}var Ht=Object.entries,q="_splittype",N={},Gt=0;function D(t,e,r){if(!Y(t))return console.warn("[data.set] owner is not an object"),null;var n=t[q]||(t[q]=++Gt),i=N[n]||(N[n]={});return r===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(N[n]=ct(ct({},i),e)):e!==void 0&&(i[e]=r),r}function j(t,e){var r=Y(t)?t[q]:null,n=r&&N[r]||{};return e===void 0?n:n[e]}function dt(t){var e=t&&t[q];e&&(delete t[e],delete N[e])}function $t(){Object.keys(N).forEach(function(t){delete N[t]})}function Ft(){Ht(N).forEach(function(t){var e=ut(t,2),r=e[0],n=e[1],i=n.isRoot,o=n.isSplit;(!i||!o)&&(N[r]=null,delete N[r])})}function qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var tt="\\ud800-\\udfff",pt="\\u0300-\\u036f\\ufe20-\\ufe23",ht="\\u20d0-\\u20f0",gt="\\ufe0e\\ufe0f",Yt="[".concat(tt,"]"),V="[".concat(pt).concat(ht,"]"),K="\\ud83c[\\udffb-\\udfff]",Xt="(?:".concat(V,"|").concat(K,")"),vt="[^".concat(tt,"]"),yt="(?:\\ud83c[\\udde6-\\uddff]){2}",At="[\\ud800-\\udbff][\\udc00-\\udfff]",bt="\\u200d",Et="".concat(Xt,"?"),mt="[".concat(gt,"]?"),zt="(?:"+bt+"(?:"+[vt,yt,At].join("|")+")"+mt+Et+")*",Vt=mt+Et+zt,Kt="(?:".concat(["".concat(vt).concat(V,"?"),V,yt,At,Yt].join("|"),`
)`),Jt=RegExp("".concat(K,"(?=").concat(K,")|").concat(Kt).concat(Vt),"g"),Zt=[bt,tt,pt,ht,gt],Qt=RegExp("[".concat(Zt.join(""),"]"));function te(t){return t.split("")}function Tt(t){return Qt.test(t)}function ee(t){return t.match(Jt)||[]}function re(t){return Tt(t)?ee(t):te(t)}function ne(t){return t==null?"":String(t)}function ie(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=ne(t),t&&$(t)&&!e&&Tt(t)?re(t):t.split(e)}function J(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],o=$(i)?i.trim():i;o===null||o===""||(n==="children"?r.append.apply(r,O(W(o))):r.setAttribute(n,o))}),r}var et={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function oe(t,e){e=P(et,e);var r=Q(e.types),n=e.tagName,i=t.nodeValue,o=document.createDocumentFragment(),a=[],c=[];return/^\s/.test(i)&&o.append(" "),a=qt(i).reduce(function(f,A,E,p){var m,b;return r.chars&&(b=ie(A).map(function(S){var d=J(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:S});return D(d,"isChar",!0),c=[].concat(O(c),[d]),d})),r.words||r.lines?(m=J(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?b:A}),D(m,{isWord:!0,isWordStart:!0,isWordEnd:!0}),o.appendChild(m)):b.forEach(function(S){o.appendChild(S)}),E<p.length-1&&o.append(" "),r.words?f.concat(m):f},[]),/\s$/.test(i)&&o.append(" "),t.replaceWith(o),{words:a,chars:c}}function St(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return oe(t,e);var i=W(t.childNodes);if(i.length&&(D(t,"isSplit",!0),!j(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var o=t.nextSibling,a=t.previousSibling,c=t.textContent||"",f=o?o.textContent:" ",A=a?a.textContent:" ";D(t,{isWordEnd:/\s$/.test(c)||/^\s/.test(f),isWordStart:/^\s/.test(c)||/\s$/.test(A)})}return i.reduce(function(E,p){var m=St(p,e),b=m.words,S=m.chars;return{words:[].concat(O(E.words),O(b)),chars:[].concat(O(E.chars),O(S))}},n)}function se(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,o=ut(n,2),a=o[0],c=o[1],f=0,A=0;if(i&&i!==document.body){var E=i.getBoundingClientRect();f=E.x+a,A=E.y+c}var p=t.getBoundingClientRect(),m=p.width,b=p.height,S=p.x,d=p.y,w=d+c-A,L=S+a-f;return{width:m,height:b,top:w,left:L}}function wt(t){j(t).isWord?(dt(t),t.replaceWith.apply(t,O(t.childNodes))):W(t.children).forEach(function(e){return wt(e)})}var ae=function(){return document.createDocumentFragment()};function ce(t,e,r){var n=Q(e.types),i=e.tagName,o=t.getElementsByTagName("*"),a=[],c=[],f=null,A,E,p,m=[],b=t.parentElement,S=t.nextElementSibling,d=ae(),w=window.getComputedStyle(t),L=w.textAlign,_=parseFloat(w.fontSize),k=_*.2;return e.absolute&&(p={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},E=t.offsetWidth,A=t.offsetHeight,D(t,{cssWidth:t.style.width,cssHeight:t.style.height})),W(o).forEach(function(v){var h=v.parentElement===t,g=se(v,h,e,r),x=g.width,R=g.height,T=g.top,C=g.left;/^br$/i.test(v.nodeName)||(n.lines&&h&&((f===null||T-f>=k)&&(f=T,a.push(c=[])),c.push(v)),e.absolute&&D(v,{top:T,left:C,width:x,height:R}))}),b&&b.removeChild(t),n.lines&&(m=a.map(function(v){var h=J(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(L,"; width: 100%;")});D(h,"isLine",!0);var g={height:0,top:1e4};return d.appendChild(h),v.forEach(function(x,R,T){var C=j(x),B=C.isWordEnd,H=C.top,X=C.height,it=T[R+1];g.height=Math.max(g.height,X),g.top=Math.min(g.top,H),h.appendChild(x),B&&j(it).isWordStart&&h.append(" ")}),e.absolute&&D(h,{height:g.height,top:g.top}),h}),n.words||wt(d),t.replaceChildren(d)),e.absolute&&(t.style.width="".concat(t.style.width||E,"px"),t.style.height="".concat(A,"px"),W(o).forEach(function(v){var h=j(v),g=h.isLine,x=h.top,R=h.left,T=h.width,C=h.height,B=j(v.parentElement),H=!g&&B.isLine;v.style.top="".concat(H?x-B.top:x,"px"),v.style.left=g?"".concat(p.left,"px"):"".concat(R-(H?p.left:0),"px"),v.style.height="".concat(C,"px"),v.style.width=g?"".concat(p.width,"px"):"".concat(T,"px"),v.style.position="absolute"})),b&&(S?b.insertBefore(t,S):b.appendChild(t)),m}var G=P(et,{}),Ct=function(){st(t,null,[{key:"clearData",value:function(){$t()}},{key:"setDefaults",value:function(r){return G=P(G,F(r)),et}},{key:"revert",value:function(r){lt(r).forEach(function(n){var i=j(n),o=i.isSplit,a=i.html,c=i.cssWidth,f=i.cssHeight;o&&(n.innerHTML=a,n.style.width=c||"",n.style.height=f||"",dt(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return G},set:function(r){G=P(G,F(r))}}]);function t(e,r){_t(this,t),this.isSplit=!1,this.settings=P(G,F(r)),this.elements=lt(e),this.split()}return st(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(a){D(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=P(this.settings,F(r)));var o=Q(this.settings.types);o.none||(this.elements.forEach(function(a){D(a,"isRoot",!0);var c=St(a,n.settings),f=c.words,A=c.chars;n.words=[].concat(O(n.words),O(f)),n.chars=[].concat(O(n.chars),O(A))}),this.elements.forEach(function(a){if(o.lines||n.settings.absolute){var c=ce(a,n.settings,i);n.lines=[].concat(O(n.lines),O(c))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),Ft())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var y=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t};var rt=function(t,e="lines, words"){if(t)return typeSplit=new Ct(t,{types:e}),typeSplit},U=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:i,isDesktop:o,reduceMotion:a}=r.conditions;if(n===void 0||i===void 0||o===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let c=`data-ix-${e}-desktop`,f=`data-ix-${e}-tablet`,A=`data-ix-${e}-mobile`,E=`data-ix-${e}-run`;return runAll=y(!0,t.getAttribute(E)),runMobile=y(!0,t.getAttribute(A)),runTablet=y(!0,t.getAttribute(f)),runDesktop=y(!0,t.getAttribute(c)),!(runAll===!1||runMobile===!1&&n||runTablet===!1&&i||runDesktop===!1&&o)},nt=function(t){let e=t,r={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return t==="left"&&(e=r.left),t==="right"&&(e=r.right),t==="top"&&(e=r.top),t==="bottom"&&(e=r.bottom),t==="full"&&(e=r.full),e};var Ot=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n='[data-ix-hoveractive="item"]',i='[data-ix-hoveractive="target"]',o="data-ix-hoveractive-id",a="data-ix-hoveractive-class",c="data-ix-hoveractive-keep-active",f="is-active",A=function(p){let m=[...p.querySelectorAll(n)],b=y(f,p.getAttribute(a)),S=y(!1,p.getAttribute(c));function d(w,L=!0){let _=!0,k=w.getAttribute(o),v=p.querySelector(`${i}[${o}="${k}"]`);(!k||!v)&&(_=!1),L?(w.classList.add(b),_&&v.classList.add(b)):(w.classList.remove(b),_&&v.classList.remove(b))}m.forEach(w=>{w.addEventListener("mouseover",function(L){m.forEach(_=>{_===w?d(w,!0):d(_,!1)})}),w.addEventListener("mouseleave",function(L){S||d(w,!1)})})},E=[...document.querySelectorAll(r)];if(E.length>=0)E.forEach(p=>{U(p,e,t)!==!1&&A(p)});else{let p=document.querySelector("body");A(p)}};var xt=function(t){let e="marquee",r='[data-ix-marquee="wrap"]',n='[data-ix-marquee="list"]',i="data-ix-marquee-reverse",o="data-ix-marquee-duration",a="data-ix-marquee-duration-dynamic",c="data-ix-marquee-duration-per-item",f="data-ix-marquee-hover",A="decelerate",E="decelerate",p="pause",S=document.querySelectorAll(r);S.length!==0&&S.forEach(d=>{if(U(d,e,t)===!1)return;let L=[...d.querySelectorAll(n)],_=y(!1,d.getAttribute(i)),k=y(30,d.getAttribute(o)),v=y(!1,d.getAttribute(a)),h=y(10,d.getAttribute(c)),g=L[0].childElementCount;g===1&&(g=L[0].firstElementChild.childElementCount),v&&(k=g*h);let x=y("none",d.getAttribute(f)),R=1;_&&(R=-1);let T=gsap.timeline({repeat:-1,defaults:{ease:"none"}});T.fromTo(L,{xPercent:0},{xPercent:-100*R,duration:k}),x===A&&(d.addEventListener("mouseenter",C=>{T.timeScale(2)}),d.addEventListener("mouseleave",C=>{T.timeScale(1)})),x===E&&(d.addEventListener("mouseenter",C=>{T.timeScale(.5)}),d.addEventListener("mouseleave",C=>{T.timeScale(1)})),x===p&&(d.addEventListener("mouseenter",C=>{T.pause()}),d.addEventListener("mouseleave",C=>{T.play()}))})};var It=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",i="item",o="container",a="stagger",c="rich-text",f="image-wrap",A="image",E="line",p="data-ix-scrollin-toggle-actions",m="data-ix-scrollin-scrub",b="data-ix-scrollin-start",S="data-ix-scrollin-end",d="data-ix-scrollin-direction",w="data-ix-scrollin-stagger",v="power1.out",h=function(s){let l={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return l.toggleActions=y(l.toggleActions,s.getAttribute(p)),l.scrub=y(l.scrub,s.getAttribute(m)),l.start=y(l.start,s.getAttribute(b)),l.end=y(l.end,s.getAttribute(S)),gsap.timeline({defaults:{duration:.6,ease:v},scrollTrigger:{trigger:s,start:l.start,end:l.end,toggleActions:l.toggleActions,scrub:l.scrub}})},g=function(s,l,u={}){let I={opacity:0,y:"2rem"},M={opacity:1,y:"0rem"};return u.stagger&&(M.stagger={each:u.stagger,from:"start"}),u.stagger==="small"&&(M.stagger={each:.1,from:"start"}),u.stagger==="large"&&(M.stagger={each:.3,from:"start"}),l.fromTo(s,I,M)},x=function(s){s.classList.contains("w-richtext")&&(s=s.firstChild);let l=rt(s);if(!l)return;let u=h(s),I=g(l.words,u,{stagger:"small",skew:"large"});u.eventCallback("onComplete",()=>{l.revert()})},R=function(s){if(s)if(s.classList.contains("w-richtext")){let l=gsap.utils.toArray(s.children);if(l.length===0)return;l.forEach(u=>{let I=h(u),M=g(u,I)})}else{let l=h(s),u=g(s,l)}},T=function(s){if(!s)return;let l=s.firstChild,u=h(s);u.fromTo(l,{scale:1.2},{scale:1,duration:1}),u.fromTo(s,{scale:.9},{scale:1,duration:1},"<")},C=function(s){if(!s)return;let l=y("left",s.getAttribute(d)),u=nt(l),I=nt("full");h(s).fromTo(s,{clipPath:u},{clipPath:I})},B=function(s){if(!s)return;let l=gsap.utils.toArray(s.children);l.length!==0&&l.forEach(u=>{let I=h(u),M=g(u,I)})},H=function(s){if(!s)return;let l=y(.3,s.getAttribute(w)),u=gsap.utils.toArray(s.children);if(u.length===0)return;let I=h(s),M=g(u,I,{stagger:l})},X=function(s){if(!s)return;let l=gsap.utils.toArray(s.children);l.length!==0&&l.forEach(u=>{let I=u.tagName;["H1","H2","H3","H4","H5","H6"].includes(I)&&x(u),I==="FIGURE"?T(u):R(u)})};gsap.utils.toArray(`[${r}]`).forEach(s=>{if(!s||U(s,e,t)===!1)return;let u=s.getAttribute(r);u===n&&x(s),u===i&&R(s),u===A&&T(s),u===E&&C(s),u===o&&B(s),u===a&&H(s),u===c&&X(s)})};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip),function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},n=>{let{isMobile:i,isTablet:o,isDesktop:a,reduceMotion:c}=n.conditions;Ot(n),xt(n),c||(It(n),(void 0)(n))})}(),function(){let r="[data-ix-reset]",n="data-ix-reset-time";document.querySelectorAll(r).forEach(function(o){o.addEventListener("click",function(a){if(ScrollTrigger.refresh(),o.hasAttribute(n)){let c=y(1e3,o.getAttribute(n));setTimeout(()=>{ScrollTrigger.refresh()},c)}})})}()});})();
