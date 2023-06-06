import React from "react";
import "../Pages/Home.css";
import Image1 from "../Assets/cm1.png";
import Image2 from "../Assets/cm2.png";
import Image3 from "../Assets/cm3.png";
import Image4 from "../Assets/cm4.png";
import Image5 from "../Assets/bt.png";
import { useTypewriter } from "react-simple-typewriter";
import Sd1 from "../Assets/new/sd-1.jpg";
import Sd4 from "../Assets/new/sd-4.jpg";
import Sd3 from "../Assets/new/sd-3.jpg";
import { FcAutomatic, FcBusinessman, FcApproval } from "react-icons/fc";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Web development",
      "Mobile Application ",
      "UI/UX",
      "Customer Support ",
    ],
    loop: 0,
  });
  return (
    <>
      {/**Hero start 
    <section class="hero">
   
  <div class="content ">
  
   
     
     <div className="row gx-4 gx-lg-5 align-items-center my-5 ">
     <h1 class="fw-bold fs-4 text-white"></h1>
        <p class="fw-bold fs-4 text-white"> we are committed to delivering the results our clients need. We believe that our experience, customization, quality, communication, and core values make us the right partner for your next software development project.</p>
                <div class="col-lg-5">
                   
    
                </div>
            </div>
            
            
          
    </div>
   
    
  <div class="waves"></div>
  
  </section>*/}

      <br />
      <br />

      {/*CAROUSEL end*/}

      {/***** Features Small Start *****/}

      <section class="section home-feature bg-offer">
        <br />
        <p class="fw-bold fs-4 text-white text-center">
          {" "}
          we are committed to delivering the results our clients need. We
          believe that our experience, customization, quality, communication,
          and core values make us the right partner for your next software
          development project.
        </p>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12  "
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i>
                        <FcAutomatic size={75} />
                      </i>
                    </div>
                    <h5 class="features-title">Modern Strategy</h5>
                    <p>
                      Accron Revolutions is a smart approach company provides
                      Cutting egde services to the clients{" "}
                    </p>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i>
                        <FcBusinessman size={75} />
                      </i>
                    </div>
                    <h5 class="features-title">Best Relationship</h5>
                    <p>Contact us immediately if you have a question in mind</p>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i>
                        <FcApproval size={75} />
                      </i>
                    </div>
                    <h5 class="features-title">Ultimate Marketing</h5>
                    <p>Your Dreams are our passions </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      {/***** Welcome Area Start *****/}

      <div class="welcome-area">
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>
                  We provide the best <strong>strategy</strong>
                  <br />
                  to grow up your <strong>business</strong>
                </h1>
                <p>
                  Accron Revolutions Software Development Company, believe that
                  trust, loyalty, and honesty are the foundation of any
                  successful business relationship. That's why we are committed
                  to building long-term partnerships with our clients based on
                  these core values.
                </p>
                <a
                  class="btn btn-danger"
                  href="https://calendar.app.google/yKStDefsVJ4XGEcv6"
                  role="button"
                >
                  Appoinment Booking{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***** Header Text End *****/}
      {/*<img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL+Images} alt="..." />*/}

      <br />
      <br />
      <h2>
        Our Traditional to Smart Trends{" "}
        <span style={{ fontsize: "2", color: "red" }}>{text}</span>{" "}
      </h2>

      {/***** Content 2 *****/}

      <div class="container bg-hmp col-xxl-8 px-4 py-5">
        <div class="row  flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={Sd1}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              height={300}
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="lead1 display-5 fw-bold lh-1 mb-3 ">
              High-Quality Solutions
            </h1>
            <p class="text-white fw-bold fs-4 ">
              We understand that our clients entrust us with their sensitive
              information and rely on us to deliver high-quality solutions.
              That's why we prioritize transparency and open communication
              throughout the development process. We keep our clients informed
              of our progress and address any concerns promptly
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              {/**  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>*/}
            </div>
          </div>
        </div>
      </div>
      {/***** Content 2 end *****/}

      <br />
      {/***** Content 3 *****/}
      {/* error */}
      <section class="py-8 " id="testimonial">
        <div class="container-lg ">
          <br />
          <div class="row flex-center">
            <div class="col-sm-10 col-md-5 col-lg-5 order-md-0 text-center text-md-start">
              <img class="img-fluid mb-4" src={Sd4} alt="" />
            </div>
            <div class="col-sm-10 col-md-6 col-lg-6 text-center text-md-start offset-md-1">
              {/**  <h6 class="fw-bold fs-4 display-3 lh-sm"> Meet Client Satisfaction <br />by using product</h6>
              <p class="my-4 pe-xl-5"> The rise of mobile devices transforms the way we consume.Elevant channels such as Facebook.</p>*/}
              <div
                class="carousel slide"
                id="carouselExampleDark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100">
                      <div class="col-12">
                        <h5 class="my-4 fw-bold lh-sm">
                          Words &amp; Mind of CEO
                        </h5>
                        <p class="mb-0 text-center text-md-start ">
                          Your digital transformation starts with the right
                          software solutions. us guide you on the journey.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="assets/img/gallery/user.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Thivakar</h5>
                            <p class="fw-normal mb-0">CEO</p>
                            <p class="fw-normal mb-0"> Accron Revolutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <div class="row h-100">
                      <div class="col-12">
                        <h5 class="my-4 fw-bold lh-sm">
                          Meet Our Full-stack Developer
                        </h5>
                        <p class="mb-0 text-center text-md-start">
                          Building great software requires more than just coding
                          skills. Our developers are creative problem-solvers
                          who bring ideas to reality.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="../Assets/bt.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Thishan</h5>
                            <p class="fw-normal mb-0">Full-stack Developer </p>
                            <p class="fw-normal mb-0"> Accron Revolutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row h-100">
                      <div class="col-12">
                        <h5 class="my-4 fw-bold lh-sm">
                          Meet Our Creative Designer
                        </h5>
                        <p class="mb-0 text-center text-md-start">
                          These professionals are responsible for designing the
                          layout, flow, and functionality of a website or
                          application, with the goal of creating a user-friendly
                          interface that makes it easy for customers to navigate
                          and engage with the product.
                        </p>
                      </div>
                      <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                        <div class="d-flex align-items-md-center">
                          <img
                            class="img-fluid me-4 me-md-3 me-lg-4"
                            src="assets/img/gallery/user-2.png"
                            width="100"
                            alt=""
                          />
                          <div class="w-lg-50 my-3">
                            <h5 class="mb-0 fw-bold">Thanukanth</h5>
                            <p class="fw-normal mb-0">UI/UX Engineer </p>
                            <p class="fw-normal mb-0"> Accron Revolutions </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="position-relative mt-sm-n5">
                  <a
                    class="carousel-control-prev carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/***** Content 3 end *****/}

      {/***** Content 4 *****/}
      <div class="container bg-dark">
        <div class="row">
          <div class="col-12 mx-auto align-items-center text-center">
            <br />
            <p class="mb-4  fw-bold fs-4 text-white text-center">
              Trusted by Brands
            </p>
          </div>
        </div>
        <div class="row align-items-center justify-content-center justify-content-lg-around">
          <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
            <img src={Image1} alt="" height={45} />
          </div>
          <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
            <img src={Image2} alt="" height={45} />
          </div>
          <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
            <img src={Image5} alt="" height={65} />
          </div>
          <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
            <img src={Image4} alt="" height={45} />
          </div>
          <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
            <img src={Image3} alt="" height={75} />
          </div>
        </div>
        <br />
      </div>
      {/***** Content 4 end *****/}

      {/***** Content 5 *****/}
      <section class="py-6">
        <hr />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image">
              <img
                class="img-fluid mb-4 mb-md-0"
                src={Sd3}
                width="850"
                alt=""
              />
            </div>
            <div class="col-md-7 col-lg-5 text-center text-md-start">
              <h1 class=" fw-bold lh-sm">Creating User-Centric Experiences </h1>
              <p class="my-4">
                From ideation to launch, our mobile developers use the latest
                tools and technologies to create apps that delight users.
              </p>
              <div class="d-flex justify-content-center d-md-inline-block">
                <a class="pe-2 pe-sm-3 pe-md-4" href="!#">
                  <img
                    src="assets/img/illustrations/google-play.png"
                    width="160"
                    alt=""
                  />
                </a>
                <a href="!#">
                  <img
                    src="assets/img/illustrations/app-store.png"
                    width="160"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/***** Content 5 end *****/}

      {/*  frequent*/}
    </>
  );
}
