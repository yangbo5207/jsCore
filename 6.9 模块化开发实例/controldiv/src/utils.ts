export const getStyle = (ele: Element, key: any) => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null)[key]
  }
  // @ts-ignore for IE
  return ele.currentStyle[key]
}