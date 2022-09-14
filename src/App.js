import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TVShows from './components/TVShows';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Warning from './components/Warning';
import BackOffice from './components/BackOffice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv-shows' element={<TVShows/>} />
        <Route path='/details/:movieId' element={<MovieDetails />} />
        <Route path="*" element={<Warning variant="danger" message="unable to load page" />} />
        <Route path='/back-office' element={<BackOffice />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
