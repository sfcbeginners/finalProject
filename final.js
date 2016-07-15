
var mainAudio = document.getElementById("audioElement");
/* ここでmainaudioを作ってる理由はいちいちhtmlに参照しに行く手間を省かせるために
一括でここに集まるように */

function play(){
  if(mainAudio.paused){
    mainAudio.play();
    playButton.innerHTML = "一時停止" //再生中に一時停止ボタンを表示させる
  }else{
    mainAudio.pause();
    playButton.innerHTML = "再開" //停止中に再開ボタンを表示させる
  }
}

function skip10sec(){
  mainAudio.currentTime = mainAudio.currentTime +10;
}

function back10sec(){
   mainAudio.currentTime = mainAudio.currentTime -10;
}

function stop(){
  mainAudio.currentTime = 0;
  mainAudio.pause();
  playButton.innerHTML = "再生" 
  //再生中は再生ボタンが一時停止ボタンに置き換わってるので停止ボタン押したら再生ボタンに戻す
}

function mute(){
  if (mainAudio.muted){
    muteButton.innerHTML = "ミュート";
  }else{
    muteButton.innerHTML = "ミュート解除";
  }
  mainAudio.muted = !mainAudio.muted;
}

function volumeDown(){
  mainAudio.volume = Math.max(mainAudio.volume - 0.1, 0);
}

function volumeUp(){
  mainAudio.volume = Math.min(mainAudio.volume + 0.1, 1);
}

function changeMusic(music){
  mainAudio.src = music;
  mainAudio.play();
}

function changetoMusic00(){
  changeMusic("audio/00.mp3");
}

function changetoMusic01(){
  changeMusic("audio/01.mp3");
}

function loopMusic(){
    console.log("ok");
  var audio = document.getElementById("mainAudio");
  mainAudio.currentTime = 0;
  mainAudio.play();
}

function changeMusicRate(){
    console.log("ok")
    var audio = document.getElementById("mainAudio");
    mainAudio.playbackRate  = 2;
}



var playButton = document.getElementById("play");
playButton.addEventListener("click", play);

var skip10secButton = document.getElementById("skip10sec");
skip10secButton.addEventListener("click", skip10sec);

var back10secButton = document.getElementById("back10sec");
back10secButton.addEventListener("click", back10sec);

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stop);

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", mute);

var volumeDownButton = document.getElementById("volumeDown");
volumeDownButton.addEventListener("click", volumeDown);

var volumeUpButton = document.getElementById("volumeUp");
volumeUpButton.addEventListener("click", volumeUp);

var changeMusic00 = document.getElementById("play00");
play00.addEventListener("click", changetoMusic00);

var changeMusic01 = document.getElementById("play01");
play01.addEventListener("click", changetoMusic01);

var musicRateButton = document.getElementById("musicRate");
musicRateButton.addEventListener("click", changeMusicRate);

var player = document.getElementById("audioElement");
player.addEventListener("ended", loopMusic);

var audioContext = new AudioContext();
var source = audioContext.createMediaElementSource(mainAudio);

var mazDelayTime = 1;

var dry = audioContext.createGain();
source.connect(dry);
dry.connect(audioContext.destination);

var wet = audioContext.createGain();
var delay = audioContext.createDelay();
var feedback = audioContext.createGain();


source.connect(delay);
delay.connect(wet);
delay.connect(feedback);
wet.connect(audioContext.destination);
source.connect(feedback);
feedback.connect(delay);

//var lowpass = audioContext.createBiquadFilter();
source.connect(lowpass);
lowpass.connect(audioContext.destination);