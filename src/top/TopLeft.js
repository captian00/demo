import React, { Component} from 'react';
import { Icon } from "react-icons-kit";
import {bars} from 'react-icons-kit/fa/bars';
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import '../top/TopLeft.css';
class TopLeft extends Component {
    render() {
        return (
            <div className = "TopLeft">
                <Icon className="mr-10" icon={bars} size={32}></Icon>
                <Icon className="YouTube mr-5" icon={youtubePlay} size={32}></Icon>
                <p className="mt-0 ml-0">YouTubeVN</p>
            </div>
        )
    }
}
export default TopLeft;