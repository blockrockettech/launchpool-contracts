require('dotenv').config();
usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-truffle5");
usePlugin("buidler-gas-reporter");
usePlugin("solidity-coverage");
usePlugin("@nomiclabs/buidler-solhint");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.LAUNCH_POOL_PRIVATE_KEY;
const PRIVATE_PRIVATE_KEY = process.env.PRIVATE_PRIVATE_KEY;

module.exports = {
  solc: {
    version: "0.6.12",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  gasReporter: {
    currency: 'USD',
    enabled: false
  },
  networks: {
    sandbox: {
      chainId: 1337,
      url: 'https://sandbox.truffleteams.com/13b025b8-0867-47fb-9c13-0c8c1aa22b20',
      accounts: [`${PRIVATE_KEY}`]
    },
    // mainnet: {
    //   gasPrice: 158000000000, // 158 gwei
    //   url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    //   accounts: [`${PRIVATE_KEY}`]
    // },
    ropsten: {
      gasPrice: 5000000000, // 5 gwei
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    coverage: {
      url: 'http://localhost:8555',
    },
    dev: {
      url: 'http://localhost:8545',
      accounts: [`0x${PRIVATE_KEY}`]
    },
    buidlerevm: {
      gasPrice: 8000000000, // 8 gwei
      // accounts: [
      //   {
      //     privateKey: `0x${PRIVATE_KEY}`,
      //     balance: '1000000000000000000000'
      //   },
      // ]
    },
  }
};
