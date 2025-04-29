import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Experience() {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <SchoolIcon/>
            <h3>deneme</h3>
            <p>deneme</p>
          </li>
          <li>
            <SchoolIcon/>
            <h3>deneme</h3>
            <p>deneme</p>
          </li>
          <li>
            <BusinessCenterIcon/>
            <h3>deneme</h3>
            <p>deneme</p>
          </li>
          <li>
            <QuestionMarkIcon/>
            <h3>deneme</h3>
            <p>deneme</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;