//chart options to highcharts
export const options = {
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
      data: [["Emergency", 10], ["Critical", 10], ["Normal", 80]]
    }
  ]
};

//settings for the Slider Component
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

export const getColorByPriority = (priority) => {
  if (priority < 50) {
    return "green";
  } else if (priority >= 50 && priority < 75) {
    return "orange";
  } else {
    return "red";
  }
};
