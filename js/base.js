  
class Base {
    constructor(x, y, w, h, isStatic) {
      var options = {
        isStatic: isStatic
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    show() {
     var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.w, this.h);
      pop();
    }
  }