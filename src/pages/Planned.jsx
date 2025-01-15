import React from 'react';
import TaskList from '../components/TaskList/TaskList';

const Planned = () => {
  return (
    <div className="page-container">
      <h1>Planned Tasks</h1>
      <TaskList filter="planned" />
    </div>
  );
};

export default Planned;