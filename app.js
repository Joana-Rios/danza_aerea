let btnMenu = document.querySelector('.btn-menu');
console.log(btnMenu);
let menu = document.querySelector(".list-container"); //Barra de nave
console.log(menu);
let containerMenu = document.querySelector(".menub"); //contenedor del
console.log(containerMenu);
let activador = true;

// Mnenu d enavegacion//

btnMenu.addEventListener("click", () =>{
    document.querySelector(".btn-menu i").classList.toggle ("fa-times");
    console.log("Funciona");
    if(activador){
        let lista = document.querySelectorAll(".lists li") 
        console.log(lista);
        lista.forEach((element) => {
            element.style.display="block"});
        menu.style.left ="0";
        menu.style.transition ="0.5s";
        activador =false;
    } else {
        activador=false;
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true;
    }
});
   
// intecalar clases active//

let enlaces =document.querySelectorAll(".lists li a ");
enlaces.forEach((element)=>{
    element.addEventListener("click", (event) =>{
        
        enlaces.forEach((link) =>{
            link.classList.remove ("activi");
        });
        Event.target.classList.add("activo");
    });
});

//efectos scroll//

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