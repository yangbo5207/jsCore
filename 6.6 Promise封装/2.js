const pending = 'PENDING'
const resolved = 'RESOLVED'
const rejected = 'REJECTED'

// const isFunction = (fn) => typeof fn === 'function'

class MyPromise2 {
  constructor(executor) {
    this.onResolvedQueue = []
    this.onRejectedQueue = []
    this._value = undefined
    this._status = pending
    executor(this._resolve.bind(this), this._reject.bind(this))
  }

  _resolve(value) {
    if (!pending) return
    const run = () => {
      this._status = resolved
      let cb;
      // 执行队列中收集的回调，执行一个，删除一个，
      // 队列思路：先进先出
      while (cb = this.onResolvedQueue.shift()) {
        this._value = value
        cb(value)
      }
    }
    
    setTimeout(run, 0)
  }

  _reject(value) {
    if (!pending) return
    const run = () => {
      this._status = rejected
      this._value = value
      if (this.onRejectedQueue.length == 0) {
        throw new Error(value)
      }
      let cb
      while(cb = this.onRejectedQueue.shift()) {
        cb(value)
      }
    }
    
    setTimeout(run, 0)
  }

  then(onResolved, onRejected) {
    const {_status, _value} = this
    return new MyPromise2((resolveNext, rejectNext) => {
      const _resolved = (value) => {
        try {
          if (!isFunction(onResolved)) {
            resolveNext(value)
          } else {
            const res = onResolved(value)
            if (res instanceof MyPromise2) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(res)
            }
          }
        } catch (err) {
          rejectNext(err)
        }
      }

      const _rejected = (value) => {
        try {
          if (!isFunction(onRejected)) {
            rejectNext(value)
          } else {
            const res = onRejected(value)
            if (res instanceof MyPromise2) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(res)
            }
          }
        } catch (err) {
          rejectNext(err)
        }
      }

      switch(_status) {
        // 状态为 pending 时，收集回调
        case pending: 
          this.onResolvedQueue.push(_resolved)
          this.onRejectedQueue.push(_rejected)
          break
        // 状态已经改变了，就直接执行回调
        case resolved:
          _resolved(_value)
          break
        case rejected:
          _rejected(_value)
          break
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  // 添加静态resolve方法
  static resolve(value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise2) return value
    // 如果参数是thenable对象，则返回一个Promise对象，并且其回调为thenable对象中的then属性
    if (value && value.then && isFunction(value.then)) return new MyPromise2(value.then)
    // 其他情况
    return new MyPromise2(resolve => resolve(value))
  }

  // 添加静态reject方法
  static reject(err) {
    return new MyPromise2((resolve, reject) => reject(err))
  }

  // 添加静态all方法
  static all(list) {
    return new MyPromise2((resolve, reject) => {
      // 返回值的集合
      let values = []
      let count = 0
      // 兼容String类型
      typeof list === 'string' ? list = list.split('') : ''
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }

  // 添加race方法
  static race(list) {
    return new MyPromise2((resolve, reject) => {
      // 兼容String类型
      typeof list === 'string' ? list = list.split('') : ''
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }

  // 添加done方法
  done(onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
      .catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => {
          throw reason
        }, 0)
      })
  }

  // 添加finally方法
  finally(callback) {
    let P = this.constructor
    return this.then(value => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    )
  }
}

window.MyPromise2 = MyPromise2