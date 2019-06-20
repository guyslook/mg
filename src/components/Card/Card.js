import React from "react";
import { Button } from "rsuite";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Card.scss");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  render() {
    return (
        <div className="AaCard">
          <img src="" />
          <div class="AaCardContent">
            <div>
              <div class="content">
                <div>
                  <h4>{this.props.title}</h4>
                  <h5>{this.props.date}</h5>
                </div>
                <p>{this.props.text}</p>
                <AniLink cover bg="#359dd9" to={this.props.buttonLink}>
                  <Button className="btn">Read article →</Button>
                </AniLink>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
