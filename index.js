const painel = document.querySelector("#resultado");

function soma() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    if (num1 > 0 && num2 > 0) {
        painel.innerHTML = num1 + num2
    } else {
        alert("Insira numeros positivos!");
    }
}
function subtr() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    if (num1 > 0 && num2 > 0) {
        painel.innerHTML = num1 - num2
    } else {
        alert("Insira numeros positivos!");
    }
}
function multip() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    if (num1 > 0 && num2 > 0) {
      painel.innerHTML = num1 * num2
    } else {
         alert("Insira numeros positivos!");
    }
}
function divis() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);

    if (num1 > 0 && num2 > 0) {
        painel.innerHTML = num1 / num2
    } else {
        alert("Insira numeros positivos!");
    }
}