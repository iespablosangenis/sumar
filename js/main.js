const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", sumar)

function sumar(event){
    event.preventDefault()
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resutaldo = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = resutaldo;
}