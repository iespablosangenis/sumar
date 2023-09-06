const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", sumando)

let resultado = document.getElementById("resultado")

function sumando(e) {
    event.preventDefault()
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    sumatoria = Number(numero1) + Number(numero2); 
    resultado.innerText = sumatoria;    
}

