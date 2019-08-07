import React from "react";
import "./style/ProfileBoard.css";
import CaseList from "../CaseList/CaseList";
import CaseItem from "../CaseItem/CaseItem";

const ProfileBoard = ({ children, name, headerColor, borderColor }) => {
  return (
    <div className="profile_container" style={{ border: borderColor }}>
      <div
        className="profile_container_header"
        style={{ backgroundColor: headerColor }}
      >
        <div>{children}</div>
        <div>{name}</div>
      </div>
      <div className="profile_container_content">
        <CaseList>
          <CaseItem caseNumber="16815" caseClient="Solar" color="red" />
          <CaseItem caseNumber="17087" caseClient="PSP" color="red" />
          <CaseItem caseNumber="17412" caseClient="Kof-Br" color="orange" />
          <CaseItem caseNumber="17298" caseClient="G.Simões" color="green" />
          <CaseItem caseNumber="18077" caseClient="SHV" color="green" />
        </CaseList>
      </div>
    </div>
  );
};

export default ProfileBoard;
