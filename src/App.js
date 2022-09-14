import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TVShows from './components/TVShows';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv-shows' element={<TVShows/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
// background: "rgb(0, 0, 0)", background: "linear-gradient(0deg, rgba(0,0,0,1) 75%, rgba(34,34,34,1) 100%)", color: "white", overscrollBehavior: "none"
export default App;
