const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const hre = require("hardhat");

module.exports = buildModule("RRSCatridge", (m) => {  
  // const [first, second] = hre.ethers.getSigners();
  // console.log(first.address);
  
  // const params = m.getParameter("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 80002)
  // const rrsCartridge = m.contract("RRSCartridge", ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 80002]);
  
  const rrsCartridge = m.contract("RRSCartridge", ["0xD0921fFA60451774eD52dD7A223A6c7d7DC82D50", 80002]);

  // const { apollo } = hre.ignition.deploy(ApolloModule);

  // m.call(rrsCartridge, "init", []);

  return { rrsCartridge };
});
