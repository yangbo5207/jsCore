import { setState } from '../state';

const input = document.querySelector<HTMLInputElement>('.bdcolor_input');
const btn = document.querySelector('.bdcolor_btn');

if (!input || !btn) {
  throw new Error('元素对象不存在')
}


btn.addEventListener('click', () => {
  if (input.value) {
    setState('borderColor', input.value);
  }
}, false);