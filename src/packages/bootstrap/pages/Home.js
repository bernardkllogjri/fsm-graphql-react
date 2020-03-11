import { Wrapper } from "shared-components";
import React from "react";
import { Col, Slider, Row, Card, Badge, Rate } from "antd";

const cards = { 1: [1, 2, 3, 4], 2: [1, 2, 3, 4], 3: [1, 2, 3, 4] };

export default () => (
  <Wrapper breadcrumbs={["Home"]}>
    <Row>
      <Col sm={6}>
        Sidebar
        <div>
          <Slider range defaultValue={[10, 50]} tooltipVisible />
        </div>
      </Col>
      <Col sm={18}>
        {Object.keys(cards).map(num => (
          <Row key={num} gutter={[0, 20]}>
            {cards[num].map(c => (
              <Col sm={6} key={c}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <React.Fragment>
                      <Badge count={25} />
                      <img alt="example" src="/store.png" />
                    </React.Fragment>
                  }
                >
                  <Rate disabled allowHalf defaultValue={2.5} />
                  <Card.Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Col>
    </Row>
  </Wrapper>
);
