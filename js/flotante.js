function apareceScroll(){
    const html = document.getElementsByTagName ("html")[0];
    // console.log(html)
    const elementoAparece = document.getElementsByClassName ("aparece");
    const pixel = 200
    let alturasImg = [];
    for (let i=0; i < elementoAparece.length; i++){
        let alturaImagen = elementoAparece[i].offsetTop;
        alturasImg.push(alturaImagen)
    }
    console.log(alturasImg)
    // console.log(elementoAparece)
    document.addEventListener("wheel" , function(){
        console.log(alturasImg[0])
        let altura = html.scrollTop;
        console.log(altura)
        if (altura < alturasImg[0] - pixel){
            elementoAparece[0].style.opacity = 1;
            elementoAparece[1].style.opacity = 0;
            elementoAparece[2].style.opacity = 0;
            elementoAparece[3].style.opacity = 0;
            console.log(alturasImg[0])
        } else if (altura >= alturasImg[1] - pixel && altura < alturasImg[2] - pixel) {
            elementoAparece[1].style.opacity = 1;
            elementoAparece[0].style.opacity = 0;
            elementoAparece[2].style.opacity = 0;
            elementoAparece[3].style.opacity = 0;
        } else if (altura >= alturasImg[2] - pixel && altura < alturasImg[3] - pixel) {
            elementoAparece[2].style.opacity = 1;
            elementoAparece[0].style.opacity = 0;
            elementoAparece[1].style.opacity = 0;
            elementoAparece[3].style.opacity = 0;
        } else if (altura >= alturasImg[3] - pixel && altura < alturasImg[3] + pixel) {
            elementoAparece[3].style.opacity = 1;
            elementoAparece[0].style.opacity = 0;
            elementoAparece[1].style.opacity = 0;
            elementoAparece[2].style.opacity = 0;
        }
    })
}
apareceScroll();