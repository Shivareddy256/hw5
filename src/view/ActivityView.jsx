import React from 'react';

const ActivityView = ({ activity, onClick }) => {
  return (
    <div>
      <h1>Give me a task</h1>
      <button onClick={onClick}>Refresh</button>
      <p>{activity}</p>
    </div>
  );
}

export default ActivityView;