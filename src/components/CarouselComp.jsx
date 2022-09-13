import { Component } from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import Loading from "./Loading";
import Warning from "./Warning";

class CarouselComp extends Component {
  render() {
    return (
      <div>
        <h3 className="text-left ml-5 my-5">{this.props.title}</h3>

        {this.props.isLoading && <Loading />}

        {this.props.errorOccurred && (
          <Warning
            variant={this.props.alert.variant}
            message={this.props.alert.message}
          />
        )}

        {/* start of carousel */}

        {/* SET 1 */}

        {!this.props.isLoading && this.props.errorOccurred === false && (
          <div className="position-relative">
            <Carousel indicators={false}>
              <Carousel.Item>
                <div className="d-flex justify-content-around">
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[0].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[0].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[0].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[0].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[1].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[1].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[1].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[1].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[2].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[2].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[2].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[2].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[3].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[3].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[3].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[3].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[4].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[4].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[4].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[4].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* SET 2 */}

              <Carousel.Item>
                <div className="d-flex">
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[5].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[5].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[5].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[5].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[6].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[6].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[6].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[6].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[7].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[7].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[7].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[7].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[8].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[8].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[8].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[8].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[9].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[9].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[9].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[9].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* SET 3 */}

              <Carousel.Item>
                <div className="d-flex">
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[2].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[2].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[2].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[2].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[7].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[7].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[7].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[7].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[4].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[4].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[4].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[4].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[0].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[0].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[0].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[0].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="item mx-auto">
                    <img
                      className="d-block"
                      src={this.props.shows.Search[5].Poster}
                      alt="First slide"
                      style={{ width: "16rem" }}
                    />
                    <div className="overlay">
                      <a
                        style={{ fontSize: "1rem" }}
                        href={
                          "https://www.imdb.com/title/" +
                          this.props.shows.Search[5].imdbID
                        }
                      >
                        <p className="overlay-text ml-auto mr-1 text-right mb-5 text-white font-weight-bold w-50">
                          {this.props.shows.Search[5].Title}
                        </p>
                        <p className="overlay-text text-right mr-1 mb-3 text-white font-weight-bold">
                          {this.props.shows.Search[5].Year}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        )}
      </div>
    );
  }
}

export default CarouselComp;
