let recogation = new window.webkitSpeechRecognition()
let message = new window.SpeechSynthesisUtterance()


recogation.start()
recogation.addEventListener('result',(e)=>{
    console.log(e.results[0][0].transcript)
    message.text = e.results[0][0].transcript
   message.voice  =speechSynthesis.getVoices()[0]
    speechSynthesis.speak(message)
})