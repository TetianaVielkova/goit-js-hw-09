const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(function(){n=setInterval((()=>{console.log(o()),document.body.style.backgroundColor=o()}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),t.disabled=!0,e.disabled=!1}));let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.db574947.js.map
