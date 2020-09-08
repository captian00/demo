import React, { Component } from "react";
import Top from "./top/Top.js";
import Left from "./left/Left.js";
import {Col, Row } from "reactstrap";
import Body from "./body/Body.js";
class All extends Component {
  render() {
    return (
      <div>
        <Top />
        <div>
          <Row>
            <Col sm="2">
              <Left />
            </Col>
            <Col sm="10">
              <Body />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default All;
