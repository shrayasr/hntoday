import React from 'react'
import moment from 'moment'
import { rhytm, scale } from '../utils/typography'
const _ = require('lodash')
import Link from 'gatsby-link'

class MonthBox extends React.Component {
    render() {
        var yearMonth = this.props.yearMonth
        var displayHeader = moment(yearMonth).format('MMMM')
        var daysInMonth = moment(yearMonth).daysInMonth()
        var links = this.props.links

        // Use these to get stuff that actually have content vs
        // the ones that don't

        var dateLinkMapping = {}
        var actualDaysInTheMonth = []

        for (var i = 1; i <= daysInMonth; i++) {
            actualDaysInTheMonth.push(String('0' + i).slice(-2))
        }

        // path = /2017-10-01 and so on
        _.forEach(links, function(path) {
            console.log(path)
            dateLinkMapping[path.slice(-3, -1)] = path
        })

        var disabled_link = {
            color: "#eeeeee",
            boxShadow: "none",
            cursor: 'not-allowed'
        }

        var enabled_link = {
            color: "#1a0a00"
        }
        return(
            <div style={{
                marginBottom: '2rem',
                marginRight: '1rem',
                marginLeft: '1rem',
                backgroundColor: '#2980b9',
                padding:"2rem 0 2rem 0",
                border: '2px solid #d35400',
                display: 'flex',
                flexDirection: 'row',
                flex: '0 1 500px',
                flexWrap: 'wrap',
                justifyContent: 'space-between',

            }}
            >
            <div style={{
                flex: '0 1 100%',
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '3rem',
                color: '#ecf0f1'
            }}>{displayHeader}</div>

            {

            actualDaysInTheMonth.map(date => {
                var date_link = null
                if (!_.isUndefined(dateLinkMapping[date]))
                    date_link = <a href={dateLinkMapping[date]} style={enabled_link}>{date}</a>
                else
                    date_link = <a style={disabled_link}>{date}</a>

                return (
                    <div style={{
                        flex: '0 1 15%',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        float: 'left'
                    }}>{date_link}</div>
                )
            })
            }
            </div>
        )
    }






}

export default MonthBox