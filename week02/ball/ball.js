const radius = 10;
const ball = { x: 20, y: 0, dx: 5, dy: 1 };
let old = { x: ball.x, y: ball.y };

let velocity = { x: 2, y: 6 };
function start() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "black";

  setInterval(() => {
    nextBoard();
    display(context);
  }, 1000 / 20);
}

function nextBoard() {
  old.x = ball.x;
  old.y = ball.y;
  ball.x += velocity.x * 1.1;
  ball.y += velocity.y * 1.2;
  // keep old ball values for the sake of efficient clearing of the old display

  // handle ball is hitting the bounds
  if (ball.x >= 400) {
    velocity.x = -(velocity.x * 0.9);
  } else if (ball.x <= 0) {
    velocity.x = -(velocity.x * 0.9);
  } else if (ball.y >= 400) {
    velocity.y = -(velocity.y * 0.8);
  } else if (ball.y <= 0) {
    velocity.y = -(velocity.y * 0.8);
  }
  //   reverse direction
  //   lose some energy relative to the current inertia (only velocity varies)

  // calculate new position
  // calculate any changes in velocity due to gravitational pull or medium resistance
}

function display(context) {
  context.clearRect(old.x - radius - 1, old.y - radius - 1, 22, 22);
  fillBox(context);
}

function fillBox(context) {
  context.beginPath();
  context.arc(ball.x, ball.y, radius, 0, 6.3, false);
  context.fill();
}
