require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/gV28fxySYbxNunGBwEeVn7EuRKzrvsOX',
      accounts: ['575817d97b76772a2db60286455df47561dafd772395ba4cefc83259e8b12aa2'],
    },
  },
};