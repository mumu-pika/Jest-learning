// tests/utils/env/doMock.test.ts
/* 
  jest.mock 会提升到整个文件最前面，这也导致我们无法再次修改 Mock 的实现。
  jest 还提供了另一个 API jest.doMock，它也会执行 Mock 操作，
  但是不会被提升。利用这个特性再加上内联 require 就可以实现多次 Mock 的效果了、
*/

describe("doMock config", () => {
  beforeEach(() => {
    // 必须重置模块, 否则无法再次应用doMock的内容
    jest.resetModules();
  });

  it("开发环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "dev",
      },
    }));

    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("dev");
  });

  it("生产环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "prod",
      },
    }));

    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("prod");
  });
});

/* 
  这里一共引用了两次utils/env, 因此要jest.resetModules
  来重置前一次引入的模块内容
*/
