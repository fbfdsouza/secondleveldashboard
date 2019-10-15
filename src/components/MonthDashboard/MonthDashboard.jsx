import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Cases analysed in {Month}'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total cases analysed per month'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Month",
          y: 62.74,
          drilldown: "Month"
        },
        {
          name: "Isaac Silva",
          y: 10.57,
          drilldown: "Isaac Silva"
        },
        {
          name: "Priscilla Castro",
          y: 7.23,
          drilldown: "Priscilla Castro"
        },
        {
          name: "João Vieira",
          y: 5.58,
          drilldown: "João Vieira"
        },
        {
          name: "Bruno Filgueiras",
          y: 4.02,
          drilldown: "Bruno Filgueiras"
        }
      ]
    }
  ]
}


class MonthDashBoard extends PureComponent {
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
