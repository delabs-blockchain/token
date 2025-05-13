const { ethers, upgrades } = require('hardhat');
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { getAddress, zeroPadValue, parseUnits } from "ethers";

async function main() {
    var amount_to_send = "3";
    var sender = "0xea6F99295D19D2DE5197FFE6c607df1BEcE6b6C7";
    var recipientB = "0xea6F99295D19D2DE5197FFE6c607df1BEcE6b6C7";

    const aEid = 40161; // Sepolia
    const bEid = 40267; // Amoy 

    const aOFTAddress = "0xAdfe395865004CA164983926ACf8318baABFAa95";

    const aOFT = await ethers.getContractAt("DELABS", aOFTAddress);
    const decimals = await aOFT.decimals()
    const amount = parseUnits(amount_to_send, decimals)
    const options = Options.newOptions().addExecutorLzReceiveOption(200000, 0).toHex().toString()
    const sendParam = [bEid, zeroPadValue(recipientB, 32), amount, amount, options, '0x', '0x']
    const [nativeFee] = await aOFT.quoteSend(sendParam, false)

    const r = await aOFT.send(sendParam, [nativeFee, 0], sender, { value: nativeFee })
    console.log(`Tx initiated. See tx status on LayerZero Scan: https://testnet.layerzeroscan.com/tx/${r.hash}`)
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


