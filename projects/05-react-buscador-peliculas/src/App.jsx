import "./App.css";
import responseMovies from "./mocks/results.json";
import noResults from "./mocks/no-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies && movies.length > 0;
  return (
    <div className="page">
      <header>
        <h1>
          Movie <span className="text-warning">search</span>
        </h1>
        <form className="form">
          <input placeholder="Movie name" />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Year}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  );
}

export default App;
