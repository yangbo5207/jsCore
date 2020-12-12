class Internal {
  constructor(target, handler) {
    this.target = target
    this.handler = handler
  }
  get(property, receiver) {
    var handler = this.handler;
    if (handler.get == UNDEFINED) {
      return this.target[property];
    }
    if (typeof handler.get === 'function') {
      return handler.get(this.target, property, receiver);
    }
  }
  set(property, value, receiver) {
    var handler = this.handler;
    if (handler.set == undefined) {
      this.target[property] = value;
    } else if (typeof handler.set === 'function') {
      var result = handler.set(this.target, property, value, receiver);
      if (!result) {
        console.error(`set 异常： ${property}`)
      }
    } else {
      console.error("Trap 'set' is not a function: " + handler.set);
    }
  }
}

function ProxyPolyfill(target, handler) {
  return proxyObject(new Internal(target, handler));
}

/**
 * Proxy object 这里是核心关键，使用 Object.create 的方式与 目标对象建立绑定关系
 * @param {Internal} internal 
 * @returns {object}
 */
function proxyObject(internal) {
  var target = internal.target;
  var descMap, newProto;
  
  descMap = observeProto(internal);
  newProto = Object.create(Object.getPrototypeOf(target), descMap);

  descMap = observeProperties(target, internal);
  return Object.create(newProto, descMap);
}

/**
 * Observe [[Prototype]]
 * @param {Internal} internal 
 * @returns {object} descriptors
 */
function observeProto(internal) {
  var descMap = {};
  var proto = internal.target;
  while (proto = Object.getPrototypeOf(proto)) {
    var props = observeProperties(proto, internal);
    Object.assign(descMap, props);
  }
  descMap.__PROXY__ = {
    get: function () {
      return internal.target ? undefined : 'REVOKED';
    }
  };
  return descMap;
}

/**
 * Observe properties
 * @param {object} obj
 * @param {Internal} internal 
 * @returns {object} descriptors
 */
function observeProperties(obj, internal) {
  var names = Object.getOwnPropertyNames(obj);
  var descMap = {};
  for (var i = names.length - 1; i >= 0; --i) {
    descMap[names[i]] = observeProperty(obj, names[i], internal);
  }
  return descMap;
}

/**
 * Observe property，让 代理对象的属性操作，映射到目标对象
 * @param {object} obj
 * @param {string} prop
 * @param {Internal} internal 
 * @returns {{get: function, set: function, enumerable: boolean, configurable: boolean}}
 */
function observeProperty(obj, prop, internal) {
  var desc = Object.getOwnPropertyDescriptor(obj, prop);
  return {
    get: function () {
      return internal.get(prop, this);
    },
    set: function (value) {
      internal.set(prop, value, this);
    },
    enumerable: desc.enumerable,
    configurable: desc.configurable
  };
}


const t = {m: 1}
const p1 = new ProxyPolyfill(t, {
  get: function(obj, prop) {
    return obj[prop]
  }
})

p1.m = 2
console.log(t)
