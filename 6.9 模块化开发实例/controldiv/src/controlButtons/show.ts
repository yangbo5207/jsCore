import { getState, setState } from '../state';

const btn = document.querySelector('.show');

if (!btn) {
  throw new Error('元素对象不存在')
}

btn.addEventListener('click', () => {
  setState('show', !getState('show'))
}, false);