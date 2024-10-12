'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const field = e.target.closest('.wall');

  if (!field) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const widthSpider = spider.offsetWidth;
  const border = wall.clientTop;

  let x = e.clientX - widthSpider / 2 - border - wallRect.left;
  let y = e.clientY - widthSpider / 2 - border - wallRect.top;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderRect.width));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderRect.height));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
