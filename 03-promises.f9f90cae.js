function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const i={form:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')};i.form.addEventListener("input",(function(e){const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;return d.delay=t.value,d.step=n.value,d.amount=o.value,d})),i.form.addEventListener("submit",(function(e){e.preventDefault();for(let e=0;e<d.amount;e+=1){const t=Number(d.delay)+Number(d.step)*e;s(e+1,t).then(l).catch(a)}}));const l=({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)},a=({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)},d={};function s(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}
//# sourceMappingURL=03-promises.f9f90cae.js.map
