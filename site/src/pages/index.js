import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PageHeader from '../components/PageHeader'
import IndexPageDateTiles from '../components/IndexPageDateTiles'

import { rhythm } from '../utils/typography'
import {colour1, colour2, colour3 } from '../utils/style-constants'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colour3,
        minHeight: '100vh',
      }}>

        <PageHeader text="Hacker News Today"/>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return (
                <IndexPageDateTiles 
                  linkPath={post.node.frontmatter.path}
                  gifDate={post.node.frontmatter.date}
                />
              )
            }
          })}
        </div>
        <p style={{textAlign: 'center', }}><a href="/archives">(more)</a></p>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 7
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
