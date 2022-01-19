
import React from 'react'
import Header from './Header'
import axios from "axios";
import { useState,useEffect } from 'react';
import "./MovieThumbnail.scss"
import "./Projects.scss"
import MovieThumbnail from './MovieThumbnail';
function Projects() {
    const [allMovie,setAllMovie]=useState([]);
    const [currentPage,setCurrentPage]=useState([2]);
    const [loadMore,setLoadMore]=useState("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&fbclid=IwAR3I44DSstLqakp4_H5O6ZxkKBs2NcZ6KybWd7yfDkj4X4TlhWhNflfwRK8");



    async function createMovieObject(results){
        results.forEach(async movie => {
            const data =await movie;
              setAllMovie(myArray  =>[...myArray,data]);

        });
        
    }

    async function  getAllMovies(){
        const response = await axios(loadMore);
        const data = await response.data;
        setCurrentPage(currentPage+1);
        setLoadMore(`${"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page="}${currentPage}${"&fbclid=IwAR3I44DSstLqakp4_H5O6ZxkKBs2NcZ6KybWd7yfDkj4X4TlhWhNflfwRK8"}`);
        createMovieObject(data.results);
    }



    useEffect(()=>{
        getAllMovies();
        
    },[]);

    return (
        
        <div>
           <Header/>
           <div className='projects'>

           
            {
                allMovie.map((movie,index)=>
                <div className='project_thumbnail'>
                <MovieThumbnail
                id={movie.id}
                poster_path={movie.poster_path}
                original_title={movie.original_title}
                overview={movie.overview}
                vote_count={movie.vote_count}
                />
                </div>

                )
            }
           
            </div>
            <button className='load_more' onClick={()=>getAllMovies()}>Load More</button>
        </div>
    )
}

export default Projects
