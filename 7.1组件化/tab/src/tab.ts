const titles = document.querySelector<HTMLElement>('.titles');
const contents = document.querySelector('.contents');

if (!titles || !contents) {
  throw new Error('element not exist.')
}

let index = 0;

titles.onclick = (event) => {
  const activeTitle = event.target as HTMLElement;

  if (!activeTitle) {
    return;
  }

  const aindex = Number(activeTitle.dataset.index);

  if (aindex !== index) {
    titles.children[index].classList.remove('active');
    contents.children[index].classList.remove('active');

    activeTitle.classList.add('active');
    contents.children[aindex].classList.add('active');
    index = aindex;
  }
}

export default {}