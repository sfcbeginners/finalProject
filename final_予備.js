// アプリのJSファイル

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

function loopMusic(){
    console.log("ok");
    //audio.currentTime = 0;
    //audio.play();
    var audio;
  audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
}

function changeMusicRate(){
    console.log("ok")
    var audio = document.querySelector("audio");
    audio.playbackRate  = -1;
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
//var loopMusicButton = document.querySelector("#loop");
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
//loopMusicButton.addEventListener("click", loopMusic);
var musicRateButton = document.querySelector("#musicRate");
musicRateButton.addEventListener("click", changeMusicRate);

var player = document.querySelector("audio");
player.addEventListener("ended", loopMusic);

var audioContext = new AudioContext();
var source = audioContext.createMediaElementSource(player);
var dry = audioContext.createGain();
var lowpass = audioContext.createBiquadFilter();
var wet = audioContext.createGain();
var delay = audioContext.createDelay();


delay.delayTime = 1.5;
dry.gain.value = 0.8;
wet.gain.value = 0.2;

source.connect(dry);
dry.connect(audioContext.destination);

source.connect(delay);
delay.connect(wet);
wet.connect(audioContext.destination); 

source.connect(lowpass);
lowpass.connect(audioContext.destination);
