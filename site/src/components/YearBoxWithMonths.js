import React from 'react'
import moment from 'moment'
import { rhythm, scale } from '../utils/typography'


class YearBoxWithMonths extends React.Component {
    render() {
        var year = this.props.year;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: '0 1 400px',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                backgroundColor: '#2980b9',
                marginBottom: 20,
                marginRight: 20,
                padding:"2rem 0 2rem 0",
                border: '2px solid #d35400'
            }}>
            <div style={{
                flex: '0 1 100%', 
                textAlign: 'center', 
                marginBottom: '2rem', 
                fontSize: '3rem',
                color: '#ecf0f1'}}>
            
            {year}</div>
            {
                months.map(month => {
                    return(
                        <div style={{
                            flex: '1 0 33%',
                            textAlign: 'center',
                            fontSize: "1.5rem",
                            marginBottom: "1rem",
                        }}>{month}</div>
                    )
                })
            }
            </div>
        )
    }
}

export default YearBoxWithMonths