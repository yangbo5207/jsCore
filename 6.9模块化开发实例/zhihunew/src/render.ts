import {newsApi} from './api'

const news = document.querySelector('#news')

if (!news) {
  throw new Error('容器元素不存在')
}

// 初始值
news.innerHTML = '数据加载中...'

newsApi().then(res => {
  const top = `
    <div class="top-container">
      ${res.top_stories.map(item => (
        `<a class="item" href="${item.url}">
          <img src="${item.image}" alt="" />
          <div>${item.title}</div>
        </a>`
      )).join('')}
    </div>
  `

  const list = `
    <div class="list-container">
      ${res.stories.map(item => (
        `<a class="item" href="${item.url}">
          <img src="${item.images[0]}" alt="" />
          <div>${item.title}</div>
        </a>`
      )).join('')}
    </div>
  `
  news.innerHTML = `${top}${list}`
})
