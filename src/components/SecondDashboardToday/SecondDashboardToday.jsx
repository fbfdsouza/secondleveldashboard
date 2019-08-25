import React, { PureComponent } from "react";
import ProfileBoard from "../../components/ProfileBoard";
import ProfileBoardContainer from "../../components/ProfileBoardContainer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { options } from "../../utils/";
import { springCases, sfAPI } from "../../utils/API";
class SecondDashboardToday extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cases: []
    };
  }

  componentDidMount = async prevState => {
    const chart = this.refs.chartComponent.chart;

    let emergencyCount = 0,
      criticalCount = 0,
      normalCount = 0,
      casesCount = 0;

    let casesData = await springCases.get("/cases", {
      params: {
        results: 1,
        inc: "caseNumber,analystName,clientName,casePriority"
      }
    });

    let casesSalesForce = await sfAPI.post(
      "/casesAssigned",
      casesData.data.map(item => item.caseNumber)
    );

    this.setCheckedCases(casesSalesForce.data, casesData.data);

    window.casesData = casesData;

    emergencyCount = casesData.data.filter(caseEl => caseEl.casePriority >= 75)
      .length;
    criticalCount = casesData.data.filter(
      caseEl => caseEl.casePriority >= 50 && caseEl.casePriority < 75
    ).length;
    normalCount = casesData.data.filter(caseEl => caseEl.casePriority < 50)
      .length;
    casesCount = casesData.data.length;

    if (prevState !== this.state) {
      this.setState({
        cases: casesData.data
      });
    }

    chart.series[0].update({
      data: [
        [
          `Emergency : ${((emergencyCount / casesCount) * 100).toFixed(2)}%`,
          emergencyCount * 100
        ],
        [
          `Critical : ${((criticalCount / casesCount) * 100).toFixed(2)}%`,
          criticalCount * 100
        ],
        [
          `Normal : ${((normalCount / casesCount) * 100).toFixed(2)}%`,
          normalCount * 100
        ]
      ]
    });
  };

  setCheckedCases = (salesForceArray, ourCaseListArray) => {
    ourCaseListArray.forEach(caseItem => {
      caseItem.checked =
        salesForceArray.filter(
          itemSF => itemSF.caseNumber === caseItem.caseNumber
        )[0] !== undefined
          ? salesForceArray.filter(
              itemSF => itemSF.caseNumber === caseItem.caseNumber
            )[0].checked
          : false;
    });
  };

  render() {
    const { cases } = this.state;
    return (
      <div>
        <div className="dummyChart">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={"chartComponent"}
          />
        </div>
        <ProfileBoardContainer>
          <div className="dummy-graph" />
          <ProfileBoard
            name="Priscilla Castro"
            headerColor="#fee9fa"
            borderColor="2px solid #fbb9ee"
            casesArray={cases}
          >
            <img src={require("../../images/pri.jpg")} alt="pri" />
          </ProfileBoard>
          <ProfileBoard
            name="João Vieira"
            headerColor="#c7dfb1"
            borderColor="2px solid #44d1a6"
            casesArray={cases}
          >
            <img src={require("../../images/joao.jpg")} alt="joao" />
          </ProfileBoard>
          <ProfileBoard
            name="Isaac Silva"
            headerColor="#ccf3e7"
            borderColor="2px solid #a3e9d4"
            casesArray={cases}
          >
            <img src={require("../../images/isaac.jpg")} alt="isaac" />
          </ProfileBoard>
          <ProfileBoard
            name="Bruno Filgueiras"
            headerColor="#edefb8"
            borderColor="2px solid #c1bc5e"
            casesArray={cases}
          >
            <img src={require("../../images/bruno.jpg")} alt="bruno" />
          </ProfileBoard>
        </ProfileBoardContainer>
      </div>
    );
  }
}

export default SecondDashboardToday;
