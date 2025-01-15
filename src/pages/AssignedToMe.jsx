import React from 'react';
import TaskList from '../components/TaskList/TaskList';

const AssignedToMe = () => {
  return (
    <div className="page-container">
      <h1>Assigned to Me</h1>
      <TaskList filter="assigned" />
    </div>
  );
};

export default AssignedToMe;