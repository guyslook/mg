import React from "react";
import Button from "react-bootstrap/lib/Button";

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
      <div className="column">
        <div className="card">
          <img src="" />
          <div class="card-content">
            <div class="content">
              <h4>{this.props.title}</h4>
              <p>{this.props.text}</p>
              <a href={this.props.buttonLink}>
                <Button className="btn">More →</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
