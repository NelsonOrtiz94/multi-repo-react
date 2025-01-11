import { Link } from "../components/Link";
import "./../pages/404.css";

export default function Page404() {
  return (
    <>
      <div className="page404">
        <h1>Opss !! something happens</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Gif del perro de This is Fine quemándose vivo"
        />
        <Link to="/" className="home-link">Volver a Home</Link>
      </div>
    </>
  );
}
