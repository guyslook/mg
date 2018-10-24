import React from "react";
import Gallery from "react-grid-gallery";

require("./AaGallery.scss");

class AaJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return <Gallery images={this.props.images} />;
  }
}

export default AaJumbotron;
