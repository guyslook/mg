import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import { elastic as Menu } from "react-burger-menu";

var menustyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <nav className="is-transparent">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          styles={menustyles}
          isOpen={this.state.menuOpen}
          left
        >
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </Menu>
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "settings" } } }
              ) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      menuitems {
                        menupath
                        menutitle
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <div>
              <Link to={`/`}>
                <h3>{data.allMarkdownRemark.totalCount}</h3>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                    <h3>
                      {console.log(node.frontmatter.menuitems.menupath)}
                      {node.frontmatter.menuitems.menupath}{" "}
                      <span>— {node.frontmatter.menuitems.menutitle}</span>
                    </h3>
                  </div>
                ))}
              </Link>
            </div>
          )}
        />
      </nav>
    );
  }
}

export default Navbar;
