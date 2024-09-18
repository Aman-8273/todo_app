import classes from "./ToDoList.module.css";
import { useState, useEffect } from "react";
import ToDoTasks from "./ToDoTasks.jsx";

export default function ToDoList() {
  const [initialValue, setInitialValue] = useState("");
  const [data, setData] = useState([]);

  //store own users data
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUserEmail(loggedInUser);

      //according to email id fetch the tasks
      const storedTasks = JSON.parse(localStorage.getItem(loggedInUser)) || [];
      setData(storedTasks);
    }
  }, []);

  // Add task handler
  function addTaskHandler() {
    setData((prev) => [...prev, initialValue]);
    setInitialValue("");
  }

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(userEmail, JSON.stringify(data));
    }
  }, [data, userEmail]);

  //remove tasks
  function handleRemoveTask(id) {
    const filteredData = data.filter((_, index) => index !== id);
    setData(filteredData);
  }

  // Edit task
  function handleEdit(id, editedTask) {
    const updatedTasks = [...data];
    updatedTasks[id] = editedTask;

    setData(updatedTasks);
  }

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>To-Do List</h1>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Add your tasks"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
          <button className={classes.button} onClick={addTaskHandler}>
            Add
          </button>
        </div>
        <ToDoTasks
          data={data}
          handleRemoveTask={handleRemoveTask}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}
