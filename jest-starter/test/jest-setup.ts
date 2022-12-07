// tests/jest-setup.ts
import 'jest-location-mock'


// 去除log中打印出来的很多冗余信息
import mockConsole from 'jest-mock-console'
mockConsole() // same as `mockConsole(['log','warn','error'])


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
