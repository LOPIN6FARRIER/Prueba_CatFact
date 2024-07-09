import { useState, useEffect } from 'react'
const prefixUrl = 'https://cataas.com/cat/'
// eslint-disable-next-line no-unused-vars
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return // si no hay fact no hago nada
    // const firstWord = fact.split(' ')[0] // separa por espacios y toma la primera palabra
    const firstWord = fact.split(' ').slice(0, 3).join('') // separa por espacios y toma las dos primeras palabras
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const { _id } = response
        setImageUrl(_id)
      })
  }, [fact]) // se ejecuta cada vez que cambia fact
  const url = `${prefixUrl}${imageUrl}`
  return url
}
