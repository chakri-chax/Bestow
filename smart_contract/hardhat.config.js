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
      url:`https://polygon-mumbai.infura.io/v3/4cf6fddedfd54da5bde77099cbfc6c41`,
      accounts:['42579277776c789289e5db712f64b2332491d991df1af9e328da39ccd55bf630'],
      chainId:80001,
    },

  },
};

// Transactions address:  0x5FbDB2315678afecb367f032d93F642f64180aa3