// TaskList.jsx
import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false, important: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTaskImportance = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list">
      <div className="input-section">
        <h2>To-Do</h2>
        <div className="add-task">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{  backgroundColor: "white", color: "black", fontSize:"20px" }}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added</p>
      ) : (
        <>
          <div className="output-section">
            <h2>Task To-Do</h2>
            <ul>
              {tasks
                .filter((task) => !task.completed)
                .sort((a, b) => b.important - a.important)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    toggleTaskImportance={toggleTaskImportance}
                    deleteTask={deleteTask}
                  />
                ))}
            </ul>
          </div>
          <div className="completed-section">
            <h2>Completed Tasks</h2>
            <ul>
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    toggleTaskImportance={toggleTaskImportance}
                    deleteTask={deleteTask}
                  />
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;


// style={{  backgroundColor: "white", color: "black", fontSize:"20px" }}



