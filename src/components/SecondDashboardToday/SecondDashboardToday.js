import React, { Component } from "react";
import ProfileBoard from "../../components/ProfileBoard/ProfileBoard";
import ProfileBoardContainer from "../../components/ProfileBoardContainer/ProfileBoardContainer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import options from "../../utils/chartConfig";

class SecondDashboardToday extends Component {
  render() {
    return (
      <div>
        <div className="dummyChart">
          <HighchartsReact highcharts={Highcharts} options={options} />
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
