import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import img from "../image/img.jpg"
import './Subcriptions.css'
import {ic_wifi_tethering} from 'react-icons-kit/md/ic_wifi_tethering'
import {ic_lens} from 'react-icons-kit/md/ic_lens'
class Subcriptions extends Component {
  render() {
    return (
      <div>
          <div className="Subs">
          Subcriptions
          </div>
        <li className="li">
          <div className="ListMenu">
            <img src={img} className="img"></img>
            <p className="ml-10">VTD</p>
            <Icon icon={ic_wifi_tethering} className="red ml-10"></Icon>
          </div>
        </li>
        <li className="li">
        <div className="ListMenu">
            <img src={img} className="img"></img>
            <p className="ml-10">DVC</p>
            <Icon icon={ic_wifi_tethering} className="red ml-10"></Icon>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
           <img src={img} className="img"></img>
            <p className="ml-10">XYZ</p>
            <Icon icon={ic_lens} className="blue ml-10" size={8}></Icon>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
           <img src={img} className="img"></img>
            <p className="ml-10">ABC</p>
            <Icon icon={ic_lens} className="blue ml-10" size={8}></Icon>
          </div>
        </li>
      </div>
    );
  }
}
export default Subcriptions;
