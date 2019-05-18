import React from "react";
import { Button } from "rsuite";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Banner.scss");

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannercolor: "#" + props.bannerColour
    };
  }

  render() {
    return (
      <div className="banner" style={{backgroundColor: this.state.bannercolor}}>
      <div className="container">
        <div class="columns">
          <div class="column is-4 is-offset-1">
            <p>{this.props.bannerText}</p>
          </div>
          <div class="bannerLink column is-6 is-offset-1">
            <AniLink cover bg="#359dd9" to={this.props.bannerButtonLink}>
                <Button className="btn">{this.props.bannerButtonText} →</Button>
            </AniLink>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Banner;
