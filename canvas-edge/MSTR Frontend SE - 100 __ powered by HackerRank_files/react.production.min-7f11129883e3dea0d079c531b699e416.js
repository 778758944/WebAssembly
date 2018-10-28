/** @license React v16.3.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";!function(q,h){"object"==typeof exports&&"undefined"!=typeof module?module.exports=h():"function"==typeof define&&define.amd?define(h):q.React=h()}(this,function(){function q(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+a,c=0;b>c;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);throw b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),b.name="Invariant Violation",b.framesToPop=1,b}function h(a){return function(){return a}}function p(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||E}function F(){}function v(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||E}function G(a,b,e){var c=void 0,f={},k=null,d=null;if(null!=b)for(c in void 0!==b.ref&&(d=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,c)&&!I.hasOwnProperty(c)&&(f[c]=b[c]);var g=arguments.length-2;if(1===g)f.children=e;else if(g>1){for(var l=Array(g),m=0;g>m;m++)l[m]=arguments[m+2];f.children=l}if(a&&a.defaultProps)for(c in g=a.defaultProps)void 0===f[c]&&(f[c]=g[c]);return{$$typeof:r,type:a,key:k,ref:d,props:f,_owner:w.current}}function x(a){return"object"==typeof a&&null!==a&&a.$$typeof===r}function O(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function J(a,b,e,c){if(u.length){var f=u.pop();return f.result=a,f.keyPrefix=b,f.func=e,f.context=c,f.count=0,f}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function K(a){a.result=null,a.keyPrefix=null,a.func=null,a.context=null,a.count=0,10>u.length&&u.push(a)}function t(a,b,e,c){var f=typeof a;("undefined"===f||"boolean"===f)&&(a=null);var k=!1;if(null===a)k=!0;else switch(f){case"string":case"number":k=!0;break;case"object":switch(a.$$typeof){case r:case P:k=!0}}if(k)return e(c,a,""===b?"."+y(a,0):b),1;if(k=0,b=""===b?".":b+":",Array.isArray(a))for(var d=0;d<a.length;d++){f=a[d];var g=b+y(f,d);k+=t(f,g,e,c)}else if(null===a||"undefined"==typeof a?g=null:(g=L&&a[L]||a["@@iterator"],g="function"==typeof g?g:null),"function"==typeof g)for(a=g.call(a),d=0;!(f=a.next()).done;)f=f.value,g=b+y(f,d++),k+=t(f,g,e,c);else"object"===f&&(e=""+a,q("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return k}function y(a,b){return"object"==typeof a&&null!==a&&null!=a.key?O(a.key):b.toString(36)}function Q(a,b,e){a.func.call(a.context,b,a.count++)}function R(a,b,e){var c=a.result,f=a.keyPrefix;a=a.func.call(a.context,b,a.count++),Array.isArray(a)?z(a,c,e,A.thatReturnsArgument):null!=a&&(x(a)&&(b=f+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(M,"$&/")+"/")+e,a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function z(a,b,e,c,f){var d="";null!=e&&(d=(""+e).replace(M,"$&/")+"/"),b=J(b,d,c,f),null==a||t(a,"",R,b),K(b)}var N=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,B=function(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de","5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var e={};return"abcdefghijklmnopqrst".split("").forEach(function(a){e[a]=a}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},e)).join("")?!1:!0}catch(c){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");for(var c,e=Object(a),f=1;f<arguments.length;f++){var d=Object(arguments[f]);for(var h in d)S.call(d,h)&&(e[h]=d[h]);if(N){c=N(d);for(var g=0;g<c.length;g++)T.call(d,c[g])&&(e[c[g]]=d[c[g]])}}return e},d="function"==typeof Symbol&&Symbol["for"],r=d?Symbol["for"]("react.element"):60103,P=d?Symbol["for"]("react.portal"):60106,n=d?Symbol["for"]("react.fragment"):60107,C=d?Symbol["for"]("react.strict_mode"):60108,U=d?Symbol["for"]("react.provider"):60109,V=d?Symbol["for"]("react.context"):60110,W=d?Symbol["for"]("react.async_mode"):60111,X=d?Symbol["for"]("react.forward_ref"):60112,L="function"==typeof Symbol&&Symbol.iterator,D={};d=function(){},d.thatReturns=h,d.thatReturnsFalse=h(!1),d.thatReturnsTrue=h(!0),d.thatReturnsNull=h(null),d.thatReturnsThis=function(){return this},d.thatReturnsArgument=function(a){return a};var A=d,E={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,e){},enqueueReplaceState:function(a,b,e,c){},enqueueSetState:function(a,b,e,c){}};p.prototype.isReactComponent={},p.prototype.setState=function(a,b){"object"!=typeof a&&"function"!=typeof a&&null!=a?q("85"):void 0,this.updater.enqueueSetState(this,a,b,"setState")},p.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=p.prototype,d=v.prototype=new F,d.constructor=v,B(d,p.prototype),d.isPureReactComponent=!0;var w={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0},M=/\/+/g,u=[];return n={Children:{map:function(a,b,e){if(null==a)return a;var c=[];return z(a,c,null,b,e),c},forEach:function(a,b,e){return null==a?a:(b=J(null,null,b,e),null==a||t(a,"",Q,b),void K(b))},count:function(a,b){return null==a?0:t(a,"",A.thatReturnsNull,null)},toArray:function(a){var b=[];return z(a,b,null,A.thatReturnsArgument),b},only:function(a){return x(a)?void 0:q("143"),a}},createRef:function(){return{current:null}},Component:p,PureComponent:v,createContext:function(a,b){return void 0===b&&(b=null),a={$$typeof:V,_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null},a.Provider={$$typeof:U,_context:a},a.Consumer=a},forwardRef:function(a){return{$$typeof:X,render:a}},Fragment:n,StrictMode:C,unstable_AsyncMode:W,createElement:G,cloneElement:function(a,b,e){var c=void 0,d=B({},a.props),k=a.key,h=a.ref,g=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,g=w.current),void 0!==b.key&&(k=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)H.call(b,c)&&!I.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}if(c=arguments.length-2,1===c)d.children=e;else if(c>1){l=Array(c);for(var m=0;c>m;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:r,type:a.type,key:k,ref:h,props:d,_owner:g}},createFactory:function(a){var b=G.bind(null,a);return b.type=a,b},isValidElement:x,version:"16.3.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:B}},n=(C=Object.freeze({"default":n}))&&n||C,n["default"]?n["default"]:n});
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/react.production.min-8fc2e45f93bea1b773a3f5a6ea95905d.js.map