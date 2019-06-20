import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMap, FaEnvelope  } from "react-icons/fa";
import { Button } from "rsuite";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var markdown = require("markdown").markdown;
    const newAddressHTML = markdown.toHTML(
      this.props.address.replace(/\\/g, "  ")
    );
    return (
      <footer className="footer">
        <div className="footerAddress hidden">{ReactHtmlParser(newAddressHTML)}</div>
        <footer class="ftco-footer ftco-section">
      <div>
        <div class="columns">
          <div class="column">
            <div class="ftco-footer-widget is-4">
              <h2 class="ftco-heading-2">Environ Digital</h2>
              <p>Helping businesses succeed online</p>
              <div className="footerSocial">
          <ul>
            {this.props.socialLinks.facebook ? (
              <li>
                <a href={this.props.socialLinks.facebook}>
                  <FaFacebook size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.twitter ? (
              <li>
                <a href={this.props.socialLinks.twitter}>
                  <FaTwitter size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.instagram ? (
              <li>
                <a href={this.props.socialLinks.instagram}>
                  <FaInstagram size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
            </div>
          </div>
          <div class="column">
            <div class="ftco-footer-widget col-4">
              <h2 class="ftco-heading-2">Our Services</h2>
              <ul class="list-unstyled">
                <li><a href="/website-design-and-development" class="py-2 d-block">Websites</a></li>
                <li><a href="/social-media-setup-and-content-creation" class="py-2 d-block">Social media</a></li>
                <li><a href="/training-and-workshops" class="py-2 d-block">Training</a></li>
              </ul>
            </div>
          </div>
          <div class="column">
             <div class="ftco-footer-widget col-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="/" class="py-2 d-block">Home</a></li>
                <li><a href="/about" class="py-2 d-block">About</a></li>
                <li><a href="/our-personal-approach" class="py-2 d-block">Approach</a></li>
                <li><a href="/blog" class="py-2 d-block">Blog</a></li>
                <li><a href="/contact-us" class="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Get in touch</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                {/* <li><FaMap size="1em" /><span class="text"></span></li> */}
	                <li><FaPhone size="1em" /><span class="text"> +447807042123</span></li>
	                <li><a href="mailto:hello@environ.digital"><FaEnvelope size="1em" /><span class="text"> hello@environ.digital</span></a></li>
	              </ul>

                <AniLink cover bg="#359dd9" to="/contact-us">
                  <Button className="btn">Start a project →</Button>
                </AniLink>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
          </div>
        </div>
      </div>
    </footer>
      </footer>
    );
  }
}

export default AaFooter;
