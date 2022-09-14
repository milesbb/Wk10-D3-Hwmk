import { Component } from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import Loading from "./Loading";
import Warning from "./Warning";
import SingleMovie from "./SingleMovie";

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

        {!this.props.isLoading && this.props.errorOccurred === false && (
          <div className="position-relative">
            <Carousel indicators={false}>
              {/* SET 1 */}

              <Carousel.Item>
                <div className="d-flex justify-content-around">
                  <SingleMovie shows={this.props.shows.Search} index="0" />
                  <SingleMovie shows={this.props.shows.Search} index="1" />
                  <SingleMovie shows={this.props.shows.Search} index="2" />
                  <SingleMovie shows={this.props.shows.Search} index="3" />
                  <SingleMovie shows={this.props.shows.Search} index="4" />
                </div>
              </Carousel.Item>

              {/* SET 2 */}

              <Carousel.Item>
                <div className="d-flex">
                  <SingleMovie shows={this.props.shows.Search} index="5" />
                  <SingleMovie shows={this.props.shows.Search} index="6" />
                  <SingleMovie shows={this.props.shows.Search} index="7" />
                  <SingleMovie shows={this.props.shows.Search} index="8" />
                  <SingleMovie shows={this.props.shows.Search} index="9" />
                </div>
              </Carousel.Item>

              {/* SET 3 */}

              <Carousel.Item>
                <div className="d-flex">
                  <SingleMovie shows={this.props.shows.Search} index="2" />
                  <SingleMovie shows={this.props.shows.Search} index="7" />
                  <SingleMovie shows={this.props.shows.Search} index="4" />
                  <SingleMovie shows={this.props.shows.Search} index="6" />
                  <SingleMovie shows={this.props.shows.Search} index="3" />
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
