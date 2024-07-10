---
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

## en-US

Basic Form data control. Includes layout, initial values, validation and submit.

```tsx
import { Button, Form } from '@ink/ui'
import kv from '@ink/validate'
import React from 'react'

function Input(props) {
  return <input {...props} style={{ height: 32 }} value={props.value || ''} />
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      autoComplete="off"
      labelCol={{ span: 8 }}
      name="basic"
      wrapperCol={{ span: 16 }}
      onFailed={onFailed}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rule={kv.string().required('Please input your username!')}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rule={kv.string().required('Please input your password!')}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```
