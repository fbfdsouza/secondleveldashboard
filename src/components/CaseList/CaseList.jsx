import React from "react";
import CaseItem from "../CaseItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CaseList = ({ children, list }) => {
  const listCaseItems = list.map((caseInfo, index) => (
    <CaseItem
      key={index}
      caseNumber={caseInfo.caseNumber}
      caseClient={caseInfo.clientName}
      color={"red"}
      icon={faCheck}
      iconDisplay={"none"}
    />
  ));

  return <ul>{listCaseItems}</ul>;
};

export default CaseList;

/*
<CaseItem
  key={index}
  caseNumber={value.caseNumber}
  caseClient={value.clientName}
  color={color}
  icon={faCheck}
  iconDisplay={iconDisplay}
/>;*/
