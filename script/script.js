"use strict";

let pawn = new Component(30, 30, "#ff0000", 10, 10);
let gameArea = new MyGameArea(975,600);// x, y, 780, 570
let updateGame = new UpdateGameArea();// pawn.x
// let detectTouch = new QuadTree();

function startGame() {
  gameArea.start();
}
function animation() {
  gameArea.clear();
  updateGame.action();
}

if(pawn.update()){
  animation.stopPromagation();
  pawn.gameOver();
}


window.addEventListener('keydown', function (e) {
  updateGame.keyDown(e);
});
window.addEventListener('keyup', function (e) {
  updateGame.keyUp(e);
});


setInterval(animation, 50);