// tests/components/AuthButton/simple.test.tsx

import React from "react"
import { render, screen } from '@testing-library/react'
import AuthButton from "components/AuthButton"

describe('AuthButton', () => {
  it ('可以正常展示', () => {
    render(<AuthButton>登录</AuthButton>)

    // 不够严谨, 如果getByText返回的是一个null, 也会通过测试
    // expect(screen.getByText('登录')).toBeDefined()

    expect(screen.getByText('登录')).toBeInTheDocument()


  })
})