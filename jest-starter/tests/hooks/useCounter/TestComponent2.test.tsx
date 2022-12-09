// tests/hooks/useCounter/TestComponent.test.tsx
// 测试组件, 测试useCounter
/* 
  创建setup函数, 在里面生成组件, 同时把useCounter的结果返回出来
*/

import useCounter from "hooks/useCounter";
import { act, render } from "@testing-library/react";
import React from "react";

const setup = (initialNumber: number) => {
  const returnVal = {};

  const UseCounterTest = () => {
    const [counter, utils] = useCounter(initialNumber);

    Object.assign(returnVal, {
      counter,
      utils,
    });

    return null;
  };

  render(<UseCounterTest />);
  return returnVal;
};

describe("useCounter", () => {
  it("可以做加法", () => {
    const userCounterData: any = setup(0);
    act(() => {
      userCounterData.utils.inc(1);
    });

    expect(userCounterData.counter).toEqual(1);
  });
  it("可以做减法", () => {
    const userCounterData: any = setup(0);
    act(() => {
      userCounterData.utils.dec(1);
    });
    expect(userCounterData.counter).toEqual(-1);
  });
  it("可以设置值", () => {
    const userCounterData: any = setup(0);
    act(() => {
      userCounterData.utils.set(666);
    });
    expect(userCounterData.counter).toEqual(666);
  });
  it("可以重置值", () => {
    const userCounterData: any = setup(0);
    act(() => {
      userCounterData.utils.inc(10);
      userCounterData.utils.reset();
    });
    expect(userCounterData.counter).toEqual(0);
  });
});

/* 
  这个方法没有采用和组件交互的形式来测试,
  只是借用了组件的环境来生成useCounter结果
  */
