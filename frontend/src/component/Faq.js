import "./style.css";
function Faq() {
  return (
    <div id="FAQ">
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      <div class="accordion acc-box" id="accordionExample">
        <div class="accordion-item acc-box-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4>How can I register as a worker on MistryHub?</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              To register as a worker on MistryHub, you can visit our website
              and navigate to the registration page specifically designed for
              workers. Fill in the required information, such as your name,
              contact details, and the services you provide (e.g., painter,
              electrician). Once registered, you'll gain access to the platform
              and can start showcasing your skills to potential clients.
            </div>
          </div>
        </div>
        <div class="accordion-item acc-box-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4>Can I book services on MistryHub as a user?</h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body acc-box-item">
              Absolutely! MistryHub provides a seamless platform for users to
              book various services. Whether you need a plumber, carpenter, or
              any other skilled worker, simply browse through the available
              categories, select the desired service, and provide relevant
              details. Our system will connect you with qualified workers who
              can fulfill your requirements. Booking a service on MistryHub is
              quick, convenient, and reliable.
            </div>
          </div>
        </div>
        <div class="accordion-item acc-box-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4>
                How can workers track their ratings, earnings, and rewards on
                the MistryHub dashboard?
              </h4>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <code>
                {" "}
                <ul>
                  <li style={{ color: "blue" }}>
                    MistryHub offers a comprehensive dashboard for registered
                    workers, providing easy access to important information such
                    as ratings, earnings, and rewards.
                  </li>
                  <li style={{ color: "blue" }}>
                    Once logged in to the worker dashboard, you'll find
                    dedicated sections that display your overall rating based on
                    customer feedback. This allows you to assess your
                    performance and identify areas for improvement.
                  </li>
                  <li style={{ color: "blue" }}>
                    In terms of earnings, the dashboard provides a clear
                    breakdown of your income, including details on completed
                    services, payment status, and any pending payouts. This
                    helps you track your earnings and ensures transparency in
                    financial transactions.
                  </li>
                  <li style={{ color: "blue" }}>
                    Furthermore, MistryHub offers a rewards program for
                    outstanding workers. The dashboard showcases any rewards or
                    recognition you have received, highlighting your
                    achievements and motivating you to excel further.
                  </li>
                </ul>
                <p style={{ color: "green" }}>
                  Overall, the worker dashboard on MistryHub serves as a
                  centralized hub for workers to monitor their ratings,
                  earnings, and rewards, enabling you to stay informed and
                  motivated in your professional journey.
                </p>
              </code>
            </div>
          </div>
        </div>
        <div class="accordion-item acc-box-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h4>
                How does MistryHub ensure the quality and reliability of its
                workers?
              </h4>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body acc-box-item">
              At MistryHub, we prioritize the quality and reliability of our
              workers. We have a stringent screening process in place to verify
              the skills, experience, and background of every worker registered
              on our platform. Additionally, users can leave ratings and reviews
              after availing services, which helps maintain transparency and
              accountability. We continuously monitor worker performance and
              take necessary actions to ensure that only skilled and trustworthy
              professionals are part of our network. Your satisfaction and peace
              of mind are our top priorities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
