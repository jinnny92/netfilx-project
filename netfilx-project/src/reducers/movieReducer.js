let initalState = {
    popularMovies : {},
    topRatedMovies : {},
    upComingMovies : {},
    lodaing : true
}
function movieReducer(state=initalState, action){
    let {type, payload} = action
    switch(type){
        case "GET_MOVIE_REQUEST":
            return {...state, loading:true}
        case "GET_MOVIES_SUCCESS":
            return {...state, popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                 upComingMovies: payload.upComingMovies,
                 loading : false,
                }
        case "GET_MOVIES_FAILURL" : 
        return {...state, loading:false}
                default : return {...state}
    }
    

}

export default movieReducer;