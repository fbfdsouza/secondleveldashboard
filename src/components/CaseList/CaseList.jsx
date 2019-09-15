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
          caseClient={caseInfo.clientName.substring(0, 7)}
          color={getColorByPriority(caseInfo.casePriority)}
          icon={faCheck}
          iconDisplay={caseInfo.checked}
        />
      ))}
    </ul>
  );
};

export default CaseList;
