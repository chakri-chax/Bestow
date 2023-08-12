require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    // ropsten: {
    //   url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
    //   accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    // },
    // ropsten: {
    //   url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
    //   accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    // },
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/ca5d318a551b4d0d97ebdb74bd947236`,
      accounts:['63c91e9b88182c6daddfa3c4c739e72bd542f47e90125eee43f16d584747e7e0'],
      chainId:80001,
    },

  },
};

// Transactions address:  0x5FbDB2315678afecb367f032d93F642f64180aa3