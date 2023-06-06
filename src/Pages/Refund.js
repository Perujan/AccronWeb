import React from "react";
import "../Pages/Privacy.css";

export default function Refund() {
  return (
    <>
      <section class="breadcrumb breadcrumb_bg1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="fw-bold fs-4 text-white">
                    Refund policy
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
          <p class="mb-0">
            We understand that sometimes, due to unforeseen circumstances, you
            may need to cancel your service with us. Our company accepts refund
            requests for services that have not been completed or started.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            For web development and mobile app development services, we offer a
            full refund within the first 14 days of your purchase. After this
            period, we will issue a pro-rata refund based on the work completed
            at the time of cancellation.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            For digital marketing services, we offer a full refund within the
            first 7 days of your purchase. After this period, we will issue a
            pro-rata refund based on the work completed at the time of
            cancellation.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            For graphic designing services, we offer a full refund within the
            first 3 days of your purchase. After this period, we will issue a
            pro-rata refund based on the work completed at the time of
            cancellation.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            Please note that all refund requests must be made through the
            payment media used to make the original payment. We cannot issue
            refunds through other means.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            We cannot offer refunds for services that have already been
            completed or delivered to the customer. If you have any questions
            about our refund policy or need to request a refund, please contact
            us through the payment media you used to make the original payment.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            We strive to provide high-quality services to our customers and want
            to ensure that you are completely satisfied with the work we do for
            you. If you have any concerns or issues with our services, please
            contact us immediately so we can work to resolve them.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <p class="mb-0">
            Thank you for choosing Accron Revolutions Private Limited for your
            needs
          </p>
        </div>
      </div>
    </>
  );
}
