import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import moment from 'moment';
import { forEach } from 'lodash';
import PageHeader from '../components/PageHeader';
import DateBoxes from '../components/DateBoxes';

export default function CreatePaginationPost ({ pathContext, data }) {
    const { posts, yearMonth } = pathContext;
    // var postsRestructured = [];
    // forEach(posts, (individualPost) => {
    //     var temp = {}
    //     temp['node'] = individualPost
    //     postsRestructured.push(temp);
    // })
    return (
        <div style={{backgroundColor: "#eeeeee", minHeight: "100vh"}}>
            <PageHeader text={"HNToday | " + moment(yearMonth).format('MMM YY')} />
            <div style={{
                display: 'flex',
                // alignContent: 'stretch',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto'
            }}>
                {
                    posts.map(post => {
                        return (
                            <DateBoxes link={post.node.frontmatter.path} anchorDate={moment(post.node.frontmatter.path).format('DD')}/>
                        )
                    })
                }
            </div>
        </div>
    );
}