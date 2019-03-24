import React from "react";

class TwoUpImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="container">
        <div class="columns">
          <div class="column">
            <img src={this.props.imageone} />
          </div>
          <div class="column">
            <img src={this.props.imagetwo} />
          </div>
        </div>
      </div>
    );
  }
}

export default TwoUpImages;
