import { createRoot } from "react-dom/client";

const name = "Divya Sushma Sri";
const age = 20;

const message = `Hello, my name is ${name} and I am ${age} years old.`;

createRoot(document.getElementById("root")).render(
  <div>
    <h1>JSX Render App</h1>
    <p>{message}</p>
  </div>
);
