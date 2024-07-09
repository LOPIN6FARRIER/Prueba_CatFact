import { useCatImage } from '../custom_hooks/useGetImage'

export function Otro () {
  const imageUrl = useCatImage({ fact: 'Cat' })
  console.log(imageUrl)
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
