import React from "react";
import Successful from "./component/Success";
import { useState } from "react";

export default function App() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email_address, set_email_address] = useState("");
  const [message, set_message] = useState("");
  const [query_selected, set_query_selected] = useState("");

  const [submit_status, set_submit_status] = useState(false);
  const [email_format, set_email_format] = useState(true);
  const [checkbox, set_checkbox] = useState(false);
  const [valid, set_valid] = useState(false);

  function verified_info() {
    if (
      first_name &&
      last_name &&
      submit_status &&
      checkbox &&
      query_selected
    ) {
      return true;
    } else {
      return false;
    }
  }

  function field_handler(e) {
    if (e.target.name == "first_name") {
      set_first_name(e.target.value);
    } else if (e.target.name == "last_name") {
      set_last_name(e.target.value);
    } else if (e.target.name == "email_address") {
      set_email_address(e.target.value);
      email_handler()
      const final_email_output = email_handler();
      set_email_format(final_email_output);
    } else if (e.target.name == "message") {
      set_message(e.target.value);
    } else if (e.target.type == "checkbox") {
      set_checkbox(e.target.checked);
    } else if (e.target.type == "radio") {
      set_query_selected(e.target.value);
    }
  }

  function email_handler() {
    const pattern = /^[a-zA-Z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,3}$/;
    if (email_address.trim() == "") {
      return false;
    } else if (pattern.test(email_address)) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    
      set_submit_status(true);
  

    const final_email_output = email_handler();

    set_email_format(final_email_output);

    if (verified_info() && final_email_output) {
      set_valid(true);
      setTimeout(() => {
        location.assign(
          "https://www.youtube.com/watch?v=0zWRjgathjA&list=RD0zWRjgathjA&start_radio=1"
        );
      }, 1000);
    }
  }

  return (
    <main>
      {/* This is the message that is shown when the form submission is Successful */}
      {valid && <Successful />}

      <form action="/" id="form" onSubmit={(e) => handleSubmit(e)}>
        {/* This part holds the heading */}
        <section id="one">
          <h2>Contact Form</h2>
        </section>
        <br />

        {/* This Part holds the First Name and the Last Name */}
        <section id="two">
          {/* First Name */}
          <label>
            <p>First Name</p>
            <input
              name="first_name"
              value={first_name}
              type="text"
              onChange={(e) => field_handler(e)}
            />
            {submit_status && !first_name ? (
              <span className="error_state">This field is required</span>
            ) : (
              ""
            )}
          </label>

          {/* Last Name */}
          <label>
            <p>Last Name</p>
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={(e) => field_handler(e)}
            />
            {submit_status && !last_name ? (
              <span className="error_state">This field is required</span>
            ) : (
              ""
            )}
          </label>
        </section>
        <br />

        {/* This part holds the Email Address */}
        <section id="three">
          <label>
            <p>Email Address</p>
            <input
              name="email_address"
              value={email_address}
              id="email"
              type="text"
              onChange={(e) => field_handler(e)}
            />
            {submit_status && !email_format ? (
              <span className="error_state">
                Please enter a valid email address
              </span>
            ) : (
              ""
            )}
          </label>
        </section>
        <br />

        {/* This part holds the selection */}
        <section id="four">
          {/* The base of the Selection */}
          <div>
            Query type <sup>*</sup>
          </div>

          {/* The actual selections */}
          <div>
            {/* These are the options available */}
            <label>
              <input
                type="radio"
                name="option"
                value={"general"}
                id=""
                onChange={(e) => field_handler(e)}
              />
              <span>General Inquiry</span>
            </label>

            <label>
              <input
                type="radio"
                name="option"
                value={"support"}
                id=""
                onChange={(e) => field_handler(e)}
              />
              <span>Support Request</span>
            </label>
          </div>

          {/* This is the error message */}
          {submit_status && !query_selected ? (
            <span className="error_state">Please select a query type</span>
          ) : (
            ""
          )}
        </section>
        <br />

        {/* This holds the message */}
        <section id="five">
          <div>
            <span>Message</span>
          </div>

          <div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => field_handler(e)}
            ></textarea>
          </div>

          {submit_status && !message ? (
            <span className="error_state">This field is required</span>
          ) : (
            ""
          )}
        </section>
        <br />

        {/* This holds Consent of sent information */}
        <section id="six">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              id=""
              onChange={(e) => field_handler(e)}
            />
            <span>I consent to being contacted by the team</span>
          </label>
          {submit_status && !checkbox ? (
            <span className="error_state">
              To submit this form, please constent to being contacted
            </span>
          ) : (
            ""
          )}
          <br />
          <br />
          <input type="submit" value="Submit" />
        </section>
      </form>
    </main>
  );
}
