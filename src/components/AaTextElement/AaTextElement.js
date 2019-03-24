import React from "react";
import showdown from "showdown";

require("./AaTextElement.scss");

const converter = new showdown.Converter();

class AaTextElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={(this.props.dark && "dark") + " TextElement"}>
          <div
            className="container content"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(this.props.html)
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AaTextElement;
