import Layout from 'antd/lib/layout/layout'
import HeaderComp from '../components/HeaderComp'
import { Content, Footer } from 'antd/lib/layout/layout'
import LoginForm from '../components/LoginForm'

interface Props {}

const Home: React.FC<Props> = (props) => {
  const onFinish = () => {}

  return (
    <>
      <Layout>
        <HeaderComp />
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <div
            className="site-layout-content"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              margin: '2rem',
            }}
          >
            <LoginForm />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Dola Copyright 2022</Footer>
      </Layout>
    </>
  )
}

export default Home
