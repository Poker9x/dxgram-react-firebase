var Z=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function n_(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var K={exports:{}},se={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ld=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,i_=Object.prototype.propertyIsEnumerable;function s_(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o_(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var em=o_()?Object.assign:function(t,e){for(var n,r=s_(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)r_.call(n,o)&&(r[o]=n[o]);if(ld){i=ld(n);for(var a=0;a<i.length;a++)i_.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=em,Si=60103,tm=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var nm=60109,rm=60110,im=60112;se.Suspense=60113;var sm=60115,om=60116;if(typeof Symbol=="function"&&Symbol.for){var At=Symbol.for;Si=At("react.element"),tm=At("react.portal"),se.Fragment=At("react.fragment"),se.StrictMode=At("react.strict_mode"),se.Profiler=At("react.profiler"),nm=At("react.provider"),rm=At("react.context"),im=At("react.forward_ref"),se.Suspense=At("react.suspense"),sm=At("react.memo"),om=At("react.lazy")}var ud=typeof Symbol=="function"&&Symbol.iterator;function a_(t){return t===null||typeof t!="object"?null:(t=ud&&t[ud]||t["@@iterator"],typeof t=="function"?t:null)}function so(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(so(85));this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=Ii.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}var bh=Ph.prototype=new um;bh.constructor=Ph;Dh(bh,Ii.prototype);bh.isPureReactComponent=!0;var Oh={current:null},cm=Object.prototype.hasOwnProperty,hm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cm.call(e,r)&&!hm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Si,type:t,key:s,ref:o,props:i,_owner:Oh.current}}function l_(t,e){return{$$typeof:Si,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Si}function u_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cd=/\/+/g;function vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u_(""+t.key):e.toString(36)}function aa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Si:case tm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vu(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(cd,"$&/")+"/"),aa(i,e,n,"",function(u){return u})):i!=null&&(Lh(i)&&(i=l_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vu(s,a);o+=aa(s,e,n,l,i)}else if(l=a_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vu(s,a++),o+=aa(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(so(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function jo(t,e,n){if(t==null)return t;var r=[],i=0;return aa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function c_(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var dm={current:null};function sn(){var t=dm.current;if(t===null)throw Error(so(321));return t}var h_={ReactCurrentDispatcher:dm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Oh,IsSomeRendererActing:{current:!1},assign:Dh};se.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Lh(t))throw Error(so(143));return t}};se.Component=Ii;se.PureComponent=Ph;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;se.cloneElement=function(t,e,n){if(t==null)throw Error(so(267,t));var r=Dh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cm.call(e,l)&&!hm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Si,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:rm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:nm,_context:t},t.Consumer=t};se.createElement=fm;se.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:im,render:t}};se.isValidElement=Lh;se.lazy=function(t){return{$$typeof:om,_payload:{_status:-1,_result:t},_init:c_}};se.memo=function(t,e){return{$$typeof:sm,type:t,compare:e===void 0?null:e}};se.useCallback=function(t,e){return sn().useCallback(t,e)};se.useContext=function(t,e){return sn().useContext(t,e)};se.useDebugValue=function(){};se.useEffect=function(t,e){return sn().useEffect(t,e)};se.useImperativeHandle=function(t,e,n){return sn().useImperativeHandle(t,e,n)};se.useLayoutEffect=function(t,e){return sn().useLayoutEffect(t,e)};se.useMemo=function(t,e){return sn().useMemo(t,e)};se.useReducer=function(t,e,n){return sn().useReducer(t,e,n)};se.useRef=function(t){return sn().useRef(t)};se.useState=function(t){return sn().useState(t)};se.version="17.0.2";K.exports=se;var RN=K.exports,pm={exports:{}},kt={},gm={exports:{}},mm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var T=t.unstable_now();l(!0,T),l=null}catch(R){throw setTimeout(c,0),R}};e=function(T){l!==null?setTimeout(e,0,T):(l=T,setTimeout(c,0))},n=function(T,R){u=setTimeout(T,R)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,w=null,p=-1,m=5,f=0;t.unstable_shouldYield=function(){return t.unstable_now()>=f},i=function(){},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<T?Math.floor(1e3/T):5};var v=new MessageChannel,x=v.port2;v.port1.onmessage=function(){if(w!==null){var T=t.unstable_now();f=T+m;try{w(!0,T)?x.postMessage(null):(y=!1,w=null)}catch(R){throw x.postMessage(null),R}}else y=!1},e=function(T){w=T,y||(y=!0,x.postMessage(null))},n=function(T,R){p=d(function(){T(t.unstable_now())},R)},r=function(){h(p),p=-1}}function I(T,R){var N=T.length;T.push(R);e:for(;;){var P=N-1>>>1,Q=T[P];if(Q!==void 0&&0<k(Q,R))T[P]=R,T[N]=Q,N=P;else break e}}function _(T){return T=T[0],T===void 0?null:T}function E(T){var R=T[0];if(R!==void 0){var N=T.pop();if(N!==R){T[0]=N;e:for(var P=0,Q=T.length;P<Q;){var ne=2*(P+1)-1,xe=T[ne],q=ne+1,pt=T[q];if(xe!==void 0&&0>k(xe,N))pt!==void 0&&0>k(pt,xe)?(T[P]=pt,T[q]=N,P=q):(T[P]=xe,T[ne]=N,P=ne);else if(pt!==void 0&&0>k(pt,N))T[P]=pt,T[q]=N,P=q;else break e}}return R}return null}function k(T,R){var N=T.sortIndex-R.sortIndex;return N!==0?N:T.id-R.id}var C=[],S=[],A=1,D=null,b=3,$=!1,V=!1,G=!1;function ue(T){for(var R=_(S);R!==null;){if(R.callback===null)E(S);else if(R.startTime<=T)E(S),R.sortIndex=R.expirationTime,I(C,R);else break;R=_(S)}}function ie(T){if(G=!1,ue(T),!V)if(_(C)!==null)V=!0,e(ae);else{var R=_(S);R!==null&&n(ie,R.startTime-T)}}function ae(T,R){V=!1,G&&(G=!1,r()),$=!0;var N=b;try{for(ue(R),D=_(C);D!==null&&(!(D.expirationTime>R)||T&&!t.unstable_shouldYield());){var P=D.callback;if(typeof P=="function"){D.callback=null,b=D.priorityLevel;var Q=P(D.expirationTime<=R);R=t.unstable_now(),typeof Q=="function"?D.callback=Q:D===_(C)&&E(C),ue(R)}else E(C);D=_(C)}if(D!==null)var ne=!0;else{var xe=_(S);xe!==null&&n(ie,xe.startTime-R),ne=!1}return ne}finally{D=null,b=N,$=!1}}var le=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){V||$||(V=!0,e(ae))},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return _(C)},t.unstable_next=function(T){switch(b){case 1:case 2:case 3:var R=3;break;default:R=b}var N=b;b=R;try{return T()}finally{b=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=le,t.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=b;b=T;try{return R()}finally{b=N}},t.unstable_scheduleCallback=function(T,R,N){var P=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?P+N:P):N=P,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=N+Q,T={id:A++,callback:R,priorityLevel:T,startTime:N,expirationTime:Q,sortIndex:-1},N>P?(T.sortIndex=N,I(S,T),_(C)===null&&T===_(S)&&(G?r():G=!0,n(ie,N-P))):(T.sortIndex=Q,I(C,T),V||$||(V=!0,e(ae))),T},t.unstable_wrapCallback=function(T){var R=b;return function(){var N=b;b=R;try{return T.apply(this,arguments)}finally{b=N}}}})(mm);gm.exports=mm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=K.exports,ye=em,Re=gm.exports;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!_l)throw Error(L(227));var vm=new Set,Rs={};function wr(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Rs[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var tn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),f_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hd=Object.prototype.hasOwnProperty,fd={},dd={};function d_(t){return hd.call(dd,t)?!0:hd.call(fd,t)?!1:f_.test(t)?dd[t]=!0:(fd[t]=!0,!1)}function p_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g_(t,e,n,r){if(e===null||typeof e=="undefined"||p_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mh,$h);Fe[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mh,$h);Fe[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mh,$h);Fe[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bh(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(g_(e,n,i,r)&&(n=null),r||i===null?d_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=_l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,is=60103,Gn=60106,hn=60107,Uh=60108,fs=60114,Fh=60109,Vh=60110,El=60112,ds=60113,Ca=60120,Sl=60115,jh=60116,zh=60121,Hh=60128,ym=60129,Wh=60130,uc=60131;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;is=Ce("react.element"),Gn=Ce("react.portal"),hn=Ce("react.fragment"),Uh=Ce("react.strict_mode"),fs=Ce("react.profiler"),Fh=Ce("react.provider"),Vh=Ce("react.context"),El=Ce("react.forward_ref"),ds=Ce("react.suspense"),Ca=Ce("react.suspense_list"),Sl=Ce("react.memo"),jh=Ce("react.lazy"),zh=Ce("react.block"),Ce("react.scope"),Hh=Ce("react.opaque.id"),ym=Ce("react.debug_trace_mode"),Wh=Ce("react.offscreen"),uc=Ce("react.legacy_hidden")}var pd=typeof Symbol=="function"&&Symbol.iterator;function Wi(t){return t===null||typeof t!="object"?null:(t=pd&&t[pd]||t["@@iterator"],typeof t=="function"?t:null)}var yu;function ss(t){if(yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yu=e&&e[1]||""}return`
`+yu+t}var xu=!1;function zo(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function m_(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=zo(t.type,!1),t;case 11:return t=zo(t.type.render,!1),t;case 22:return t=zo(t.type._render,!1),t;case 1:return t=zo(t.type,!0),t;default:return""}}function Kr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hn:return"Fragment";case Gn:return"Portal";case fs:return"Profiler";case Uh:return"StrictMode";case ds:return"Suspense";case Ca:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vh:return(t.displayName||"Context")+".Consumer";case Fh:return(t._context.displayName||"Context")+".Provider";case El:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Sl:return Kr(t.type);case zh:return Kr(t._render);case jh:e=t._payload,t=t._init;try{return Kr(t(e))}catch{}}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v_(t){var e=xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=v_(t))}function wm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Aa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function gd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _m(t,e){e=e.checked,e!=null&&Bh(t,"checked",e,!1)}function hc(t,e){_m(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||Aa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function y_(t){var e="";return _l.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function dc(t,e){return t=ye({children:void 0},e),(e=y_(e.children))&&(t.children=e),t}function Gr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function Em(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var gc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Sm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Im=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==gc.svg||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ps={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x_=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(t){x_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ps[e]=ps[t]})});function km(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ps.hasOwnProperty(t)&&ps[t]?(""+e).trim():e+"px"}function Tm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=km(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var w_=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,Xr=null,Qr=null;function xd(t){if(t=ao(t)){if(typeof xc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Rl(e),xc(t.stateNode,t.type,e))}}function Cm(t){Xr?Qr?Qr.push(t):Qr=[t]:Xr=t}function Am(){if(Xr){var t=Xr,e=Qr;if(Qr=Xr=null,xd(t),e)for(t=0;t<e.length;t++)xd(e[t])}}function Kh(t,e){return t(e)}function Rm(t,e,n,r,i){return t(e,n,r,i)}function Gh(){}var Nm=Kh,Xn=!1,wu=!1;function Xh(){(Xr!==null||Qr!==null)&&(Gh(),Am())}function __(t,e,n){if(wu)return t(e,n);wu=!0;try{return Nm(t,e,n)}finally{wu=!1,Xh()}}function Ds(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var wc=!1;if(tn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){wc=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{wc=!1}function E_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var gs=!1,Ra=null,Na=!1,_c=null,S_={onError:function(t){gs=!0,Ra=t}};function I_(t,e,n,r,i,s,o,a,l){gs=!1,Ra=null,E_.apply(S_,arguments)}function k_(t,e,n,r,i,s,o,a,l){if(I_.apply(this,arguments),gs){if(gs){var u=Ra;gs=!1,Ra=null}else throw Error(L(198));Na||(Na=!0,_c=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wd(t){if(Er(t)!==t)throw Error(L(188))}function T_(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wd(i),t;if(s===r)return wd(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Pm(t){if(t=T_(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function _d(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var bm,Qh,Om,Lm,Ec=!1,bt=[],wn=null,_n=null,En=null,Ps=new Map,bs=new Map,Ki=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Sd(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(e.pointerId)}}function Gi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Sc(e,n,r,i,s),e!==null&&(e=ao(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function C_(t,e,n,r,i){switch(e){case"focusin":return wn=Gi(wn,t,e,n,r,i),!0;case"dragenter":return _n=Gi(_n,t,e,n,r,i),!0;case"mouseover":return En=Gi(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ps.set(s,Gi(Ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bs.set(s,Gi(bs.get(s)||null,t,e,n,r,i)),!0}return!1}function A_(t){var e=Qn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Dm(n),e!==null){t.blockedOn=e,Lm(t.lanePriority,function(){Re.unstable_runWithPriority(t.priority,function(){Om(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=e0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=ao(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function Id(t,e,n){la(t)&&n.delete(e)}function R_(){for(Ec=!1;0<bt.length;){var t=bt[0];if(t.blockedOn!==null){t=ao(t.blockedOn),t!==null&&bm(t);break}for(var e=t.targetContainers;0<e.length;){var n=e0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&bt.shift()}wn!==null&&la(wn)&&(wn=null),_n!==null&&la(_n)&&(_n=null),En!==null&&la(En)&&(En=null),Ps.forEach(Id),bs.forEach(Id)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ec||(Ec=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,R_)))}function Mm(t){function e(i){return Xi(i,t)}if(0<bt.length){Xi(bt[0],t);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&Xi(wn,t),_n!==null&&Xi(_n,t),En!==null&&Xi(En,t),Ps.forEach(e),bs.forEach(e),n=0;n<Ki.length;n++)r=Ki[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&Ki.shift()}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ur={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},_u={},$m={};tn&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Il(t){if(_u[t])return _u[t];if(!Ur[t])return t;var e=Ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return _u[t]=e[n];return t}var Bm=Il("animationend"),Um=Il("animationiteration"),Fm=Il("animationstart"),Vm=Il("transitionend"),jm=new Map,Yh=new Map,N_=["abort","abort",Bm,"animationEnd",Um,"animationIteration",Fm,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Vm,"transitionEnd","waiting","waiting"];function Jh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Yh.set(r,e),jm.set(r,i),wr(i,[r])}}var D_=Re.unstable_now;D_();var he=8;function $r(t){if((1&t)!==0)return he=15,1;if((2&t)!==0)return he=14,2;if((4&t)!==0)return he=13,4;var e=24&t;return e!==0?(he=12,e):(t&32)!==0?(he=11,32):(e=192&t,e!==0?(he=10,e):(t&256)!==0?(he=9,256):(e=3584&t,e!==0?(he=8,e):(t&4096)!==0?(he=7,4096):(e=4186112&t,e!==0?(he=6,e):(e=62914560&t,e!==0?(he=5,e):t&67108864?(he=4,67108864):(t&134217728)!==0?(he=3,134217728):(e=805306368&t,e!==0?(he=2,e):(1073741824&t)!==0?(he=1,1073741824):(he=8,t))))))}function P_(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function b_(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(L(358,t))}}function Os(t,e){var n=t.pendingLanes;if(n===0)return he=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=he=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=$r(l),i=he):(a&=s,a!==0&&(r=$r(a),i=he))}else s=n&~o,s!==0?(r=$r(s),i=he):a!==0&&(r=$r(a),i=he);if(r===0)return 0;if(r=31-Pn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if($r(e),i<=he)return e;he=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function zm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Da(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Br(24&~e),t===0?Da(10,e):t;case 10:return t=Br(192&~e),t===0?Da(8,e):t;case 8:return t=Br(3584&~e),t===0&&(t=Br(4186112&~e),t===0&&(t=512)),t;case 2:return e=Br(805306368&~e),e===0&&(e=268435456),e}throw Error(L(358,t))}function Br(t){return t&-t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Pn(e),t[e]=n}var Pn=Math.clz32?Math.clz32:M_,O_=Math.log,L_=Math.LN2;function M_(t){return t===0?32:31-(O_(t)/L_|0)|0}var $_=Re.unstable_UserBlockingPriority,B_=Re.unstable_runWithPriority,ua=!0;function U_(t,e,n,r){Xn||Gh();var i=Zh,s=Xn;Xn=!0;try{Rm(i,t,e,n,r)}finally{(Xn=s)||Xh()}}function F_(t,e,n,r){B_($_,Zh.bind(null,t,e,n,r))}function Zh(t,e,n,r){if(ua){var i;if((i=(e&4)===0)&&0<bt.length&&-1<Ed.indexOf(t))t=Sc(null,t,e,n,r),bt.push(t);else{var s=e0(t,e,n,r);if(s===null)i&&Sd(t,r);else{if(i){if(-1<Ed.indexOf(t)){t=Sc(s,t,e,n,r),bt.push(t);return}if(C_(s,t,e,n,r))return;Sd(t,r)}nv(t,e,r,null,n)}}}}function e0(t,e,n,r){var i=qh(r);if(i=Qn(i),i!==null){var s=Er(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Dm(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return nv(t,e,r,i,n),null}var mn=null,t0=null,ca=null;function Hm(){if(ca)return ca;var t,e=t0,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ca=i.slice(t,1<r?1-r:void 0)}function ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function kd(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:kd,this.isPropagationStopped=kd,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},n0=dt(ki),oo=ye({},ki,{view:0,detail:0}),V_=dt(oo),Su,Iu,Qi,Tl=ye({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:r0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(Su=t.screenX-Qi.screenX,Iu=t.screenY-Qi.screenY):Iu=Su=0,Qi=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Td=dt(Tl),j_=ye({},Tl,{dataTransfer:0}),z_=dt(j_),H_=ye({},oo,{relatedTarget:0}),ku=dt(H_),W_=ye({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=dt(W_),K_=ye({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G_=dt(K_),X_=ye({},ki,{data:0}),Cd=dt(X_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J_[t])?!!e[t]:!1}function r0(){return Z_}var eE=ye({},oo,{key:function(t){if(t.key){var e=Q_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:r0,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=dt(eE),nE=ye({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=dt(nE),rE=ye({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:r0}),iE=dt(rE),sE=ye({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=dt(sE),aE=ye({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=dt(aE),uE=[9,13,27,32],i0=tn&&"CompositionEvent"in window,ms=null;tn&&"documentMode"in document&&(ms=document.documentMode);var cE=tn&&"TextEvent"in window&&!ms,Wm=tn&&(!i0||ms&&8<ms&&11>=ms),Rd=String.fromCharCode(32),Nd=!1;function qm(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function hE(t,e){switch(t){case"compositionend":return Km(e);case"keypress":return e.which!==32?null:(Nd=!0,Rd);case"textInput":return t=e.data,t===Rd&&Nd?null:t;default:return null}}function fE(t,e){if(Fr)return t==="compositionend"||!i0&&qm(t,e)?(t=Hm(),ca=t0=mn=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dE[t.type]:e==="textarea"}function Gm(t,e,n,r){Cm(r),e=Pa(e,"onChange"),0<e.length&&(n=new n0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vs=null,Ls=null;function pE(t){Zm(t,0)}function Cl(t){var e=jr(t);if(wm(e))return t}function gE(t,e){if(t==="change")return e}var Xm=!1;if(tn){var Tu;if(tn){var Cu="oninput"in document;if(!Cu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Cu=typeof Pd.oninput=="function"}Tu=Cu}else Tu=!1;Xm=Tu&&(!document.documentMode||9<document.documentMode)}function bd(){vs&&(vs.detachEvent("onpropertychange",Qm),Ls=vs=null)}function Qm(t){if(t.propertyName==="value"&&Cl(Ls)){var e=[];if(Gm(e,Ls,t,qh(t)),t=pE,Xn)t(e);else{Xn=!0;try{Kh(t,e)}finally{Xn=!1,Xh()}}}}function mE(t,e,n){t==="focusin"?(bd(),vs=e,Ls=n,vs.attachEvent("onpropertychange",Qm)):t==="focusout"&&bd()}function vE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Ls)}function yE(t,e){if(t==="click")return Cl(e)}function xE(t,e){if(t==="input"||t==="change")return Cl(e)}function wE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:wE,_E=Object.prototype.hasOwnProperty;function Ms(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!_E.call(e,n[r])||!mt(t[n[r]],e[n[r]]))return!1;return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,e){var n=Od(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Od(n)}}function Ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Md(){for(var t=window,e=Aa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Aa(t.document)}return e}function Ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var EE=tn&&"documentMode"in document&&11>=document.documentMode,Vr=null,kc=null,ys=null,Tc=!1;function $d(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||Vr==null||Vr!==Aa(r)||(r=Vr,"selectionStart"in r&&Ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ys&&Ms(ys,r)||(ys=r,r=Pa(kc,"onSelect"),0<r.length&&(e=new n0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vr)))}Jh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Jh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Jh(N_,2);for(var Bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Au=0;Au<Bd.length;Au++)Yh.set(Bd[Au],0);ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Ud(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k_(r,e,void 0,t),t.currentTarget=null}function Zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ud(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ud(i,a,u),s=l}}}if(Na)throw t=_c,Na=!1,_c=null,t}function de(t,e){var n=iv(e),r=t+"__bubble";n.has(r)||(tv(e,t,2,!1),n.add(r))}var Fd="_reactListening"+Math.random().toString(36).slice(2);function ev(t){t[Fd]||(t[Fd]=!0,vm.forEach(function(e){Jm.has(e)||Vd(e,!1,t,null),Vd(e,!0,t,null)}))}function Vd(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Jm.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=iv(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),tv(s,t,i,e),o.add(a))}function tv(t,e,n,r){var i=Yh.get(e);switch(i===void 0?2:i){case 0:i=U_;break;case 1:i=F_;break;default:i=Zh}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nv(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}__(function(){var u=s,c=qh(n),d=[];e:{var h=jm.get(t);if(h!==void 0){var g=n0,y=t;switch(t){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":g=tE;break;case"focusin":y="focus",g=ku;break;case"focusout":y="blur",g=ku;break;case"beforeblur":case"afterblur":g=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iE;break;case Bm:case Um:case Fm:g=q_;break;case Vm:g=oE;break;case"scroll":g=V_;break;case"wheel":g=lE;break;case"copy":case"cut":case"paste":g=G_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ad}var w=(e&4)!==0,p=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,v;f!==null;){v=f;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=Ds(f,m),x!=null&&w.push($s(f,x,v)))),p)break;f=f.return}0<w.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(Qn(y)||y[Ti]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Qn(y):null,y!==null&&(p=Er(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=Td,x="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Ad,x="onPointerLeave",m="onPointerEnter",f="pointer"),p=g==null?h:jr(g),v=y==null?h:jr(y),h=new w(x,f+"leave",g,n,c),h.target=p,h.relatedTarget=v,x=null,Qn(c)===u&&(w=new w(m,f+"enter",y,n,c),w.target=v,w.relatedTarget=p,x=w),p=x,g&&y)t:{for(w=g,m=y,f=0,v=w;v;v=Lr(v))f++;for(v=0,x=m;x;x=Lr(x))v++;for(;0<f-v;)w=Lr(w),f--;for(;0<v-f;)m=Lr(m),v--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Lr(w),m=Lr(m)}w=null}else w=null;g!==null&&jd(d,h,g,w,!1),y!==null&&p!==null&&jd(d,p,y,w,!0)}}e:{if(h=u?jr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=gE;else if(Dd(h))if(Xm)I=xE;else{I=vE;var _=mE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=yE);if(I&&(I=I(t,u))){Gm(d,I,n,c);break e}_&&_(t,h,u),t==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&fc(h,"number",h.value)}switch(_=u?jr(u):window,t){case"focusin":(Dd(_)||_.contentEditable==="true")&&(Vr=_,kc=u,ys=null);break;case"focusout":ys=kc=Vr=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,$d(d,n,c);break;case"selectionchange":if(EE)break;case"keydown":case"keyup":$d(d,n,c)}var E;if(i0)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Fr?qm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Wm&&n.locale!=="ko"&&(Fr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Fr&&(E=Hm()):(mn=c,t0="value"in mn?mn.value:mn.textContent,Fr=!0)),_=Pa(u,k),0<_.length&&(k=new Cd(k,t,null,n,c),d.push({event:k,listeners:_}),E?k.data=E:(E=Km(n),E!==null&&(k.data=E)))),(E=cE?hE(t,n):fE(t,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(c=new Cd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Zm(d,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ds(t,n),s!=null&&r.unshift($s(t,s,i)),s=Ds(t,e),s!=null&&r.push($s(t,s,i))),t=t.return}return r}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ds(n,s),l!=null&&o.unshift($s(n,l,a))):i||(l=Ds(n,s),l!=null&&o.push($s(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function ba(){}var Ru=null,Nu=null;function rv(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Cc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0;function s0(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Hd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Du=0;function IE(t){return{$$typeof:Hh,toString:t,valueOf:t}}var Al=Math.random().toString(36).slice(2),vn="__reactFiber$"+Al,Oa="__reactProps$"+Al,Ti="__reactContainer$"+Al,Wd="__reactEvents$"+Al;function Qn(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hd(t);t!==null;){if(n=t[vn])return n;t=Hd(t)}return e}t=n,n=t.parentNode}return null}function ao(t){return t=t[vn]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Rl(t){return t[Oa]||null}function iv(t){var e=t[Wd];return e===void 0&&(e=t[Wd]=new Set),e}var Ac=[],zr=-1;function Fn(t){return{current:t}}function pe(t){0>zr||(t.current=Ac[zr],Ac[zr]=null,zr--)}function _e(t,e){zr++,Ac[zr]=t.current,t.current=e}var bn={},Ge=Fn(bn),st=Fn(!1),ar=bn;function hi(t,e){var n=t.type.contextTypes;if(!n)return bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function La(){pe(st),pe(Ge)}function qd(t,e,n){if(Ge.current!==bn)throw Error(L(168));_e(Ge,e),_e(st,n)}function sv(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Kr(e)||"Unknown",i));return ye({},n,r)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,ar=Ge.current,_e(Ge,t),_e(st,st.current),!0}function Kd(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=sv(t,e,ar),r.__reactInternalMemoizedMergedChildContext=t,pe(st),pe(Ge),_e(Ge,t)):pe(st),_e(st,n)}var o0=null,ir=null,kE=Re.unstable_runWithPriority,a0=Re.unstable_scheduleCallback,Rc=Re.unstable_cancelCallback,TE=Re.unstable_shouldYield,Gd=Re.unstable_requestPaint,Nc=Re.unstable_now,CE=Re.unstable_getCurrentPriorityLevel,Nl=Re.unstable_ImmediatePriority,ov=Re.unstable_UserBlockingPriority,av=Re.unstable_NormalPriority,lv=Re.unstable_LowPriority,uv=Re.unstable_IdlePriority,Pu={},AE=Gd!==void 0?Gd:function(){},qt=null,da=null,bu=!1,Xd=Nc(),We=1e4>Xd?Nc:function(){return Nc()-Xd};function fi(){switch(CE()){case Nl:return 99;case ov:return 98;case av:return 97;case lv:return 96;case uv:return 95;default:throw Error(L(332))}}function cv(t){switch(t){case 99:return Nl;case 98:return ov;case 97:return av;case 96:return lv;case 95:return uv;default:throw Error(L(332))}}function lr(t,e){return t=cv(t),kE(t,e)}function Bs(t,e,n){return t=cv(t),a0(t,e,n)}function Ht(){if(da!==null){var t=da;da=null,Rc(t)}hv()}function hv(){if(!bu&&qt!==null){bu=!0;var t=0;try{var e=qt;lr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),qt=null}catch(n){throw qt!==null&&(qt=qt.slice(t+1)),a0(Nl,Ht),n}finally{bu=!1}}}var RE=_r.ReactCurrentBatchConfig;function Rt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ma=Fn(null),$a=null,Hr=null,Ba=null;function l0(){Ba=Hr=$a=null}function u0(t){var e=Ma.current;pe(Ma),t.type._context._currentValue=e}function fv(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Jr(t,e){$a=t,Ba=Hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Dt=!0),t.firstContext=null)}function Et(t,e){if(Ba!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Ba=t,e=1073741823),e={context:t,observedBits:e,next:null},Hr===null){if($a===null)throw Error(L(308));Hr=e,$a.dependencies={lanes:0,firstContext:e,responders:null}}else Hr=Hr.next=e;return t._currentValue}var cn=!1;function c0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Qd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Us(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var d=c.lastBaseUpdate;d!==o&&(d===null?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(s!==null){d=i.baseState,o=0,c=u=l=null;do{a=s.lane;var h=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,a);break e}d=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(h,d,a):g,a==null)break e;d=ye({},d,a);break e;case 2:cn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else h={eventTime:h,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,uo|=o,t.lanes=o,t.memoizedState=d}}function Yd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var pv=new _l.Component().refs;function Ua(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=kn(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),In(t,s),Tn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=kn(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),In(t,s),Tn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=kn(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),In(t,i),Tn(t,r,n)}};function Jd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,r)||!Ms(i,s):!0}function gv(t,e,n){var r=!1,i=bn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=ot(e)?ar:Ge.current,r=e.contextTypes,s=(r=r!=null)?hi(t,i):bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=pv,c0(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=ot(e)?ar:Ge.current,i.context=hi(t,s)),Us(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ua(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Us(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Go=Array.isArray;function Yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===pv&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Xo(t,e){if(t.type!=="textarea")throw Error(L(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function mv(t){function e(p,m){if(t){var f=p.lastEffect;f!==null?(f.nextEffect=m,p.lastEffect=m):p.firstEffect=p.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Ln(p,m),p.index=0,p.sibling=null,p}function s(p,m,f){return p.index=f,t?(f=p.alternate,f!==null?(f=f.index,f<m?(p.flags=2,m):f):(p.flags=2,m)):m}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,m,f,v){return m===null||m.tag!==6?(m=Bu(f,p.mode,v),m.return=p,m):(m=i(m,f),m.return=p,m)}function l(p,m,f,v){return m!==null&&m.elementType===f.type?(v=i(m,f.props),v.ref=Yi(p,m,f),v.return=p,v):(v=va(f.type,f.key,f.props,null,p.mode,v),v.ref=Yi(p,m,f),v.return=p,v)}function u(p,m,f,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=Uu(f,p.mode,v),m.return=p,m):(m=i(m,f.children||[]),m.return=p,m)}function c(p,m,f,v,x){return m===null||m.tag!==7?(m=ni(f,p.mode,v,x),m.return=p,m):(m=i(m,f),m.return=p,m)}function d(p,m,f){if(typeof m=="string"||typeof m=="number")return m=Bu(""+m,p.mode,f),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case is:return f=va(m.type,m.key,m.props,null,p.mode,f),f.ref=Yi(p,null,m),f.return=p,f;case Gn:return m=Uu(m,p.mode,f),m.return=p,m}if(Go(m)||Wi(m))return m=ni(m,p.mode,f,null),m.return=p,m;Xo(p,m)}return null}function h(p,m,f,v){var x=m!==null?m.key:null;if(typeof f=="string"||typeof f=="number")return x!==null?null:a(p,m,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case is:return f.key===x?f.type===hn?c(p,m,f.props.children,v,x):l(p,m,f,v):null;case Gn:return f.key===x?u(p,m,f,v):null}if(Go(f)||Wi(f))return x!==null?null:c(p,m,f,v,null);Xo(p,f)}return null}function g(p,m,f,v,x){if(typeof v=="string"||typeof v=="number")return p=p.get(f)||null,a(m,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case is:return p=p.get(v.key===null?f:v.key)||null,v.type===hn?c(m,p,v.props.children,x,v.key):l(m,p,v,x);case Gn:return p=p.get(v.key===null?f:v.key)||null,u(m,p,v,x)}if(Go(v)||Wi(v))return p=p.get(f)||null,c(m,p,v,x,null);Xo(m,v)}return null}function y(p,m,f,v){for(var x=null,I=null,_=m,E=m=0,k=null;_!==null&&E<f.length;E++){_.index>E?(k=_,_=null):k=_.sibling;var C=h(p,_,f[E],v);if(C===null){_===null&&(_=k);break}t&&_&&C.alternate===null&&e(p,_),m=s(C,m,E),I===null?x=C:I.sibling=C,I=C,_=k}if(E===f.length)return n(p,_),x;if(_===null){for(;E<f.length;E++)_=d(p,f[E],v),_!==null&&(m=s(_,m,E),I===null?x=_:I.sibling=_,I=_);return x}for(_=r(p,_);E<f.length;E++)k=g(_,p,E,f[E],v),k!==null&&(t&&k.alternate!==null&&_.delete(k.key===null?E:k.key),m=s(k,m,E),I===null?x=k:I.sibling=k,I=k);return t&&_.forEach(function(S){return e(p,S)}),x}function w(p,m,f,v){var x=Wi(f);if(typeof x!="function")throw Error(L(150));if(f=x.call(f),f==null)throw Error(L(151));for(var I=x=null,_=m,E=m=0,k=null,C=f.next();_!==null&&!C.done;E++,C=f.next()){_.index>E?(k=_,_=null):k=_.sibling;var S=h(p,_,C.value,v);if(S===null){_===null&&(_=k);break}t&&_&&S.alternate===null&&e(p,_),m=s(S,m,E),I===null?x=S:I.sibling=S,I=S,_=k}if(C.done)return n(p,_),x;if(_===null){for(;!C.done;E++,C=f.next())C=d(p,C.value,v),C!==null&&(m=s(C,m,E),I===null?x=C:I.sibling=C,I=C);return x}for(_=r(p,_);!C.done;E++,C=f.next())C=g(_,p,E,C.value,v),C!==null&&(t&&C.alternate!==null&&_.delete(C.key===null?E:C.key),m=s(C,m,E),I===null?x=C:I.sibling=C,I=C);return t&&_.forEach(function(A){return e(p,A)}),x}return function(p,m,f,v){var x=typeof f=="object"&&f!==null&&f.type===hn&&f.key===null;x&&(f=f.props.children);var I=typeof f=="object"&&f!==null;if(I)switch(f.$$typeof){case is:e:{for(I=f.key,x=m;x!==null;){if(x.key===I){switch(x.tag){case 7:if(f.type===hn){n(p,x.sibling),m=i(x,f.props.children),m.return=p,p=m;break e}break;default:if(x.elementType===f.type){n(p,x.sibling),m=i(x,f.props),m.ref=Yi(p,x,f),m.return=p,p=m;break e}}n(p,x);break}else e(p,x);x=x.sibling}f.type===hn?(m=ni(f.props.children,p.mode,v,f.key),m.return=p,p=m):(v=va(f.type,f.key,f.props,null,p.mode,v),v.ref=Yi(p,m,f),v.return=p,p=v)}return o(p);case Gn:e:{for(x=f.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(p,m.sibling),m=i(m,f.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else e(p,m);m=m.sibling}m=Uu(f,p.mode,v),m.return=p,p=m}return o(p)}if(typeof f=="string"||typeof f=="number")return f=""+f,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,f),m.return=p,p=m):(n(p,m),m=Bu(f,p.mode,v),m.return=p,p=m),o(p);if(Go(f))return y(p,m,f,v);if(Wi(f))return w(p,m,f,v);if(I&&Xo(p,f),typeof f=="undefined"&&!x)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(L(152,Kr(p.type)||"Component"))}return n(p,m)}}var Fa=mv(!0),vv=mv(!1),lo={},Mt=Fn(lo),Fs=Fn(lo),Vs=Fn(lo);function Yn(t){if(t===lo)throw Error(L(174));return t}function Pc(t,e){switch(_e(Vs,e),_e(Fs,t),_e(Mt,lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mc(e,t)}pe(Mt),_e(Mt,e)}function di(){pe(Mt),pe(Fs),pe(Vs)}function ep(t){Yn(Vs.current);var e=Yn(Mt.current),n=mc(e,t.type);e!==n&&(_e(Fs,t),_e(Mt,n))}function h0(t){Fs.current===t&&(pe(Mt),pe(Fs))}var we=Fn(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gt=null,yn=null,$t=!1;function yv(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function bc(t){if($t){var e=yn;if(e){var n=e;if(!tp(t,e)){if(e=Yr(n.nextSibling),!e||!tp(t,e)){t.flags=t.flags&-1025|2,$t=!1,Gt=t;return}yv(Gt,n)}Gt=t,yn=Yr(e.firstChild)}else t.flags=t.flags&-1025|2,$t=!1,Gt=t}}function np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Qo(t){if(t!==Gt)return!1;if(!$t)return np(t),$t=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Cc(e,t.memoizedProps))for(e=yn;e;)yv(t,e),e=Yr(e.nextSibling);if(np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Gt?Yr(t.stateNode.nextSibling):null;return!0}function Ou(){yn=Gt=null,$t=!1}var Zr=[];function f0(){for(var t=0;t<Zr.length;t++)Zr[t]._workInProgressVersionPrimary=null;Zr.length=0}var xs=_r.ReactCurrentDispatcher,yt=_r.ReactCurrentBatchConfig,js=0,Ee=null,ze=null,Oe=null,ja=!1,ws=!1;function et(){throw Error(L(321))}function d0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mt(t[n],e[n]))return!1;return!0}function p0(t,e,n,r,i,s){if(js=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xs.current=t===null||t.memoizedState===null?DE:PE,t=n(r,i),ws){s=0;do{if(ws=!1,!(25>s))throw Error(L(301));s+=1,Oe=ze=null,e.updateQueue=null,xs.current=bE,t=n(r,i)}while(ws)}if(xs.current=qa,e=ze!==null&&ze.next!==null,js=0,Oe=ze=Ee=null,ja=!1,e)throw Error(L(300));return t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ee.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Sr(){if(ze===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Oe===null?Ee.memoizedState:Oe.next;if(e!==null)Oe=e,ze=t;else{if(t===null)throw Error(L(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Oe===null?Ee.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Ot(t,e){return typeof e=="function"?e(t):e}function Ji(t){var e=Sr(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((js&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ee.lanes|=u,uo|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,mt(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Zi(t){var e=Sr(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mt(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rp(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(js&t)===t)&&(e._workInProgressVersionPrimary=r,Zr.push(e))),t)return n(e._source);throw Zr.push(e),Error(L(350))}function xv(t,e,n,r){var i=Je;if(i===null)throw Error(L(349));var s=e._getVersion,o=s(e._source),a=xs.current,l=a.useState(function(){return rp(i,e,n)}),u=l[1],c=l[0];l=Oe;var d=t.memoizedState,h=d.refs,g=h.getSnapshot,y=d.source;d=d.subscribe;var w=Ee;return t.memoizedState={refs:h,source:e,subscribe:r},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var p=s(e._source);if(!mt(o,p)){p=n(e._source),mt(c,p)||(u(p),p=kn(w),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var m=i.entanglements,f=p;0<f;){var v=31-Pn(f),x=1<<v;m[v]|=p,f&=~x}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=h.getSnapshot,m=h.setSnapshot;try{m(p(e._source));var f=kn(w);i.mutableReadLanes|=f&i.pendingLanes}catch(v){m(function(){throw v})}})},[e,r]),mt(g,n)&&mt(y,e)&&mt(d,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Ot,lastRenderedState:c},t.dispatch=u=v0.bind(null,Ee,t),l.queue=t,l.baseQueue=null,c=rp(i,e,n),l.memoizedState=l.baseState=c),c}function wv(t,e,n){var r=Sr();return xv(r,t,e,n)}function es(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Ot,lastRenderedState:t},t=t.dispatch=v0.bind(null,Ee,t),[e.memoizedState,t]}function za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ip(t){var e=Jn();return t={current:t},e.memoizedState=t}function Ha(){return Sr().memoizedState}function Oc(t,e,n,r){var i=Jn();Ee.flags|=t,i.memoizedState=za(1|e,n,void 0,r===void 0?null:r)}function g0(t,e,n,r){var i=Sr();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&d0(r,o.deps)){za(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=za(1|e,n,s,r)}function sp(t,e){return Oc(516,4,t,e)}function Wa(t,e){return g0(516,4,t,e)}function _v(t,e){return g0(4,2,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sv(t,e,n){return n=n!=null?n.concat([t]):null,g0(4,2,Ev.bind(null,e,t),n)}function m0(){}function Iv(t,e){var n=Sr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&d0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kv(t,e){var n=Sr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&d0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NE(t,e){var n=fi();lr(98>n?98:n,function(){t(!0)}),lr(97<n?97:n,function(){var r=yt.transition;yt.transition=1;try{t(!1),e()}finally{yt.transition=r}})}function v0(t,e,n){var r=ut(),i=kn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ee||o!==null&&o===Ee)ws=ja=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,mt(l,a))return}catch{}finally{}Tn(t,i,r)}}var qa={readContext:Et,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useOpaqueIdentifier:et,unstable_isNewReconciler:!1},DE={readContext:Et,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,2,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=v0.bind(null,Ee,t),[r.memoizedState,t]},useRef:ip,useState:es,useDebugValue:m0,useDeferredValue:function(t){var e=es(t),n=e[0],r=e[1];return sp(function(){var i=yt.transition;yt.transition=1;try{r(t)}finally{yt.transition=i}},[t]),n},useTransition:function(){var t=es(!1),e=t[0];return t=NE.bind(null,t[1]),ip(t),[t,e]},useMutableSource:function(t,e,n){var r=Jn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},xv(r,t,e,n)},useOpaqueIdentifier:function(){if($t){var t=!1,e=IE(function(){throw t||(t=!0,n("r:"+(Du++).toString(36))),Error(L(355))}),n=es(e)[1];return(Ee.mode&2)===0&&(Ee.flags|=516,za(5,function(){n("r:"+(Du++).toString(36))},void 0,null)),e}return e="r:"+(Du++).toString(36),es(e),e},unstable_isNewReconciler:!1},PE={readContext:Et,useCallback:Iv,useContext:Et,useEffect:Wa,useImperativeHandle:Sv,useLayoutEffect:_v,useMemo:kv,useReducer:Ji,useRef:Ha,useState:function(){return Ji(Ot)},useDebugValue:m0,useDeferredValue:function(t){var e=Ji(Ot),n=e[0],r=e[1];return Wa(function(){var i=yt.transition;yt.transition=1;try{r(t)}finally{yt.transition=i}},[t]),n},useTransition:function(){var t=Ji(Ot)[0];return[Ha().current,t]},useMutableSource:wv,useOpaqueIdentifier:function(){return Ji(Ot)[0]},unstable_isNewReconciler:!1},bE={readContext:Et,useCallback:Iv,useContext:Et,useEffect:Wa,useImperativeHandle:Sv,useLayoutEffect:_v,useMemo:kv,useReducer:Zi,useRef:Ha,useState:function(){return Zi(Ot)},useDebugValue:m0,useDeferredValue:function(t){var e=Zi(Ot),n=e[0],r=e[1];return Wa(function(){var i=yt.transition;yt.transition=1;try{r(t)}finally{yt.transition=i}},[t]),n},useTransition:function(){var t=Zi(Ot)[0];return[Ha().current,t]},useMutableSource:wv,useOpaqueIdentifier:function(){return Zi(Ot)[0]},unstable_isNewReconciler:!1},OE=_r.ReactCurrentOwner,Dt=!1;function tt(t,e,n,r){e.child=t===null?vv(e,null,n,r):Fa(e,t.child,n,r)}function op(t,e,n,r,i){n=n.render;var s=e.ref;return Jr(e,i),r=p0(t,e,n,r,s,i),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Xt(t,e,i)):(e.flags|=1,tt(t,e,r,i),e.child)}function ap(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!S0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Tv(t,e,o,r,i,s)):(t=va(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ms,n(i,r)&&t.ref===e.ref)?Xt(t,e,s):(e.flags|=1,t=Ln(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Tv(t,e,n,r,i,s){if(t!==null&&Ms(t.memoizedProps,r)&&t.ref===e.ref)if(Dt=!1,(s&i)!==0)(t.flags&16384)!==0&&(Dt=!0);else return e.lanes=t.lanes,Xt(t,e,s);return Lc(t,e,n,r,s)}function Lu(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Jo(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Jo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Jo(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Jo(e,r);return tt(t,e,i,n),e.child}function Cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Lc(t,e,n,r,i){var s=ot(n)?ar:Ge.current;return s=hi(e,s),Jr(e,i),n=p0(t,e,n,r,s,i),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Xt(t,e,i)):(e.flags|=1,tt(t,e,n,i),e.child)}function lp(t,e,n,r,i){if(ot(n)){var s=!0;fa(e)}else s=!1;if(Jr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),gv(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=ot(n)?ar:Ge.current,u=hi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zd(e,o,r,u),cn=!1;var h=e.memoizedState;o.state=h,Us(e,r,o,i),l=e.memoizedState,a!==r||h!==l||st.current||cn?(typeof c=="function"&&(Ua(e,n,c,r),l=e.memoizedState),(a=cn||Jd(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,dv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=ot(n)?ar:Ge.current,l=hi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Zd(e,o,r,l),cn=!1,h=e.memoizedState,o.state=h,Us(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||st.current||cn?(typeof g=="function"&&(Ua(e,n,g,r),y=e.memoizedState),(u=cn||Jd(e,n,u,r,h,y,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),r=!1)}return Mc(t,e,n,r,s,i)}function Mc(t,e,n,r,i,s){Cv(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&Kd(e,n,!1),Xt(t,e,s);r=e.stateNode,OE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fa(e,t.child,null,s),e.child=Fa(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&Kd(e,n,!0),e.child}function up(t){var e=t.stateNode;e.pendingContext?qd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qd(t,e.context,!1),Pc(t,e.containerInfo)}var Yo={dehydrated:null,retryLane:0};function cp(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),_e(we,i&1),t===null?(r.fallback!==void 0&&bc(e),t=r.children,i=r.fallback,s?(t=hp(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Yo,t):typeof r.unstable_expectedLoadTime=="number"?(t=hp(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Yo,e.lanes=33554432,t):(n=I0({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=dp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Yo,r):(n=fp(t,e,r.children,n),e.memoizedState=null,n):s?(r=dp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Yo,r):(n=fp(t,e,r.children,n),e.memoizedState=null,n)}function hp(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=I0(e,i,0,null),n=ni(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function fp(t,e,n,r){var i=t.child;return t=i.sibling,n=Ln(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function dp(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Ln(o,a),t!==null?r=Ln(t,r):(r=ni(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function pp(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),fv(t.return,e)}function Mu(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function gp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=we.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n);else if(t.tag===19)pp(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(we,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mu(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mu(e,!0,n,null,s,e.lastEffect);break;case"together":Mu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),uo|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Av,$c,Rv,Nv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};Rv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(Mt.current);var s=null;switch(n){case"input":i=cc(t,i),r=cc(t,r),s=[];break;case"option":i=dc(t,i),r=dc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=pc(t,i),r=pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ba)}vc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Hh?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Nv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ts(t,e){if(!$t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function LE(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ot(e.type)&&La(),null;case 3:return di(),pe(st),pe(Ge),f0(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:r.hydrate||(e.flags|=256)),$c(e),null;case 5:h0(e);var i=Yn(Vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(L(166));return null}if(t=Yn(Mt.current),Qo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[Oa]=s,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(t=0;t<os.length;t++)de(os[t],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":gd(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":vd(r,s),de("invalid",r)}vc(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Rs.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&de("scroll",r));switch(n){case"input":Ho(r),md(r,s,!0);break;case"textarea":Ho(r),yd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ba)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===gc.html&&(t=Sm(n)),t===gc.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[Oa]=r,Av(t,e,!1,!1),e.stateNode=t,o=yc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<os.length;i++)de(os[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":gd(t,r),i=cc(t,r),de("invalid",t);break;case"option":i=dc(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),de("invalid",t);break;case"textarea":vd(t,r),i=pc(t,r),de("invalid",t);break;default:i=r}vc(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Im(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ns(t,l):typeof l=="number"&&Ns(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Bh(t,s,l,o))}switch(n){case"input":Ho(t),md(t,r,!1);break;case"textarea":Ho(t),yd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ba)}rv(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));n=Yn(Vs.current),Yn(Mt.current),Qo(e)?(r=e.stateNode,n=e.memoizedProps,r[vn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r)}return null;case 13:return pe(we),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Qo(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(we.current&1)!==0?Me===0&&(Me=3):((Me===0||Me===3)&&(Me=4),Je===null||(uo&134217727)===0&&(Ai&134217727)===0||ei(Je,qe))),(r||n)&&(e.flags|=4),null);case 4:return di(),$c(e),t===null&&ev(e.stateNode.containerInfo),null;case 10:return u0(e),null;case 17:return ot(e.type)&&La(),null;case 19:if(pe(we),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)ts(r,!1);else{if(Me!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Va(t),o!==null){for(e.flags|=64,ts(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(we,we.current&1|2),e.child}t=t.sibling}r.tail!==null&&We()>zc&&(e.flags|=64,s=!0,ts(r,!1),e.lanes=33554432)}else{if(!s)if(t=Va(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ts(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!$t)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*We()-r.renderingStartTime>zc&&n!==1073741824&&(e.flags|=64,s=!0,ts(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=We(),n.sibling=null,e=we.current,_e(we,s?e&1|2:e&1),n):null;case 23:case 24:return E0(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(L(156,e.tag))}function ME(t){switch(t.tag){case 1:ot(t.type)&&La();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(di(),pe(st),pe(Ge),f0(),e=t.flags,(e&64)!==0)throw Error(L(285));return t.flags=e&-4097|64,t;case 5:return h0(t),null;case 13:return pe(we),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return pe(we),null;case 4:return di(),null;case 10:return u0(t),null;case 23:case 24:return E0(),null;default:return null}}function y0(t,e){try{var n="",r=e;do n+=m_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function Dv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ga||(Ga=!0,Hc=r),Bc(t,e)},n}function Pv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Bc(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this),Bc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var BE=typeof WeakSet=="function"?WeakSet:Set;function mp(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Cn(t,n)}else e.current=null}function UE(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Rt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&s0(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(L(163))}function FE(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Vv(n,t),GE(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Rt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Yd(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yd(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&rv(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Mm(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(L(163))}function vp(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=km("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function yp(t,e){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(o0,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Vv(e,n);else{r=e;try{i()}catch(s){Cn(r,s)}}n=n.next}while(n!==t)}break;case 1:if(mp(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Cn(e,s)}break;case 5:mp(e);break;case 4:bv(t,e)}}function xp(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function wp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:{for(var e=t.return;e!==null;){if(wp(e))break e;e=e.return}throw Error(L(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(L(161))}n.flags&16&&(Ns(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||wp(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Uc(t,n,e):Fc(t,n,e)}function Uc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ba));else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Fc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}function bv(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(L(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(yp(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(yp(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function $u(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Oa]=r,t==="input"&&r.type==="radio"&&r.name!=null&&_m(n,r),yc(t,i),e=yc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Tm(n,a):o==="dangerouslySetInnerHTML"?Im(n,a):o==="children"?Ns(n,a):Bh(n,o,a,e)}switch(t){case"input":hc(n,r);break;case"textarea":Em(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Gr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Gr(n,!!r.multiple,r.defaultValue,!0):Gr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(L(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Mm(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(_0=We(),vp(e.child,!0)),Ep(e);return;case 19:Ep(e);return;case 17:return;case 23:case 24:vp(e,e.memoizedState!==null);return}throw Error(L(163))}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BE),e.forEach(function(r){var i=YE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function VE(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var jE=Math.ceil,Ka=_r.ReactCurrentDispatcher,x0=_r.ReactCurrentOwner,H=0,Je=null,Te=null,qe=0,ur=0,Vc=Fn(0),Me=0,Pl=null,Ci=0,uo=0,Ai=0,w0=0,jc=null,_0=0,zc=1/0;function Ri(){zc=We()+500}var U=null,Ga=!1,Hc=null,Lt=null,On=!1,_s=null,as=90,Wc=[],qc=[],Zt=null,Es=0,Kc=null,pa=-1,Kt=0,ga=0,Ss=null,ma=!1;function ut(){return(H&48)!==0?We():pa!==-1?pa:pa=We()}function kn(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return fi()===99?1:2;if(Kt===0&&(Kt=Ci),RE.transition!==0){ga!==0&&(ga=jc!==null?jc.pendingLanes:0),t=Kt;var e=4186112&~ga;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=fi(),(H&4)!==0&&t===98?t=Da(12,Kt):(t=P_(t),t=Da(t,Kt)),t}function Tn(t,e,n){if(50<Es)throw Es=0,Kc=null,Error(L(185));if(t=bl(t,e),t===null)return null;kl(t,e,n),t===Je&&(Ai|=e,Me===4&&ei(t,qe));var r=fi();e===1?(H&8)!==0&&(H&48)===0?Gc(t):(St(t,n),H===0&&(Ri(),Ht())):((H&4)===0||r!==98&&r!==99||(Zt===null?Zt=new Set([t]):Zt.add(t)),St(t,n)),jc=t}function bl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function St(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Pn(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,$r(l);var c=he;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Os(t,t===Je?qe:0),e=he,r===0)n!==null&&(n!==Pu&&Rc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Pu&&Rc(n)}e===15?(n=Gc.bind(null,t),qt===null?(qt=[n],da=a0(Nl,hv)):qt.push(n),n=Pu):e===14?n=Bs(99,Gc.bind(null,t)):(n=b_(e),n=Bs(n,Ov.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function Ov(t){if(pa=-1,ga=Kt=0,(H&48)!==0)throw Error(L(327));var e=t.callbackNode;if(Vn()&&t.callbackNode!==e)return null;var n=Os(t,t===Je?qe:0);if(n===0)return null;var r=n,i=H;H|=16;var s=Bv();(Je!==t||qe!==r)&&(Ri(),ti(t,r));do try{WE();break}catch(a){$v(t,a)}while(1);if(l0(),Ka.current=s,H=i,Te!==null?r=0:(Je=null,qe=0,r=Me),(Ci&Ai)!==0)ti(t,0);else if(r!==0){if(r===2&&(H|=64,t.hydrate&&(t.hydrate=!1,s0(t.containerInfo)),n=zm(t),n!==0&&(r=ls(t,n))),r===1)throw e=Pl,ti(t,0),ei(t,n),St(t,We()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(L(345));case 2:Wn(t);break;case 3:if(ei(t,n),(n&62914560)===n&&(r=_0+500-We(),10<r)){if(Os(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zd(Wn.bind(null,t),r);break}Wn(t);break;case 4:if(ei(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Pn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=We()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jE(n/1960))-n,10<n){t.timeoutHandle=zd(Wn.bind(null,t),n);break}Wn(t);break;case 5:Wn(t);break;default:throw Error(L(329))}}return St(t,We()),t.callbackNode===e?Ov.bind(null,t):null}function ei(t,e){for(e&=~w0,e&=~Ai,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function Gc(t){if((H&48)!==0)throw Error(L(327));if(Vn(),t===Je&&(t.expiredLanes&qe)!==0){var e=qe,n=ls(t,e);(Ci&Ai)!==0&&(e=Os(t,e),n=ls(t,e))}else e=Os(t,0),n=ls(t,e);if(t.tag!==0&&n===2&&(H|=64,t.hydrate&&(t.hydrate=!1,s0(t.containerInfo)),e=zm(t),e!==0&&(n=ls(t,e))),n===1)throw n=Pl,ti(t,0),ei(t,e),St(t,We()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t),St(t,We()),null}function zE(){if(Zt!==null){var t=Zt;Zt=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,St(e,We())})}Ht()}function Lv(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Ri(),Ht())}}function Mv(t,e){var n=H;H&=-2,H|=8;try{return t(e)}finally{H=n,H===0&&(Ri(),Ht())}}function Jo(t,e){_e(Vc,ur),ur|=e,Ci|=e}function E0(){ur=Vc.current,pe(Vc)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SE(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&La();break;case 3:di(),pe(st),pe(Ge),f0();break;case 5:h0(r);break;case 4:di();break;case 13:pe(we);break;case 19:pe(we);break;case 10:u0(r);break;case 23:case 24:E0()}n=n.return}Je=t,Te=Ln(t.current,null),qe=ur=Ci=e,Me=0,Pl=null,w0=Ai=uo=0}function $v(t,e){do{var n=Te;try{if(l0(),xs.current=qa,ja){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(js=0,Oe=ze=Ee=null,ws=!1,x0.current=null,n===null||n.return===null){Me=1,Pl=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(we.current&1)!==0,h=o;do{var g;if(g=h.tag===13){var y=h.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var w=h.memoizedProps;g=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!d}}if(g){var p=h.updateQueue;if(p===null){var m=new Set;m.add(u),h.updateQueue=m}else p.add(u);if((h.mode&2)===0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var f=Sn(-1,1);f.tag=2,In(a,f)}a.lanes|=1;break e}l=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new $E,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var x=QE.bind(null,s,u,a);u.then(x,x)}h.flags|=4096,h.lanes=e;break e}h=h.return}while(h!==null);l=Error((Kr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Me!==5&&(Me=2),l=y0(l,a),h=o;do{switch(h.tag){case 3:s=l,h.flags|=4096,e&=-e,h.lanes|=e;var I=Dv(h,s,e);Qd(h,I);break e;case 1:s=l;var _=h.type,E=h.stateNode;if((h.flags&64)===0&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Lt===null||!Lt.has(E)))){h.flags|=4096,e&=-e,h.lanes|=e;var k=Pv(h,s,e);Qd(h,k);break e}}h=h.return}while(h!==null)}Fv(n)}catch(C){e=C,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function Bv(){var t=Ka.current;return Ka.current=qa,t===null?qa:t}function ls(t,e){var n=H;H|=16;var r=Bv();Je===t&&qe===e||ti(t,e);do try{HE();break}catch(i){$v(t,i)}while(1);if(l0(),H=n,Ka.current=r,Te!==null)throw Error(L(261));return Je=null,qe=0,Me}function HE(){for(;Te!==null;)Uv(Te)}function WE(){for(;Te!==null&&!TE();)Uv(Te)}function Uv(t){var e=jv(t.alternate,t,ur);t.memoizedProps=t.pendingProps,e===null?Fv(t):Te=e,x0.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=LE(n,e,ur),n!==null){Te=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(ur&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=ME(e),n!==null){n.flags&=2047,Te=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Me===0&&(Me=5)}function Wn(t){var e=fi();return lr(99,qE.bind(null,t,e)),null}function qE(t,e){do Vn();while(_s!==null);if((H&48)!==0)throw Error(L(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Pn(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Zt!==null&&(r&24)===0&&Zt.has(t)&&Zt.delete(t),t===Je&&(Te=Je=null,qe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=H,H|=32,x0.current=null,Ru=ua,o=Md(),Ic(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,d=-1,h=-1,g=0,y=0,w=o,p=null;t:for(;;){for(var m;w!==a||s!==0&&w.nodeType!==3||(d=c+s),w!==l||u!==0&&w.nodeType!==3||(h=c+u),w.nodeType===3&&(c+=w.nodeValue.length),(m=w.firstChild)!==null;)p=w,w=m;for(;;){if(w===o)break t;if(p===a&&++g===s&&(d=c),p===l&&++y===u&&(h=c),(m=w.nextSibling)!==null)break;w=p,p=w.parentNode}w=m}a=d===-1||h===-1?null:{start:d,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Nu={focusedElem:o,selectionRange:a},ua=!1,Ss=null,ma=!1,U=r;do try{KE()}catch(C){if(U===null)throw Error(L(330));Cn(U,C),U=U.nextEffect}while(U!==null);Ss=null,U=r;do try{for(o=t;U!==null;){var f=U.flags;if(f&16&&Ns(U.stateNode,""),f&128){var v=U.alternate;if(v!==null){var x=v.ref;x!==null&&(typeof x=="function"?x(null):x.current=null)}}switch(f&1038){case 2:_p(U),U.flags&=-3;break;case 6:_p(U),U.flags&=-3,$u(U.alternate,U);break;case 1024:U.flags&=-1025;break;case 1028:U.flags&=-1025,$u(U.alternate,U);break;case 4:$u(U.alternate,U);break;case 8:a=U,bv(o,a);var I=a.alternate;xp(a),I!==null&&xp(I)}U=U.nextEffect}}catch(C){if(U===null)throw Error(L(330));Cn(U,C),U=U.nextEffect}while(U!==null);if(x=Nu,v=Md(),f=x.focusedElem,o=x.selectionRange,v!==f&&f&&f.ownerDocument&&Ym(f.ownerDocument.documentElement,f)){for(o!==null&&Ic(f)&&(v=o.start,x=o.end,x===void 0&&(x=v),"selectionStart"in f?(f.selectionStart=v,f.selectionEnd=Math.min(x,f.value.length)):(x=(v=f.ownerDocument||document)&&v.defaultView||window,x.getSelection&&(x=x.getSelection(),a=f.textContent.length,I=Math.min(o.start,a),o=o.end===void 0?I:Math.min(o.end,a),!x.extend&&I>o&&(a=o,o=I,I=a),a=Ld(f,I),s=Ld(f,o),a&&s&&(x.rangeCount!==1||x.anchorNode!==a.node||x.anchorOffset!==a.offset||x.focusNode!==s.node||x.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),x.removeAllRanges(),I>o?(x.addRange(v),x.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),x.addRange(v)))))),v=[],x=f;x=x.parentNode;)x.nodeType===1&&v.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<v.length;f++)x=v[f],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}ua=!!Ru,Nu=Ru=null,t.current=n,U=r;do try{for(f=t;U!==null;){var _=U.flags;if(_&36&&FE(f,U.alternate,U),_&128){v=void 0;var E=U.ref;if(E!==null){var k=U.stateNode;switch(U.tag){case 5:v=k;break;default:v=k}typeof E=="function"?E(v):E.current=v}}U=U.nextEffect}}catch(C){if(U===null)throw Error(L(330));Cn(U,C),U=U.nextEffect}while(U!==null);U=null,AE(),H=i}else t.current=n;if(On)On=!1,_s=t,as=e;else for(U=r;U!==null;)e=U.nextEffect,U.nextEffect=null,U.flags&8&&(_=U,_.sibling=null,_.stateNode=null),U=e;if(r=t.pendingLanes,r===0&&(Lt=null),r===1?t===Kc?Es++:(Es=0,Kc=t):Es=0,n=n.stateNode,ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(o0,n,void 0,(n.current.flags&64)===64)}catch{}if(St(t,We()),Ga)throw Ga=!1,t=Hc,Hc=null,t;return(H&8)!==0||Ht(),null}function KE(){for(;U!==null;){var t=U.alternate;ma||Ss===null||((U.flags&8)!==0?_d(U,Ss)&&(ma=!0):U.tag===13&&VE(t,U)&&_d(U,Ss)&&(ma=!0));var e=U.flags;(e&256)!==0&&UE(t,U),(e&512)===0||On||(On=!0,Bs(97,function(){return Vn(),null})),U=U.nextEffect}}function Vn(){if(as!==90){var t=97<as?97:as;return as=90,lr(t,XE)}return!1}function GE(t,e){Wc.push(e,t),On||(On=!0,Bs(97,function(){return Vn(),null}))}function Vv(t,e){qc.push(e,t),On||(On=!0,Bs(97,function(){return Vn(),null}))}function XE(){if(_s===null)return!1;var t=_s;if(_s=null,(H&48)!==0)throw Error(L(331));var e=H;H|=32;var n=qc;qc=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(L(330));Cn(s,l)}}for(n=Wc,Wc=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(L(330));Cn(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return H=e,Ht(),!0}function Sp(t,e,n){e=y0(n,e),e=Dv(t,e,1),In(t,e),e=ut(),t=bl(t,1),t!==null&&(kl(t,1,e),St(t,e))}function Cn(t,e){if(t.tag===3)Sp(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Sp(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){t=y0(e,t);var i=Pv(n,t,1);if(In(n,i),i=ut(),n=bl(n,1),n!==null)kl(n,1,i),St(n,i);else if(typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function QE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(qe&n)===n&&(Me===4||Me===3&&(qe&62914560)===qe&&500>We()-_0?ti(t,0):w0|=n),St(t,e)}function YE(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=fi()===99?1:2:(Kt===0&&(Kt=Ci),e=Br(62914560&~Kt),e===0&&(e=4194304))),n=ut(),t=bl(t,e),t!==null&&(kl(t,e,n),St(t,n))}var jv;jv=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)Dt=!0;else if((n&r)!==0)Dt=(t.flags&16384)!==0;else{switch(Dt=!1,e.tag){case 3:up(e),Ou();break;case 5:ep(e);break;case 1:ot(e.type)&&fa(e);break;case 4:Pc(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;_e(Ma,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?cp(t,e,n):(_e(we,we.current&1),e=Xt(t,e,n),e!==null?e.sibling:null);_e(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return gp(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(we,we.current),r)break;return null;case 23:case 24:return e.lanes=0,Lu(t,e,n)}return Xt(t,e,n)}else Dt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=hi(e,Ge.current),Jr(e,n),i=p0(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)){var s=!0;fa(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,c0(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ua(e,r,o,t),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=Mc(null,e,r,!0,s,n)}else e.tag=0,tt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=ZE(i),t=Rt(i,t),s){case 0:e=Lc(null,e,i,t,n);break e;case 1:e=lp(null,e,i,t,n);break e;case 11:e=op(null,e,i,t,n);break e;case 14:e=ap(null,e,i,Rt(i.type,t),r,n);break e}throw Error(L(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Lc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),lp(t,e,r,i,n);case 3:if(up(e),r=e.updateQueue,t===null||r===null)throw Error(L(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,dv(t,e),Us(e,r,null,n),r=e.memoizedState.element,r===i)Ou(),e=Xt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(yn=Yr(e.stateNode.containerInfo.firstChild),Gt=e,s=$t=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Zr.push(s);for(n=vv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else tt(t,e,r,n),Ou();e=e.child}return e;case 5:return ep(e),t===null&&bc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=16),Cv(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&bc(e),null;case 13:return cp(t,e,n);case 4:return Pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fa(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),op(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(_e(Ma,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=mt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!st.current){e=Xt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=Sn(-1,n&-n),u.tag=2,In(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),fv(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Jr(e,n),i=Et(i,s.unstable_observedBits),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return i=e.type,s=Rt(i,e.pendingProps),s=Rt(i.type,s),ap(t,e,i,s,r,n);case 15:return Tv(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,ot(r)?(t=!0,fa(e)):t=!1,Jr(e,n),gv(e,r,i),Dc(e,r,i,n),Mc(null,e,r,!0,t,n);case 19:return gp(t,e,n);case 23:return Lu(t,e,n);case 24:return Lu(t,e,n)}throw Error(L(156,e.tag))};function JE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new JE(t,e,n,r)}function S0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZE(t){if(typeof t=="function")return S0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===El)return 11;if(t===Sl)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")S0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hn:return ni(n.children,i,s,e);case ym:o=8,i|=16;break;case Uh:o=8,i|=1;break;case fs:return t=vt(12,n,e,i|8),t.elementType=fs,t.type=fs,t.lanes=s,t;case ds:return t=vt(13,n,e,i),t.type=ds,t.elementType=ds,t.lanes=s,t;case Ca:return t=vt(19,n,e,i),t.elementType=Ca,t.lanes=s,t;case Wh:return I0(n,i,s,e);case uc:return t=vt(24,n,e,i),t.elementType=uc,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fh:o=10;break e;case Vh:o=9;break e;case El:o=11;break e;case Sl:o=14;break e;case jh:o=16,r=null;break e;case zh:o=22;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function I0(t,e,n,r){return t=vt(23,t,r,e),t.elementType=Wh,t.lanes=n,t}function Bu(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Uu(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.mutableSourceEagerHydrationData=null}function tS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xa(t,e,n,r){var i=e.current,s=ut(),o=kn(i);e:if(n){n=n._reactInternals;t:{if(Er(n)!==n||n.tag!==1)throw Error(L(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(ot(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(L(171))}if(n.tag===1){var l=n.type;if(ot(l)){n=sv(n,l,a);break e}}n=a}else n=bn;return e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),In(i,e),Tn(i,o,s),o}function Fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function k0(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function nS(){return null}function T0(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new eS(t,e,n!=null&&n.hydrate===!0),e=vt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,c0(e),t[Ti]=n.current,ev(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}T0.prototype.render=function(t){Xa(t,this._internalRoot,null,null)};T0.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Xa(null,t,null,function(){e[Ti]=null})};function co(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rS(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new T0(t,0,e?{hydrate:!0}:void 0)}function Ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Fu(o);a.call(u)}}Xa(e,o,t,i)}else{if(s=n._reactRootContainer=rS(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Fu(o);l.call(u)}}Mv(function(){Xa(e,o,t,i)})}return Fu(o)}bm=function(t){if(t.tag===13){var e=ut();Tn(t,4,e),k0(t,4)}};Qh=function(t){if(t.tag===13){var e=ut();Tn(t,67108864,e),k0(t,67108864)}};Om=function(t){if(t.tag===13){var e=ut(),n=kn(t);Tn(t,n,e),k0(t,n)}};Lm=function(t,e){return e()};xc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rl(r);if(!i)throw Error(L(90));wm(r),hc(r,i)}}}break;case"textarea":Em(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};Kh=Lv;Rm=function(t,e,n,r,i){var s=H;H|=4;try{return lr(98,t.bind(null,e,n,r,i))}finally{H=s,H===0&&(Ri(),Ht())}};Gh=function(){(H&49)===0&&(zE(),Vn())};Nm=function(t,e){var n=H;H|=2;try{return t(e)}finally{H=n,H===0&&(Ri(),Ht())}};function zv(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!co(e))throw Error(L(200));return tS(t,e,null,n)}var iS={Events:[ao,jr,Rl,Cm,Am,Vn,{current:!1}]},ns={findFiberByHostInstance:Qn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},sS={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pm(t),t===null?null:t.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{o0=Zo.inject(sS),ir=Zo}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;kt.createPortal=zv;kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):Error(L(268,Object.keys(t)));return t=Pm(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t,e){var n=H;if((n&48)!==0)return t(e);H|=1;try{if(t)return lr(99,t.bind(null,e))}finally{H=n,Ht()}};kt.hydrate=function(t,e,n){if(!co(e))throw Error(L(200));return Ol(null,t,e,!0,n)};kt.render=function(t,e,n){if(!co(e))throw Error(L(200));return Ol(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!co(t))throw Error(L(40));return t._reactRootContainer?(Mv(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};kt.unstable_batchedUpdates=Lv;kt.unstable_createPortal=function(t,e){return zv(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!co(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Ol(t,e,n,!1,r)};kt.version="17.0.2";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),pm.exports=kt;var NN=pm.exports;function oS(t){let e;const n=new Set,r=(u,c)=>{const d=typeof u=="function"?u(e):u;if(d!==e){const h=e;e=c?d:Object.assign({},e,d),n.forEach(g=>g(e,h))}},i=()=>e,s=(u,c=i,d=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let h=c(e);function g(){const y=c(e);if(!d(h,y)){const w=h;u(h=y,w)}}return n.add(g),()=>n.delete(g)},l={setState:r,getState:i,subscribe:(u,c,d)=>c||d?s(u,c,d):(n.add(u),()=>n.delete(u)),destroy:()=>n.clear()};return e=t(r,i,l),l}const aS=typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),kp=aS?K.exports.useEffect:K.exports.useLayoutEffect;function DN(t){const e=typeof t=="function"?oS(t):t,n=(r=e.getState,i=Object.is)=>{const[,s]=K.exports.useReducer(p=>p+1,0),o=e.getState(),a=K.exports.useRef(o),l=K.exports.useRef(r),u=K.exports.useRef(i),c=K.exports.useRef(!1),d=K.exports.useRef();d.current===void 0&&(d.current=r(o));let h,g=!1;(a.current!==o||l.current!==r||u.current!==i||c.current)&&(h=r(o),g=!i(d.current,h)),kp(()=>{g&&(d.current=h),a.current=o,l.current=r,u.current=i,c.current=!1});const y=K.exports.useRef(o);kp(()=>{const p=()=>{try{const f=e.getState(),v=l.current(f);u.current(d.current,v)||(a.current=f,d.current=v,s())}catch{c.current=!0,s()}},m=e.subscribe(p);return e.getState()!==y.current&&p(),m},[]);const w=g?h:d.current;return K.exports.useDebugValue(w),w};return Object.assign(n,e),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const r=[n,e];return{next(){const i=r.length<=0;return{value:r.shift(),done:i}}}},n}var Wv={exports:{}},te={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Z,function(){var n=n||function(r,i){var s;if(typeof window!="undefined"&&window.crypto&&(s=window.crypto),typeof self!="undefined"&&self.crypto&&(s=self.crypto),typeof globalThis!="undefined"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window!="undefined"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof Z!="undefined"&&Z.crypto&&(s=Z.crypto),!s&&typeof n_=="function")try{s=require("crypto")}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function f(){}return function(v){var x;return f.prototype=v,x=new f,f.prototype=null,x}}(),l={},u=l.lib={},c=u.Base=function(){return{extend:function(f){var v=a(this);return f&&v.mixIn(f),(!v.hasOwnProperty("init")||this.init===v.init)&&(v.init=function(){v.$super.init.apply(this,arguments)}),v.init.prototype=v,v.$super=this,v},create:function(){var f=this.extend();return f.init.apply(f,arguments),f},init:function(){},mixIn:function(f){for(var v in f)f.hasOwnProperty(v)&&(this[v]=f[v]);f.hasOwnProperty("toString")&&(this.toString=f.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),d=u.WordArray=c.extend({init:function(f,v){f=this.words=f||[],v!=i?this.sigBytes=v:this.sigBytes=f.length*4},toString:function(f){return(f||g).stringify(this)},concat:function(f){var v=this.words,x=f.words,I=this.sigBytes,_=f.sigBytes;if(this.clamp(),I%4)for(var E=0;E<_;E++){var k=x[E>>>2]>>>24-E%4*8&255;v[I+E>>>2]|=k<<24-(I+E)%4*8}else for(var C=0;C<_;C+=4)v[I+C>>>2]=x[C>>>2];return this.sigBytes+=_,this},clamp:function(){var f=this.words,v=this.sigBytes;f[v>>>2]&=4294967295<<32-v%4*8,f.length=r.ceil(v/4)},clone:function(){var f=c.clone.call(this);return f.words=this.words.slice(0),f},random:function(f){for(var v=[],x=0;x<f;x+=4)v.push(o());return new d.init(v,f)}}),h=l.enc={},g=h.Hex={stringify:function(f){for(var v=f.words,x=f.sigBytes,I=[],_=0;_<x;_++){var E=v[_>>>2]>>>24-_%4*8&255;I.push((E>>>4).toString(16)),I.push((E&15).toString(16))}return I.join("")},parse:function(f){for(var v=f.length,x=[],I=0;I<v;I+=2)x[I>>>3]|=parseInt(f.substr(I,2),16)<<24-I%8*4;return new d.init(x,v/2)}},y=h.Latin1={stringify:function(f){for(var v=f.words,x=f.sigBytes,I=[],_=0;_<x;_++){var E=v[_>>>2]>>>24-_%4*8&255;I.push(String.fromCharCode(E))}return I.join("")},parse:function(f){for(var v=f.length,x=[],I=0;I<v;I++)x[I>>>2]|=(f.charCodeAt(I)&255)<<24-I%4*8;return new d.init(x,v)}},w=h.Utf8={stringify:function(f){try{return decodeURIComponent(escape(y.stringify(f)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(f){return y.parse(unescape(encodeURIComponent(f)))}},p=u.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new d.init,this._nDataBytes=0},_append:function(f){typeof f=="string"&&(f=w.parse(f)),this._data.concat(f),this._nDataBytes+=f.sigBytes},_process:function(f){var v,x=this._data,I=x.words,_=x.sigBytes,E=this.blockSize,k=E*4,C=_/k;f?C=r.ceil(C):C=r.max((C|0)-this._minBufferSize,0);var S=C*E,A=r.min(S*4,_);if(S){for(var D=0;D<S;D+=E)this._doProcessBlock(I,D);v=I.splice(0,S),x.sigBytes-=A}return new d.init(v,A)},clone:function(){var f=c.clone.call(this);return f._data=this._data.clone(),f},_minBufferSize:0});u.Hasher=p.extend({cfg:c.extend(),init:function(f){this.cfg=this.cfg.extend(f),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(f){return this._append(f),this._process(),this},finalize:function(f){f&&this._append(f);var v=this._doFinalize();return v},blockSize:16,_createHelper:function(f){return function(v,x){return new f.init(x).finalize(v)}},_createHmacHelper:function(f){return function(v,x){return new m.HMAC.init(f,x).finalize(v)}}});var m=l.algo={};return l}(Math);return n})})(te);var ho={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(r){var i=n,s=i.lib,o=s.Base,a=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(u,c){this.high=u,this.low=c}}),l.WordArray=o.extend({init:function(u,c){u=this.words=u||[],c!=r?this.sigBytes=c:this.sigBytes=u.length*8},toX32:function(){for(var u=this.words,c=u.length,d=[],h=0;h<c;h++){var g=u[h];d.push(g.high),d.push(g.low)}return a.create(d,this.sigBytes)},clone:function(){for(var u=o.clone.call(this),c=u.words=this.words.slice(0),d=c.length,h=0;h<d;h++)c[h]=c[h].clone();return u}})}(),n})})(ho);var qv={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(){if(typeof ArrayBuffer=="function"){var r=n,i=r.lib,s=i.WordArray,o=s.init,a=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray!="undefined"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var u=l.byteLength,c=[],d=0;d<u;d++)c[d>>>2]|=l[d]<<24-d%4*8;o.call(this,c,u)}else o.apply(this,arguments)};a.prototype=s}}(),n.lib.WordArray})})(qv);var Kv={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var u=l.words,c=l.sigBytes,d=[],h=0;h<c;h+=2){var g=u[h>>>2]>>>16-h%4*8&65535;d.push(String.fromCharCode(g))}return d.join("")},parse:function(l){for(var u=l.length,c=[],d=0;d<u;d++)c[d>>>1]|=l.charCodeAt(d)<<16-d%2*16;return s.create(c,u*2)}},o.Utf16LE={stringify:function(l){for(var u=l.words,c=l.sigBytes,d=[],h=0;h<c;h+=2){var g=a(u[h>>>2]>>>16-h%4*8&65535);d.push(String.fromCharCode(g))}return d.join("")},parse:function(l){for(var u=l.length,c=[],d=0;d<u;d++)c[d>>>1]|=a(l.charCodeAt(d)<<16-d%2*16);return s.create(c,u*2)}};function a(l){return l<<8&4278255360|l>>>8&16711935}}(),n.enc.Utf16})})(Kv);var Ir={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var u=l.words,c=l.sigBytes,d=this._map;l.clamp();for(var h=[],g=0;g<c;g+=3)for(var y=u[g>>>2]>>>24-g%4*8&255,w=u[g+1>>>2]>>>24-(g+1)%4*8&255,p=u[g+2>>>2]>>>24-(g+2)%4*8&255,m=y<<16|w<<8|p,f=0;f<4&&g+f*.75<c;f++)h.push(d.charAt(m>>>6*(3-f)&63));var v=d.charAt(64);if(v)for(;h.length%4;)h.push(v);return h.join("")},parse:function(l){var u=l.length,c=this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var h=0;h<c.length;h++)d[c.charCodeAt(h)]=h}var g=c.charAt(64);if(g){var y=l.indexOf(g);y!==-1&&(u=y)}return a(l,u,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(l,u,c){for(var d=[],h=0,g=0;g<u;g++)if(g%4){var y=c[l.charCodeAt(g-1)]<<g%4*2,w=c[l.charCodeAt(g)]>>>6-g%4*2,p=y|w;d[h>>>2]|=p<<24-h%4*8,h++}return s.create(d,h)}}(),n.enc.Base64})})(Ir);var Gv={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,u=!0){var c=l.words,d=l.sigBytes,h=u?this._safe_map:this._map;l.clamp();for(var g=[],y=0;y<d;y+=3)for(var w=c[y>>>2]>>>24-y%4*8&255,p=c[y+1>>>2]>>>24-(y+1)%4*8&255,m=c[y+2>>>2]>>>24-(y+2)%4*8&255,f=w<<16|p<<8|m,v=0;v<4&&y+v*.75<d;v++)g.push(h.charAt(f>>>6*(3-v)&63));var x=h.charAt(64);if(x)for(;g.length%4;)g.push(x);return g.join("")},parse:function(l,u=!0){var c=l.length,d=u?this._safe_map:this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var g=0;g<d.length;g++)h[d.charCodeAt(g)]=g}var y=d.charAt(64);if(y){var w=l.indexOf(y);w!==-1&&(c=w)}return a(l,c,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(l,u,c){for(var d=[],h=0,g=0;g<u;g++)if(g%4){var y=c[l.charCodeAt(g-1)]<<g%4*2,w=c[l.charCodeAt(g)]>>>6-g%4*2,p=y|w;d[h>>>2]|=p<<24-h%4*8,h++}return s.create(d,h)}}(),n.enc.Base64url})})(Gv);var kr={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(r){var i=n,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,u=[];(function(){for(var w=0;w<64;w++)u[w]=r.abs(r.sin(w+1))*4294967296|0})();var c=l.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(w,p){for(var m=0;m<16;m++){var f=p+m,v=w[f];w[f]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360}var x=this._hash.words,I=w[p+0],_=w[p+1],E=w[p+2],k=w[p+3],C=w[p+4],S=w[p+5],A=w[p+6],D=w[p+7],b=w[p+8],$=w[p+9],V=w[p+10],G=w[p+11],ue=w[p+12],ie=w[p+13],ae=w[p+14],le=w[p+15],T=x[0],R=x[1],N=x[2],P=x[3];T=d(T,R,N,P,I,7,u[0]),P=d(P,T,R,N,_,12,u[1]),N=d(N,P,T,R,E,17,u[2]),R=d(R,N,P,T,k,22,u[3]),T=d(T,R,N,P,C,7,u[4]),P=d(P,T,R,N,S,12,u[5]),N=d(N,P,T,R,A,17,u[6]),R=d(R,N,P,T,D,22,u[7]),T=d(T,R,N,P,b,7,u[8]),P=d(P,T,R,N,$,12,u[9]),N=d(N,P,T,R,V,17,u[10]),R=d(R,N,P,T,G,22,u[11]),T=d(T,R,N,P,ue,7,u[12]),P=d(P,T,R,N,ie,12,u[13]),N=d(N,P,T,R,ae,17,u[14]),R=d(R,N,P,T,le,22,u[15]),T=h(T,R,N,P,_,5,u[16]),P=h(P,T,R,N,A,9,u[17]),N=h(N,P,T,R,G,14,u[18]),R=h(R,N,P,T,I,20,u[19]),T=h(T,R,N,P,S,5,u[20]),P=h(P,T,R,N,V,9,u[21]),N=h(N,P,T,R,le,14,u[22]),R=h(R,N,P,T,C,20,u[23]),T=h(T,R,N,P,$,5,u[24]),P=h(P,T,R,N,ae,9,u[25]),N=h(N,P,T,R,k,14,u[26]),R=h(R,N,P,T,b,20,u[27]),T=h(T,R,N,P,ie,5,u[28]),P=h(P,T,R,N,E,9,u[29]),N=h(N,P,T,R,D,14,u[30]),R=h(R,N,P,T,ue,20,u[31]),T=g(T,R,N,P,S,4,u[32]),P=g(P,T,R,N,b,11,u[33]),N=g(N,P,T,R,G,16,u[34]),R=g(R,N,P,T,ae,23,u[35]),T=g(T,R,N,P,_,4,u[36]),P=g(P,T,R,N,C,11,u[37]),N=g(N,P,T,R,D,16,u[38]),R=g(R,N,P,T,V,23,u[39]),T=g(T,R,N,P,ie,4,u[40]),P=g(P,T,R,N,I,11,u[41]),N=g(N,P,T,R,k,16,u[42]),R=g(R,N,P,T,A,23,u[43]),T=g(T,R,N,P,$,4,u[44]),P=g(P,T,R,N,ue,11,u[45]),N=g(N,P,T,R,le,16,u[46]),R=g(R,N,P,T,E,23,u[47]),T=y(T,R,N,P,I,6,u[48]),P=y(P,T,R,N,D,10,u[49]),N=y(N,P,T,R,ae,15,u[50]),R=y(R,N,P,T,S,21,u[51]),T=y(T,R,N,P,ue,6,u[52]),P=y(P,T,R,N,k,10,u[53]),N=y(N,P,T,R,V,15,u[54]),R=y(R,N,P,T,_,21,u[55]),T=y(T,R,N,P,b,6,u[56]),P=y(P,T,R,N,le,10,u[57]),N=y(N,P,T,R,A,15,u[58]),R=y(R,N,P,T,ie,21,u[59]),T=y(T,R,N,P,C,6,u[60]),P=y(P,T,R,N,G,10,u[61]),N=y(N,P,T,R,E,15,u[62]),R=y(R,N,P,T,$,21,u[63]),x[0]=x[0]+T|0,x[1]=x[1]+R|0,x[2]=x[2]+N|0,x[3]=x[3]+P|0},_doFinalize:function(){var w=this._data,p=w.words,m=this._nDataBytes*8,f=w.sigBytes*8;p[f>>>5]|=128<<24-f%32;var v=r.floor(m/4294967296),x=m;p[(f+64>>>9<<4)+15]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,p[(f+64>>>9<<4)+14]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,w.sigBytes=(p.length+1)*4,this._process();for(var I=this._hash,_=I.words,E=0;E<4;E++){var k=_[E];_[E]=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360}return I},clone:function(){var w=a.clone.call(this);return w._hash=this._hash.clone(),w}});function d(w,p,m,f,v,x,I){var _=w+(p&m|~p&f)+v+I;return(_<<x|_>>>32-x)+p}function h(w,p,m,f,v,x,I){var _=w+(p&f|m&~f)+v+I;return(_<<x|_>>>32-x)+p}function g(w,p,m,f,v,x,I){var _=w+(p^m^f)+v+I;return(_<<x|_>>>32-x)+p}function y(w,p,m,f,v,x,I){var _=w+(m^(p|~f))+v+I;return(_<<x|_>>>32-x)+p}i.MD5=a._createHelper(c),i.HmacMD5=a._createHmacHelper(c)}(Math),n.MD5})})(kr);var Ll={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=i.Hasher,a=r.algo,l=[],u=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(c,d){for(var h=this._hash.words,g=h[0],y=h[1],w=h[2],p=h[3],m=h[4],f=0;f<80;f++){if(f<16)l[f]=c[d+f]|0;else{var v=l[f-3]^l[f-8]^l[f-14]^l[f-16];l[f]=v<<1|v>>>31}var x=(g<<5|g>>>27)+m+l[f];f<20?x+=(y&w|~y&p)+1518500249:f<40?x+=(y^w^p)+1859775393:f<60?x+=(y&w|y&p|w&p)-1894007588:x+=(y^w^p)-899497514,m=p,p=w,w=y<<30|y>>>2,y=g,g=x}h[0]=h[0]+g|0,h[1]=h[1]+y|0,h[2]=h[2]+w|0,h[3]=h[3]+p|0,h[4]=h[4]+m|0},_doFinalize:function(){var c=this._data,d=c.words,h=this._nDataBytes*8,g=c.sigBytes*8;return d[g>>>5]|=128<<24-g%32,d[(g+64>>>9<<4)+14]=Math.floor(h/4294967296),d[(g+64>>>9<<4)+15]=h,c.sigBytes=d.length*4,this._process(),this._hash},clone:function(){var c=o.clone.call(this);return c._hash=this._hash.clone(),c}});r.SHA1=o._createHelper(u),r.HmacSHA1=o._createHmacHelper(u)}(),n.SHA1})})(Ll);var C0={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){return function(r){var i=n,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,u=[],c=[];(function(){function g(m){for(var f=r.sqrt(m),v=2;v<=f;v++)if(!(m%v))return!1;return!0}function y(m){return(m-(m|0))*4294967296|0}for(var w=2,p=0;p<64;)g(w)&&(p<8&&(u[p]=y(r.pow(w,1/2))),c[p]=y(r.pow(w,1/3)),p++),w++})();var d=[],h=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(u.slice(0))},_doProcessBlock:function(g,y){for(var w=this._hash.words,p=w[0],m=w[1],f=w[2],v=w[3],x=w[4],I=w[5],_=w[6],E=w[7],k=0;k<64;k++){if(k<16)d[k]=g[y+k]|0;else{var C=d[k-15],S=(C<<25|C>>>7)^(C<<14|C>>>18)^C>>>3,A=d[k-2],D=(A<<15|A>>>17)^(A<<13|A>>>19)^A>>>10;d[k]=S+d[k-7]+D+d[k-16]}var b=x&I^~x&_,$=p&m^p&f^m&f,V=(p<<30|p>>>2)^(p<<19|p>>>13)^(p<<10|p>>>22),G=(x<<26|x>>>6)^(x<<21|x>>>11)^(x<<7|x>>>25),ue=E+G+b+c[k]+d[k],ie=V+$;E=_,_=I,I=x,x=v+ue|0,v=f,f=m,m=p,p=ue+ie|0}w[0]=w[0]+p|0,w[1]=w[1]+m|0,w[2]=w[2]+f|0,w[3]=w[3]+v|0,w[4]=w[4]+x|0,w[5]=w[5]+I|0,w[6]=w[6]+_|0,w[7]=w[7]+E|0},_doFinalize:function(){var g=this._data,y=g.words,w=this._nDataBytes*8,p=g.sigBytes*8;return y[p>>>5]|=128<<24-p%32,y[(p+64>>>9<<4)+14]=r.floor(w/4294967296),y[(p+64>>>9<<4)+15]=w,g.sigBytes=y.length*4,this._process(),this._hash},clone:function(){var g=a.clone.call(this);return g._hash=this._hash.clone(),g}});i.SHA256=a._createHelper(h),i.HmacSHA256=a._createHmacHelper(h)}(Math),n.SHA256})})(C0);var Xv={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,C0.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=r.algo,a=o.SHA256,l=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var u=a._doFinalize.call(this);return u.sigBytes-=4,u}});r.SHA224=a._createHelper(l),r.HmacSHA224=a._createHmacHelper(l)}(),n.SHA224})})(Xv);var A0={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,ho.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.Hasher,o=r.x64,a=o.Word,l=o.WordArray,u=r.algo;function c(){return a.create.apply(a,arguments)}var d=[c(1116352408,3609767458),c(1899447441,602891725),c(3049323471,3964484399),c(3921009573,2173295548),c(961987163,4081628472),c(1508970993,3053834265),c(2453635748,2937671579),c(2870763221,3664609560),c(3624381080,2734883394),c(310598401,1164996542),c(607225278,1323610764),c(1426881987,3590304994),c(1925078388,4068182383),c(2162078206,991336113),c(2614888103,633803317),c(3248222580,3479774868),c(3835390401,2666613458),c(4022224774,944711139),c(264347078,2341262773),c(604807628,2007800933),c(770255983,1495990901),c(1249150122,1856431235),c(1555081692,3175218132),c(1996064986,2198950837),c(2554220882,3999719339),c(2821834349,766784016),c(2952996808,2566594879),c(3210313671,3203337956),c(3336571891,1034457026),c(3584528711,2466948901),c(113926993,3758326383),c(338241895,168717936),c(666307205,1188179964),c(773529912,1546045734),c(1294757372,1522805485),c(1396182291,2643833823),c(1695183700,2343527390),c(1986661051,1014477480),c(2177026350,1206759142),c(2456956037,344077627),c(2730485921,1290863460),c(2820302411,3158454273),c(3259730800,3505952657),c(3345764771,106217008),c(3516065817,3606008344),c(3600352804,1432725776),c(4094571909,1467031594),c(275423344,851169720),c(430227734,3100823752),c(506948616,1363258195),c(659060556,3750685593),c(883997877,3785050280),c(958139571,3318307427),c(1322822218,3812723403),c(1537002063,2003034995),c(1747873779,3602036899),c(1955562222,1575990012),c(2024104815,1125592928),c(2227730452,2716904306),c(2361852424,442776044),c(2428436474,593698344),c(2756734187,3733110249),c(3204031479,2999351573),c(3329325298,3815920427),c(3391569614,3928383900),c(3515267271,566280711),c(3940187606,3454069534),c(4118630271,4000239992),c(116418474,1914138554),c(174292421,2731055270),c(289380356,3203993006),c(460393269,320620315),c(685471733,587496836),c(852142971,1086792851),c(1017036298,365543100),c(1126000580,2618297676),c(1288033470,3409855158),c(1501505948,4234509866),c(1607167915,987167468),c(1816402316,1246189591)],h=[];(function(){for(var y=0;y<80;y++)h[y]=c()})();var g=u.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(y,w){for(var p=this._hash.words,m=p[0],f=p[1],v=p[2],x=p[3],I=p[4],_=p[5],E=p[6],k=p[7],C=m.high,S=m.low,A=f.high,D=f.low,b=v.high,$=v.low,V=x.high,G=x.low,ue=I.high,ie=I.low,ae=_.high,le=_.low,T=E.high,R=E.low,N=k.high,P=k.low,Q=C,ne=S,xe=A,q=D,pt=b,Pr=$,gu=V,Ui=G,Tt=ue,at=ie,Uo=ae,Fi=le,Fo=T,Vi=R,mu=N,ji=P,Ct=0;Ct<80;Ct++){var gt,an,Vo=h[Ct];if(Ct<16)an=Vo.high=y[w+Ct*2]|0,gt=Vo.low=y[w+Ct*2+1]|0;else{var Qf=h[Ct-15],br=Qf.high,zi=Qf.low,zw=(br>>>1|zi<<31)^(br>>>8|zi<<24)^br>>>7,Yf=(zi>>>1|br<<31)^(zi>>>8|br<<24)^(zi>>>7|br<<25),Jf=h[Ct-2],Or=Jf.high,Hi=Jf.low,Hw=(Or>>>19|Hi<<13)^(Or<<3|Hi>>>29)^Or>>>6,Zf=(Hi>>>19|Or<<13)^(Hi<<3|Or>>>29)^(Hi>>>6|Or<<26),ed=h[Ct-7],Ww=ed.high,qw=ed.low,td=h[Ct-16],Kw=td.high,nd=td.low;gt=Yf+qw,an=zw+Ww+(gt>>>0<Yf>>>0?1:0),gt=gt+Zf,an=an+Hw+(gt>>>0<Zf>>>0?1:0),gt=gt+nd,an=an+Kw+(gt>>>0<nd>>>0?1:0),Vo.high=an,Vo.low=gt}var Gw=Tt&Uo^~Tt&Fo,rd=at&Fi^~at&Vi,Xw=Q&xe^Q&pt^xe&pt,Qw=ne&q^ne&Pr^q&Pr,Yw=(Q>>>28|ne<<4)^(Q<<30|ne>>>2)^(Q<<25|ne>>>7),id=(ne>>>28|Q<<4)^(ne<<30|Q>>>2)^(ne<<25|Q>>>7),Jw=(Tt>>>14|at<<18)^(Tt>>>18|at<<14)^(Tt<<23|at>>>9),Zw=(at>>>14|Tt<<18)^(at>>>18|Tt<<14)^(at<<23|Tt>>>9),sd=d[Ct],e_=sd.high,od=sd.low,lt=ji+Zw,ln=mu+Jw+(lt>>>0<ji>>>0?1:0),lt=lt+rd,ln=ln+Gw+(lt>>>0<rd>>>0?1:0),lt=lt+od,ln=ln+e_+(lt>>>0<od>>>0?1:0),lt=lt+gt,ln=ln+an+(lt>>>0<gt>>>0?1:0),ad=id+Qw,t_=Yw+Xw+(ad>>>0<id>>>0?1:0);mu=Fo,ji=Vi,Fo=Uo,Vi=Fi,Uo=Tt,Fi=at,at=Ui+lt|0,Tt=gu+ln+(at>>>0<Ui>>>0?1:0)|0,gu=pt,Ui=Pr,pt=xe,Pr=q,xe=Q,q=ne,ne=lt+ad|0,Q=ln+t_+(ne>>>0<lt>>>0?1:0)|0}S=m.low=S+ne,m.high=C+Q+(S>>>0<ne>>>0?1:0),D=f.low=D+q,f.high=A+xe+(D>>>0<q>>>0?1:0),$=v.low=$+Pr,v.high=b+pt+($>>>0<Pr>>>0?1:0),G=x.low=G+Ui,x.high=V+gu+(G>>>0<Ui>>>0?1:0),ie=I.low=ie+at,I.high=ue+Tt+(ie>>>0<at>>>0?1:0),le=_.low=le+Fi,_.high=ae+Uo+(le>>>0<Fi>>>0?1:0),R=E.low=R+Vi,E.high=T+Fo+(R>>>0<Vi>>>0?1:0),P=k.low=P+ji,k.high=N+mu+(P>>>0<ji>>>0?1:0)},_doFinalize:function(){var y=this._data,w=y.words,p=this._nDataBytes*8,m=y.sigBytes*8;w[m>>>5]|=128<<24-m%32,w[(m+128>>>10<<5)+30]=Math.floor(p/4294967296),w[(m+128>>>10<<5)+31]=p,y.sigBytes=w.length*4,this._process();var f=this._hash.toX32();return f},clone:function(){var y=s.clone.call(this);return y._hash=this._hash.clone(),y},blockSize:1024/32});r.SHA512=s._createHelper(g),r.HmacSHA512=s._createHmacHelper(g)}(),n.SHA512})})(A0);var Qv={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,ho.exports,A0.exports)})(Z,function(n){return function(){var r=n,i=r.x64,s=i.Word,o=i.WordArray,a=r.algo,l=a.SHA512,u=a.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var c=l._doFinalize.call(this);return c.sigBytes-=16,c}});r.SHA384=l._createHelper(u),r.HmacSHA384=l._createHmacHelper(u)}(),n.SHA384})})(Qv);var Yv={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,ho.exports)})(Z,function(n){return function(r){var i=n,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.x64,u=l.Word,c=i.algo,d=[],h=[],g=[];(function(){for(var p=1,m=0,f=0;f<24;f++){d[p+5*m]=(f+1)*(f+2)/2%64;var v=m%5,x=(2*p+3*m)%5;p=v,m=x}for(var p=0;p<5;p++)for(var m=0;m<5;m++)h[p+5*m]=m+(2*p+3*m)%5*5;for(var I=1,_=0;_<24;_++){for(var E=0,k=0,C=0;C<7;C++){if(I&1){var S=(1<<C)-1;S<32?k^=1<<S:E^=1<<S-32}I&128?I=I<<1^113:I<<=1}g[_]=u.create(E,k)}})();var y=[];(function(){for(var p=0;p<25;p++)y[p]=u.create()})();var w=c.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var p=this._state=[],m=0;m<25;m++)p[m]=new u.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(p,m){for(var f=this._state,v=this.blockSize/2,x=0;x<v;x++){var I=p[m+2*x],_=p[m+2*x+1];I=(I<<8|I>>>24)&16711935|(I<<24|I>>>8)&4278255360,_=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360;var E=f[x];E.high^=_,E.low^=I}for(var k=0;k<24;k++){for(var C=0;C<5;C++){for(var S=0,A=0,D=0;D<5;D++){var E=f[C+5*D];S^=E.high,A^=E.low}var b=y[C];b.high=S,b.low=A}for(var C=0;C<5;C++)for(var $=y[(C+4)%5],V=y[(C+1)%5],G=V.high,ue=V.low,S=$.high^(G<<1|ue>>>31),A=$.low^(ue<<1|G>>>31),D=0;D<5;D++){var E=f[C+5*D];E.high^=S,E.low^=A}for(var ie=1;ie<25;ie++){var S,A,E=f[ie],ae=E.high,le=E.low,T=d[ie];T<32?(S=ae<<T|le>>>32-T,A=le<<T|ae>>>32-T):(S=le<<T-32|ae>>>64-T,A=ae<<T-32|le>>>64-T);var R=y[h[ie]];R.high=S,R.low=A}var N=y[0],P=f[0];N.high=P.high,N.low=P.low;for(var C=0;C<5;C++)for(var D=0;D<5;D++){var ie=C+5*D,E=f[ie],Q=y[ie],ne=y[(C+1)%5+5*D],xe=y[(C+2)%5+5*D];E.high=Q.high^~ne.high&xe.high,E.low=Q.low^~ne.low&xe.low}var E=f[0],q=g[k];E.high^=q.high,E.low^=q.low}},_doFinalize:function(){var p=this._data,m=p.words;this._nDataBytes*8;var f=p.sigBytes*8,v=this.blockSize*32;m[f>>>5]|=1<<24-f%32,m[(r.ceil((f+1)/v)*v>>>5)-1]|=128,p.sigBytes=m.length*4,this._process();for(var x=this._state,I=this.cfg.outputLength/8,_=I/8,E=[],k=0;k<_;k++){var C=x[k],S=C.high,A=C.low;S=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360,A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360,E.push(A),E.push(S)}return new o.init(E,I)},clone:function(){for(var p=a.clone.call(this),m=p._state=this._state.slice(0),f=0;f<25;f++)m[f]=m[f].clone();return p}});i.SHA3=a._createHelper(w),i.HmacSHA3=a._createHmacHelper(w)}(Math),n.SHA3})})(Yv);var Jv={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/return function(r){var i=n,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,u=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),c=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),d=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),h=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),g=o.create([0,1518500249,1859775393,2400959708,2840853838]),y=o.create([1352829926,1548603684,1836072691,2053994217,0]),w=l.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(_,E){for(var k=0;k<16;k++){var C=E+k,S=_[C];_[C]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}var A=this._hash.words,D=g.words,b=y.words,$=u.words,V=c.words,G=d.words,ue=h.words,ie,ae,le,T,R,N,P,Q,ne,xe;N=ie=A[0],P=ae=A[1],Q=le=A[2],ne=T=A[3],xe=R=A[4];for(var q,k=0;k<80;k+=1)q=ie+_[E+$[k]]|0,k<16?q+=p(ae,le,T)+D[0]:k<32?q+=m(ae,le,T)+D[1]:k<48?q+=f(ae,le,T)+D[2]:k<64?q+=v(ae,le,T)+D[3]:q+=x(ae,le,T)+D[4],q=q|0,q=I(q,G[k]),q=q+R|0,ie=R,R=T,T=I(le,10),le=ae,ae=q,q=N+_[E+V[k]]|0,k<16?q+=x(P,Q,ne)+b[0]:k<32?q+=v(P,Q,ne)+b[1]:k<48?q+=f(P,Q,ne)+b[2]:k<64?q+=m(P,Q,ne)+b[3]:q+=p(P,Q,ne)+b[4],q=q|0,q=I(q,ue[k]),q=q+xe|0,N=xe,xe=ne,ne=I(Q,10),Q=P,P=q;q=A[1]+le+ne|0,A[1]=A[2]+T+xe|0,A[2]=A[3]+R+N|0,A[3]=A[4]+ie+P|0,A[4]=A[0]+ae+Q|0,A[0]=q},_doFinalize:function(){var _=this._data,E=_.words,k=this._nDataBytes*8,C=_.sigBytes*8;E[C>>>5]|=128<<24-C%32,E[(C+64>>>9<<4)+14]=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360,_.sigBytes=(E.length+1)*4,this._process();for(var S=this._hash,A=S.words,D=0;D<5;D++){var b=A[D];A[D]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}return S},clone:function(){var _=a.clone.call(this);return _._hash=this._hash.clone(),_}});function p(_,E,k){return _^E^k}function m(_,E,k){return _&E|~_&k}function f(_,E,k){return(_|~E)^k}function v(_,E,k){return _&k|E&~k}function x(_,E,k){return _^(E|~k)}function I(_,E){return _<<E|_>>>32-E}i.RIPEMD160=a._createHelper(w),i.HmacRIPEMD160=a._createHmacHelper(w)}(),n.RIPEMD160})})(Jv);var Ml={exports:{}};(function(t,e){(function(n,r){t.exports=r(te.exports)})(Z,function(n){(function(){var r=n,i=r.lib,s=i.Base,o=r.enc,a=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(u,c){u=this._hasher=new u.init,typeof c=="string"&&(c=a.parse(c));var d=u.blockSize,h=d*4;c.sigBytes>h&&(c=u.finalize(c)),c.clamp();for(var g=this._oKey=c.clone(),y=this._iKey=c.clone(),w=g.words,p=y.words,m=0;m<d;m++)w[m]^=1549556828,p[m]^=909522486;g.sigBytes=y.sigBytes=h,this.reset()},reset:function(){var u=this._hasher;u.reset(),u.update(this._iKey)},update:function(u){return this._hasher.update(u),this},finalize:function(u){var c=this._hasher,d=c.finalize(u);c.reset();var h=c.finalize(this._oKey.clone().concat(d));return h}})})()})})(Ml);var Zv={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ll.exports,Ml.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,l=a.SHA1,u=a.HMAC,c=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,h){for(var g=this.cfg,y=u.create(g.hasher,d),w=o.create(),p=o.create([1]),m=w.words,f=p.words,v=g.keySize,x=g.iterations;m.length<v;){var I=y.update(h).finalize(p);y.reset();for(var _=I.words,E=_.length,k=I,C=1;C<x;C++){k=y.finalize(k),y.reset();for(var S=k.words,A=0;A<E;A++)_[A]^=S[A]}w.concat(I),f[0]++}return w.sigBytes=v*4,w}});r.PBKDF2=function(d,h,g){return c.create(g).compute(d,h)}}(),n.PBKDF2})})(Zv);var jn={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ll.exports,Ml.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,l=a.MD5,u=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(c){this.cfg=this.cfg.extend(c)},compute:function(c,d){for(var h,g=this.cfg,y=g.hasher.create(),w=o.create(),p=w.words,m=g.keySize,f=g.iterations;p.length<m;){h&&y.update(h),h=y.update(c).finalize(d),y.reset();for(var v=1;v<f;v++)h=y.finalize(h),y.reset();w.concat(h)}return w.sigBytes=m*4,w}});r.EvpKDF=function(c,d,h){return u.create(h).compute(c,d)}}(),n.EvpKDF})})(jn);var be={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,jn.exports)})(Z,function(n){n.lib.Cipher||function(r){var i=n,s=i.lib,o=s.Base,a=s.WordArray,l=s.BufferedBlockAlgorithm,u=i.enc;u.Utf8;var c=u.Base64,d=i.algo,h=d.EvpKDF,g=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(S,A){return this.create(this._ENC_XFORM_MODE,S,A)},createDecryptor:function(S,A){return this.create(this._DEC_XFORM_MODE,S,A)},init:function(S,A,D){this.cfg=this.cfg.extend(D),this._xformMode=S,this._key=A,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(S){return this._append(S),this._process()},finalize:function(S){S&&this._append(S);var A=this._doFinalize();return A},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function S(A){return typeof A=="string"?C:_}return function(A){return{encrypt:function(D,b,$){return S(b).encrypt(A,D,b,$)},decrypt:function(D,b,$){return S(b).decrypt(A,D,b,$)}}}}()});s.StreamCipher=g.extend({_doFinalize:function(){var S=this._process(!0);return S},blockSize:1});var y=i.mode={},w=s.BlockCipherMode=o.extend({createEncryptor:function(S,A){return this.Encryptor.create(S,A)},createDecryptor:function(S,A){return this.Decryptor.create(S,A)},init:function(S,A){this._cipher=S,this._iv=A}}),p=y.CBC=function(){var S=w.extend();S.Encryptor=S.extend({processBlock:function(D,b){var $=this._cipher,V=$.blockSize;A.call(this,D,b,V),$.encryptBlock(D,b),this._prevBlock=D.slice(b,b+V)}}),S.Decryptor=S.extend({processBlock:function(D,b){var $=this._cipher,V=$.blockSize,G=D.slice(b,b+V);$.decryptBlock(D,b),A.call(this,D,b,V),this._prevBlock=G}});function A(D,b,$){var V,G=this._iv;G?(V=G,this._iv=r):V=this._prevBlock;for(var ue=0;ue<$;ue++)D[b+ue]^=V[ue]}return S}(),m=i.pad={},f=m.Pkcs7={pad:function(S,A){for(var D=A*4,b=D-S.sigBytes%D,$=b<<24|b<<16|b<<8|b,V=[],G=0;G<b;G+=4)V.push($);var ue=a.create(V,b);S.concat(ue)},unpad:function(S){var A=S.words[S.sigBytes-1>>>2]&255;S.sigBytes-=A}};s.BlockCipher=g.extend({cfg:g.cfg.extend({mode:p,padding:f}),reset:function(){var S;g.reset.call(this);var A=this.cfg,D=A.iv,b=A.mode;this._xformMode==this._ENC_XFORM_MODE?S=b.createEncryptor:(S=b.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==S?this._mode.init(this,D&&D.words):(this._mode=S.call(b,this,D&&D.words),this._mode.__creator=S)},_doProcessBlock:function(S,A){this._mode.processBlock(S,A)},_doFinalize:function(){var S,A=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(A.pad(this._data,this.blockSize),S=this._process(!0)):(S=this._process(!0),A.unpad(S)),S},blockSize:128/32});var v=s.CipherParams=o.extend({init:function(S){this.mixIn(S)},toString:function(S){return(S||this.formatter).stringify(this)}}),x=i.format={},I=x.OpenSSL={stringify:function(S){var A,D=S.ciphertext,b=S.salt;return b?A=a.create([1398893684,1701076831]).concat(b).concat(D):A=D,A.toString(c)},parse:function(S){var A,D=c.parse(S),b=D.words;return b[0]==1398893684&&b[1]==1701076831&&(A=a.create(b.slice(2,4)),b.splice(0,4),D.sigBytes-=16),v.create({ciphertext:D,salt:A})}},_=s.SerializableCipher=o.extend({cfg:o.extend({format:I}),encrypt:function(S,A,D,b){b=this.cfg.extend(b);var $=S.createEncryptor(D,b),V=$.finalize(A),G=$.cfg;return v.create({ciphertext:V,key:D,iv:G.iv,algorithm:S,mode:G.mode,padding:G.padding,blockSize:S.blockSize,formatter:b.format})},decrypt:function(S,A,D,b){b=this.cfg.extend(b),A=this._parse(A,b.format);var $=S.createDecryptor(D,b).finalize(A.ciphertext);return $},_parse:function(S,A){return typeof S=="string"?A.parse(S,this):S}}),E=i.kdf={},k=E.OpenSSL={execute:function(S,A,D,b){b||(b=a.random(64/8));var $=h.create({keySize:A+D}).compute(S,b),V=a.create($.words.slice(A),D*4);return $.sigBytes=A*4,v.create({key:$,iv:V,salt:b})}},C=s.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:k}),encrypt:function(S,A,D,b){b=this.cfg.extend(b);var $=b.kdf.execute(D,S.keySize,S.ivSize);b.iv=$.iv;var V=_.encrypt.call(this,S,A,$.key,b);return V.mixIn($),V},decrypt:function(S,A,D,b){b=this.cfg.extend(b),A=this._parse(A,b.format);var $=b.kdf.execute(D,S.keySize,S.ivSize,A.salt);b.iv=$.iv;var V=_.decrypt.call(this,S,A,$.key,b);return V}})}()})})(be);var ey={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.mode.CFB=function(){var r=n.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize;i.call(this,s,o,l,a),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,u=s.slice(o,o+l);i.call(this,s,o,l,a),this._prevBlock=u}});function i(s,o,a,l){var u,c=this._iv;c?(u=c.slice(0),this._iv=void 0):u=this._prevBlock,l.encryptBlock(u,0);for(var d=0;d<a;d++)s[o+d]^=u[d]}return r}(),n.mode.CFB})})(ey);var ty={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.mode.CTR=function(){var r=n.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,u=this._iv,c=this._counter;u&&(c=this._counter=u.slice(0),this._iv=void 0);var d=c.slice(0);a.encryptBlock(d,0),c[l-1]=c[l-1]+1|0;for(var h=0;h<l;h++)s[o+h]^=d[h]}});return r.Decryptor=i,r}(),n.mode.CTR})})(ty);var ny={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return n.mode.CTRGladman=function(){var r=n.lib.BlockCipherMode.extend();function i(a){if((a>>24&255)===255){var l=a>>16&255,u=a>>8&255,c=a&255;l===255?(l=0,u===255?(u=0,c===255?c=0:++c):++u):++l,a=0,a+=l<<16,a+=u<<8,a+=c}else a+=1<<24;return a}function s(a){return(a[0]=i(a[0]))===0&&(a[1]=i(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,l){var u=this._cipher,c=u.blockSize,d=this._iv,h=this._counter;d&&(h=this._counter=d.slice(0),this._iv=void 0),s(h);var g=h.slice(0);u.encryptBlock(g,0);for(var y=0;y<c;y++)a[l+y]^=g[y]}});return r.Decryptor=o,r}(),n.mode.CTRGladman})})(ny);var ry={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.mode.OFB=function(){var r=n.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,u=this._iv,c=this._keystream;u&&(c=this._keystream=u.slice(0),this._iv=void 0),a.encryptBlock(c,0);for(var d=0;d<l;d++)s[o+d]^=c[d]}});return r.Decryptor=i,r}(),n.mode.OFB})})(ry);var iy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.mode.ECB=function(){var r=n.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),n.mode.ECB})})(iy);var sy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,a=o-s%o,l=s+a-1;r.clamp(),r.words[l>>>2]|=a<<24-l%4*8,r.sigBytes+=a},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},n.pad.Ansix923})})(sy);var oy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(n.lib.WordArray.random(o-1)).concat(n.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},n.pad.Iso10126})})(oy);var ay={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.pad.Iso97971={pad:function(r,i){r.concat(n.lib.WordArray.create([2147483648],1)),n.pad.ZeroPadding.pad(r,i)},unpad:function(r){n.pad.ZeroPadding.unpad(r),r.sigBytes--}},n.pad.Iso97971})})(ay);var ly={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},n.pad.ZeroPadding})})(ly);var uy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return n.pad.NoPadding={pad:function(){},unpad:function(){}},n.pad.NoPadding})})(uy);var cy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,be.exports)})(Z,function(n){return function(r){var i=n,s=i.lib,o=s.CipherParams,a=i.enc,l=a.Hex,u=i.format;u.Hex={stringify:function(c){return c.ciphertext.toString(l)},parse:function(c){var d=l.parse(c);return o.create({ciphertext:d})}}}(),n.format.Hex})})(cy);var hy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ir.exports,kr.exports,jn.exports,be.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.BlockCipher,o=r.algo,a=[],l=[],u=[],c=[],d=[],h=[],g=[],y=[],w=[],p=[];(function(){for(var v=[],x=0;x<256;x++)x<128?v[x]=x<<1:v[x]=x<<1^283;for(var I=0,_=0,x=0;x<256;x++){var E=_^_<<1^_<<2^_<<3^_<<4;E=E>>>8^E&255^99,a[I]=E,l[E]=I;var k=v[I],C=v[k],S=v[C],A=v[E]*257^E*16843008;u[I]=A<<24|A>>>8,c[I]=A<<16|A>>>16,d[I]=A<<8|A>>>24,h[I]=A;var A=S*16843009^C*65537^k*257^I*16843008;g[E]=A<<24|A>>>8,y[E]=A<<16|A>>>16,w[E]=A<<8|A>>>24,p[E]=A,I?(I=k^v[v[v[S^k]]],_^=v[v[_]]):I=_=1}})();var m=[0,1,2,4,8,16,32,64,128,27,54],f=o.AES=s.extend({_doReset:function(){var v;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var x=this._keyPriorReset=this._key,I=x.words,_=x.sigBytes/4,E=this._nRounds=_+6,k=(E+1)*4,C=this._keySchedule=[],S=0;S<k;S++)S<_?C[S]=I[S]:(v=C[S-1],S%_?_>6&&S%_==4&&(v=a[v>>>24]<<24|a[v>>>16&255]<<16|a[v>>>8&255]<<8|a[v&255]):(v=v<<8|v>>>24,v=a[v>>>24]<<24|a[v>>>16&255]<<16|a[v>>>8&255]<<8|a[v&255],v^=m[S/_|0]<<24),C[S]=C[S-_]^v);for(var A=this._invKeySchedule=[],D=0;D<k;D++){var S=k-D;if(D%4)var v=C[S];else var v=C[S-4];D<4||S<=4?A[D]=v:A[D]=g[a[v>>>24]]^y[a[v>>>16&255]]^w[a[v>>>8&255]]^p[a[v&255]]}}},encryptBlock:function(v,x){this._doCryptBlock(v,x,this._keySchedule,u,c,d,h,a)},decryptBlock:function(v,x){var I=v[x+1];v[x+1]=v[x+3],v[x+3]=I,this._doCryptBlock(v,x,this._invKeySchedule,g,y,w,p,l);var I=v[x+1];v[x+1]=v[x+3],v[x+3]=I},_doCryptBlock:function(v,x,I,_,E,k,C,S){for(var A=this._nRounds,D=v[x]^I[0],b=v[x+1]^I[1],$=v[x+2]^I[2],V=v[x+3]^I[3],G=4,ue=1;ue<A;ue++){var ie=_[D>>>24]^E[b>>>16&255]^k[$>>>8&255]^C[V&255]^I[G++],ae=_[b>>>24]^E[$>>>16&255]^k[V>>>8&255]^C[D&255]^I[G++],le=_[$>>>24]^E[V>>>16&255]^k[D>>>8&255]^C[b&255]^I[G++],T=_[V>>>24]^E[D>>>16&255]^k[b>>>8&255]^C[$&255]^I[G++];D=ie,b=ae,$=le,V=T}var ie=(S[D>>>24]<<24|S[b>>>16&255]<<16|S[$>>>8&255]<<8|S[V&255])^I[G++],ae=(S[b>>>24]<<24|S[$>>>16&255]<<16|S[V>>>8&255]<<8|S[D&255])^I[G++],le=(S[$>>>24]<<24|S[V>>>16&255]<<16|S[D>>>8&255]<<8|S[b&255])^I[G++],T=(S[V>>>24]<<24|S[D>>>16&255]<<16|S[b>>>8&255]<<8|S[$&255])^I[G++];v[x]=ie,v[x+1]=ae,v[x+2]=le,v[x+3]=T},keySize:256/32});r.AES=s._createHelper(f)}(),n.AES})})(hy);var fy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ir.exports,kr.exports,jn.exports,be.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.WordArray,o=i.BlockCipher,a=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],u=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],d=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],h=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],g=a.DES=o.extend({_doReset:function(){for(var m=this._key,f=m.words,v=[],x=0;x<56;x++){var I=l[x]-1;v[x]=f[I>>>5]>>>31-I%32&1}for(var _=this._subKeys=[],E=0;E<16;E++){for(var k=_[E]=[],C=c[E],x=0;x<24;x++)k[x/6|0]|=v[(u[x]-1+C)%28]<<31-x%6,k[4+(x/6|0)]|=v[28+(u[x+24]-1+C)%28]<<31-x%6;k[0]=k[0]<<1|k[0]>>>31;for(var x=1;x<7;x++)k[x]=k[x]>>>(x-1)*4+3;k[7]=k[7]<<5|k[7]>>>27}for(var S=this._invSubKeys=[],x=0;x<16;x++)S[x]=_[15-x]},encryptBlock:function(m,f){this._doCryptBlock(m,f,this._subKeys)},decryptBlock:function(m,f){this._doCryptBlock(m,f,this._invSubKeys)},_doCryptBlock:function(m,f,v){this._lBlock=m[f],this._rBlock=m[f+1],y.call(this,4,252645135),y.call(this,16,65535),w.call(this,2,858993459),w.call(this,8,16711935),y.call(this,1,1431655765);for(var x=0;x<16;x++){for(var I=v[x],_=this._lBlock,E=this._rBlock,k=0,C=0;C<8;C++)k|=d[C][((E^I[C])&h[C])>>>0];this._lBlock=E,this._rBlock=_^k}var S=this._lBlock;this._lBlock=this._rBlock,this._rBlock=S,y.call(this,1,1431655765),w.call(this,8,16711935),w.call(this,2,858993459),y.call(this,16,65535),y.call(this,4,252645135),m[f]=this._lBlock,m[f+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function y(m,f){var v=(this._lBlock>>>m^this._rBlock)&f;this._rBlock^=v,this._lBlock^=v<<m}function w(m,f){var v=(this._rBlock>>>m^this._lBlock)&f;this._lBlock^=v,this._rBlock^=v<<m}r.DES=o._createHelper(g);var p=a.TripleDES=o.extend({_doReset:function(){var m=this._key,f=m.words;if(f.length!==2&&f.length!==4&&f.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var v=f.slice(0,2),x=f.length<4?f.slice(0,2):f.slice(2,4),I=f.length<6?f.slice(0,2):f.slice(4,6);this._des1=g.createEncryptor(s.create(v)),this._des2=g.createEncryptor(s.create(x)),this._des3=g.createEncryptor(s.create(I))},encryptBlock:function(m,f){this._des1.encryptBlock(m,f),this._des2.decryptBlock(m,f),this._des3.encryptBlock(m,f)},decryptBlock:function(m,f){this._des3.decryptBlock(m,f),this._des2.encryptBlock(m,f),this._des1.decryptBlock(m,f)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(p)}(),n.TripleDES})})(fy);var dy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ir.exports,kr.exports,jn.exports,be.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.StreamCipher,o=r.algo,a=o.RC4=s.extend({_doReset:function(){for(var c=this._key,d=c.words,h=c.sigBytes,g=this._S=[],y=0;y<256;y++)g[y]=y;for(var y=0,w=0;y<256;y++){var p=y%h,m=d[p>>>2]>>>24-p%4*8&255;w=(w+g[y]+m)%256;var f=g[y];g[y]=g[w],g[w]=f}this._i=this._j=0},_doProcessBlock:function(c,d){c[d]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var c=this._S,d=this._i,h=this._j,g=0,y=0;y<4;y++){d=(d+1)%256,h=(h+c[d])%256;var w=c[d];c[d]=c[h],c[h]=w,g|=c[(c[d]+c[h])%256]<<24-y*8}return this._i=d,this._j=h,g}r.RC4=s._createHelper(a);var u=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var c=this.cfg.drop;c>0;c--)l.call(this)}});r.RC4Drop=s._createHelper(u)}(),n.RC4})})(dy);var py={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ir.exports,kr.exports,jn.exports,be.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],l=[],u=[],c=o.Rabbit=s.extend({_doReset:function(){for(var h=this._key.words,g=this.cfg.iv,y=0;y<4;y++)h[y]=(h[y]<<8|h[y]>>>24)&16711935|(h[y]<<24|h[y]>>>8)&4278255360;var w=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],p=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var y=0;y<4;y++)d.call(this);for(var y=0;y<8;y++)p[y]^=w[y+4&7];if(g){var m=g.words,f=m[0],v=m[1],x=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,I=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,_=x>>>16|I&4294901760,E=I<<16|x&65535;p[0]^=x,p[1]^=_,p[2]^=I,p[3]^=E,p[4]^=x,p[5]^=_,p[6]^=I,p[7]^=E;for(var y=0;y<4;y++)d.call(this)}},_doProcessBlock:function(h,g){var y=this._X;d.call(this),a[0]=y[0]^y[5]>>>16^y[3]<<16,a[1]=y[2]^y[7]>>>16^y[5]<<16,a[2]=y[4]^y[1]>>>16^y[7]<<16,a[3]=y[6]^y[3]>>>16^y[1]<<16;for(var w=0;w<4;w++)a[w]=(a[w]<<8|a[w]>>>24)&16711935|(a[w]<<24|a[w]>>>8)&4278255360,h[g+w]^=a[w]},blockSize:128/32,ivSize:64/32});function d(){for(var h=this._X,g=this._C,y=0;y<8;y++)l[y]=g[y];g[0]=g[0]+1295307597+this._b|0,g[1]=g[1]+3545052371+(g[0]>>>0<l[0]>>>0?1:0)|0,g[2]=g[2]+886263092+(g[1]>>>0<l[1]>>>0?1:0)|0,g[3]=g[3]+1295307597+(g[2]>>>0<l[2]>>>0?1:0)|0,g[4]=g[4]+3545052371+(g[3]>>>0<l[3]>>>0?1:0)|0,g[5]=g[5]+886263092+(g[4]>>>0<l[4]>>>0?1:0)|0,g[6]=g[6]+1295307597+(g[5]>>>0<l[5]>>>0?1:0)|0,g[7]=g[7]+3545052371+(g[6]>>>0<l[6]>>>0?1:0)|0,this._b=g[7]>>>0<l[7]>>>0?1:0;for(var y=0;y<8;y++){var w=h[y]+g[y],p=w&65535,m=w>>>16,f=((p*p>>>17)+p*m>>>15)+m*m,v=((w&4294901760)*w|0)+((w&65535)*w|0);u[y]=f^v}h[0]=u[0]+(u[7]<<16|u[7]>>>16)+(u[6]<<16|u[6]>>>16)|0,h[1]=u[1]+(u[0]<<8|u[0]>>>24)+u[7]|0,h[2]=u[2]+(u[1]<<16|u[1]>>>16)+(u[0]<<16|u[0]>>>16)|0,h[3]=u[3]+(u[2]<<8|u[2]>>>24)+u[1]|0,h[4]=u[4]+(u[3]<<16|u[3]>>>16)+(u[2]<<16|u[2]>>>16)|0,h[5]=u[5]+(u[4]<<8|u[4]>>>24)+u[3]|0,h[6]=u[6]+(u[5]<<16|u[5]>>>16)+(u[4]<<16|u[4]>>>16)|0,h[7]=u[7]+(u[6]<<8|u[6]>>>24)+u[5]|0}r.Rabbit=s._createHelper(c)}(),n.Rabbit})})(py);var gy={exports:{}};(function(t,e){(function(n,r,i){t.exports=r(te.exports,Ir.exports,kr.exports,jn.exports,be.exports)})(Z,function(n){return function(){var r=n,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],l=[],u=[],c=o.RabbitLegacy=s.extend({_doReset:function(){var h=this._key.words,g=this.cfg.iv,y=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],w=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var p=0;p<4;p++)d.call(this);for(var p=0;p<8;p++)w[p]^=y[p+4&7];if(g){var m=g.words,f=m[0],v=m[1],x=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,I=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,_=x>>>16|I&4294901760,E=I<<16|x&65535;w[0]^=x,w[1]^=_,w[2]^=I,w[3]^=E,w[4]^=x,w[5]^=_,w[6]^=I,w[7]^=E;for(var p=0;p<4;p++)d.call(this)}},_doProcessBlock:function(h,g){var y=this._X;d.call(this),a[0]=y[0]^y[5]>>>16^y[3]<<16,a[1]=y[2]^y[7]>>>16^y[5]<<16,a[2]=y[4]^y[1]>>>16^y[7]<<16,a[3]=y[6]^y[3]>>>16^y[1]<<16;for(var w=0;w<4;w++)a[w]=(a[w]<<8|a[w]>>>24)&16711935|(a[w]<<24|a[w]>>>8)&4278255360,h[g+w]^=a[w]},blockSize:128/32,ivSize:64/32});function d(){for(var h=this._X,g=this._C,y=0;y<8;y++)l[y]=g[y];g[0]=g[0]+1295307597+this._b|0,g[1]=g[1]+3545052371+(g[0]>>>0<l[0]>>>0?1:0)|0,g[2]=g[2]+886263092+(g[1]>>>0<l[1]>>>0?1:0)|0,g[3]=g[3]+1295307597+(g[2]>>>0<l[2]>>>0?1:0)|0,g[4]=g[4]+3545052371+(g[3]>>>0<l[3]>>>0?1:0)|0,g[5]=g[5]+886263092+(g[4]>>>0<l[4]>>>0?1:0)|0,g[6]=g[6]+1295307597+(g[5]>>>0<l[5]>>>0?1:0)|0,g[7]=g[7]+3545052371+(g[6]>>>0<l[6]>>>0?1:0)|0,this._b=g[7]>>>0<l[7]>>>0?1:0;for(var y=0;y<8;y++){var w=h[y]+g[y],p=w&65535,m=w>>>16,f=((p*p>>>17)+p*m>>>15)+m*m,v=((w&4294901760)*w|0)+((w&65535)*w|0);u[y]=f^v}h[0]=u[0]+(u[7]<<16|u[7]>>>16)+(u[6]<<16|u[6]>>>16)|0,h[1]=u[1]+(u[0]<<8|u[0]>>>24)+u[7]|0,h[2]=u[2]+(u[1]<<16|u[1]>>>16)+(u[0]<<16|u[0]>>>16)|0,h[3]=u[3]+(u[2]<<8|u[2]>>>24)+u[1]|0,h[4]=u[4]+(u[3]<<16|u[3]>>>16)+(u[2]<<16|u[2]>>>16)|0,h[5]=u[5]+(u[4]<<8|u[4]>>>24)+u[3]|0,h[6]=u[6]+(u[5]<<16|u[5]>>>16)+(u[4]<<16|u[4]>>>16)|0,h[7]=u[7]+(u[6]<<8|u[6]>>>24)+u[5]|0}r.RabbitLegacy=s._createHelper(c)}(),n.RabbitLegacy})})(gy);(function(t,e){(function(n,r,i){t.exports=r(te.exports,ho.exports,qv.exports,Kv.exports,Ir.exports,Gv.exports,kr.exports,Ll.exports,C0.exports,Xv.exports,A0.exports,Qv.exports,Yv.exports,Jv.exports,Ml.exports,Zv.exports,jn.exports,be.exports,ey.exports,ty.exports,ny.exports,ry.exports,iy.exports,sy.exports,oy.exports,ay.exports,ly.exports,uy.exports,cy.exports,hy.exports,fy.exports,dy.exports,py.exports,gy.exports)})(Z,function(n){return n})})(Wv);var PN=Wv.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(my(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yy=function(t){const e=my(t);return vy.encodeByteArray(e,!0)},uS=function(t){try{return vy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xy(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function R0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hS(){return Ne().indexOf("Electron/")>=0}function _y(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fS(){return Ne().indexOf("MSAppHost/")>=0}function Ey(){return typeof indexedDB=="object"}function Sy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function dS(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="FirebaseError";class on extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=pS,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function gS(t,e){return t.replace(mS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mS=/\{\$([^}]+)}/g;function vS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tp(s)&&Tp(o)){if(!zs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yS(t,e){const n=new xS(t,e);return n.subscribe.bind(n)}class xS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vu),i.error===void 0&&(i.error=Vu),i.complete===void 0&&(i.complete=Vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1e3,ES=2,SS=4*60*60*1e3,IS=.5;function Cp(t,e=_S,n=ES){const r=e*Math.pow(n,t),i=Math.round(IS*r*(Math.random()-.5)*2);return Math.min(SS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CS(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TS(t){return t===qn?void 0:t}function CS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const RS={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},NS=oe.INFO,DS={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},PS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=NS,this._logHandler=PS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function bS(t){return Array.prototype.slice.call(t)}function Iy(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function N0(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),Iy(r).then(s,o)});return i.request=r,i}function OS(t,e,n){var r=N0(t,e,n);return r.then(function(i){if(!!i)return new Hs(i,r.request)})}function Ni(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function D0(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return N0(this[e],i,arguments)})})}function Bl(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function ky(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return OS(this[e],i,arguments)})})}function Cr(t){this._index=t}Ni(Cr,"_index",["name","keyPath","multiEntry","unique"]);D0(Cr,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);ky(Cr,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Hs(t,e){this._cursor=t,this._request=e}Ni(Hs,"_cursor",["direction","key","primaryKey","value"]);D0(Hs,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Hs.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Iy(e._request).then(function(r){if(!!r)return new Hs(r,e._request)})})})});function Wt(t){this._store=t}Wt.prototype.createIndex=function(){return new Cr(this._store.createIndex.apply(this._store,arguments))};Wt.prototype.index=function(){return new Cr(this._store.index.apply(this._store,arguments))};Ni(Wt,"_store",["name","keyPath","indexNames","autoIncrement"]);D0(Wt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);ky(Wt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Bl(Wt,"_store",IDBObjectStore,["deleteIndex"]);function po(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}po.prototype.objectStore=function(){return new Wt(this._tx.objectStore.apply(this._tx,arguments))};Ni(po,"_tx",["objectStoreNames","mode"]);Bl(po,"_tx",IDBTransaction,["abort"]);function Ul(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new po(n)}Ul.prototype.createObjectStore=function(){return new Wt(this._db.createObjectStore.apply(this._db,arguments))};Ni(Ul,"_db",["name","version","objectStoreNames"]);Bl(Ul,"_db",IDBDatabase,["deleteObjectStore","close"]);function Fl(t){this._db=t}Fl.prototype.transaction=function(){return new po(this._db.transaction.apply(this._db,arguments))};Ni(Fl,"_db",["name","version","objectStoreNames"]);Bl(Fl,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Wt,Cr].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=bS(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[Cr,Wt].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function Ty(t,e,n){var r=N0(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new Ul(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new Fl(s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",Ap="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new $l("@firebase/app"),$S="@firebase/app-compat",BS="@firebase/analytics-compat",US="@firebase/analytics",FS="@firebase/app-check-compat",VS="@firebase/app-check",jS="@firebase/auth",zS="@firebase/auth-compat",HS="@firebase/database",WS="@firebase/database-compat",qS="@firebase/functions",KS="@firebase/functions-compat",GS="@firebase/installations",XS="@firebase/installations-compat",QS="@firebase/messaging",YS="@firebase/messaging-compat",JS="@firebase/performance",ZS="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",rI="@firebase/storage-compat",iI="@firebase/firestore",sI="@firebase/firestore-compat",oI="firebase",aI="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="[DEFAULT]",lI={[Xc]:"fire-core",[$S]:"fire-core-compat",[US]:"fire-analytics",[BS]:"fire-analytics-compat",[VS]:"fire-app-check",[FS]:"fire-app-check-compat",[jS]:"fire-auth",[zS]:"fire-auth-compat",[HS]:"fire-rtdb",[WS]:"fire-rtdb-compat",[qS]:"fire-fn",[KS]:"fire-fn-compat",[GS]:"fire-iid",[XS]:"fire-iid-compat",[QS]:"fire-fcm",[YS]:"fire-fcm-compat",[JS]:"fire-perf",[ZS]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[rI]:"fire-gcs-compat",[iI]:"fire-fst",[sI]:"fire-fst-compat","fire-js":"fire-js",[oI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,Qc=new Map;function uI(t,e){try{t.container.addComponent(e)}catch(n){P0.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(Qc.has(e))return P0.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,t);for(const n of Qa.values())uI(n,t);return!0}function Ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Mn=new Tr("app","Firebase",cI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=aI;function bN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Cy,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Mn.create("bad-app-name",{appName:String(r)});const i=Qa.get(r);if(i){if(zs(t,i.options)&&zs(n,i.config))return i;throw Mn.create("duplicate-app",{appName:r})}const s=new AS(r);for(const a of Qc.values())s.addComponent(a);const o=new hI(t,n,s);return Qa.set(r,o),o}function b0(t=Cy){const e=Qa.get(t);if(!e)throw Mn.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=lI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),P0.warn(a.join(" "));return}Ft(new Pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebase-heartbeat-database",dI=1,cr="firebase-heartbeat-store";let ju=null;function O0(){return ju||(ju=Ty(fI,dI,t=>{switch(t.oldVersion){case 0:t.createObjectStore(cr)}}).catch(t=>{throw Mn.create("storage-open",{originalErrorMessage:t.message})})),ju}async function pI(t){try{return(await O0()).transaction(cr).objectStore(cr).get(L0(t))}catch(e){throw Mn.create("storage-get",{originalErrorMessage:e.message})}}async function zu(t,e){try{const r=(await O0()).transaction(cr,"readwrite");return await r.objectStore(cr).put(e,L0(t)),r.complete}catch(n){throw Mn.create("storage-set",{originalErrorMessage:n.message})}}async function gI(t){try{const n=(await O0()).transaction(cr,"readwrite");return await n.objectStore(cr).delete(L0(t)),n.complete}catch(e){throw Mn.create("storage-delete",{originalErrorMessage:e.message})}}function L0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=1024,vI=30*24*60*60*1e3;class yI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xI();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(i=>i.date===r))return this._heartbeatsCache.push({date:r,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=wI(this._heartbeatsCache),r=yy(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function xI(){return new Date().toISOString().substring(0,10)}function wI(t,e=mI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.userAgent===i.userAgent);if(s){if(s.dates.push(i.date),Rp(n)>e){s.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),Rp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?Sy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return zu(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{heartbeats:r.filter(i=>!e.includes(i))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return gI(this.app)}}function Rp(t){return yy(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){Ft(new Pt("platform-logger",e=>new LS(e),"PRIVATE")),Ft(new Pt("heartbeat",e=>new yI(e),"PRIVATE")),xt(Xc,Ap,t),xt(Xc,Ap,"esm2017"),xt("fire-js","")}EI("");var SI="firebase",II="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(SI,II,"app");const Ay="@firebase/installations",M0="0.5.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=1e4,Ny=`w:${M0}`,Dy="FIS_v2",kI="https://firebaseinstallations.googleapis.com/v1",TI=60*60*1e3,CI="installations",AI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},hr=new Tr(CI,AI,RI);function Py(t){return t instanceof on&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by({projectId:t}){return`${kI}/projects/${t}/installations`}function Oy(t){return{token:t.token,requestStatus:2,expiresIn:DI(t.expiresIn),creationTime:Date.now()}}async function Ly(t,e){const r=(await e.json()).error;return hr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function My({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NI(t,{refreshToken:e}){const n=My(t);return n.append("Authorization",PI(e)),n}async function $y(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DI(t){return Number(t.replace("s","000"))}function PI(t){return`${Dy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,{fid:e}){const n=by(t),r=My(t),i={fid:e,authVersion:Dy,appId:t.appId,sdkVersion:Ny},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await $y(()=>fetch(n,s));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Oy(a.authToken)}}else throw await Ly("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^[cdef][\w-]{21}$/,Yc="";function MI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$I(t);return LI.test(n)?n:Yc}catch{return Yc}}function $I(t){return OI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;function Fy(t,e){const n=Vl(t);Vy(n,e),BI(n,e)}function Vy(t,e){const n=Uy.get(t);if(!!n)for(const r of n)r(e)}function BI(t,e){const n=UI();n&&n.postMessage({key:t,fid:e}),FI()}let Zn=null;function UI(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=t=>{Vy(t.data.key,t.data.fid)}),Zn}function FI(){Uy.size===0&&Zn&&(Zn.close(),Zn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebase-installations-database",jI=1,fr="firebase-installations-store";let Hu=null;function $0(){return Hu||(Hu=Ty(VI,jI,t=>{switch(t.oldVersion){case 0:t.createObjectStore(fr)}})),Hu}async function Ya(t,e){const n=Vl(t),i=(await $0()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n);return await s.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&Fy(t,e.fid),e}async function jy(t){const e=Vl(t),r=(await $0()).transaction(fr,"readwrite");await r.objectStore(fr).delete(e),await r.complete}async function jl(t,e){const n=Vl(t),i=(await $0()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&Fy(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t){let e;const n=await jl(t,r=>{const i=zI(r),s=HI(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Yc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zI(t){const e=t||{fid:MI(),registrationStatus:0};return zy(e)}function HI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=WI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qI(t)}:{installationEntry:e}}async function WI(t,e){try{const n=await bI(t,e);return Ya(t,n)}catch(n){throw Py(n)&&n.customData.serverCode===409?await jy(t):await Ya(t,{fid:e.fid,registrationStatus:0}),n}}async function qI(t){let e=await Np(t);for(;e.registrationStatus===1;)await By(100),e=await Np(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await B0(t);return r||n}return e}function Np(t){return jl(t,e=>{if(!e)throw hr.create("installation-not-found");return zy(e)})}function zy(t){return KI(t)?{fid:t.fid,registrationStatus:0}:t}function KI(t){return t.registrationStatus===1&&t.registrationTime+Ry<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI({appConfig:t,platformLoggerProvider:e},n){const r=XI(t,n),i=NI(t,n),s=e.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Ny}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await $y(()=>fetch(r,a));if(l.ok){const u=await l.json();return Oy(u)}else throw await Ly("Generate Auth Token",l)}function XI(t,{fid:e}){return`${by(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e=!1){let n;const r=await jl(t.appConfig,s=>{if(!Hy(s))throw hr.create("not-registered");const o=s.authToken;if(!e&&JI(o))return s;if(o.requestStatus===1)return n=QI(t,e),s;{if(!navigator.onLine)throw hr.create("app-offline");const a=ek(s);return n=YI(t,a),a}});return n?await n:r.authToken}async function QI(t,e){let n=await Dp(t.appConfig);for(;n.authToken.requestStatus===1;)await By(100),n=await Dp(t.appConfig);const r=n.authToken;return r.requestStatus===0?U0(t,e):r}function Dp(t){return jl(t,e=>{if(!Hy(e))throw hr.create("not-registered");const n=e.authToken;return tk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function YI(t,e){try{const n=await GI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ya(t.appConfig,r),n}catch(n){if(Py(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ya(t.appConfig,r)}throw n}}function Hy(t){return t!==void 0&&t.registrationStatus===2}function JI(t){return t.requestStatus===2&&!ZI(t)}function ZI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TI}function ek(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tk(t){return t.requestStatus===1&&t.requestTime+Ry<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t){const e=t,{installationEntry:n,registrationPromise:r}=await B0(e.appConfig);return r?r.catch(console.error):U0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e=!1){const n=t;return await ik(n.appConfig),(await U0(n,e)).token}async function ik(t){const{registrationPromise:e}=await B0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){if(!t||!t.options)throw Wu("App Configuration");if(!t.name)throw Wu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wu(t){return hr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="installations",ok="installations-internal",ak=t=>{const e=t.getProvider("app").getImmediate(),n=sk(e),r=Ar(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()}},lk=t=>{const e=t.getProvider("app").getImmediate(),n=Ar(e,Wy).getImmediate();return{getId:()=>nk(n),getToken:i=>rk(n,i)}};function uk(){Ft(new Pt(Wy,ak,"PUBLIC")),Ft(new Pt(ok,lk,"PRIVATE"))}uk();xt(Ay,M0);xt(Ay,M0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="analytics",ck="firebase_id",hk="origin",fk=60*1e3,dk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new $l("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function pk(t,e){const n=document.createElement("script");n.src=`${qy}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function gk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function mk(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Ky(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){ct.error(a)}t("config",i,s)}async function vk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ky(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ct.error(s)}}function yk(t,e,n,r){async function i(s,o,a){try{s==="event"?await vk(t,e,n,o,a):s==="config"?await mk(t,e,n,r,o,a):t("set",o)}catch(l){ct.error(l)}}return i}function xk(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=yk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function wk(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(qy))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},wt=new Tr("analytics","Analytics",_k);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=30,Sk=1e3;class Ik{constructor(e={},n=Sk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gy=new Ik;function kk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Tk(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kk(r)},s=dk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Ck(t,e=Gy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw wt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw wt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Nk;return setTimeout(async()=>{a.abort()},n!==void 0?n:fk),Xy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Xy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Gy){const{appId:s,measurementId:o}=t;try{await Ak(r,e)}catch(a){if(o)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await Tk(t);return i.deleteThrottleMetadata(s),a}catch(a){if(!Rk(a)){if(i.deleteThrottleMetadata(s),o)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Cp(n,i.intervalMillis,Ek):Cp(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,u),ct.debug(`Calling attemptFetch again in ${l} millis`),Xy(t,u,r,i)}}function Ak(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Rk(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Nk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(){if(Ey())try{await Sy()}catch(t){return ct.warn(wt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return ct.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pk(t,e,n,r,i,s,o){var a;const l=Ck(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ct.error(g)),e.push(l);const u=Dk().then(g=>{if(g)return r.getId()}),[c,d]=await Promise.all([l,u]);wk()||pk(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[hk]="firebase",h.update=!0,d!=null&&(h[ck]=d),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.app=e}_delete(){return delete Is[this.app.options.appId],Promise.resolve()}}let Is={},Pp=[];const bp={};let qu="dataLayer",Ok="gtag",Op,Qy,Lp=!1;function Lk(){const t=[];if(R0()&&t.push("This is a browser extension environment."),dS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=wt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function Mk(t,e,n){Lk();const r=t.options.appId;if(!r)throw wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(Is[r]!=null)throw wt.create("already-exists",{id:r});if(!Lp){gk(qu);const{wrappedGtag:s,gtagCore:o}=xk(Is,Pp,bp,qu,Ok);Qy=s,Op=o,Lp=!0}return Is[r]=Pk(t,Pp,bp,e,Op,qu,n),new bk(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}function ON(t=b0()){t=It(t);const e=Ar(t,Ja);return e.isInitialized()?e.getImmediate():Bk(t)}function Bk(t,e={}){const n=Ar(t,Ja);if(n.isInitialized()){const i=n.getImmediate();if(zs(e,n.getOptions()))return i;throw wt.create("already-initialized")}return n.initialize({options:e})}function Uk(t,e,n,r){t=It(t),$k(Qy,Is[t.app.options.appId],e,n,r).catch(i=>ct.error(i))}const Mp="@firebase/analytics",$p="0.7.5";function Fk(){Ft(new Pt(Ja,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Mk(r,i,n)},"PUBLIC")),Ft(new Pt("analytics-internal",t,"PRIVATE")),xt(Mp,$p),xt(Mp,$p,"esm2017");function t(e){try{const n=e.getProvider(Ja).getImmediate();return{logEvent:(r,i,s)=>Uk(n,r,i,s)}}catch(n){throw wt.create("interop-component-reg-failed",{reason:n})}}}Fk();var Vk=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,F0=F0||{},W=Vk||self;function Za(){}function Jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jk(t){return Object.prototype.hasOwnProperty.call(t,Ku)&&t[Ku]||(t[Ku]=++zk)}var Ku="closure_uid_"+(1e9*Math.random()>>>0),zk=0;function Hk(t,e,n){return t.call.apply(t.bind,arguments)}function Wk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=Hk:$e=Wk,$e.apply(null,arguments)}function ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function zn(){this.s=this.s,this.o=this.o}var qk=0,Kk={};zn.prototype.s=!1;zn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),qk!=0)){var t=jk(this);delete Kk[t]}};zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Jy=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Gk(t){e:{var e=UT;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Bp(t){return Array.prototype.concat.apply([],arguments)}function V0(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function el(t){return/^[\s\xa0]*$/.test(t)}var Up=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function Gu(t,e){return t<e?-1:t>e?1:0}var Qe;e:{var Fp=W.navigator;if(Fp){var Vp=Fp.userAgent;if(Vp){Qe=Vp;break e}}Qe=""}function j0(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Zy(t){const e={};for(const n in t)e[n]=t[n];return e}var jp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function e1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<jp.length;s++)n=jp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function z0(t){return z0[" "](t),t}z0[" "]=Za;function Xk(t){var e=Jk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Qk=Xe(Qe,"Opera"),pi=Xe(Qe,"Trident")||Xe(Qe,"MSIE"),t1=Xe(Qe,"Edge"),Zc=t1||pi,n1=Xe(Qe,"Gecko")&&!(Xe(Qe.toLowerCase(),"webkit")&&!Xe(Qe,"Edge"))&&!(Xe(Qe,"Trident")||Xe(Qe,"MSIE"))&&!Xe(Qe,"Edge"),Yk=Xe(Qe.toLowerCase(),"webkit")&&!Xe(Qe,"Edge");function r1(){var t=W.document;return t?t.documentMode:void 0}var tl;e:{var Xu="",Qu=function(){var t=Qe;if(n1)return/rv:([^\);]+)(\)|;)/.exec(t);if(t1)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Yk)return/WebKit\/(\S+)/.exec(t);if(Qk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qu&&(Xu=Qu?Qu[1]:""),pi){var Yu=r1();if(Yu!=null&&Yu>parseFloat(Xu)){tl=String(Yu);break e}}tl=Xu}var Jk={};function Zk(){return Xk(function(){let t=0;const e=Up(String(tl)).split("."),n=Up("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Gu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Gu(i[2].length==0,s[2].length==0)||Gu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var eh;if(W.document&&pi){var zp=r1();eh=zp||parseInt(tl,10)||void 0}else eh=void 0;var eT=eh,tT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Za,e),W.removeEventListener("test",Za,e)}catch{}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};function Ws(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n1){e:{try{z0(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ws.Z.h.call(this)}}je(Ws,Ke);var nT={2:"touch",3:"pen",4:"mouse"};Ws.prototype.h=function(){Ws.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),rT=0;function iT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++rT,this.ca=this.fa=!1}function zl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Hl(t){this.src=t,this.g={},this.h=0}Hl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new iT(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function th(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Yy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var H0="closure_lm_"+(1e6*Math.random()|0),Ju={};function i1(t,e,n,r,i){if(r&&r.once)return o1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)i1(t,e[s],n,r,i);return null}return n=K0(n),t&&t[vo]?t.N(e,n,mo(r)?!!r.capture:!!r,i):s1(t,e,n,!1,r,i)}function s1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=mo(i)?!!i.capture:!!i,a=q0(t);if(a||(t[H0]=a=new Hl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=sT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(l1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sT(){function t(n){return e.call(t.src,t.listener,n)}var e=oT;return t}function o1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)o1(t,e[s],n,r,i);return null}return n=K0(n),t&&t[vo]?t.O(e,n,mo(r)?!!r.capture:!!r,i):s1(t,e,n,!0,r,i)}function a1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)a1(t,e[s],n,r,i);else r=mo(r)?!!r.capture:!!r,n=K0(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nh(s,n,r,i),-1<n&&(zl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=q0(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nh(e,n,r,i)),(n=-1<t?e[t]:null)&&W0(n))}function W0(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[vo])th(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(l1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=q0(e))?(th(n,t),n.h==0&&(n.src=null,e[H0]=null)):zl(t)}}}function l1(t){return t in Ju?Ju[t]:Ju[t]="on"+t}function oT(t,e){if(t.ca)t=!0;else{e=new Ws(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&W0(t),t=n.call(r,e)}return t}function q0(t){return t=t[H0],t instanceof Hl?t:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function K0(t){return typeof t=="function"?t:(t[Zu]||(t[Zu]=function(e){return t.handleEvent(e)}),t[Zu])}function De(){zn.call(this),this.i=new Hl(this),this.P=this,this.I=null}je(De,zn);De.prototype[vo]=!0;De.prototype.removeEventListener=function(t,e,n,r){a1(this,t,e,n,r)};function Be(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var i=e;e=new Ke(r,t),e1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ta(o,r,!0,e)&&i}if(o=e.g=t,i=ta(o,r,!0,e)&&i,i=ta(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ta(o,r,!1,e)&&i}De.prototype.M=function(){if(De.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zl(n[r]);delete t.g[e],t.h--}}this.I=null};De.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ta(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&th(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var G0=W.JSON.stringify;function aT(){var t=c1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lT{constructor(){this.h=this.g=null}add(e,n){const r=u1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var u1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uT,t=>t.reset());class uT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cT(t){W.setTimeout(()=>{throw t},0)}function X0(t,e){rh||hT(),ih||(rh(),ih=!0),c1.add(t,e)}var rh;function hT(){var t=W.Promise.resolve(void 0);rh=function(){t.then(fT)}}var ih=!1,c1=new lT;function fT(){for(var t;t=aT();){try{t.h.call(t.g)}catch(n){cT(n)}var e=u1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ih=!1}function Wl(t,e){De.call(this),this.h=t||1,this.g=e||W,this.j=$e(this.kb,this),this.l=Date.now()}je(Wl,De);B=Wl.prototype;B.da=!1;B.S=null;B.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(Q0(this),this.start()))}};B.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Q0(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}B.M=function(){Wl.Z.M.call(this),Q0(this),delete this.g};function Y0(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function h1(t){t.g=Y0(()=>{t.g=null,t.i&&(t.i=!1,h1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dT extends zn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:h1(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qs(t){zn.call(this),this.h=t,this.g={}}je(qs,zn);var Hp=[];function f1(t,e,n,r){Array.isArray(n)||(n&&(Hp[0]=n.toString()),n=Hp);for(var i=0;i<n.length;i++){var s=i1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function d1(t){j0(t.g,function(e,n){this.g.hasOwnProperty(n)&&W0(e)},t),t.g={}}qs.prototype.M=function(){qs.Z.M.call(this),d1(this)};qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ql(){this.g=!0}ql.prototype.Aa=function(){this.g=!1};function pT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vT(t,n)+(r?" "+r:"")})}function mT(t,e){t.info(function(){return"TIMEOUT: "+e})}ql.prototype.info=function(){};function vT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return G0(n)}catch{return e}}var Rr={},Wp=null;function Kl(){return Wp=Wp||new De}Rr.Ma="serverreachability";function p1(t){Ke.call(this,Rr.Ma,t)}je(p1,Ke);function Ks(t){const e=Kl();Be(e,new p1(e,t))}Rr.STAT_EVENT="statevent";function g1(t,e){Ke.call(this,Rr.STAT_EVENT,t),this.stat=e}je(g1,Ke);function Ye(t){const e=Kl();Be(e,new g1(e,t))}Rr.Na="timingevent";function m1(t,e){Ke.call(this,Rr.Na,t),this.size=e}je(m1,Ke);function yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Gl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},v1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function J0(){}J0.prototype.h=null;function qp(t){return t.h||(t.h=t.i())}function y1(){}var xo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Z0(){Ke.call(this,"d")}je(Z0,Ke);function ef(){Ke.call(this,"c")}je(ef,Ke);var sh;function Xl(){}je(Xl,J0);Xl.prototype.g=function(){return new XMLHttpRequest};Xl.prototype.i=function(){return{}};sh=new Xl;function wo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new qs(this),this.P=yT,t=Zc?125:void 0,this.W=new Wl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new x1}function x1(){this.i=null,this.g="",this.h=!1}var yT=45e3,oh={},nl={};B=wo.prototype;B.setTimeout=function(t){this.P=t};function ah(t,e,n){t.K=1,t.v=Yl(nn(e)),t.s=n,t.U=!0,w1(t,null)}function w1(t,e){t.F=Date.now(),_o(t),t.A=nn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),C1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new x1,t.g=K1(t.l,n?e:null,!t.s),0<t.O&&(t.L=new dT($e(t.Ia,t,t.g),t.O)),f1(t.V,t.g,"readystatechange",t.gb),e=t.H?Zy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ks(1),pT(t.j,t.u,t.A,t.m,t.X,t.s)}B.gb=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.Ia(t)};B.Ia=function(t){try{if(t==this.g)e:{const c=Qt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>c)&&(c!=3||Zc||this.g&&(this.h.h||this.g.ga()||Qp(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?Ks(3):Ks(2)),Ql(this);var n=this.g.ba();this.N=n;t:if(_1(this)){var r=Qp(this.g);t="";var i=r.length,s=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){er(this),ks(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,gT(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!el(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lh(this,n);else{this.i=!1,this.o=3,Ye(12),er(this),ks(this);break e}}this.U?(E1(this,c,o),Zc&&this.i&&c==3&&(f1(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),lh(this,o)),c==4&&er(this),this.i&&!this.I&&(c==4?z1(this.l,this):(this.i=!1,_o(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),er(this),ks(this)}}}catch{}finally{}};function _1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function E1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=xT(t,n),i==nl){e==4&&(t.o=4,Ye(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oh){t.o=4,Ye(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,i,null),lh(t,i);_1(t)&&i!=nl&&i!=oh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),cf(e),e.L=!0,Ye(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),er(t),ks(t))}B.fb=function(){if(this.g){var t=Qt(this.g),e=this.g.ga();this.C<e.length&&(Ql(this),E1(this,t,e),this.i&&t!=4&&_o(this))}};function xT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nl:(n=Number(e.substring(n,r)),isNaN(n)?oh:(r+=1,r+n>e.length?nl:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,er(this)};function _o(t){t.Y=Date.now()+t.P,S1(t,t.P)}function S1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yo($e(t.eb,t),e)}function Ql(t){t.B&&(W.clearTimeout(t.B),t.B=null)}B.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mT(this.j,this.A),this.K!=2&&(Ks(3),Ye(17)),er(this),this.o=2,ks(this)):S1(this,this.Y-t)};function ks(t){t.l.G==0||t.I||z1(t.l,t)}function er(t){Ql(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Q0(t.W),d1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||uh(n.i,t))){if(n.I=t.N,!t.J&&uh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ol(n),eu(n);else break e;uf(n),Ye(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=yo($e(n.ab,n),6e3));if(1>=N1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else tr(n,11)}else if((t.J||n.g==t)&&ol(n),!el(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Xe(y,"spdy")||Xe(y,"quic")||Xe(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(rf(s,s.h),s.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,me(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=q1(r,r.H?r.la:null,r.W),o.J){D1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ql(a),_o(a)),r.g=o}else V1(r);0<n.l.length&&tu(n)}else u[0]!="stop"&&u[0]!="close"||tr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?tr(n,7):lf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ks(4)}catch{}}function wT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jc(t)||typeof t=="string")Jy(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Jc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=wT(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Di(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Di)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}B=Di.prototype;B.R=function(){nf(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};B.T=function(){return nf(this),this.g.concat()};function nf(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];dr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],dr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}B.get=function(t,e){return dr(this.h,t)?this.h[t]:e};B.set=function(t,e){dr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};B.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var I1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _T(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function pr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof pr){this.g=e!==void 0?e:t.g,rl(this,t.j),this.s=t.s,il(this,t.i),sl(this,t.m),this.l=t.l,e=t.h;var n=new Gs;n.i=e.i,e.g&&(n.g=new Di(e.g),n.h=e.h),Kp(this,n),this.o=t.o}else t&&(n=String(t).match(I1))?(this.g=!!e,rl(this,n[1]||"",!0),this.s=Ts(n[2]||""),il(this,n[3]||"",!0),sl(this,n[4]),this.l=Ts(n[5]||"",!0),Kp(this,n[6]||"",!0),this.o=Ts(n[7]||"")):(this.g=!!e,this.h=new Gs(null,this.g))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,Gp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(us(e,Gp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(us(n,n.charAt(0)=="/"?TT:kT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,AT)),t.join("")};function nn(t){return new pr(t)}function rl(t,e,n){t.j=n?Ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function il(t,e,n){t.i=n?Ts(e,!0):e}function sl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kp(t,e,n){e instanceof Gs?(t.h=e,RT(t.h,t.g)):(n||(e=us(e,CT)),t.h=new Gs(e,t.g))}function me(t,e,n){t.h.set(e,n)}function Yl(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ET(t){return t instanceof pr?nn(t):new pr(t,void 0)}function ST(t,e,n,r){var i=new pr(null,void 0);return t&&rl(i,t),e&&il(i,e),n&&sl(i,n),r&&(i.l=r),i}function Ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gp=/[#\/\?@]/g,kT=/[#\?:]/g,TT=/[#\?]/g,CT=/[#\?@]/g,AT=/#/g;function Gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Di,t.h=0,t.i&&_T(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Gs.prototype;B.add=function(t,e){Hn(this),this.i=null,t=Pi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function k1(t,e){Hn(t),e=Pi(t,e),dr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,dr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&nf(t)))}function T1(t,e){return Hn(t),e=Pi(t,e),dr(t.g.h,e)}B.forEach=function(t,e){Hn(this),this.g.forEach(function(n,r){Jy(n,function(i){t.call(e,i,r,this)},this)},this)};B.T=function(){Hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};B.R=function(t){Hn(this);var e=[];if(typeof t=="string")T1(this,t)&&(e=Bp(e,this.g.get(Pi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bp(e,t[n])}return e};B.set=function(t,e){return Hn(this),this.i=null,t=Pi(this,t),T1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function C1(t,e,n){k1(t,e),0<n.length&&(t.i=null,t.g.set(Pi(t,e),V0(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Pi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RT(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(k1(this,r),C1(this,i,n))},t)),t.j=e}var NT=class{constructor(t,e){this.h=t,this.g=e}};function A1(t){this.l=t||DT,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DT=10;function R1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N1(t){return t.h?1:t.g?t.g.size:0}function uh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rf(t,e){t.g?t.g.add(e):t.h=e}function D1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A1.prototype.cancel=function(){if(this.i=P1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function P1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return V0(t.i)}function sf(){}sf.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};sf.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function PT(){this.g=new sf}function bT(t,e,n){const r=n||"";try{tf(t,function(i,s){let o=i;mo(i)&&(o=G0(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function OT(t,e){const n=new ql;if(W.Image){const r=new Image;r.onload=ea(na,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ea(na,n,r,"TestLoadImage: error",!1,e),r.onabort=ea(na,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ea(na,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function na(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Eo(t){this.l=t.$b||null,this.j=t.ib||!1}je(Eo,J0);Eo.prototype.g=function(){return new Jl(this.l,this.j)};Eo.prototype.i=function(t){return function(){return t}}({});function Jl(t,e){De.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Jl,De);var of=0;B=Jl.prototype;B.open=function(t,e){if(this.readyState!=of)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xs(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=of};B.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;b1(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function b1(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}B.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?So(this):Xs(this),this.readyState==3&&b1(this)}};B.Ua=function(t){this.g&&(this.response=this.responseText=t,So(this))};B.Ta=function(t){this.g&&(this.response=t,So(this))};B.ha=function(){this.g&&So(this)};function So(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xs(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LT=W.JSON.parse;function ke(t){De.call(this),this.headers=new Di,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=O1,this.K=this.L=!1}je(ke,De);var O1="",MT=/^https?$/i,$T=["POST","PUT"];B=ke.prototype;B.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sh.g(),this.C=this.u?qp(this.u):qp(sh),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Xp(this,s);return}t=n||"";const i=new Di(this.headers);r&&tf(r,function(s,o){i.set(o,s)}),r=Gk(i.T()),n=W.FormData&&t instanceof W.FormData,!(0<=Yy($T,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$1(this),0<this.B&&((this.K=BT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=Y0(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xp(this,s)}};function BT(t){return pi&&Zk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function UT(t){return t.toLowerCase()=="content-type"}B.pa=function(){typeof F0!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Xp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,L1(t),Zl(t)}function L1(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Zl(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zl(this,!0)),ke.Z.M.call(this)};B.Fa=function(){this.s||(this.F||this.v||this.l?M1(this):this.cb())};B.cb=function(){M1(this)};function M1(t){if(t.h&&typeof F0!="undefined"&&(!t.C[1]||Qt(t)!=4||t.ba()!=2)){if(t.v&&Qt(t)==4)Y0(t.Fa,0,t);else if(Be(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(I1)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!MT.test(i?i.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",L1(t)}}finally{Zl(t)}}}}function Zl(t,e){if(t.g){$1(t);const n=t.g,r=t.C[0]?Za:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function $1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}B.ba=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};B.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LT(e)}};function Qp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case O1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Da=function(){return this.m};B.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function FT(t){let e="";return j0(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function af(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=FT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function B1(t){this.za=0,this.l=[],this.h=new ql,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rs("baseRetryDelayMs",5e3,t),this.$a=rs("retryDelaySeedMs",1e4,t),this.Ya=rs("forwardChannelMaxRetries",2,t),this.ra=rs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new A1(t&&t.concurrentRequestLimit),this.Ca=new PT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}B=B1.prototype;B.ma=8;B.G=1;function lf(t){if(U1(t),t.G==3){var e=t.V++,n=nn(t.F);me(n,"SID",t.J),me(n,"RID",e),me(n,"TYPE","terminate"),Io(t,n),e=new wo(t,t.h,e,void 0),e.K=2,e.v=Yl(nn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=K1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),_o(e)}W1(t)}B.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function eu(t){t.g&&(cf(t),t.g.cancel(),t.g=null)}function U1(t){eu(t),t.u&&(W.clearTimeout(t.u),t.u=null),ol(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function ec(t,e){t.l.push(new NT(t.Za++,e)),t.G==3&&tu(t)}function tu(t){R1(t.i)||t.m||(t.m=!0,X0(t.Ha,t),t.C=0)}function VT(t,e){return N1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=yo($e(t.Ha,t,e),H1(t,t.C)),t.C++,!0)}B.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new wo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Zy(s),e1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=F1(this,i,e),n=nn(this.F),me(n,"RID",t),me(n,"CVER",22),this.D&&me(n,"X-HTTP-Session-Id",this.D),Io(this,n),this.o&&s&&af(n,this.o,s),rf(this.i,i),this.Ra&&me(n,"TYPE","init"),this.ja?(me(n,"$req",e),me(n,"SID","null"),i.$=!0,ah(i,n,null)):ah(i,n,e),this.G=2}}else this.G==3&&(t?Yp(this,t):this.l.length==0||R1(this.i)||Yp(this))};function Yp(t,e){var n;e?n=e.m:n=t.V++;const r=nn(t.F);me(r,"SID",t.J),me(r,"RID",n),me(r,"AID",t.U),Io(t,r),t.o&&t.s&&af(r,t.o,t.s),n=new wo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=F1(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),rf(t.i,n),ah(n,r,e)}function Io(t,e){t.j&&tf({},function(n,r){me(e,r,n)})}function F1(t,e,n){n=Math.min(t.l.length,n);var r=t.j?$e(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{bT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function V1(t){t.g||t.u||(t.Y=1,X0(t.Ga,t),t.A=0)}function uf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=yo($e(t.Ga,t),H1(t,t.A)),t.A++,!0)}B.Ga=function(){if(this.u=null,j1(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=yo($e(this.bb,this),t)}};B.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ye(10),eu(this),j1(this))};function cf(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function j1(t){t.g=new wo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);me(e,"RID","rpc"),me(e,"SID",t.J),me(e,"CI",t.N?"0":"1"),me(e,"AID",t.U),Io(t,e),me(e,"TYPE","xmlhttp"),t.o&&t.s&&af(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Yl(nn(e)),n.s=null,n.U=!0,w1(n,t)}B.ab=function(){this.v!=null&&(this.v=null,eu(this),uf(this),Ye(19))};function ol(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function z1(t,e){var n=null;if(t.g==e){ol(t),cf(t),t.g=null;var r=2}else if(uh(t.i,e))n=e.D,D1(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Kl(),Be(r,new m1(r,n,e,i)),tu(t)}else V1(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&VT(t,e)||r==2&&uf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:tr(t,5);break;case 4:tr(t,10);break;case 3:tr(t,6);break;default:tr(t,2)}}}function H1(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function tr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=$e(t.jb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||rl(n,"https"),Yl(n)),OT(n.toString(),r)}else Ye(2);t.G=0,t.j&&t.j.va(e),W1(t),U1(t)}B.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ye(2)):(this.h.info("Failed to ping google.com"),Ye(1))};function W1(t){t.G=0,t.I=-1,t.j&&((P1(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,V0(t.l),t.l.length=0),t.j.ua())}function q1(t,e,n){let r=ET(n);if(r.i!="")e&&il(r,e+"."+r.i),sl(r,r.m);else{const i=W.location;r=ST(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&j0(t.aa,function(i,s){me(r,s,i)}),e=t.D,n=t.sa,e&&n&&me(r,e,n),me(r,"VER",t.ma),Io(t,r),r}function K1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new Eo({ib:!0})):new ke(t.qa),e.L=t.H,e}function G1(){}B=G1.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Oa=function(){};function al(){if(pi&&!(10<=Number(eT)))throw Error("Environmental error: no available transport.")}al.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){De.call(this),this.g=new B1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!el(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!el(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bi(this)}je(ft,De);ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),X0($e(t.hb,t,e))),Ye(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=q1(t,null,t.W),tu(t)};ft.prototype.close=function(){lf(this.g)};ft.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ec(this.g,e)}else this.v?(e={},e.__data__=G0(t),ec(this.g,e)):ec(this.g,t)};ft.prototype.M=function(){this.g.j=null,delete this.j,lf(this.g),delete this.g,ft.Z.M.call(this)};function X1(t){Z0.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(X1,Z0);function Q1(){ef.call(this),this.status=1}je(Q1,ef);function bi(t){this.g=t}je(bi,G1);bi.prototype.xa=function(){Be(this.g,"a")};bi.prototype.wa=function(t){Be(this.g,new X1(t))};bi.prototype.va=function(t){Be(this.g,new Q1(t))};bi.prototype.ua=function(){Be(this.g,"b")};al.prototype.createWebChannel=al.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Gl.NO_ERROR=0;Gl.TIMEOUT=8;Gl.HTTP_ERROR=6;v1.COMPLETE="complete";y1.EventType=xo;xo.OPEN="a";xo.CLOSE="b";xo.ERROR="c";xo.MESSAGE="d";De.prototype.listen=De.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var jT=function(){return new al},zT=function(){return Kl()},tc=Gl,HT=v1,WT=Rr,Jp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},qT=Eo,ra=y1,KT=ke;const Zp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new $l("@firebase/firestore");function eg(){return gr.logLevel}function F(t,...e){if(gr.logLevel<=oe.DEBUG){const n=e.map(hf);gr.debug(`Firestore (${Oi}): ${t}`,...n)}}function $n(t,...e){if(gr.logLevel<=oe.ERROR){const n=e.map(hf);gr.error(`Firestore (${Oi}): ${t}`,...n)}}function tg(t,...e){if(gr.logLevel<=oe.WARN){const n=e.map(hf);gr.warn(`Firestore (${Oi}): ${t}`,...n)}}function hf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function fe(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class QT{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new GT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new nt(e)}}class YT{constructor(e,n,r){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class JT{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new YT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e2{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.p=n.token,new ZT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ff.A=-1;class Y1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=t2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ht(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function J1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Qs{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const n2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Qs{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return n2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.fields=e,e.sort(rt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const r2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(fe(!!t),typeof t=="string"){let e=0;const n=r2.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ex(t){const e=t.mapValue.fields.__previous_value__;return Z1(e)?ex(e):e}function Ys(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return t==null}function ll(t){return t===0&&1/t==-1/0}function s2(t){return typeof t=="number"&&Number.isInteger(t)&&!ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ve.fromString(e))}static fromName(e){return new z(ve.fromString(e).popFirst(5))}static empty(){return new z(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ve(e.slice()))}}function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z1(t)?4:10:Y()}function Vt(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Bn(r.timestampValue),o=Bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mi(r.bytesValue).isEqual(mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ie(r.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(r.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ie(r.integerValue)===Ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ie(r.doubleValue),o=Ie(i.doubleValue);return s===o?ll(s)===ll(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(ng(s)!==ng(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vt(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Js(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return ce(n,r);switch(n){case 0:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ie(i.integerValue||i.doubleValue),a=Ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return rg(t.timestampValue,e.timestampValue);case 4:return rg(Ys(t),Ys(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=mi(i),a=mi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ce(o[l],a[l]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Ie(i.latitude),Ie(s.latitude));return o!==0?o:ce(Ie(i.longitude),Ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=yi(o[l],a[l]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=ce(a[c],u[c]);if(d!==0)return d;const h=yi(o[a[c]],l[u[c]]);if(h!==0)return h}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Bn(t),r=Bn(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function ri(t){return hh(t)}function hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=hh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${hh(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function fh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ya(t){return!!t&&"mapValue"in t}function Cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Cs(this.value))}}function tx(t){const e=[];return Li(t.fields,(n,r)=>{const i=new rt([n]);if(ya(r)){const s=tx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ch(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new He(e,0,ee.min(),ee.min(),Nt.empty(),0)}static newFoundDocument(e,n,r){return new He(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new He(e,2,n,ee.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,ee.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function og(t,e=null,n=[],r=[],i=null,s=null,o=null){return new o2(t,e,n,r,i,s,o)}function pf(t){const e=J(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ri(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ri(r)).join(",")),e.P=n}return e.P}function a2(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ri(r.value)}`;var r}).join(", ")}]`),Mi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ri(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ri(n)).join(",")),`Target(${e})`}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!g2(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Vt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lg(t.startAt,e.startAt)&&lg(t.endAt,e.endAt)}function dh(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class it extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,r):new l2(e,n,r):n==="array-contains"?new h2(e,r):n==="in"?new f2(e,r):n==="not-in"?new d2(e,r):n==="array-contains-any"?new p2(e,r):new it(e,n,r)}static v(e,n,r){return n==="in"?new u2(e,r):new c2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(yi(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.V(yi(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class l2 extends it{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.V(n)}}class u2 extends it{constructor(e,n){super(e,"in",n),this.keys=nx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class c2 extends it{constructor(e,n){super(e,"not-in",n),this.keys=nx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class h2 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&Js(n.arrayValue,this.value)}}class f2 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Js(this.value.arrayValue,n)}}class d2 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Js(this.value.arrayValue,n)}}class p2 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Js(this.value.arrayValue,r))}}class ul{constructor(e,n){this.position=e,this.inclusive=n}}class ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function g2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ag(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function m2(t,e,n,r,i,s,o,a){return new ko(t,e,n,r,i,s,o,a)}function mf(t){return new ko(t)}function xa(t){return!Mi(t.limit)&&t.limitType==="F"}function cl(t){return!Mi(t.limit)&&t.limitType==="L"}function rx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ix(t){for(const e of t.filters)if(e.S())return e.field;return null}function v2(t){return t.collectionGroup!==null}function Zs(t){const e=J(t);if(e.D===null){e.D=[];const n=ix(e),r=rx(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ii(n)),e.D.push(new ii(rt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ii(rt.keyField(),s))}}}return e.D}function vr(t){const e=J(t);if(!e.C)if(e.limitType==="F")e.C=og(e.path,e.collectionGroup,Zs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Zs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ii(s.field,o))}const r=e.endAt?new ul(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new ul(e.startAt.position,!e.startAt.inclusive):null;e.C=og(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function y2(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nu(t,e){return gf(vr(t),vr(e))&&t.limitType===e.limitType}function sx(t){return`${pf(vr(t))}|lt:${t.limitType}`}function ph(t){return`Query(target=${a2(vr(t))}; limitType=${t.limitType})`}function vf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ag(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Zs(n),r)||n.endAt&&!function(i,s,o){const a=ag(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Zs(n),r))}(t,e)}function ox(t){return(e,n)=>{let r=!1;for(const i of Zs(t)){const s=x2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function x2(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function lx(t){return{integerValue:""+t}}function w2(t,e){return s2(e)?lx(e):ax(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this._=void 0}}function _2(t,e,n){return t instanceof hl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof eo?cx(t,e):t instanceof to?hx(t,e):function(r,i){const s=ux(r,i),o=ug(s)+ug(r.k);return fh(s)&&fh(r.k)?lx(o):ax(r.O,o)}(t,e)}function E2(t,e,n){return t instanceof eo?cx(t,e):t instanceof to?hx(t,e):n}function ux(t,e){return t instanceof fl?fh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hl extends ru{}class eo extends ru{constructor(e){super(),this.elements=e}}function cx(t,e){const n=fx(e);for(const r of t.elements)n.some(i=>Vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class to extends ru{constructor(e){super(),this.elements=e}}function hx(t,e){let n=fx(e);for(const r of t.elements)n=n.filter(i=>!Vt(i,r));return{arrayValue:{values:n}}}class fl extends ru{constructor(e,n){super(),this.O=e,this.k=n}}function ug(t){return Ie(t.integerValue||t.doubleValue)}function fx(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function S2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof eo&&r instanceof eo||n instanceof to&&r instanceof to?gi(n.elements,r.elements,Vt):n instanceof fl&&r instanceof fl?Vt(n.k,r.k):n instanceof hl&&r instanceof hl}(t.transform,e.transform)}class I2{constructor(e,n){this.version=e,this.transformResults=n}}class si{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new si}static exists(e){return new si(void 0,e)}static updateTime(e){return new si(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function k2(t,e,n){t instanceof su?function(r,i,s){const o=r.value.clone(),a=fg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof To?function(r,i,s){if(!wa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=fg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(dx(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function gh(t,e,n){t instanceof su?function(r,i,s){if(!wa(r.precondition,i))return;const o=r.value.clone(),a=dg(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(hg(i),o).setHasLocalMutations()}(t,e,n):t instanceof To?function(r,i,s){if(!wa(r.precondition,i))return;const o=dg(r.fieldTransforms,s,i),a=i.data;a.setAll(dx(r)),a.setAll(o),i.convertToFoundDocument(hg(i),a).setHasLocalMutations()}(t,e,n):function(r,i){wa(r.precondition,i)&&i.convertToNoDocument(ee.min())}(t,e)}function T2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ux(r.transform,i||null);s!=null&&(n==null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&gi(n,r,(i,s)=>S2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function hg(t){return t.isFoundDocument()?t.version:ee.min()}class su extends iu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class To extends iu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function dx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fg(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,E2(o,a,n[i]))}return r}function dg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_2(s,o,e))}return r}class C2 extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class A2 extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,re;function N2(t){switch(t){default:return Y();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function px(t){if(t===void 0)return $n("GRPC error has no .code"),O.UNKNOWN;switch(t){case Se.OK:return O.OK;case Se.CANCELLED:return O.CANCELLED;case Se.UNKNOWN:return O.UNKNOWN;case Se.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Se.INTERNAL:return O.INTERNAL;case Se.UNAVAILABLE:return O.UNAVAILABLE;case Se.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Se.NOT_FOUND:return O.NOT_FOUND;case Se.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Se.ABORTED:return O.ABORTED;case Se.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Se.DATA_LOSS:return O.DATA_LOSS;default:return Y()}}(re=Se||(Se={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}}class ia{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Le.RED,this.left=i!=null?i:Le.EMPTY,this.right=s!=null?s:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pg(this.data.getIterator())}getIteratorFrom(e){return new pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new Pe(z.comparator);function yr(){return D2}const P2=new Pe(z.comparator);function mh(){return P2}const b2=new Pe(z.comparator),O2=new Ue(z.comparator);function ge(...t){let e=O2;for(const n of t)e=e.add(n);return e}const L2=new Ue(ce);function gx(){return L2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n)),new ou(ee.min(),r,gx(),yr(),ge())}}class Co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Co(Ve.EMPTY_BYTE_STRING,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,i){this.M=e,this.removedTargetIds=n,this.key=r,this.$=i}}class mx{constructor(e,n){this.targetId=e,this.F=n}}class vx{constructor(e,n,r=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gg{constructor(){this.B=0,this.L=vg(),this.U=Ve.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ge(),n=ge(),r=ge();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Co(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=vg()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class M2{constructor(e){this.nt=e,this.st=new Map,this.it=yr(),this.rt=mg(),this.ot=new Ue(ce)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.F.count,i=this.wt(n);if(i){const s=i.target;if(dh(s))if(r===0){const o=new z(s.path);this.at(n,o,He.newNoDocument(o,ee.min()))}else fe(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&dh(a.target)){const l=new z(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.at(o,l,He.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=ge();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new ou(e,n,this.ot,this.it,r);return this.it=yr(),this.rt=mg(),this.ot=new Ue(ce),i}ut(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new gg,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Ue(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new gg),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function mg(){return new Pe(z.comparator)}function vg(){return new Pe(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),B2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class U2{constructor(e,n){this.databaseId=e,this.N=n}}function dl(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yx(t,e){return t.N?e.toBase64():e.toUint8Array()}function F2(t,e){return dl(t,e.toTimestamp())}function en(t){return fe(!!t),ee.fromTimestamp(function(e){const n=Bn(e);return new ht(n.seconds,n.nanos)}(t))}function yf(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xx(t){const e=ve.fromString(t);return fe(Ex(e)),e}function vh(t,e){return yf(t.databaseId,e.path)}function nc(t,e){const n=xx(e);if(n.get(1)!==t.databaseId.projectId)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(wx(n))}function yh(t,e){return yf(t.databaseId,e)}function V2(t){const e=xx(t);return e.length===4?ve.emptyPath():wx(e)}function xh(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wx(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yg(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function j2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(fe(u===void 0||typeof u=="string"),Ve.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),Ve.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?O.UNKNOWN:px(l.code);return new j(u,l.message||"")}(o);n=new vx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nc(t,r.document.name),s=en(r.document.updateTime),o=new Nt({mapValue:{fields:r.document.fields}}),a=He.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new _a(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nc(t,r.document),s=r.readTime?en(r.readTime):ee.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _a([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nc(t,r.document),s=r.removedTargetIds||[];n=new _a([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new R2(i),o=r.targetId;n=new mx(o,s)}}return n}function z2(t,e){let n;if(e instanceof su)n={update:yg(t,e.key,e.value)};else if(e instanceof C2)n={delete:vh(t,e.key)};else if(e instanceof To)n={update:yg(t,e.key,e.data),updateMask:Z2(e.fieldMask)};else{if(!(e instanceof A2))return Y();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof hl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof eo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof to)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:F2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function H2(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?en(r.updateTime):en(i);return s.isEqual(ee.min())&&(s=en(i)),new I2(s,r.transformResults||[])}(n,e))):[]}function W2(t,e){return{documents:[yh(t,e.path)]}}function q2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=yh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(d){if(d.op==="=="){if(sg(d.value))return{unaryFilter:{field:Mr(d.field),op:"IS_NAN"}};if(ig(d.value))return{unaryFilter:{field:Mr(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(sg(d.value))return{unaryFilter:{field:Mr(d.field),op:"IS_NOT_NAN"}};if(ig(d.value))return{unaryFilter:{field:Mr(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(d.field),op:Q2(d.op),value:d.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Mr(c.field),direction:X2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||Mi(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function K2(t){let e=V2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=_x(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new ii(qr(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Mi(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new ul(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new ul(h,d)}(n.endAt)),m2(e,i,o,s,a,"F",l,u)}function G2(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function _x(t){return t?t.unaryFilter!==void 0?[J2(t)]:t.fieldFilter!==void 0?[Y2(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>_x(e)).reduce((e,n)=>e.concat(n)):Y():[]}function X2(t){return $2[t]}function Q2(t){return B2[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function qr(t){return rt.fromServerFormat(t.fieldPath)}function Y2(t){return it.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function J2(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return it.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qr(t.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function Z2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ex(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&k2(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&gh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&gh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ee.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>cg(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>cg(n,r))}}class xf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=b2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.Ht=e}}function sC(t){const e=K2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?y2(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.xe=new aC}addToCollectionParentIndex(e,n){return this.xe.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n,r){return M.resolve(ge())}getFieldIndex(e,n){return M.resolve(null)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class aC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new xi(0)}static Je(){return new xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==eC)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return J1(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.changes=new No(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r){this.qn=e,this.gs=n,this.indexManager=r}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.ps(e,n,r))}ps(e,n,r){return this.qn.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Is(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(r=>this.Ts(e,r).next(()=>r))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Is(n,r))}As(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):v2(n)?this.Ps(e,n,r):this.bs(e,n,r)}Rs(e,n){return this.ys(e,new z(n)).next(r=>{let i=mh();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ps(e,n,r){const i=n.collectionGroup;let s=mh();return this.indexManager.getCollectionParents(e,i).next(o=>M.forEach(o,a=>{const l=function(u,c){return new ko(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.bs(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}bs(e,n,r){let i;return this.qn.getAll(e,n.path,r).next(s=>(i=s,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=He.newInvalidDocument(l),i=i.insert(l,u)),gh(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{vf(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.vs=r,this.Vs=i}static Ss(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{Ds(e){this.Cs=e}As(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ee.min())?this.Ns(e,n):this.Cs.Es(e,i).next(s=>{const o=this.xs(n,s);return(xa(n)||cl(n))&&this.ks(n.limitType,o,i,r)?this.Ns(e,n):(eg()<=oe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ph(n)),this.Cs.As(e,n,r).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}xs(e,n){let r=new Ue(ox(e));return n.forEach((i,s)=>{vf(e,s)&&(r=r.add(s))}),r}ks(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ns(e,n){return eg()<=oe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ph(n)),this.Cs.As(e,n,ee.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new Pe(ce),this.$s=new No(s=>pf(s),gf),this.Fs=ee.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(r)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new uC(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function fC(t,e,n,r){return new hC(t,e,n,r)}async function Sx(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.gs.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.gs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.Us.Es(r,l).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function dC(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=M.resolve();return d.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(y=>{const w=l.docVersions.get(g);fe(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.gs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.gs.performConsistencyCheck(r)).next(()=>n.Us.Es(r,i))})}function Ix(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function pC(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((u,c)=>{const d=i.get(c);if(!d)return;a.push(n.Un.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.Un.addMatchingKeys(s,u.addedDocuments,c)));let h=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?h=h.withResumeToken(Ve.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(u.resumeToken,r)),i=i.insert(c,h),function(g,y,w){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,h,u)&&a.push(n.Un.updateTargetData(s,h))});let l=yr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(gC(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(ee.min())){const u=n.Un.getLastRemoteSnapshotVersion(s).next(c=>n.Un.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return M.waitFor(a).next(()=>o.apply(s)).next(()=>n.Us.Ts(s,l)).next(()=>l)}).then(s=>(n.Ms=i,s))}function gC(t,e,n){let r=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=yr();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(ee.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):F("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function mC(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(r,e)))}function vC(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Un.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Un.allocateTargetId(r).next(o=>(i=new sr(e,o,0,r.currentSequenceNumber),n.Un.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.$s.set(e,r.targetId)),r})}async function wh(t,e,n){const r=J(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.$s.delete(i.target)}function xg(t,e,n){const r=J(t);let i=ee.min(),s=ge();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=J(a),d=c.$s.get(u);return d!==void 0?M.resolve(c.Ms.get(d)):c.Un.getTargetData(l,u)}(r,o,vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Os.As(o,e,n?i:ee.min(),n?s:ge())).next(a=>({documents:a,Ks:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return M.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var r;return this.Ws.set(n.id,{id:(r=n).id,version:r.version,createTime:en(r.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(r){return{name:r.name,query:sC(r.bundledQuery),readTime:en(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.overlays=new Pe(z.comparator),this.Hs=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach(i=>{this.Yt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Hs.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=new Map,s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=new Map,s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=new Map,l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(c,u)),!(a.size>=i)););return M.resolve(a)}Yt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);i!==null&&this.Hs.get(i.largestBatchId).delete(r.key),this.overlays=this.overlays.insert(r.key,new rC(n,r));let s=this.Hs.get(n);s===void 0&&(s=new Set,this.Hs.set(n,s)),s.add(r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.Js=new Ue(Ae.Ys),this.Xs=new Ue(Ae.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.Js=this.Js.add(r),this.Xs=this.Xs.add(r)}ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ei(new Ae(e,n))}ni(e,n){e.forEach(r=>this.removeReference(r,n))}si(e){const n=new z(new ve([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.Xs.forEachInRange([r,i],o=>{this.ei(o),s.push(o.key)}),s}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new z(new ve([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=ge();return this.Xs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.Js.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return z.comparator(e.key,n.key)||ce(e.oi,n.oi)}static Zs(e,n){return ce(e.oi,n.oi)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Ue(Ae.Ys)}checkEmpty(e){return M.resolve(this.gs.length===0)}addMutationBatch(e,n,r,i){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new nC(s,n,r,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.hi(r),s=i<0?0:i;return M.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return M.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([r,i],o=>{const a=this.ai(o.oi);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(ce);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([s,o],a=>{r=r.add(a.oi)})}),M.resolve(this.li(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new z(s),0);let a=new Ue(ce);return this.ui.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.oi)),!0)},o),M.resolve(this.li(a))}li(e){const n=[];return e.forEach(r=>{const i=this.ai(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.fi(n.batchId,"removed")===0),this.gs.shift();let r=this.ui;return M.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=r})}Qe(e){}containsKey(e,n){const r=new Ae(n,0),i=this.ui.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,M.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.di=e,this.docs=new Pe(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),M.resolve(r)}getAll(e,n,r){let i=yr();const s=new z(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||l.readTime.compareTo(r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return M.resolve(i)}_i(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EC(this)}getSize(e){return M.resolve(this.size)}}class EC extends lC{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.persistence=e,this.wi=new No(n=>pf(n),gf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.mi=0,this.gi=new _f,this.targetCount=0,this.yi=xi.He()}forEachTarget(e,n){return this.wi.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.mi&&(this.mi=n),M.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Ze(n),M.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.wi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.wi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.gi.ti(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.gi.ni(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.gi.ri(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.pi={},this.overlays={},this.Nn=new ff(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new SC(this),this.indexManager=new oC,this.qn=function(r){return new _C(r)}(r=>this.referenceDelegate.Ii(r)),this.O=new iC(n),this.Kn=new yC(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.pi[e.toKey()];return r||(r=new wC(n,this.referenceDelegate),this.pi[e.toKey()]=r),r}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new kC(this.Nn.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.pi).map(r=>()=>r.containsKey(e,n)))}}class kC extends tC{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Ri=new _f,this.Pi=null}static bi(e){return new Ef(e)}get vi(){if(this.Pi)return this.Pi;throw Y()}addReference(e,n,r){return this.Ri.addReference(r,n),this.vi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.vi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.vi,r=>{const i=z.fromPath(r);return this.Vi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(r=>{r?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class wg{constructor(){this.activeTargetIds=gx()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TC{constructor(){this._r=new wg,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,r){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,r,i,s){const o=this.$r(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.Fr(a,i,s),this.Br(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw tg("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}Lr(e,n,r,i,s){return this.Mr(e,n,r,i,s)}Fr(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}$r(e,n){const r=AC[e];return`${this.kr}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,r,i){return new Promise((s,o)=>{const a=new KT;a.listenOnce(HT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tc.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case tc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new j(O.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const h=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(y)>=0?y:O.UNKNOWN}(d.status);o(new j(h,d.message))}else o(new j(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(O.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}Ur(e,n,r){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jT(),o=zT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qT({})),this.Fr(a.initMessageHeaders,n,r),xy()||wy()||hS()||_y()||fS()||R0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const h=new RC({Ar:y=>{d?F("Connection","Not sending because WebChannel is closed:",y):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",y),u.send(y))},Rr:()=>u.close()}),g=(y,w,p)=>{y.listen(w,m=>{try{p(m)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,ra.EventType.OPEN,()=>{d||F("Connection","WebChannel transport opened.")}),g(u,ra.EventType.CLOSE,()=>{d||(d=!0,F("Connection","WebChannel transport closed"),h.Cr())}),g(u,ra.EventType.ERROR,y=>{d||(d=!0,tg("Connection","WebChannel transport errored:",y),h.Cr(new j(O.UNAVAILABLE,"The operation could not be completed")))}),g(u,ra.EventType.MESSAGE,y=>{var w;if(!d){const p=y.data[0];fe(!!p);const m=p,f=m.error||((w=m[0])===null||w===void 0?void 0:w.error);if(f){F("Connection","WebChannel received error:",f);const v=f.status;let x=function(_){const E=Se[_];if(E!==void 0)return px(E)}(v),I=f.message;x===void 0&&(x=O.INTERNAL,I="Unknown error status: "+v+" with message "+f.message),d=!0,h.Cr(new j(x,I)),u.close()}else F("Connection","WebChannel received:",p),h.Nr(p)}}),g(o,WT.STAT_EVENT,y=>{y.stat===Jp.PROXY?F("Connection","Detected buffering proxy"):y.stat===Jp.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Dr()},0),h}}function rc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){return new U2(t,!0)}class kx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Sn=e,this.timerId=n,this.qr=r,this.Kr=i,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),r=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,i,s,o,a,l){this.Sn=e,this.Xr=r,this.Zr=i,this.eo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new kx(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===O.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.no===n&&this.po(r,i)},r=>{e(()=>{const i=new j(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Io(i)})})}po(e,n){const r=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{r(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{r(()=>this.Io(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DC extends Tx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.O=s}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=j2(this.O,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?en(s.readTime):ee.min()}(e);return this.listener.To(n,r)}Ao(e){const n={};n.database=xh(this.O),n.addTarget=function(i,s){let o;const a=s.target;return o=dh(a)?{documents:W2(i,a)}:{query:q2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=yx(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=dl(i,s.snapshotVersion.toTimestamp())),o}(this.O,e);const r=G2(this.O,e);r&&(n.labels=r),this.fo(n)}Ro(e){const n={};n.database=xh(this.O),n.removeTarget=e,this.fo(n)}}class PC extends Tx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=H2(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.Vo(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=xh(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>z2(this.O,r))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=r,this.O=i,this.Co=!1}No(){if(this.Co)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Mr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(O.UNKNOWN,i.toString())})}Lr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Lr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(O.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class OC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?($n(n),this.Oo=!1):F("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=J(a);l.Ko.add(4),await Do(l),l.Qo.set("Unknown"),l.Ko.delete(4),await lu(l)}(this))})}),this.Qo=new OC(r,i)}}async function lu(t){if(Nr(t))for(const e of t.Go)await e(!0)}async function Do(t){for(const e of t.Go)await e(!1)}function Cx(t,e){const n=J(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),kf(n)?If(n):$i(n).co()&&Sf(n,e))}function Ax(t,e){const n=J(t),r=$i(n);n.qo.delete(e),r.co()&&Rx(n,e),n.qo.size===0&&(r.co()?r.ho():Nr(n)&&n.Qo.set("Unknown"))}function Sf(t,e){t.Wo.Z(e.targetId),$i(t).Ao(e)}function Rx(t,e){t.Wo.Z(e),$i(t).Ro(e)}function If(t){t.Wo=new M2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),$i(t).start(),t.Qo.Mo()}function kf(t){return Nr(t)&&!$i(t).oo()&&t.qo.size>0}function Nr(t){return J(t).Ko.size===0}function Nx(t){t.Wo=void 0}async function MC(t){t.qo.forEach((e,n)=>{Sf(t,e)})}async function $C(t,e){Nx(t),kf(t)?(t.Qo.Bo(e),If(t)):t.Qo.set("Unknown")}async function BC(t,e,n){if(t.Qo.set("Online"),e instanceof vx&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qo.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qo.delete(o),r.Wo.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pl(t,r)}else if(e instanceof _a?t.Wo.ct(e):e instanceof mx?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(ee.min()))try{const r=await Ix(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Wo.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.qo.get(l);u&&i.qo.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.qo.get(a);if(!l)return;i.qo.set(a,l.withResumeToken(Ve.EMPTY_BYTE_STRING,l.snapshotVersion)),Rx(i,a);const u=new sr(l.target,a,1,l.sequenceNumber);Sf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await pl(t,r)}}async function pl(t,e,n){if(!Ao(e))throw e;t.Ko.add(1),await Do(t),t.Qo.set("Offline"),n||(n=()=>Ix(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await lu(t)})}function Dx(t,e){return e().catch(n=>pl(t,n,e))}async function uu(t){const e=J(t),n=Un(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;UC(e);)try{const i=await mC(e.localStore,r);if(i===null){e.Uo.length===0&&n.ho();break}r=i.batchId,FC(e,i)}catch(i){await pl(e,i)}Px(e)&&bx(e)}function UC(t){return Nr(t)&&t.Uo.length<10}function FC(t,e){t.Uo.push(e);const n=Un(t);n.co()&&n.bo&&n.vo(e.mutations)}function Px(t){return Nr(t)&&!Un(t).oo()&&t.Uo.length>0}function bx(t){Un(t).start()}async function VC(t){Un(t).Do()}async function jC(t){const e=Un(t);for(const n of t.Uo)e.vo(n.mutations)}async function zC(t,e,n){const r=t.Uo.shift(),i=xf.from(r,e,n);await Dx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await uu(t)}async function HC(t,e){e&&Un(t).bo&&await async function(n,r){if(i=r.code,N2(i)&&i!==O.ABORTED){const s=n.Uo.shift();Un(n).ao(),await Dx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await uu(n)}var i}(t,e),Px(t)&&bx(t)}async function Eg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.Ko.add(3),await Do(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await lu(n)}async function WC(t,e){const n=J(t);e?(n.Ko.delete(2),await lu(n)):e||(n.Ko.add(2),await Do(n),n.Qo.set("Unknown"))}function $i(t){return t.zo||(t.zo=function(e,n,r){const i=J(e);return i.No(),new DC(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:MC.bind(null,t),vr:$C.bind(null,t),To:BC.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),kf(t)?If(t):t.Qo.set("Unknown")):(await t.zo.stop(),Nx(t))})),t.zo}function Un(t){return t.Ho||(t.Ho=function(e,n,r){const i=J(e);return i.No(),new PC(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:VC.bind(null,t),vr:HC.bind(null,t),So:jC.bind(null,t),Vo:zC.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await uu(t)):(await t.Ho.stop(),t.Uo.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Tf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if($n("AsyncQueue",`${e}: ${t}`),Ao(t))return new j(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=mh(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Jo=new Pe(z.comparator)}track(e){const n=e.doc.key,r=this.Jo.get(n);r?e.type!==0&&r.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&r.type!==1?this.Jo=this.Jo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jo=this.Jo.remove(n):e.type===1&&r.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):Y():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,r)=>{e.push(r)}),e}}class wi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new wi(e,n,oi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.Xo=void 0,this.listeners=[]}}class KC{constructor(){this.queries=new No(e=>sx(e),nu),this.onlineState="Unknown",this.Zo=new Set}}async function Ox(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qC),i)try{s.Xo=await n.onListen(r)}catch(o){const a=Cf(o,`Initialization of query '${ph(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.tc(n.onlineState),s.Xo&&e.ec(s.Xo)&&Af(n)}async function Lx(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function GC(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ec(i)&&(r=!0);o.Xo=i}}r&&Af(n)}function XC(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Af(t){t.Zo.forEach(e=>{e.next()})}class Mx{constructor(e,n,r){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=r||{}}ec(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uc||!r)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.key=e}}class Bx{constructor(e){this.key=e}}class QC{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=ge(),this.mutatedKeys=ge(),this.mc=ox(e),this.gc=new oi(this.mc)}get yc(){return this.dc}Ic(e,n){const r=n?n.Ec:new Sg,i=n?n.gc:this.gc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=xa(this.query)&&i.size===this.query.limit?i.last():null,u=cl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=vf(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;h&&g?h.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),p=!0):this.Tc(h,g)||(r.track({type:2,doc:g}),p=!0,(l&&this.mc(g,l)>0||u&&this.mc(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),p=!0):h&&!g&&(r.track({type:1,doc:h}),p=!0,(l||u)&&(a=!0)),p&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),xa(this.query)||cl(this.query))for(;o.size>this.query.limit;){const c=xa(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{gc:o,Ec:r,ks:a,mutatedKeys:s}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort((u,c)=>function(d,h){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return g(d)-g(h)}(u.type,c.type)||this.mc(u.doc,c.doc)),this.Ac(r);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,l=a!==this._c;return this._c=a,s.length!==0||l?{snapshot:new wi(this.query,e.gc,i,s,e.mutatedKeys,a===0,l,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Sg,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=ge(),this.gc.forEach(r=>{this.bc(r.key)&&(this.wc=this.wc.add(r.key))});const n=[];return e.forEach(r=>{this.wc.has(r)||n.push(new Bx(r))}),this.wc.forEach(r=>{e.has(r)||n.push(new $x(r))}),n}vc(e){this.dc=e.Ks,this.wc=ge();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return wi.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class YC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JC{constructor(e){this.key=e,this.Sc=!1}}class ZC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new No(a=>sx(a),nu),this.Nc=new Map,this.xc=new Set,this.kc=new Pe(z.comparator),this.Oc=new Map,this.Mc=new _f,this.$c={},this.Fc=new Map,this.Bc=xi.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function eA(t,e){const n=cA(t);let r,i;const s=n.Cc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const o=await vC(n.localStore,vr(e));n.isPrimaryClient&&Cx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await tA(n,e,r,a==="current")}return i}async function tA(t,e,n,r){t.Uc=(c,d,h)=>async function(g,y,w,p){let m=y.view.Ic(w);m.ks&&(m=await xg(g.localStore,y.query,!1).then(({documents:x})=>y.view.Ic(x,m)));const f=p&&p.targetChanges.get(y.targetId),v=y.view.applyChanges(m,g.isPrimaryClient,f);return kg(g,y.targetId,v.Pc),v.snapshot}(t,c,d,h);const i=await xg(t.localStore,e,!0),s=new QC(e,i.Ks),o=s.Ic(i.documents),a=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);kg(t,n,l.Pc);const u=new YC(e,n,s);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),l.snapshot}async function nA(t,e){const n=J(t),r=n.Cc.get(e),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(s=>!nu(s,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ax(n.remoteStore,r.targetId),_h(n,r.targetId)}).catch(Ro)):(_h(n,r.targetId),await wh(n.localStore,r.targetId,!0))}async function rA(t,e,n){const r=hA(t);try{const i=await function(s,o){const a=J(s),l=ht.now(),u=o.reduce((d,h)=>d.add(h.key),ge());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.Us.Es(d,u).next(h=>{c=h;const g=[];for(const y of o){const w=T2(y,c.get(y.key));w!=null&&g.push(new To(y.key,w,tx(w.value.mapValue),si.exists(!0)))}return a.gs.addMutationBatch(d,l,g,o)})).then(d=>(d.applyToLocalDocumentSet(c),{batchId:d.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.$c[s.currentUser.toKey()];l||(l=new Pe(ce)),l=l.insert(o,a),s.$c[s.currentUser.toKey()]=l}(r,i.batchId,n),await Po(r,i.changes),await uu(r.remoteStore)}catch(i){const s=Cf(i,"Failed to persist write");n.reject(s)}}async function Ux(t,e){const n=J(t);try{const r=await pC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oc.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?fe(o.Sc):i.removedDocuments.size>0&&(fe(o.Sc),o.Sc=!1))}),await Po(n,r,e)}catch(r){await Ro(r)}}function Ig(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Cc.forEach((s,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=J(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.tc(o)&&(l=!0)}),l&&Af(a)}(r.eventManager,e),i.length&&r.Dc.To(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iA(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oc.get(e),s=i&&i.key;if(s){let o=new Pe(z.comparator);o=o.insert(s,He.newNoDocument(s,ee.min()));const a=ge().add(s),l=new ou(ee.min(),new Map,new Ue(ce),o,a);await Ux(r,l),r.kc=r.kc.remove(s),r.Oc.delete(e),Rf(r)}else await wh(r.localStore,e,!1).then(()=>_h(r,e,n)).catch(Ro)}async function sA(t,e){const n=J(t),r=e.batch.batchId;try{const i=await dC(n.localStore,e);Vx(n,r,null),Fx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,i)}catch(i){await Ro(i)}}async function oA(t,e,n){const r=J(t);try{const i=await function(s,o){const a=J(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.gs.lookupMutationBatch(l,o).next(c=>(fe(c!==null),u=c.keys(),a.gs.removeMutationBatch(l,c))).next(()=>a.gs.performConsistencyCheck(l)).next(()=>a.Us.Es(l,u))})}(r.localStore,e);Vx(r,e,n),Fx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,i)}catch(i){await Ro(i)}}function Fx(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function Vx(t,e,n){const r=J(t);let i=r.$c[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.$c[r.currentUser.toKey()]=i}}function _h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(r=>{t.Mc.containsKey(r)||jx(t,r)})}function jx(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(Ax(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Rf(t))}function kg(t,e,n){for(const r of n)r instanceof $x?(t.Mc.addReference(r.key,e),aA(t,r)):r instanceof Bx?(F("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||jx(t,r.key)):Y()}function aA(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.xc.add(r),Rf(t))}function Rf(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new z(ve.fromString(e)),r=t.Bc.next();t.Oc.set(r,new JC(n)),t.kc=t.kc.insert(n,r),Cx(t.remoteStore,new sr(vr(mf(n.path)),r,2,ff.A))}}async function Po(t,e,n){const r=J(t),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((a,l)=>{o.push(r.Uc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=wf.Ss(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Dc.To(i),await async function(a,l){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>M.forEach(l,d=>M.forEach(d.vs,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>M.forEach(d.Vs,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Ao(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ms.get(d),g=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(d,y)}}}(r.localStore,s))}async function lA(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Sx(n.localStore,e);n.currentUser=e,function(i,s){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new j(O.CANCELLED,s))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Po(n,r.qs)}}function uA(t,e){const n=J(t),r=n.Oc.get(e);if(r&&r.Sc)return ge().add(r.key);{let i=ge();const s=n.Nc.get(e);if(!s)return i;for(const o of s){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function cA(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ux.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iA.bind(null,e),e.Dc.To=GC.bind(null,e.eventManager),e.Dc.qc=XC.bind(null,e.eventManager),e}function hA(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oA.bind(null,e),e}class fA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=au(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return fC(this.persistence,new cC,e.initialUser,this.O)}jc(e){return new IC(Ef.bi,this.O)}Gc(e){return new TC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lA.bind(null,this.syncEngine),await WC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new KC}createDatastore(e){const n=au(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new NC(i));var i;return function(s,o,a,l){return new bC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ig(this.syncEngine,a,0),o=_g.Vt()?new _g:new CC,new LC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ZC(r,i,s,o,a,l);return u&&(c.Lc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Do(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Y1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gA(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Sx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function mA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vA(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Eg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Eg(e.remoteStore,s)),t.onlineComponents=e}async function vA(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await gA(t,new fA)),t.offlineComponents}async function Hx(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await mA(t,new dA)),t.onlineComponents}function yA(t){return Hx(t).then(e=>e.syncEngine)}async function Eh(t){const e=await Hx(t),n=e.eventManager;return n.onListen=eA.bind(null,e.syncEngine),n.onUnlisten=nA.bind(null,e.syncEngine),n}function xA(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new zx({next:d=>{s.enqueueAndForget(()=>Lx(i,c)),d.fromCache&&a.source==="server"?l.reject(new j(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Mx(o,u,{includeMetadataChanges:!0,uc:!0});return Ox(i,c)}(await Eh(t),t.asyncQueue,e,n,r)),r.promise}const Tg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t,e,n){if(!n)throw new j(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wA(t,e,n,r){if(e===!0&&r===!0)throw new j(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cg(t){if(!z.isDocumentKey(t))throw new j(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ag(t){if(z.isDocumentKey(t))throw new j(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ai(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new j(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rg({}),this._settingsFrozen=!1,e instanceof vi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(i.options.projectId)}(e))}get app(){if(!this._app)throw new j(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new XT;switch(n.type){case"gapi":const r=n.client;return fe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new JT(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tg.get(e);n&&(F("ComponentProvider","Removing Datastore"),Tg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class Rn extends Bi{constructor(e,n,r){super(e,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new z(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function LN(t,e,...n){if(t=It(t),Wx("collection","path",e),t instanceof Df){const r=ve.fromString(e,...n);return Ag(r),new Rn(t,null,r)}{if(!(t instanceof _t||t instanceof Rn))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Ag(r),new Rn(t.firestore,null,r)}}function _A(t,e,...n){if(t=It(t),arguments.length===1&&(e=Y1.R()),Wx("doc","path",e),t instanceof Df){const r=ve.fromString(e,...n);return Cg(r),new _t(t,null,new z(r))}{if(!(t instanceof _t||t instanceof Rn))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Cg(r),new _t(t.firestore,t instanceof Rn?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new kx(this,"async_queue_retry"),this.yu=()=>{const n=rc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new An;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Ao(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(r=>{this._u=r,this.wu=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw $n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.wu=!1,r))));return this.hu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=Tf.createAndSchedule(this,e,n,r,s=>this.Tu(s));return this.du.push(i),i}pu(){this._u&&Y()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Ng(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class no extends Df{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new EA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||qx(this),this._firestoreClient.terminate()}}function MN(t=b0()){return Ar(t,"firestore").getImmediate()}function Pf(t){return t._firestoreClient||qx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qx(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new i2(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(Ve.fromBase64String(e))}catch(n){throw new j(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^__.*__$/;class IA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new To(e,this.data,this.fieldMask,n,this.fieldTransforms):new su(e,this.data,n,this.fieldTransforms)}}function Gx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.O=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.Nu(e),i}xu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return gl(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Gx(this.Vu)&&SA.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class kA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=r||au(e)}Fu(e,n,r,i=!1){return new Lf({Vu:e,methodName:n,$u:r,path:rt.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function TA(t){const e=t._freezeSettings(),n=au(t._databaseId);return new kA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CA(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Jx("Data must be an object, but it was:",o,r);const a=Qx(r,o);let l,u;if(s.merge)l=new ch(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=AA(e,d,n);if(!o.contains(h))throw new j(O.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);NA(c,h)||c.push(h)}l=new ch(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new IA(new Nt(a),l,u)}function Xx(t,e){if(Yx(t=It(t)))return Jx("Unsupported field value:",e,t),Qx(t,e);if(t instanceof Kx)return function(n,r){if(!Gx(r.Vu))throw r.Ou(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Xx(o,r.ku(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=It(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return w2(r.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ht.fromDate(n);return{timestampValue:dl(r.O,i)}}if(n instanceof ht){const i=new ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dl(r.O,i)}}if(n instanceof Of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _i)return{bytesValue:yx(r.O,n._byteString)};if(n instanceof _t){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ou(`Unsupported field value: ${Nf(n)}`)}(t,e)}function Qx(t,e){const n={};return J1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(t,(r,i)=>{const s=Xx(i,e.Du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Yx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof Of||t instanceof _i||t instanceof _t||t instanceof Kx)}function Jx(t,e,n){if(!Yx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Nf(n);throw r==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function AA(t,e,n){if((e=It(e))instanceof bf)return e._internalPath;if(typeof e=="string")return Zx(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const RA=new RegExp("[~\\*/\\[\\]]");function Zx(t,e,n){if(e.search(RA)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bf(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(O.INVALID_ARGUMENT,a+t+l)}function NA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DA extends ew{data(){return super.data()}}function Mf(t,e){return typeof e=="string"?Zx(t,e):e instanceof bf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tw extends ew{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ea extends tw{data(e={}){return super.data(e)}}class nw{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ea(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new cs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new cs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:PA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){if(cl(t)&&t.explicitOrderBy.length===0)throw new j(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bA{}function $N(t,...e){for(const n of e)t=n._apply(t);return t}class OA extends bA{constructor(e,n){super(),this.Uu=e,this.Gu=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ii(i,s);return function(a,l){if(rx(a)===null){const u=ix(a);u!==null&&LA(a,u,l.field)}}(r,o),o}(e._query,this.Uu,this.Gu);return new Bi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ko(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function BN(t,e="asc"){const n=e,r=Mf("orderBy",t);return new OA(r,n)}function LA(t,e,n){if(!n.isEqual(e))throw new j(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return Li(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ex(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);fe(Ex(r));const i=new vi(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $f extends MA{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function UN(t){t=ai(t,Bi);const e=ai(t.firestore,no),n=Pf(e),r=new $f(e);return rw(t._query),xA(n,t._query).then(i=>new nw(e,r,t,i))}function FN(t,e){const n=ai(t.firestore,no),r=_A(t),i=$A(t.converter,e);return BA(n,[CA(TA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,si.exists(!1))]).then(()=>r)}function VN(t,...e){var n,r,i;t=It(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ng(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ng(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof _t)u=ai(t.firestore,no),c=mf(t._key.path),l={next:d=>{e[o]&&e[o](UA(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ai(t,Bi);u=ai(d.firestore,no),c=d._query;const h=new $f(u);l={next:g=>{e[o]&&e[o](new nw(u,h,d,g))},error:e[o+1],complete:e[o+2]},rw(t._query)}return function(d,h,g,y){const w=new zx(y),p=new Mx(h,w,g);return d.asyncQueue.enqueueAndForget(async()=>Ox(await Eh(d),p)),()=>{w.Jc(),d.asyncQueue.enqueueAndForget(async()=>Lx(await Eh(d),p))}}(Pf(u),c,a,l)}function BA(t,e){return function(n,r){const i=new An;return n.asyncQueue.enqueueAndForget(async()=>rA(await yA(n),r,i)),i.promise}(Pf(t),e)}function UA(t,e,n){const r=n.docs.get(e._key),i=new $f(t);return new tw(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Oi=n})(go),Ft(new Pt("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new no(i,new QT(n.getProvider("auth-internal")),new e2(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),xt(Zp,"3.4.5",t),xt(Zp,"3.4.5","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FA=iw,sw=new Tr("auth","Firebase",iw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new $l("@firebase/auth");function Sa(t,...e){Dg.logLevel<=oe.ERROR&&Dg.error(`Auth (${go}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Uf(t,...e)}function Bt(t,...e){return Uf(t,...e)}function ow(t,e,n){const r=Object.assign(Object.assign({},FA()),{[e]:n});return new Tr("auth","Firebase",r).create(e,{appName:t.name})}function VA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),ow(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sw.create(t,...e)}function X(t,e,...n){if(!t)throw Uf(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function rn(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function Jt(t){rn(t instanceof Function,"Expected a class definition");let e=Pg.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t,e){const n=Ar(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zs(s,e!=null?e:{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||R0()||"connection"in navigator)?navigator.onLine:!0}function qA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=xy()||wy()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new bo(3e4,6e4);function XA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cu(t,e,n,r,i={}){return lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),aw.fetch()(uw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KA),e);try{const i=new YA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ic(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ic(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ic(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ow(t,c,u);jt(t,c)}}catch(i){if(i instanceof on)throw i;jt(t,"network-request-failed")}}async function QA(t,e,n,r,i={}){const s=await cu(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`}class YA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),GA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ic(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){return cu(t,"POST","/v1/accounts:delete",e)}async function ZA(t,e){return cu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e4(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=Vf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:As(sc(i.auth_time)),issuedAtTime:As(sc(i.iat)),expirationTime:As(sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function Vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const i=uS(n);return i?JSON.parse(i):(Sa("Failed to decode base64 JWT payload"),null)}catch(i){return Sa("Caught error parsing JWT payload as JSON",i),null}}function t4(t){const e=Vf(t);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&n4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ro(t,ZA(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o4(s.providerUserInfo):[],a=s4(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function i4(t){const e=It(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o4(t){return t.map(e=>{var{providerId:n}=e,r=Bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e){const n=await lw(t,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):t4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await a4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new io;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){X(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e4(this,e)}reload(){return i4(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ro(this,JA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:x,isAnonymous:I,providerData:_,stsTokenManager:E}=n;X(v&&E,e,"internal-error");const k=io.fromJSON(this.name,E);X(typeof v=="string",e,"internal-error"),un(d,e.name),un(h,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof I=="boolean",e,"internal-error"),un(g,e.name),un(y,e.name),un(w,e.name),un(p,e.name),un(m,e.name),un(f,e.name);const C=new or({uid:v,auth:e,email:h,emailVerified:x,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:k,createdAt:m,lastLoginAt:f});return _&&Array.isArray(_)&&(C.providerData=_.map(S=>Object.assign({},S))),p&&(C._redirectEventId=p),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new io;i.updateFromServerResponse(n);const s=new or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hw.type="NONE";const Og=hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(Jt(Og),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(Og);const o=Ia(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=or._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new li(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mw(e))return"Blackberry";if(vw(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(gw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fw(t=Ne()){return/firefox\//i.test(t)}function jf(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(t=Ne()){return/crios\//i.test(t)}function pw(t=Ne()){return/iemobile/i.test(t)}function gw(t=Ne()){return/android/i.test(t)}function mw(t=Ne()){return/blackberry/i.test(t)}function vw(t=Ne()){return/webos/i.test(t)}function hu(t=Ne()){return/iphone|ipad|ipod/i.test(t)}function l4(t=Ne()){var e;return hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u4(){return _y()&&document.documentMode===10}function yw(t=Ne()){return hu(t)||gw(t)||vw(t)||mw(t)||/windows phone/i.test(t)||pw(t)}function c4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e=[]){let n;switch(t){case"Browser":n=Lg(Ne());break;case"Worker":n=`${Lg(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${go}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mg(this),this.idTokenSubscription=new Mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?It(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function zf(t){return It(t)}class Mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=yS(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return QA(t,"POST","/v1/accounts:signInWithIdp",XA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="http://localhost";class xr extends ww{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:f4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Hf{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Oo{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Oo{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Oo{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await or._fromIdTokenResponse(e,r,i),o=$g(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$g(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends on{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function d4(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ro(t,_w(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Vf(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g4(t,e,n=!1){const r="signIn",i=await _w(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m4(){const t=Ne();return jf(t)||hu(t)}const v4=1e3,y4=10;class Sw extends Ew{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=m4()&&c4(),this.fallbackToPolling=yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);u4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,y4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},v4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const x4=Sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const kw=Iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await w4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function E4(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function S4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k4(){return Tw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebaseLocalStorageDb",T4=1,xl="firebaseLocalStorage",Aw="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function du(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function C4(){const t=indexedDB.deleteDatabase(Cw);return new Lo(t).toPromise()}function Ih(){const t=indexedDB.open(Cw,T4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:Aw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await C4(),e(await Ih()))})})}async function Bg(t,e,n){const r=du(t,!0).put({[Aw]:e,value:n});return new Lo(r).toPromise()}async function A4(t,e){const n=du(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Ug(t,e){const n=du(t,!0).delete(e);return new Lo(n).toPromise()}const R4=800,N4=3;class Rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>N4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(k4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S4(),!this.activeServiceWorker)return;this.sender=new _4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await Bg(e,yl,"1"),await Ug(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ug(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=du(i,!1).getAll();return new Lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rw.type="LOCAL";const D4=Rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function b4(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",P4().appendChild(r)})}function O4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){return e?Jt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends ww{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L4(t){return g4(t.auth,new qf(t),t.bypassAuthState)}function M4(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),p4(n,new qf(t),t.bypassAuthState)}async function $4(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),d4(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L4;case"linkViaPopup":case"linkViaRedirect":return $4;case"reauthViaPopup":case"reauthViaRedirect":return M4;default:jt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=new bo(2e3,1e4);async function jN(t,e,n){const r=zf(t);VA(t,e,Hf);const i=Nw(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}class nr extends Dw{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,B4.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="pendingRedirect",oc=new Map;class F4 extends Dw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await V4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V4(t,e){const n=z4(e),r=j4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function j4(t){return Jt(t._redirectPersistence)}function z4(t){return Ia(U4,t.config.apiKey,t.name)}async function H4(t,e,n=!1){const r=zf(t),i=Nw(r,e),o=await new F4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4=10*60*1e3;class q4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fg(e))}saveEventToCache(e){this.cachedEventUids.add(Fg(e)),this.lastProcessedEventTime=Date.now()}}function Fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(t,e={}){return cu(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q4=/^https?/;async function Y4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G4(t);for(const n of e)try{if(J4(n))return}catch{}jt(t,"unauthorized-domain")}function J4(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Q4.test(n))return!1;if(X4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4=new bo(3e4,6e4);function Vg(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eR(t){return new Promise((e,n)=>{var r,i,s;function o(){Vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vg(),n(Bt(t,"network-request-failed"))},timeout:Z4.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=O4("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},b4(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ka=null,e})}let ka=null;function tR(t){return ka=ka||eR(t),ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new bo(5e3,15e3),rR="__/auth/iframe",iR="emulator/auth/iframe",sR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aR(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,iR):`https://${t.config.authDomain}/${rR}`,r={apiKey:e.apiKey,appName:t.name,v:go},i=oR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fo(r).slice(1)}`}async function lR(t){const e=await tR(t),n=Ut().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:aR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},nR.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,hR=600,fR="_blank",dR="http://localhost";class jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pR(t,e,n,r=cR,i=hR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(a=dw(u)?fR:n),fw(u)&&(e=e||dR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(l4(u)&&a!=="_self")return gR(e||"",a),new jg(null);const d=window.open(e||"",a,c);X(d,t,"popup-blocked");try{d.focus()}catch{}return new jg(d)}function gR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="__/auth/handler",vR="emulator/auth/handler";function zg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:go,eventId:i};if(e instanceof Hf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Oo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${yR(t)}?${fo(a).slice(1)}`}function yR({config:t}){return t.emulator?Ff(t,vR):`https://${t.authDomain}/${mR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class xR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=H4}async _openPopup(e,n,r,i){var s;rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=zg(e,n,r,Sh(),i);return pR(e,o,Wf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),E4(zg(e,n,r,Sh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lR(e),r=new q4(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ac];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yw()||jf()||hu()}}const wR=xR;var Hg="@firebase/auth",Wg="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SR(t){Ft(new Pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{X(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),X(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xw(t)},l=new h4(o,a);return zA(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new Pt("auth-internal",e=>{const n=zf(e.getProvider("auth").getImmediate());return(r=>new _R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Hg,Wg,ER(t)),xt(Hg,Wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t=b0()){const e=Ar(t,"auth");return e.isInitialized()?e.getImmediate():jA(t,{popupRedirectResolver:wR,persistence:[D4,x4,kw]})}SR("Browser");var IR={exports:{}},Mo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kR=K.exports,bw=60103;Mo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var qg=Symbol.for;bw=qg("react.element"),Mo.Fragment=qg("react.fragment")}var TR=kR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CR=Object.prototype.hasOwnProperty,AR={key:!0,ref:!0,__self:!0,__source:!0};function Ow(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CR.call(e,r)&&!AR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bw,type:t,key:s,ref:o,props:i,_owner:TR.current}}Mo.jsx=Ow;Mo.jsxs=Ow;IR.exports=Mo;function wl(){return wl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));var Kg=function(t){return t},Gg="beforeunload",RR="popstate";function NR(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=r.location,k=E.pathname,C=E.search,S=E.hash,A=i.state||{};return[A.idx,Kg({pathname:k,search:C,hash:S,state:A.usr||null,key:A.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var E=rr.Pop,k=s(),C=k[0],S=k[1];if(g.length){if(C!=null){var A=c-C;A&&(o={action:E,location:S,retry:function(){I(A*-1)}},I(A))}}else f(E)}}r.addEventListener(RR,a);var l=rr.Pop,u=s(),c=u[0],d=u[1],h=Qg(),g=Qg();c==null&&(c=0,i.replaceState(wl({},i.state,{idx:c}),""));function y(E){return typeof E=="string"?E:kh(E)}function w(E,k){return k===void 0&&(k=null),Kg(wl({pathname:d.pathname,hash:"",search:""},typeof E=="string"?Dr(E):E,{state:k,key:DR()}))}function p(E,k){return[{usr:E.state,key:E.key,idx:k},y(E)]}function m(E,k,C){return!g.length||(g.call({action:E,location:k,retry:C}),!1)}function f(E){l=E;var k=s();c=k[0],d=k[1],h.call({action:l,location:d})}function v(E,k){var C=rr.Push,S=w(E,k);function A(){v(E,k)}if(m(C,S,A)){var D=p(S,c+1),b=D[0],$=D[1];try{i.pushState(b,"",$)}catch{r.location.assign($)}f(C)}}function x(E,k){var C=rr.Replace,S=w(E,k);function A(){x(E,k)}if(m(C,S,A)){var D=p(S,c),b=D[0],$=D[1];i.replaceState(b,"",$),f(C)}}function I(E){i.go(E)}var _={get action(){return l},get location(){return d},createHref:y,push:v,replace:x,go:I,back:function(){I(-1)},forward:function(){I(1)},listen:function(k){return h.push(k)},block:function(k){var C=g.push(k);return g.length===1&&r.addEventListener(Gg,Xg),function(){C(),g.length||r.removeEventListener(Gg,Xg)}}};return _}function Xg(t){t.preventDefault(),t.returnValue=""}function Qg(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function DR(){return Math.random().toString(36).substr(2,8)}function kh(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Dr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zt(t,e){if(!t)throw new Error(e)}const Kf=K.exports.createContext(null),Gf=K.exports.createContext(null),$o=K.exports.createContext({outlet:null,matches:[]});function PR(t){zt(!1)}function bR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1}=t;Bo()&&zt(!1);let a=Uw(e),l=K.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,y=K.exports.useMemo(()=>{let w=Bw(u,a);return w==null?null:{pathname:w,search:c,hash:d,state:h,key:g}},[a,u,c,d,h,g]);return y==null?null:K.exports.createElement(Kf.Provider,{value:l},K.exports.createElement(Gf.Provider,{children:n,value:{location:y,navigationType:i}}))}function HN(t){let{children:e,location:n}=t;return MR(Th(e),n)}function OR(t){Bo()||zt(!1);let{basename:e,navigator:n}=K.exports.useContext(Kf),{hash:r,pathname:i,search:s}=Lw(t),o=i;if(e!=="/"){let a=eN(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Nn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Bo(){return K.exports.useContext(Gf)!=null}function pu(){return Bo()||zt(!1),K.exports.useContext(Gf).location}function LR(){Bo()||zt(!1);let{basename:t,navigator:e}=K.exports.useContext(Kf),{matches:n}=K.exports.useContext($o),{pathname:r}=pu(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=K.exports.useRef(!1);return K.exports.useEffect(()=>{s.current=!0}),K.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=$w(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Nn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function WN(){let{matches:t}=K.exports.useContext($o),e=t[t.length-1];return e?e.params:{}}function Lw(t){let{matches:e}=K.exports.useContext($o),{pathname:n}=pu(),r=JSON.stringify(e.map(i=>i.pathnameBase));return K.exports.useMemo(()=>$w(t,JSON.parse(r),n),[t,r,n])}function MR(t,e){Bo()||zt(!1);let{matches:n}=K.exports.useContext($o),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=pu(),a;if(e){var l;let h=typeof e=="string"?Dr(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||zt(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=$R(t,{pathname:c});return GR(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:Nn([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:Nn([s,h.pathnameBase])})),n)}function Th(t){let e=[];return K.exports.Children.forEach(t,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){e.push.apply(e,Th(n.props.children));return}n.type!==PR&&zt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Th(n.props.children)),e.push(r)}),e}function $R(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Dr(e):e,i=Bw(r.pathname||"/",n);if(i==null)return null;let s=Mw(t);BR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=KR(s[a],i);return o}function Mw(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||zt(!1),o.relativePath=o.relativePath.slice(r.length));let a=Nn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&zt(!1),Mw(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:WR(a,i.index),routesMeta:l})}),e}function BR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UR=/^:\w+$/,FR=3,VR=2,jR=1,zR=10,HR=-2,Yg=t=>t==="*";function WR(t,e){let n=t.split("/"),r=n.length;return n.some(Yg)&&(r+=HR),e&&(r+=VR),n.filter(i=>!Yg(i)).reduce((i,s)=>i+(UR.test(s)?FR:s===""?jR:zR),r)}function qR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=XR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Nn([i,c.pathname]),pathnameBase:Uw(Nn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Nn([i,c.pathnameBase]))}return s}function GR(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>K.exports.createElement($o.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function XR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=QR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=YR(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function QR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function YR(t,e){try{return decodeURIComponent(t)}catch{return t}}function JR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dr(t):t;return{pathname:n?n.startsWith("/")?n:ZR(n,e):e,search:tN(r),hash:nN(i)}}function ZR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $w(t,e,n){let r=typeof t=="string"?Dr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=JR(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function eN(t){return t===""||t.pathname===""?"/":typeof t=="string"?Dr(t).pathname:t.pathname}function Bw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Nn=t=>t.join("/").replace(/\/\/+/g,"/"),Uw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ch(){return Ch=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ch.apply(this,arguments)}function rN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const iN=["onClick","reloadDocument","replace","state","target","to"];function qN(t){let{basename:e,children:n,window:r}=t,i=K.exports.useRef();i.current==null&&(i.current=NR({window:r}));let s=i.current,[o,a]=K.exports.useState({action:s.action,location:s.location});return K.exports.useLayoutEffect(()=>s.listen(a),[s]),K.exports.createElement(bR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function sN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const KN=K.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=rN(e,iN),c=OR(l),d=oN(l,{replace:s,state:o,target:a});function h(g){r&&r(g),!g.defaultPrevented&&!i&&d(g)}return K.exports.createElement("a",Ch({},u,{href:c,onClick:h,ref:n,target:a}))});function oN(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=LR(),o=pu(),a=Lw(t);return K.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!sN(l)){l.preventDefault();let u=!!r||kh(o)===kh(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}var Fw={exports:{}},Ta=1;function aN(){return Ta=(Ta*9301+49297)%233280,Ta/233280}function lN(t){Ta=t}var uN={nextValue:aN,seed:lN},Ah=uN,Kn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",xn,Jg,hs;function Rh(){hs=!1}function Vw(t){if(!t){xn!==Kn&&(xn=Kn,Rh());return}if(t!==xn){if(t.length!==Kn.length)throw new Error("Custom alphabet for shortid must be "+Kn.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(n,r,i){return r!==i.lastIndexOf(n)});if(e.length)throw new Error("Custom alphabet for shortid must be "+Kn.length+" unique characters. These characters were not unique: "+e.join(", "));xn=t,Rh()}}function cN(t){return Vw(t),xn}function hN(t){Ah.seed(t),Jg!==t&&(Rh(),Jg=t)}function fN(){xn||Vw(Kn);for(var t=xn.split(""),e=[],n=Ah.nextValue(),r;t.length>0;)n=Ah.nextValue(),r=Math.floor(n*t.length),e.push(t.splice(r,1)[0]);return e.join("")}function jw(){return hs||(hs=fN(),hs)}function dN(t){var e=jw();return e[t]}function pN(){return xn||Kn}var Xf={get:pN,characters:cN,seed:hN,lookup:dN,shuffled:jw},lc=typeof window=="object"&&(window.crypto||window.msCrypto),Nh;!lc||!lc.getRandomValues?Nh=function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(Math.random()*256));return e}:Nh=function(t){return lc.getRandomValues(new Uint8Array(t))};var gN=Nh,mN=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*r*n/e.length),s="";;)for(var o=t(i),a=i;a--;)if(s+=e[o[a]&r]||"",s.length===+n)return s},vN=Xf,yN=gN,xN=mN;function wN(t){for(var e=0,n,r="";!n;)r=r+xN(yN,vN.get(),1),n=t<Math.pow(16,e+1),e++;return r}var _N=wN,sa=_N,EN=1567752802062,SN=7,oa,Zg;function IN(t){var e="",n=Math.floor((Date.now()-EN)*.001);return n===Zg?oa++:(oa=0,Zg=n),e=e+sa(SN),e=e+sa(t),oa>0&&(e=e+sa(oa)),e=e+sa(n),e}var kN=IN,TN=Xf;function CN(t){if(!t||typeof t!="string"||t.length<6)return!1;var e=new RegExp("[^"+TN.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!e.test(t)}var AN=CN;(function(t){var e=Xf,n=kN,r=AN,i=0;function s(u){return e.seed(u),t.exports}function o(u){return i=u,t.exports}function a(u){return u!==void 0&&e.characters(u),e.shuffled()}function l(){return n(i)}t.exports=l,t.exports.generate=l,t.exports.seed=s,t.exports.worker=o,t.exports.characters=a,t.exports.isValid=r})(Fw);var GN=Fw.exports;export{qN as B,PN as C,dn as G,VN as H,KN as L,HN as R,zN as a,WN as b,DN as c,MN as d,GN as e,pu as f,ON as g,PR as h,bN as i,IR as j,NN as k,RN as l,LN as n,BN as p,UN as q,K as r,jN as s,LR as u,$N as w,FN as z};
