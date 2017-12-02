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
                        marginTop: '0.5rem',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        paddingTop: '1rem',
                        paddingBottom: '1.5rem',
                        backgroundColor: '#d35400',
                        borderBottom: '2px solid #2c3e50',
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
            </header>
        )
    }
}

export default PageHeader

