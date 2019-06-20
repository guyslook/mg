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
            <p>{this.props.bannerText}</p>
          <div class="bannerLink ">
            <AniLink cover bg={this.props.bannerColour} to={this.props.bannerButtonLink}>
                <Button className="btn">{this.props.bannerButtonText} →</Button>
            </AniLink>
          </div>

      </div>
    );
  }
}

export default Banner;
