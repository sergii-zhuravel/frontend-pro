import React from "react";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState("");
  const onInputChange = function (event) {
    setMessage(event.target.value.toUpperCase());
  };
  return (
    <div>
      <input type="text" value={message} onChange={onInputChange}></input>
      <button onClick={() => alert(message)}>Send</button>
    </div>
  );
}

export default App;
