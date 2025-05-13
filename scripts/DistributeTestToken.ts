import { ethers } from 'hardhat';

const LABS_TOKEN_CONTRACT_ADDRESS = process.env
  .LABS_TOKEN_CONTRACT_ADDRESS as string;
const TIMELOCK_CONTROLLER_CONTRACT_ADDRESS = process.env
  .TIMELOCK_CONTROLLER_ADDRESS as string;

const addresses = [
  // "0x5fe68C273aD35E14728d403F9F7043aA28Bf50aA",
  // "0xD0921fFA60451774eD52dD7A223A6c7d7DC82D50",
  // "0xa7ca860eccd0242a63e6df8792f977095766b1fc",
  // "0x7fe8DEDa5EFd827499b62CE1F7220918E02BCf7D",
  // "0x044f1DD1688dbE79Ae1cfF18f4931aB021c8E370",
  // "0xF0b9e162a711F0dbE461B579Bf1E3F5614b54154",
  // "0xcC017fB2C824cf79289D37ADe9e7ceA35CD52d2d",
  // "0x5B840360aB461BDe181e53480878F23Ee5187FA6",
  // "0xfa653d8bB10076Ae5d69F32B011EB45D560f0d94",
  // "0xe96bb91E7715fC696E4884f640a3FC40eF9b50D3",
  // "0x45178eFB448C76404B04248957904AFbF7C4FE83",
  // "0xe31116dd7e95184780b11a673602f482e115c63a",
  // "0xF46d8DAE3439799Efb0A2D688b6B339db84F0102",
  // "0xea6f99295d19d2de5197ffe6c607df1bece6b6c7",
  // "0x9F8FD9efa1D8536201f648045B2BFEB6D1883C3f",
  // "0x17c6DBeAD1335e7c323CbF5D1ACaB677218C089F",
  // "0x888b093b23f362f8495c4a72b7298bb1928b0e5e",
  // "0x9db982ddc587e4806e6005b00188f1e71f7ae90f",
  // "0x0941e33f24d8399b3c23198a296fd9ffca8c7321",
  // "0x4acf9982b181baffbfcd177e814706143a6090e3",
  // "0x5e020e11aa7956d8f6fa4a387b1a31c290089919",
  // "0x18df4b3932a6ac9560f007874f00fa55efbda56f",
  // "0x223c026c017045631fda01c1074b1f3518ffc0d5",
  // "0x35fbc33b636ba02e4430eb9cdf504e9b8c0c2056",
  // "0xa7ca860eccd0242a63e6df8792f977095766b1fc",
  // "0x55d1ddfd079bc0e0ef2b6722d4ba97e42856c208",
  "0x0c45eba4d3608187289f4661a5a896995bec8fd9", "0x6d0feeae8ca29691c18051931d078c52b3fa664a",
];

const TARGETS = Array(addresses.length).fill(LABS_TOKEN_CONTRACT_ADDRESS);
const VALUES = Array(addresses.length).fill(0);
const AMOUNT = ethers.parseUnits("100000", 18) // 100,000 LABS
// const AMOUNT = ethers.parseUnits("999999999", 18); // 999,999,999 LABS

const payloads = [] as string[];

async function main() {
  const signers = await ethers.getSigners();

  const token = await ethers.getContractFactory('DELABS');

  const myTimelockControllerContract = await ethers.getContractAt(
    'MyTimelockController',
    TIMELOCK_CONTROLLER_CONTRACT_ADDRESS,
    signers[0],
  );

  addresses.map(async (address) => {
    payloads.push(
      token.interface.encodeFunctionData("transfer", [
        address,
        AMOUNT
      ]),
    );
  });

  const minDelay = await myTimelockControllerContract.getMinDelay();

  const salt = await randomSaltGenerator();

  console.log(TARGETS)
  console.log(VALUES)
  console.log(payloads)
  console.log(ethers.ZeroHash)
  console.log(salt)
  console.log(minDelay)

  const tx = await myTimelockControllerContract.scheduleBatch(
    TARGETS,
    VALUES,
    payloads,
    ethers.ZeroHash,
    salt,
    minDelay,
  );

  await tx.wait();

  console.log('Sent Schedule Transaction');

  await sleep(12);

  const tx2 = await myTimelockControllerContract.executeBatch(
    TARGETS,
    VALUES,
    payloads,
    ethers.ZeroHash,
    salt,
  );

  await tx2.wait();

  console.log('Sent Execute Transaction');
}

const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const randomSaltGenerator = async () => {
  return ethers.hexlify(ethers.randomBytes(32));
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
