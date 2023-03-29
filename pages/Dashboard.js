import { React, useState } from "react";
import { Card, Col, Row, Button, Modal, Form, Input,Checkbox,Space } from "antd";
import Navbar from "../components/navbar/Navbar";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const [modalseller, setModalSeller] = useState(false);
  const [modalbuyer, setModalBuyer] = useState(false);
  const [modalinstpector, setModalInspector] = useState(false);
  return (
    <div>
      <Navbar />
      <Row gutter={16}>

        <Col span={8} onClick={() => setModalSeller(true)} className="pointer shadow-lg shadow-black" >
          <Card title="Seller Login" bordered={false}>
            <p>Discription</p>
           
          </Card>
        </Col>
        <Col span={8} onClick={() => setModalBuyer(true)} className="pointer">
          <Card title="Buyer Login" bordered={false}>
            <p>Discription</p>
           
          </Card>
        </Col>
        <Col span={8} onClick={() => setModalInspector(true)} className="pointer">
          <Card title="Land Inspector" bordered={false}>
            <p>Discription</p>
         
          </Card>
        </Col>
      </Row>

      <Modal
        title="Seller Login"
        centered
        footer={null}
        open={modalseller}
        onOk={() => setModalSeller(false)}
        onCancel={() => setModalSeller(false)}
      >
        <Button type="primary" className="mb-24">
              Wallet Connect
            </Button>

        <Form
        layout="vertical"
          name="basic"
         
          initialValues={{
            remember: true,
          }} autoComplete="off"
        >
             

          <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

    
          <Form.Item
            wrapperCol={{
            }}
          >
              <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Buyer Login"
        centered
        footer={null}
        open={modalbuyer}
        onOk={() => setModalBuyer(false)}
        onCancel={() => setModalBuyer(false)}
      >
        <Button type="primary" className="mb-24">
              Wallet Connect
            </Button>

        <Form
        layout="vertical"
          name="basic"
         
          initialValues={{
            remember: true,
          }} autoComplete="off"
        >
             

          <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

    
          <Form.Item
            wrapperCol={{
            }}
          >
              <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Buyer Login"
        centered
        footer={null}
        open={modalinstpector}
        onOk={() => setModalInspector(false)}
        onCancel={() => setModalInspector(false)}
      >
        <Button type="primary" className="mb-24">
              Wallet Connect
            </Button>

            <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      <Form.Item
            wrapperCol={{
            }}
          >
              <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            </Space>
          </Form.Item>
      </Form.Item>
    </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;
