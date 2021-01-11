import { getState, setState } from '../state';

const red_btn = document.querySelector('.height_reduce');
const add_btn = document.querySelector('.height_add');
const height_input = document.querySelector<HTMLInputElement>('.height_input');

if (!red_btn || !add_btn || !height_input) {
  throw new Error('元素对象不存在')
}

height_input.value = getState('height') || 200;

red_btn.addEventListener('click', () => {
  const cur = getState('height');
  if (cur > 50) {
    setState('height', cur - 5);
    height_input.value = cur - 5 + '';
  }
}, false)

add_btn.addEventListener('click', () => {
  const cur = getState('height');
  if (cur < 400) {
    setState('height', cur + 5);
    height_input.value = cur + 5;
  }
}, false)