// tests/jest-setup.ts
import 'jest-location-mock'

// 去除log中打印出来的很多冗余信息
import mockConsole from 'jest-mock-console'
mockConsole() // same as `mockConsole(['log','warn','error'])

// @testing-library/jest-dom 提供了许多关于DOM的 Matcher API
import '@testing-library/jest-dom'

// 使用mockServer
import server from './mocks/server'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())



// **************************************************//
// 为了localStorage的测试, 这里不用这个了
// Object.defineProperty(global, 'localStorage', {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {}
//     }
//   },
//   configurable: true,
// })
