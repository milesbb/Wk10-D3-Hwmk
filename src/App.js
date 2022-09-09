import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}
// background: "rgb(0, 0, 0)", background: "linear-gradient(0deg, rgba(0,0,0,1) 75%, rgba(34,34,34,1) 100%)", color: "white", overscrollBehavior: "none"
export default App;
