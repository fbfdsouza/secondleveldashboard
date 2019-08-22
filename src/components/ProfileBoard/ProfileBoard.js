import React, { Component } from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList";
import CaseItem from "../CaseItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { settings } from "../../utils";

class ProfileBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: []
    };
  }

  getColorByPriority = priority => {
    if (priority < 50) {
      return "green";
    } else if (priority >= 50 && priority < 75) {
      return "orange";
    } else {
      return "red";
    }
  };

  upToGroupOf5Cases = array => {
    let groupOf5 = [],
      size = 5,
      caseListIndex = 0;

    while (array.length > 0) {
      groupOf5.push(
        <CaseList key={caseListIndex}>{array.splice(0, size)}</CaseList>
      );
      caseListIndex++;
    }

    return groupOf5;
  };

  extractCases = array => {
    const items = [];
    let color = "";

    if (array !== undefined)
      if (array.length > 0) {
        for (const [index, value] of array.entries()) {
          let iconDisplay = "block";

          value.checked === true
            ? (iconDisplay = "block")
            : (iconDisplay = "none");

          color = this.getColorByPriority(value.casePriority);

          items.push(
            <CaseItem
              key={index}
              caseNumber={value.caseNumber}
              caseClient={value.clientName}
              color={color}
              icon={faCheck}
              iconDisplay={iconDisplay}
            />
          );
        }
      }

    return items;
  };

  caseByAnalyst = props => {
    const { casesArray, name } = props;
    if (casesArray.length > 0) {
      const analystCasesArray = casesArray.filter(
        el => el.analystName === name
      );
      return analystCasesArray;
    }
  };

  render() {
    const { children, name, headerColor, borderColor, casesArray } = this.props;
    return (
      <div className="profile_container" style={{ border: borderColor }}>
        <div
          className="profile_container_header"
          style={{ backgroundColor: headerColor }}
        >
          <div>{children}</div>
          <div>{name}</div>
        </div>
        <div className="profile_container_content">
          <Slider {...settings}>
            {this.upToGroupOf5Cases(
              this.extractCases(
                casesArray === undefined ? [] : this.caseByAnalyst(this.props)
              )
            )}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
