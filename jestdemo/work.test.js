import Work from './work'

const work = new Work()

// Jest的钩子函数
// beforeAll 在所有测试用例之前执行
beforeAll(() => {
  console.log("新的一天开始！")
})

// beforeEach 在进入每一个测试用例之前执行
beforeEach(() => {
  console.log("康康！")
})

// 分组测试用例
describe ("分组测试用例, 工作组", () => {
  test("test work1", () => {
    work.do()
    console.log(work.status)
    expect(work.status).toEqual('皮卡在恰饭')
  })

  test("test work2", () => {
    work.setWorker("帅惠")
    work.setTask(1)
    work.do()
    console.log(work.status)
    expect(work.status).toEqual('帅惠在工作')
  })
})


test("test loaf1", () => {
  work.setWorker("帅惠")
  work.setTask(2)
  work.do()
  console.log(work.status)
  expect(work.status).toEqual('帅惠在摸鱼')
})


// afterEach 在每个测试用例执行完执行
afterEach(() => {
  console.log('不错不错')
})

// afterAll 在所有测试用例执行完最后执行
afterAll(() => {
  console.log("美好的一天结束啦~")
})