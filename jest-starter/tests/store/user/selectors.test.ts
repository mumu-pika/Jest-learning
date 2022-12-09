// tests/store/user/selectors.test.ts
import { selectUser, selectUserFetchStatus } from "store/user/selectors";

// 这里写的selector的单测, 这样的纯函数的单测相对简单
describe("selector", () => {
  describe("selectUser", () => {
    it("可以获取用户信息", () => {
      expect(
        selectUser({
          user: {
            id: "1",
            name: "Jack",
            age: 19,
            status: "complete",
          },
        })
      ).toEqual({
        id: "1",
        name: "Jack",
        age: 19,
      });
    });
  });

  describe("selectUserFetchStatus", () => {
    it("可以获取加载状态", () => {
      expect(
        selectUserFetchStatus({
          user: {
            id: "1",
            name: "Jack",
            age: 19,
            status: "loading",
          },
        })
      ).toEqual("loading");
    });
  });
});
