import React, { Component } from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList/CaseList";
import CaseItem from "../CaseItem/CaseItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "../../utils/API";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class ProfileBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: []
    };
  }

  extractCases = array => {
    const items = [];
    let color = "";

    if (array.length > 0) {
      for (const [index, value] of array.entries()) {
        let iconDisplay = "block";
        if (value.checked !== true) {
          iconDisplay = "none";
        }
        if (value.casePriority < 50) {
          color = "green";
        } else if (value.casePriority >= 50 && value.casePriority < 75) {
          color = "orange";
        } else {
          color = "red";
        }
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

  async componentDidMount() {
    let casesData = await API.get("/cases", {
      params: {
        results: 1,
        inc: "caseNumber,analystName,clientName,casePriority"
      }
    });

    const analystCasesArray = casesData.data.filter(
      el => el.analystName === this.props.name
    );

    this.setState({
      cases: analystCasesArray
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

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
            {this.upToGroupOf5Cases(this.extractCases(this.state.cases))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
