import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    };

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTask;