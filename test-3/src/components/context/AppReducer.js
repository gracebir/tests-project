export default (state, action) =>{
    switch(action.type){
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        default:
            return state
    }
}