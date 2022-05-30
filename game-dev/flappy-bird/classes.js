export class Bird {
  constructor(canvas, context, position, velocity, radius = 10, gravity = 1) {
    this.canvas = canvas;
    this.context = context;
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
    this.gravity = gravity;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.context.fillStyle = 'red';
    this.context.fill();
    this.context.closePath();
  }

  move() {
    if (this.position.y + this.radius * 2 > this.canvas.height) {
      this.velocity.y = 0;
      this.gravity = 0;
    }
    this.draw();
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export class Pipe {
  constructor(
    canvas,
    context,
    position,
    velocity,
    width = 50,
    height = 200,
    rotate = false
  ) {
    this.canvas = canvas;
    this.context = context;
    this.position = position;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.rotate = rotate;
  }

  draw() {
    this.context.fillStyle = 'green';
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    // this.context.translate(
    //   this.position.x + this.width / 2,
    //   this.position.y + this.height / 2
    // );
    this.rotate && this.context.rotate((180 * Math.PI) / 180);
  }
}
