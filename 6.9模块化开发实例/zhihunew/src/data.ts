export interface Story {
  ga_prefix: string,
  hint: string,
  id: number,
  image_hue: string,
  title: string,
  type: number,
  url: string
}

export interface TopStore extends Story {
  image: string
}

export interface ListStore extends Story {
  images: string[]
}

export interface Newspaper {
  date: string,
  stories: ListStore[]
  top_stories: TopStore[]
}

const news: Newspaper = { 
  "date": "20210112", 
  "stories": [
    { "image_hue": "0xb37b99", "title": "在儿童教育中该不该运用惩罚？怎么用？", "url": "https://daily.zhihu.com/story/9731933", "hint": "鸽子Gezi · 3 分钟阅读", "ga_prefix": "011207", "images": ["https://pic4.zhimg.com/v2-23d60782cb5b0b39698364438a24547b.jpg?source=8673f162"], "type": 0, "id": 9731933 }, 
    { "image_hue": "0x2f3964", "title": "中国不同城市的夜景都有哪些特色？", "url": "https://daily.zhihu.com/story/9731939", "hint": "星球研究所 · 8 分钟阅读", "ga_prefix": "011207", "images": ["https://pic1.zhimg.com/v2-c99ea0a523f595b142380603b7086a78.jpg?source=8673f162"], "type": 0, "id": 9731939 }, 
    { "image_hue": "0x0c729e", "title": "在游戏公司的音频部门工作是一种怎样的体验？", "url": "https://daily.zhihu.com/story/9731921", "hint": "腾讯天美工作室群 · 8 分钟阅读", "ga_prefix": "011207", "images": ["https://pic3.zhimg.com/v2-9013f69bfdf8c61b3232c43ee55971cb.jpg?source=8673f162"], "type": 0, "id": 9731921 }, 
    { "image_hue": "0x241e19", "title": "如果不得已要熬夜，怎么将熬夜的伤害减到最轻？", "url": "https://daily.zhihu.com/story/9731911", "hint": "浩浩耗 · 2 分钟阅读", "ga_prefix": "011207", "images": ["https://pic4.zhimg.com/v2-d327b0dcdabff3ad1121900dd26ec646.jpg?source=8673f162"], "type": 0, "id": 9731911 }, 
    { "image_hue": "0x342a18", "title": "哪双球鞋适合春节穿？", "url": "https://daily.zhihu.com/story/9731924", "hint": "Ricki · 6 分钟阅读", "ga_prefix": "011207", "images": ["https://pic2.zhimg.com/v2-388a92dae4d8c9fe3423ef2a02c25f06.jpg?source=8673f162"], "type": 0, "id": 9731924 }, 
    { "image_hue": "0x959199", "title": "瞎扯 · 如何正确地吐槽", "url": "https://daily.zhihu.com/story/9731914", "hint": "VOL.2569", "ga_prefix": "011206", "images": ["https://pic1.zhimg.com/v2-6e6a28ec3807dd74a29f4502c5bb25ce.jpg?source=8673f162"], "type": 0, "id": 9731914 }
  ], 
  "top_stories": [
    { "image_hue": "0x45252b", "hint": "作者 / 混乱博物馆", "url": "https://daily.zhihu.com/story/9731891", "image": "https://pic1.zhimg.com/v2-ca39463c945a2d8decc21575a42edcf0.jpg?source=8673f162", "title": "人类可以只吃肉不吃菜吗？", "ga_prefix": "011107", "type": 0, "id": 9731891 }, 
    { "image_hue": "0x402d39", "hint": "作者 / Justin Lee", "url": "https://daily.zhihu.com/story/9731821", "image": "https://pic2.zhimg.com/v2-41051830be11f2cecb10dad435d67f40.jpg?source=8673f162", "title": "法国人很浪漫，或许只是一种错误的刻板印象？", "ga_prefix": "010907", "type": 0, "id": 9731821 }, 
    { "image_hue": "0x2a301e", "hint": "作者 / 知乎用户", "url": "https://daily.zhihu.com/story/9731797", "image": "https://pic1.zhimg.com/v2-20daa7834321aee53f4a87ca2907b596.jpg?source=8673f162", "title": "接到了不同的 OFFER 应该怎么比较？", "ga_prefix": "010807", "type": 0, "id": 9731797 }, 
    { "image_hue": "0x999391", "hint": "作者 / Derrick Zhang", "url": "https://daily.zhihu.com/story/9731703", "image": "https://pic4.zhimg.com/v2-da79a55f96ace676c433a7c5adde99ab.jpg?source=8673f162", "title": "2021 年了，你还愿意买 Kindle 吗？", "ga_prefix": "010607", "type": 0, "id": 9731703 }, 
    { "image_hue": "0x172121", "hint": "作者 / 苏澄宇", "url": "https://daily.zhihu.com/story/9731647", "image": "https://pic2.zhimg.com/v2-ef49f243658edb316fd306be39e2f9be.jpg?source=8673f162", "title": "野生动物吃鱼不会被刺卡住吗？", "ga_prefix": "010407", "type": 0, "id": 9731647 }
  ] 
}

export default news;