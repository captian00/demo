import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/fa/bell";
import { videoCamera } from "react-icons-kit/fa/videoCamera";
import {th} from 'react-icons-kit/fa/th'
import img from '../image/img.jpg';
import './TopRight.css'
class TopRight extends Component {
  render() {
    return (
      <div className="TopRight pdt-10">
        <Icon className="mr-10" size={20} icon={videoCamera}></Icon>
        <Icon className="mr-10" size={20} icon={th}></Icon> 
        <Icon className="mr-10" size={20} icon={bell}></Icon>
        <div className="img">
          <img src={img} width={20} height={20} ></img>
        </div>
      </div>
    );
  }
}
export default TopRight;
