console.log("linqueado")
//Funcion para toogle para mostrar masInformacion en la seccion Restaurantes (cartas)
let carta1 = document.querySelectorAll(".info")[0]

carta1.addEventListener("click", () =>{

       mostrarCarta1 = document.querySelector(".primero1").classList.toggle("primero")  

} )


let carta2 = document.querySelectorAll(".info")[1]

carta2.addEventListener("click", () =>{

    mostrarCarta2 = document.querySelector(".segundo").classList.toggle("medio")  

} )


let carta3 = document.querySelectorAll(".info")[2]

carta3.addEventListener("click", () =>{

    mostrarCarta3 = document.querySelector(".tercero").classList.toggle("ultimo");  

  


} )