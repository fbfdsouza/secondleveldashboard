import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProfileBoard from "./components/ProfileBoard/ProfileBoard";

class App extends Component {
  render() {
    return (
      <div>
        <ProfileBoard
          name="Priscila Castro"
          headerColor="#fee9fa"
          borderColor="2px solid #fbb9ee"
        >
          <img src={require("../src/images/pri.jpg")} alt="pri" />
        </ProfileBoard>
        <ProfileBoard
          name="João Vieira"
          headerColor="#fee9fa"
          borderColor="2px solid #fbb9ee"
        >
          <img src={require("../src/images/joao.jpg")} alt="joao" />
        </ProfileBoard>
        <ProfileBoard
          name="Isaac Silva"
          headerColor="#fee9fa"
          borderColor="2px solid #fbb9ee"
        >
          <img src={require("../src/images/isaac.jpg")} alt="isaac" />
        </ProfileBoard>
        <ProfileBoard
          name="Bruno Filgueiras"
          headerColor="#fee9fa"
          borderColor="2px solid #fbb9ee"
        >
          <img src={require("../src/images/bruno.jpg")} alt="bruno" />
        </ProfileBoard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
