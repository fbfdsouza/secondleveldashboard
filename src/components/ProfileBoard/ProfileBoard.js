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
      cases: null
    };
  }

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

    console.log(analystCasesArray);
    console.log(this.caseByAnalyst(analystCasesArray));
    const html = this.caseByAnalyst(analystCasesArray);
    console.log(html.toString);
    this.setState({
      cases: [1, 2, 3, 4, 5]
    });

    window.l = analystCasesArray;
  }

  caseByAnalyst = analystCases => {
    let html,
      newHtml,
      finalHtml = "";
    analystCases.forEach(caseEl => {
      html =
        '<CaseItem caseNumber="%caseNumber%" caseClient="%clientName%" color="red" />';
      newHtml = html.replace("%caseNumber%", caseEl.caseNumber);
      newHtml = newHtml.replace("%clientName%", caseEl.clientName);
      finalHtml += newHtml;
    });

    return `<CaseList>${finalHtml}</CaseList>`;
  };

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
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProfileBoard;
