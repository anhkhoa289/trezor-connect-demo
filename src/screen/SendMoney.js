import React from 'react'
import TrezorConnect from 'trezor-connect';
import Web3 from 'web3'

class SendMoney extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            gasPrice: 0
        }
        this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'))
        this.sendEth = this.sendEth.bind(this)
    }

    sendEth = async () => {
        const { web3 } = this

        // lay danh sach dia chi
        // TrezorConnect.ethereumGetAddress({
        //     bundle: [
        //         { path: "m/44'/60'/0'", showOnTrezor: false }, // account 1
        //         { path: "m/44'/60'/1'", showOnTrezor: false }, // account 2
        //         { path: "m/44'/60'/2'", showOnTrezor: false }  // account 3
        //     ]
        // });

        // kiem tra so du
        // const balance = await web3.eth.getBalance(address)


        const from = "0xa699F525949c92B6d95c9e928ec24c35b7d684BA",
            to = "0x280A8db4d5f9264D81bEd2E731BD6D1f00BADDae",
            value = 0.00015

        let transaction = {
            from, to,
            value: web3.utils.toHex(web3.utils.toWei(value + ""))
        }

        const gas = await web3.eth.estimateGas(transaction)
        const gasPrice = await web3.eth.getGasPrice()

        let nonce = await web3.eth.getTransactionCount(from)
        console.log("nonce", nonce)

        transaction = {
            ...transaction,
            gasLimit: web3.utils.toHex(gas),
            gasPrice: web3.utils.toHex(gasPrice),
            nonce: web3.utils.toHex(nonce)
        }
        for (let i = 0; i < 10; i++) {
            const result = await TrezorConnect.ethereumSignTransaction({ 
                path: "m/44'/60'/0'",
                transaction
            })
            console.log(result)
        }
        
        // result = {
        //     id: 1,
        //     payload: {
        //         r: "0x40c0de694d1f377fdce5ab55ad98d33c467216d353b95826b7ead5e33a0acc1c",
        //         s: "0x117a5b734551e868cd9558038832ea42e8d9658937df3cad644b5bf359a983c4",
        //         v: "0x1c",
        //     },
        //     success: true,
        // }
        // result.v // hexadecimal string with "0x" prefix
        // result.r // hexadecimal string with "0x" prefix
        // result.s // hexadecimal string with "0x" prefix
    }

    render() {
        return (
            <div>
                <h3>Send Money</h3>
                <button onClick={this.sendEth}>Send</button>
            </div>
        )
    }
}

export default SendMoney
