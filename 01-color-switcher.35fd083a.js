const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){false;n=setInterval((()=>{console.log(o()),document.body.style.backgroundColor=o()}),1e3)})),e.addEventListener("click",(function(){clearInterval(n)}));let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.35fd083a.js.map