import React from 'react';
import './Stats.css';

const Stats = ({ totalTasks, completedTasks }) => {
    return (
        <div className="stats">
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </div>
    );
};

export default Stats;