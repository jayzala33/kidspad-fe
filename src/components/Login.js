import React, { useState } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Form, Input, Button, Typography } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { erLocalStorage } from "../store/erLocalStorage";

const { Text, Title } = Typography;
const Login = (props) => {
  const history = useHistory();
  const [isLogIn, setIsLogIn] = useState(null);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    if (values.password == "admin" && values.username == "admin") {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
    axios
      .post("/user", {
        ...values,
      })
      .then((response) => {
        erLocalStorage.setItem("/useInfo", response);
        history.push("/app");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginScreen" style={{ backgroundImage: `url("/images/background.jpg")`, display: "flex" }}>
      <div style={{ maxWidth: "500px", margin: "auto", background: "white", padding: "2rem", borderRadius: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>Login to KIDSPAD</h2>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
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
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <h2 style={{ margin: 0 }}>Or</h2>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="default"
              onClick={() => {
                history.push("/register");
              }}
            >
              Sign Up
            </Button>
          </Form.Item>
          {isLogIn == false && <Text type="danger">Please enter correct username and password</Text>}
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
