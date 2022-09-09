import { Component } from "react";
import "./carousel.css";
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
        {!this.props.isLoading && (
            <div className="wrapper">
          {console.log("tester")}
          {console.log(this.props.shows.Search)}
          {console.log()}
          <section id="sectionA1">
            <a className="arrow_ting" href="#sectionA3">
              ‹
            </a>
            <div className="item">
              <img src={this.props.shows.Search[0].Poster}  alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[1].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[2].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[3].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[4].Poster} alt="TV-Show" />
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
            </div>
            <div className="item">
              <img src={this.props.shows.Search[6].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[7].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[8].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[9].Poster} alt="TV-Show" />
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
            </div>
            <div className="item">
              <img src={this.props.shows.Search[7].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[4].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[6].Poster} alt="TV-Show" />
            </div>
            <div className="item">
              <img src={this.props.shows.Search[8].Poster} alt="TV-Show" />
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
