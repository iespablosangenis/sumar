document.addEventListener("submit",e=>{
    e.preventDefault()
    let numero1 = document.querySelector("#num1").value
    let numero2 = document.querySelector("#num2").value
    let suma = Number(numero1) + Number(numero2)

    document.querySelector("#resultado").innerHTML = suma
})