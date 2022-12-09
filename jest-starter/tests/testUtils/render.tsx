// tests/testUtils/render.tsx
import React, { FC } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer, RootState } from 'store/index'

/* 
  集成测试的两个关键点
  * 像真实用户那样去和组件交互
  * Mock HTTP (外部请求)

  自定义render的作用：
    创建一个使用redux的环境, 用<Wrapper /> 包裹传入的业务组件,
    并且可以让我们决定当前redux的初始状态。
*/

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: RootState
  store?: ReturnType<typeof configureStore>
}

const render = (ui: React.ReactElement, options: CustomRenderOptions) => {
  // 获取自定义的 options，options 里带有 store 内容
  const {
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = options

  // 使用 Provider 包裹
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }

  // 使用 RTL 的 render 函数
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default render
