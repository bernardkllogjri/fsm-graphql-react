import React from "react";
import { Layout, Input, Row, Col } from "antd";
import { Select } from "antd";

export const Header = ({ hasSearch }) => (
  <Layout.Header
    style={{ background: "linear-gradient(90deg,#1da57a,#369E9D)" }}
  >
    {hasSearch && (
      <Row gutter={[20]}>
        <Col sm={12}>
          <Input.Search
            placeholder="Name"
            onSearch={value => console.log(value)}
          />
        </Col>
        <Col sm={12}>
          <Select defaultValue="City" style={{ width: "100%" }}>
            <Select.Option value="city">City</Select.Option>
          </Select>
        </Col>
      </Row>
    )}
  </Layout.Header>
);
