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
    <div style={{
        backgroundColor: "#eeeeee",
        minHeight: "100vh",
    }}>
        <PageHeader text="HNToday | Archives" />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }}>
        {
            Object.keys(yearMonths).map(year => {


                return (
                    <YearBoxWithMonths year={year.slice(-4)} months={yearMonths[year]}/>
                )
            })
        }
        </div>
    </div>
  );
}