(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];var l=s.length;if(n)for(l||n.removeChild(this);l--;){var u=s[l];typeof u!="object"?u=this.ownerDocument.createTextNode(u):u.parentNode&&u.parentNode.removeChild(u),l?n.insertBefore(this.previousSibling,u):n.replaceChild(u,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function Xt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function At(t,e,r){return e&&gt(t.prototype,e),r&&gt(t,r),t}function zt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?vt(Object(r),!0).forEach(function(n){zt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function yt(t,e){return Zt(t)||Jt(t,e)||Tt(t,e)||te()}function M(t){return Vt(t)||Kt(t)||Tt(t)||Qt()}function Vt(t){if(Array.isArray(t))return it(t)}function Zt(t){if(Array.isArray(t))return t}function Kt(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Jt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,s=void 0;try{for(var c=t[Symbol.iterator](),l;!(n=(l=c.next()).done)&&(r.push(l.value),!(e&&r.length===e));n=!0);}catch(u){i=!0,s=u}finally{try{!n&&c.return!=null&&c.return()}finally{if(i)throw s}}return r}}function Tt(t,e){if(t){if(typeof t=="string")return it(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return it(t,e)}}function it(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,s||i)},{})}function K(t){return typeof t=="string"}function ct(t){return Array.isArray(t)}function Q(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=F(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(K(r)||ct(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function lt(t){var e=K(t)||ct(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function et(t){return t!==null&&typeof t=="object"}function ee(t){return et(t)&&/^(1|3|11)$/.test(t.nodeType)}function re(t){return typeof t=="number"&&t>-1&&t%1===0}function ne(t){return et(t)&&re(t.length)}function X(t){return ct(t)?t:t==null?[]:ne(t)?Array.prototype.slice.call(t):[t]}function Et(t){var e=t;return K(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),X(e).reduce(function(r,n){return[].concat(M(r),M(X(n).filter(ee)))},[])}var ie=Object.entries,tt="_splittype",j={},oe=0;function H(t,e,r){if(!et(t))return console.warn("[data.set] owner is not an object"),null;var n=t[tt]||(t[tt]=++oe),i=j[n]||(j[n]={});return r===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(j[n]=bt(bt({},i),e)):e!==void 0&&(i[e]=r),r}function Y(t,e){var r=et(t)?t[tt]:null,n=r&&j[r]||{};return e===void 0?n:n[e]}function St(t){var e=t&&t[tt];e&&(delete t[e],delete j[e])}function se(){Object.keys(j).forEach(function(t){delete j[t]})}function ae(){ie(j).forEach(function(t){var e=yt(t,2),r=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(j[r]=null,delete j[r])})}function ce(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var ut="\\ud800-\\udfff",mt="\\u0300-\\u036f\\ufe20-\\ufe23",Ot="\\u20d0-\\u20f0",xt="\\ufe0e\\ufe0f",le="[".concat(ut,"]"),ot="[".concat(mt).concat(Ot,"]"),st="\\ud83c[\\udffb-\\udfff]",ue="(?:".concat(ot,"|").concat(st,")"),wt="[^".concat(ut,"]"),_t="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",Rt="\\u200d",Lt="".concat(ue,"?"),Nt="[".concat(xt,"]?"),fe="(?:"+Rt+"(?:"+[wt,_t,Ct].join("|")+")"+Nt+Lt+")*",de=Nt+Lt+fe,pe="(?:".concat(["".concat(wt).concat(ot,"?"),ot,_t,Ct,le].join("|"),`
)`),he=RegExp("".concat(st,"(?=").concat(st,")|").concat(pe).concat(de),"g"),ge=[Rt,ut,mt,Ot,xt],Ae=RegExp("[".concat(ge.join(""),"]"));function ve(t){return t.split("")}function It(t){return Ae.test(t)}function be(t){return t.match(he)||[]}function Ee(t){return It(t)?be(t):ve(t)}function ye(t){return t==null?"":String(t)}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=ye(t),t&&K(t)&&!e&&It(t)?Ee(t):t.split(e)}function at(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=K(i)?i.trim():i;s===null||s===""||(n==="children"?r.append.apply(r,M(X(s))):r.setAttribute(n,s))}),r}var ft={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Se(t,e){e=F(ft,e);var r=lt(e.types),n=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),c=[],l=[];return/^\s/.test(i)&&s.append(" "),c=ce(i).reduce(function(u,A,v,h){var b,E;return r.chars&&(E=Te(A).map(function(x){var o=at(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:x});return H(o,"isChar",!0),l=[].concat(M(l),[o]),o})),r.words||r.lines?(b=at(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?E:A}),H(b,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(b)):E.forEach(function(x){s.appendChild(x)}),v<h.length-1&&s.append(" "),r.words?u.concat(b):u},[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:c,chars:l}}function Dt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return Se(t,e);var i=X(t.childNodes);if(i.length&&(H(t,"isSplit",!0),!Y(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var s=t.nextSibling,c=t.previousSibling,l=t.textContent||"",u=s?s.textContent:" ",A=c?c.textContent:" ";H(t,{isWordEnd:/\s$/.test(l)||/^\s/.test(u),isWordStart:/^\s/.test(l)||/\s$/.test(A)})}return i.reduce(function(v,h){var b=Dt(h,e),E=b.words,x=b.chars;return{words:[].concat(M(v.words),M(E)),chars:[].concat(M(v.chars),M(x))}},n)}function me(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=yt(n,2),c=s[0],l=s[1],u=0,A=0;if(i&&i!==document.body){var v=i.getBoundingClientRect();u=v.x+c,A=v.y+l}var h=t.getBoundingClientRect(),b=h.width,E=h.height,x=h.x,o=h.y,g=o+l-A,O=x+c-u;return{width:b,height:E,top:g,left:O}}function kt(t){Y(t).isWord?(St(t),t.replaceWith.apply(t,M(t.childNodes))):X(t.children).forEach(function(e){return kt(e)})}var Oe=function(){return document.createDocumentFragment()};function xe(t,e,r){var n=lt(e.types),i=e.tagName,s=t.getElementsByTagName("*"),c=[],l=[],u=null,A,v,h,b=[],E=t.parentElement,x=t.nextElementSibling,o=Oe(),g=window.getComputedStyle(t),O=g.textAlign,_=parseFloat(g.fontSize),I=_*.2;return e.absolute&&(h={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},v=t.offsetWidth,A=t.offsetHeight,H(t,{cssWidth:t.style.width,cssHeight:t.style.height})),X(s).forEach(function(S){var y=S.parentElement===t,T=me(S,y,e,r),D=T.width,P=T.height,C=T.top,L=T.left;/^br$/i.test(S.nodeName)||(n.lines&&y&&((u===null||C-u>=I)&&(u=C,c.push(l=[])),l.push(S)),e.absolute&&H(S,{top:C,left:L,width:D,height:P}))}),E&&E.removeChild(t),n.lines&&(b=c.map(function(S){var y=at(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(O,"; width: 100%;")});H(y,"isLine",!0);var T={height:0,top:1e4};return o.appendChild(y),S.forEach(function(D,P,C){var L=Y(D),q=L.isWordEnd,$=L.top,Z=L.height,J=C[P+1];T.height=Math.max(T.height,Z),T.top=Math.min(T.top,$),y.appendChild(D),q&&Y(J).isWordStart&&y.append(" ")}),e.absolute&&H(y,{height:T.height,top:T.top}),y}),n.words||kt(o),t.replaceChildren(o)),e.absolute&&(t.style.width="".concat(t.style.width||v,"px"),t.style.height="".concat(A,"px"),X(s).forEach(function(S){var y=Y(S),T=y.isLine,D=y.top,P=y.left,C=y.width,L=y.height,q=Y(S.parentElement),$=!T&&q.isLine;S.style.top="".concat($?D-q.top:D,"px"),S.style.left=T?"".concat(h.left,"px"):"".concat(P-($?h.left:0),"px"),S.style.height="".concat(L,"px"),S.style.width=T?"".concat(h.width,"px"):"".concat(C,"px"),S.style.position="absolute"})),E&&(x?E.insertBefore(t,x):E.appendChild(t)),b}var z=F(ft,{}),Mt=function(){At(t,null,[{key:"clearData",value:function(){se()}},{key:"setDefaults",value:function(r){return z=F(z,Q(r)),ft}},{key:"revert",value:function(r){Et(r).forEach(function(n){var i=Y(n),s=i.isSplit,c=i.html,l=i.cssWidth,u=i.cssHeight;s&&(n.innerHTML=c,n.style.width=l||"",n.style.height=u||"",St(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return j}},{key:"defaults",get:function(){return z},set:function(r){z=F(z,Q(r))}}]);function t(e,r){Xt(this,t),this.isSplit=!1,this.settings=F(z,Q(r)),this.elements=Et(e),this.split()}return At(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(c){H(c,"html",c.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=F(this.settings,Q(r)));var s=lt(this.settings.types);s.none||(this.elements.forEach(function(c){H(c,"isRoot",!0);var l=Dt(c,n.settings),u=l.words,A=l.chars;n.words=[].concat(M(n.words),M(u)),n.chars=[].concat(M(n.chars),M(A))}),this.elements.forEach(function(c){if(s.lines||n.settings.absolute){var l=xe(c,n.settings,i);n.lines=[].concat(M(n.lines),M(l))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),ae())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var p=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},w=function(t,e,r){let n=t.hasAttribute(e),i=p(r,t.getAttribute(e));if(n)return i},rt=function(t,e="lines, words"){if(t)return typeSplit=new Mt(t,{types:e}),typeSplit},G=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:i,isDesktop:s,reduceMotion:c}=r.conditions;if(n===void 0||i===void 0||s===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let l=`data-ix-${e}-desktop`,u=`data-ix-${e}-tablet`,A=`data-ix-${e}-mobile`,v=`data-ix-${e}-run`;return runAll=p(!0,t.getAttribute(v)),runMobile=p(!0,t.getAttribute(A)),runTablet=p(!0,t.getAttribute(u)),runDesktop=p(!0,t.getAttribute(l)),!(runAll===!1||runMobile===!1&&n||runTablet===!1&&i||runDesktop===!1&&s)},V=function(t){let e=t,r={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return t==="left"&&(e=r.left),t==="right"&&(e=r.right),t==="top"&&(e=r.top),t==="bottom"&&(e=r.bottom),t==="full"&&(e=r.full),e};var Pt=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n='[data-ix-hoveractive="item"]',i='[data-ix-hoveractive="target"]',s="data-ix-hoveractive-id",c="data-ix-hoveractive-class",l="data-ix-hoveractive-keep-active",u="is-active",A=function(h){let b=[...h.querySelectorAll(n)],E=p(u,h.getAttribute(c)),x=p(!1,h.getAttribute(l));function o(g,O=!0){let _=!0,I=g.getAttribute(s),S=h.querySelector(`${i}[${s}="${I}"]`);(!I||!S)&&(_=!1),O?(g.classList.add(E),_&&S.classList.add(E)):(g.classList.remove(E),_&&S.classList.remove(E))}b.forEach(g=>{g.addEventListener("mouseover",function(O){b.forEach(_=>{_===g?o(g,!0):o(_,!1)})}),g.addEventListener("mouseleave",function(O){x||o(g,!1)})})},v=[...document.querySelectorAll(r)];if(v.length>=0)v.forEach(h=>{G(h,e,t)!==!1&&A(h)});else{let h=document.querySelector("body");A(h)}};var Bt=function(t){let e="load",r="data-ix-load",n="heading",i="item",s="image",c="stagger",l="data-ix-load-position",u="<0.2",A=gsap.utils.toArray(`[${r}]`);if(A.length===0)return;let v=gsap.timeline({paused:!0,defaults:{ease:"power1.out",duration:.8}}),h=function(o){o.classList.contains("w-richtext")&&(o.style.opacity="1",o=o.firstChild);let g=rt(o);if(!g)return;let O=p("<",o.getAttribute(l));v.set(o,{opacity:1}),v.fromTo(g.words,{opacity:0,y:"50%",rotateX:45},{opacity:1,y:"0%",rotateX:0,stagger:{each:.1,from:"left"}},O)},b=function(o){let g=p(u,o.getAttribute(l));v.fromTo(o,{opacity:0,scale:.7},{opacity:1,scale:1},g)},E=function(o){let g=p(u,o.getAttribute(l));v.fromTo(o,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"},g)},x=function(o){if(!o)return;let g=gsap.utils.toArray(o.children);g.length!==0&&g.forEach((O,_)=>{_===0&&(o.style.opacity=1),E(O)})};return A.forEach(o=>{if(!o||G(o,e,t)===!1)return;let O=o.getAttribute(r);O===n&&h(o),O===s&&b(o),O===i&&E(o),O===c&&x(o)}),v.play(0),v};var Wt=function(t){let e="marquee",r='[data-ix-marquee="wrap"]',n='[data-ix-marquee="list"]',i="data-ix-marquee-reverse",s="data-ix-marquee-duration",c="data-ix-marquee-duration-dynamic",l="data-ix-marquee-duration-per-item",u="data-ix-marquee-hover",A="decelerate",v="decelerate",h="pause",x=document.querySelectorAll(r);x.length!==0&&x.forEach(o=>{if(G(o,e,t)===!1)return;let O=[...o.querySelectorAll(n)],_=p(!1,o.getAttribute(i)),I=p(30,o.getAttribute(s)),S=p(!1,o.getAttribute(c)),y=p(10,o.getAttribute(l)),T=O[0].childElementCount;T===1&&(T=O[0].firstElementChild.childElementCount),S&&(I=T*y);let D=p("none",o.getAttribute(u)),P=1;_&&(P=-1);let C=gsap.timeline({repeat:-1,defaults:{ease:"none"}});C.fromTo(O,{xPercent:0},{xPercent:-100*P,duration:I}),D===A&&(o.addEventListener("mouseenter",L=>{C.timeScale(2)}),o.addEventListener("mouseleave",L=>{C.timeScale(1)})),D===v&&(o.addEventListener("mouseenter",L=>{C.timeScale(.5)}),o.addEventListener("mouseleave",L=>{C.timeScale(1)})),D===h&&(o.addEventListener("mouseenter",L=>{C.pause()}),o.addEventListener("mouseleave",L=>{C.play()}))})};var jt=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",i="item",s="container",c="stagger",l="rich-text",u="image-wrap",A="image",v="line",h="data-ix-scrollin-toggle-actions",b="data-ix-scrollin-scrub",E="data-ix-scrollin-start",x="data-ix-scrollin-end",o="data-ix-scrollin-direction",g="data-ix-scrollin-stagger",S="power1.out",y=function(a){let f={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return f.toggleActions=p(f.toggleActions,a.getAttribute(h)),f.scrub=p(f.scrub,a.getAttribute(b)),f.start=p(f.start,a.getAttribute(E)),f.end=p(f.end,a.getAttribute(x)),gsap.timeline({defaults:{duration:.6,ease:S},scrollTrigger:{trigger:a,start:f.start,end:f.end,toggleActions:f.toggleActions,scrub:f.scrub}})},T=function(a,f,d={}){let k={opacity:0,y:"2rem"},U={opacity:1,y:"0rem"};return d.stagger&&(U.stagger={each:d.stagger,from:"start"}),d.stagger==="small"&&(U.stagger={each:.1,from:"start"}),d.stagger==="large"&&(U.stagger={each:.3,from:"start"}),f.fromTo(a,k,U)},D=function(a){a.classList.contains("w-richtext")&&(a=a.firstChild);let f=rt(a);if(!f)return;let d=y(a),k=T(f.words,d,{stagger:"small",skew:"large"});d.eventCallback("onComplete",()=>{f.revert()})},P=function(a){if(a)if(a.classList.contains("w-richtext")){let f=gsap.utils.toArray(a.children);if(f.length===0)return;f.forEach(d=>{let k=y(d),U=T(d,k)})}else{let f=y(a),d=T(a,f)}},C=function(a){if(!a)return;let f=a.firstChild,d=y(a);d.fromTo(f,{scale:1.2},{scale:1,duration:1}),d.fromTo(a,{scale:.9},{scale:1,duration:1},"<")},L=function(a){if(!a)return;let f=p("left",a.getAttribute(o)),d=V(f),k=V("full");y(a).fromTo(a,{clipPath:d},{clipPath:k})},q=function(a){if(!a)return;let f=gsap.utils.toArray(a.children);f.length!==0&&f.forEach(d=>{let k=y(d),U=T(d,k)})},$=function(a){if(!a)return;let f=p(.3,a.getAttribute(g)),d=gsap.utils.toArray(a.children);if(d.length===0)return;let k=y(a),U=T(d,k,{stagger:f})},Z=function(a){if(!a)return;let f=gsap.utils.toArray(a.children);f.length!==0&&f.forEach(d=>{let k=d.tagName;["H1","H2","H3","H4","H5","H6"].includes(k)&&D(d),k==="FIGURE"?C(d):P(d)})};gsap.utils.toArray(`[${r}]`).forEach(a=>{if(!a||G(a,e,t)===!1)return;let d=a.getAttribute(r);d===n&&D(a),d===i&&P(a),d===A&&C(a),d===v&&L(a),d===s&&q(a),d===c&&$(a),d===l&&Z(a)})};var Ut=function(t,e,r){let n=".swiper",i=".swiper-next",s=".swiper-prev",c=".swiper-bullet-wrapper",l=".swiper-scrollbar",u=".swiper-scrollbar-drag",A="is-active",v="is-disabled",h=[];return t.forEach(function(b){if(!b)return;let E=b.querySelector(n);if(!E)return;let x={speed:800,spaceBetween:16,loop:!1,centeredSlides:!1,allowTouchMove:!0,slideActiveClass:A,slideDuplicateActiveClass:A},o={};if(r.navigation===!0){let _=b.querySelector(i),I=b.querySelector(s);o={...o,...{navigation:{nextEl:_,prevEl:I,disabledClass:v}}}}if(r.pagination===!0){let I={pagination:{type:"bullets",el:b.querySelector(c),bulletActiveClass:A,bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0}};o={...o,...I}}if(r.scrollbar===!0){let I={scrollbar:{el:b.querySelector(l),dragClass:u,draggable:!0,dragSize:"auto",snapOnRelease:!1}};o={...o,...I}}r.autoplay===!0&&(o={...o,...{autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!1,stopOnLastSlide:!0}}});let g={...x,...o,...e},O=new Swiper(E,g);h.push(O)}),h};var Ht=function(t){let e="scrolling",r='[data-ix-scrolling="wrap"]',n='[data-ix-scrolling="trigger"]',i='[data-ix-scrolling="layer"]',s="data-ix-scrolling-start",c="data-ix-scrolling-end",l="data-ix-scrolling-start-tablet",u="data-ix-scrolling-end-tablet",A="data-ix-scrolling-start-mobile",v="data-ix-scrolling-end-mobile",h="data-ix-scrolling-scrub",b="data-ix-scrolling-position",E="data-ix-scrolling-ease",x="data-ix-scrolling-x-start",o="data-ix-scrolling-x-end",g="data-ix-scrolling-y-start",O="data-ix-scrolling-y-end",_="data-ix-scrolling-scale-start",I="data-ix-scrolling-scale-end",S="data-ix-scrolling-width-start",y="data-ix-scrolling-width-end",T="data-ix-scrolling-height-start",D="data-ix-scrolling-height-end",P="data-ix-scrolling-rotate-x-start",C="data-ix-scrolling-rotate-x-end",L="data-ix-scrolling-rotate-y-start",q="data-ix-scrolling-rotate-y-end",$="data-ix-scrolling-rotate-z-start",Z="data-ix-scrolling-rotate-z-end",J="data-ix-scrolling-opacity-start",a="data-ix-scrolling-opacity-end",f="data-ix-scrolling-radius-start",d="data-ix-scrolling-radius-end",k="data-ix-scrolling-clip-start",U="data-ix-scrolling-clip-end";gsap.utils.toArray(r).forEach(N=>{let dt=N.querySelectorAll(i);if(!N||dt.length===0)return;let nt=N.querySelector(n);if(nt||(nt=N),G(N,e,t)===!1)return;let{isMobile:pt,isTablet:ht,isDesktop:_e,reduceMotion:Ce}=t.conditions,R={scrub:.5,start:"top bottom",end:"bottom top",ease:"none"};R.start=p(R.start,N.getAttribute(s)),R.end=p(R.end,N.getAttribute(c)),R.scrub=p(R.scrub,N.getAttribute(h)),R.ease=p(R.ease,N.getAttribute(E)),ht&&N.getAttribute(l)&&(R.start=p(R.start,N.getAttribute(l))),ht&&N.getAttribute(u)&&(R.start=p(R.start,N.getAttribute(u))),pt&&N.getAttribute(A)&&(R.start=p(R.start,N.getAttribute(A))),pt&&N.getAttribute(v)&&(R.start=p(R.start,N.getAttribute(v)));let qt=gsap.timeline({scrollTrigger:{trigger:nt,start:R.start,end:R.end,scrub:R.scrub,markers:!1},defaults:{duration:1,ease:R.ease}});dt.forEach(m=>{if(!m)return;let W={},B={};W.x=w(m,x,"0%"),B.x=w(m,o,"0%"),W.y=w(m,g,"0%"),B.y=w(m,O,"0%"),W.scale=w(m,_,1),B.scale=w(m,I,1),W.width=w(m,S,"0%"),B.width=w(m,y,"0%"),W.height=w(m,T,"0%"),B.height=w(m,D,"0%"),W.rotateX=w(m,P,0),B.rotateX=w(m,C,0),W.rotateY=w(m,L,0),B.rotateY=w(m,q,0),W.rotateZ=w(m,$,0),B.rotateZ=w(m,Z,0),W.opacity=w(m,J,0),B.opacity=w(m,a,0),W.borderRadius=w(m,f,"string"),B.borderRadius=w(m,d,"string");let $t=w(m,k,"left"),Ft=w(m,U,"full");W.clipPath=V($t),B.clipPath=V(Ft);let Yt=p("<",m.getAttribute(b));B.ease=p(m,E,"none");let Re=qt.fromTo(m,W,B,Yt)})})};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let t=function(){let i=[...document.querySelectorAll(".results-slider_component")],l=Ut(i,{loop:!0},{navigation:!1,pagination:!1,scrollbar:!1,autoplay:{delay:5e3}})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},i=>{let{isMobile:s,isTablet:c,isDesktop:l,reduceMotion:u}=i.conditions;Pt(i),Wt(i),Bt(i),t(),u||(jt(i),Ht(i))})})(),function(){let n="[data-ix-reset]",i="data-ix-reset-time";document.querySelectorAll(n).forEach(function(c){c.addEventListener("click",function(l){if(ScrollTrigger.refresh(),c.hasAttribute(i)){let u=p(1e3,c.getAttribute(i));setTimeout(()=>{ScrollTrigger.refresh()},u)}})})}()});})();
