import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";

const { Navbar, Nav, Form, FormControl, Button } = require("react-bootstrap");

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar style={{ color: "white" }}>
      <Link to="/">
        <img
          src={logo}
          width="100rem"
          className="d-block mx-auto img-responsive mx-5"
          alt="netflix logo"
        />
      </Link>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
          <Link to="/tv-shows" className="nav-link text-white">
            TV Shows
          </Link>
          <Nav.Link href="#link" style={{ color: "white" }}>
            Movies
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "white" }}>
            My List
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "white" }}>
            Back Office
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder={location.pathname === "/tv-shows" ? "Search in TV-Shows..." : "Search..."}
            className="mr-sm-2"
            style={{ color: "white", width: "70%" }}
          />
          <Button variant="" style={{ color: "white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search magni pointer"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
        </Form>
        <span className="mx-3 pointer">KIDS</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bell-fill mx-1 pointer"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <a href="settings.html" target="_self">
          <img
            src={avatar}
            width="30rem"
            className="d-block img-responsive mx-2 pointer"
            alt="userphoto"
          />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill pointer"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
