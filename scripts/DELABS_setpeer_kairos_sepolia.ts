const { ethers, upgrades } = require('hardhat');
import { getAddress, zeroPadValue } from "ethers";

function addressToBytes32(address: string) {
    return zeroPadValue(getAddress(address), 32);
}

async function main() {
    const aEid = 40161; // Sepolia

    const aOFTAddress = "0x825525d7d32aec2d068459579e93794f7d20f0df"; //sepolia contract address
    const bOFTAddress = "0xA4bce1F7c99B75F0C07e8E7B2CDf257Bc153A936"; //kairos contract address

    const bOFT = await ethers.getContractAt("DELABS", bOFTAddress);

    var tx = await bOFT.setPeer(aEid, addressToBytes32(aOFTAddress));
    console.log("SetPeer B:", tx.hash);

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


