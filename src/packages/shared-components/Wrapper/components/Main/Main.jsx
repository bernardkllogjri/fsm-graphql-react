import React from "react";
import { Layout, Breadcrumb } from "antd";

export const Main = ({ breadcrumbs, children }) => (
  <Layout.Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
    <div style={{ padding: 24, background: "#fff" }}>
      <Breadcrumb style={{ padding: 24, paddingLeft: 0 }}>
        {breadcrumbs.map((br, i) => (
          <Breadcrumb.Item key={`${i}`}>{br}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      {children}
    </div>
  </Layout.Content>
);
