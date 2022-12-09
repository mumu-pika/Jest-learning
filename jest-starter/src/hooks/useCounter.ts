// src/hooks/useCounter.ts
import { useState } from "react";

// min 和 max是需要传入的选项配置，可以设定计数的范围
export interface Options {
  min?: number;
  max?: number;
}

export type ValueParam = number | ((c: number) => number);

// 为了是让target的值在 min ~ max 之间
function getTargetValue(val: number, options: Options = {}) {
  const { min, max } = options;
  let target = val;
  if (typeof min === "number") {
    target = Math.max(min, target);
  }
  if (typeof max === "number") {
    target = Math.min(max, target);
  }
  return target;
}

// 计数器
function useCounter(initialValue = 0, options: Options = {}) {
  const { min, max } = options;

  const [current, setCurrent] = useState(() => {
    return getTargetValue(initialValue, {
      min,
      max,
    });
  });

  const setValue = (value: ValueParam) => {
    setCurrent((val) => {
      const target = typeof value === "number" ? value : value(val);
      return getTargetValue(target, {
        min,
        max,
      });
    });
  };

  //  Hook 很简单，就是经典的计数器，拥有增加、减少、设置和重置 4 个操作
  // 增加数值
  const inc = (delta = 1) => {
    setValue((val) => val + delta);
  };

  // 减少数值（这里默认delta传入的还是正值）
  const dec = (delta = 1) => {
    setValue((val) => val - delta);
  };

  // 直接设置值
  const set = (value: ValueParam) => {
    setValue(value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  // 这里返回的数组 [value, setValue] 对应上了
  // const [value, setValue] = useCounter(value)
  return [
    current,
    {
      inc,
      dec,
      set,
      reset,
    },
  ] as const;
}

export default useCounter;
