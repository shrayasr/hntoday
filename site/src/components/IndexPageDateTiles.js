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
                marginRight: 20,
                border: '4px solid mistyrose',
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div sytle={{
                }}>
                    <p style={{textAlign: 'center'}}>{moment(gifDate).format('Do')}</p>
                    <hr style={{/*maxWidth: '90%',*/ marginRigth: 'auto', marginLeft: 'auto'}}/>
                    <p style={{textAlign: 'center'}}>{moment(gifDate).format('MMM')}</p>
                </div>
            </a>
        )
    }
}


export default IndexPageDateTiles