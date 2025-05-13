const { ethers, upgrades } = require('hardhat');
import { getAddress, zeroPadValue } from "ethers";

function addressToBytes32(address: string) {
    return zeroPadValue(getAddress(address), 32);
}

async function main() {
    const bEid = 40267; // Amoy 

    const aOFTAddress = "0xAdfe395865004CA164983926ACf8318baABFAa95"; //sepolia contract address
    const bOFTAddress = "0x67c6204E9333A90B9922aB9A9B1355f0d2601cA6"; //amoy contract address

    const aOFT = await ethers.getContractAt("DELABS", aOFTAddress);

    var tx = await aOFT.setPeer(bEid, addressToBytes32(bOFTAddress));
    console.log("SetPeer A:", tx.hash);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


