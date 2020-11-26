;
(function ($) {
  var $items = $('.items'),
    lastTime = 0,
    nextFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        var currTime = + new Date,
          delay = Math.max(1000 / 60, 1000 / 60 - (currTime - lastTime));
        lastTime = currTime + delay;
        return setTimeout(callback, delay);
      },
    cancelFrame = window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout,
    scrollX = 0,
    itemW = 240,
    target = 0,
    timer = null;

  if ($items.children().eq(0).width() == 190) {
    itemW = 190;
  }
  if ($items.children().eq(0).width() == 160) {
    itemW = 160;
  }
  target = itemW * $items.children().length;

  $items.html($items.html() + $items.html());

  adAni();

  function adAni() {
    timer = nextFrame(function () {
      scrollX += 1;
      if (scrollX >= target) {
        scrollX = 0;
      }
      $items.scrollLeft(scrollX);
      adAni();
    });
  }
  if (!isMobile()) {
    $items.on('mouseover', function () {
      cancelFrame(timer);
    }).on('mouseout', function () { adAni(); });
  }

  var sX, sL;
  $items.on('touchstart', function (e) {
    cancelFrame(timer);
    sX = e.originalEvent.changedTouches[0].pageX;
    sL = $items.scrollLeft();
  }).on('touchmove', function (e) {
    var dis = e.originalEvent.changedTouches[0].pageX - sX;
    var nowX = sL - dis;
    if (nowX > target) {
      nowX = 0;
    }
    $items.scrollLeft(nowX);
  }).on('touchend', function (e) {
    scrollX = $items.scrollLeft();
    if (scrollX >= target) {
      scrollX = 0;
    }
    adAni();
  })

  // 判断是否在移动端
  function isMobile() {
    return 'ontouchstart' in document;
  }
})(jQuery);
