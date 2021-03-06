import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'
import moment from 'moment'
import { forEach } from 'lodash'
import PageHeader from '../components/PageHeader'
import DateBoxes from '../components/DateBoxes'
import MonthBox from '../components/MonthBox'
export default function CreatePaginationPost({ pathContext, data }) {
  const { posts, yearMonth } = pathContext
  // var postsRestructured = [];
  // forEach(posts, (individualPost) => {
  //     var temp = {}
  //     temp['node'] = individualPost
  //     postsRestructured.push(temp);
  // })
  const links = posts.map(post => {
    return post.node.frontmatter.path
  })
  const date = moment(yearMonth)
  return (
    <div style={{ backgroundColor: '#eeeeee', minHeight: '100vh' }}>
      <PageHeader text={'HNToday | ' + moment(yearMonth).format('MMM YYYY')} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <MonthBox yearMonth={yearMonth} links={links} />
      </div>
      <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        <a href="/archives" style={{ boxShadow: 'none', border: 'none' }}>
          ← {date.format('YYYY')}
        </a>
      </p>
    </div>
  )
}
