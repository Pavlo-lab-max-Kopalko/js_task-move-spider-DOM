'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const widthSpider = spider.offsetWidth;
  const borderWidth = Array.from(getComputedStyle(wall).borderTopWidth);
  const borderWall = borderWidth
    .filter((x) => x / x === 1 || x === '.')
    .join('');

  wall.style.cssText = 'relative';
  spider.style.cssText = 'position: fixed';

  const minStyleLeft = wall.offsetLeft;
  const minStyleTop = wall.offsetTop;

  if (e.clientX - widthSpider / 2 < minStyleLeft) {
    spider.style.left = minStyleLeft + Math.ceil(Number(borderWall)) + 'px';
  } else if (e.clientX >= minStyleLeft + wall.clientWidth - widthSpider / 2) {
    spider.style.left =
      minStyleLeft +
      Math.ceil(Number(borderWall)) -
      widthSpider +
      wall.clientWidth +
      'px';
  } else {
    spider.style.left = e.clientX - widthSpider / 2 + 'px';
  }

  if (e.clientY - widthSpider / 2 < minStyleTop) {
    spider.style.top = minStyleTop + Math.ceil(Number(borderWall)) + 'px';
  } else if (e.clientY >= minStyleTop + wall.clientWidth - widthSpider / 2) {
    spider.style.top =
      minStyleTop +
      Math.ceil(Number(borderWall)) -
      widthSpider +
      wall.clientWidth +
      'px';
  } else {
    spider.style.top = e.clientY - widthSpider / 2 + 'px';
  }
});
