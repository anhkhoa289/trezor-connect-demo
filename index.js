const TrezorConnect = require('trezor-connect').default


TrezorConnect.getAddress('Account #1').then(console.log)