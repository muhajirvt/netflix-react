import React, { useEffect,useState } from 'react'
import "./MovieList.css"
import Axios from '../../Axios'
import { apiKey,imageBaseUrl } from '../../Constants/Constant'
import YouTube from 'react-youtube'


function MovieList(props) {

  const [movies,setMovies] = useState([])
  const [videoId,setVideoId] = useState('')


  useEffect(()=>{
    Axios.get(props.url).then((response) => {
        setMovies(response.data.results)
    });
  },[]) 

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    Axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
    .then((response) => {
        if(response.data.result.length>0) {
            setVideoId(response.data.result[0]);
        }
    });
  }
  

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='movieList'>
        {
            movies.map((movie,key) => 
                <img key={key} className={props.isSmall?'smallMoviePoster':'moviePoster'}
                alt='movie-poster' src={`${imageBaseUrl+movie.backdrop_path}`}
                onClick={()=>handleMovie(movie.id)}/>
            )
        }
      </div>
      { videoId && <YouTube opts={opts} videoId={videoId}/> }
    </div>
  )
}

export default MovieList
