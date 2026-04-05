import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';

function App() {
  

  return (
    <div className="min-h-screen bg-slate-900 text-white">
     <Header/>
     <Slider/>
     <ProductionHouse/>
     <GenreMovieList/>
    </div>
  )
}

export default App;
