class Box{
    constructor(x,y,width,height){
        var box;
        var Options={
            restitution:1.0
          }
          this.Body=Bodies.rectangle(x,y,width,height,Options);
          this.width=width;
          this.height=height;
          World.add(world,this.Body);
    }
    display(){
        rectMode(CENTER);
  rect(this.Body.position.x,this.Body.position.y,this.width,this.height);
    
    }
}