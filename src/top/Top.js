import React, { Component } from "react";
import TopLeft from "./TopLeft";
import TopCenter from "./TopCenter";
import TopRight from "./TopRight";
import { Col, Row } from "reactstrap";

class Top extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="2">
            <TopLeft />
          </Col>
          <Col sm="8">
            <TopCenter />
          </Col>
          <Col sm="2">
            <TopRight />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Top;
