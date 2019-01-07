import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AaJumbotron from "../components/AaJumbotron/AaJumbotron";
import AaGallery from "../components/AaGallery/AaGallery";
import AaTextElement from "../components/AaTextElement/AaTextElement";
import Content, { HTMLContent } from "../components/Content";
import AaBlockquote from "../components/AaBlockquote/AaBlockquote";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  title,
  elements,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <div className="elements">
        {PostContent ? "" : ""}
        {elements &&
          elements.map(element => (
            <div className="element">
              {(element.type === "hero" && (
                <div className="heroimage">
                  <AaJumbotron
                    title={element.herotitle}
                    description={element.herodescription}
                    featuredimage={element.heroimage}
                    link={element.herolink}
                  />
                </div>
              )) ||
                (element.type === "text" && (
                  <div>
                    <AaTextElement html={element.paragraph} />
                  </div>
                )) ||
                (element.type === "gallery" && (
                  <div>
                    <AaGallery images={element.galleryitem} />
                  </div>
                )) ||
                (element.type === "quote" && (
                  <div>
                    <AaBlockquote
                      quote={element.quotetitle}
                      author={element.quoteauthor}
                    />
                  </div>
                ))}

              {/* {(Array.isArray(element.hero) &&
                element.hero.map(hero => (
                  <div className="heroimage">
                    <AaJumbotron
                      title={hero.herotitle}
                      description={hero.herodescription}
                      featuredimage={hero.heroimage}
                      link={hero.herolink}
                    />
                  </div>
                ))) ||
                (Array.isArray(element.text) &&
                  element.text.map(text => (
                    <div>
                      <AaTextElement html={text.paragraph} />
                    </div>
                  ))) ||
                (Array.isArray(element.gallery) &&
                  element.gallery.map(gallery => (
                    <div>
                      <AaGallery images={gallery.galleryitem} />
                    </div>
                  ))) ||
                (Array.isArray(element.quote) &&
                  element.quote.map(quote => (
                    <div>
                      <AaBlockquote
                        quote={quote.quotetitle}
                        author={quote.quoteauthor}
                      />
                    </div>
                  )))} */}
            </div>
          ))}
      </div>
    </div>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  elements: PropTypes.array,
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
        elements={post.frontmatter.elements}
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
        elements {
          type

          herodescription
          heroimage
          herotitle
          herolink

          paragraph

          galleryitem {
            src
            caption
            thumbnail
          }

          quotetitle
          quoteauthor
        }
      }
    }
  }
`;
