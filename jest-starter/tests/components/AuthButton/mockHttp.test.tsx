// tests/components/AuthButton/mockHttp.test.tsx
// 如果想在某个测试文件中单独指定某个接口的Mock返回,
// 可以使用server.use(mockHandler)来实现

import React from 'react'
import { rest } from 'msw'
import { render, screen } from '@testing-library/react'
import AuthButton from 'components/AuthButton'
import server from '../../mocks/server'
import { UserRoleType } from 'apis/user'

// 初始化函数
const setup = (userType: UserRoleType) => {
  server.use(
    rest.get('https://mysite.com/api/role', async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          userType,
        })
      )
    })
  )
}

// 分组测试
describe('AuthButton Mock HTTP 请求', () => {
  it('可以正确展示普通用户按钮内容', async () => {
    setup('user')

    render(<AuthButton>你好</AuthButton>)

    expect(await screen.findByText('普通用户你好')).toBeInTheDocument()
  })

  it('可以正确展示管理员按钮内容', async () => {
    setup('admin')

    render(<AuthButton>你好</AuthButton>)

    expect(await screen.findByText('管理员你好')).toBeInTheDocument()
  })
})
