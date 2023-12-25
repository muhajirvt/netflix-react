import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import { apiKey,imageBaseUrl } from '../../Constants/Constant'
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() =>{
    Axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`)
    .then((response) => {
        setMovie(response.data.results[1]);
    });
  }, [])
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie?imageBaseUrl+movie.backdrop_path:""}`}}>
        <div className='bannerContent'>
            <h1 className='bannerTitle'>{movie?movie.title:""}</h1>
            <div className='bannerButton'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='bannerDescription'>
                {movie?movie.overview:""}
            </h1>
        </div>
        <div className="bannerFadeBottom"></div>
    </div>
  )
}

export default Banner
