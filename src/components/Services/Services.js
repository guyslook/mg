import React from "react";
import Card from "../Card/Card";

require("./Services.scss");

class Services extends React.Component {
  render() {
    return (
      <div className="services-links">
        <div className="service-links-inner container">
          <div>
            <h2>Our Services</h2>
          </div>
          <div className="columns">
            <Card
              title="Website Design and Development"
              text="We create bespoke websites for you to show off what you do to your clients."
              buttonText="ButtonText"
              buttonLink="/website-design-and-development"
            />
            <Card
              title="SEO and Marketing"
              text="SEO jargon is everywhere. What does it even mean? Let us break it down nice and simply for you. We'll help people find you through google search."
              buttonText="ButtonText"
              buttonLink="/seo-and-marketing"
            />
            <Card
              title="Social media setup & content creation"
              text="Let us help you reach out to your customers with social media training and some bespoke content to catch their attention."
              buttonText="ButtonText"
              buttonLink="/social-media-setup-and-content-creation"
            />
            <Card
              title="Training and workshops"
              text="We can help you gain confidence working with your business online, we offer classes to help you with all aspects of the online world."
              buttonText="ButtonText"
              buttonLink="/training-and-workshops"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
