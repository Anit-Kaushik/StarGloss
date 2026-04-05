import axios from "axios";

import  genreList  from "../components/Constant/GenresList.jsx";

const movieBaseUrl = "https://www.omdbapi.com/";

const api_key = "8c93b64f";


const getTrendingVideos = () => {
  
  return axios.get(movieBaseUrl, {
  params: {
    s: "Horror",
    apikey: api_key
  }
});
};


const getMovieByGenreId = (id) => {
  const genre = genreList.find(g => g.id === id);

  if (!genre) {
    throw new Error("Genre not found");
  }

  return axios.get(movieBaseUrl, {
    params: {
      s: genre.name,   // search keyword
      apikey: api_key
    }
  });
};



export default { getTrendingVideos 
  ,  getMovieByGenreId
  
};