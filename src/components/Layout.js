import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "../components/Navbar/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div id="outer-container">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div id="page-wrap">
      <div className="top">
        <Link to="/">
          <img
            src={logo}
            alt="Tunnel Ridge Outlook"
            style={{ width: "300px" }}
          />
        </Link>
      </div>
      {children}
    </div>
    <footer>
      <div class="address">
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "menu" } } }
              ) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      menupath
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link className="navbarItem" to={node.frontmatter.menupath}>
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </footer>
  </div>
);

export default TemplateWrapper;
