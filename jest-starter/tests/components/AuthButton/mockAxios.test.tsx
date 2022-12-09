// tests/components/AuthButton/mockAxios.test.tsx

import React from 'react'
import axios from 'axios'
import { render, screen } from '@testing-library/react'
import AuthButton from 'components/AuthButton'

// 更偏向细节
describe('AuthButton Mock Axios', () => {
  it('可以正确展示普通用户按钮内容', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      // 其他实现..
      data: { userType: 'user' },
    })

    render(<AuthButton>你好</AuthButton>)

    expect(await screen.findByText('普通用户你好')).toBeInTheDocument()
  })
})

describe('AuthButton Mock Axios', () => {
  it('可以正确展示管理员按钮内容', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      // 其他实现..
      data: { userType: 'admin' },
    })

    render(<AuthButton>你好</AuthButton>)

    expect(await screen.findByText('管理员你好')).toBeInTheDocument()
  })
})
