var targetImage = (function () {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    }
  }
})();

var proxyImage = (function() {
  var img = new Image();
  // 先加载 loading 或者默认图片用于快速显示
  targetImage.setSrc('loading.gif')
  img.onload = img.onerror = function () {
    // 加载完成之后，替换目标图片
    targetImage.setSrc(img.src);
  };

  return {
    setSrc: function (src) {
      // 此时开始加载图片
      img.src = src;
    }
  }
})();

proxyImage.setSrc('https://cn.bing.com/sa/simg/hpb/LaDigue_EN-CA1115245085_1920x1080.jpg');
