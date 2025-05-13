import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ignition-ethers";
// import "@nomicfoundation/hardhat-foundry";
import "@openzeppelin/hardhat-upgrades";
import "tsconfig-paths/register";
import "@nomicfoundation/hardhat-ledger";
import 'hardhat-deploy';
require("dotenv").config();
import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'
import { EndpointId } from '@layerzerolabs/lz-definitions'

const config: HardhatUserConfig = {
  mocha: {
    timeout: 240000,
  },
  sourcify: {
    enabled: false
  },
  defender: {
    apiKey: process.env.DEFENDER_API_KEY as string,
    apiSecret: process.env.DEFENDER_SECRET_KEY as string,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      eid: EndpointId.SEPOLIA_V2_TESTNET,
      url: "https://ethereum-sepolia.publicnode.com",
      chainId: 11155111,
      accounts: [process.env.WALLET_KEY_1 as string, "e1faa50f695a9d7b419f25852707e62888a1adc743a4a876a92a4e772b059bd3"],
    },
    kairos: {
      eid: 40150,
      url: "https://public-en-kairos.node.kaia.io",
      chainId: 1001,
      accounts: [process.env.WALLET_KEY_1 as string, "e1faa50f695a9d7b419f25852707e62888a1adc743a4a876a92a4e772b059bd3"],
    },
    polygonAmoy: {
      eid: EndpointId.AMOY_V2_TESTNET,
      url: "https://polygon-amoy.g.alchemy.com/v2/pwAD9H-SiH-XU4WUI1eaPAogPAPOOutA",
      accounts: [process.env.WALLET_KEY_1 as string],
    },
    arbitrumSepolia: {
      eid: 40231,
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [
        process.env.WALLET_KEY_1 as string,
        "d379b1317973c2aa2d4fa1089602021095097897980441a11be413805d79dafa",
      ],
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      ledgerAccounts: [],
    },
    // url: "https://polygon-amoy.g.alchemy.com/v2/pwAD9H-SiH-XU4WUI1eaPAogPAPOOutA"
    // url: "https://rpc-amoy.polygon.technology",
    // url: "https://polygon-amoy.infura.io/v3/90c47f0cffda4ff3a710fe5e7e8d00fe",
    // sepolia: {
    //   url: "https://sepolia.infura.io/v3/<key>",
    //   accounts: [privateKey1, privateKey2, ...]
    // }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.22",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  etherscan: {
    apiKey: {
      sepolia: "M2MNFUPD77F2EXK9ZCE5M2SDNRNWM2NQYX",
      polygonAmoy: "YHBFXJZENNDGQV1GY3V9S71AWBAYCXYJGK",
      arbitrumSepolia: "MCF6YGZJXSR2A6MJ4QIPWQF516WY1BBURD",
      kairos: "unnecessary",
      kaia: "unnecessary",
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com",
        },
      },
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://api-baobab.klaytnscope.com/api",
          browserURL: "https://kairos.kaiascope.com",
        },
      },
      {
        network: "kaia",
        chainId: 8217,
        urls: {
          apiURL: "https://api-cypress.klaytnscope.com/api",
          browserURL: "https://kaiascope.com",
        },
      },
    ],
  },
};

export default config;
