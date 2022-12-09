// tests/hooks/useCounter/TestComponent.test.tsx
// 测试组件, 测试useCounter

import useCounter from "hooks/useCounter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

// 测试组件
const UseCounterTest = () => {
  const [counter, { inc, set, dec, reset }] = useCounter(0);
  return (
    <section>
      <div>Counter: {counter}</div>
      <button onClick={() => inc(1)}>inc(1)</button>
      <button onClick={() => dec(1)}>dec(1)</button>
      <button onClick={() => set(10)}>set(10)</button>
      <button onClick={reset}>reset()</button>
    </section>
  );
};

describe("useCounter", () => {
  it("可以做加法", async () => {
    // 渲染刚刚的测试组件
    render(<UseCounterTest />);

    // 获取到加法加1的那个按钮
    const incBtn = screen.getByText("inc(1)");

    await userEvent.click(incBtn);

    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
  it("可以做减法", async () => {
    // 渲染刚刚的测试组件
    render(<UseCounterTest />);

    // 获取到加法加1的那个按钮
    const decBtn = screen.getByText("dec(1)");

    await userEvent.click(decBtn);

    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });

  it("可以设置值", async () => {
    // 渲染刚刚的测试组件
    render(<UseCounterTest />);

    // 获取到加法加1的那个按钮
    const setBtn = screen.getByText("set(10)");

    await userEvent.click(setBtn);

    expect(screen.getByText("Counter: 10")).toBeInTheDocument();
  });

  it("可以重置值", async () => {
    // 渲染刚刚的测试组件
    render(<UseCounterTest />);

    // 获取到加法加1的那个按钮
    const incBtn = screen.getByText("inc(1)");
    const resetBtn = screen.getByText("reset()");

    await userEvent.click(incBtn);
    await userEvent.click(resetBtn);

    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });
});

/*
  上面的测试方法, 可行, 不过由于因为要用<button/>组件来绑定触发,
  相对来说比较麻烦一点，我们可以通过创建一个setup函数来直接操作
  inc, dec, set 和 reset这几个函数
*/
