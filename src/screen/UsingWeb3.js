import React from 'react'
import Web3 from 'web3'

class UsingWeb3 extends React.component {
 
    constructor(props) {
        super(props)
        this.state = {
            gasPrice: 0
        }
        this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'))
    }

    getGasPrice = async () => {
        return await this.web3.eth.getGasPrice()
    }

    render() {
        const { gasPrice } = this.state
        return (
            <div>
                <h3>Gas Price</h3>
                {gasPrice}
            </div>
        )
    }

    async componentDidMount() {
        this.setState({
            gasPrice: await this.getGasPrice()
        })
    }
}

export default UsingWeb3
