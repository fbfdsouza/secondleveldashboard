import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodayDashboard from "../components/SecondDashboardToday";
import MonthDashboard from "../components/MonthDashboard";
import GoogleSheets from "../components/GoogleSheets";
import "../components/MonthDashboard/style/MonthDashboard.css";
import { PageContainer } from "../utils/stylesc";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route
            render={({ location }) => {
              return (
                <PageContainer>
                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={300}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={TodayDashboard} />
                        <Route
                          exact
                          path="/month_dashboard"
                          component={MonthDashboard}
                        />
                        <Route
                          exact
                          path="/google_sheets"
                          component={GoogleSheets}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </PageContainer>
              );
            }}
          />
        </Router>
      </Fragment>
    );
  }
}

export default AppContainer;
