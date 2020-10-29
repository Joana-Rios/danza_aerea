//efectos scroll//
let containerMenu = document.querySelector(".menu");
let prevScrollpos =window.pageYOffset;
let  goTop = document.querySelector(".go-top");
window.onscroll = () => {                                                                                                                                                                                                                                            
    let currenscrollpos = window.pageYOffset;

    //mostrs y ocultar menu//
    if(prevScrollpos > currenscrollpos){
        containerMenu.style.top ="0";
        containerMenu.style.transition ="0.5s";
    }
    prevScrollpos = currenscrollpos; 
    

    // mostrar y ocultar scroll estilos//

    let arriba =window.pageYOffset;
    if(arriba <=600){
        containerMenu.style.borderBottom ="none";

        goTop.style.right ="-100%";
    }else{
        containerMenu.style.borderBottom ="3px solid #ff2e63";

        goTop.style.right ="0";
        goTop.style.transition ="0.5s"
    }
}
goTop.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener("click", () =>{
    document.body.scrollTop =600;
    document.documentElement.scrollTop = 600;
});