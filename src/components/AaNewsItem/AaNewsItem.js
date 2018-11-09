import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Link } from "gatsby";

require("./AaNewsItem.scss");

class AaNewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="AaNewsItem">
        <div
          className="content"
          style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
          key={this.props.id}
        >
          <p>
            <Link className="has-text-primary" to={this.props.slug}>
              <h3>{this.props.title}</h3>
            </Link>
            <span> &bull; </span>
            <small>{this.props.date}</small>
          </p>
          <p>
            {this.props.excerpt}
            <br />
            <br />

            <a href={this.props.slug}>
              <Button bsStyle="primary">Keep Reading →</Button>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AaNewsItem;
