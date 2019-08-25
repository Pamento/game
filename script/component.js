class Component {

  constructor(width, height, color, x, y){

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.color = color;
    this.inXY1 = ( this.x,this.y );
    this.inXY2 = ( this.x + this.width, this.y );
    this.inXY3 = ( this.x, this.y + this.height );
    this.inXY4 = ( (this.x + this.width), (this.y + this.height) );
  }
  newPos(speedX,speedY){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  update(endGame){
    this.ctx = gameArea.context;
    endGame = false;

    let that = this;
    function check(a,b,c,d) {
      that.ctx.rect(a,b,c,d);
      if ((that.ctx.isPointInPath( that.x,that.y)) || (that.ctx.isPointInPath(that.x + that.width, that.y)) ||
      (that.ctx.isPointInPath(that.x, that.y + that.height)) || (that.ctx.isPointInPath((that.x + that.width), (that.y + that.height))) ){
        endGame = true;
      }
      that.ctx.clearRect(a,b,c,d);
    }

    // ======================================================   pawn
    // this.ctx.globalCompositeOperation = "source-atop";
    this.ctx.shadowColor = 'black';
    this.ctx.shadowOffsetX = 5;
    this.ctx.shadowBlur = 8;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // ======================================================   text: "Don't touch the walls !!"
    this.ctx.lineWidth= 1 ;
    this.ctx.fillStyle='yellow';
    this.ctx.rect(55,1,320,40);
    this.ctx.fill();
    check(55,1,320,40);
    this.ctx.font='30px Arial';
    this.ctx.strokeText("Don't touch the walls !!", 65,30);
    this.ctx.stroke();

    // ======================================================  element 1 big triangle left
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(20, 160);
    this.ctx.lineTo(20, 580);
    this.ctx.lineTo(300, 580);
    this.ctx.closePath();
    if (this.ctx.isPointInPath(this.x+this.width,this.y+this.height))
    {
    // console.log("51  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    };
    this.ctx.stroke();

    // ======================================================  element 2 rectangle 1 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle='orange';
    this.ctx.rect(10,55,130,80);
    check(10,55,130,80);
    this.ctx.fill();
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("62  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();
    this.ctx.resetTransform();

    // ======================================================  element 3 rectangle 2 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.rect(-80,195,150,65);
    this.ctx.fill();
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("74  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();
    this.ctx.resetTransform();

    // ======================================================  element 4 rectangle 3 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.rect(-20,315,150,50);
    this.ctx.fill();
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("86  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();
    this.ctx.resetTransform();

    // ======================================================  element 5 rectangle 4 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.rect(-95,415,100,40);
    this.ctx.fill();
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("98  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();
    this.ctx.resetTransform();

    // ======================================================  element 6 upper triangle below entry text
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.lineJoin="round";
    this.ctx.moveTo(190,44);
    this.ctx.lineTo(280,170);
    this.ctx.lineTo(375,44);
    this.ctx.closePath();
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("113  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 7 round angle
    this.ctx.beginPath();
    this.ctx.moveTo(414,370);
    this.ctx.lineTo(317,227);
    this.ctx.lineTo(460, 40);
    this.ctx.lineTo(791, 40);
    this.ctx.arcTo(929, 40, 929, 178, 138);
    this.ctx.lineTo(929, 210);
    this.ctx.arcTo(929, 340, 829, 340, 130);
    this.ctx.lineTo(710, 340)
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("129  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(780,185,100,0*Math.PI,1.5*Math.PI);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("137  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 8 line 1 sckwise inside oupen cyrcle
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(790,178);
    this.ctx.lineTo(889,82);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("148  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 9 fill cyrcle insid oupen cyrcle
    this.ctx.beginPath();
    this.ctx.arc(790,178,25,0*Math.PI,1.5*Math.PI);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("157  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 10 cyrcle
    this.ctx.beginPath();
    this.ctx.arc(540, 205, 110, 0, 2 * Math.PI);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("166  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 11 rectangle 1
    this.ctx.lineWidth = 10;
    this.ctx.rect(414, 370, 80, 187);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("175  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 12 rectangle 2
    this.ctx.lineWidth = 10;
    this.ctx.rect(663, 400, 92, 195);// he touch finish
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("184  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 13 line 1 vertical
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(494,370);
    this.ctx.lineTo(580,370);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("195  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 14 line 2 horizontal
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(580,420);
    this.ctx.lineTo(580,595);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("206  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 15 line 3 sckwise
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(604,298);
    this.ctx.lineTo(663,400);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("217  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  element 16 rectangle 3
    this.ctx.lineWidth = 10;
    this.ctx.rect(805, 375, 138, 70);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("226  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.stroke();

    // ======================================================  lelement 17 finish text: "come here ;)"
    this.ctx.lineWidth= 1 ;
    this.ctx.fillStyle='#b2eb09';
    this.ctx.rect(760,560,220,40);
    // if (this.ctx.isPointInPath(this.inX, this.inY))
    // {
    // console.log("236  "+this.ctx.isPointInPath(this.x+this.width,this.y+this.height));
    // };
    this.ctx.fill();
    this.ctx.font='30px Verdana';
    this.ctx.strokeText("Come here ;)",770, 590);
  }
  gameOver(){
    alert("Game over!");

  }
}