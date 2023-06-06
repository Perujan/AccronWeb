import React from "react";
import "../Components/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="row ">
            <li>
              <a href="#">
                Marketing Update <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                Qucik Promotions<i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                Career Guidences <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </div>

          <div class="row">
            <ul>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/Services">Our Services</Link>
              </li>
              <li>
                <Link to="/Privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/Refund">Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
            </ul>
          </div>

          <div class="row text-center">
            <h5>All rights Reserved by Accron Revolutions ©2020 </h5>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
