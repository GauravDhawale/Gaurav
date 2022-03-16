var Before=document.getElementById("before");
var After=document.getElementById("after");
var Close=document.getElementById("close");

Before.addEventListener('click',function(){
    After.style.transform = "translateX(0%)";
    Before.style.transform = "translateX(-100%)";
});
Close.addEventListener('click',function(){
    After.style.transform = "translateX(-100%)";
    Before.style.transform = "translateX(0%)";
});