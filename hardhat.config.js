require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
