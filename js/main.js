document.addEventListener("submit",e=>{
    e.preventDefault();
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const resultado = Number(num1) + Number(num2)
    
    document.querySelector("#resultado").innerHTML = resultado
})