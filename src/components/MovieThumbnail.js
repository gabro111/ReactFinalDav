import React, { useState } from 'react'
import "./MovieThumbnail.scss"


const MovieThumbnail = ({ id, original_title, poster_path, vote_count, realese_data,overview }) => {


    return (
        <div className="card">
            <a href="#">
                <div className="img1" style={{
                    backgroundImage: `url(${"http://image.tmdb.org/t/p/original"}${poster_path})`
                }} ></div>
                <div className="img2" style={{
                    backgroundImage: `url(${"http://image.tmdb.org/t/p/original"}${poster_path})`
                }} ></div>
                <div className="title">{original_title}</div>
                <div className="text">{overview}</div>
                <a href=""><div className="catagory">Movie <i className="fas fa-film"></i></div></a>
                <a href=""><div className="views">{vote_count}  <i className="far fa-eye"></i> </div></a>
            </a>
        </div>
    )
}
export default MovieThumbnail