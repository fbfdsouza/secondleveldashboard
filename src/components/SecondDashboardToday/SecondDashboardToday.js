import React, { Component } from "react";
import ProfileBoard from "../../components/ProfileBoard/ProfileBoard";
import ProfileBoardContainer from "../../components/ProfileBoardContainer/ProfileBoardContainer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  credits: {
    enabled: false
  },
  title: {
    text: "Today's<br>Cases",
    align: "center",
    verticalAlign: "middle",
    y: 40
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      colors: ["red", "orange", "green"],
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white"
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%"
    },
    showInLegend: true
  },

  series: [
    {
      type: "pie",
      name: "Today's Cases",
      innerSize: "50%",
      data: [
        ["40% - Emergency", 40],
        ["20% - Critical", 20],
        ["40% - Normal", 40]
      ]
    }
  ]
};
class SecondDashboardToday extends Component {
  render() {
    return (
      <div>
        <div className="dummyChart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <ProfileBoardContainer>
          <div class="dummy-graph" />
          <ProfileBoard
            name="Priscila Castro"
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
