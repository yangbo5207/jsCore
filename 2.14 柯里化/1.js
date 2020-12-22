// arity 用来标记参数的个数
// args 用来收集参数
function createCurry(func, args) {
  var arity = func.length;

  // 第一次执行不会传入args，而是默认为空数组
  var args = args || [];

  var wrapper = function () {
    // 将wrapper中的参数收集到args中
    var _args = [].slice.call(arguments);
    [].push.apply(_args, args);

    // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
    if (_args.length < arity) {
      return createCurry(func, _args);
    }

    // 参数收集完毕，则执行func
    return func.apply(this, _args);
  }

  return wrapper;
}

function check(targetString, reg) {
  return reg.test(targetString);
}

var _check = createCurry(check);

var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

console.log(checkPhone('18301022997'))
console.log(checkPhone('18301022997'))


console.log(checkEmail('18301022997'))
console.log(checkEmail('18301022997@qq.com'))