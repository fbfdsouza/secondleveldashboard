import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProfileBoard from "./components/ProfileBoard/ProfileBoard";
import ProfileBoardContainer from "./components/ProfileBoardContainer/ProfileBoardContainer";
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
        enabled: false,
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
      data: [["20%", 20], ["40%", 40], ["40%", 40]]
    }
  ]
};
class App extends Component {
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
            <img src={require("../src/images/pri.jpg")} alt="pri" />
          </ProfileBoard>
          <ProfileBoard
            name="João Vieira"
            headerColor="#c7dfb1"
            borderColor="2px solid #44d1a6"
          >
            <img src={require("../src/images/joao.jpg")} alt="joao" />
          </ProfileBoard>
          <ProfileBoard
            name="Isaac Silva"
            headerColor="#ccf3e7"
            borderColor="2px solid #a3e9d4"
          >
            <img src={require("../src/images/isaac.jpg")} alt="isaac" />
          </ProfileBoard>
          <ProfileBoard
            name="Bruno Filgueiras"
            headerColor="#edefb8"
            borderColor="2px solid #c1bc5e"
          >
            <img src={require("../src/images/bruno.jpg")} alt="bruno" />
          </ProfileBoard>
        </ProfileBoardContainer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
