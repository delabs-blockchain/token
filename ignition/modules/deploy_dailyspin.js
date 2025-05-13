const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("RRSDailySpin", (m) => {  
  // const starBadge = m.contract("STARBADGE", ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 80002]);
  
  const rssDailySpin = m.contract("RRSDailySpin", []);

  // const { apollo } = hre.ignition.deploy(ApolloModule);

  m.call(rssDailySpin, "spin", []);

  return { rssDailySpin };
});
