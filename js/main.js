
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", sumar)

function sumar(e){
    event.preventDefault()
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = Number(num1) + Number (num2);
    document.getElementById("resultado").innerHTML = resultado;
}
