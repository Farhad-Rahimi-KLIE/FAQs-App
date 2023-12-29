// Lnitialize the Variables
let ferst = document.querySelector(".ferst");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let sex = document.querySelector(".sex");
//Initialize the Audios
let audio1 = new Audio("songs/song1.mp3");
let audio2 = new Audio("songs/song2.mp3");
let audio3 = new Audio("songs/song3.mp3");
let audio4 = new Audio("songs/song4.mp3");
let audio5 = new Audio("songs/song5.mp3");
let audio6 = new Audio("songs/song6.mp3");

//Now Handle the Songs
//1st Song
ferst.addEventListener("click", () => {
  if (audio1.paused || audio1.currentTime <= 0) {
    audio1.play();
  } else {
    audio1.pause();
  }
});
//2st Song
two.addEventListener("click", () => {
  if (audio2.paused || audio2.currentTime <= 0) {
    audio2.play();
  } else {
    audio2.pause();
  }
});
// 3st song
three.addEventListener("click", () => {
  if (audio3.paused || audio3.currentTime <= 0) {
    audio3.play();
  } else {
    audio3.pause();
  }
});
//4st song
four.addEventListener("click", () => {
  if (audio4.paused || audio4.currentTime <= 0) {
    audio4.play();
  } else {
    audio4.pause();
  }
});
//5st song
five.addEventListener("click", () => {
  if (audio5.paused || audio5.currentTime <= 0) {
    audio5.play();
  } else {
    audio5.pause();
  }
});
//6st Song
sex.addEventListener("click", () => {
  if (audio6.paused || audio6.currentTime <= 0) {
    audio6.play();
  } else {
    audio6.pause();
  }
});
