import classes from "./ToDoTasks.module.css";
import { useState } from "react";

export default function ToDoTasks({ data, handleRemoveTask, handleEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  function handleEditClick(id) {
    setEditIndex(id);
    setEditedTask(data[id]);
  }

  function handleSave(id) {
    handleEdit(id, editedTask);
    setEditIndex(null);
  }

  return (
    <main className={classes.container}>
      <div className={classes.task}>
        {data.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                className={classes.listInput}
              />
            ) : (
              <span>{task}</span>
            )}

            <div className={classes.editContainer}>
              {editIndex === index ? (
                <button
                  onClick={() => handleSave(index)}
                  className={classes.saveBtn}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(index)}
                  className={classes.editBtn}
                >
                  Edit
                </button>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classes.btnRemove}
                onClick={() => handleRemoveTask(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </li>
        ))}
      </div>
    </main>
  );
}
