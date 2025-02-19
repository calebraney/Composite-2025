(()=>{var ie=Object.defineProperty;var re=(e,t,i)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var X=(e,t,i)=>re(e,typeof t!="symbol"?t+"":t,i);(function(){function e(){for(var r=arguments.length,s=0;s<r;s++){var o=s<0||arguments.length<=s?void 0:arguments[s];o.nodeType===1||o.nodeType===11?this.appendChild(o):this.appendChild(document.createTextNode(String(o)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function i(){for(var r=this.parentNode,s=arguments.length,o=new Array(s),h=0;h<s;h++)o[h]=arguments[h];var d=o.length;if(r)for(d||r.removeChild(this);d--;){var l=o[d];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),d?r.insertBefore(this.previousSibling,l):r.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=e,DocumentFragment.prototype.append=e),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function At(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wt(e,t,i){return t&&At(e.prototype,t),i&&At(e,i),e}function ne(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _t(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,r)}return i}function Ot(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(i),!0).forEach(function(r){ne(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_t(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function xt(e,t){return ae(e)||ce(e,t)||Ct(e,t)||he()}function P(e){return oe(e)||le(e)||Ct(e)||ue()}function oe(e){if(Array.isArray(e))return ut(e)}function ae(e){if(Array.isArray(e))return e}function le(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function ce(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],r=!0,s=!1,o=void 0;try{for(var h=e[Symbol.iterator](),d;!(r=(d=h.next()).done)&&(i.push(d.value),!(t&&i.length===t));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&h.return!=null&&h.return()}finally{if(s)throw o}}return i}}function Ct(e,t){if(e){if(typeof e=="string")return ut(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ut(e,t)}}function ut(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){return Object.getOwnPropertyNames(Object(e)).reduce(function(i,r){var s=Object.getOwnPropertyDescriptor(Object(e),r),o=Object.getOwnPropertyDescriptor(Object(t),r);return Object.defineProperty(i,r,o||s)},{})}function it(e){return typeof e=="string"}function pt(e){return Array.isArray(e)}function rt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Y(e),i;return t.types!==void 0?i=t.types:t.split!==void 0&&(i=t.split),i!==void 0&&(t.types=(it(i)||pt(i)?String(i):"").split(",").map(function(r){return String(r).trim()}).filter(function(r){return/((line)|(word)|(char))/i.test(r)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(e.position)),t}function gt(e){var t=it(e)||pt(e)?String(e):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function nt(e){return e!==null&&typeof e=="object"}function de(e){return nt(e)&&/^(1|3|11)$/.test(e.nodeType)}function fe(e){return typeof e=="number"&&e>-1&&e%1===0}function pe(e){return nt(e)&&fe(e.length)}function Z(e){return pt(e)?e:e==null?[]:pe(e)?Array.prototype.slice.call(e):[e]}function Lt(e){var t=e;return it(e)&&(/^(#[a-z]\w+)$/.test(e.trim())?t=document.getElementById(e.trim().slice(1)):t=document.querySelectorAll(e)),Z(t).reduce(function(i,r){return[].concat(P(i),P(Z(r).filter(de)))},[])}var ge=Object.entries,st="_splittype",U={},me=0;function G(e,t,i){if(!nt(e))return console.warn("[data.set] owner is not an object"),null;var r=e[st]||(e[st]=++me),s=U[r]||(U[r]={});return i===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(U[r]=Ot(Ot({},s),t)):t!==void 0&&(s[t]=i),i}function V(e,t){var i=nt(e)?e[st]:null,r=i&&U[i]||{};return t===void 0?r:r[t]}function Rt(e){var t=e&&e[st];t&&(delete e[t],delete U[t])}function ve(){Object.keys(U).forEach(function(e){delete U[e]})}function Se(){ge(U).forEach(function(e){var t=xt(e,2),i=t[0],r=t[1],s=r.isRoot,o=r.isSplit;(!s||!o)&&(U[i]=null,delete U[i])})}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",i=e?String(e):"";return i.trim().replace(/\s+/g," ").split(t)}var mt="\\ud800-\\udfff",Nt="\\u0300-\\u036f\\ufe20-\\ufe23",Mt="\\u20d0-\\u20f0",It="\\ufe0e\\ufe0f",Ee="[".concat(mt,"]"),ht="[".concat(Nt).concat(Mt,"]"),dt="\\ud83c[\\udffb-\\udfff]",Te="(?:".concat(ht,"|").concat(dt,")"),kt="[^".concat(mt,"]"),Dt="(?:\\ud83c[\\udde6-\\uddff]){2}",Wt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="\\u200d",zt="".concat(Te,"?"),Bt="[".concat(It,"]?"),be="(?:"+Pt+"(?:"+[kt,Dt,Wt].join("|")+")"+Bt+zt+")*",Ae=Bt+zt+be,we="(?:".concat(["".concat(kt).concat(ht,"?"),ht,Dt,Wt,Ee].join("|"),`
)`),_e=RegExp("".concat(dt,"(?=").concat(dt,")|").concat(we).concat(Ae),"g"),Oe=[Pt,mt,Nt,Mt,It],Le=RegExp("[".concat(Oe.join(""),"]"));function xe(e){return e.split("")}function Ht(e){return Le.test(e)}function Ce(e){return e.match(_e)||[]}function Re(e){return Ht(e)?Ce(e):xe(e)}function Ne(e){return e==null?"":String(e)}function Me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return e=Ne(e),e&&it(e)&&!t&&Ht(e)?Re(e):e.split(t)}function ft(e,t){var i=document.createElement(e);return t&&Object.keys(t).forEach(function(r){var s=t[r],o=it(s)?s.trim():s;o===null||o===""||(r==="children"?i.append.apply(i,P(Z(o))):i.setAttribute(r,o))}),i}var vt={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Ie(e,t){t=Y(vt,t);var i=gt(t.types),r=t.tagName,s=e.nodeValue,o=document.createDocumentFragment(),h=[],d=[];return/^\s/.test(s)&&o.append(" "),h=ye(s).reduce(function(l,n,g,u){var p,T;return i.chars&&(T=Me(n).map(function(L){var v=ft(r,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:L});return G(v,"isChar",!0),d=[].concat(P(d),[v]),v})),i.words||i.lines?(p=ft(r,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(i.words&&t.absolute?"position: relative;":""),children:i.chars?T:n}),G(p,{isWord:!0,isWordStart:!0,isWordEnd:!0}),o.appendChild(p)):T.forEach(function(L){o.appendChild(L)}),g<u.length-1&&o.append(" "),i.words?l.concat(p):l},[]),/\s$/.test(s)&&o.append(" "),e.replaceWith(o),{words:h,chars:d}}function qt(e,t){var i=e.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(i))return r;if(i===3&&/\S/.test(e.nodeValue))return Ie(e,t);var s=Z(e.childNodes);if(s.length&&(G(e,"isSplit",!0),!V(e).isRoot)){e.style.display="inline-block",e.style.position="relative";var o=e.nextSibling,h=e.previousSibling,d=e.textContent||"",l=o?o.textContent:" ",n=h?h.textContent:" ";G(e,{isWordEnd:/\s$/.test(d)||/^\s/.test(l),isWordStart:/^\s/.test(d)||/\s$/.test(n)})}return s.reduce(function(g,u){var p=qt(u,t),T=p.words,L=p.chars;return{words:[].concat(P(g.words),P(T)),chars:[].concat(P(g.chars),P(L))}},r)}function ke(e,t,i,r){if(!i.absolute)return{top:t?e.offsetTop:null};var s=e.offsetParent,o=xt(r,2),h=o[0],d=o[1],l=0,n=0;if(s&&s!==document.body){var g=s.getBoundingClientRect();l=g.x+h,n=g.y+d}var u=e.getBoundingClientRect(),p=u.width,T=u.height,L=u.x,v=u.y,w=v+d-n,N=L+h-l;return{width:p,height:T,top:w,left:N}}function Ut(e){V(e).isWord?(Rt(e),e.replaceWith.apply(e,P(e.childNodes))):Z(e.children).forEach(function(t){return Ut(t)})}var De=function(){return document.createDocumentFragment()};function We(e,t,i){var r=gt(t.types),s=t.tagName,o=e.getElementsByTagName("*"),h=[],d=[],l=null,n,g,u,p=[],T=e.parentElement,L=e.nextElementSibling,v=De(),w=window.getComputedStyle(e),N=w.textAlign,M=parseFloat(w.fontSize),_=M*.2;return t.absolute&&(u={left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth},g=e.offsetWidth,n=e.offsetHeight,G(e,{cssWidth:e.style.width,cssHeight:e.style.height})),Z(o).forEach(function(b){var a=b.parentElement===e,f=ke(b,a,t,i),y=f.width,D=f.height,x=f.top,C=f.left;/^br$/i.test(b.nodeName)||(r.lines&&a&&((l===null||x-l>=_)&&(l=x,h.push(d=[])),d.push(b)),t.absolute&&G(b,{top:x,left:C,width:y,height:D}))}),T&&T.removeChild(e),r.lines&&(p=h.map(function(b){var a=ft(s,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(N,"; width: 100%;")});G(a,"isLine",!0);var f={height:0,top:1e4};return v.appendChild(a),b.forEach(function(y,D,x){var C=V(y),W=C.isWordEnd,j=C.top,$=C.height,z=x[D+1];f.height=Math.max(f.height,$),f.top=Math.min(f.top,j),a.appendChild(y),W&&V(z).isWordStart&&a.append(" ")}),t.absolute&&G(a,{height:f.height,top:f.top}),a}),r.words||Ut(v),e.replaceChildren(v)),t.absolute&&(e.style.width="".concat(e.style.width||g,"px"),e.style.height="".concat(n,"px"),Z(o).forEach(function(b){var a=V(b),f=a.isLine,y=a.top,D=a.left,x=a.width,C=a.height,W=V(b.parentElement),j=!f&&W.isLine;b.style.top="".concat(j?y-W.top:y,"px"),b.style.left=f?"".concat(u.left,"px"):"".concat(D-(j?u.left:0),"px"),b.style.height="".concat(C,"px"),b.style.width=f?"".concat(u.width,"px"):"".concat(x,"px"),b.style.position="absolute"})),T&&(L?T.insertBefore(e,L):T.appendChild(e)),p}var J=Y(vt,{}),jt=function(){wt(e,null,[{key:"clearData",value:function(){ve()}},{key:"setDefaults",value:function(i){return J=Y(J,rt(i)),vt}},{key:"revert",value:function(i){Lt(i).forEach(function(r){var s=V(r),o=s.isSplit,h=s.html,d=s.cssWidth,l=s.cssHeight;o&&(r.innerHTML=h,r.style.width=d||"",r.style.height=l||"",Rt(r))})}},{key:"create",value:function(i,r){return new e(i,r)}},{key:"data",get:function(){return U}},{key:"defaults",get:function(){return J},set:function(i){J=Y(J,rt(i))}}]);function e(t,i){se(this,e),this.isSplit=!1,this.settings=Y(J,rt(i)),this.elements=Lt(t),this.split()}return wt(e,[{key:"split",value:function(i){var r=this;this.revert(),this.elements.forEach(function(h){G(h,"html",h.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var s=[window.pageXOffset,window.pageYOffset];i!==void 0&&(this.settings=Y(this.settings,rt(i)));var o=gt(this.settings.types);o.none||(this.elements.forEach(function(h){G(h,"isRoot",!0);var d=qt(h,r.settings),l=d.words,n=d.chars;r.words=[].concat(P(r.words),P(l)),r.chars=[].concat(P(r.chars),P(n))}),this.elements.forEach(function(h){if(o.lines||r.settings.absolute){var d=We(h,r.settings,s);r.lines=[].concat(P(r.lines),P(d))}}),this.isSplit=!0,window.scrollTo(s[0],s[1]),Se())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),e.revert(this.elements)}}]),e}();var E=function(e,t){let i=typeof e;return typeof t!="string"||t.trim()===""?e:t==="true"&&i==="boolean"?!0:t==="false"&&i==="boolean"?!1:isNaN(t)&&i==="string"?t:!isNaN(t)&&i==="number"?+t:e},R=function(e,t,i){let r=e.hasAttribute(t),s=E(i,e.getAttribute(t));if(r)return s},Pe=function(e,t="lines, words"){if(e)return typeSplit=new jt(e,{types:t}),typeSplit},Q=function(e,t){let i,r=function(){i=Pe(e,"lines"),i&&i.lines.forEach(o=>{let h=document.createElement("div");h.classList.add("line-wrap"),o.parentNode.replaceChild(h,o),h.appendChild(o)})};r();let s=window.innerWidth;return window.addEventListener("resize",function(){window.innerWidth!==s&&(s=window.innerWidth,i.revert(),setTimeout(()=>{r()},200))}),i.lines},q=function(e,t,i){if(!e||!t||!i){console.error(`GSAP checkBreakpoints Error in ${t}`);return}let{isMobile:r,isTablet:s,isDesktop:o,reduceMotion:h}=i.conditions;if(r===void 0||s===void 0||o===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let d=`data-ix-${t}-desktop`,l=`data-ix-${t}-tablet`,n=`data-ix-${t}-mobile`,g=`data-ix-${t}-run`;return runAll=E(!0,e.getAttribute(g)),runMobile=E(!0,e.getAttribute(n)),runTablet=E(!0,e.getAttribute(l)),runDesktop=E(!0,e.getAttribute(d)),!(runAll===!1||runMobile===!1&&r||runTablet===!1&&s||runDesktop===!1&&o)},tt=function(e){let t=e,i={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return e==="left"&&(t=i.left),e==="right"&&(t=i.right),e==="top"&&(t=i.top),e==="bottom"&&(t=i.bottom),e==="full"&&(t=i.full),t};var Xt=function(e){let t="hoveractive",i='[data-ix-hoveractive="wrap"]',r='[data-ix-hoveractive="item"]',s='[data-ix-hoveractive="target"]',o="data-ix-hoveractive-id",h="data-ix-hoveractive-class",d="data-ix-hoveractive-keep-active",l="is-active",n=function(u){let p=[...u.querySelectorAll(r)],T=E(l,u.getAttribute(h)),L=E(!1,u.getAttribute(d));function v(w,N=!0){let M=!0,_=w.getAttribute(o),b=u.querySelector(`${s}[${o}="${_}"]`);(!_||!b)&&(M=!1),N?(w.classList.add(T),M&&b.classList.add(T)):(w.classList.remove(T),M&&b.classList.remove(T))}p.forEach(w=>{w.addEventListener("mouseover",function(N){p.forEach(M=>{M===w?v(w,!0):v(M,!1)})}),w.addEventListener("mouseleave",function(N){L||v(w,!1)})})},g=[...document.querySelectorAll(i)];if(g.length>=0)g.forEach(u=>{q(u,t,e)!==!1&&n(u)});else{let u=document.querySelector("body");n(u)}};var Gt=function(e){let t="load",i="data-ix-load",r="heading",s="item",o="card",h="text",d="image",l="stagger",n="data-ix-load-position",g="<0.2",u=[...document.querySelectorAll(`[${i}]`)];if(u.length===0)return;let p=gsap.timeline({paused:!0,defaults:{ease:"circ.out",duration:.6}}),T=function(a){let f=E(0,a.getAttribute(n));p.fromTo(a,{opacity:0,y:"6rem",rotateX:-5,scale:.9},{opacity:1,y:"0rem",rotateX:0,scale:1},f)},L=function(a){a.classList.contains("w-richtext")&&(a.style.opacity="1",a=a.firstChild);let f=Q(a);if(!f)return;let y=E("<.1",a.getAttribute(n));p.set(a,{opacity:1},y),p.fromTo(f,{opacity:0,y:"1em",rotateX:-80,scale:.85},{opacity:1,y:"0em",rotateX:0,scale:1,duration:.8,stagger:{each:.1,from:"left"}},y)},v=function(a){a.classList.contains("w-richtext")&&(a.style.opacity="1",a=a.firstChild);let f=Q(a);if(!f)return;let y=E(g,a.getAttribute(n));p.set(a,{opacity:1},y),p.fromTo(f,{opacity:0,y:"1em",rotateX:-45},{opacity:1,y:"0em",rotateX:0,stagger:{each:.1,from:"left"}},y)},w=function(a,f=null){let y=E(g,a.getAttribute(n));f!==null&&(y=f),p.fromTo(a,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"},y)},N=function(a,f=null){let y=E(g,a.getAttribute(n));f!==null&&(y=f),p.fromTo(a,{opacity:0,y:"2rem",rotateX:-45,scale:.9},{opacity:1,y:"0rem",rotateX:0,scale:1},y)},M=function(a){if(!a)return;let f=gsap.utils.toArray(a.children);if(f.length===0)return;let y=E("<0.1",a.getAttribute(n));f.forEach((D,x)=>{x===0&&(a.style.opacity=1),w(D,y)})};return[...document.querySelectorAll(`[${i}="${d}"]`)].forEach(a=>{!a||q(a,t,e)===!1||T(a)}),[...document.querySelectorAll(`[${i}="${r}"]`)].forEach(a=>{!a||q(a,t,e)===!1||L(a)}),u.forEach(a=>{if(!a||q(a,t,e)===!1)return;let y=a.getAttribute(i);y===h&&v(a),y===s&&w(a),y===o&&N(a),y===l&&M(a)}),p.play(0),p};var $t=function(e){let t="marquee",i='[data-ix-marquee="wrap"]',r='[data-ix-marquee="list"]',s="data-ix-marquee-reverse",o="data-ix-marquee-duration",h="data-ix-marquee-duration-dynamic",d="data-ix-marquee-duration-per-item",l="data-ix-marquee-hover",n="decelerate",g="decelerate",u="pause",L=document.querySelectorAll(i);L.length!==0&&L.forEach(v=>{if(q(v,t,e)===!1)return;let N=[...v.querySelectorAll(r)],M=E(!1,v.getAttribute(s)),_=E(30,v.getAttribute(o)),b=E(!1,v.getAttribute(h)),a=E(10,v.getAttribute(d)),f=N[0].childElementCount;f===1&&(f=N[0].firstElementChild.childElementCount),b&&(_=f*a);let y=E("none",v.getAttribute(l)),D=1;M&&(D=-1);let x=gsap.timeline({repeat:-1,defaults:{ease:"none"}});x.fromTo(N,{xPercent:0},{xPercent:-100*D,duration:_}),y===n&&(v.addEventListener("mouseenter",C=>{x.timeScale(2)}),v.addEventListener("mouseleave",C=>{x.timeScale(1)})),y===g&&(v.addEventListener("mouseenter",C=>{x.timeScale(.5)}),v.addEventListener("mouseleave",C=>{x.timeScale(1)})),y===u&&(v.addEventListener("mouseenter",C=>{x.pause()}),v.addEventListener("mouseleave",C=>{x.play()}))})};var Ft=function(e){let t="scrollin",i="data-ix-scrollin",r="heading",s="text",o="item",h="container",d="stagger",l="rich-text",n="image-wrap",g="image",u="line",p="data-ix-scrollin-toggle-actions",T="data-ix-scrollin-scrub",L="data-ix-scrollin-start",v="data-ix-scrollin-end",w="data-ix-scrollin-direction",N="data-ix-scrollin-stagger",a="circ.out",f=function(c){let S={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return S.toggleActions=E(S.toggleActions,c.getAttribute(p)),S.scrub=E(S.scrub,c.getAttribute(T)),S.start=E(S.start,c.getAttribute(L)),S.end=E(S.end,c.getAttribute(v)),gsap.timeline({defaults:{duration:.6,ease:a},scrollTrigger:{trigger:c,start:S.start,end:S.end,toggleActions:S.toggleActions,scrub:S.scrub}})},y=function(c,S,m={}){let k={opacity:0,y:"1em"},A={opacity:1,y:"0em"};return m.rotate&&(k.rotateX=m.rotate,A.rotateX=0),m.rotate==="large"&&(k.rotateX=-80,k.scale=.95,A.rotateX=0,A.scale=1),m.rotate==="small"&&(k.rotateX=-5,A.rotateX=0),m.stagger&&(A.stagger={each:m.stagger,from:"start"}),m.stagger==="small"&&(A.stagger={each:.1,from:"start"}),m.stagger==="large"&&(A.stagger={each:.2,from:"start"}),S.fromTo(c,k,A)},D=function(c){c.classList.contains("w-richtext")&&(c=c.firstChild);let S=Q(c);if(!S)return;let m=f(c),k=y(S,m,{stagger:"large",rotate:"large"});m.eventCallback("onComplete",()=>{})},x=function(c){c.classList.contains("w-richtext")&&(c=c.firstChild);let S=Q(c);if(!S)return;let m=f(c),k=y(S,m,{stagger:"small",rotate:"small"});m.eventCallback("onComplete",()=>{})},C=function(c){if(c)if(c.classList.contains("w-richtext")){let S=gsap.utils.toArray(c.children);if(S.length===0)return;S.forEach(m=>{let k=f(m),A=y(m,k,{rotate:"small"})})}else{let S=f(c),m=y(c,S,{rotate:"small"})}},W=function(c){if(!c)return;let S=c.firstChild,m=f(c);m.fromTo(S,{scale:1.2},{scale:1,duration:1}),m.fromTo(c,{scale:.9},{scale:1,duration:1},"<")},j=function(c){if(!c)return;let S=E("left",c.getAttribute(w)),m=tt(S),k=tt("full");f(c).fromTo(c,{clipPath:m},{clipPath:k})},$=function(c){if(!c)return;let S=gsap.utils.toArray(c.children);S.length!==0&&S.forEach(m=>{let k=f(m),A=y(m,k,{rotate:"small"})})},z=function(c){if(!c)return;let S=E(.2,c.getAttribute(N)),m=gsap.utils.toArray(c.children);if(m.length===0)return;let k=f(c),A=y(m,k,{stagger:S,rotate:"small"})},F=function(c){if(!c)return;let S=gsap.utils.toArray(c.children);S.length!==0&&S.forEach(m=>{let k=m.tagName;["H1","H2","H3","H4","H5","H6"].includes(k)&&D(m),k==="FIGURE"?W(m):C(m)})};[...document.querySelectorAll(`[${i}]`)].forEach(c=>{if(!c||q(c,t,e)===!1)return;let m=c.getAttribute(i);m===r&&D(c),m===s&&x(c),m===o&&C(c),m===g&&W(c),m===u&&j(c),m===h&&$(c),m===d&&z(c),m===l&&F(c)})};var et=function(e,t,i){let r=".swiper",s=".swiper-next",o=".swiper-prev",h=".swiper-bullet-wrapper",d=".swiper-scrollbar",l=".swiper-scrollbar-drag",n="is-active",g="is-disabled",u=[];return e.forEach(function(p){if(!p)return;let T=p.querySelector(r);if(!T)return;let L={speed:800,spaceBetween:16,loop:!1,centeredSlides:!1,allowTouchMove:!0,slideActiveClass:n,slideDuplicateActiveClass:n},v={};if(i.navigation===!0){let M=p.querySelector(s),_=p.querySelector(o);v={...v,...{navigation:{nextEl:M,prevEl:_,disabledClass:g}}}}if(i.pagination===!0){let _={pagination:{type:"bullets",el:p.querySelector(h),bulletActiveClass:n,bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0}};v={...v,..._}}if(i.scrollbar===!0){let _={scrollbar:{el:p.querySelector(d),dragClass:l,draggable:!0,dragSize:"auto",snapOnRelease:!1}};v={...v,..._}}i.autoplay===!0&&(v={...v,...{autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,stopOnLastSlide:!0}}});let w={...L,...v,...t},N=new Swiper(T,w);u.push(N)}),u};var Yt=function(e){let t="scrolling",i='[data-ix-scrolling="wrap"]',r='[data-ix-scrolling="trigger"]',s='[data-ix-scrolling="layer"]',o="data-ix-scrolling-start",h="data-ix-scrolling-end",d="data-ix-scrolling-start-tablet",l="data-ix-scrolling-end-tablet",n="data-ix-scrolling-start-mobile",g="data-ix-scrolling-end-mobile",u="data-ix-scrolling-scrub",p="data-ix-scrolling-position",T="data-ix-scrolling-ease",L="data-ix-scrolling-x-start",v="data-ix-scrolling-x-end",w="data-ix-scrolling-y-start",N="data-ix-scrolling-y-end",M="data-ix-scrolling-scale-start",_="data-ix-scrolling-scale-end",b="data-ix-scrolling-width-start",a="data-ix-scrolling-width-end",f="data-ix-scrolling-height-start",y="data-ix-scrolling-height-end",D="data-ix-scrolling-rotate-x-start",x="data-ix-scrolling-rotate-x-end",C="data-ix-scrolling-rotate-y-start",W="data-ix-scrolling-rotate-y-end",j="data-ix-scrolling-rotate-z-start",$="data-ix-scrolling-rotate-z-end",z="data-ix-scrolling-opacity-start",F="data-ix-scrolling-opacity-end",K="data-ix-scrolling-radius-start",c="data-ix-scrolling-radius-end",S="data-ix-scrolling-clip-start",m="data-ix-scrolling-clip-end";gsap.utils.toArray(i).forEach(A=>{let lt=A.querySelectorAll(s);if(!A||lt.length===0)return;let ct=A.querySelector(r);if(ct||(ct=A),q(A,t,e)===!1)return;let{isMobile:Tt,isTablet:bt,isDesktop:Be,reduceMotion:He}=e.conditions,I={scrub:.5,start:"top bottom",end:"bottom top",ease:"none"};I.start=E(I.start,A.getAttribute(o)),I.end=E(I.end,A.getAttribute(h)),I.scrub=E(I.scrub,A.getAttribute(u)),I.ease=E(I.ease,A.getAttribute(T)),bt&&A.getAttribute(d)&&(I.start=E(I.start,A.getAttribute(d))),bt&&A.getAttribute(l)&&(I.start=E(I.start,A.getAttribute(l))),Tt&&A.getAttribute(n)&&(I.start=E(I.start,A.getAttribute(n))),Tt&&A.getAttribute(g)&&(I.start=E(I.start,A.getAttribute(g)));let Jt=gsap.timeline({scrollTrigger:{trigger:ct,start:I.start,end:I.end,scrub:I.scrub,markers:!1},defaults:{duration:1,ease:I.ease}});lt.forEach(O=>{if(!O)return;let H={},B={};H.x=R(O,L,"0%"),B.x=R(O,v,"0%"),H.y=R(O,w,"0%"),B.y=R(O,N,"0%"),H.scale=R(O,M,1),B.scale=R(O,_,1),H.width=R(O,b,"0%"),B.width=R(O,a,"0%"),H.height=R(O,f,"0%"),B.height=R(O,y,"0%"),H.rotateX=R(O,D,0),B.rotateX=R(O,x,0),H.rotateY=R(O,C,0),B.rotateY=R(O,W,0),H.rotateZ=R(O,j,0),B.rotateZ=R(O,$,0),H.opacity=R(O,z,0),B.opacity=R(O,F,0),H.borderRadius=R(O,K,"string"),B.borderRadius=R(O,c,"string");let Qt=R(O,S,"left"),te=R(O,m,"full");H.clipPath=tt(Qt),B.clipPath=tt(te);let ee=E("<",O.getAttribute(p));B.ease=E(O,T,"none");let qe=Jt.fromTo(O,H,B,ee)})})};function Zt(e,t,i){return Math.max(e,Math.min(t,i))}var St=class{advance(t){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(r=this.value,s=this.to,o=60*this.lerp,h=t,function(d,l,n){return(1-n)*d+n*l}(r,s,1-Math.exp(-o*h))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;let d=Zt(0,this.currentTime/this.duration,1);i=d>=1;let l=i?1:this.easing(d);this.value=this.from+(this.to-this.from)*l}var r,s,o,h;this.onUpdate?.(this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,i,{lerp:r=.1,duration:s=1,easing:o=l=>l,onStart:h,onUpdate:d}){this.from=this.value=t,this.to=i,this.lerp=r,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,h?.(),this.onUpdate=d}},yt=class{constructor({wrapper:t,content:i,autoResize:r=!0,debounce:s=250}={}){X(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});X(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});X(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=i,r&&(this.debouncedResize=function(o,h){let d;return function(){let l=arguments,n=this;clearTimeout(d),d=setTimeout(function(){o.apply(n,l)},h)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ot=class{constructor(){this.events={}}emit(t,...i){let r=this.events[t]||[];for(let s=0,o=r.length;s<o;s++)r[s](...i)}on(t,i){return this.events[t]?.push(i)||(this.events[t]=[i]),()=>{this.events[t]=this.events[t]?.filter(r=>i!==r)}}off(t,i){this.events[t]=this.events[t]?.filter(r=>i!==r)}destroy(){this.events={}}},Vt=100/6,Et=class{constructor(t,{wheelMultiplier:i=1,touchMultiplier:r=1}){X(this,"onTouchStart",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});X(this,"onTouchMove",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t,s=-(i-this.touchStart.x)*this.touchMultiplier,o=-(r-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})});X(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});X(this,"onWheel",t=>{let{deltaX:i,deltaY:r,deltaMode:s}=t;i*=s===1?Vt:s===2?this.windowWidth:1,r*=s===1?Vt:s===2?this.windowHeight:1,i*=this.wheelMultiplier,r*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});X(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=i,this.touchMultiplier=r,this.touchStart={x:null,y:null},this.emitter=new ot,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},at=class{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:r=t,eventsTarget:s=r,smoothWheel:o=!0,syncTouch:h=!1,syncTouchLerp:d=.075,touchInertiaMultiplier:l=35,duration:n,easing:g=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:u=!n&&.1,infinite:p=!1,orientation:T="vertical",gestureOrientation:L="vertical",touchMultiplier:v=1,wheelMultiplier:w=1,autoResize:N=!0,__experimental__naiveDimensions:M=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:_,deltaY:b,event:a})=>{if(a.ctrlKey)return;let f=a.type.includes("touch"),y=a.type.includes("wheel");if(this.options.syncTouch&&f&&a.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let D=_===0&&b===0,x=this.options.gestureOrientation==="vertical"&&b===0||this.options.gestureOrientation==="horizontal"&&_===0;if(D||x)return;let C=a.composedPath();if(C=C.slice(0,C.indexOf(this.rootElement)),C.find(z=>{var F,K,c,S,m;return((F=z.hasAttribute)===null||F===void 0?void 0:F.call(z,"data-lenis-prevent"))||f&&((K=z.hasAttribute)===null||K===void 0?void 0:K.call(z,"data-lenis-prevent-touch"))||y&&((c=z.hasAttribute)===null||c===void 0?void 0:c.call(z,"data-lenis-prevent-wheel"))||((S=z.classList)===null||S===void 0?void 0:S.contains("lenis"))&&!(!((m=z.classList)===null||m===void 0)&&m.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void a.preventDefault();if(this.isSmooth=this.options.syncTouch&&f||this.options.smoothWheel&&y,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();a.preventDefault();let W=b;this.options.gestureOrientation==="both"?W=Math.abs(b)>Math.abs(_)?b:_:this.options.gestureOrientation==="horizontal"&&(W=_);let j=f&&this.options.syncTouch,$=f&&a.type==="touchend"&&Math.abs(W)>5;$&&(W=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+W,Object.assign({programmatic:!1},j?{lerp:$?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:r,eventsTarget:s,smoothWheel:o,syncTouch:h,syncTouchLerp:d,touchInertiaMultiplier:l,duration:n,easing:g,lerp:u,infinite:p,gestureOrientation:L,orientation:T,touchMultiplier:v,wheelMultiplier:w,autoResize:N,__experimental__naiveDimensions:M},this.animate=new St,this.emitter=new ot,this.dimensions=new yt({wrapper:t,content:i,autoResize:N}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=h||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Et(s,{touchMultiplier:v,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:r=!1,lock:s=!1,duration:o=this.options.duration,easing:h=this.options.easing,lerp:d=!o&&this.options.lerp,onComplete:l,force:n=!1,programmatic:g=!0}={}){if(!this.isStopped&&!this.isLocked||n){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let u;if(typeof t=="string"?u=document.querySelector(t):t?.nodeType&&(u=t),u){if(this.options.wrapper!==window){let T=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?T.left:T.top}let p=u.getBoundingClientRect();t=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=i,t=Math.round(t),this.options.infinite?g&&(this.targetScroll=this.animatedScroll=this.scroll):t=Zt(0,t,this.limit),r)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!g){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:h,lerp:d,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(u,p)=>{this.isScrolling=!0,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),g&&(this.targetScroll=u),p||this.emit(),p&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,i=this.limit,(t%i+i)%i):this.animatedScroll;var t,i}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,i){this.rootElement.classList.toggle(t,i),this.emitter.emit("className change",this)}};var Kt=function(){let e=new at({duration:.5,wheelMultiplier:.75,gestureOrientation:"vertical",normalizeWheel:!1,smoothTouch:!1,easing:n=>n===1?1:1-Math.pow(2,-10*n)});function t(n){e.raf(n),requestAnimationFrame(t)}requestAnimationFrame(t),e.on("scroll",()=>{ScrollTrigger&&ScrollTrigger.update()}),gsap.ticker.add(n=>{e.raf(n*1e3)}),gsap.ticker.lagSmoothing(0);let i;function r(n=600){clearTimeout(i),i=setTimeout(()=>{requestAnimationFrame(()=>{e.resize(),console.log("refresh")})},n)}function s(){let n=[...document.querySelectorAll('[data-scroll="refresh"]')];n.length!==0&&n.forEach(g=>{g&&g.addEventListener("click",u=>{r()})})}s();function o(){let n=[...document.querySelectorAll("img[loading='lazy']")];n.length!==0&&n.forEach(g=>{g.addEventListener("load",r)})}o();function h(){let n=document.querySelectorAll('[data-scroll="stop"]');n?.forEach(g=>{g.addEventListener("click",u=>{e.stop()})})}h();function d(){let n=document.querySelectorAll('[data-scroll="start"]');n?.forEach(g=>{g.addEventListener("click",u=>{e.start()})})}d();function l(){let n=document.querySelectorAll('[data-scroll="toggle"]');n?.forEach(g=>{let u=!1;g.addEventListener("click",p=>{u=!u,u?e.stop():e.start()})})}return l(),e};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let e,t=function(){let n=[...document.querySelectorAll(".results-slider_component")],p=et(n,{loop:!1,slidesPerView:"auto"},{navigation:!0,pagination:!1,scrollbar:!1,autoplay:!1})},i=function(){let n=[...document.querySelectorAll(".testimonials-slider_component")],p=et(n,{loop:!1,slidesPerView:"auto"},{navigation:!0,pagination:!1,scrollbar:!1,autoplay:!1})},r=function(){let n=[...document.querySelectorAll(".about-hero-slider_component")],p=et(n,{loop:!0,slidesPerView:"auto"},{navigation:!1,pagination:!1,scrollbar:!1,autoplay:!0})},s=function(){let n=[...document.querySelectorAll(".remote-slider_component")],p=et(n,{loop:!0,slidesPerView:"auto",breakpoints:{320:{spaceBetween:16},768:{spaceBetween:32},992:{spaceBetween:48},1280:{spaceBetween:64}}},{navigation:!1,pagination:!1,scrollbar:!1,autoplay:!0})},o=function(){let n=[...document.querySelectorAll(".work-slider_component")],p=et(n,{slidesPerView:"auto",breakpoints:{320:{spaceBetween:16},768:{spaceBetween:32},992:{spaceBetween:48},1280:{spaceBetween:64}}},{navigation:!0,pagination:!1,scrollbar:!1,autoplay:!1})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},n=>{let{isMobile:g,isTablet:u,isDesktop:p,reduceMotion:T}=n.conditions;e=Kt(),Xt(n),$t(n),Gt(n),T||(Ft(n),Yt(n)),t(),i(),r(),s(),o()})})(),function(){let l="[data-ix-reset]",n="data-ix-reset-time";document.querySelectorAll(l).forEach(function(u){u.addEventListener("click",function(p){if(ScrollTrigger.refresh(),u.hasAttribute(n)){let T=E(1e3,u.getAttribute(n));setTimeout(()=>{ScrollTrigger.refresh()},T)}})})}()});})();
