// src/utils/objToSearchStr.ts
const objToSearchStr = (obj: Record<string, string | number>) => {
  // ['a = 1', 'b = 2']
  const strPairs: string[] = []
  // Object.entries() 可以转化一个obj为arr
  Object.entries(obj).forEach(keyValue => {
    const [key, value] = keyValue // [a, 1]
    const pair = key + '=' + String(value) // a=1
    strPairs.push(pair) // ['a = 1', 'b = 2']
  }, [])

  return strPairs.join('&') // a=1&b=2
}

export default objToSearchStr