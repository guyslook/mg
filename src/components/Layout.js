import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.png";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
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
                title
                companyaddress
                sociallinks {
                  facebook
                  twitter
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Helmet title={node.frontmatter.title} />
            <Navbar />
            <div id="page-wrap">
              <div className="top">
                <Link to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="Heritage Engineering North West LTD"
                    style={{ width: "300px" }}
                  />
                </Link>
              </div>
              <div className="hidden-xs">
                <Services />
              </div>

              {children}
              <div className="visible-xs">
                <Services />
              </div>
            </div>

            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
