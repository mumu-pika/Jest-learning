// src/App.tsx
import React from 'react'
import Title from 'components/Title'
import AuthButton from 'components/AuthButton'


const App = () => {
  return (
    <div>
      <section>
        {/* <Title type="small" title="小字" />
        <Title type="large" title="大字" /> */}
        <AuthButton>登录</AuthButton>
      </section>
    </div>
  )
}

export default App
