document.addEventListener("submit",e=>{
    e.preventDefault()
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let suma = Number(num1) + Number(num2)
    
    document.querySelector("#resultado").innerHTML = suma
})