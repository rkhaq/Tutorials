import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const onFinish = () => {}
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Harap masukkan email anda',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='"site-form-item-icon' />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Harap masukkan password anda',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='"site-form-item-icon' />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ingatkan saya</Checkbox>
          </Form.Item>

          <a href="" className="login-form-forgot">
            Lupa password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Masuk
          </Button>
          <span> atau </span>
          <a href="">Daftar sekarang!</a>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
