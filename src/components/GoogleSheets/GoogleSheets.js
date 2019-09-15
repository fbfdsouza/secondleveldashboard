import React, { Component } from "react";
import RoboChart from "@postlight/react-google-sheet-to-chart";
import "./style/GoogleSheets.css";

const style = { width: "1200px", margin: "0 auto" };
class GoogleSheets extends Component {
  render() {
    return (
      <div style={style}>
        <RoboChart
          id="1Qoi1ixF6q38w0Z-LcvET5mTlQy-ueZaBLXoKraY-BgM"
          sheet="Product Consumption"
          token={process.env.REACT_APP_GOOGLE_SHEETS_TOKEN}
          type="bar"
        />
      </div>
    );
  }
}
export default GoogleSheets;
