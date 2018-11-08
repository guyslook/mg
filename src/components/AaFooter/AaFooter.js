import React from "react";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <blockquote>
        {this.props.quote}
        <span>{this.props.author}</span>
      </blockquote>
    );
  }
}

export default AaFooter;
