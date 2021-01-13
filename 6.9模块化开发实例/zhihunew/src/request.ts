// 简易版，未考虑参数情况，请勿运用于实践
export function get<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest()
    XHR.open('GET', url, true)
    XHR.send()

    XHR.onreadystatechange = () => {
      if (XHR.readyState == 4) {
        if (XHR.status == 200) {
          try {
            resolve(JSON.parse(XHR.responseText))
          } catch(e) {
            reject(e)
          }
        } else {
          reject(new Error(XHR.statusText))
        }
      }
    }
  })
}