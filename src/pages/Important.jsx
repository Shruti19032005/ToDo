import React from 'react';
import TaskList from '../components/TaskList/TaskList';

const Important = () => {
  return (
    <div className="page-container">
      <h1>Important Tasks</h1>
      <TaskList filter="important" />
    </div>
  );
};

export default Important;