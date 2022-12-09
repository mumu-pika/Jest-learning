import sum from "utils/sum";

describe("sum", () => {
  // test 与 it 同个功能
  it("加法sum测试", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
