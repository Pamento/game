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
    this.ctx = gameArea.context;

    this.ctx.shadowColor = 'black';
    this.ctx.shadowOffsetX = 5;
    this.ctx.shadowBlur = 8;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // text: "Don't touch the walls !!"
    // this.ctx.setTransform(1,0,-0.2,1,0,0);// (a,b,c,d,e,f)
    this.ctx.lineWidth= 1 ;
    this.ctx.fillStyle='yellow';
    this.ctx.fillRect(55,1,320,40);
    console.log("31 "+this.ctx.isPointInPath(260,20));
    if (true)
    {
    console.log("34 "+this.ctx.isPointInStroke(260,20));
    console.log(this.x,this.y);
    };
    this.ctx.font='30px Arial';
    this.ctx.strokeText("Don't touch the walls !!", 65,30);
    this.ctx.stroke();

    // element 1 big triangle left
    this.ctx.beginPath();
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(20, 160);
    this.ctx.lineTo(20, 580);
    this.ctx.lineTo(300, 580);
    this.ctx.closePath();
    if (true){
      console.log("50 triangle "+this.ctx.isPointInStroke(500,30));
    }    this.ctx.stroke();

    // element 2 rectangle 1 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.fillRect(10,70,130,80);
    this.ctx.stroke();
    this.ctx.resetTransform();

    // element 3 rectangle 2 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.fillRect(-80,210,150,65);
    this.ctx.stroke();
    this.ctx.resetTransform();
    
    // element 4 rectangle 3 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.fillRect(-20,330,150,50);
    this.ctx.stroke();
    this.ctx.resetTransform();
    
    // element 5 rectangle 4 translate
    this.ctx.transform(1,0,0.73,1,0,0);
    this.ctx.fillStyle='orange';
    this.ctx.fillRect(-95,430,100,40);
    this.ctx.stroke();
    this.ctx.resetTransform();
    
    // element 6 upper triangle below entry text
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.lineJoin="round";
    this.ctx.moveTo(190,44);
    this.ctx.lineTo(280,170);
    this.ctx.lineTo(375,44);
    this.ctx.closePath();
    this.ctx.stroke();

    // element 7 round angle
    this.ctx.beginPath();     
    this.ctx.moveTo(414,370);
    this.ctx.lineTo(317,227);
    this.ctx.lineTo(460, 40);
    this.ctx.lineTo(791, 40);
    this.ctx.arcTo(929, 40, 929, 178, 138);
    this.ctx.lineTo(929, 210);
    this.ctx.arcTo(929, 340, 829, 340, 130);
    this.ctx.lineTo(710, 340)
    // this.ctx.lineTo(929, 120);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(780,185,100,0*Math.PI,1.5*Math.PI);
    this.ctx.stroke();

    // element 8 line 1 sckwise inside oupen cyrcle
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(790,178);
    this.ctx.lineTo(889,82);
    this.ctx.stroke();

    // element 9 fill cyrcle insid oupen cyrcle
    this.ctx.beginPath();
    this.ctx.arc(790,178,25,0*Math.PI,1.5*Math.PI);
    this.ctx.stroke();

    // element 10 cyrcle
    this.ctx.beginPath();
    this.ctx.arc(540, 205, 110, 0, 2 * Math.PI);
    this.ctx.stroke();

    // element 11 rectangle 1
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(414, 370, 80, 187);

    // element 12 rectangle 2
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(663, 400, 92, 195);// he touch finish

    // element 13 line 1
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(494,370);
    this.ctx.lineTo(580,370);
    this.ctx.stroke();

    // element 14 line 2
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(580,420);
    this.ctx.lineTo(580,595);
    this.ctx.stroke();
    
    // element 15 line 3 sckwise
    this.ctx.beginPath();
    this.ctx.lineCap="round";
    this.ctx.moveTo(604,298);
    this.ctx.lineTo(663,400);
    this.ctx.stroke();

    // element 16 rectangle 3
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(805, 375, 135, 70);
    
    // lelement 17 finish text: "come here ;)"
    this.ctx.lineWidth= 1 ;
    this.ctx.fillStyle='#b2eb09';
    this.ctx.fillRect(760,560,220,40);
    this.ctx.font='30px Verdana';
    this.ctx.strokeText("Come here ;)",770, 590);
  }
}