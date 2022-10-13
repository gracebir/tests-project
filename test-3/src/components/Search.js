import React from 'react'
import { MovieContext } from './context/MovieContext'

function Search() {
  const [movie, setMovie] = React.useState("")
  console.log(movie)
  const { movies } = React.useContext(MovieContext);
  if(movie?.length === 2){
    const movieSearch = movies?.find(mo => mo.name === movie )
    console.log(movieSearch)
  }


  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        value={movie}
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        onChange={(e) => setMovie(e.target.value)}
        data-testid='search'
      />
    </section>
  )
}

export default Search
