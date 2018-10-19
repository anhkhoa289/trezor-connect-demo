const express = require('express')
const app = express()
const TrezorConnect = require('trezor-connect').default

const port = 3000

app.get('/', function (req, res) {
    TrezorConnect.getPublicKey({
        path: "m/49'/0'/0'",
        coin: "btc"
    }).then(res.send)
})

app.listen(port, () => console.log(`Khoa app listening on port ${port}!`))

