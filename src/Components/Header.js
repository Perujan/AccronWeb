import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../Components/Hearder.css";
import Logo from "../Assets/logo2.png";

function Header() {
  const pageName = useLocation().pathname;
  console.log(pageName);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    if (pageName == "/") {
      setHome(true);
    } else if (pageName == "/About") {
      setAbout(true);
    } else if (pageName == "/Services") {
      setServices(true);
    } else if (pageName == "/Contact") {
      setContact(true);
    }
  }, []);

  return (
    <>
      <div className="main" id="top">
        <nav
          class="navbar navbar-expand-lg navbar-dark fixed-top py-3"
          data-navbar-on-scroll="data-navbar-on-scroll "
        >
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={Logo} alt="" height={80} />
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto  pt-2 pt-lg-0 ">
                <li class="nav-item">
                  <Link
                    className={home ? "nav-link active" : "nav-link"}
                    to="/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    className={about ? "nav-link active" : "nav-link"}
                    to="/About"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={services ? "nav-link active" : "nav-link"}
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={contact ? "nav-link active" : "nav-link"}
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item disabled">
                  <a class="nav-link disabled" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
              <form class="d-flex py-3 py-lg-0">
                <a
                  class="btn btn-danger rounded-pill order-0 "
                  href="https://calendar.app.google/yKStDefsVJ4XGEcv6"
                  role="button"
                >
                  Let's Talk
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
