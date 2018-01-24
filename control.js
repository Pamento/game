"use strict";
class UpdateGameArea {
  constructor(){
    this.myGamePiece = new Component(30, 30, "#ff0000", 10, 10);
    this.myGameArea = new MyGameArea();
  }
  action() {
    this.myGamePiece.speedX = 0;
    this.myGamePiece.speedY = 0;    
    if (this.myGameArea.keys && this.myGameArea.keys[37]) {this.myGamePiece.speedX = -1; }
    if (this.myGameArea.keys && this.myGameArea.keys[39]) {this.myGamePiece.speedX = 1; }
    if (this.myGameArea.keys && this.myGameArea.keys[38]) {this.myGamePiece.speedY = -1; }
    if (this.myGameArea.keys && this.myGameArea.keys[40]) {this.myGamePiece.speedY = 1; }
    this.myGamePiece.newPos( this.myGamePiece.speedX,  this.myGamePiece.speedY);    
    this.myGamePiece.update();
  }
  keyDown(e) {
    this.myGameArea.keys = (this.myGameArea.keys || []);
    this.myGameArea.keys[e.keyCode] = (e.type == "keydown");
  }
  keyUp(e) {
    this.myGameArea.keys[e.keyCode] = (e.type == "keydown");            
  }
}
// s = key.code = 83;