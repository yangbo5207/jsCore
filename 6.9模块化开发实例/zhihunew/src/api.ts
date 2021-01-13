import {get} from './request'
import news, {Newspaper} from './data'



export function newsApi() {
  // 本来应该如此请求接口，但是由于跨域限制，因此我们这里模拟该接口的行为返回数据 mock
  // return get<any>('https://news-at.zhihu.com/api/4/news/latest')
  return new Promise<Newspaper>((resolve) => {
    setTimeout(() => {
      resolve(news)
    }, 1000)
  })
}

export function other1Api(url: string) {}

export function other2Api(url: string) {}

export function other3Api(url: string) {}

// 实践中可能还会有更多 api 请求