import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Button from "react-bootstrap/lib/Button";

var jumbotronstyles = {
  background: "#000000",
  height: "60vh"
};

export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <Jumbotron style={jumbotronstyles}>
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </div>
      </Jumbotron>
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>

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
      }
    }
  }
`;
