import React, {useContext} from 'react'
import { MovieContext } from '../components/context/MovieContext'

function Movieform() {
  const { addMovie } = useContext(MovieContext);

 const convertHours= (hours) => {
    let h = Math.floor(hours / 60)
    let minute = ""
    let min = hours % 60
    if(min < 60){
        minute = ".5"
    } else if(min === 0){
        minute = ""
    } else if(hours < 60){
      h = 0
    }

  return h === 0 ? `${minute}`:`${h}${minute}`
}

  const onSubmit = (e) => {
    e.preventDefault()
    let movieHours = e.target.duration.value
    let hrs = ""
    if(movieHours.indexOf("h")===1){
      hrs = movieHours
    } else {
      let  convertType = parseInt(movieHours)
      hrs = `${convertHours(convertType)}h`
    }
    
  console.log(hrs)
    const newMovie = {
      name : e.target.name.value,
      ratings: (parseInt(e.target.ratings.value)/100).toFixed(2),
      duration: hrs,
    }
    addMovie(newMovie);
    console.log(newMovie)
    e.target.reset()
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={onSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              required
              id='name'
              name='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              required
              id='ratings'
              name="ratings"
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              required
              name='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
