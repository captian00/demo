import React, { Component } from "react";
import Video from "./Video";
import { Container, Col, Row } from "reactstrap";
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
  render() {
    return (
      <div>
        <Row>
          <Col sm="3">
            <Video name="Bai 1" />
          </Col>
          <Col sm="3">
            <Video name="Bai 2" />
          </Col>
          <Col sm="3">
            <Video name="Bai 3" />
          </Col>
          <Col sm="3">
            <Video name="Bai 4" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Body;
