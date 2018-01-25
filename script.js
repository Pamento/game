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
  console.log(e);
});
window.addEventListener('keyup', function (e) {
  updateGame.keyUp(e);
});

// console.log("x "+myGamePiece.speedX);
// console.log("y "+myGamePiece.speedY);

setInterval(animation, 20);