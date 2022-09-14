import { Component } from "react";
import CarouselComp from "./CarouselComp";
import Title from "./Title";

class MainContainer extends Component {
  state = {
    shows: {
      shows1: [],
      shows2: [],
      shows3: [],
    },
    isLoading: true,
    errorOccurred: false,
    alert: { variant: "", message: "" },
    formOpen: false,
  };

  fetchShows = async (showNum, query) => {
    try {
      const response1 = await fetch(
        "http://www.omdbapi.com/?apikey=13964cd1&s=harry%20potter"
      );

      const response2 = await fetch(
        "http://www.omdbapi.com/?apikey=13964cd1&s=lord%20of%20the%20rings"
      );

      const response3 = await fetch(
        "http://www.omdbapi.com/?apikey=13964cd1&s=star%20wars"
      );

      if (response1.ok && response2.ok && response3.ok) {
        const shows1 = await response1.json();
        const shows2 = await response2.json();
        const shows3 = await response3.json();
        if (shows1.length === 0 || shows2.length === 0 || shows3.length === 0) {
          console.log("no comments");
          this.setState({
            errorOccurred: true,
            alert: {
              variant: "info",
              message: "No Shows found in Database, Contact Support",
            },
          });
        }
        this.setState({
          shows: { shows1: shows1, shows2: shows2, shows3: shows3 },
        });
        console.log("Main Test");
        console.log(this.state.shows);
      } else {
        console.log("Fetch error occurred");
        this.setState({
          errorOccurred: true,
          alert: { variant: "danger", message: "Unable to retrieve data" },
        });
      }
    } catch (error) {
      console.log("Base Fetch error occurred");
      this.setState({
        errorOccurred: true,
        alert: { variant: "danger", message: "Problem with fetch" },
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchShows();
  };

  render() {
    return (
      //   <div className="h-100 w-100" style={{ color: "white" }}>

      <div className="h-100 w-100" style={{ color: "white" }}>
        <Title />
        <CarouselComp
          shows={this.state.shows.shows1}
          title="Trending Now"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        />
        <CarouselComp
          shows={this.state.shows.shows2}
          title="Watch It Again"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        />
        <CarouselComp
          shows={this.state.shows.shows3}
          title="New Releases"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        />
        {/* <MediaCarousel
          shows={this.state.shows.shows1}
          title="Trending Now"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        />
        <MediaCarousel
          shows={this.state.shows.shows2}
          title="Watch It Again"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        />
        <MediaCarousel
          shows={this.state.shows.shows3}
          title="New Releases"
          errorOccurred={this.state.errorOccurred}
          isLoading={this.state.isLoading}
          alert={this.state.alert}
        /> */}
      </div>
    );
  }
}

export default MainContainer;
