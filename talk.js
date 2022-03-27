const btn = document.querySelector('.talk');
const out = document.querySelector('.out');


//
const greet = ['General Kenobi'];
//


const SpeechRecog = window.SpeechRecognition    ||  window.webkitSpeechRecognition;
const recog = new SpeechRecog();

recog.onstart = function()  {
    console.log("U Can Talk Now");
}

recog.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    out.textContent = transcript;
    readOutLoud(transcript);
}


btn.addEventListener('click', () => {
    recog.start();
})


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance;

    if(message.includes('Hello there')){
        const finalText = greet[0];
        speech.text = finalText;
    }
	else{
    speech.text = 'I dont understand';}
    speech.volume = 0.8;

    window.speechSynthesis.speak(speech);
}