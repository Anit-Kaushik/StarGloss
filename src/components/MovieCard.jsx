import React from 'react'

function MovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-200 ease-in-out  cursor-pointer'>
        <img src={movie.Poster} alt="" className='w-[110px] md:w-[200px] rounded-lg  h-80 hover:border-[3px] border-gray-400  '/>
        <h2 className='w-[110px] md:w-[200px] mt-3 ml-0 font-semibold'>{movie.Title}</h2>
    </section>
  )
}

export default MovieCard;
