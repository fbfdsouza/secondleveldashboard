import React from "react";
import CaseItem from "../CaseItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getColorByPriority } from "../../utils";

const CaseList = ({ list }) => {
  return (
    <ul>
      {list.map((caseInfo, index) => (
        <CaseItem
          key={index}
          caseNumber={caseInfo.caseNumber}
          caseClient={caseInfo.clientName}
          color={getColorByPriority(caseInfo.casePriority)}
          icon={faCheck}
          iconDisplay={false}
        />
      ))}
    </ul>
  );
};

export default CaseList;
