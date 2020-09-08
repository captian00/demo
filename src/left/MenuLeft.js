import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/fa/home";
import { history } from "react-icons-kit/fa/history";
import { clockO } from "react-icons-kit/fa/clockO";
import {angleDown} from 'react-icons-kit/fa/angleDown'
import {ic_thumb_up} from 'react-icons-kit/md/ic_thumb_up'
import {ic_video_library} from 'react-icons-kit/md/ic_video_library'
import {ic_subscriptions} from 'react-icons-kit/md/ic_subscriptions'
import './MenuLeft.css'
class MenuLeft extends Component {
  render() {
    return (
      <div>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={home}></Icon>
            <p className="ml-10">Home</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={home}></Icon>
            <p className="ml-10">Trending</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={ic_subscriptions}></Icon>
            <p className="ml-10">Subscriptions</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={ic_video_library}></Icon>
            <p className="ml-10">Library</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={history}></Icon>
            <p className="ml-10">History</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={home}></Icon>
            <p className="ml-10">Your videos</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={clockO}></Icon>
            <p className="ml-10">Watch later</p>
          </div>
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={ic_thumb_up}></Icon>
            <p className="ml-10">Liked videos</p>
          </div >
        </li>
        <li className="li">
          <div className="ListMenu">
            <Icon size={16} icon={angleDown}></Icon>
            <p className="ml-10">Show more</p>
          </div>
        </li>
      </div>
    );
  }
}
export default MenuLeft;
