!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,o){var n,t,r;(n=e+1,t=o,r=Math.random()>.3,new Promise((function(e,o){setTimeout((function(){r?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}i.Notify.init({timeout:3e3}),document.querySelector(".form").addEventListener("submit",(function(e){console.clear(),e.preventDefault();var o=Number(e.target.elements[0].value),n=Number(e.target.elements[1].value),t=Number(e.target.elements[2].value),i=0;for(;i<t;)r(i,o+n*i),i++}))}();
//# sourceMappingURL=03-promises.9044442b.js.map