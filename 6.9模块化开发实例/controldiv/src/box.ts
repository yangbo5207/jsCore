import { bind } from './state';
import { getStyle } from './utils';
import './register';

const div = document.querySelector<HTMLElement>('.target');

if (!div) {
  throw new Error('元素对象 target 不存在')
}

// control show or hide
bind('show', value => {
  if (value === true) {
    div.classList.add('hide');
  }
  if (value === false) {
    div.classList.remove('hide');
  }
})

// change background color
bind('backgroundColor', value => {
  div.style.backgroundColor = value;
})

// change border color
bind('borderColor', value => {
  const width = parseInt(getStyle(div, 'borderWidth'));
  if (width === 0) {
    div.style.border = '2px solid #ccc';
  }
  div.style.borderColor = value;
})

// change width
bind('width', value => {
  div.style.width = `${value}px`;
})

bind('height', value => {
  div.style.height = `${value}px`;
})