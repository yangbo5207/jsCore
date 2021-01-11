import { getState, setState } from '../state';

const red_btn = document.querySelector('.width_reduce');
const add_btn = document.querySelector('.width_add');

if (!red_btn || !add_btn) {
  throw new Error('元素对象不存在')
}

red_btn.addEventListener('click', () => {
  const cur = getState('width');
  if (cur > 50) {
    setState('width', cur - 5);
  }
}, false)

add_btn.addEventListener('click', () => {
  const cur = getState('width');
  if (cur < 400) {
    setState('width', cur + 5);
  }
}, false)