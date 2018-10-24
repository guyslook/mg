import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import AaJumbotron from "../components/AaJumbotron/AaJumbotron";
import Content, { HTMLContent } from "../components/Content";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <AaJumbotron
        title={title}
        description={description}
        featuredimage={featuredimage}
      />
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  featuredimage: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BasicPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={<Helmet title={`${post.frontmatter.title}`} />}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BasicPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BasicPage;

export const pageQuery = graphql`
  query BasicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage
      }
    }
  }
`;
