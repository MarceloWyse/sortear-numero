window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    if(chute.toLowerCase() === "game over"){
        recognition.addEventListener('end', () => 
            document.body.innerHTML = `<h3>Game Over</h3>
            <button id="btnJogar" class="btn">Jogar Novamente</button>
            `
        )
    }
    exibirChute(chute);
    verificaChute(chute);
}

function exibirChute(e)
{   
    elementoChute.innerHTML =
    `<div>Voce disse:</div>
    <span class="box">${e}</span>`
}

recognition.addEventListener('end', () => recognition.start());