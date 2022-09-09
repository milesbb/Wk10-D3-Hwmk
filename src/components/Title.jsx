import { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="d-flex text-center text-md-left w-100 mt-3 mb-5">
        <h1 className="mx-5">
          TV Shows
          <button
            className="btn btn-secondary dropdown-toggle rounded-0 net-button mx-5"
            style={{
              backgroundColor: "black",
              color: "grey",
              border: "1px solid white",
            }}
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <div className="dropdown-menu" id="categoryMenu"></div>
        </h1>

        <div className="ml-auto mr-5 justify-right text-right d-none d-md-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-text-left text-right mt-3 net-button p-1"
            style={{
              width: "2rem",
              height: "1.5rem",
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
            }}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-fill net-button mt-3 ml-2 p-1 "
            style={{
              width: "2rem",
              height: "1.5rem",
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
            }}
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </div>
      </div>
    );
  }
}
export default Title;
