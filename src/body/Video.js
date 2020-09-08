import React, { Component } from "react";
import img from "../image/img.jpg";
class Video extends Component {
  render() {
    return (
      <div>
        <img src={img} width="300px" height="300px"></img>
        <div>{this.props.name}</div>
        <div>Thông Tin </div>
      </div>
    );
  }
}
export default Video;
