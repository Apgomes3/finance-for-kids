import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://34.34.63.181:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return <h1>Check console 👀</h1>;
}

export default App;