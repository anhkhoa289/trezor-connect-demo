import React from "react";
import TrezorConnect from 'trezor-connect';

class ManyAddress extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			btcIndex: 0,
			ethIndex: 0
		}

		this.getAddrBtc = this.getAddrBtc.bind(this)
		this.getAddrEth = this.getAddrEth.bind(this)
	}

	getAddrBtc = async () => {
		const { btcIndex } = this.state
		for (let i = btcIndex; i < btcIndex + 6; i = i + 3) {
			const result = await TrezorConnect.getAddress({
				bundle: [
					{ path: `m/49'/0'/0'/0/${i}`, showOnTrezor: false }, // address 1
					{ path: `m/49'/0'/0'/0/${i + 1}`, showOnTrezor: false }, // address 2
					{ path: `m/49'/0'/0'/0/${i + 2}`, showOnTrezor: false }  // address 3
				]
			});
			console.log(result)
		}
		this.setState({ btcIndex: btcIndex + 6})
	}
	
	getAddrEth = async () => {
		// const Tre = await TrezorConnect.getFeatures({
		// 	keepSession: true
		// })
		// console.log(Tre)
		const { ethIndex } = this.state
		for (let i = ethIndex; i < ethIndex + 6; i = i + 3) {
			const result = await TrezorConnect.ethereumGetAddress({
				bundle: [
					{ path: `m/44'/60'/${i}'`, showOnTrezor: false }, // account 1
					{ path: `m/44'/60'/${i + 1}'`, showOnTrezor: false }, // account 2
					{ path: `m/44'/60'/${i + 2}'`, showOnTrezor: false }  // account 3
				]
			});
			console.log(result)
		}
		this.setState({ ethIndex: ethIndex + 6 })
	}

	getAccountInfo = async () => {
		const result = await TrezorConnect.getAccountInfo({
			coin: "btc",
		});
		console.log(result)
	}

	render() {
		return (
			<div>
				<button onClick={this.getAddrBtc}>Get BTC</button>
				<button onClick={this.getAddrEth}>Get ETH</button>
				<button onClick={this.getAccountInfo}>Get BTC Info</button>
			</div>
		)
	}
}

export default ManyAddress
