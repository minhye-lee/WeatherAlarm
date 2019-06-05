import React, { Component } from 'react'
import Clock from 'react-live-clock'

class CurrentTime extends Component {
    render () {
        return(
            <div className="CurrentTime">
                현재 시각 :
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
            </div>
        )
    }

}

export default CurrentTime