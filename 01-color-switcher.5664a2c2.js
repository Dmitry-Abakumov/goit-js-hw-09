!function(){var t=null;var e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};e.startBtn.addEventListener("click",(function(n){n.currentTarget.setAttribute("disabled",""),e.stopBtn.removeAttribute("disabled"),t=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)})),e.stopBtn.addEventListener("click",(function(n){n.currentTarget.setAttribute("disabled",""),e.startBtn.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.5664a2c2.js.map