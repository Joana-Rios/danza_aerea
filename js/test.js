function apareceScroll(){
    var html = document.getElementsByTagName ("html")[0];
    // console.log(html)
    var elementoAparece = document.getElementsByClassName ("aparece");
    console.log(elementoAparece)
    document.addEventListener("wheel" , function(){
        var altura = html.scrollTop;
        console.log(altura)
        for (i=0; i < elementoAparece.length; i++){
            var alturaImagen = elementoAparece[i].offsetTop;
            if (altura > alturaImagen - 400 && altura < alturaImagen + 60){ //-400+460=60
                elementoAparece[i].style.opacity = 1;
            } else {
                elementoAparece[i].style.opacity = 0;
            }
        }
    })
}

apareceScroll();