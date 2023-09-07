console.log('Estoy cargado...');
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", sumar)

function sumar(e){
    event.preventDefault()
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = Number(num1) + Number(num2);
    document.getElementById("resultado").innerHTML = resultado;
}