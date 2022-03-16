var ZoomedImage = document.getElementsByClassName("Zoomed")[0].getElementsByTagName("img");
var ZoomedContainer = document.getElementById("Zoomed");
var Hide = document.getElementById("Zoomedclose");
var Images = document.getElementsByClassName("images")[0].getElementsByTagName("img");


for (let index = 0; index < Images.length; index++) {
    const img = Images[index];
    img.addEventListener('click',function(){
        var src=this.getAttribute("src");
        ZoomedImage[0].setAttribute("src",src);
        ZoomedContainer.classList.toggle("Show");
    });
}
Hide.addEventListener('click',function(){
    ZoomedContainer.classList.toggle("Show");
});