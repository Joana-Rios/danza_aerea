const left = document.querySelector(".iconLeft")
console.log(left)
const right = document.querySelector(".iconRight")
console.log(right)
left.addEventListener('click',scrollLeft)
right.addEventListener('click',scrollRight)
const slidesTotal = 2 //[0,1,2,3]
let slideNumber = 0
function scrollLeft(){
    if (slideNumber==0) {
        slideNumber = 0
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("carrusel__container").style.marginLeft = slidePercent
        console.log(slidePercent)
    }
    else {
        slideNumber --
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("carrusel__container").style.marginLeft =slidePercent  
        console.log(slidePercent)
    }
    console.log(slideNumber)
}
function scrollRight(){
    if (slideNumber==slidesTotal) {
        slideNumber = slidesTotal //[0,1,2,3]
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("carrusel__container").style.marginLeft = slidePercent
        console.log(slidePercent)
    } else {
        slideNumber ++
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("carrusel__container").style.marginLeft = slidePercent   
        console.log(slidePercent)
    }
    console.log(slideNumber)
}