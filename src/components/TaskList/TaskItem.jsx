import React from "react";

const TaskItem = ({ task, toggleTaskCompletion, toggleTaskImportance, deleteTask }) => {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#ffffff", // White background for checklist
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Checkbox with increased size */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
      />

      {/* Task Text */}
      <span
        className={task.important ? "important" : ""}
        style={{
          flex: 1,
          color: task.completed ? "#999" : "#000",
        }}
      >
        {task.text}
      </span>

      {/* Buttons Section */}
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>

        {/* Star Button */}
        <button
          className={`star ${task.important ? "marked-important" : ""}`}
          onClick={() => toggleTaskImportance(task.id)}
          style={{
            backgroundColor: task.important ? "#ffd700" : "#f0f0f0",
            color: task.important ? "#000" : "#666",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ★
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
