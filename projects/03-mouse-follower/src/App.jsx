import { useEffect, useState } from "react";

// Componente que sigue el puntero del mouse
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false); // Estado para habilitar/deshabilitar el seguimiento
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del puntero

  // Efecto para manejar el evento `pointermove`
  useEffect(() => {
    console.log("Efecto activado", { enabled });

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      console.log("Cleanup: Eliminando listener de pointermove");
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [enabled]);

  // Efecto para alternar la clase `no-cursor` en el cuerpo del documento
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  // Estilos del puntero
  const pointerStyles = {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "1px solid #fff",
    borderRadius: "50%",
    opacity: 0.8,
    pointerEvents: "none", // Evita interferencias con otros elementos
    left: -25,
    top: -25,
    width: 50,
    height: 50,
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <>
      {/* Representación del puntero */}
      {enabled && <div style={pointerStyles} />}
      
      {/* Botón para activar/desactivar el seguimiento */}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

// Componente principal
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
