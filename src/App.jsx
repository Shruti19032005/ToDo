import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import Important from "./pages/important";
import Today from "./pages/Today";
import Planned from "./pages/Planned";
import AssignedToMe from "./pages/AssignedToMe";

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
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "white",
            color: "black",
            width: "1150px",
          }}
        >
          <Routes>
            <Route path="/today" element={<Today />} />
            <Route path="/important" element={<Important />} />
            <Route path="/planned" element={<Planned />} />
            <Route path="/assigned-to-me" element={<AssignedToMe />} />
            <Route
              path="/"
              element={
                <>
                  <h1>Welcome to Task Manager</h1>
                  <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
