import { setState } from '../state';

const input = document.querySelector<HTMLInputElement>('.bgcolor_input');
const btn = document.querySelector('.bgcolor_btn');

if (!input || !btn) {
  throw new Error('元素对象不存在')
}

btn.addEventListener('click', () => {
  if (input.value) {
    setState('backgroundColor', input.value);
  }
}, false);