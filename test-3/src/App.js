import React from 'react'
import './App.css'
import 'h8k-components'
import { MovieProvider } from './components/context/MovieContext'
import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  return (
    <div>
      <h8k-navbar header={ title } />
      <MovieProvider>
        <div className='layout-row justify-content-center mt-100'>
          <div className='w-30 mr-75'>
            <Movieform />
          </div>
          <div className='layout-column w-30'>
            <Search />
            <Movieslist />
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          </div>
        </div> 
      </MovieProvider>
    </div>
  )
}

export default App;
