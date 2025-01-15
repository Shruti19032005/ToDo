import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task }) => {
    return (
        <div className="task-details">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskDetails;