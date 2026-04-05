import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';



function Slider() {
  const [movies,setmovies]=useState([]);
  const sliderRef=useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, [])

 const getTrendingMovies = () => {
  GlobalApi.getTrendingVideos()
  // GlobalApi.getTrendingVideos()
    .then(response => {
     console.log(response.data.Search);
      setmovies(response.data.Search||[]);
      // setmovies(response.data.items);
    })
    .catch(error => {
       console.log(error)
    });
};

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
      className="hidden md:block text-white text-[40px] absolute left-2 top-[50%] -translate-y-1/2 z-10 cursor-pointer opacity-70 hover:opacity-100" 
    />

    {/* Right Arrow */}
    <HiChevronRight 
      onClick={slideRight} 
      className="hidden md:block text-white text-[40px] absolute right-2 top-[50%] -translate-y-1/2 z-10 cursor-pointer opacity-70 hover:opacity-100" 
    />

    {/* Slider */}
  <div 
      ref={sliderRef}
      className="flex overflow-x-auto scroll-smooth no-scrollbar "
    >
    {
      movies?.map((item, index) => (
        <div
          key={index}
          className="min-w-[90%] mx-[5%]  flex-shrink-0  px-4 md:px-30 pt-7 mb-5"
          >
                  <img
                     src={item.Poster}
                      alt={item.Title}
                      className="w-full aspect-[20/9] object-fit object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
                  />

                 <h3 className="text-white mt-2 text-center text-sm">
                     {item.Title}
             
                 </h3>
          </div>
        ))
      }
  </div>

</div>
)
}





export default Slider;
