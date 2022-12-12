function verificaChute(e) {
    const numero = +e;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }
    
    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>O numero tem que ser maior que ${maiorValor} e menor que ${menorValor}</div>`;
        return;
    }

    if(numero === sortear) {
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O número secreto era ${sortear}</h3>
        ` 
    } else if (numero > sortear) {
        elementoChute.innerHTML += 
        `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML +=
        `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}
