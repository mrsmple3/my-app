import React, { createElement as e, useState } from "react";
import { Prodact } from "./conmponents/Prodact";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto max-w-2xl">
      <Prodact />
    </div>
  );
}

export default App;
