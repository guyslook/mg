import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

require("./AaTextElement.scss");

class AaTextElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var markdown = require("markdown").markdown;
    const newHTML = markdown.toHTML(this.props.html);

    return (
      <React.Fragment>
        <div className="TextElement">
          <div className="container content">{ReactHtmlParser(newHTML)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default AaTextElement;
