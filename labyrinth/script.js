"use strict";

let pawn = new Component(30, 30, "#ff0000", 10, 10);
let gameArea = new MyGameArea(975,600);// x, y, 780, 570
let updateGame = new UpdateGameArea();


function startGame() {
  gameArea.start();
}
function animation() {
  gameArea.clear();
  updateGame.action();
}


window.addEventListener('keydown', function (e) {
  updateGame.keyDown(e);
});
window.addEventListener('keyup', function (e) {
  updateGame.keyUp(e);
});

setInterval(animation, 200);