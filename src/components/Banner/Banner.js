import React from "react";
import { Button } from "rsuite";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Banner.scss");

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannercolor: props.bannerColour
    };
  }

  render() {
    return (
      <div className="banner" style={{backgroundColor: this.state.bannercolor}}>

        <div class="columns">
          <div class="column is-4">
            <p>{this.props.bannerText}</p>
          </div>
          <div class="bannerLink column is-8">
            <AniLink cover bg={this.props.bannerColour} to={this.props.bannerButtonLink}>
                <Button className="btn">{this.props.bannerButtonText} →</Button>
            </AniLink>
          </div>
      </div>
      </div>
    );
  }
}

export default Banner;
