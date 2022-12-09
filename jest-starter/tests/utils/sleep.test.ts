// test/utils/sleep.test.ts

/* 
   Jest 的 Fake Timer 就是把 setTimeout 等延时 API 的回调
   都收集到自己的 Queue 里， 你可以随时随地清算这个 Queue，
   而不需要等 XX 毫秒后再一个个执行。

*/

import sleep from "utils/sleep";

describe("sleep", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以睡眠 1000ms后执行", async () => {
    const callback = jest.fn();
    const act = async (callback: () => void) => {
      await sleep(1000);
      callback();
    };

    const promise = act(callback);

    // callback 还未调用
    expect(callback).not.toHaveBeenCalled();

    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers();

    await promise;
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
