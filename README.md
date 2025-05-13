# delabs-smart-contract

### Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npm install

npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/deploy_dailyspin.js
```

# Foundry

- [Foundry Website](https://book.getfoundry.sh/)
- [Integrate Foundry with Hardhat](https://book.getfoundry.sh/config/hardhat)
- [Integrate Hardhat with Foundry](https://hardhat.org/hardhat-runner/docs/advanced/hardhat-and-foundry)

## Installation

### Install Rust compiler and Cargo (Rust package manager)

Easiest way is to install [Rustup](https://rustup.rs/), which is a toolchain manager for Rust.

**Make sure to use the latest stable version of Rust.**

```shell
rustup update stable
```

### Install Foundryup

**Download and install Foundryup**

```shell
curl -L https://foundry.paradigm.xyz | bash
```

**Install `forge`, `cast`, `anvil`, and `chisel`**

```shell
foundryup
```

### Compile with Foundry

```shell
forge build
```

### Run tests with Foundry

```shell
forge test
```

### Run local Anvil node with Foundry

```shell
anvil
```

### Format with Foundry

Format the solidity code to be consistent with the Foundry style guide.

```shell
forge fmt
```

## Environment Variables

**Be sure to match the environment variables with the right network you're deploying to.**

| Variable Name                 | Description                                   | Note                                                                   |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------------------------- |
| `DEFENDER_API_KEY`            | API key for integrating OpenZeppelin Defender |                                                                        |
| `DEFENDER_SECRET_KEY`         | Secret for integrating OpenZeppelin Defender  |                                                                        |
| `WALLET_KEY_1`                | Wallet Private Key for manual deployment      |                                                                        |
| `SEPOLIA_SAFE_WALLET_ADDRESS` | SAFE Wallet Contract Address                  | In case of non-supported SAFE Network a single EOA Address can be used |
| `TIMELOCK_CONTROLLER_ADDRESS` | MyTimeLockController Contract Address         |                                                                        |
| `GAME_TOKEN_CONTRACT_ADDRESS` | Game Token Contract Address                   |                                                                        |
| `LABS_TOKEN_CONTRACT_ADDRESS` | Labs Token Contract Address                   | For QA testing purposes                                                |
