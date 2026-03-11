import React from 'react';

const App = () => {
  return (
    <main>
      <form action="/" id="form">
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
            <input type="text" required />
          </label>

          {/* Last Name */}
          <label>
            <p>Last Name</p>
            <input type="text" required />
          </label>
        </section>
        <br />

        {/* This part holds the Email Address */}
        <section id="three">
          <label>
            <p>Email Address</p>
            <input id="email" type="text" />
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
              <input type="radio" name="option" id="" />
              <span>General Inquiry</span>
              </label>


            <label>
              <input type="radio" name="option" id="" />
              <span>Support Request</span>
            </label>
          </div>

        </section>
        <br />

        {/* This holds the message */}
        <section id="five">
          <div>
            <span>Message</span>
            </div>

            <div>
              <textarea name="" id=""></textarea>
            </div>
        </section>
        <br />

        {/* This holds Consent of sent information */}
        <section id="six">
          <label>
            <input type="checkbox" name="" id="" />
            <span>I consent to being contacted by the team</span>
            </label>
            <br /><br />
          <input type="submit" value="Submit" />
        </section>
      </form>
    </main>
  );
}

export default App;