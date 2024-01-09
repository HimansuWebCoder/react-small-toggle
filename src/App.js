import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("red");

  function toggle() {
    setColor(prev => prev === "red" ? "blue" : "red");
  }
  return (
    <div className="container">
      <button onClick={toggle}>Change color</button>
      <p style={{color: color}}>I am React.js Developer</p>
    </div>
  )
}