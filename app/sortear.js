const menorValor = 1;
const maiorValor = 100;
const sortear = gerarNumeros();
console.log(sortear);

function gerarNumeros() {
    return parseInt(Math.random() * maiorValor) +1;
}

const elementoMenor = document.getElementById("menor-valor");
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById("maior-valor");
elementoMaior.innerHTML = maiorValor; 


