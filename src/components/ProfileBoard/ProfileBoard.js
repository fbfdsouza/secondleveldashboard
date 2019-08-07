import React from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList/CaseList";
import CaseItem from "../CaseItem/CaseItem";

const ProfileBoard = props => {
  return (
    <div className="profile_container">
      <div className="profile_container_header">
        <div>{props.children}</div>
        <div>{props.name}</div>
      </div>
      <div className="profile_container_content">
        <CaseList>
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
        </CaseList>
      </div>
    </div>
  );
};

export default ProfileBoard;
