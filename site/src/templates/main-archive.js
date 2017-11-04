import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import moment from 'moment';
import { forEach } from 'lodash';

export default function CreatePaginationPost ({ pathContext, data }) {
    const { yearMonths } = pathContext;
    return (
    <div>
        {/* <h2 style={{textAlign: 'center',}}>Main Archives</h2>
        {posts.map(post => {
            return (
                <h3
                style={{
                    marginBottom: rhythm(1 / 4),
                }}
                >
                <Link
                    style={{ boxShadow: 'none' }}
                    to={post.node.frontmatter.path}
                >
                    {post.node.frontmatter.title}
                </Link>
                </h3>
            )
        })} */}
    </div>
  );
}