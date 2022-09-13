import { Component } from "react";
import "./carousel.css";
import CarouselComp from "./CarouselComp";
import Loading from "./Loading";
import Warning from "./Warning";

class MediaCarousel extends Component {
  render() {
    return (
      <div>
        <h3 className="text-left ml-5 my-1">{this.props.title}</h3>

        {this.props.isLoading && <Loading />}

        {this.props.errorOccurred && (
          <Warning
            variant={this.props.alert.variant}
            message={this.props.alert.message}
          />
        )}
        
        {/* start of carousel */}

        {!this.props.isLoading && this.props.errorOccurred === false && (
            <div className="wrapper">
          {console.log("tester")}
          {console.log(this.props.shows.Search)}
          {console.log()}
          <section id="sectionA1">
            <a className="arrow_ting" href="#sectionA3">
              ‹
            </a>
            <div className="item pe-auto">
              <img src={this.props.shows.Search[0].Poster}  alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[0].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[0].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[0].Year}</p>
              </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[1].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[1].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[1].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[1].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[2].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[2].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[2].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[2].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[3].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[3].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[3].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[3].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[4].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[4].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[4].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[4].Year}</p>
                </a>
              </div>
            </div>
            <a className="arrow_ting" href="#sectionA2">
              ›
            </a>
          </section>
          <section id="sectionA2">
            <a className="arrow_ting" href="#sectionA1">
              ‹
            </a>
            <div className="item">
              <img src={this.props.shows.Search[5].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[5].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[5].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[5].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[6].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[6].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[6].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[6].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[7].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[7].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[7].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[7].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[8].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[8].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[8].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[8].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[9].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[9].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[9].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[9].Year}</p>
                </a>
              </div>
            </div>
            <a className="arrow_ting" href="#sectionA3">
              ›
            </a>
          </section>

          <section id="sectionA3">
            <a className="arrow_ting" href="#sectionA2">
              ‹
            </a>
            <div className="item">
              <img src={this.props.shows.Search[2].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[2].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[2].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[2].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[7].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[7].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[7].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[7].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[4].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[4].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[4].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[4].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[6].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[6].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[6].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[6].Year}</p>
                </a>
              </div>
            </div>
            <div className="item">
              <img src={this.props.shows.Search[8].Poster} alt="TV-Show" />
              <div className="overlay">
              <a style={{fontSize: "1rem"}} href={'https://www.imdb.com/title/'+ this.props.shows.Search[8].imdbID}>
                <p className="overlay-text ml-auto text-right fixed-bottom mb-5 text-white font-weight-bold w-50">{this.props.shows.Search[8].Title}</p>
                <p className="overlay-text text-right fixed-bottom mb-3 text-white font-weight-bold">{this.props.shows.Search[8].Year}</p>
                </a>
              </div>
            </div>
            <a className="arrow_ting" href="#sectionA1">
              ›
            </a>
          </section>
        </div>
        )}

        
        {/* end of carousel */}
      </div>
    );
  }
}

export default MediaCarousel;
