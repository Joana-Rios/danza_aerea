//the inicial order
let orden = {product:"shirt", design: "vacio" , size: "vacio", color:"white"};
console.log(orden.product)

//seccions
const product = document.getElementById('product');
const design = document.getElementById('design');
const color = document.getElementById('color');
const size = document.getElementById('size')
const pieces = document.getElementById('pieces');
console.log(product)
//Products
const shirt = document.querySelector('#shirt')
const jacket = document.querySelector('#jacket')
const handbag = document.querySelector('#handbag')
console.log(shirt)
//Design
const design1 = document.querySelector('#design1')
const design2 = document.querySelector('#design2')
const design3 = document.querySelector('#design3')
const design4 = document.querySelector('#design4')
const design5 = document.querySelector('#design5')
const design6 = document.querySelector('#design6')
console.log(design1)
//Size
const slim = document.querySelector('#slim')
const medium = document.querySelector('#medium')
const large = document.querySelector('#large')
console.log(slim)
//Color
const white = document.querySelector('#white')
const black = document.querySelector('#black')
const grey = document.querySelector('#grey')
console.log(white)
//Events product
shirt.addEventListener("click",choiceProduct)
jacket.addEventListener("click",choiceProduct)
handbag.addEventListener("click",choiceProduct)

//Events product
design1.addEventListener('click',choiceDesing)
design2.addEventListener('click',choiceDesing)
design3.addEventListener('click',choiceDesing)
design4.addEventListener('click',choiceDesing)
design5.addEventListener('click',choiceDesing)
design6.addEventListener('click',choiceDesing)

//Events Size
slim.addEventListener('click',choiceSize)
medium.addEventListener('click',choiceSize)
large.addEventListener('click',choiceSize)

//Events Color
white.addEventListener('click',choiceColor)
black.addEventListener('click',choiceColor)
grey.addEventListener('click',choiceColor)

// let orden = { product: null, design: null , size: null, color:null}

// let orden = {product:"shirt", design: "design1" , size: "slim", color:"white"}

function choiceProduct() {
    orden.product = this.id
    let x
    for (x in orden) {console.log(orden[x])}
    document.getElementById("comprafinal").innerHTML= orden.product + " " + orden.design + " " + orden.size+ " "  + orden.color
}

function choiceDesing() {
    orden.design = this.id
    let x
    for (x in orden) {console.log(orden[x])}
    document.getElementById("comprafinal").innerHTML= orden.product + " " + orden.design + " " + orden.size+ " "  + orden.color
}

function choiceSize() {
    orden.size = this.id
    let x
    for (x in orden) {console.log(orden[x])}
    document.getElementById("comprafinal").innerHTML= orden.product + " " + orden.design + " " + orden.size+ " "  + orden.color
}

function choiceColor() {
    orden.color = this.id
    let x
    for (x in orden) {console.log(orden[x])}
    document.getElementById("comprafinal").innerHTML= orden.product + " " + orden.design + " " + orden.size+ " "  + orden.color
}
