import { Layout } from "antd";
import React from "react";
import { Header, Main, Footer } from "./components";
import PropTypes from "prop-types";

const Wrapper = ({ hasSearch, ...props }) => (
  <Layout>
    <Header hasSearch={hasSearch} />
    <Main {...props} />
    <Footer />
  </Layout>
);

Wrapper.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  noSearch: PropTypes.bool
};

Wrapper.defaultPropTypes = {
  hasSearch: true
};

export { Wrapper };
