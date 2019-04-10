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
        <div
          className={
            (this.props.dark && "dark") +
            " " +
            this.props.class +
            " TextElement"
          }
        >
          <div className="container content">
            <div className="columns is-vcentered">
              <div
                className="textText column"
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(this.props.html)
                }}
              />
              {this.props.image && (
                <div
                  className="textImage column"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(this.props.image)
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AaTextElement;
