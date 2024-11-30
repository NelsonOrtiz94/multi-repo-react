import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log("efecct", { enabled });
  }, [enabled]);

  return (
    <>
      <h3>Proyecto #3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} puntero
      </button>
    </>
  );
}

export default App;
