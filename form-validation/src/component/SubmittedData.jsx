import React from "react";

function SubmittedData({ data }) {
  return (
    <div>
      <h2>Submitted Data</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubmittedData;