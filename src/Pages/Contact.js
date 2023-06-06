import React from "react";
import "../Pages/Contact.css";
import { useTypewriter } from "react-simple-typewriter";
import { FcExport } from "react-icons/fc";

function Contact() {
  const [contact] = useTypewriter({
    words: ["Where", "creativity", "meets", "   technology. "],
    loop: 0,
  });
  return (
    <>
      <br />
      <section class="breadcrumb breadcrumb_bg4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="fw-bold fs-4 text-white">
                    About Us{" "}
                    <span className="fw-bold fs-4" style={{ color: "red" }}>
                      {contact}
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      <section class="py-5">
        <div class="container px-5">
          <div class="bg-contact rounded-3 py-5 px-4 px-md-5 mb-5">
            <div class="text-center mb-5">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-envelope"></i>
              </div>
              <h1 class="fw-bolder text-white">Get in touch</h1>
              <p class="lead fw-normal text-white mb-0">
                We'd love to hear from you
              </p>
            </div>
            <div class="row gx-5 justify-content-center">
              <div class="col-lg-8 col-xl-6">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Your Serivces</option>
                  <option value="1">Mobile Application Development</option>
                  <option value="2">Web application Development </option>
                  <option value="3">Digital Marketing</option>
                  <option value="3">Graphic Designing</option>
                </select>
                <br />
                <div class="mb-3">
                  <div class="row">
                    <div class="col">
                      <label
                        for="formGroupExampleInput"
                        class="form-label fw-bold  text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <label
                        for="formGroupExampleInput"
                        class="form-label fw-bold  text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <label
                    for="formGroupExampleInput"
                    class="form-label fw-bold  text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Email"
                  />
                </div>

                {/*<iframe title="Campus Tour" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.09714284892!2d80.4856578772048!3d8.760243649320477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc1501adfee1d7%3A0xb3abcf4df100dc26!2sCultural%20Hall%20-%20Urban%20Council%20Vavuniya!5e0!3m2!1sen!2slk!4v1678020610967!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fw-bold  text-white"
                  >
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="d-grid gap-2 d-md-block justify-content-md-end">
                  <button class="btn btn-success" type="button">
                    Send <FcExport />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
            <div class="col">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-chat-dots"></i>
              </div>
              <div class="h5 mb-2 ">Chat with us</div>
              <p class="text-muted mb-0">
                Chat live with one of our support specialists.
              </p>
            </div>
            <div class="col">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-people"></i>
              </div>
              <div class="h5">Ask the community</div>
              <p class="text-muted mb-0">
                Explore our community forums and communicate with other users.
              </p>
            </div>
            <div class="col">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-question-circle"></i>
              </div>
              <div class="h5">Support center</div>
              <p class="text-muted mb-0">
                {" "}
                Support to find solutions support@accronautobot.com
              </p>
            </div>
            <div class="col">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-telephone"></i>
              </div>
              <div class="h5">Call us</div>
              <p class="text-muted mb-0">
                Call us during normal business hours at (+94) 24 222 6465.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
