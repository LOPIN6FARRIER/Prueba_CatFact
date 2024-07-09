// eslint-disable-next-line no-unused-vars
import { getNewFactAsync, getNewFact } from '../services/facts'
import { useState, useEffect } from 'react'
// en los custom hooks podemos llamar mas hook en la funcione normales no
export function useCatFact () {
  const [fact, setFact] = useState()

  // esto no ya que se haria cada vez que serendriza
  //   fetch('https://catfact.ninja/fact')
  //     .then(response => response.json())
  //     .then(data => setFact(data.fact))
  const refreshFact = () => {
    getNewFactAsync().then(newFact => setFact(newFact))
  }
  // async
  useEffect(refreshFact, []) // solo se ejecuta una vez

  // promesa
  // useEffect(() => {
  // getNewFactAsync().then(setFact)
  // }, [])
  /*
   const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }
  */
  return { fact, refreshFact }
}
