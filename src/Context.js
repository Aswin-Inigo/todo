import React, { createContext, useState, useRef } from "react";

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState(() => {
    const data = JSON.parse(localStorage.getItem("taskData"));
    return data ? data : [];
  });
  const inputRef = useRef("");
  //   const [localStorage, setLocalStorage] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleTask = () => {
    if (task === "") {
      alert("please enter the task!");
    } else {
      const item = {
        id: Math.floor(Math.random() * 100000) + 1,
        newTask: task,
        isEdit: false,
      };

      setTaskArray([...taskArray, item]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const tempArray = taskArray.filter((task) => task.id !== id);
    setTaskArray([...tempArray]);
  };
  const editTodo = (id) => {
    const tempArray = taskArray.filter((task) => task.id !== id);
    setTaskArray([tempArray]);
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        taskArray,
        handleChange,
        handleTask,
        handleDelete,
        editTodo,
        inputRef,
        localStorage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
