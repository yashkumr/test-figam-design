import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      {/* topbar */}
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src="https://s3-alpha-sig.figma.com/img/76b4/0c12/bab4d20856c3962d4a42e0d1e593fa55?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FBF3JhjPuIyLCNcUwTJXZtMhWliAWWrQ1b1d1rHkizqOP2drwYMK-A3ADvfRpu5efg0BGyJFde--21QF68u-XXPkk9Ic0p4fn2JLnoc5AJzl3uRW4e37cKdT9BPwop9yai7Y8C1SFrBc6~XGYxmZXes7YoEzZjAYK6uMzXCKuFyVgCBWnDt1IoMvgQqnCefiAOb4HENM8fSr4r95j7OmusR7Rj2hG5swa2xEY2p4~q1X6L2ROqM---2sb3stzwDYFlK2OR~ltvXQfU~blDxvyFmXIrRuo92~jB~0Jd1bkGe2JWRv-tGB2SmpwBo1MP2pdppWMfPms~pBMzGKXXZTrw__" />
          </NavLink>
        </div>
        <div className="search">
          {/* <CiSearch /> */}
          <form action="">
            <input type="text" placeholder="Search here" />
          </form>
        </div>
        <div className="icons">
          <NavLink to="/" className="login-signup">
            Login/Signup
          </NavLink>
        </div>
      </div>
      {/* end topbar */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Deals
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Coupon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Stores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* end navbar */}
    </>
  );
};

export default Header;
