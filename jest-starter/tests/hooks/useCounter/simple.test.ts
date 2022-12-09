/*
  先当做纯函数来写单测
  但是报错了，因为useState是需要在组件中使用的。

  Invalid hook call. Hooks can only be called inside
  of the body of a function component.
  那我们是否可以通过前面讲的 Mock 手段来处理掉 useState 呢？
  千万别这么做！
  假如 Hook 里不仅有 useState，还有 useEffect 这样的呢？
  难道你要每个 React API 都要 Mock 一遍么？
  所以我们可以通过写一个组件来进行测试
  */

// import useCounter from 'hooks/useCounter'
// describe('useCounter', () => {
//   it('可以加1', () => {
//     const [count, utils] = useCounter(0)
//     expect(count).toEqual(0)

//     utils.inc(1)
//     expect(count).toEqual(1)
//   })
// })

describe("占个位置", () => {
  it("占个位置测试, 看注释", () => {
    expect(1).toEqual(1);
  });
});
