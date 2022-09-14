import { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

class Home extends Component {
  goTV = () => {
    useNavigate("/tv-shows");
  };

  render() {
    return (
      <>
        <Jumbotron>
          <h1>Welcome to Netflix!</h1>
          <p>Grab some popcorn and watch a few 'flix!'</p>
          <p>
          <Link to="/tv-shows">
          <Button variant="primary" >
              Take me to movies!
            </Button>
          </Link>
            
          </p>
        </Jumbotron>
        <Footer />
      </>
    );
  }
}

export default Home;
