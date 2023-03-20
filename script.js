console.log("page loaded...");

var vid = document.querySelector("video");
vid.muted = true;

function over(vid) {
  vid.play();
}

function out(vid) {
  vid.pause();
}