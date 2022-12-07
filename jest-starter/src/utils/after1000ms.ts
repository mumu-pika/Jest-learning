// src/utils/after1000ms.ts
// 使用定时器的mock
// 下面这个函数的作用是在1000ms后执行传入的回调函数

type anyFunction = (...args: any[]) => any

const after1000ms = (callback?: anyFunction) => {
  console.log('准备开始计时')
  setTimeout(() => {
    console.log("午时已到")
    console.log("已经过了1000ms, 立即执行callback")
    callback && callback()
  }, 1000)
}

export default after1000ms