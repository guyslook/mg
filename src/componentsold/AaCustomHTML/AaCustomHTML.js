import React from "react";

require("./AaCustomHTML.scss");

class AaCustomHTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AaCustomHTML">
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    );
  }
}

export default AaCustomHTML;
