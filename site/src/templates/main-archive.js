import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import moment from 'moment';
import { forEach } from 'lodash';
import PageHeader from '../components/PageHeader'

export default function CreatePaginationPost ({ pathContext, data }) {
    const { yearMonths } = pathContext;
    return (
    <div>
        <PageHeader text="HNToday | Archives" />
        {
            Object.keys(yearMonths).map(year => {
                return (
                    <div>

                    <h2 style={{textAlign: 'center',}}>{year.slice(-4)}</h2>
                    {
                        yearMonths[year].map(yearMonth => {
                            return (
                                <h3 style={{marginBottom: rhythm(1 / 4),}}>
                                    <Link
                                        style={{ boxShadow: 'none' }}
                                        to={"/" + yearMonth}
                                    >
                                    { moment(yearMonth).format('MMMM') }
                                    </Link>
                                </h3>
                            )
                        })
                    }
                    </div>
                )

            })
        }
    </div>
  );
}