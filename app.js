let speak = new SpeechSynthesisUtterance();

const btn = document.getElementById("convert")

 let voices = []
 let voiceSelect = document.querySelector("select");

 window.speechSynthesis.onvoiceschanged = ()=>{
voices = window.speechSynthesis.getVoices();
speak.voice = voices[0]


voices.forEach((voice,i)=>(voiceSelect.options[i]= new Option(voice.name, i)))
 }

 voiceSelect.addEventListener("change",()=>{
    speak.voice= voices[voiceSelect.value]
 })
btn.addEventListener("click", ()=>{
    speak.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speak)
})