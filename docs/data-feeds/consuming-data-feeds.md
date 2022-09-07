# Consuming Data feeds

Razor Network Data Feeds are the easiest and most reliable way to connect any smart contracts to fetch the current real world market price of an asset (called as a collection) in a single call.
All the assets (collections) that can currently be consumed are available here [Razorscan](https://razorscan.io/asset/ethCollectionMean).

To consume the Razor Network price feeds, your contract should reference `IDelegator`. This is an interface which defines the external functions implemented by Data Feeds.

There are two functions which can fetch price of an asset:

1. `getResult(bytes32 name)`: This function accepts the name as an argument. The `name` is a _keccak-256 hash_ of the collection name.
2. `getResultFromID(uint16 _id)`: This function accepts the id of the collection.

Output:

1. **result**(uint256) - Current price of the collection
2. **power**(int8) - Power of the collection. Power is used to specify the decimal shifts required on the result.

Consider the following example:

If the result of the collection is **300050** and it's power is **2**, this essentially indicates that price of the collection (asset) is **$3000.50**. This adds a higher level of precision.

The price of collection can be calculated by the following formula: `result * 10^-(power)`.

**Note** - _Names and IDs of collections can be found [here](https://razorscan.io/asset/ethCollectionMean)._

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.2
import "@razor-network/contracts/contracts/IDelegator.sol";

contract DataFeed {
    IDelegator internal delegator;

    // Network: Razor Schain
    // Delegator address: 0x83DC292e959a9E89Bec308C92e89197Cea296D18
    constructor() {
        delegator = IDelegator(0x83DC292e959a9E89Bec308C92e89197Cea296D18);
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

**Note**: This example can be run on **_Attractive Merope Schain_** and **_Rinkeby_** chains **only**.
