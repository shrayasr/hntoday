import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PageHeader from '../components/PageHeader'
import moment from 'moment'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const date = moment(post.frontmatter.date)
    return (
      <div>
        <PageHeader text={'HNToday | ' + date.format('DD MMM YYYY')} />
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        />
        <div
          style={{ textAlign: 'center', marginTop: '4rem' }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
          <a
            href={date.format('/YYYY-MM')}
            style={{ boxShadow: 'none', border: 'none' }}
          >
            ← {date.format('MMMM')}
          </a>
        </p>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
