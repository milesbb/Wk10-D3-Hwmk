import { Component, useEffect, useState } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
import Warning from "./Warning";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([false, "", ""]);

  const params = useParams();
  const ID = params.movieId;
  let movieHold;

  const fetchMovieDetails = async () => {
    console.log(ID);
    if (ID) {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=13964cd1&i=" + ID.toString()
        );
        if (response.ok) {
          movieHold = await response.json();
          setLoading(false);
          setMovie([
            movieHold.Title,
            movieHold.Poster,
            movieHold.imdbID,
            movieHold.Released,
            movieHold.Director,
            movieHold.Genre,
            movieHold.Plot,
          ]);
          console.log("Details Loaded");
          console.log(response);
          console.log("MOVIEHOLD", movieHold);
          console.log(movie);
        } else {
          setError([true, "danger", "Error with request"]);
          setLoading(false);
        }
      } catch (error) {
        setError([true, "danger", "Error with loading details"]);
        setLoading(false);
      }
    } else {
      setError([true, "info", "Movie ID not found"]);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching movie details");
    fetchMovieDetails();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error[0] && <Warning variant={error[1]} message={error[2]} />}
      {!loading && !error[0] && (
        <div className="mx-auto">
          <Jumbotron fluid className="align-middle" style={{ height: "10rem", backgroundColor: "#2e2e2e"}}>
            <h1 className="text-white align-middle">{movie[0]}</h1>
          </Jumbotron>

          <div className="w-75 mx-auto d-flex">
            <img className="ml-5" src={movie[1]} />
            <div className="ml-5">
              <div className="w-75 mx-auto">
                <p className="text-white">Released: {movie[3]}</p>
                <p className="text-white">Directed By: {movie[4]}</p>
                <p className="text-white">Genre: {movie[5]}</p>
                <p className="text-white">Description: {movie[6]}</p>
              </div>

              <div className="d-flex justify-content-around mt-5">
                <a href={"https://www.imdb.com/title/" + movie[2]}>
                  <Button
                    style={{
                      backgroundColor: "#f5c519",
                      color: "black",
                      border: "black",
                    }}
                  >
                    Take me to the IMDb page
                  </Button>
                </a>

                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "red",
                  }}
                >
                  Play Movie
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieDetails;
