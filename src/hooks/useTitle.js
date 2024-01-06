

export const useTitle = (title) => {
 useEffect(()=> {
    document.title=`${title}`

 })
  return null;}