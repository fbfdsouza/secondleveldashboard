import React, { Component } from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  caseByAnalyst = props => {
    const { casesArray, name } = props;
    if (casesArray.length > 0) {
      const analystCasesArray = casesArray.filter(
        el => el.analystName === name
      );
      return analystCasesArray;
    }
  };

  CaseList2 = items => {
    let startCaseCounter = 0,
      endCaseCounter = 5,
      increment = 5,
      caseListArray = [];
    if (items !== undefined) {
      while (startCaseCounter < items.length) {
        const listUpTo5Cases = items
          .slice(startCaseCounter, endCaseCounter)
          .map(caseItem => caseItem);
        startCaseCounter += increment;
        endCaseCounter += increment;

        caseListArray.push(<CaseList list={listUpTo5Cases} key={increment} />);
      }
    }

    return caseListArray;
  };

  render() {
    this.CaseList2(this.caseByAnalyst(this.props));
    //this.caseByAnalyst(this.props);
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
            {this.CaseList2(this.caseByAnalyst(this.props)).map(item => item)}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
