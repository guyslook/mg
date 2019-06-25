import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import AaJumbotron from "../components/AaJumbotron/AaJumbotron";
import Banner from "../components/Banner/Banner";
import { Button } from "rsuite";

export const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  heroimage,
  helmet,
  link,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section news">
      {helmet || ''}
      <div className="overlayhero tophero">
      <AaJumbotron
                    title={"Case Study: " + title}
                    // description={element.herodescription}
                    featuredimage={
                      heroimage &&
                      heroimage.childImageSharp.fluid.src
                    }
                  />
                  </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="blogContentContainer">
              <p>{description}</p>
              <PostContent content={content} />
              <a href={link}>
                <Button className="btn">Visit site →</Button>
              </a>
            </div>

            {tags && tags.length ? (
              <div className="tagListContainer">
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Banner bannerColour="#3b9ed5" bannerText="Start your project with us today" bannerButtonText="Get in touch" bannerButtonLink="/contact-us" />
    </section>
  )
}

CaseStudyTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CaseStudyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        heroimage={post.frontmatter.heroimage}
        helmet={<Helmet title={`${post.frontmatter.title} | Case Study`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        link={post.frontmatter.link}
      />
    </Layout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        link
        heroimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
