import { init, Sprite, GameLoop, initKeys, keyPressed, clamp } from "kontra";

import croissantImage from "../assets/croissant.png";

const MOVING_SPEED = 2;

const { canvas } = init();

initKeys();

const image = new Image();

image.src = croissantImage;
image.onload = function () {
  let sprite = Sprite({
    x: 100,
    y: 100,
    // required for an image sprite
    image: image,
  });

  const loop = GameLoop({
    update: function () {
      if (keyPressed("arrowleft")) {
        sprite.x -= MOVING_SPEED;
      } else if (keyPressed("arrowright")) {
        sprite.x += MOVING_SPEED;
      }

      if (keyPressed("arrowup")) {
        sprite.y -= MOVING_SPEED;
      } else if (keyPressed("arrowdown")) {
        sprite.y += MOVING_SPEED;
      }

      sprite.x = clamp(0, canvas.width - 16, sprite.x);
      sprite.y = clamp(0, canvas.height - 16, sprite.y);
    },
    render: function () {
      sprite.render();
    },
  });

  loop.start();
};
