const { ethers, upgrades } = require('hardhat');
import { getAddress, zeroPadValue } from "ethers";

function addressToBytes32(address: string) {
    return zeroPadValue(getAddress(address), 32);
}

async function main() {
    const aEid = 40161; // Sepolia

    const aOFTAddress = "0xAdfe395865004CA164983926ACf8318baABFAa95"; //sepolia contract address
    const bOFTAddress = "0x67c6204E9333A90B9922aB9A9B1355f0d2601cA6"; //amoy contract address

    const bOFT = await ethers.getContractAt("DELABS", bOFTAddress);

    var tx = await bOFT.setPeer(aEid, addressToBytes32(aOFTAddress));
    console.log("SetPeer B:", tx.hash);

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


