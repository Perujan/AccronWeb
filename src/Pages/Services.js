import React from "react";
import "../Pages/Services.css";
import Mbser from "../Assets/new/mb-ser.png";
import Webser from "../Assets/new/websrc.png";
import {
  FcTouchscreenSmartphone,
  FcAbout,
  FcPortraitMode,
  FcGallery,
  FcWikipedia,
  FcCurrencyExchange,
  FcAdvertising,
  FcAutomatic,
  FcBullish,
  FcMultipleDevices,
  FcComboChart,
  FcDataBackup,
  FcApproval,
  FcAndroidOs,
  FcVoicePresentation,
} from "react-icons/fc";

import { useTypewriter } from "react-simple-typewriter";

function Services() {
  const [services1] = useTypewriter({
    words: ["Empowering", "your digital ", "dreams."],
    loop: 0,
  });
  return (
    <>
      <br />
      {/***** Content 1 *****/}
      <section class="breadcrumb breadcrumb_bg1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="fw-bold fs-4 text-white">
                    Our Services{" "}
                    <span className="fw-bold fs-4" style={{ color: "red" }}>
                      {services1}
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/***** Content 1 end *****/}

      {/***** Content 2 *****/}

      <div class="services section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="service-item first-service">
                <div class="icon">
                  <FcTouchscreenSmartphone size={75} />{" "}
                </div>
                <h4>App Maintenance </h4>
                <p>
                  Choosing a software development company can be a challenging
                  decision, and we understand that you want to work with a
                  partner who can deliver the results you need. Here are some
                  reasons why we believe you should choose our software
                  development company:
                </p>
                <div class="text-button">
                  <a href="/">
                    Read More <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="service-item second-service">
                <div class="icon">
                  <FcAbout size={75} />
                </div>
                <h4>Rocket Speed of App</h4>
                <p>
                  We believe that trust, loyalty, and honesty are essential to
                  building strong, long-lasting relationships with our clients.
                  We prioritize these values in all our business dealings, and
                  we believe that they set us apart from other software
                  development companies.
                </p>
                <div class="text-button">
                  <a href="/">
                    Read More <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="service-item third-service">
                <div class="icon">
                  <FcBullish size={75} />
                </div>
                <h4>Multi Workflow Idea</h4>
                <p>
                  We keep our clients informed of our progress and provide
                  regular updates throughout the development process. We are
                  always available to answer any questions or address any
                  concerns our clients may have.
                  <a rel="nofollow" href="/" target="_blank"></a>
                </p>
                <div class="text-button">
                  <a href="/">
                    Read More <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="service-item fourth-service">
                <div class="icon">
                  <FcAutomatic size={75} />
                </div>
                <h4>Quality</h4>
                <p>
                  We follow best practices and industry standards in our
                  development processes to ensure that our solutions are
                  reliable, scalable, and secure.
                </p>
                <div class="text-button">
                  <a href="/">
                    Read More <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***** Content 2 end *****/}
      <br />
      {/***** Content 3 *****/}
      <section class="py-6 bg-dark">
        <div class="container ">
          <div class="row justify-content-center mb-6 text-white">
            <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
              <h6 class="fw-bold fs-4 display-3 lh-sm">
                Why you should choose <br />
                Our Services{" "}
              </h6>
              <p class="mb-0">
                We take a customer-centric approach to web development and
                mobile application development, ensuring that we create
                solutions that align with your business objectives and exceed
                your expectations.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcAdvertising size={90} />
                <h5 class="fw-bold text-white">Ads Campaigns</h5>
                <p class="mb-md-0 text-white">
                  Developing custom mobile applications for iOS and Android
                  platforms using cutting-edge technologies and user-centric
                  design principles to enhance user experiences and drive
                  business growth.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcCurrencyExchange size={90} />
                <h5 class="fw-bold text-white">Graphic Design</h5>
                <p class="mb-md-0 text-white">
                  You can relay on our amazing features list and also our
                  customer services.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcWikipedia size={90} />
                <h5 class="fw-bold text-white">Web Development</h5>
                <p class="mb-md-0 text-white">
                  Developing and designing responsive, scalable, and
                  user-friendly websites using the latest web technologies and
                  standards to deliver seamless user experiences and drive
                  online growth.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcGallery size={90} />
                <h5 class="fw-bold text-white">Digital Marketing</h5>
                <p class="mb-md-0 text-white">
                  Creating visually stunning and engaging designs for branding,
                  marketing, and advertising purposes using innovative design
                  tools and techniques to deliver impactful visual experiences.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcMultipleDevices size={90} />
                <h5 class="fw-bold text-white">
                  Enterprise Software Development
                </h5>
                <p class="mb-md-0 text-white">
                  Developing and implementing customized software solutions for
                  enterprises to optimize business processes, improve
                  productivity, and
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-6">
              <div class="text-center px-lg-3">
                <FcPortraitMode size={90} />
                <h5 class="fw-bold text-white">Customer Support</h5>
                <p class="mb-md-0 text-white">
                  Providing reliable and responsive customer support services,
                  including technical support, training, and maintenance, to
                  ensure optimal user experiences and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
      {/***** Content 3 end *****/}

      {/***** Content 4 *****/}
      <section class="py-6  ">
        <h6 class="fw-bold fs-4 display-3 lh-sm py-4 text-center">
          Ultimate features that we built
        </h6>
        <p class="my-4 pe-xl-5 text-center">
          The rise of mobile devices transforms the way we consume information
          entirely.
        </p>
        <div class="container">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5 order-md-1 text-center text-md-start">
                <img class="img-fluid mb-4" src={Webser} alt="" width="550" />
              </div>
              <div class="col-md-6 text-center text-md-start">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4">
                        <FcDataBackup size={90} />
                      </div>
                      <h5 class="fw-bold text-undefined">
                        1. Website Design and Development
                      </h5>
                      <p class="mt-2 mb-0">
                        We create responsive websites that are optimized for
                        both desktop and mobile devices. Our websites are
                        designed to be visually appealing, easy to navigate, and
                        optimized for search engines.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4">
                        <FcAdvertising size={90} />
                      </div>
                      <h5 class="fw-bold text-undefined">
                        2. Digital Marketing
                      </h5>
                      <p class="mt-2 mb-0">
                        Our digital marketing services include search engine
                        optimization (SEO), pay-per-click (PPC) advertising,
                        social media marketing, email marketing, and content
                        marketing. We use proven strategies to help our clients
                        increase their online visibility and generate more leads
                        and sales.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4">
                        <FcApproval size={90} />
                      </div>
                      <h5 class="fw-bold text-undefined">3. Branding</h5>
                      <p class="mt-2 mb-0">
                        We help businesses establish a strong brand identity
                        that resonates with their target audience. Our branding
                        services include logo design, brand messaging, and brand
                        strategy development.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <div class="py-4">
                        <FcComboChart size={90} />
                      </div>
                      <h5 class="fw-bold text-undefined">
                        4. Analytics and Reporting
                      </h5>
                      <p class="mt-2 mb-0">
                        We provide detailed analytics and reporting to help our
                        clients track their marketing performance and make
                        data-driven decisions. Our reports include key
                        performance indicators (Ks), metrics, and insights.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  class="btn btn-lg btn-success rounded-pill hover-top"
                  href="/"
                  role="button"
                >
                  Book an Appoinment
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
      {/***** Content 4 end *****/}

      {/***** Content 5 *****/}
      <section class="py-5" id="features">
        <div class="container-lg">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 order-md-0 text-center text-md-start">
              <img class="img-fluid" src={Mbser} width="550" alt="" />
            </div>
            <div class="col-md-7 col-lg-6 px-sm-5 px-md-0">
              <h6 class="fw-bold fs-4 display-3 lh-sm">
                Awesome App <br />
                Features
              </h6>
              <p class="my-4">
                Increase productivity with a simple to-do app. app for
                <br class="d-none d-xl-block" />
                managing your personal budgets.
              </p>
              <div class="d-flex align-items-center mb-5">
                <div>
                  <FcVoicePresentation size={90} />
                </div>
                <div class="px-4">
                  <h5 class="fw-bold text-danger">Fast performance</h5>
                  <p>
                    Delivering fast and responsive software and digital
                    solutions using optimized code,
                    <br class="d-none d-xl-block" /> advanced caching
                    techniques, and robust infrastructure to enhance user
                    <br class="d-none d-xl-block" /> experiences and drive
                    business growth.
                  </p>
                </div>
              </div>

              <div class="d-flex align-items-center mb-5">
                <div>
                  <FcAutomatic size={90} />
                </div>
                <div class="px-4">
                  <h5 class="fw-bold text-primary">Prototyping</h5>
                  <p>
                    Creating interactive and functional prototypes for
                    <br class="d-none d-xl-block" /> software and digital
                    products using industry-standard prototyping tools .
                    <br class="d-none d-xl-block" /> and techniques to test and
                    refine product concepts and improve user experiences
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-5">
                <div>
                  <FcAndroidOs size={90} />
                </div>
                <div class="px-4">
                  <h5 class="fw-bold text-success">Testing</h5>
                  <p>
                    Get your blood tests delivered atConducting comprehensive
                    testing and <br class="d-none d-xl-block" /> to ensure
                    high-quality and error-free software and digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/***** Content 5 end *****/}
    </>
  );
}

export default Services;
