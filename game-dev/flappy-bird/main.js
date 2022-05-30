import { Bird, Pipe } from './classes.js';

const c = document.getElementById('main-canvas');
c.width = 1024;
c.height = 576;
const ctx = c.getContext('2d');

const bird = new Bird(c, ctx, { x: 100, y: 100 }, { x: 0, y: 0 });
const topPipe = new Pipe(
  c,
  ctx,
  { x: 300, y: 0 },
  { x: 0, y: 0 },
  80,
  250,
  true
);

const animate = () => {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, c.width, c.height);
  bird.move();
  topPipe.draw();
};
requestAnimationFrame(animate);
