let initalState = {
    popularMovies : {},
    topRatedMovies : {},
    upComingMovies : {},
}
function movieReducer(state=initalState, action){
    let {type, payload} = action
    switch(type){
        case "GET_MOVIES_SUCCESS":
            return {...state, popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                 upComingMovies: payload.upComingMovies
                }
                default : return {...state}
    }
    

}

export default movieReducer;