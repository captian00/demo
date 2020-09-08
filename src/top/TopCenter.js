import React, { Component } from "react";
import "./TopCenter.css";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
class TopCenter extends Component {
  render() {
    return (
      <div className="TopCenter">
        <div class="md-form mt-0 Search pdt-10">
          <InputGroup>
            <Input placeholder="Search" style={{width: "600px"}}/>
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Icon icon={search} size={18}></Icon>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  }
}
export default TopCenter;
