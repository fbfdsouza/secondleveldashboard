import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    height: 650,
    type: "line"
  },
  title: {
    text: "Second Level DashBoard"
  },
  subtitle: {
    text: "This month's cases"
  },
  yAxis: {
    title: {
      text: "Quantity"
    }
  },
  xAxis: {
    title: {
      text: "Days"
    }
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    },
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [
    {
      name: "Pending Cases",
      data: [
        [1, 5],
        [2, 7],
        [3, 17],
        [4, 20],
        [5, 24],
        [6, 30],
        [7, 32],
        [8, 40],
        [9, 50],
        [10, 55],
        [11, 62],
        [12, 67],
        [13, 68],
        [14, 72],
        [15, 81],
        [16, 85],
        [17, 98],
        [18, 122],
        [19, 122],
        [20, 112],
        [21, 118],
        [22, 119],
        [23, 120],
        [24, 133],
        [25, 134],
        [26, 149],
        [27, 152],
        [28, 161],
        [29, 170],
        [30, 169]
      ]
    },
    {
      name: "Return to Dev",
      data: [
        [1, 5],
        [2, 2],
        [3, 17],
        [4, 5],
        [5, 3],
        [6, 15],
        [7, 17],
        [8, 22],
        [9, 28],
        [10, 25],
        [11, 24],
        [12, 12],
        [13, 16],
        [14, 18],
        [15, 21],
        [16, 22],
        [17, 22],
        [18, 22],
        [19, 22],
        [20, 22],
        [21, 18],
        [22, 19],
        [23, 20],
        [24, 18],
        [25, 19],
        [26, 20],
        [27, 16],
        [28, 15],
        [29, 12],
        [30, 10]
      ]
    }
  ]
};
class MonthDashBoard extends Component {
  render() {
    return (
      <div>
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    );
  }
}

export default MonthDashBoard;
