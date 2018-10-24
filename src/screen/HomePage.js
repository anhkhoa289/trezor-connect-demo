import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h3>Menu</h3>
                <p><Link to="/">Home Page</Link></p>
                <p><Link to="/address">Get address</Link></p>
                <p><Link to="/many-address">Get many address</Link></p>
                <p><Link to="/web3">Using web3</Link></p>
                <p><Link to="/trezor-js">Trezor Js</Link></p>
            </div>
        )
    }
}

export default HomePage
