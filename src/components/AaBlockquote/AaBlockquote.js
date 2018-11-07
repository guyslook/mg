import React from "react";

require("./AaBlockquote.scss");

class AaBlockquote extends React.Component {
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

export default AaBlockquote;
