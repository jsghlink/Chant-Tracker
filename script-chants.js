let introaudio = new Audio("gayatri-mantra-1.mp3");
let chantclickbutton = document.getElementById("chantbuttonid");
let chantnumber = document.getElementById("chantnumberid");
let chantmessagebox = document.getElementById("chantmessageid");
let om = document.getElementById("omimage");

let cpucounter = 0; // cpu counter for score

window.addEventListener("load", (event) => {
  console.log("Your page is fully loaded.");
  // introaudio.autoplay();
  introaudio.play();
  //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
});

// _
// document.body --> reattach here for om.addEventlistener("click")
om.addEventListener("click", (event) => {
  console.log("Audio to be paused on click (anywhere inside the document/om image).");
  // introaudio.autoplay();
  // _ introaudio.pause();
  //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
  
  if (introaudio.paused) { // __ this worked!
    introaudio.play();
  }
  
  else{
  introaudio.pause();
  // introaudio.currentTime = 0
  }                        // __ this

});
// -                                // try testing it in different browsers, eg. chrome

// let playintroaudiosample = document.addEventListener("DOMContentLoaded", playFuncAudio);
// document.addEventListener('load', playFuncAudio);
// function playFuncAudio() {
//   introaudio.autoplay();
// } 

chantclickbutton.addEventListener("click", (event) => {
  console.log("The button has been clicked.");
  cpucounter = cpucounter + 1;
  if (cpucounter <= 108) {
    chantnumber.innerText = cpucounter;
    chantmessagebox.innerText = "Chants are in progress.";
  }

  else {
    event.preventDefault();
    chantmessagebox.innerText = "Chants completed. Button functionality has been disabled.";
  }
});

// window.addEventListener("")
// function play() {//  ww w . jav a 2  s . c  o  m
//   var audio = document.getElementById('audio1');
//   if (audio.paused) {
//       audio.play();
//   }else{
//       audio.pause();
//       audio.currentTime = 0
//   }
// }