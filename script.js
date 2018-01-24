"use strict";

let myGamePiece = new Component(30, 30, "#ff0000", 10, 10);
let myGameArea = new MyGameArea(780,570);
let updateGame = new UpdateGameArea();


function startGame() {
  myGameArea.start();
}
function animation() {
  myGameArea.clear();
  updateGame.action();
}


window.addEventListener('keydown', function (e) {
  updateGame.keyDown(e);
});
window.addEventListener('keyup', function (e) {
  updateGame.keyUp(e);
});


setInterval(animation, 20);