// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import the TimelockController contract from OpenZeppelin
import "@openzeppelin/contracts/governance/TimelockController.sol";

// This contract simply uses the OpenZeppelin TimelockController
contract MyTimelockController is TimelockController {
    constructor(uint256 minDelay, address[] memory proposers, address[] memory executors)
        TimelockController(minDelay, proposers, executors, address(0))
    {}
}
