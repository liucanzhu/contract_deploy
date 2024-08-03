require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    cardona: {
      url: process.env.TEST_URL,
      accounts: [process.env.TEST_KEY],
    },
  },
};
