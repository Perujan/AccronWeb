import React from "react";
import "../Pages/Privacy.css";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

export default function Privacy() {
  return (
    <>
      <section class="breadcrumb breadcrumb_bg1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="fw-bold fs-4 text-white">
                    Privacy policy
                    <span className="fw-bold fs-4" style={{ color: "red" }}>
                      {}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">OUR PROMISE</h6>
          <p class="mb-0">
            Accron Revolutions (Private) Limited will respect your privacy and
            ensure that all sensitive and personal information provided to us is
            lawfully processed and held in accordance with the Data Protection
            Act. Personal/sensitive information is deemed to be any information
            that identifies a living individual.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            CONTROLLING YOUR INFORMATION
          </h6>
          <p class="mb-0">
            Accron Revolutions (Private) Limited will control the data you
            supply, and we agree to collect and control this information in
            accordance with the Data Protection Act. You may ask for personal
            information such as Name, Address, Date of birth, Email Address,
            Telephone Number, and this information will not be shared with any
            third parties. You may withdraw your consent at any time by emailing
            us at support@accronautobot.com and we will return or destroy your
            personal information within a week of receipt of your withdrawal of
            consent. Cookies information such as pages you visited, and your IP
            address will be recorded by us or third parties from your browser as
            set out in this policy.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">USING YOUR INFORMATION</h6>
          <p class="mb-0">
            Accron Revolutions (Private) Limited use your information to proceed
            your requests and send Newsletters, Promotion Email and Discounts.
            You may also stop receiving these above by sending us email at
            support@accronautobot.com and from the opt out option in the emails
            too.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">COOKIES</h6>
          <p class="mb-0">
            Cookies are small data files that a website you visit may save on
            your computer or handheld device that usually includes an anonymous
            unique identifier. Our Website may use cookies for user
            authentication, keeping track of your preferences, promotional
            campaigns, tracking our audience size and traffic patterns, and in
            certain other cases. We may include small graphic images in our
            email messages and newsletters to determine whether the messages
            were opened and the links were viewed.
          </p>
          <p>
            Third-party advertisers may also create and access cookies, which
            will be subject to their privacy policies we accept no
            responsibility or liability for the use of such third parties
            cookies. If you do not wish cookies to be placed on your PC or
            handheld device, then they can be disabled in your web browser. The
            option to do so is normally found in your browsers “security
            settings” section. Please note that permanently disabling cookies in
            your browser may hinder your use of our Websites as well as other
            websites and interactive services.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">SECURITY</h6>
          <p class="mb-0">
            All security on our Websites is treated seriously. Where applicable,
            we undertake security steps, including use of SSL technology, on our
            back-end systems that store customer account information and to
            protect data transmissions. However, this is not a guarantee that
            such data transmissions cannot be accessed, altered or deleted due
            to firewall or other security software failures. If you have any
            further concerns about security, please email our Customer Service
            team at support@accronautobot.com
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">REFUND POLICY</h6>
          <p class="mb-0">
            We understand that sometimes customers may need to cancel their
            service with us and request a refund. Our company accepts refund
            requests for services that have not been completed or started. All
            refund requests must be made through the payment media used to make
            the original payment. We cannot issue refunds through other means.
            View more about our
            <span>
              <a>
                <Link to="/Refund"> Refund Policy</Link>
              </a>
            </span>
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">POLICY CHANGES</h6>
          <p class="mb-0">
            Changes in this policy will be posted on our Websites. You are
            advised to check our Websites regularly to view our most recent
            privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}
