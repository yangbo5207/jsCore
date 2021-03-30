import React, { Component } from 'react';
import Item, { ToastProps } from './Item';
import "./container.css";

export function uuid() { // 获取唯一值
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export interface ContainerState {
  isShowMask: boolean,
  toastList: ToastProps[]
}

class Container extends Component<any, ContainerState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isShowMask: false,
      toastList: []
    }
  }

  // 新增
  push = (toastProps: ToastProps) => {
    const { type, text, duration, isShowMask = false } = toastProps;
    const { toastList } = this.state;
    toastList.push({
      id: uuid(),
      type,
      text,
      duration,
      isShowMask
    });

    this.setState({
      toastList,
      isShowMask
    });
  }

  // 删除
  pop = (id: string, isShowMask: boolean) => {
    const { toastList } = this.state;
    const newList = toastList.filter(item => item.id !== id);
    this.setState({
      toastList: newList,
    });
    // 该 toast item 是否为 toastList 中 duration 最长的 item
    let isTheMaxDuration = true;
    // 该 toast item 的 duration
    const targetDuration = toastList.find(item => item.id === id)?.duration || 0;
    // 遍历 toastList 检查是否为最长 duration
    toastList.forEach(item => {
      if (item.isShowMask && item.duration > targetDuration) {
        isTheMaxDuration = false
      }
      return null;
    });

    // 隐藏 mask
    if (isShowMask && isTheMaxDuration) {
      this.setState({
        isShowMask: false
      })
    }
  }

  render() {
    const { toastList, isShowMask } = this.state;
    return (
      <div className="toast-container">
        {isShowMask && <div className="mask" />}
        <div className="toast-wrap">
          {toastList.reverse().map((item) => (
            <Item onClose={this.pop} {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Container;