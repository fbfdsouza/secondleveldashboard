import React from "react";
import "./style/CaseItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CaseItem = ({ caseNumber, caseClient, color, icon, iconDisplay }) => {
  return (
    <li className="caseItem">
      <div>
        {caseNumber} - {caseClient}
      </div>
      <div className="priorityLevel" style={{ backgroundColor: color }}>
        <FontAwesomeIcon
          icon={icon}
          style={{ display: iconDisplay === true ? "block" : "none" }}
        />
      </div>
    </li>
  );
};

export default CaseItem;
