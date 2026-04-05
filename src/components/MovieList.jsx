import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';

function MovieList({genreId,index_}) {
    const [MovieList,setMovieList]=useState([])
    const sliderRef=useRef(null);
    useEffect(()=>{
    fetchMovieByGenreId();
  },[genreId])

    const fetchMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            
            setMovieList(resp.data?.Search || [])
        })
    }

     const slideLeft = () => {
    sliderRef.current.scrollLeft -=sliderRef.current.offsetWidth ;
  };
 const slideRight = () => {
    sliderRef.current.scrollLeft +=sliderRef.current.offsetWidth ;
  };

  return (
     <div className="relative">
     
         {/* Left Arrow */}
         <HiChevronLeft  
           onClick={slideLeft} 
           className={`hidden md:block text-white text-[40px] absolute left-2  -translate-y-1/2 z-10 cursor-pointer opacity-70 hover:opacity-100 ${index_%3==0?'top-[40%]':'top-[45%]'} `}
         />
     
         {/* Right Arrow */}
         <HiChevronRight 
           onClick={slideRight} 
           className={`hidden md:block text-white text-[40px] absolute right-2  -translate-y-1/2 z-10 cursor-pointer opacity-70 hover:opacity-100 ${index_%3==0?'top-[40%]':'top-[45%]'}`}
         />

    <div ref={sliderRef} className='flex gap-8 mt-3 overflow-x-auto  scroll-smooth no-scrollbar py-5 px-3'>
      {MovieList.map((item,index)=>(

       <> 
       {index_%3==0? <HrMovieCard key={item.id} movie={item}/> : <MovieCard key={item.id} movie={item}  /> } 
       </>
      ))}
    </div>
    </div>
  )
}

export default MovieList;
