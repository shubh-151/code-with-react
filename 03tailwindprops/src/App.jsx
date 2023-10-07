import { useState } from "react";

import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">tailwind </h1>
      <Card someObj="shubham" btnText="click me"/>
      <Card someObj="shukla"/>
    </>
  );
}

export default App;
