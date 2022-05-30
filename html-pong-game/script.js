window.onload = function () {
  c = document.getElementById('gc');
  cc = c.getContext('2d');
  c.addEventListener('mousemove', (e) => {
    p1y = e.clientY - ph / 2;
  });
  setInterval(update, 1000 / 60);
};

p1y = p2y = 40;
pt = 10;
ph = 100;
bx = by = 50;
xv = yv = 4;
bd = 6;
score1 = score2 = 0;

const reset = () => {
  bx = c.width / 2;
  by = c.height / 2;
  xv = -xv;
  yv = 3;
};

const update = () => {
  //ball physics
  bx += xv;
  by += yv;

  //top bottom border collision
  if (by < 0 && yv < 0) {
    yv = -yv;
  }
  if (by > c.height && yv > 0) {
    yv = -yv;
  }
  //left collision
  if (bx < 0) {
    //collide with paddle
    if (by > p1y && by < p1y + ph) {
      xv = -xv;
      dy = by - (p1y + ph / 2);
      yv = 0.3 * dy;
    } else {
      score2++;
      reset();
    }
  }
  //right collision
  if (bx > c.width) {
    //collide with paddle
    if (by > p2y && by < p2y + ph) {
      xv = -xv;
      dy = by - (p2y + ph / 2);
      yv = 0.3 * dy;
    } else {
      score1++;
      reset();
    }
  }

  //ai for p2
  ais = 4;
  if (p2y + ph / 2 < by) {
    p2y += ais;
  } else {
    p2y -= ais;
  }

  cc.fillStyle = 'black';
  cc.fillRect(0, 0, c.width, c.height);
  cc.fillStyle = 'white';
  cc.fillRect(0, p1y, pt, ph);
  cc.fillRect(c.width - pt, p2y, pt, ph);
  cc.fillRect(bx - bd / 2, by - bd / 2, bd, bd);
  cc.fillText(score1, 100, 100);
  cc.fillText(score2, c.width - 100, 100);
};
