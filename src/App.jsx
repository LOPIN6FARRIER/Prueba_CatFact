import './App.css'
import { useCatImage } from './custom_hooks/useGetImage'
import { useCatFact } from './custom_hooks/useCatFact'

// eslint-disable-next-line no-unused-vars

export function App () {
  const { fact, refreshFact } = useCatFact()
  const imageUrl = useCatImage({ fact })
  console.log(imageUrl)

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitios</h1>
      <button onClick={handleClick}>cambiar</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`imagen de gatito con las palabras ${fact}`} />}
      {/* <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${prefixUrl}${imageUrl}`} alt={`imagen de gatito con las palabras ${fact}`} />}
      </section>  */}
    </main>
  )
}

/* npm init playwright@latest
para hacer los test
npx playwright test
*/
