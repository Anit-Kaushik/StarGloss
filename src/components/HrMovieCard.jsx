import React from 'react'

function HrMovieCard({movie}) {
    console.log(movie)
  return (
     <section className='hover:scale-110 transition-all duration-200 ease-in-out  cursor-pointer'>
     
        <img src={movie.Poster} alt="" className='aspect-[18/11] object-cover w-[110px] md:w-[250px]  rounded-lg  h-auto hover:border-[3px] border-gray-400 '/>
        <h2 className='w-[110px] md:w-[250px] mt-3 ml-2 font-semibold'>{movie.Title}</h2>
    </section>
  )
}

export default HrMovieCard
