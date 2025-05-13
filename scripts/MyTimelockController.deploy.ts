import { ethers, defender } from 'hardhat';

const MIN_DELAY = 10;

async function main() {
  const MyTimelockController = await ethers.getContractFactory(
    'MyTimelockController',
  );

  // uint256 minDelay
  // address[] memory proposers,
  // address[] memory executors
  const deployment = await defender.deployContract(MyTimelockController, [
    MIN_DELAY,
    [process.env.SEPOLIA_SAFE_WALLET_ADDRESS as string],
    [process.env.SEPOLIA_SAFE_WALLET_ADDRESS as string],
  ]);

  await deployment.waitForDeployment();

  console.log(`Contract deployed to ${await deployment.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
