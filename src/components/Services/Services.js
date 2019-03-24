import React from "react";
import Card from "../Card/Card";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Services.scss");

class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="services-links">
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
        </div> */}
        <div className="homepage">
          <div className="homepageIntro">
            <div className="columns is-gapless">
              <div className="column is-half" />
              <div className="column is-half">
                <div className="homepageBox">
                  <h2>
                    Our aim is to give you the tools you need to make your
                    business sucessful online. We build websites, help you with
                    search engine optimisation, increase your confidence with
                    social media, and provide training and support with all
                    aspects of the internet, software and online resources.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="homepageWebsite">
            <div className="columns is-gapless">
              <div className="column is-one-quarter">
                <div className="homepageBox">
                  <h2>Website design and development</h2>
                  <p>
                    Let's get that website working for you and your customers
                  </p>
                  <AniLink
                    cover
                    bg="#3f1c80"
                    to="/website-design-and-development"
                  >
                    find out more →
                  </AniLink>
                </div>
              </div>
              <div className="column is-three-quarters hidden-xs">
                <div className="homepageBackground" />
              </div>
            </div>
          </div>
          <div className="homepageAudience">
            <div className="columns is-gapless">
              <div className="column is-one-quarter">
                <div className="homepageAudiencePersonal">
                  <div className="homepageBox">
                    <h2>Making it personal</h2>
                    <p>
                      We spend time learning all about you and your brand. You
                      work directly with a developer and we’re always around to
                      help.
                    </p>
                    <AniLink cover bg="#22526c" to="/our-personal-approach">
                      find out more →
                    </AniLink>
                  </div>
                </div>
              </div>
              <div className="column is-three-quarter">
                <div className="homepageAudienceAudience">
                  <div className="columns is-gapless">
                    <div className="column is-two-thirds" />
                    <div className="column is-one-third">
                      <div className="homepageBox">
                        <h2>Reaching your audience</h2>
                        <p>
                          Let us help you reach out to your customers with
                          social media training and content to catch their
                          attention.
                        </p>
                        <AniLink
                          cover
                          bg="#b20e1b"
                          to="/social-media-setup-and-content-creation"
                        >
                          find out more →
                        </AniLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homepageTraining">
            <div className="columns is-gapless">
              <div className="column is-half" />
              <div className="column is-half">
                <div className="homepageBox">
                  <h2>Training and workshops</h2>
                  <p>
                    Build your confidence working with your business online. We
                    offer classes to help you with all aspects of the online
                    world.
                  </p>
                  <AniLink cover bg="#e48c35" to="/training-and-workshops">
                    find out more →
                  </AniLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Services;
