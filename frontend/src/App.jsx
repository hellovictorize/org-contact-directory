import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Frontend Hello</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
