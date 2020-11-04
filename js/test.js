const left = document.querySelector(".iconLeft")
console.log(left)
const right = document.querySelector(".iconRight")
console.log(right)
left.addEventListener('click',scrollLeft)
right.addEventListener('click',scrollRight)
const slidesTotal = 3 //[0,1,2,3]
let slideNumber = 0
function scrollLeft(){
    if (slideNumber==0) {
        slideNumber = 0
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("list").style.marginLeft = slidePercent
        console.log(slidePercent)
    }
    else {
        slideNumber --
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("list").style.marginLeft =slidePercent  
        console.log(slidePercent)
    }
    console.log(slideNumber)
}
function scrollRight(){
    if (slideNumber==slidesTotal) {
        slideNumber = 3 //[0,1,2,3]
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("list").style.marginLeft = slidePercent
        console.log(slidePercent)
    } else {
        slideNumber ++
        let slidePercent = -slideNumber*100 + '%'
        document.getElementById("list").style.marginLeft = slidePercent   
        console.log(slidePercent)
    }
    console.log(slideNumber)
}

function apareceScroll(){
    var html = document.getElementsByTagName ("html")[0];
    var elementoAparece = document.getElementsByClassName ("aparece");

    document.addEventListener("wheel" , function(){
        var topVent = html.scrollTop;
        for (i=0; i < elementoAparece.length; i++){
            var topelemAparece = elememtoAparece[i].offserTop;
            if (topVent > topelemAparece - 400){
                elementoAparece[i].style.opacity =1;
            }
        }
    })
}

apareceScroll();