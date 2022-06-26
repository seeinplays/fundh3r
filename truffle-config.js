const HDWalletProvider = require('@truffle/hdwallet-provider')

require('dotenv').config()
const env = process.env

const pk_1 = env.pk_1
const pk_2 = env.pk_2

module.exports = {
  contracts_build_directory: './build',
  networks: {
    boba_rinkeby: {
      provider: function () {
        return new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2],
          providerOrUrl: process.env.BOBA_URL,
        })
      },
      network_id: 28,
      host: process.env.BOBA_URL,
    },
    pokt_rinkeby: {
      provider: function () {
        return new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: process.env.POKT_API_URL,
        })
      },
      // url: process.env.POKT_API_URL,
      accounts: [process.env.PRIVATE_KEY],
      network_id: 4
    }
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
}