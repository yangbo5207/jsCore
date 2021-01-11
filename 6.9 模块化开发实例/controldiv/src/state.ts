interface Store {
  [key: string]: any
}

type EventCallback = (...args: any[]) => any

interface Events { 
  [key: string]: EventCallback 
}

const events: Events = {}
const store: Store = {}

// 往store中添加一个状态值，并确保传入一个初始值
export const registerState = (status: string, value: any) => {
  if (store[status]) {
    throw new Error('状态已经存在。')
  }
  store[status] = value;
  return value;
}

// 获取整个状态树
export const getStore = () => store

// 获取某个状态的值
export const getState = (status: string) => store[status]

// 设置某个状态的值
export const setState = (status: string, value: any) => {
  store[status] = value;
  dispatch(status, value);
  return value;
}

// 将状态值与事件绑定在一起，通过status-events 的形式保存在events对象中
export const bind = (status: string, eventFn: EventCallback) => {
  events[status] = eventFn;
}

// 移除绑定
export const remove = (status: string) => {
  delete events[status]
  return status;
}

export const dispatch = (status: string, value: any) => {
  if (!events[status]) {
    throw new Error('未绑定任何事件！')
  }
  events[status](value);
  return value;
}