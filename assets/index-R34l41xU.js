var hr=Object.defineProperty;var pr=(t,e,n)=>e in t?hr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var T=(t,e,n)=>pr(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();const kt=t=>Object.values(t),yr=t=>new Promise(t),mr=t=>Promise.all(t),vr=async(t,e)=>{const n=e.map(String).map(o=>{const i=`url(./fonts/${t}-${o}.woff2)`;return new FontFace(t,i,{weight:o,style:"normal"}).load()});return(await mr(n)).map(o=>document.fonts.add(o))},wr=t=>yr((e,n)=>{const o=new FileReader;o.addEventListener("error",()=>{const i="Error on load image of type";n(new DOMException(`${i}: ${t.type}`))}),o.addEventListener("loadend",()=>{typeof o.result=="string"&&e(o.result)}),o.readAsDataURL(t)}),gr=(t,e)=>t/e*100;class D{constructor(e=0,n=0){this.x=e,this.y=n}set(e,n){this.x=e,this.y=n}clone(){return new D(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}sub(e){return this.x-=e.x,this.y-=e.y,this}isCollision(e){const n=e,o=new D(n.x,n.y),i=new D(e.w,e.h),d=o.add(i);return this.x>=n.x&&this.y>=n.y&&this.x<=d.x&&this.y<=d.y}}const br=t=>Object.fromEntries(new FormData(t).entries()),_r=t=>Object.entries(t),V={string(t){return typeof t=="string"},number(t){return typeof t=="number"&&!isNaN(t)},date(t){return t instanceof Date&&t.toString()!=="Invalid Date"||!isNaN(new Date(String(t)).getTime())},boolean(t){return t===!0||t===!1||t==="true"||t==="false"},object(t){return typeof t=="object"&&t!==null},array(t){return Array.isArray(t)},function(t){return typeof t=="function"},class(t){return typeof t=="function"&&typeof t.prototype=="object"&&"constructor"in t.prototype}},Mr=t=>t==null?null:V.boolean(t)?t==="true"||t===!0:V.number(t)?t:typeof t=="string"&&V.number(+t)?+t:V.date(t)?new Date(t.toString()):(V.string(t),t),Or=t=>Object.values(t),xr=t=>{const e=t instanceof HTMLFormElement?br(t):t;return _r(e).reduce((n,[o,i])=>({...n,[o]:Mr(i)}),e)};function Tr(t,e=1e3){let n=new Date().getTime(),o,i;return d=>{const b=new Date().getTime();o=d,b-n>=e?(n=b,t(d)):(clearTimeout(i),i=window.setTimeout(()=>{n=new Date().getTime(),t(o)},e-(b-n)))}}const ue=new Map,Er=(t,e)=>{const n=_e(t);return ue.set(t,n.add(e)),()=>{n.delete(e),ue.set(t,n)}},_e=t=>ue.get(t)??new Set,k=t=>e=>Er(t,e);class Lr{constructor(e,n){T(this,"type");T(this,"value");this.type=e,this.value=n}}const I=t=>e=>new class extends Lr{constructor(){super(t,e)}dispatch(){for(const n of _e(this.type))n(this.value)}},j=t=>{for(const e of _e(t.type))e(t.value)},ze=I("window.resize"),Hr=k("window.resize"),jr=I("canvas.update.size"),Sr=k("canvas.update.size"),le=I("canvas.add.layer"),Pr=k("canvas.add.layer"),p=(t,e)=>n=>{customElements.define(e,n,{extends:t})};var $e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var We;(function(t){(function(e){var n=typeof globalThis=="object"?globalThis:typeof $e=="object"?$e:typeof self=="object"?self:typeof this=="object"?this:R(),o=i(t);typeof n.Reflect<"u"&&(o=i(n.Reflect,o)),e(o,n),typeof n.Reflect>"u"&&(n.Reflect=t);function i($,N){return function(F,B){Object.defineProperty($,F,{configurable:!0,writable:!0,value:B}),N&&N(F,B)}}function d(){try{return Function("return this;")()}catch{}}function b(){try{return(0,eval)("(function() { return this; })()")}catch{}}function R(){return d()||b()}})(function(e,n){var o=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",d=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",b=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",R=typeof Object.create=="function",$={__proto__:[]}instanceof Array,N=!R&&!$,F={create:R?function(){return oe(Object.create(null))}:$?function(){return oe({__proto__:null})}:function(){return oe({})},has:N?function(r,s){return o.call(r,s)}:function(r,s){return s in r},get:N?function(r,s){return o.call(r,s)?r[s]:void 0}:function(r,s){return r[s]}},B=Object.getPrototypeOf(Function),q=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:cr(),re=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ur(),ne=typeof WeakMap=="function"?WeakMap:lr(),W=i?Symbol.for("@reflect-metadata:registry"):void 0,J=ar(),Me=ir(J);function Wt(r,s,a,c){if(g(a)){if(!Pe(r))throw new TypeError;if(!Ce(s))throw new TypeError;return Yt(r,s)}else{if(!Pe(r))throw new TypeError;if(!E(s))throw new TypeError;if(!E(c)&&!g(c)&&!G(c))throw new TypeError;return G(c)&&(c=void 0),a=C(a),Jt(r,s,a,c)}}e("decorate",Wt);function Gt(r,s){function a(c,y){if(!E(c))throw new TypeError;if(!g(y)&&!nr(y))throw new TypeError;Ee(r,s,c,y)}return a}e("metadata",Gt);function Ut(r,s,a,c){if(!E(a))throw new TypeError;return g(c)||(c=C(c)),Ee(r,s,a,c)}e("defineMetadata",Ut);function Nt(r,s,a){if(!E(s))throw new TypeError;return g(a)||(a=C(a)),Oe(r,s,a)}e("hasMetadata",Nt);function Bt(r,s,a){if(!E(s))throw new TypeError;return g(a)||(a=C(a)),se(r,s,a)}e("hasOwnMetadata",Bt);function qt(r,s,a){if(!E(s))throw new TypeError;return g(a)||(a=C(a)),xe(r,s,a)}e("getMetadata",qt);function Zt(r,s,a){if(!E(s))throw new TypeError;return g(a)||(a=C(a)),Te(r,s,a)}e("getOwnMetadata",Zt);function Vt(r,s){if(!E(r))throw new TypeError;return g(s)||(s=C(s)),Le(r,s)}e("getMetadataKeys",Vt);function Qt(r,s){if(!E(r))throw new TypeError;return g(s)||(s=C(s)),He(r,s)}e("getOwnMetadataKeys",Qt);function Xt(r,s,a){if(!E(s))throw new TypeError;if(g(a)||(a=C(a)),!E(s))throw new TypeError;g(a)||(a=C(a));var c=Z(s,a,!1);return g(c)?!1:c.OrdinaryDeleteMetadata(r,s,a)}e("deleteMetadata",Xt);function Yt(r,s){for(var a=r.length-1;a>=0;--a){var c=r[a],y=c(s);if(!g(y)&&!G(y)){if(!Ce(y))throw new TypeError;s=y}}return s}function Jt(r,s,a,c){for(var y=r.length-1;y>=0;--y){var H=r[y],L=H(s,a,c);if(!g(L)&&!G(L)){if(!E(L))throw new TypeError;c=L}}return c}function Oe(r,s,a){var c=se(r,s,a);if(c)return!0;var y=ie(s);return G(y)?!1:Oe(r,y,a)}function se(r,s,a){var c=Z(s,a,!1);return g(c)?!1:Se(c.OrdinaryHasOwnMetadata(r,s,a))}function xe(r,s,a){var c=se(r,s,a);if(c)return Te(r,s,a);var y=ie(s);if(!G(y))return xe(r,y,a)}function Te(r,s,a){var c=Z(s,a,!1);if(!g(c))return c.OrdinaryGetOwnMetadata(r,s,a)}function Ee(r,s,a,c){var y=Z(a,c,!0);y.OrdinaryDefineOwnMetadata(r,s,a,c)}function Le(r,s){var a=He(r,s),c=ie(r);if(c===null)return a;var y=Le(c,s);if(y.length<=0)return a;if(a.length<=0)return y;for(var H=new re,L=[],_=0,u=a;_<u.length;_++){var l=u[_],f=H.has(l);f||(H.add(l),L.push(l))}for(var h=0,M=y;h<M.length;h++){var l=M[h],f=H.has(l);f||(H.add(l),L.push(l))}return L}function He(r,s){var a=Z(r,s,!1);return a?a.OrdinaryOwnMetadataKeys(r,s):[]}function je(r){if(r===null)return 1;switch(typeof r){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return r===null?1:6;default:return 6}}function g(r){return r===void 0}function G(r){return r===null}function Kt(r){return typeof r=="symbol"}function E(r){return typeof r=="object"?r!==null:typeof r=="function"}function er(r,s){switch(je(r)){case 0:return r;case 1:return r;case 2:return r;case 3:return r;case 4:return r;case 5:return r}var a="string",c=De(r,d);if(c!==void 0){var y=c.call(r,a);if(E(y))throw new TypeError;return y}return tr(r)}function tr(r,s){var a,c;{var y=r.toString;if(K(y)){var c=y.call(r);if(!E(c))return c}var a=r.valueOf;if(K(a)){var c=a.call(r);if(!E(c))return c}}throw new TypeError}function Se(r){return!!r}function rr(r){return""+r}function C(r){var s=er(r);return Kt(s)?s:rr(s)}function Pe(r){return Array.isArray?Array.isArray(r):r instanceof Object?r instanceof Array:Object.prototype.toString.call(r)==="[object Array]"}function K(r){return typeof r=="function"}function Ce(r){return typeof r=="function"}function nr(r){switch(je(r)){case 3:return!0;case 4:return!0;default:return!1}}function ae(r,s){return r===s||r!==r&&s!==s}function De(r,s){var a=r[s];if(a!=null){if(!K(a))throw new TypeError;return a}}function ke(r){var s=De(r,b);if(!K(s))throw new TypeError;var a=s.call(r);if(!E(a))throw new TypeError;return a}function Ie(r){return r.value}function Re(r){var s=r.next();return s.done?!1:s}function Fe(r){var s=r.return;s&&s.call(r)}function ie(r){var s=Object.getPrototypeOf(r);if(typeof r!="function"||r===B||s!==B)return s;var a=r.prototype,c=a&&Object.getPrototypeOf(a);if(c==null||c===Object.prototype)return s;var y=c.constructor;return typeof y!="function"||y===r?s:y}function sr(){var r;!g(W)&&typeof n.Reflect<"u"&&!(W in n.Reflect)&&typeof n.Reflect.defineMetadata=="function"&&(r=or(n.Reflect));var s,a,c,y=new ne,H={registerProvider:L,getProvider:u,setProvider:f};return H;function L(h){if(!Object.isExtensible(H))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case r===h:break;case g(s):s=h;break;case s===h:break;case g(a):a=h;break;case a===h:break;default:c===void 0&&(c=new re),c.add(h);break}}function _(h,M){if(!g(s)){if(s.isProviderFor(h,M))return s;if(!g(a)){if(a.isProviderFor(h,M))return s;if(!g(c))for(var O=ke(c);;){var x=Re(O);if(!x)return;var S=Ie(x);if(S.isProviderFor(h,M))return Fe(O),S}}}if(!g(r)&&r.isProviderFor(h,M))return r}function u(h,M){var O=y.get(h),x;return g(O)||(x=O.get(M)),g(x)&&(x=_(h,M),g(x)||(g(O)&&(O=new q,y.set(h,O)),O.set(M,x))),x}function l(h){if(g(h))throw new TypeError;return s===h||a===h||!g(c)&&c.has(h)}function f(h,M,O){if(!l(O))throw new Error("Metadata provider not registered.");var x=u(h,M);if(x!==O){if(!g(x))return!1;var S=y.get(h);g(S)&&(S=new q,y.set(h,S)),S.set(M,O)}return!0}}function ar(){var r;return!g(W)&&E(n.Reflect)&&Object.isExtensible(n.Reflect)&&(r=n.Reflect[W]),g(r)&&(r=sr()),!g(W)&&E(n.Reflect)&&Object.isExtensible(n.Reflect)&&Object.defineProperty(n.Reflect,W,{enumerable:!1,configurable:!1,writable:!1,value:r}),r}function ir(r){var s=new ne,a={isProviderFor:function(l,f){var h=s.get(l);return g(h)?!1:h.has(f)},OrdinaryDefineOwnMetadata:L,OrdinaryHasOwnMetadata:y,OrdinaryGetOwnMetadata:H,OrdinaryOwnMetadataKeys:_,OrdinaryDeleteMetadata:u};return J.registerProvider(a),a;function c(l,f,h){var M=s.get(l),O=!1;if(g(M)){if(!h)return;M=new q,s.set(l,M),O=!0}var x=M.get(f);if(g(x)){if(!h)return;if(x=new q,M.set(f,x),!r.setProvider(l,f,a))throw M.delete(f),O&&s.delete(l),new Error("Wrong provider for target.")}return x}function y(l,f,h){var M=c(f,h,!1);return g(M)?!1:Se(M.has(l))}function H(l,f,h){var M=c(f,h,!1);if(!g(M))return M.get(l)}function L(l,f,h,M){var O=c(h,M,!0);O.set(l,f)}function _(l,f){var h=[],M=c(l,f,!1);if(g(M))return h;for(var O=M.keys(),x=ke(O),S=0;;){var Ae=Re(x);if(!Ae)return h.length=S,h;var fr=Ie(Ae);try{h[S]=fr}catch(dr){try{Fe(x)}finally{throw dr}}S++}}function u(l,f,h){var M=c(f,h,!1);if(g(M)||!M.delete(l))return!1;if(M.size===0){var O=s.get(f);g(O)||(O.delete(h),O.size===0&&s.delete(O))}return!0}}function or(r){var s=r.defineMetadata,a=r.hasOwnMetadata,c=r.getOwnMetadata,y=r.getOwnMetadataKeys,H=r.deleteMetadata,L=new ne,_={isProviderFor:function(u,l){var f=L.get(u);return!g(f)&&f.has(l)?!0:y(u,l).length?(g(f)&&(f=new re,L.set(u,f)),f.add(l),!0):!1},OrdinaryDefineOwnMetadata:s,OrdinaryHasOwnMetadata:a,OrdinaryGetOwnMetadata:c,OrdinaryOwnMetadataKeys:y,OrdinaryDeleteMetadata:H};return _}function Z(r,s,a){var c=J.getProvider(r,s);if(!g(c))return c;if(a){if(J.setProvider(r,s,Me))return Me;throw new Error("Illegal state.")}}function cr(){var r={},s=[],a=function(){function _(u,l,f){this._index=0,this._keys=u,this._values=l,this._selector=f}return _.prototype["@@iterator"]=function(){return this},_.prototype[b]=function(){return this},_.prototype.next=function(){var u=this._index;if(u>=0&&u<this._keys.length){var l=this._selector(this._keys[u],this._values[u]);return u+1>=this._keys.length?(this._index=-1,this._keys=s,this._values=s):this._index++,{value:l,done:!1}}return{value:void 0,done:!0}},_.prototype.throw=function(u){throw this._index>=0&&(this._index=-1,this._keys=s,this._values=s),u},_.prototype.return=function(u){return this._index>=0&&(this._index=-1,this._keys=s,this._values=s),{value:u,done:!0}},_}(),c=function(){function _(){this._keys=[],this._values=[],this._cacheKey=r,this._cacheIndex=-2}return Object.defineProperty(_.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),_.prototype.has=function(u){return this._find(u,!1)>=0},_.prototype.get=function(u){var l=this._find(u,!1);return l>=0?this._values[l]:void 0},_.prototype.set=function(u,l){var f=this._find(u,!0);return this._values[f]=l,this},_.prototype.delete=function(u){var l=this._find(u,!1);if(l>=0){for(var f=this._keys.length,h=l+1;h<f;h++)this._keys[h-1]=this._keys[h],this._values[h-1]=this._values[h];return this._keys.length--,this._values.length--,ae(u,this._cacheKey)&&(this._cacheKey=r,this._cacheIndex=-2),!0}return!1},_.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=r,this._cacheIndex=-2},_.prototype.keys=function(){return new a(this._keys,this._values,y)},_.prototype.values=function(){return new a(this._keys,this._values,H)},_.prototype.entries=function(){return new a(this._keys,this._values,L)},_.prototype["@@iterator"]=function(){return this.entries()},_.prototype[b]=function(){return this.entries()},_.prototype._find=function(u,l){if(!ae(this._cacheKey,u)){this._cacheIndex=-1;for(var f=0;f<this._keys.length;f++)if(ae(this._keys[f],u)){this._cacheIndex=f;break}}return this._cacheIndex<0&&l&&(this._cacheIndex=this._keys.length,this._keys.push(u),this._values.push(void 0)),this._cacheIndex},_}();return c;function y(_,u){return _}function H(_,u){return u}function L(_,u){return[_,u]}}function ur(){var r=function(){function s(){this._map=new q}return Object.defineProperty(s.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),s.prototype.has=function(a){return this._map.has(a)},s.prototype.add=function(a){return this._map.set(a,a),this},s.prototype.delete=function(a){return this._map.delete(a)},s.prototype.clear=function(){this._map.clear()},s.prototype.keys=function(){return this._map.keys()},s.prototype.values=function(){return this._map.keys()},s.prototype.entries=function(){return this._map.entries()},s.prototype["@@iterator"]=function(){return this.keys()},s.prototype[b]=function(){return this.keys()},s}();return r}function lr(){var r=16,s=F.create(),a=c();return function(){function u(){this._key=c()}return u.prototype.has=function(l){var f=y(l,!1);return f!==void 0?F.has(f,this._key):!1},u.prototype.get=function(l){var f=y(l,!1);return f!==void 0?F.get(f,this._key):void 0},u.prototype.set=function(l,f){var h=y(l,!0);return h[this._key]=f,this},u.prototype.delete=function(l){var f=y(l,!1);return f!==void 0?delete f[this._key]:!1},u.prototype.clear=function(){this._key=c()},u}();function c(){var u;do u="@@WeakMap@@"+_();while(F.has(s,u));return s[u]=!0,u}function y(u,l){if(!o.call(u,a)){if(!l)return;Object.defineProperty(u,a,{value:F.create()})}return u[a]}function H(u,l){for(var f=0;f<l;++f)u[f]=Math.random()*255|0;return u}function L(u){if(typeof Uint8Array=="function"){var l=new Uint8Array(u);return typeof crypto<"u"?crypto.getRandomValues(l):typeof msCrypto<"u"?msCrypto.getRandomValues(l):H(l,u),l}return H(new Array(u),u)}function _(){var u=L(r);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var l="",f=0;f<r;++f){var h=u[f];(f===4||f===6||f===8)&&(l+="-"),h<16&&(l+="0"),l+=h.toString(16).toLowerCase()}return l}}function oe(r){return r.__=void 0,delete r.__,r}})})(We||(We={}));function m(t,e){return Object.assign(t,e??{})}var It=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Rt=t=>{throw TypeError(t)},Dr=(t,e,n)=>e in t?It(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kr=(t,e,n,o)=>{for(var i=o>1?void 0:o?Cr(e,n):e,d=t.length-1,b;d>=0;d--)(b=t[d])&&(i=(o?b(e,n,i):b(i))||i);return o&&i&&It(e,n,i),i},ee=(t,e,n)=>Dr(t,typeof e!="symbol"?e+"":e,n),Ft=(t,e,n)=>e.has(t)||Rt("Cannot "+n),P=(t,e,n)=>(Ft(t,e,"read from private field"),n?n.call(t):e.get(t)),Q=(t,e,n)=>e.has(t)?Rt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ge=(t,e,n,o)=>(Ft(t,e,"write to private field"),e.set(t,n),n),U,A,fe,de,he;let pe=class extends HTMLCanvasElement{constructor(){super(),ee(this,"context"),Q(this,U,[]),Q(this,A,null),ee(this,"addLayer",t=>{t.setOrder(P(this,U).length),P(this,U).push(t)}),ee(this,"render",async()=>{this.context&&(this.context.clearRect(0,0,this.width,this.height),P(this,U).filter(t=>t.active).sort((t,e)=>t.order-e.order).map(t=>{var d;const{width:e,height:n}=t,{x:o,y:i}=t.position;(d=this.context)==null||d.drawImage(t,o,i,e,n)}))}),ee(this,"setSize",t=>{this.width=t,this.height=t}),Q(this,fe,({offsetX:t,offsetY:e})=>{const n=new D(t,e),o=P(this,U).filter(({rect:i})=>n.isCollision(i));if(o.length>0){const i=o.reduce((d,b)=>b.order>d.order?b:d,o[0]);Ge(this,A,i),i.startDrag(n)}}),Q(this,de,t=>{if(P(this,A)){const{offsetX:e,offsetY:n}=t,o=new D(e,n);P(this,A).dragTo(o),this.render()}}),Q(this,he,()=>{P(this,A)&&(P(this,A).stopDrag(),Ge(this,A,null),this.render())}),this.context=this.getContext("2d")}connectedCallback(){this.onmousedown=P(this,fe),this.onmousemove=P(this,de),this.onmouseup=P(this,he)}};U=new WeakMap;A=new WeakMap;fe=new WeakMap;de=new WeakMap;he=new WeakMap;pe=kr([p("canvas","cf-canvas")],pe);const X=new pe;Pr(t=>{X.addLayer(t),X.render().then()});Sr(t=>{const e=Math.min(t.current.w,t.current.h),o=gr(e,t.ideal)>100?t.ideal:e;X.setSize(o),X.render().then()});Hr(t=>{const e=t<1080?540:1080,{clientWidth:n,clientHeight:o}=root;j(jr({current:{w:n,h:o},ideal:e})),document.documentElement.style.setProperty("--cf-canvas-max-size",`${e}px`)});const Ir=I("layer.create.image"),Rr=k("layer.create.image"),Fr=I("layer.create.text"),Ar=k("layer.create.text");class At extends OffscreenCanvas{constructor(n,o,i=0,d=0){super(n,o);T(this,"context");T(this,"_position",new D);T(this,"_offset",new D);T(this,"_draggable",!0);T(this,"_dragging",!1);T(this,"_active",!0);T(this,"_order",1);this._position=new D(i,d),this.context=this.getContext("2d")}get position(){return this._position}get dragging(){return this._dragging}get offset(){return this._offset}get active(){return this._active}get order(){return this._order}get rect(){return{x:this.position.x,y:this.position.y,w:this.width,h:this.height}}setActive(n){return this._active=n,this}setOrder(n){return this._order=n,this}setDraggable(n){return this._draggable=n,this}setDragging(n){return this._dragging=n,this}startDrag(n){this.setDragging(!0),this.offset.copy(n).sub(this.position)}dragTo(n){this.dragging&&this.position.copy(n).sub(this.offset)}stopDrag(){this.setDragging(!1)}}class zr extends At{constructor(){super(...arguments);T(this,"image",new Image(this.width,this.height))}async render(){var b;if(!((b=this.context)!=null&&b.drawImage))return;await this.image.decode();const{x:n,y:o,w:i,h:d}=this.rect;this.context.drawImage(this.image,n,o,i,d)}setSrc(n){return this.image.src=n,this}}Rr(t=>{const e=new Image;e.addEventListener("load",async()=>{const{width:n,height:o}=e,i=new zr(n,o,0,0);i.image.src=t,await i.render(),j(le(i))}),e.src=t});class $r extends At{constructor(){super(...arguments);T(this,"_text","");T(this,"_color","#111111");T(this,"_font","Mukta");T(this,"_size",3.2);T(this,"_weight","normal")}async render(){var o;if(!((o=this.context)!=null&&o.drawImage))return;this.context.fillStyle=this._color,this.context.font=this.font;const n=this._size*10;this.context.fillText(this._text,0,n,this.width)}setText(n){return this._text=n,this}setColor(n){return this._color=n,this}setFont(n){return this._font=n,this}setSize(n){return this._size=n,this}setWeight(n){return this._weight=n,this}get font(){return`${this._weight} ${this._size}em ${this._font}`}}Ar(async({text:t,size:e,color:n,bold:o})=>{const i=new $r(540,540,0,0);i.setText(t).setSize(e).setColor(n),o?(await i.setWeight("bold").render(),j(le(i))):(await i.render(),j(le(i)))});const Wr=I("toolbar.selected"),Gr=k("toolbar.selected"),Ur=I("toolbar.select.image"),Nr=k("toolbar.select.image"),Br=I("toolbar.select.text"),qr=k("toolbar.select.text");function v(t,e,n,o){var i=arguments.length,d=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(t,e,n,o);else for(var R=t.length-1;R>=0;R--)(b=t[R])&&(d=(i<3?b(d):i>3?b(e,n,d):b(e,n))||d);return i>3&&d&&Object.defineProperty(e,n,d),d}function w(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}let Ue=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Ue=v([p("address","web-address"),w("design:paramtypes",[Object])],Ue);let Ne=class extends HTMLAnchorElement{constructor(n={}){super();T(this,"target");T(this,"rel");m(this,n)}};Ne=v([p("a","web-anchor"),w("design:paramtypes",[Object])],Ne);let Be=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Be=v([p("article","web-article"),w("design:paramtypes",[Object])],Be);let qe=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};qe=v([p("aside","web-aside"),w("design:paramtypes",[Object])],qe);let Ze=class extends HTMLBRElement{constructor(e={}){super(),m(this,e)}};Ze=v([p("br","web-break"),w("design:paramtypes",[Object])],Ze);let Y=class extends HTMLButtonElement{constructor(e={}){super(),m(this,e)}};Y=v([p("button","web-button"),w("design:paramtypes",[Object])],Y);let Ve=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Ve=v([p("cite","web-cite"),w("design:paramtypes",[Object])],Ve);let Qe=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Qe=v([p("code","web-code"),w("design:paramtypes",[Object])],Qe);let Xe=class extends HTMLDataListElement{constructor(e={}){super(),m(this,e)}};Xe=v([p("datalist","web-data-list"),w("design:paramtypes",[Object])],Xe);let Ye=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Ye=v([p("dd","web-description-definition"),w("design:paramtypes",[Object])],Ye);let Je=class extends HTMLDListElement{constructor(e={}){super(),m(this,e)}};Je=v([p("dl","web-description-list"),w("design:paramtypes",[Object])],Je);let Ke=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Ke=v([p("dt","web-description-term"),w("design:paramtypes",[Object])],Ke);let et=class extends HTMLDivElement{constructor(e={}){super(),m(this,e)}};et=v([p("div","web-div"),w("design:paramtypes",[Object])],et);let tt=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};tt=v([p("em","web-emphasis"),w("design:paramtypes",[Object])],tt);let rt=class extends HTMLFieldSetElement{constructor(e={}){super(),m(this,e)}};rt=v([p("fieldset","web-fieldset"),w("design:paramtypes",[Object])],rt);let nt=class extends HTMLElement{};nt=v([p("figcaption","web-figcaption")],nt);let st=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};st=v([p("figure","web-figure"),w("design:paramtypes",[Object])],st);let ye=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};ye=v([p("footer","web-footer"),w("design:paramtypes",[Object])],ye);let me=class extends HTMLFormElement{constructor(e={}){super(),m(this,e)}};me=v([p("form","web-form"),w("design:paramtypes",[Object])],me);let at=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};at=v([p("header","web-header"),w("design:paramtypes",[Object])],at);let it=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};it=v([p("h1","web-h1"),w("design:paramtypes",[Object])],it);let ot=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};ot=v([p("h2","web-h2"),w("design:paramtypes",[Object])],ot);let ct=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};ct=v([p("h3","web-h3"),w("design:paramtypes",[Object])],ct);let ut=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};ut=v([p("h4","web-h4"),w("design:paramtypes",[Object])],ut);let lt=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};lt=v([p("h5","web-h5"),w("design:paramtypes",[Object])],lt);let ft=class extends HTMLHeadingElement{constructor(e={}){super(),m(this,e)}};ft=v([p("h6","web-h6"),w("design:paramtypes",[Object])],ft);let dt=class extends HTMLHRElement{constructor(e={}){super(),m(this,e)}};dt=v([p("hr","web-horizontal-rule"),w("design:paramtypes",[Object])],dt);let z=class extends HTMLInputElement{constructor(e={}){super(),m(this,e)}};z=v([p("input","web-input"),w("design:paramtypes",[Object])],z);let ht=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};ht=v([p("kbd","web-keyboard"),w("design:paramtypes",[Object])],ht);let pt=class extends HTMLLabelElement{constructor(e={}){super(),m(this,e)}};pt=v([p("label","web-label"),w("design:paramtypes",[Object])],pt);let yt=class extends HTMLLIElement{constructor(e={}){super(),m(this,e)}};yt=v([p("li","web-list-item"),w("design:paramtypes",[Object])],yt);let mt=class extends HTMLOListElement{constructor(e={}){super(),m(this,e)}};mt=v([p("ol","web-ordered-list"),w("design:paramtypes",[Object])],mt);let vt=class extends HTMLUListElement{constructor(e={}){super(),m(this,e)}};vt=v([p("ul","web-unordered-list"),w("design:paramtypes",[Object])],vt);let wt=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};wt=v([p("main","web-main"),w("design:paramtypes",[Object])],wt);let gt=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};gt=v([p("mark","web-mark"),w("design:paramtypes",[Object])],gt);let bt=class extends HTMLMenuElement{constructor(e={}){super(),m(this,e)}};bt=v([p("menu","web-menu"),w("design:paramtypes",[Object])],bt);let _t=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};_t=v([p("nav","web-nav"),w("design:paramtypes",[Object])],_t);let ce=class extends HTMLObjectElement{constructor(e={}){super(),m(this,e)}};ce=v([p("object","web-object"),w("design:paramtypes",[ce])],ce);let Mt=class extends HTMLParagraphElement{constructor(e={}){super(),m(this,e)}};Mt=v([p("p","web-paragraph"),w("design:paramtypes",[Object])],Mt);let Ot=class extends HTMLPreElement{constructor(e={}){super(),m(this,e)}};Ot=v([p("pre","web-preformatted"),w("design:paramtypes",[Object])],Ot);let xt=class extends HTMLProgressElement{constructor(e={}){super(),m(this,e)}};xt=v([p("progress","web-progress"),w("design:paramtypes",[Object])],xt);let Tt=class extends HTMLQuoteElement{constructor(e={}){super(),m(this,e)}};Tt=v([p("blockquote","web-blockquote"),w("design:paramtypes",[Object])],Tt);let Et=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Et=v([p("section","web-section"),w("design:paramtypes",[Object])],Et);let Lt=class extends HTMLSelectElement{constructor(e={}){super(),m(this,e)}};Lt=v([p("select","web-select"),w("design:paramtypes",[Object])],Lt);let Ht=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};Ht=v([p("small","web-small"),w("design:paramtypes",[Object])],Ht);let jt=class extends HTMLSpanElement{constructor(e={}){super(),m(this,e)}};jt=v([p("span","web-span"),w("design:paramtypes",[Object])],jt);let St=class extends HTMLElement{constructor(e={}){super(),m(this,e)}};St=v([p("strong","web-strong"),w("design:paramtypes",[Object])],St);let Pt=class extends HTMLTimeElement{constructor(e={}){super(),m(this,e)}};Pt=v([p("time","web-time"),w("design:paramtypes",[Object])],Pt);Nr(()=>{const t=new z({type:"file",accept:"image/svg+xml,image/png",onchange(){const[e]=t.files??[];e&&wr(e).then(n=>{j(Ir(n))})}});t.click()});const Zr=I("form.text.submit"),Vr=k("form.text.submit");Vr(async t=>{j(Fr(t))});var Qr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Yr=(t,e,n,o)=>{for(var i=o>1?void 0:o?Xr(e,n):e,d=t.length-1,b;d>=0;d--)(b=t[d])&&(i=(o?b(e,n,i):b(i))||i);return o&&i&&Qr(e,n,i),i};let ve=class extends me{constructor(t,e={}){super(e),this.controls=t,this.append(...kt(this.controls))}get value(){return xr(this)}};ve=Yr([p("form","cf-form-group")],ve);var Jr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,en=(t,e,n,o)=>{for(var i=o>1?void 0:o?Kr(e,n):e,d=t.length-1,b;d>=0;d--)(b=t[d])&&(i=(o?b(e,n,i):b(i))||i);return o&&i&&Jr(e,n,i),i};let we=class extends HTMLDialogElement{constructor(e,n,o={}){super();T(this,"form");T(this,"actions");m(this,o),this.form=new ve(e,{onsubmit:d=>{d.preventDefault(),j(n(this.form.value)),this.close(),this.remove()}}),this.actions={confirm:new Y({type:"submit",textContent:"Confirm"}),cancel:new Y({type:"button",textContent:"Cancel",onclick:()=>{this.close("cancel"),this.remove()}})};const i=new ye;i.append(...Or(this.actions)),this.form.append(i),this.append(this.form)}connectedCallback(){setTimeout(()=>{document.addEventListener("click",e=>{const n=e.target;this.form.contains(n)||this.close()})})}};we=en([p("dialog","cf-form-dialog")],we);qr(()=>{const t=new z({type:"text",name:"text",placeholder:"Texto",required:!0}),e=new z({type:"number",name:"size",step:"0.1",value:"3.2"}),n=new z({type:"checkbox",name:"bold",value:"true",checked:!1}),o=new z({type:"color",name:"color",value:"#000000"}),i={text:t,size:e,color:o,bold:n},d=new we(i,Zr);document.body.insertAdjacentElement("beforeend",d),d.showModal()});Gr(t=>{switch(t){case"image":return j(Ur());case"text":return j(Br())}});const Ct={image:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"> <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" /> </svg>',text:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"> <path d="M420-160v-520H200v-120h560v120H540v520H420Z"/> </svg>'};var zt=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,$t=t=>{throw TypeError(t)},rn=(t,e,n)=>e in t?zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nn=(t,e,n,o)=>{for(var i=o>1?void 0:o?tn(e,n):e,d=t.length-1,b;d>=0;d--)(b=t[d])&&(i=(o?b(e,n,i):b(i))||i);return o&&i&&zt(e,n,i),i},sn=(t,e,n)=>rn(t,e+"",n),an=(t,e,n)=>e.has(t)||$t("Cannot "+n),on=(t,e,n)=>e.has(t)?$t("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Dt=(t,e,n)=>(an(t,e,"access private method"),n),te,ge;let be=class extends HTMLMenuElement{constructor(){super(...arguments),on(this,te),sn(this,"buttons",{image:Dt(this,te,ge).call(this,Ct.image,"image","Select image"),text:Dt(this,te,ge).call(this,Ct.text,"text","Write text")})}connectedCallback(){for(const t of kt(this.buttons))this.append(t),t.addEventListener("click",()=>{const e=t.value;j(Wr(e))})}};te=new WeakSet;ge=function(t,e,n){return new Y({innerHTML:t,value:e,title:n,type:"button"})};be=nn([p("menu","cf-toolbar")],be);const cn=()=>{const t=new be,e=()=>Math.min(innerWidth,innerHeight);j(ze(e())),onresize=Tr(()=>j(ze(e())),250),root.append(t,X)};vr("Mukta",[400,600,800]).then(cn);
