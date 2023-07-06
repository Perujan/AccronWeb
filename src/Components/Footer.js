import React from "react";
import "../Components/Footer.css";
import Img01 from "../Assets/twitter.png"
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className={"bg-footer"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-4 mt-5"}>
                            <h5 className={"fw-bold mb-3"}>Help</h5>
                            <NavLink to={"/Term-Conditions"} className={"fw-bold my-3 text-decoration-none text-white"}>Term & Conditions</NavLink>
                            <br/>
                            <NavLink to={"/privcy-policy"} className={"fw-bold my-3 text-decoration-none text-white"}>Privacy Police</NavLink>
                            <br/>
                            <NavLink to={"/refund-policy"} className={"fw-bold my-3 text-decoration-none"}>Refund Police</NavLink>
                            <div className={"fw-bold my-3"}>Career</div>

                        </div>
                        <div className={"col-md-4 mt-5 mb-3"}>
                            <h5 className={"fw-bold"}>Company</h5>
                            <div className={"fw-bold my-3"}>Home</div>
                            <div className={"fw-bold my-3"}>Service</div>
                            <div className={"fw-bold my-3"}>About</div>
                            <div className={"fw-bold my-3"}>Contact</div>
                            <div className={"fw-bold my-3"}>Portfolio</div>
                        </div>

                        <div className={"col-md-4 mt-5 d-flex justify-content-center flex-column"}>
                            <div className={"lets-container d-flex justify-content-between align-items-center"}>
                                <h5 className={"fw-bold ms-4 mt-1"}>let's Start</h5>
                                <div>
                                    <button className={"btn contact-footer-btn"}>Contact us</button>
                                </div>
                            </div>

                            <div className={"d-flex mt-4 ms-5"}>
                                <img src={Img01}/>
                                <img src={Img01}/>
                                <img src={Img01}/>
                                <img src={Img01}/>
                            </div>
                        </div>
                    </div>
                    <h5 className={"text-end"}>All Rights  Reserved By  Accron Revolutions    2020   </h5>

                </div>
                {/*<div class="footer">*/}
                {/*  <div class="row ">*/}
                {/*    <li>*/}
                {/*      <a href="#">*/}
                {/*        Marketing Update <i class="fa-brands fa-facebook"></i>*/}
                {/*      </a>*/}
                {/*      <a href="#">*/}
                {/*        Qucik Promotions<i class="fa-brands fa-instagram"></i>*/}
                {/*      </a>*/}
                {/*      <a href="#">*/}
                {/*        Career Guidences <i class="fa-brands fa-linkedin"></i>*/}
                {/*      </a>*/}
                {/*    </li>*/}
                {/*  </div>*/}

                {/*  <div class="row">*/}
                {/*    <ul>*/}
                {/*      <li>*/}
                {/*        <Link to="/Contact">Contact Us</Link>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <Link to="/Services">Our Services</Link>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <Link to="/Privacy">Privacy Policy</Link>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <Link to="/Terms">Terms and Conditions</Link>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <Link to="/Refund">Refund Policy</Link>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <Link to="/">Careers</Link>*/}
                {/*      </li>*/}
                {/*    </ul>*/}
                {/*  </div>*/}

                {/*  <div class="row text-center">*/}
                {/*    <h5>All rights Reserved by Accron Revolutions ©2020 </h5>*/}
                {/*  </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default Footer;
