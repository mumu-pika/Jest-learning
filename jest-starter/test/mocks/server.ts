// 使用handlers.ts中的handler 并创建mockServer 导出
// Mock Service Worker 是一个 API 模拟库，它使用 Service Worker API 来拦截实际请求
import { setupServer } from 'msw/node'
import handlers from './handlers'

const server = setupServer(...handlers)

export default server
