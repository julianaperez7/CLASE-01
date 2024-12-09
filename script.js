function realizarOperacion(operacion){
    let num1 = parseFloat(document.getElementById(num1).value);
    let num2 = parseFloat(document.getElementById(num2).value);

    // Validar entrada de números
    id (isNaN(num1))|| isNaN(num2){
        document. getElementById("result").innerText = "Por favor,ingrese números validos.";
      return;
    }

    let resultado;
    if (operacion==="suma"){
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
        }else if (operacion === "division") {
           if(num2 === 0){
            resultado = "Error: No se puede dividir entre cero.";
           } else {
            resultado = num1 / num2 ;
           }
        } else{
            resultado = "Error: Operación no válida.";
        }
        // Mostrar resultado
        document.getElementById("result").innerText = "resultado: " + resultado;
}