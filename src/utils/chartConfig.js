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

export default options;
