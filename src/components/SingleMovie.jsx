import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  render() {
    return (
      <div className="item mx-auto">
        <img
          className="d-block"
          src={this.props.shows[this.props.index].Poster}
          alt="First slide"
          style={{ width: "16rem" }}
        />
        <Link
          style={{ fontSize: "1rem" }}
          to={"/details/" + this.props.shows[this.props.index].imdbID}
        >
          <div className="overlay d-flex">
            <div className="mx-auto w-75 mt-auto">
              <p className="overlay-text ml-auto text-white font-weight-bold">
                {this.props.shows[this.props.index].Title}
              </p>
              <p className="overlay-text text-white font-weight-bold">
                {this.props.shows[this.props.index].Year}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SingleMovie;
