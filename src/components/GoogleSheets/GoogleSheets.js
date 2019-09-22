import React, { Component } from "react";
import RoboChart from "@postlight/react-google-sheet-to-chart";
import "./style/GoogleSheets.css";
import { Slide } from "../../utils/stylesc";
import { Link } from "react-router-dom";

const style = { width: "1200px", margin: "0 auto" };
class GoogleSheets extends Component {
  render() {
    return (
      <Slide>
        <Link to="/">Go next chart →</Link>
        <div style={style}>
          <RoboChart
            id="1Qoi1ixF6q38w0Z-LcvET5mTlQy-ueZaBLXoKraY-BgM"
            sheet="Product Consumption"
            token={process.env.REACT_APP_GOOGLE_SHEETS_TOKEN}
            type="bar"
          />
        </div>
      </Slide>
    );
  }
}
export default GoogleSheets;
