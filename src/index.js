import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useTodos from "./hooks/useTodos";

function App() {
  const [todos, actions] = useTodos([]);

  console.log("RENDER");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => actions.add({ id: Date.now(), text: "test" })}>
        Add
      </button>
      {todos.map(({ id, text }) => (
        <div key={id} onClick={() => actions.remove(id)}>
          {text}
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
