import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "../styles/Navbar.scss";
import { useState } from "react";
import Settings from "./Settings";
import { destroySession } from "../Utils";
import { useUser } from "../context/userContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { setSession } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSettings = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const clearSession = () => {
    setSession(undefined);
    destroySession();
    return navigate("/register");
  };

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
        <li className="nav-item my-2 settings">
          <button className="settings-button" onClick={handleOpenSettings}>
            <FiSettings size={30} />
          </button>
          <Settings isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </li>
        <li className="nav-item my-1 logout">
          <button className="logout-button" onClick={clearSession}>
            <h5>Logout</h5>
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
