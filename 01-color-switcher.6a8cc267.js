const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=null;e.addEventListener("click",(()=>{a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.6a8cc267.js.map