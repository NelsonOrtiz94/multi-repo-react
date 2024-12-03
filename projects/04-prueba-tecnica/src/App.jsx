import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ", 3);
        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
            });
      });
  }, []);

  return (
    <div>
      <h1>Prueba App</h1>
      {fact && <p>{fact}</p>}
    </div>
  );
}
