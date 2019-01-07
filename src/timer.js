import React, {Component} from 'react'
import Time from './Dtimer'


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
    }
    start () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    stop () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    render() {
        return <div >
            <Time ms={this.state.timeMs} />
            <div className='buttons'>
            <input type="button" value="Start" onClick={this.start} />
            <input type="button" value="stop" onClick={this.stop} />
            </div>
        </div>
    }
}
export default Timer