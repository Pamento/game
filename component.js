class Component {

  constructor(width, height, color, x, y){

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  newPos(speedX,speedY){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  update(){
    this.ctx = myGameArea.context;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}