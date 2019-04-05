/* eslint-disable */
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
import AaCustomHTML from "../components/AaCustomHTML/AaCustomHTML";
import TwoUpImages from "../components/TwoUpImages/TwoUpImages";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Newsletter from "../components/AaNewsletter/AaNewsletter";
import ReactPlayer from "react-player";

export const BasicPageTemplate = ({
  content,
  contentComponent,
  title,
  elements,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  var galleryarray = [];
  var galleryobject = {};
  var src;
  var thumbnail;
  var caption;

  return (
    <div>
      <div className="elements">
        {PostContent ? "" : ""}
        {elements &&
          elements.map(element => (
            <div className="element">
              {(element.type === "hero" && (
                <div
                  className={
                    (element.top && "tophero") +
                    " heroimage " +
                    (element.overlay && " overlayhero")
                  }
                >
                  <AaJumbotron
                    title={element.herotitle}
                    description={element.herodescription}
                    featuredimage={
                      element.heroimage &&
                      element.heroimage.childImageSharp.fluid.src
                    }
                    link={element.herolink}
                  />
                </div>
              )) ||
                (element.type === "text" && (
                  <div>
                    <AaTextElement
                      dark={element.dark}
                      html={element.paragraph}
                      class={element.textClass}
                      image={element.textImage}
                    />
                  </div>
                )) ||
                (element.type === "gallery" && (
                  <React.Fragment>
                    <div className="hidden">
                      {element.galleryitem.map(
                        galleryimage => (
                          (src =
                            galleryimage.src &&
                            galleryimage.src.childImageSharp.fluid.src),
                          (thumbnail =
                            galleryimage.thumbnail &&
                            galleryimage.thumbnail.childImageSharp.fluid.src),
                          (caption = galleryimage.caption),
                          (galleryobject = { src, thumbnail, caption }),
                          galleryarray.push(galleryobject)
                        )
                      )}
                    </div>
                    <AaGallery images={galleryarray} />
                  </React.Fragment>
                )) ||
                (element.type === "quote" && (
                  <div>
                    <AaBlockquote
                      quote={element.quotetitle}
                      author={element.quoteauthor}
                    />
                  </div>
                )) ||
                (element.type === "customhtml" && (
                  <div>
                    <AaCustomHTML html={element.customhtml} />
                  </div>
                )) ||
                (element.type === "twoupimages" && (
                  <div>
                    <TwoUpImages
                      leftimage={element.leftimage.childImageSharp.fluid.src}
                      rightimage={element.rightimage.childImageSharp.fluid.src}
                    />
                  </div>
                )) ||
                ((element.type === "prebuilt" &&
                  (element.prebuilt === "services" && (
                    <div>
                      <Services />
                    </div>
                  ))) ||
                  (element.prebuilt === "contact" && (
                    <div>
                      <Contact />
                    </div>
                  )))}
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
          heroimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          herotitle
          herolink
          top
          overlay

          paragraph
          textImage
          textClass
          dark

          galleryitem {
            src {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            caption
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

          quotetitle
          quoteauthor

          prebuilt

          leftimage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          rightimage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
