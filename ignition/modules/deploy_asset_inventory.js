const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AssetInventorySystem", (m) => {  
  // const starBadge = m.contract("STARBADGE", ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 80002]);
  
  const rssDailySpin = m.contract("AssetInventorySystem", ["0x0AC090A18332302F149A3E7E43d4F32f284472fE"]);

  // const { apollo } = hre.ignition.deploy(ApolloModule);

  // m.call(rssDailySpin, "spin", []);

  return { rssDailySpin };
});
