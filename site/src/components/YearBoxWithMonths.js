import React from 'react'
import moment from 'moment'
import { rhythm, scale } from '../utils/typography'
const _ = require('lodash')
import Link from 'gatsby-link'
import {colour1, colour2, colour3, colour4, colour7} from '../utils/style-constants'

class YearBoxWithMonths extends React.Component {
    render() {
        var year = this.props.year;
        var month_data_available = this.props.months
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month_link_json = {} // Feb: '/2017-02'and so on
        _.forEach(month_data_available, function(month_year) {
            month_link_json[moment(month_year).format('MMM')] = "/" + month_year;
        })

        var disabled_link = {
            color: "#1a0a00",
            boxShadow: "none",
            cursor: 'not-allowed'
        }

        var enabled_link = {
            color: colour7,
            boxShadow: '0 1px 0 0 ' + colour7
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: '0 1 400px',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                marginRight: '1rem',
                marginLeft: '1rem',
                backgroundColor: colour1,
                padding:"2rem 0 2rem 0",
                boxShadow: '5px 5px 0px ' + colour4,
                border: '2px solid ' + colour7,
            }}>
            <div style={{
                flex: '0 1 100%', 
                textAlign: 'center', 
                marginBottom: '2rem', 
                fontSize: '3rem',
                color: colour7 }}>
            
            {year}</div>
            {
                months.map(month => {

                    let month_link = null;
                    if (!_.isUndefined(month_link_json[month]))
                        month_link = <a href={month_link_json[month]}  style={enabled_link}>{month}</a>
                    else
                        month_link = <a style={disabled_link}>{month}</a>

                    return(
                        <div style={{
                            flex: '1 0 33%',
                            textAlign: 'center',
                            fontSize: "1.5rem",
                            marginBottom: "1rem",
                        }}>{month_link}</div>
                    )
                })
            }
            </div>
        )
    }
}

export default YearBoxWithMonths