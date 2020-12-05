var botonCalcular = document.querySelector("#calcular")
var numero1 = document.querySelector("#num1")
var numero2 = document.querySelector("#num2")
var operador = document.querySelector("#operador")

var campoOp = document.querySelector("#campo")

botonCalcular.addEventListener("click",() => {
    let resultado
    let n1 = parseFloat(numero1.value)
    let n2 = parseFloat(numero2.value)
    let op = operador.value 
    switch(op){
        case "+":
            resultado = n1 + n2
        break
        case "-":
            resultado = n1 - n2
        break
        case "*":
            resultado = n1 * n2
        break
        case "/":
            resultado = n1 / n2
        break
    }
    
    if(!isNaN(n1) && !isNaN(n2) ){
        campoOp.innerHTML = " = " + resultado + ["👾","🤖","🧠","💩","👽"][obtenerNumeroAleatorio(0,5)]
    }else{
        campoOp.innerHTML = "JUAN🔥🌈🔔✨"
    }
})