const { expect } = require("chai");
const { ethers, upgrades, deployments } = require("hardhat");

describe("DELABS Token", function () {
    let delabs, deployer, addr1;

    before(async () => {
        this.timeout(120000);
        console.log("Getting signers...");
        [deployer, addr1] = await ethers.getSigners();

        // console.log("Running fixture...");
        // await deployments.fixture(["DELABS"]);

        console.log("Getting deployed contract...");
        const deployment = await deployments.get("DELABS");
        delabs = await ethers.getContractAt("DELABS", deployment.address);

        console.log("Setup complete!");
    });

    it("should have total supply and assign it to initial holder", async () => {
        //const totalSupply = await delabs.totalSupply();
        const balance = await delabs.balanceOf(process.env.TIMELOCK_CONTROLLER_ADDRESS);
        expect(balance).to.greaterThan(0);
    });

    // it("should allow transfers", async () => {
    //     const amount = ethers.parseEther("1000");

    //     const deployerBalance = await delabs.balanceOf(deployer.address);
    //     const addr1BalanceBefore = await delabs.balanceOf(addr1.address);

    //     console.log("Paused:", await delabs.paused());
    //     console.log("Deployer:", deployer.address);
    //     console.log("Deployer balance:", deployerBalance.toString());
    //     console.log("addr1:", addr1.address);
    //     console.log("addr1 balance before:", addr1BalanceBefore.toString());

    //     if (await delabs.paused()) {
    //         await delabs.connect(deployer).unpause();
    //     }

    //     const tx = await delabs.connect(deployer).transfer(addr1.address, amount);
    //     await tx.wait();

    //     const addr1BalanceAfter = await delabs.balanceOf(addr1.address);
    //     console.log("addr1 balance after:", addr1BalanceAfter.toString());

    //     expect(addr1BalanceAfter).to.greaterThan(0);
    // });

    // it("should allow burning tokens", async () => {
    //     const amount = ethers.parseEther("500");

    //     const balanceBefore = await delabs.balanceOf(deployer.address);
    //     console.log("Balance before burn:", balanceBefore.toString());

    //     await delabs.connect(deployer).burn(amount);

    //     await sleep(10000);

    //     const balanceAfter = await delabs.balanceOf(deployer.address);
    //     console.log("Balance after burn:", balanceAfter.toString());

    //     expect(balanceAfter).to.lessThan(balanceBefore);
    // });

    // it("should allow pausing and prevent transfers when paused", async () => {
    //     await delabs.pause();
    //     await expect(delabs.transfer(addr1.address, 1000)).to.be.revertedWith("Pausable: paused");
    //     await delabs.unpause();
    //     await expect(delabs.transfer(addr1.address, 1000)).to.not.be.reverted;
    // });

    // it("should transfer ownership", async () => {
    //     await delabs.transferOwnership(addr1.address);
    //     await delabs.connect(addr1).acceptOwnership(); // Ownable2Step
    //     expect(await delabs.owner()).to.equal(addr1.address);
    // });

    // it("should not allow non-owner to upgrade", async () => {
    //     const GameFactoryV2 = await ethers.getContractFactory("DELABS");
    //     await expect(
    //         upgrades.upgradeProxy(delabs, GameFactoryV2.connect(addr1))
    //     ).to.be.revertedWith("Ownable: caller is not the owner");
    // });
});

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

