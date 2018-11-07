import React from "react";
import Gallery from "react-grid-gallery";

require("./AaGallery.scss");

class AaGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="aagallery">
        <Gallery images={this.props.images} />
      </div>
    );
  }
}

export default AaGallery;
