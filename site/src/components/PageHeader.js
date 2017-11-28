import React from 'react'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

class PageHeader extends React.Component {

    
    render() {
        var heading = this.props.text;
        return (
            <header>
                <h1
                    style={{
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                        textAlign: 'center'
                    }}
                >
                    <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/'}
                    >
                    {heading}
                    </Link>
                </h1>
                <hr/>
            </header>
        )
    }
}

export default PageHeader

