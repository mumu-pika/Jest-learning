// tests/components/User/index.test.tsx
import React from 'react'
import server from '../../mocks/server'
import { rest } from 'msw'
import render from '../../testUtils/render'
import { fireEvent, screen } from '@testing-library/react'
import User from 'components/User'

/* 
  这个集成测试做了4件事：
  1、Mock http 返回
  2、渲染<User />组件
  3、点击按钮拉取用户信息
  4、做断言

  而且这些操作没有一项是和状态管理有直接关联的，唯一有关联的就是传入的初始 state。
  也就是说，无论底层的状态管理用了 redux-saga，还是 dva， 还是 mobx，测试用例完全不关注，
  它只关注组件是否正确渲染最终结果。这其实也是普通用户的使用行为，他可不关注代码用了什么库，只管页面变化。
*/

// 初始化 Http 请求
const setupHttp = (name?: string, age?: number) => {
  server.use(
    rest.get('https://mysite.com/api/users', async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: '1',
          name: name || 'Jack',
          age: age || 18,
        })
      )
    })
  )
}

describe('User', () => {
  it('点击可以正常获取用户列表', async () => {
    setupHttp('Mary', 10)

    render(<User />, {
      preloadedState: {
        user: {
          id: '',
          name: '',
          age: 10,
          status: '',
        },
      },
    })

    // 还没开始请求
    expect(screen.getByText('无用户信息')).toBeInTheDocument()

    // 开始请求
    fireEvent.click(screen.getByText('加载用户'))

    // 请求结束
    expect(await screen.findByText('ID：1')).toBeInTheDocument()
    expect(screen.getByText('姓名：Mary')).toBeInTheDocument()
    expect(screen.getByText('年龄：10')).toBeInTheDocument()

    expect(screen.queryByText('加载中...')).not.toBeInTheDocument()
  })
})
