// https://eth-ropsten.alchemyapi.io/v2/-3kAbiUQvHHgmw_yK-xDA0R2Rqw2KytZ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-3kAbiUQvHHgmw_yK-xDA0R2Rqw2KytZ',
      accounts: [ '9a1a40f689f283c7d2c8b26c3a771e01b3114442b77835cdc07242932d1b44e0' ]
    }
  }

}
