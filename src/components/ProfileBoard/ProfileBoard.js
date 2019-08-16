import React, { Component } from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList/CaseList";
import CaseItem from "../CaseItem/CaseItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "../../utils/API";

class ProfileBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: []
    };
  }

  extractCases = array => {
    const items = [];
    if (array.length > 0) {
      for (const [index, value] of array.entries()) {
        items.push(
          <CaseItem
            key={index}
            caseNumber={value.caseNumber}
            caseClient={value.clientName}
            color="red"
          />
        );
      }
    }

    window.array = items;

    return items;
  };

  async componentDidMount() {
    console.log(this.props.name);
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

    window.l = analystCasesArray;
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
            <CaseList>{this.extractCases(this.state.cases)}</CaseList>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
