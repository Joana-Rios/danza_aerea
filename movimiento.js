function infiniteMovi(value) {
    let index = parseInt(value)
    let index2 = 0
    let index3 = 0
    if (index == 1) {
        index2 = index + 1
        index3 = index + 2
        document.getElementById("slides").style.marginLeft = "0%";
    } else if (index == 2) {
        index2 = index + 1
        index3 = index - 1
        document.getElementById("slides").style.marginLeft = "-100%";
    } else {
        index2 = index - 2
        index3 = index - 1
        document.getElementById("slides").style.marginLeft = "-200%";
    }
    // console.log(index)
    // console.log(index2)
    // console.log(index3)
    // let valueBotton = document.getElementById(value);
    document.getElementById(value).style.background = "green";
    document.getElementById(index2.toString()).style.background = "none";
    document.getElementById(index3.toString()).style.background = "none";
    // console.log(valueBotton);
}
window.onload = function() {
    let counter = 0;
    document.getElementById("1").style.background = "green";
    setInterval(function () { 
                                counter++
                                let valueBotton = counter % 3 + 1
                                infiniteMovi(valueBotton.toString())
                            }, 3000)
}