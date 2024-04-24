import React, { useEffect, useState } from 'react';
import ActivityController from './controller/ActivityController';
import ActivityView from './view/ActivityView';
import './App.css'

const App = () => {
  const [activity, setActivity] = useState('');

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await ActivityController.fetchActivity();
      setActivity(activityData.activity);
    };
    fetchActivity();
  }, []);

  const handleRefreshClick = async () => {
    const activityData = await ActivityController.fetchActivity();
    setActivity(activityData.activity);
  };

  return (
    <div>
      <h1>What to Do?</h1>
      <ActivityView activity={activity} onClick={handleRefreshClick} />
    </div>
  );
}

export default App;