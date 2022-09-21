import api from "../redux/api.js";

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({type:"GET_MOVIE_REQUEST"})
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
  
  
      const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  
      // let url = "https://api.themoviedb.org/3";
      // let response = await fetch(url);
      // let data = await response.json();
  
      // let url2 =
      //   "https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1";
      // let url3 =
      //   "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1";
        
     let [popularMovies, topRatedMovies, upComingMovies] =await Promise.all([
      popularMovieApi,topRatedApi,upComingApi]);
     //동시에 api를 진행시키지만 이 데이터들이 올때까지 딱 한 번만 기다리기 위해 awiat은 한번만 쓴다.
     dispatch({
      type:"GET_MOVIES_SUCCESS",
      payload : {popularMovies:popularMovies.data, 
      topRatedMovies:topRatedMovies.data,
      upComingMovies:upComingMovies.data
      }
    })
    } catch (error) {
      //에러 핸들링 하는곳
      dispatch({type:"GET_MOVIES_FAILURL"})
    }


  };
}

export const movieAction = {
  getMovies,
};
