import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProfileBoard from "./components/ProfileBoard/ProfileBoard";

class App extends Component {
  render() {
    return (
      <div>
        <ProfileBoard name="Priscila Castro">
          <img src={require("../src/images/pri.jpg")} />
        </ProfileBoard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
