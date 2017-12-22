import React from 'react'
import moment from 'moment'
import { rhythm, scale } from '../utils/typography'


class IndexPageDateTiles extends React.Component {
    render() {
        var linkPath = this.props.linkPath;
        var gifDate = this.props.gifDate;
        return(
            <a href={linkPath} style={{
                flex: '0 1 230px',
                height: 240,
                boxShadow: 'none',
                marginRight: '1rem',
                marginLeft: '1rem',
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
                <div sytle={{
                }}>
                    <p style={{textAlign: 'center'}}>{moment(gifDate).format('DD')}<sup>{moment(gifDate).format('Do').substr(-2)}</sup></p>
                    <p style={{textAlign: 'center'}}>{moment(gifDate).format('MMM')}</p>
                </div>
            </a>
        )
    }
}


export default IndexPageDateTiles