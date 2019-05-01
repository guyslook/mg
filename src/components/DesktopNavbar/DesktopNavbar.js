import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Nav, Dropdown } from "rsuite";

require("rsuite/dist/styles/rsuite.min.css");
require("./DesktopNavbar.scss");

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
      <nav className="desktop-nav is-transparent is-hidden-touch">
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "menu" } } }
                sort: { fields: [frontmatter___menuorder], order: ASC }
              ) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      smalltitle
                      menupath
                      menuorder
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <Nav>
              <AniLink cover bg="#359dd9" to="/">
                <Nav.Item>Home</Nav.Item>
              </AniLink>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <AniLink cover bg="#359dd9" to={node.frontmatter.menupath}>
                  <Nav.Item>{node.frontmatter.smalltitle}</Nav.Item>
                </AniLink>
              ))}
            </Nav>
          )}
        />
      </nav>
    );
  }
}

export default Navbar;
