import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

const toastContainerDiv = document.createElement('div');
document.body.appendChild(toastContainerDiv);

// 这里返回的是 ToastContainer 组件引用
const getToastContainerRef = () => {
  return ReactDOM.render(<Container />, toastContainerDiv);
}

// 获取 container 实例
let containerRef = getToastContainerRef();

const destroy = () => {
  ReactDOM.unmountComponentAtNode(toastContainerDiv);
  containerRef = getToastContainerRef();
}

export default {
  // @ts-ignore
  info: (text, duration, isShowMask) => (containerRef.push({ type: 'info', text, duration, isShowMask })),
  hide: destroy
};