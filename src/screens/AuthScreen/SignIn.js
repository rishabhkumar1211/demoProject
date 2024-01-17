import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    // Implement your logic for handling forgot password
    console.log("Forgot password link clicked");
  };

  const onFinish = (values) => {
    // Handle form submission (signin)
    console.log("Received values:", values);
  };

  const handleSignInClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="signin-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="heading-label">Hello! let's get started</span>
        <span className="desc-label">Sign in to continue.</span>
        <Form
          name="signin-form"
          className="centered-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="Username">
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password
              placeholder="Password"
              className="custom-password-input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signin-button custom-btn-label"
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
          </Form.Item>
          <div className="row-flexed">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="custom-checkbox-label">
                Keep me signed in
              </Checkbox>
            </Form.Item>
            <a
              href="fotgotpassword"
              onClick={handleForgotPassword}
              className="pasword-label"
            >
              Forgot Password?
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
