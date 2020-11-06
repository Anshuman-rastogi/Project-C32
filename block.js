class Block {
  constructor(x, y, width, height,color) {
    var options = {
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:1.8
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    //stroke("green");
    fill(this.color);
    //fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
