function play(){
  var audio;
  audio = document.querySelector("audio");
  audio.play();
}

function pause(){
  var audio;
  audio = document.querySelector("audio");
  audio.pause();
}

function skip10sec(){
  var audio;
  audio = document.querySelector("audio");
  audio.currentTime = audio.currentTime + 10;
}

function back10sec(){
  var audio;
  audio = document.querySelector("audio");
  audio.currentTime = audio.currentTime - 10;
}

function stop(){
  var audio;
  audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.pause();
}

function mute(){
  var audio;
  audio = document.querySelector("audio");
  audio.muted = true;
}

function volumeDown(){
  var audio;
  audio = document.querySelector("audio");
  audio.volume = Math.max(audio.volume - 0.1, 0);
}

function volumeUp(){
  var audio;
  audio = document.querySelector("audio");
  audio.volume = Math.min(audio.volume + 0.1, 1);
}

function changeMusic(music){
  var audio = document.querySelector("audio");
  audio.src = music;
  audio.play();
}

function changetoMusic00(){
  changeMusic("audio/00.mp3");
}

function changetoMusic01(){
  changeMusic("audio/01.mp3");
}

var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var skip10secButton = document.querySelector("#skip10sec");
var back10secButton = document.querySelector("#back10sec");
var stopButton = document.querySelector("#stop");
var muteButton = document.querySelector("#mute");
var volumeDownButton = document.querySelector("#volumeDown");
var volumeUpButton = document.querySelector("#volumeUp");
var changeMusic00 = document.querySelector("#play00");
var changeMusic01 = document.querySelector("#play01");
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
skip10secButton.addEventListener("click", skip10sec);
back10secButton.addEventListener("click", back10sec);
stopButton.addEventListener("click", stop);
muteButton.addEventListener("click", mute);
volumeDownButton.addEventListener("click", volumeDown);
volumeUpButton.addEventListener("click", volumeUp);
play00.addEventListener("click", changetoMusic00);
play01.addEventListener("click", changetoMusic01);