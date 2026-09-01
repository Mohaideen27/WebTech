let inp = document.querySelector("input");
let btn = document.querySelector("button");
let mySelect = document.querySelector("select");

let allVoice = null;
speechSynthesis.addEventListener("voiceschanged", () => {
  allVoice = speechSynthesis.getVoices();
  console.log(allVoice);
  allVoice.forEach((e) => {
    let myOption = document.createElement("option");
    myOption.innerHTML = e.name;
    
  });
});
btn.addEventListener("click", () => {
  let myAudio = new SpeechSynthesisUtterance(inp.value);
  let allVoice = speechSynthesis.getVoices();
  myAudio.voice = allVoice[2];

  speechSynthesis.speak(myAudio);
});
