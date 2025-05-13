import { ethers, defender } from 'hardhat';

async function main() {
  const Game = await ethers.getContractFactory('GAME');

  // address initialHolder
  const deployment = await defender.deployProxy(
    Game,
    [process.env.TIMELOCK_CONTROLLER_ADDRESS as string],
    { initializer: 'initialize', salt: 'delabs' },
  );

  await deployment.waitForDeployment();

  console.log(`Contract deployed to ${await deployment.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
