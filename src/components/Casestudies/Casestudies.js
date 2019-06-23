import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../Card/Card.js";

require("./Casestudies.scss");

class Casestudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <section className="news">
            <div className="blogCards">
            <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "casestudies" } } }
                ) {
                  totalCount
                  edges {
                    node {
                      fields {
                        slug
                      }
                      excerpt(pruneLength: 400)
                      id
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `}
            render={data => (data.allMarkdownRemark.edges.map(({ node }) => (
                    <Card
                        id={node.id}
                        buttonLink={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        text={node.excerpt}
                    />
                ))
            )}
          />
            </div>
        </section>
        
      </div>
    );
  }
}

export default Casestudies;

