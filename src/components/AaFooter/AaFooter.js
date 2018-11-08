import React from "react";
import { Link } from "gatsby";

// require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <footer className="footer">
        <div className="footerAddress">{this.props.address}</div>
        <div className="footerSocial">
          <ul>
            {this.props.socialLinks.facebook ? (
              <li>
                <a href={this.props.socialLinks.facebook}>Facebook</a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.twitter ? (
              <li>
                <a href={this.props.socialLinks.twitter}>Twitter</a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.instagram ? (
              <li>
                <a href={this.props.socialLinks.instagram}>Instagram</a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        {/* <div className="footerSocial">{this.props.socialLinks}</div> */}
      </footer>
    );
  }
}

export default AaFooter;
