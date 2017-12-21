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
                marginBottom: '2rem'
            }}>
            <div style={{flex: '0 1 100%', textAlign: 'center', marginBottom: '1rem'}}>{year}</div>
            {
                months.map(month => {
                    return(
                        <div style={{
                            flex: '1 0 33%',
                            textAlign: 'center'
                        }}>{month}</div>
                    )
                })
            }
            </div>
        )
    }
}

export default YearBoxWithMonths