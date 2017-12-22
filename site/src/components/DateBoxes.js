import React from 'react'
import moment from 'moment'
import { rhythm, scale } from '../utils/typography'


class DateBoxes extends React.Component {
    render() {
        var link = this.props.link;
        var anchor_date = this.props.anchorDate;
        console.log(link, anchor_date)
        return(
            <a href={link} style={{
                flex: '0 1 6rem',
                height: '6rem',
                boxShadow: 'none',
                marginRight: '2rem',
                marginLeft: '2rem',
                border: '2px solid #d35400',
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2980b9',
                color: '#ecf0f1',
                fontSize: '3rem'
            }}>
                <p style={{textAlign: 'center', margin:'0px'}}>{anchor_date}</p>
            </a>
        )
    }
}


export default DateBoxes