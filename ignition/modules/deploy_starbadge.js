const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("STARBADGE", (m) => {  
  // const starBadge = m.contract("STARBADGE", ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 80002]);
  
  const starBadge = m.contract("STARBADGE", ["0xD0921fFA60451774eD52dD7A223A6c7d7DC82D50", 80002]);

  // const { apollo } = hre.ignition.deploy(ApolloModule);

  // m.call(rrsCartridge, "init", []);

  return { starBadge };
});
