import React from 'react';
import TaskList from '../components/TaskList/TaskList';

const Today = () => {
  return (
    <div className="page-container">
      <h1>Today's Tasks</h1>
      <TaskList filter="today" />
    </div>
  );
};

export default Today;