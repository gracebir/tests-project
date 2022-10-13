import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    movies : []
}

export const MovieContext = createContext(initialState);

export const MovieProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addMovie(movie){
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }

    return (
        <MovieContext.Provider value={{
            movies: state.movies,
            addMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}