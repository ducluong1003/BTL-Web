const imgposition = document.querySelectorAll(".aspect-ratio-169 img")
const imgcontainer = document.querySelector('.aspect-ratio-169')
let index = 0;
let imgNumber = imgposition.length
imgposition.forEach(function(image,index){
    image.style.left = index*100 + "%"
})
function imgSlide () {
    index++;
    if( index >= imgNumber) {
        index = 0 }
        imgcontainer.style.left = "-" + index*100 + "%"
    
}
setInterval (imgSlide,5000)