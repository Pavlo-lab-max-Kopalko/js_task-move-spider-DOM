var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(i){if(i.target.closest(".wall")){var n=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=t.offsetWidth,o=e.clientTop,a=i.clientX-c/2-o-n.left,d=i.clientY-c/2-o-n.top;a=Math.max(0,Math.min(a,e.clientWidth-l.width)),d=Math.max(0,Math.min(d,e.clientHeight-l.height)),t.style.left=a+"px",t.style.top=d+"px"}});
//# sourceMappingURL=index.90ef9603.js.map
