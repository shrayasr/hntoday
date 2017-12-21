import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import moment from 'moment';
import { forEach } from 'lodash';
import PageHeader from '../components/PageHeader'
import YearBoxWithMonths from '../components/YearBoxWithMonths'

export default function CreatePaginationPost ({ pathContext, data }) {
    const { yearMonths } = pathContext;
    return (
    <div>
        <PageHeader text="HNToday | Archives" />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
        {
            Object.keys(yearMonths).map(year => {
                return (
                        
                        <YearBoxWithMonths year={year.slice(-4)}/>
                )

                    {/* <h2 style={{textAlign: 'center',}}>{year.slice(-4)}</h2> */}
                        {/* <div style={{
                        }}>
                            {
                                yearMonths[year].map(yearMonth => {
                                    return (
                                        <h3 style={{marginBottom: rhythm(1 / 4),}}>
                                            <Link
                                                style={{ boxShadow: 'none' }}
                                                to={"/" + yearMonth}
                                            >
                                            { moment(yearMonth).format('MMM') }
                                            </Link>
                                        </h3>
                                    )
                                })
                            }
                        </div> */}

            })
        }
        </div>
    </div>
  );
}