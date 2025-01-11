import { Link } from "../components/Link";
import "./About.css";

const i18n = {
  es: {
    title: "SOBRE NOSOTROS",
    button: "Volver a home",
    description:
      "¡Hola! Me llamo Nelson Ortiz y estoy creando un clon de React Router.",
  },
  en: {
    title: "About us",
    button: "Go to home page",
    description:
      "Hi! My name is Nelson Ortiz and I am creating a clone of React Router.",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <div className="about-main">
      <div className="background-2"></div>
      <div className="content-2">
        <h1>{i18n.title}</h1>
        <div>
          <img
            src="https://files.oaiusercontent.com/file-WnGbzXnbuXW1L3Fk4WfJN4?se=2025-01-10T00%3A49%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e76c6f1-c2d1-4bbc-a50c-4d4e2e0e2124.webp&sig=Bc9VX7Yf%2BkrEH8jAfiSvVizlbT/PucHozZW2cgCFWDM%3D"
            alt="Foto de nelortz"
          />
          <p>{i18n.description}</p>
        </div>
        <Link to="/" className="home-link">{i18n.button}</Link>
      </div>
    </div>
  );
}
