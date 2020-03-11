import { Wrapper } from "shared-components";
import React, { useState } from "react";
import { Form, Radio, Col, Row } from "antd";
import { Login, Register } from "./login";

export default Form.create()(() => {
  const [form] = Form.useForm();

  const [type, setType] = useState("login");
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 24
      }
    }
  };

  const inputLayout = {
    wrapperCol: { span: 19 }
  };
  console.log(form.getFieldsValue(["loginPassword", "loginName"]));
  return (
    <Wrapper breadcrumbs={["Home", "Login and Registration"]} hasSearch={false}>
      <Row>
        <Col xs={2} sm={4} md={6} lg={9} xl={9}></Col>
        <Col xs={20} sm={16} md={12} lg={7} xl={7}>
          <Form form={form} layout="horizontal">
            <Form.Item name="type">
              <Radio.Group
                defaultValue="login"
                buttonStyle="solid"
                size="large"
              >
                <Radio.Button value="login">I have an account</Radio.Button>
                <Radio.Button value="register">I'm a new costumer</Radio.Button>
              </Radio.Group>
            </Form.Item>
            {type === "login" ? (
              <Login {...{ inputLayout, tailFormItemLayout }} />
            ) : (
              <Register {...{ inputLayout, tailFormItemLayout }} />
            )}
          </Form>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>
      </Row>
    </Wrapper>
  );
});
