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

  async componentDidMount() {
    let casesData = await API.get("/all", {
      params: {
        results: 1,
        inc: "caseNumber,analystName,clientName,casePriority"
      }
    });
    console.log(casesData);
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
            <CaseList>
              <CaseItem caseNumber="16815" caseClient="Solar" color="red" />
              <CaseItem caseNumber="17087" caseClient="PSP" color="red" />
              <CaseItem caseNumber="17412" caseClient="Kof-Br" color="orange" />
              <CaseItem
                caseNumber="17298"
                caseClient="G.Simões"
                color="green"
              />
              <CaseItem caseNumber="18077" caseClient="SHV" color="green" />
            </CaseList>
            <CaseList>
              <CaseItem caseNumber="16888" caseClient="Dawnfoods" color="red" />
              <CaseItem caseNumber="15432" caseClient="Reyes" color="red" />
              <CaseItem caseNumber="14258" caseClient="CVI" color="orange" />
              <CaseItem caseNumber="13251" caseClient="RNDC" color="green" />
              <CaseItem
                caseNumber="1982"
                caseClient="Pepsico-gtm"
                color="green"
              />
            </CaseList>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
