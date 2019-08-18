import React, { Component } from "react";
import ProfileBoard from "../../components/ProfileBoard/ProfileBoard";
import ProfileBoardContainer from "../../components/ProfileBoardContainer/ProfileBoardContainer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import options from "../../utils/chartConfig";
import API from "../../utils/API";
class SecondDashboardToday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priority: {
        emergency: 0,
        critical: 0,
        normal: 0
      }
    };
  }

  async componentDidMount() {
    const chart = this.refs.chartComponent.chart;

    let emergencyCount = 0,
      criticalCount = 0,
      normalCount = 0,
      casesCount = 0;

    let casesData = await API.get("/cases", {
      params: {
        results: 1,
        inc: "caseNumber,analystName,clientName,casePriority"
      }
    });

    casesCount = casesData.data.length;

    emergencyCount = casesData.data.filter(caseEl => caseEl.casePriority >= 75)
      .length;
    criticalCount = casesData.data.filter(
      caseEl => caseEl.casePriority >= 50 && caseEl.casePriority < 75
    ).length;
    normalCount = casesData.data.filter(caseEl => caseEl.casePriority < 50)
      .length;

    this.setState({
      priority: {
        emergency: (emergencyCount / casesCount) * 100,
        critical: (criticalCount / casesCount) * 100,
        normal: (normalCount / casesCount) * 100
      }
    });

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
  }

  render() {
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
          >
            <img src={require("../../images/pri.jpg")} alt="pri" />
          </ProfileBoard>
          <ProfileBoard
            name="João Vieira"
            headerColor="#c7dfb1"
            borderColor="2px solid #44d1a6"
          >
            <img src={require("../../images/joao.jpg")} alt="joao" />
          </ProfileBoard>
          <ProfileBoard
            name="Isaac Silva"
            headerColor="#ccf3e7"
            borderColor="2px solid #a3e9d4"
          >
            <img src={require("../../images/isaac.jpg")} alt="isaac" />
          </ProfileBoard>
          <ProfileBoard
            name="Bruno Filgueiras"
            headerColor="#edefb8"
            borderColor="2px solid #c1bc5e"
          >
            <img src={require("../../images/bruno.jpg")} alt="bruno" />
          </ProfileBoard>
        </ProfileBoardContainer>
      </div>
    );
  }
}

export default SecondDashboardToday;
