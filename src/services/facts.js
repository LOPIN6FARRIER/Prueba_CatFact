const randomFactEndPoint = 'https://catfact.ninja/fact'

export const getNewFact = () => {
  return fetch(randomFactEndPoint)
    .then(response => response.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}

export const getNewFactAsync = async () => {
  const response = await fetch(randomFactEndPoint)
  const data = await response.json()
  const { fact } = data
  return fact
}
