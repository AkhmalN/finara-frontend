import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
