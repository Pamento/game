class MyGameArea {

  constructor(width,height){
    this.canvas =  document.createElement("canvas");
    this.canvas.width = width;//975;
    this.canvas.height = height;//600;
    this.context = this.canvas.getContext("2d");
  }
  start() {
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
  clear(){
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
}