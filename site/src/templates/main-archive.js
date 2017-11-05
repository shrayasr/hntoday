import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import moment from 'moment';
import { forEach } from 'lodash';

export default function CreatePaginationPost ({ pathContext, data }) {
    const { yearMonths } = pathContext;
    return (
    <div>
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