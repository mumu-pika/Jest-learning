// // tests/store/user/reducer.test.ts
// import reducer, { updateUserName } from 'store/user/reducer'

// /* 
//   action的测试
//   reducer 本身也是纯函数，它的作用就是改变数据状态，
//   所以这里我们在第一个参数传入当前状态，在第二个参数传入 action， 
//   最后 expect 一下返回的新状态 currentState 就完成测试了。
// */
// describe('reducer', () => {
//   describe('测试 reducer', () => {
//     describe('updateUserName', () => {
//       it('可以更新用户姓名', () => {
//         // 测试 reducer 纯函数
//         const currentState = reducer(
//           {
//             id: '',
//             name: '',
//             age: 0,
//             status: '',
//           },
//           updateUserName({ name: 'hello' })
//         )

//         expect(currentState.name).toEqual('hello')
//       })
//     })
//   })
// })


// tests/store/user/reducer.test.ts
import reducer, { updateUserName } from "store/user/reducer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import server from "../../mocks/server";
import { rest } from "msw";
import { fetchUserThunk } from "store/user/thunks"; 

// 初始化函数
const setupHttp = (name?: string, age?: number) => {
  server.use(
    rest.get("https://mysite.com/api/users", async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "1",
          name: name || "Jack",
          age: age || 18,
        })
      );
    })
  );
};

// 非常不推荐这样去测 redux 的代码
describe("reducer", () => {
  describe("测试 reducer", () => {
    describe("fetchUserThunk", () => {
      it("可以获取用户", async () => {
        // Mock Http 返回
        setupHttp("Mary", 10);

        // Mock redux 的 store
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore({
          id: "",
          name: "",
          age: 0,
          status: "",
        });

        // 开始 dispatch
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = await store.dispatch(fetchUserThunk());

        expect(data.payload).toEqual({
          id: "1",
          name: "Mary",
          age: 10,
        });

        // 失败，因为 redux-mock-store 只能测 action 部分
        // 详情：https://github.com/reduxjs/redux-mock-store/issues/71
        // expect(store.getState()).toEqual({
        //   id: "1",
        //   name: "Mary",
        //   age: 10,
        //   status: "complete",
        // });
      });
    });
  });
});
