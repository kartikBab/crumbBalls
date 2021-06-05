class WastePaper {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false, restitution:0.4
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);}
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };