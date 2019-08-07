import React from "react";
import "./style/CaseItem.css";

const CaseItem = ({ caseNumber, caseClient, color }) => {
  return (
    <li className="caseItem">
      <div>
        {caseNumber} - {caseClient}
      </div>
      <div className="priorityLevel" style={{ backgroundColor: color }} />
    </li>
  );
};

export default CaseItem;
