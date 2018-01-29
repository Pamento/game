"use strict";

// control for te pawn, if hi hides on the left side, he comes out on the right side. And this same for un and down.

class UpdateGameArea {
  constructor(){
    this.pawn = new Component(30, 30, "#ff0000", 10, 10);// (width, height, color, x, y)
    this.obstacl = new Component(5,100, "#00FF00", 100, 0)
    this.gameArea = new MyGameArea(480,270);
    this.areaWidth = this.gameArea.canvas.width;
    this.areaHeight = this.gameArea.canvas.height;
  }
  action() {
    let that = this;
    this.pawn.speedX = 0;
    this.pawn.speedY = 0;
    if ((this.pawn.x + this.pawn.width) < 0) { this.pawn.x = this.areaWidth }
    if ( this.pawn.x > this.areaWidth ) { this.pawn.x = - this.pawn.width }
    if ((this.pawn.y + this.pawn.height) < 0) { this.pawn.y = this.areaHeight }
    if ( this.pawn.y > this.areaHeight ) { this.pawn.y = - this.pawn.height }
    
    if (this.gameArea.keys && this.gameArea.keys[37]) {this.pawn.speedX = -1; }// keyboard: flesh left
    if (this.gameArea.keys && this.gameArea.keys[39]) {this.pawn.speedX = 1; }// keyboard: flesh right
    if (this.gameArea.keys && this.gameArea.keys[38]) {this.pawn.speedY = -1; }// keyboard: flesh up
    if (this.gameArea.keys && this.gameArea.keys[40]) {this.pawn.speedY = 1; }// keyboard: flesh down
    if (this.gameArea.keys && this.gameArea.keys[83]) {this.pawn.speedX *= 3; }// key: "s" on keyboard
    if (this.gameArea.keys && this.gameArea.keys[83]) {this.pawn.speedY *= 3; }// key: "s" on keyboard
        
    this.pawn.newPos( this.pawn.speedX, this.pawn.speedY);    
    this.pawn.update();
  }
  keyDown(e) {
    this.gameArea.keys = (this.gameArea.keys || []);
    this.gameArea.keys[e.keyCode] = (e.type == "keydown");
  }
  keyUp(e) {
    this.gameArea.keys[e.keyCode] = (e.type == "keydown");            
  }
}