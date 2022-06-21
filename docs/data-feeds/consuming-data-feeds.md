# Consuming Data feeds

Razor Network data feeds connect the smart contract to fetch the price of an asset (collection) in a single call.
All the collection/asset price that are currently reported by oracle can be found on [Razorscan](https://razorscan.io/).

To consume Razor Network price feed, your contract should reference `IDelegator`.

There are two functions which can fetch price of an collection/asset:

1. `getResult(bytes32 name)`: The function accept name as argument. Here the name is keccak-256 hash of collection/asset name.
2. `getResultFromID(uint16 _id)`: The function accept id of the collection/asset.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.1-patch3
import "@razor-network/contracts/contracts/IDelegator.sol";

contract DataFeed {
    IDelegator internal delegator;

    // Network: Skale testnet v2
    // Delegator address: 0x713f5C70cD2C8590e88bF917DF7F4Cc1eB6e821F
    constructor() {
        delegator = IDelegator(0x713f5C70cD2C8590e88bF917DF7F4Cc1eB6e821F);
    }

    /// @notice fetch collection result by name
    /// @param _name bytes32 hash of the collection name
    /// @return result of the collection and its power
    /// @return power
    function getResult(bytes32 _name)
        public
        view
        returns (uint256, int8)
    {
        (uint256 result, int8 power) = delegator.getResult(_name);
        return (result, power);
    }

    /// @notice fetch collection result by Id
    /// @param _id collection ID
    /// @return result of the collection and its power
    /// @return power
    function getResultFromID(uint16 _id) public view returns (uint256, int8) {
        (uint256 result, int8 power) = delegator.getResultFromID(_id);
        return (result, power);
    }
}

```
