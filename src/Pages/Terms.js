import React from "react";
import "../Pages/Privacy.css";

export default function Terms() {
  return (
    <>
      <section class="breadcrumb breadcrumb_bg1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="fw-bold fs-4 text-white">
                    Terms and Conditions
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
            Welcome to our website! These terms and conditions ("Terms") apply
            to your use of our website and the services we offer, including web
            development, mobile app development, digital marketing, and graphic
            designing services (collectively, the "Services"). By accessing our
            website and using our Services, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use our
            website or Services.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Use of the Website and Services
          </h6>
          <p class="mb-2">
            1.1 You must be at least 18 years old to use our website and
            Services.
          </p>
          <p class="mb-2">
            1.2 You agree to use our website and Services only for lawful
            purposes and in compliance with all applicable laws and regulations.
          </p>
          <p class="mb-2">
            1.3 You are responsible for maintaining the security and
            confidentiality of your account login information, including your
            username and password.
          </p>
          <p class="mb-2">
            1.4 We reserve the right to terminate or suspend your access to our
            website and Services at any time, for any reason, without notice.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">Intellectual Property</h6>
          <p class="mb-2">
            2.1 All content on our website, including but not limited to text,
            graphics, logos, images, and software, is the property of our
            company or our licensors and is protected by intellectual property
            laws.
          </p>
          <p class="mb-2">
            2.2 You may not use any content from our website for commercial
            purposes without our prior written consent.
          </p>
          <p class="mb-2">
            2.3 We respect the intellectual property rights of others and expect
            our users to do the same. If you believe that your intellectual
            property rights have been infringed upon, please contact us
            immediately.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">Limitation of Liability</h6>
          <p class="mb-2">
            3.1 We are not responsible for any damages, including but not
            limited to direct, indirect, incidental, consequential, or punitive
            damages, arising from your use of our website or Services.
          </p>

          <p class="mb-2">
            3.2 We make no warranties or representations, express or implied,
            about the accuracy, reliability, completeness, or timeliness of the
            content on our website or the Services we offer.
          </p>

          <p class="mb-2">
            3.3 Our liability for any claim arising out of or relating to these
            Terms or your use of our website or Services shall be limited to the
            amount you paid us for the Services.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">Indemnification</h6>
          <p class="mb-0">
            4.1 You agree to indemnify and hold our company and our affiliates,
            officers, directors, agents, and employees harmless from any claim
            or demand, including reasonable attorneys' fees, arising out of your
            use of our website or Services or your violation of these Terms.
          </p>
        </div>

        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Governing Law and Dispute Resolution
          </h6>
          <p class="mb-2">
            5.1 These Terms and any disputes arising out of or relating to these
            Terms or your use of our website or Services shall be governed by
            and construed in accordance with the laws of Sri Lanka, without
            giving effect to any choice or conflict of law provision or rule.
          </p>
          <p class="mb-2">
            5.2 Any dispute arising out of or relating to these Terms or your
            use of our website or Services shall be resolved through arbitration
            in accordance with the rules of the American Arbitration
            Association. The arbitration shall be held in Vavuniya, and the
            arbitrator's decision shall be final and binding.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">Changes to These Terms</h6>
          <p class="mb-0">
            6.1 We reserve the right to modify these Terms at any time, without
            notice. Your continued use of our website and Services after any
            such modifications shall constitute your acceptance of the modified
            Terms.
          </p>
        </div>
        <div class="col-lg-6 text-justify mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">Contact Us</h6>
          <p class="mb-0">
            7.1 If you have any questions about these Terms or our website and
            Services, please contact us at support@accronautobot.com.
          </p>
        </div>
      </div>
    </>
  );
}
