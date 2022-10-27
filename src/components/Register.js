import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("/user", {
        ...values,
      })
      .then((response) => {
        history.push("/app");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginScreen" style={{ backgroundImage: `url("/images/background.jpg")`, display: "flex" }}>
      <div style={{ margin: "auto", background: "white", padding: "2rem", borderRadius: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} initialValues={{}}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!", whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true, message: "Please select gender!" }]}>
            <Select placeholder="Select your Role">
              <Option value="student">Student</Option>
              <Option value="teacher">Teacher</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <h2 style={{ margin: 0 }}>Or</h2>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="default"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
