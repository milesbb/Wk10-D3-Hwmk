import { Component } from "react";

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
        <div className="overlay">
          <a
            style={{ fontSize: "1rem" }}
            href={
              "https://www.imdb.com/title/" +
              this.props.shows[this.props.index].imdbID
            }
          >
            <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
              {this.props.shows[this.props.index].Title}
            </p>
            <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
              {this.props.shows[this.props.index].Year}
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
