import React from 'react'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'
import { colour1, colour2, colour3, colour6 } from '../utils/style-constants'

class PageHeader extends React.Component {
  render() {
    var heading = this.props.text
    return (
      <header>
        <h1
          style={{
            marginTop: '0',
            marginBottom: '3rem',
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1.5rem',
            backgroundColor: colour2,
            fontSize: '1.5rem',
            borderBottom: '2px solid #2c3e50',
            color: 'hsla(0, 0, 0, 0.9)',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: colour6,
            }}
            to={'/'}
          >
            {heading}
          </Link>
        </h1>
      </header>
    )
  }
}

export default PageHeader
