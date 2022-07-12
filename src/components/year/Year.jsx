import React from "react";

import './year.scss';


export default function Year({ year, theme}) {

  return (
    <React.Fragment>
      <div className={`year ${theme}`}>
        <div className="year-content">
          <h2>{year.year}</h2>
          <p>{year.body}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
