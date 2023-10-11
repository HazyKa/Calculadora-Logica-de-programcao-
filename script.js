

let numHTML = document.getElementById ("num");

let numero = parseFloat(prompt("Digite um numero"));

numHTML.innerHTML = numero;

function escrever(calculoPronto) {
    numHTML.innerHTML = calculoPronto;

    numero = calculoPronto;
}

function iniciarCalculo(simbolo) {
    let n1 = numero;
    let n2 = parseFloat(prompt("Digite outro numero"));

    if(isNaN(n2)){
        alert("digite um valor valido!")
        return;
    }

    let calculoPronto = calcular(simbolo, n1, n2);

    escrever(calculoPronto);
}

function calcular(simbolo, n1, n2) {

    let resultado;

    if(simbolo == '+') {
        resultado = n1 += n2;
    } else if (simbolo == '-') {
        resultado = n1 -= n2;
    } else if (simbolo == 'x') {
        resultado = n1 *= n2;
    } else if (simbolo == '/') {
        resultado = n1 /= n2;
    }

    return (resultado);
}


// verificar se e um numero;
// se nao for, erro (digite um numero);