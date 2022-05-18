import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";


function NavBar() {
  const { handleToken } = useContext(AuthContext);

  let token = JSON.parse(localStorage.getItem("user_token"));

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user_token");
    handleToken("");
    navigate("/");
  };
  const [click, setClick] = useState(false);
  const data=useSelector((state)=>state.carts.carts);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Emart
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart({data.length})
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink
                exact
                to="/signin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink> */}
               {token === null ? (
        <Link className="link" to={"/signin"}>
          Login
        </Link>
      ) : (
        <button id="logoutBtn" onClick={logout}>
          Logout
        </button>
      )}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;