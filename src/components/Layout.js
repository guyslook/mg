import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

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
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          ))}
        </div>
      )}
    />
  </div>
);

export default TemplateWrapper;
