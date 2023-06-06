import "../Components/Cl.css";
import Thiva from "../Assets/new/Thiva.png";
import TmD from "../Assets/new/thanu.png";
import Thishan from "../Assets/new/Thishan.png";

function Cl() {
  return (
    <>
      <section id="portfolio" class="portfolio bg-dark">
        <div class="container">
          <div class="row text-center mt-5">
            <h1 class="display-4 fw-bold text-capitalize lead1">
              Meet Our Team
            </h1>
            <div class="heading-line"></div>
            <p class="lead"></p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={Thiva} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase lead1">MR.Thivakar</h4>
                  <p class="text-white m-0">
                    CEO & Founder of Accron Revolutions
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={TmD} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase lead1">MR.Thanukanth</h4>
                  <p class="text-white m-0">
                    UI/UX Designer in Accron Revolutions
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={Thishan} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-danger btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase lead1">MR.Thishan</h4>
                  <p class="text-white m-0">
                    Mobile Application & Full-stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cl;
