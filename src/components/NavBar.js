import { Link, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "../styles/Navbar.scss";

const NavBar = ({ searchedDescription, setSearchedDescription }) => {
  return (
    <>
      <ul className="nav nav-pills bg-light d-flex flex-row justify-content-around">
        <li className="nav-item my-2 pages-links ">
          <h5>
            <Link to="/" className="link">
              Home
            </Link>
          </h5>
          <h5>
            <Link to="/charts" className="link">
              Chart
            </Link>
          </h5>
          <h5>
            <Link to="/bureau" className="link">
              Exchange
            </Link>
          </h5>
        </li>
        <li className="nav-item my-2 search-bar">
          <form
            className="form-inline d-flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search description"
              aria-label="Search"
              value={searchedDescription}
              onChange={(event) => setSearchedDescription(event.target.value)}
            />
          </form>
        </li>
        <li className="nav-item my-2 settings">
          <button className="settings-button">
            <FiSettings size={30} />
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
