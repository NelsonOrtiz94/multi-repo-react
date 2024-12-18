import "./App.css";

function App() {
  return (
    <div className="page">

      <header>
        <h1>Movie <span className="text-warning">search</span></h1>
        <form className="form">
          <input placeholder="Movie name" />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        Search results
      </main>

    </div>
  );
}

export default App;
