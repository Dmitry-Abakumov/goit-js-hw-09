!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("jvJkn");r("jE3JV");var a={},l=null,u={form:document.querySelector(".form")};var f=function(n,o){(function(e,n){var o=Math.random()>.3;return new Promise((function(t,r){o?t({position:e,delay:n}):r({position:e,delay:n})}),e,n)})(n,o).then((function(n){var o=n.position,t=n.delay;e(i).success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).error("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}))};u.form.addEventListener("submit",(function(e){var n=a.delay,o=a.step,t=a.amount;if(e.preventDefault(),!(l||t<0))for(var r=n,i=1;i<t+1;i+=1)l=setTimeout(f,i>1?r+=o:n,i,r),l=null})),u.form.addEventListener("focusout",(function(e){a[e.target.name]=e.target.valueAsNumber,console.log(a)}))}();
//# sourceMappingURL=03-promises.026e4c14.js.map