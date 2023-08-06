import React from "react";
import HomeTodo from "./components/HomeTodo";
import "./style/app.css";
import TaskContextProvider from "./Context";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <HomeTodo />
      </TaskContextProvider>
    </div>
  );
}

export default App;
