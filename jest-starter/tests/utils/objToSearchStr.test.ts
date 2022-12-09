// tests/utils/objToSearchStr.test.ts
import objToSearchStr from "utils/objToSearchStr";

describe("objToSearchStr", () => {
  it("可以将对象转化为查询参数字符串", () => {
    expect(
      objToSearchStr({
        a: 1,
        b: 2,
      })
    ).toEqual("a=1&b=2");
  });
});
