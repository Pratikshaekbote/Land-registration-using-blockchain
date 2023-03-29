import React from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";

const Form = () => {
  return (
    <>
      <div>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="vertical"
          style={{
            maxWidth: 1000,
          }}
        >
          <Form.Item
            label="Area (in sqm.)"
            name="area"
            rules={[
              {
                required: true,
                message: "Please input your Area in sqm.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "Please input your City!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: "Please input your State!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: "Please input your Country!",
              },
            ]}
          >
            <Select>
              <Select.Option value="india">India</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Price" name="price"
        rules={[
          {
            required: true,
            message: 'Please input Land Price!',
          },
        ]}>
            <InputNumber width={1000} />
          </Form.Item>
          <Form.Item label="Property PID number" name="PID"
        rules={[
          {
            required: true,
            message: 'Please input Property PID Number!',
          },
        ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Physical Survay Number" name="survay"
        rules={[
          {
            required: true,
            message: 'Please input Physical Survay Number!',
          },
        ]}>
            <Input />
          </Form.Item>

          <Form.Item label="Insert Land Image" valuePropName="fileList" name="landimage"
        rules={[
          {
            required: true,
            message: 'Please Upload Land Images!',
          },
        ]}>
            <Upload action="/" listType="picture" maxCount={3}>
              <Button icon={<UploadOutlined />}>Upload Land Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Insert AdharCard Document" valuePropName="fileList" name="adharCard"
        rules={[
          {
            required: true,
            message: 'Please Upload Adhar Card!',
          },
        ]}>
            <Upload action="/" listType="picture" maxCount={1} multiple>
              <Button icon={<UploadOutlined />}>Upload AdharCard</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add Land
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Form;
