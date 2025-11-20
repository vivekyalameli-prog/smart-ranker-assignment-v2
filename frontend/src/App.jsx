import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [message, setMessage] = useState("Loading...");
  const BASE_URL = import.meta.VITE_BASE_URL
  useEffect(() => {
    // call backend API
    fetch(`${BASE_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not responding"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Smart Ranker App</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default App;
