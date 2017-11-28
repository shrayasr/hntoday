import React from 'react'
import moment from 'moment'

class IndexPageDateTiles extends React.Component {
    render() {
        var linkPath = this.props.linkPath;
        var gifDate = this.props.gifDate;
        return(
            <a href={linkPath} style={{}}>
                <div sytle={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <p style={{textAlign: 'center'}}>{moment(gifDate).format('Do')}</p>
                <p style={{textAlign: 'center'}}>{moment(gifDate).format('MMM')}</p>
                </div>
            </a>
        )
    }
}


export default IndexPageDateTiles