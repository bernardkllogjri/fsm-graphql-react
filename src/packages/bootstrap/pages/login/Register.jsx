import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

export const Register = ({ inputLayout, tailFormItemLayout }) => (
  <>
    <Form.Item {...inputLayout}>
      <Input size="large" placeholder="Name" />
    </Form.Item>
    <Form.Item {...inputLayout}>
      <Input size="large" placeholder="Email" />
    </Form.Item>
    <Form.Item {...inputLayout}>
      <Input.Password size="large" placeholder="Password" />
    </Form.Item>
    <Form.Item
      name="agreement"
      className="lineHeight-1-control"
      {...tailFormItemLayout}
    >
      <Checkbox>Keep me signed in this computer</Checkbox>
    </Form.Item>
    <Form.Item
      name="subscribe"
      className="lineHeight-1-control"
      {...tailFormItemLayout}
    >
      <Checkbox>Subscribe for info in the latest deals</Checkbox>
    </Form.Item>
    <Form.Item {...tailFormItemLayout}>
      <Button className="big-btn" type="primary" size="large">
        Sign up
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
