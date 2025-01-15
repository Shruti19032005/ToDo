import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";


const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Finish project report", completed: true },
    { id: 3, name: "Call the bank", completed: false },
    { id: 4, name: "Schedule dentist appointment", completed: false },
  ]);

  const handleTaskClick = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "white", color: "black",width:"1150px" }}>
        <h1>Welcome to Task Manager</h1>
        
        <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
      </div>
    </div>
  );
};

export default App;

