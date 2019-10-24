let lightCandleBtn;
let candleImage;
let matchSound;

function preload() {
  soundFormats('mp3', 'ogg');
  matchSound = loadSound('assets/matchStrike.mp3');
}

function setup() {
  noCanvas();

  lightCandleBtn = select('#lightCandleButton');
  candleImage = select('#candle');

  lightCandleBtn.mousePressed(toggleCandle);
}

function draw() {
  background(220);
}

function toggleCandle() {
  matchSound.setVolume(0.1);
  matchSound.play();

  setTimeout(function() {
    candleImage.show();
  }, 1500);

}
