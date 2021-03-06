//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},'function' === typeof requireYbba.define && requireYbba.define.amd&&requireYbba.define("underscore",[],function(){return h})}();
//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof requireYbba.define === 'function' && requireYbba.define.amd) {
    requireYbba.define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch(e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

// MODELS/MEDIA-GALLERY-ITEM



requireYbba.define('models/media-gallery',[], function() {
  var MediaGalleryItem = Backbone.Model.extend({
    defaulst: {
      title: "",
      img: "//:0",
      caption: "",
      thumb: "//:0",
      large: "//:0"
    }
  });
  return MediaGalleryItem;
});
/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

requireYbba.define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.14',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


requireYbba.define('text!templates/media-gallery-social-share.html.tpl',[],function () { return '<div class="mg-share">\n\n\t\t<div id="facebook_share" class="share_btn" ></div>\n\n    <div id="whatsapp_share" class="share_btn" ></div>\n\n\t\t<div id="twitter_share" class="share_btn" ></div>\n\n\t\t<% // <div id="gplus_share" class="share_btn" ></div> %>\n\n</div>\n';});


requireYbba.define('text!templates/media-gallery-layout.html.tpl',[],function () { return '<div class="media-gallery-fullscreen desktop">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a>\n  </div>\n  \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div><!--\n        \n  --><div class="mg-asside">\n    <div class=\'mg-numers-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>\n    <div class=\'mg-social-w\'></div>\n    <div class="mg-banner-b mg-banner mg-banner-mpu"></div>    \n  </div> \n  \n</div>';});


requireYbba.define('text!templates/media-gallery-layout-mob.html.tpl',[],function () { return '<div class="media-gallery-fullscreen mobile">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a-mob mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a> \n    <div class=\'mg-numers-w\'></div> \n  </div>  \n    \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div>\n        \n  <div class="mg-asside">   \n    <div class=\'mg-social-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>     \n  </div> \n  \n</div>';});


requireYbba.define('text!templates/media-gallery-layout-tab.html.tpl',[],function () { return '<div class="media-gallery-fullscreen mobile tablet">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a> \n    <div class=\'mg-numers-w\'></div> \n  </div>  \n    \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div>\n        \n  <div class="mg-asside">   \n    <div class=\'mg-social-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>     \n  </div> \n  \n</div>';});


requireYbba.define('text!templates/media-gallery-item.html.tpl',[],function () { return '<div class="item">\n  \n  <img  src="<%=img%>" alt="<%=imgAlt%>" />\n  \n</div>';});


requireYbba.define('text!templates/media-gallery-related.html.tpl',[],function () { return '<div class="mg-related">\n  <h3><%= window.backboneApp.t("mediaGallery", "relatedArticles") %></h3>\n  <!--h3>ألبومات سوف تحبينها</h3--><!--\n  <% _.forEach(articles, function (a, i) { %>\n    --><a href="<%=a.link%>" class="mg-related-item mg-related-item-<%=i%>">\n          <div class="mg-related-img">\n            <img  src="<%=a.img%>" alt="<%=a.imgAlt%>" />\n          </div>\n          <p class="mg-related-title">\n            <%= a.title %>\n          </p>\n    </a><!--\n  <% }); %>\n--></div>';});

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}));
requireYbba.define("owl", function(){});

;

/*
 *  jQuery OwlCarouselRtl 
 *  version in git tag
 *
 *  Copyright (c) 2015 Aleksandar Veljkovic
 *  https://github.com/biosonic
 *
 *  Licensed under MIT
 *
 */

(function($) {
  $.fn.owlCarouselRtl = function(config) {
    config = config || {};
    config.rtlJump = (config.rtlJump === false) ? false : true;
    var $this = $(this);
    // rtl css
    $this.addClass("owl-rtl");
    if ($('.owl-rtl-css').length < 1) {
      $($('head')[0]).append("<style class='owl-rtl-css'>.owl-wrapper-outer{direction:ltr;opacity:0.001;} .owl-wrapper{direction:rtl;}</style>");
    }
    // rtl reorder & numeration
    var itemNo = 0;
    $this.children().each(function(i, o) {
      var $o = $(o);
      $o.addClass("item-no-" + itemNo);
      $o.data("no", itemNo);
      itemNo++;
      $($o.parent()).prepend($o);
    });
    // after init bug fix & jump to last
    if (config.afterInit) {
      var afterInitClone = config.afterInit;
    }
    config.afterInit = function() {
      var interval = setInterval(function() {
        if ($this.data('owlCarousel') !== 'undefined') {
          clearInterval(interval);
          rtlEnumeration();
          afterInitBindings();
          jump2BugFig();
          if (config.rtlJump === true) {
            $this.data('owlCarousel').jumpTo(9999);
          }
          rtlEnumeration();
          if (typeof (afterInitClone) === "function") {
            afterInitClone();
          }
          rtlEnumeration();
          $this.find('.owl-wrapper-outer').animate({opacity:1},800);
        }
      }, 300);
    };
    // after Action
    if (config.afterAction) {
      var afterAfterActionClone = config.afterAction;
    }
    config.afterAction = function() {
      rtlEnumeration();
      if (typeof (afterAfterActionClone) === "function") {
        afterAfterActionClone();
      }
    };

    // RTL METHODS
    var afterInitBindings = function() {      
      var owl = $this.data('owl-carousel');      
      owl.jumpToRtl = function(num) {        
        var numRtl = owl.itemsAmount - num - 1;
        owl.jumpTo(numRtl);
      };     
      owl.goToRtl = function(num) {        
        var numRtl = owl.itemsAmount - num - 1;
        owl.goTo(numRtl);
      };
    };
    // RTL ENUMERATION
    var rtlEnumeration = function() {
      var owl = $this.data('owl-carousel');
      if (!owl) {
        return false;
      }
      owl.currentItemRtl = owl.maximumItem - owl.currentItem;
      owl.currentPositionRtl = owl.maximumItem - owl.currentItem + 1;
    };

    var jump2BugFig = function() {
      var ua = window.navigator.userAgent;
      var broken = false;
      broken = broken || (ua.indexOf('GT-I9300') > -1) && (ua.indexOf('GT-I9300') > -1) && (ua.indexOf('Chrome') === -1);
      broken = broken || (ua.indexOf('SM-T110') > -1) && (ua.indexOf('Android 4.2.2') > -1) && (ua.indexOf('Chrome') === -1); // Galxy Tab 3

      if (broken) {
        $('.owl-controls .owl-buttons', $this).off("touchend.owlControls");
      }
    };

    // call super
    $this.owlCarousel(config);
  };
})(jQuery);

requireYbba.define("owlRtl", function(){});

;

/*
 *  jQuery OwlCarouselRtl v.0.9.0
 *
 *  Copyright (c) 2015 Aleksandar Veljkovic
 *  https://github.com/biosonic/FullModal.git
 *
 *  Licensed under MIT
 *
 */

(function($) {

  $.fn.fullModal = function(set) {

    set = set || {};
    set.onclose = set.onclose || function() {
    };
    set.closeText = set.closeText || "<span>&#215;</span>";
    set.aditionalStyle = set.aditionalStyle || false;
    set.closeButton = set.closeButton || ((set.closeButton===false) ? false : true);

    var toReturn = {};

    var $content = $(this);
    var $fullScreenWrap = $('<div id="dwf-fullscreen-wrap" />');
    var $exodusSource = $('<div id="dfs-exodus-source" />');
    var $closeButton = $("<a href='#' class='dfs-close-button'>" + set.closeText + "</a>");
    var $headStyle = $("<style class='full-screan-style'>body > * {max-height:0!important;overflow:hidden!important;margin:0!important;padding:0!important;display:none!important;} body > #dwf-fullscreen-wrap,.chromeperfectpixel-overlay {max-height:none!important;display:block!important;} body, html {height:100%;}</style>");
    var scrollBack = $(window).scrollTop();

    $content.after($fullScreenWrap);
    $fullScreenWrap.append($content);

    $fullScreenWrap.after($exodusSource);
    $exodusSource.append($fullScreenWrap);

    if (set.closeButton === true) {
      $fullScreenWrap.append($closeButton);
    }

    $('head').append($headStyle);

    $("html").addClass('dwf-fullscreen');
    $("body").prepend($fullScreenWrap);


    if (set.aditionalStyle) {
      $('head').append("<style class='full-screan-style-aditional'>" + set.aditionalStyle + "</style>");
    }

    toReturn.close = function() {
      $exodusSource.after($content);
      $exodusSource.remove();
      $fullScreenWrap.remove();
      $headStyle.remove();
      $(".full-screan-style-aditional").remove();
      $("html").removeClass('dwf-fullscreen');
      $(window).scrollTop(scrollBack);
      set.onClose();
    };

    $closeButton.click(function(e) {
      e.preventDefault();
      toReturn.close();
    });

    return toReturn;

  };

})(jQuery);

requireYbba.define("fullScreen", function(){});

;
(function($) {

  $.fn.galleryCaption = function(set) {

    var set = set || {};
    var $this = $(this);
    var rreturn = {};
    var $active = null;
    //set.autoHeight

    // RTL
    if (set.rtl) {
      var itemNo = 0;
      $this.children().each(function(i, o) {
        var $o = $(o);
        $o.addClass("item-no-" + itemNo);
        $o.data("no", itemNo);
        itemNo++;
        $($o.parent()).prepend($o);
      });
    }


    var $items = $this.children();
    $this.css({position: "relative"});
    $items.css({opacity: 0, zIndex: -1, position: "absolute", transition: "opacity .2s"});

    if (!set.autoHeight) {
      var maxH = 0;
      $items.each(function() {
        var h = $(this).outerHeight(true);
        if (h > maxH) {
          maxH = h;
        }
      });
      $this.css({height: maxH});
    } else {
      $this.css({
        transition: 'height .2s'
      });
      $(window).resize(function () {
        if ($active) {
          var h = $active.outerHeight(true);
          $this.css('height', h);
        }
      });
    }
    
    rreturn.goTo = function(itemNo) {
      if (itemNo === -1 || itemNo === false) {
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
      } else {
        $active = $items.eq(itemNo);
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
        $active.css({opacity: 1, zIndex: 1}).addClass("active");
      }
      if (set.autoHeight && $active) {
        var h = $active.outerHeight(true);
        $this.css('height', h);
      }
    };

    $this.data('galleryCaption', {goTo: rreturn.goTo});


    rreturn.goTo(0);

    return rreturn;
  };

})(jQuery);
requireYbba.define("caption", function(){});

// views/media-gallery.js

//(function() {

requireYbba.define('mediaGallery',[
  'models/media-gallery',
  'text!templates/media-gallery-social-share.html.tpl',
  'text!templates/media-gallery-layout.html.tpl',
  'text!templates/media-gallery-layout-mob.html.tpl',
  'text!templates/media-gallery-layout-tab.html.tpl',
  'text!templates/media-gallery-item.html.tpl',
  'text!templates/media-gallery-related.html.tpl',
  //
  'jquery',
  'owl',
  'owlRtl',
  'fullScreen',
  'caption',
  'sharrre'
          //'sharrre'
], function(
        MediaGalleryItemModel,
        templateSocial,
        templateLayout,
        templateLayoutMob,
        templateLayoutTab,
        templateItem,
        templateRelated
        ) {

  var gPlusSharePhp = backboneApp.set.sharrrePhpProxyh;
  var MediaGallryView = Backbone.View.extend({
    imgBaseUrl: backboneApp.set.imgBaseUrl,
    $fullScreen: $(),
    $layout: $(),
    $slider: $(),
    $captions: $(),
    $social: $(),
    $titles: $(),
    $numers: $(),
    bannerVars: {},
    currentItem: null,
    id: null,
    afterMoveUnhashedOnce: false,
    owlSliderGoTo: function(num) {
      // // will be difined after slider init
    },
    initialize: function(attributes) {
      this.bannerVars = {
        topTrigger: window.backboneApp.set.gallery.adTopTrigger,
        topCounter: window.backboneApp.set.gallery.adTopTrigger,
        overTrigger: window.backboneApp.set.gallery.adOverTrigger,
        overCounter: 1
      };
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.$elem = attributes.$elem;
      this.currentItem = attributes.currentItem || 1;
      this.id = attributes.id;
    },
    parseRelated: function() {
      var _this = this;
      if ($('.mg-related .mg-related-item', _this.$elem).length > 0) {
        var relateds = [];
        $('.mg-related .mg-related-item', _this.$elem).each(function(i, o) {
          var data = {
            title: $("h3", o).text(),
            img: $(".mg-related-img", o).attr('src'),
            imgAlt: $(".mg-related-img", o).attr('alt') || "",
            caption: $(".mg-related-capt", o).text(),
            link: $(o).attr('href')
          };
          relateds.push(data);
        });
        _this.collection.add(new Backbone.Model({
          title: "",
          caption: "",
          type: "related",
          articles: relateds
        }));
      }
    },
    parse: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          imgAlt: $(".mg-img", o).attr('alt') || "",
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
      this.parseRelated();
      this.bindObjects();
    },
    bindObjects: function() {
      var itemTpl = _.template(templateItem);
      var itemsRdr = "";
      var socialTpl = _.template(templateSocial);
      var relatedTpl = _.template(templateRelated);
      var captRdr = "";
      var clength = this.collection.length;
      var titlRdr = "";
      var numersRdr = "";
      this.collection.each(function(item, i) {
        captRdr = "<div class='mg-caption'><p>" + item.attributes.caption + "</p></div>" + captRdr;
        titlRdr = "<div class='mg-title'><h3>" + item.attributes.title + "</h3></div>" + titlRdr;
        numersRdr = "<div class='mg-numer'><div class='num'>" + (i + 1) + "/" + clength + "</div></div>" + numersRdr;
        /*
        if (item.get('type') === 'adv') {
          itemsRdr += "<div class='advert-wrap'><div class='advert' style='height:600px'>&nbsp;</div></div>";
          return true;
        }
        */
        if (item.get('type') === 'item') {
          itemsRdr += itemTpl(item.attributes);
        }
        if (item.get('type') === 'related') {
          itemsRdr += relatedTpl(item.attributes);
        }
      });
      // social
      this.$social = $(socialTpl());
      this.sharrre(this.$social);
      // captions
      this.$captions = $("<div class='mg-captions'>" + captRdr + "</div>");
      this.$captions.galleryCaption({autoHeight: true});
      this.$captions.data('galleryCaption').goTo(-1);
      // titles
      this.$titles = $("<div class='mg-titles'>" + titlRdr + "</div>");
      this.$titles.galleryCaption({autoHeight: true});
      this.$titles.data('galleryCaption').goTo(-1);
      // numeration
      this.$numers = $("<div class='mg-numers'>" + numersRdr + "</div>");
      this.$numers.galleryCaption({autoHeight: true});
      this.$numers.data('galleryCaption').goTo(-1);
      // slider
      this.$slider = $("<div class='mg-slider'>" + itemsRdr + "</div>");
      this.owlSlider(this.$slider);
    },
    render: function() {
      // Layout
      var layoutTpl = _.template(templateLayout);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderTab: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutTab);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderMob: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutMob);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      if ($(window).width() < 540 && $(window).height() < 540) {
        this.$layout.addClass('mobile-small');
      }
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    fullScreen: function() {
      var _this = this;

      if(backboneApp.set.device === 'tablet'){
        $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      }

      this.fullScreen = this.$layout.fullModal({
        onClose: function() {
          $(window).resize();
          $('#myEmbedTarget').css('width', "");
        },
        aditionalStyle: "body{background-color:black}",
        closeButton: false
      });
      $('.mg-close', this.$layout).click(function(e) {
        e.preventDefault();


        // refresh page, bad display properties baners bug fix
        if (backboneApp.set.device === 'desktop' || backboneApp.set.device === 'tablet') {
          var loadIcon = '<img style="position:absolute;top:50%;left:50%;margin: -50px 0 0 -50px;" src="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="/>';
          $('#dwf-fullscreen-wrap > *').css('display', 'none');
          $('#dwf-fullscreen-wrap').append($(loadIcon));
          location = window.location.protocol + '//' + window.location.host + location.pathname;
          return;
        }


        if (
                window.navigator.userAgent.indexOf("MSIE 10") > -1
                || window.navigator.userAgent.indexOf("MSIE 9") > -1
                || window.navigator.userAgent.indexOf("MSIE 8") > -1
                ) {
          window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
          if (window.history) {
            history.replaceState('', document.title, window.location.pathname);
          }
        }
        else {
          if (window.backboneApp.set.gallery.referal) {
            window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
            if (window.history) {
              history.replaceState('', document.title, window.location.pathname);
            }
          } else {
            window.history.back();
          }
        }
      });
    },
    close: function() {
      this.fullScreen.close();
      this.undelegateEvents();
      this.remove();
    },
    banner: function() {
      var $layout = this.$layout;
      var v = this.bannerVars;
      var owl = this.$slider.data('owlCarousel');
      var t1 = v.topCounter >= v.topTrigger;
      var t2 = v.overCounter >= v.overTrigger && (backboneApp.set.device === 'mobile' || backboneApp.set.device === 'tablet');
      if (t1) { // desk both
        // ad server swith 1/3
        if (window.adServer === "google") {
          $('.mg-banner-lb', $layout).html('<div id="gpt-ad-album-lb" />');
          $('.mg-banner-mpu', $layout).html('<div id="gpt-ad-album-mpu" />');
        }
        else {
          $('.mg-banner-lb', $layout).html('<div id="ad-gallery-lb" />');
          $('.mg-banner-mpu', $layout).html('<div id="ad-gallery-mpu" />');
        }
        // /
        v.topCounter = 0;
      }
      v.topCounter++;
      if (t2) { // mobile overlay
        var $overlayContainer = $('.mg-main', this.$layout);
        var $notation = $('<div class="mg-ad-overlay-notation"></div>');
        var $overlay = $('<div class="mg-ad-overlay"></div>');
        var $topAd = $('<div id="ad-gallery-mpu">&nbsp;</div>');
        // ad server swith 2/3
        if (window.adServer === "google") {
          var $topAd = $('<div id="gpt-ad-album-mpu">&nbsp;</div>');
        }
        else {
          var $topAd = $('<div id="ad-gallery-mpu">&nbsp;</div>');
        }
        // /
        var $skip = $('<a class="mg-ad-overlay-skip" href="#"></a>');
        $layout.addClass('mg-ad-overlayed');
        $overlay.append($skip).append($notation).append($topAd).appendTo($overlayContainer);
        $skip.click(function(e){
          e.preventDefault();
          $overlay.remove();
          $layout.removeClass('mg-ad-overlayed');
        });
        v.overCounter = 0;
      }
      v.overCounter++;
      if (t1 || t2) {
        // ad server swith 3/3
        if (window.adServer === "google") {
          window.gallerySlotsInit();
          // googletag.cmd.push(function() { googletag.display('gpt-ad-album-lb'); });
          // googletag.cmd.push(function() { googletag.display('gpt-ad-album-mpu'); });
          googletag.pubads().getSlots().forEach(function(slot, ix){
            var id = slot.getSlotElementId();
            if ( id === 'gpt-ad-album-lb'){
              googletag.cmd.push(function() { googletag.pubads().refresh([slot]);} );
            }
            if ( id === 'gpt-ad-album-mpu'){
              googletag.cmd.push(function() { googletag.pubads().refresh([slot]);} );
            }
          })
        }
        else {
          oxAsyncGallery.asyncAdUnitsRender();
        }
        // /
      }
    },
    sharrre: function($target) {
      var url = window.location.href;
      url = url.replace(/[^\/]*$/, '1'); // always to point first image in gallery
      var imgBaseUrl = this.imgBaseUrl;
      $('#facebook_share', $target).sharrre({
        share: {
          facebook: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'fbico.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('facebook');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickFacebook");
        },
        url: url
      });
      $('#twitter_share', $target).sharrre({
        share: {
          twitter: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'twitt.png" alt="" /><span>غرّدي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('twitter');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickTwitter");
        },
        url: url
      });
      // $('#gplus_share', $target).sharrre({
      //   share: {
      //     googlePlus: true
      //   },
      //   template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'gplus.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
      //   enableHover: false,
      //   enableTracking: true,
      //   click: function(api, options) {
      //     api.openPopup('googlePlus');
      //     $(document).trigger("gallerySharrreClick");
      //     $(document).trigger("gallerySharrreClickGplus");
      //   },
      //   url: url,
      //   urlCurl: '/gpluscount/' + Base64.encode(url).replace('/', ','),
      // });
      $('#whatsapp_share', $target).sharrre({
        share: {
          whatsapp: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'logo-symbol-white.svg" alt="" /><span>شاركي</span></div></a>',
        enableHover: false,
        enableTracking: true,
        buttons: {
          whatsapp: {
            utmTracking: {
              site: window.backboneApp.build
            }
          }
        },
        click: function(api, options) {
          window.location.href = options.text;
          // $(document).trigger("gallerySharrreClick"); // commented by request
          $(document).trigger("gallerySharrreClickWhatsapp");
        }
      });
    },
    owlSlider: function($target) {
      var _this = this;
      $target.owlCarouselRtl({
        rtlJump: false,
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1111, 1],
        itemsTablet: [1109, 1],
        itemsTabletSmall: false,
        itemsMobile: [980, 1],
        singleItem: true,
        itemsScaleUp: false,
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        //Autoplay
        autoPlay: false,
        stopOnHover: false,
        // Navigation
        navigation: true,
        navigationText: ["", ""],
        rewindNav: true,
        scrollPerPage: false,
        //Pagination
        pagination: false,
        paginationNumbers: false,
        // Responsive
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",
        //Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        //Auto height
        autoHeight: true,
        //JSON
        jsonPath: false,
        jsonSuccess: false,
        //Mouse Events
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,
        //Transitions
        transitionStyle: false,
        // Other
        addClassActive: true,
        //Callbacks
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: function() {
          _this.afterInit();
        },
        beforeMove: function() {
          _this.beforeMove();
        },
        afterMove: function() {
          _this.afterMove();
        },
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
      });
    },
    afterInit: function() {
      var _this = this;
      var owl = this.$slider.data('owlCarousel');
      this.owlSliderGoTo = function(num) {
        owl.goToRtl(num - 1);
      };
      if (this.currentItem != owl.itemsAmount) {
        owl.jumpToRtl(this.currentItem - 1);
      } else {
        this.afterMove();
      }
      this.onResizeBinder();
    },
    onResizeBinder: function() {
      var timeout = false;
      var tthis = this;
      $(window).resize(function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          tthis.onResize();
        }, 300);
      });
      tthis.onResize();
      // disabling owl resize event
      var owl = this.$slider.data('owlCarousel');
      $(window).unbind('resize', owl.resizer);
    },
    onResize: function() {
      $('.owl-item', this.$slider).animate({'opacity': 0},0);
      var owl = this.$slider.data('owlCarousel');
      var delta = 0;
      if (this.$layout.hasClass('desktop')) {
        delta = $('.mg-header', this.$layout).outerHeight() + 20;
      }
      else {
        delta = $('.mg-header', this.$layout).outerHeight(true) + 20;
      }
      var h = $(window).height() - delta;
      $('.owl-item .item', this.$slider).css({'height': h + "px"});
//$('.owl-item .advert-wrap', this.$slider).css({'minHeight': h + "px"});
      $('.owl-item .mg-related', this.$slider).css({'minHeight': ((h / 2) + 100) + "px"});
      $('.owl-buttons', this.$slider).css('top', (h / 2) + 'px');
      owl.updateVars();
      $('.owl-item', this.$slider).animate({'opacity': 1},800);
    },
    beforeMove: function(jen, dva) {

    },
    afterMove: function() {
      var owl = this.$slider.data('owlCarousel');
      if (!this.afterMoveUnhashedOnce) {
        window.backboneApp.router.navigate('media-gallery/' + this.id + "/" + owl.currentPositionRtl, {trigger: false, replace: true});
      }
      else {
        this.afterMoveUnhashedOnce = false;
      }
      this.$captions.data('galleryCaption').goTo(owl.currentItem);
      this.$titles.data('galleryCaption').goTo(owl.currentItem);
      this.$numers.data('galleryCaption').goTo(owl.currentItem);
      this.banner();
    }
  });

  return MediaGallryView;

});

//});



requireYbba.define('router',[
  'backbone'
], function(
        Backbone
        ) {

  var Router = Backbone.Router.extend({
    routes: {
      //"media-gallery/:id": "mediaGalleryIdRedirect",
      "media-gallery/:id/:pos": "mediaGallery",
      "media-gallery-branded/:id/:pos": "mediaGalleryBranded",
      //"_bb_": "clearState",
      "*other": "defaultRoute"
    },
    initialize: function() {
      /*
       * Wiews without link
       */
      backboneApp.poll = {};
      $('.w__poll--left').each(function(i, o) {
        requireYbba.require(['poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '342',
              resizeHeight: '230'
            }
          });
          backboneApp.poll["asside-" + i] = {};
          backboneApp.poll["asside-" + i].view = poll;
        });
      });
      $('.w__poll--right').each(function(i, o) {
        requireYbba.require(['poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '468',
              resizeHeight: '340'
            }
          });
          backboneApp.poll["all-" + i] = {};
          backboneApp.poll["all-" + i].view = poll;
        });
      });
    },
    mediaGallery: function(id, currentItem) {
      currentItem = currentItem || 1;
      requireYbba.require(['mediaGallery'], function(mediaGalleryView) {
        if (backboneApp.mediaGallery) {
          backboneApp.mediaGallery.afterMoveUnhashedOnce = true;
          backboneApp.mediaGallery.owlSliderGoTo(currentItem);
          return;
        }
        var $elem = $('.media-gallery-' + id);
        backboneApp.mediaGallery = new mediaGalleryView({$elem: $elem, currentItem: currentItem, id: id});
        if (backboneApp.set.device === 'desktop') {
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.render();
        } else if (backboneApp.set.device === 'tablet') {
          backboneApp.mediaGallery.viewportRollBack = $('meta[name=viewport]').attr("content");      
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.renderTab();
        } else {
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.renderMob();
        }
      });
    },
    
    
    mediaGalleryBranded: function (id, currentItem) {
      currentItem = currentItem || 1;
      requireYbba.require(['mediaGalleryBranded'], function (mediaGalleryBrandedView) {  
        var $elem = $('.media-gallery-branded' + id);
        backboneApp.mediaGalleryBranded = new mediaGalleryBrandedView({$elem: $elem, currentItem: currentItem, id: id});
      });
    },    
    
    
    
    defaultRoute: function() {
      if (backboneApp.mediaGallery) {
        if(backboneApp.mediaGallery.viewportRollBack){
          $('meta[name=viewport]').attr("content", backboneApp.mediaGallery.viewportRollBack);
          location = window.location.protocol + '//' + window.location.host + location.pathname;
          return;
        }
        backboneApp.mediaGallery.undelegateEvents();
        backboneApp.mediaGallery.close();
        delete backboneApp.mediaGallery;
      }
      
      if (backboneApp.mediaGalleryBranded) {
        backboneApp.mediaGalleryBranded.close();
        delete backboneApp.mediaGalleryBranded;
      }
    }

  });

  return {
    initialize: function() {
      var router = new Router();
      Backbone.history.start();
      //Backbone.history.start({ pushState: true });
      return {router: router};
    }
  };




});


requireYbba.define('translations-default',[
], function (
        ) {


  return {
    'poll': {
      'selectAnswer': 'إختاري احتمالا',
      'poll': 'إستطلاع الرأي',
      'morePolls': 'المزيد من إستطلاعات الرأي',
      'submit': 'إرسال'
    },
    'mediaGallery': {
      'relatedArticles': 'ألبومات سوف تحبينها'
    }
  };
});


requireYbba.define('app',[
  'router',
  'translations-default'
], function(
        Router,
        translationsDefault
        ) {

  // @Override
  Backbone.History.prototype._updateHash = function(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, '');
      if (window.backboneApp.set.replaceStateSuported) {
        if (fragment) {
          history.replaceState('', document.title, href + '#' + fragment);
        }
        else {
          history.replaceState('', document.title, href);
        }
      }
      else {
        location.replace(href + '#' + fragment);
      }
    } else {
      // Some browsers require that `hash` contains a leading #.
      location.hash = '#' + fragment;
    }
  };

  // translation interface
  window.backboneApp.translations = window.backboneApp.translations || {};
  window.backboneApp.translations = $.extend(true, translationsDefault, window.backboneApp.translations);
  window.backboneApp.t = function (group, txt) {
    window.backboneApp.translations[group] = window.backboneApp.translations[group] || {};
    txt = window.backboneApp.translations[group][txt] || txt;
    return txt;
  };
  Backbone.View.prototype.t = window.backboneApp.t;

  ///////////////////////////////////////////////////////////////////////////////
  window.backboneApp = window.backboneApp || {};
  window.backboneApp.set = window.backboneApp.set || {};
  window.backboneApp.set.ua = (new UAParser()).getResult();
  window.backboneApp.set.$mediaGallerySelector = $('.article-gallery:not(.branded)');
  window.backboneApp.set.$mediaGalleryBrandedSelector = $('.article-gallery.branded');
  if ($('html').hasClass('ua-visitor-device-mobile')) {
    window.backboneApp.set.device = 'mobile';
  }
  else if ($('html').hasClass('ua-visitor-device-tablet')) {
    window.backboneApp.set.device = 'tablet';
  }
  else {
    window.backboneApp.set.device = 'desktop';
  }
  window.backboneApp.set.sharrrePhpProxyh = window.backboneApp.set.sharrrePhpProxyh || 'public/js/sharrre.php';
  window.backboneApp.set.imgBaseUrl = window.backboneApp.set.imgBaseUrl || "/0static/yasmina-scales/public/js/backbone/";
  window.backboneApp.set.gallery = {};

  window.backboneApp.set.gallery.adTopTrigger = window.backboneApp.set.gallery.adTopTrigger || 3;
  window.backboneApp.set.gallery.adOverTrigger = window.backboneApp.set.gallery.adOverTrigger || 3;

  //window.backboneApp.set.gallery.adMobileInsertOnCount = window.backboneApp.set.gallery.adMobileInsertOnCount || 3;
  //window.backboneApp.set.gallery.adMobileActionCount = window.backboneApp.set.gallery.adMobileActionCount || 3;
  window.backboneApp.set.gallery.referal = true;
  ///////////////////////////////////////////////////////////////////////////////


  window.dbge = false;
  window.dbg = function(msg) {
    if (window.dbge) {
      console.log(msg);
    }
  };


  // Media Gallery enumeration
  var galleryIndex = 0;
  var mediaGalleryEnumeration = function($galleries){
    $galleries.each(function(ix, gallery) {
      var $gallery = $(gallery);
      var galleryId = $gallery.attr('data-lid') || galleryIndex;
      $gallery.addClass("media-gallery");
      $gallery.addClass("media-gallery-" + galleryId);
      var itemIndex = 1;
      $gallery.find('.mg-start').each(function(starterIndex, starter) {
        starterIndex = starterIndex + 1;
        $(starter).attr('data-href', "#media-gallery/" + galleryId + "/" + itemIndex);
        itemIndex++;
        if (
                (window.backboneApp.set.device === 'mobile' || window.backboneApp.set.device === 'tablet') &&
                ((starterIndex) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0)
                )
        {
          itemIndex++;
        }
      });
      galleryIndex++;
    });
  }

  mediaGalleryEnumeration(window.backboneApp.set.$mediaGallerySelector);

  window.backboneApp.mediaGalleryNew = function(){
    var $galleries = $('.article-gallery:not(.branded):not(.media-gallery)')
    mediaGalleryEnumeration($galleries);
    var $galleriesB = $('.article-gallery.branded:not(.media-gallery-branded)')
    mediaGalleryBrandedEnumeration($galleriesB);
  }


  // Media Gallery Branded enumeration
  var galleryBrandedIndex = 0;
  var mediaGalleryBrandedEnumeration = function($galleries){
    $galleries.each(function(ix, gallery) {
      var $gallery = $(gallery);
      $gallery.addClass("media-gallery-branded");
      $gallery.addClass("media-gallery-branded" + galleryBrandedIndex);
      var itemIndex = 1;
      $gallery.find('.mg-start').each(function(starterIndex, starter) {
        starterIndex = starterIndex + 1;
        $(starter).attr('data-href', "#media-gallery-branded/" + galleryBrandedIndex + "/" + itemIndex);
        itemIndex++;
      });
      galleryBrandedIndex++;
    });
  };
  mediaGalleryBrandedEnumeration(window.backboneApp.set.$mediaGalleryBrandedSelector); 


  var ua = window.backboneApp.set.ua;
  window.backboneApp.set.replaceStateSuported = !(
          (ua.browser.name === "IE" && (ua.browser.major <= 9)) ||
          (ua.browser.name === "Android Browser" && (ua.browser.major < 4.3))
  );

  return function() {
    window.backboneApp.router = Router.initialize().router;
    $(document).on('click', '.mg-start',function(e) {
      e.preventDefault();
      var $tthis = $(this);
      window.backboneApp.set.gallery.referal = false;
      window.backboneApp.router.navigate($tthis.data('href'), {trigger: true, replace: false});
      //window.location.hash = $tthis.data('href');
    });

  };

});



window.backboneApp = window.backboneApp || {};
window.backboneApp.set = {};
window.backboneApp.set.imgBaseUrl = "/assets/images/backboneApp/";
window.backboneApp.build = "";


(function() {

  // Alredy Included scripts
  requireYbba.define("jquery", [], function() {
    return jQuery;
  });
  requireYbba.define("icheck", [], function() {
    return {};
    //return jQuery.fn.iCheck;
  }); 
  requireYbba.define("sharrre", [], function() {
    return jQuery.fn.sharrre;
  });
  requireYbba.define("slick", [], function () {
    return jQuery.fn.slick;
  });
  requireYbba.define("iScroll", [], function () {
    return {};
  });
  requireYbba.define("poll", [], function () {
    return {};
  });
  requireYbba.define("mediaGalleryBranded", [], function () {
    return {};
  });
  
  
  

  requireYbba.require.config({
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      underscore: '../bower_components/underscore/underscore-min',
      backbone: '../bower_components/backbone/backbone',
      text: '../bower_components/requirejs-text/text',
      fullScreen: '../bower_components/fullmodal/full-modal',
      caption: '../bower_components/gallery-captions/gallery-caption',
      //slick: '../bower_components/slick.js/slick/slick',
      //iscroll: '../bower_components/iscroll/build/iscroll',
      //maxDimensionPercentage: '../bower_components/max-dimension-percentage/max-dimension-percentage' // unused any more
      //sharrre: '../bower_components/sharrre/jquery.sharrre',
      //icheck: '../bower_components/iCheck/icheck',
      owl: '../bower_components/owlcarousel/owl-carousel/owl.carousel.min',
      owlRtl: '../bower_components/owlcarouselrtl/owl.carousel.rtl',
            
      //poll: 'views/poll',
      mediaGallery: 'views/media-gallery',
      //mediaGalleryBranded: 'views/media-gallery-branded',
    }
  });

  requireYbba.require([
    'app'
  ], function(
          App
          ) {
    window.jsSHA = jsSHA;
    new App();
  });

})();


requireYbba.define("main-atyabtabkha", function(){});

