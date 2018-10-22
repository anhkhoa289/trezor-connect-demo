import React from "react";
import TrezorConnect from 'trezor-connect';

class Address extends React.Component {
	constructor(props) {
		super(props)
		this.accountIndex = React.createRef()
		this.addressIndex = React.createRef()
	}

	getInfo = async () => {
		const result = await TrezorConnect.getAccountInfo({
			path: `m/49'/0'/${this.accountIndex.current.value}'`,
			coin: "btc",
		});
		console.log(result)
	}

	getAddr = async () => {
		const result = await TrezorConnect.getAddress({
			path: `m/49'/0'/0'/0/${this.addressIndex.current.value}`,
			coin: "btc"
		})
		console.log(result)
	}

	getEtherAddr = async () => {
		const result = await TrezorConnect.ethereumGetAddress({
			path: `m/49'/60'/0'/${this.addressIndex.current.value}`
		})
		console.log(result)
	}
	render() {
		return (
			<div>
				<h1>Result is show in console</h1>
				<div>
					<h3>Get Infomation (bitcoin)</h3>
					<input type="number" ref={this.accountIndex} placeholder="account index" />
					<button onClick={this.getInfo}>Get info</button>
				</div>

				<div>
					<h3>Get address of first account (bitcoin)</h3>
					<input type="number" ref={this.addressIndex} placeholder="address index" />
					<button onClick={this.getAddr}>Get addr</button>
				</div>

				<div>
					<h3>Get adddress (Ether)</h3>
					<button onClick={this.getEtherAddr}>Get ETher addr</button>
				</div>

			</div>
		)
	}
}

export default Address
