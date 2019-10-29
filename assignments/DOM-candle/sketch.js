let lightCandleBtn, delayBtn, reverbCandleBtn;
let candleImage;
let matchSound;
let song;
let reverb;
let delay;

function preload() {
  soundFormats('mp3', 'ogg');
  matchSound = loadSound('assets/matchStrike.mp3');
  song = loadSound('assets/AnnaLuisa_SILKWORMS.mp3');

}

function setup() {
  noCanvas();

  reverb = new p5.Reverb();
  delay = new p5.Delay();

  lightCandleBtn = select('#lightCandleButton');
  reverbBtn = select('#reverbButton');
  delayBtn = select('#delayButton');
  candleImage = select('#candle');

  lightCandleBtn.mousePressed(toggleCandle);

  reverbBtn.mousePressed(function(){
    song.setVolume(.5, 2);
    reverb.process(song, 3, 2);
  });

  delayBtn.mousePressed(function(){
    delay.process(song, .12, .7, 2300);
  });
}



function draw() {
  background(220);
}


function toggleCandle() {
  matchSound.setVolume(0.1);
  matchSound.play();




  setTimeout(function() {
    candleImage.show();
    song.setVolume(0.5);
    song.loop();
  }, 1000);

}
