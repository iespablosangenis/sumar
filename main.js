const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = Number(num1) + Number(num2);
    const mostrar= document.getElementById("resultado");
    mostrar.innerHTML= resultado;})

