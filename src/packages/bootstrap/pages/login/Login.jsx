import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

export const Login = ({ inputLayout, tailFormItemLayout }) => (
  <>
    <Form.Item name="loginName" {...inputLayout}>
      <Input size="large" placeholder="Name" />
    </Form.Item>
    <Form.Item name="loginPassword" {...inputLayout}>
      <Input.Password size="large" placeholder="Password" />
    </Form.Item>
    <Form.Item name="agreement" {...tailFormItemLayout}>
      <Checkbox>Keep me signed in this computer</Checkbox>
    </Form.Item>
    <Form.Item {...tailFormItemLayout}>
      <Button className="big-btn" type="primary" size="large">
        Sign in
      </Button>
      <span style={{ margin: 5 }}>OR</span>
      <img
        className="margin-5"
        width="36"
        alt="facebook"
        src="/logos/facebook.png"
      ></img>
      <img
        className="margin-5"
        width="36"
        alt="facebook"
        src="/logos/twitter.png"
      ></img>
      <img
        className="margin-5"
        width="36"
        alt="facebook"
        src="/logos/instagram.png"
      ></img>
    </Form.Item>
  </>
);
