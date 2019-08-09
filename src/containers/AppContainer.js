import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodayDashboard from "../components/SecondDashboardToday/SecondDashboardToday";
import MonthDashboard from "../components/MonthDashboard/MonthDashboard";
import "../components/MonthDashboard/style/MonthDashboard.css";

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={TodayDashboard} />
            <Route exact path="/month_dashboard" component={MonthDashboard} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default AppContainer;
