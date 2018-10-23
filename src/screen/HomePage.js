import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h3>Menu</h3>
                <Link to="/">Home Page</Link>
                <Link to="/address">Address</Link>
                <Link to="/sendMoney">Send money</Link>
                <Link to="/web3">Using web3</Link>
            </div>
        )
    }
}

export default HomePage
