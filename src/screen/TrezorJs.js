import React from 'react'
import TrezorConnect from 'trezor-connect'

const Trezor = require('trezor.js')

class TrezorJs extends React.Component {
    
    te = () => {
        TrezorConnect.nemGetAddress()
        // console.log(TrezorConnect.caller())
    }
    
    render() {
        return (
            <div>
                <button onClick={this.te}>show what</button>
            </div>
        )
    }
    componentDidMount() {
        this.list = new Trezor.DeviceList()
        this.list.on('connect', (device) => {
            console.log(device)
        })
    }
    componentWillUnmount() {
        this.list.removeListener('connect')
    }
}

export default TrezorJs
