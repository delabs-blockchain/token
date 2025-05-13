// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OFTUpgradeable} from "@layerzerolabs/oft-evm-upgradeable/contracts/oft/OFTUpgradeable.sol";

contract DELABS is
    OFTUpgradeable,
    UUPSUpgradeable,
    ERC20BurnableUpgradeable,
    ERC20PausableUpgradeable,
    ERC20PermitUpgradeable,
    Ownable2StepUpgradeable
{
    uint256 private constant TOTAL_SUPPLY = 3000000000 * 10 ** 18; // 3 billion tokens with 18 decimals

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address _lzEndpoint) OFTUpgradeable(_lzEndpoint) {
        _disableInitializers();
    }

    function initialize(
        string memory _name,
        string memory _symbol,
        address initialHolder
    ) public initializer {
        __OFT_init(_name, _symbol, initialHolder);
        __ERC20Burnable_init();
        __ERC20Pausable_init();
        __ERC20Permit_init("Delabs Games");
        __Ownable2Step_init();
        __Ownable_init(initialHolder);
        __UUPSUpgradeable_init();

        require(
            initialHolder != address(0),
            "Initial holder address cannot be zero"
        );

        _mint(initialHolder, TOTAL_SUPPLY);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    // Override required functions
    function _update(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20PausableUpgradeable) {
        super._update(from, to, amount);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _transferOwnership(
        address newOwner
    ) internal override(OwnableUpgradeable, Ownable2StepUpgradeable) {
        super._transferOwnership(newOwner);
    }

    function transferOwnership(
        address newOwner
    ) public override(OwnableUpgradeable, Ownable2StepUpgradeable) onlyOwner {
        super.transferOwnership(newOwner);
    }
}
