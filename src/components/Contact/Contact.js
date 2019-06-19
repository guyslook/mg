import React from "react";
import { Button } from "rsuite";

require("./Contact.scss");

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <div className="contactform container content">

          {/* <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> */}

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Name"/>
  </div>
</div>


<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="Email"/>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>General enquiry</option>
        <option>Website audit</option>
        <option>Training request</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
Would you like to receive tips and tricks for succeeding online?
  <div class="control">
    <label class="radio">
      <input type="radio" name="tricks"/>
      Yes
    </label>
    <div></div>
    <label class="radio">
      <input type="radio" name="tricks"/>
      No
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <Button type="submit" class="is-link">Submit</Button>
  </div>
</div>
</form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
