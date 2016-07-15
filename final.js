
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

function changetoMusic02(){
  changeMusic("audio/02.mp3");
}

function changetoMusic03(){
  changeMusic("audio/03.mp3");
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

function insertName00(){
  var nameBar = document.getElementById("musicName");
  nameBar.innerHTML = "01";
}

function insertName01(){
  var nameBar = document.getElementById("musicName");
  nameBar.innerHTML = "02";
}

function insertName02(){
  var nameBar = document.getElementById("musicName");
  nameBar.innerHTML = "03";
}

function insertName03(){
  var nameBar = document.getElementById("musicName");
  nameBar.innerHTML = "04";
}

function clock()
{
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    //　HTML: <span id="clock_date">()</span>
    document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")";
    //　HTML: <span id="clock_time">()</span>
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
    //　HTML: <div id="clock_frame"> 
    document.getElementById("clock_frame").style.fontSize =  window.innerWidth / 50 + "px";
}

setInterval(clock, 1000);

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

var changeMusic02 = document.getElementById("play02");
play02.addEventListener("click", changetoMusic02);

var changeMusic03 = document.getElementById("play03");
play03.addEventListener("click", changetoMusic03);

var showMusicName00 = document.getElementById("00");
showMusicName00.addEventListener("click", insertName00);
var showMusicName01 = document.getElementById("01");
showMusicName01.addEventListener("click", insertName01);
var showMusicName02 = document.getElementById("02");
showMusicName02.addEventListener("click", insertName02);
var showMusicName03 = document.getElementById("03");
showMusicName03.addEventListener("click", insertName03);

var musicRateButton = document.getElementById("musicRate");
musicRateButton.addEventListener("click", changeMusicRate);

var player = document.getElementById("audioElement");
player.addEventListener("ended", loopMusic);


var audioContext = new AudioContext();
var source = audioContext.createMediaElementSource(mainAudio);

var maxDelayTime = 1;

var dry = audioContext.createGain();
dry.connect(audioContext.destination);

var wet = audioContext.createGain();
var delay = audioContext.createDelay();
var feedback = audioContext.createGain();
dry.gain.value = 0.8;
wet.gain.value = 0.2;
feedback.gain.value = 0.6;
delay.delayTime.value = 0.2;

delay.connect(wet);
delay.connect(feedback);
wet.connect(audioContext.destination);
feedback.connect(delay);

var lowpass = audioContext.createBiquadFilter();
source.connect(lowpass);
lowpass.connect(delay);
lowpass.connect(dry);