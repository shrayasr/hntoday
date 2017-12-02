import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Container
        style={{
          maxWidth: rhythm(48),
          padding: `0 ${rhythm(3 / 4)}`,
          backgroundColor: "#eeeeee",
          minHeight: '100vh'
        }}
      >
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
