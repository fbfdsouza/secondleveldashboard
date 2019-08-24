import React, { PureComponent } from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../utils";

class ProfileBoard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cases: []
    };
  }

  caseByAnalyst = props => {
    const { casesArray, name } = props;
    if (casesArray.length > 0) {
      const analystCasesArray = casesArray.filter(
        el => el.analystName === name
      );
      return analystCasesArray;
    }
  };

  getListOfArraysPerAnalyst = items => {
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
    const { children, name, headerColor, borderColor } = this.props;
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
            {this.getListOfArraysPerAnalyst(this.caseByAnalyst(this.props)).map(
              item => item
            )}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
