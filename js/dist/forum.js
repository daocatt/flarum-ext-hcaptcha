/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},p=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new N(n||[]);return c(a,"_invoke",{value:P(t,r,i)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var y="suspendedStart",v="suspendedYield",m="executing",g="completed",b={};function x(){}function w(){}function L(){}var _={};l(_,p,(function(){return this}));var S=Object.getPrototypeOf,j=S&&S(S(T([])));j&&j!==a&&i.call(j,p)&&(_=j);var E=L.prototype=x.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,u){var p=d(t[o],t,a);if("throw"!==p.type){var s=p.arg,h=s.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(p.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function P(t,r,n){var o=y;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var p=d(t,r,n);if("normal"===p.type){if(o=n.done?g:v,p.arg===b)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=g,n.method="throw",n.arg=p.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[p];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=L,c(E,"constructor",{value:L,configurable:!0}),c(L,"constructor",{value:w,configurable:!0}),w.displayName=l(L,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l(t,h,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},O(k.prototype),l(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(E),l(E,h,"Generator"),l(E,p,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),p=i.call(a,"finallyLoc");if(u&&p){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),z(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["components/DiscussionComposer"];var e=r.n(t);const o=flarum.core.compat["components/ReplyComposer"];var a=r.n(o);const i=flarum.core.compat["common/extend"],c=flarum.core.compat["forum/components/SignUpModal"];var u=r.n(c);function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var h=r(183),l=r.n(h);const f=flarum.core.compat["forum/app"];var d=r.n(f);const y=flarum.core.compat["common/Component"];var v=r.n(y);const g=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=e,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}();var b=function(){var t,e=(t=l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d().hcaptchaLoaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,g.js("https://js.hcaptcha.com/1/api.js?hl="+d().translator.formatter.locale+"&render=explicit");case 4:d().hcaptchaLoaded=!0;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),x=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,p(e,r);var o=n.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e)},o.view=function(){return m("div",{className:"Form-group"},m("div",{className:"h-captcha"}))},o.oncreate=function(e){var r=this;if(t.prototype.oncreate.call(this,e),b().then((function(){var t=setInterval((function(){window.hcaptcha&&(clearInterval(t),r.attrs.state.render(e.dom.querySelector(".h-captcha")))}),250)})),"invisible"===d().data["gtdxyz-hcaptcha.type"]){var n=e.dom.querySelector("iframe");n&&(n.tabIndex=-1)}},n}(v()),w=function(){function t(t,e){void 0===e&&(e=null),this.callback=t,this.errorCallback=e||function(t){app.alerts.show(t)},this.widgetId=null}var e=t.prototype;return e.render=function(t){var e=this;this.widgetId=hcaptcha.render(t,{sitekey:app.data["gtdxyz-hcaptcha.credentials.site"],theme:app.forum.attribute("hCaptchaDarkMode")?"dark":"light",type:app.data["gtdxyz-hcaptcha.type"],size:"invisible"===app.data["gtdxyz-hcaptcha.type"]?"invisible":"normal",callback:this.callback,"error-callback":function(){var t={type:"error",content:app.translator.trans("gtdxyz-hcaptcha.forum.error")};e.errorCallback(t)}})},e.getResponse=function(){return hcaptcha.getResponse(this.widgetId)},e.execute=function(){return hcaptcha.execute(this.widgetId)},e.reset=function(){return hcaptcha.reset(this.widgetId)},t}();function L(t){var e="invisible"===app.data["gtdxyz-hcaptcha.type"];(0,i.extend)(t.prototype,"oninit",(function(){var t=this;app.forum.attribute("postWithoutHCaptcha")||(this.hcaptcha=new w((function(){e&&t.onsubmit("hcaptchaSecondStep")})))})),(0,i.extend)(t.prototype,"data",(function(t){app.forum.attribute("postWithoutHCaptcha")||(t["h-captcha-response"]=this.hcaptcha.getResponse())})),(0,i.extend)(t.prototype,"headerItems",(function(t){app.forum.attribute("postWithoutHCaptcha")||t.add("hcaptcha",x.component({state:this.hcaptcha}),-5)})),(0,i.extend)(t.prototype,"loaded",(function(){app.forum.attribute("postWithoutHCaptcha")||this.hcaptcha.reset()})),(0,i.override)(t.prototype,"onsubmit",(function(t,r){return!app.forum.attribute("postWithoutHCaptcha")&&e&&"hcaptchaSecondStep"!==r?(this.loading=!0,void this.hcaptcha.execute()):t()}))}app.initializers.add("gtdxyz/flarum-ext-hcaptcha",(function(){var t;app.hcaptchaLoaded=!1,t="invisible"===app.data["gtdxyz-hcaptcha.type"],(0,i.extend)(u().prototype,"oninit",(function(){var e=this;this.hcaptcha=new w((function(){if(t){var r=new Event("submit");r.isHcaptchaSecondStep=!0,e.onsubmit(r)}}),(function(t){e.loaded(),e.alertAttrs=t}))})),(0,i.extend)(u().prototype,"submitData",(function(t){t["h-captcha-response"]=this.hcaptcha.getResponse()})),(0,i.extend)(u().prototype,"fields",(function(t){t.add("hcaptcha",x.component({state:this.hcaptcha}),-5)})),(0,i.extend)(u().prototype,"onerror",(function(){this.hcaptcha.reset()})),(0,i.override)(u().prototype,"onsubmit",(function(e,r){return t&&!r.isHcaptchaSecondStep?(r.preventDefault(),this.loading=!0,void this.hcaptcha.execute()):e(r)})),L(e()),L(a())}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map