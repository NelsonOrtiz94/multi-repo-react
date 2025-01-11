import { Link } from "../components/Link";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="main">
      <div className="background"></div> {/* Contenedor para la imagen de fondo */}
      <div className="content">
        <h1 className="home">HOME</h1>
        <p>Esta es una página base para crear un React Router desde cero</p>
        <Link to="/about" className="home-link">Ir a Sobre nosotros</Link>
      </div>
    </div>
  );
}
