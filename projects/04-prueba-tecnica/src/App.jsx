import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
    const [fact, setFact] = useState()

    useEffect(() => {
        async function getRandomFact() {
            const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
            const json = await res.json()
            setFact(json.fact)
        }
        getRandomFact()
    }, [])

    return (
        <div>
        <h1>App de gatos</h1>
        {fact && <p>{fact}</p> }
        </div>
    )
}