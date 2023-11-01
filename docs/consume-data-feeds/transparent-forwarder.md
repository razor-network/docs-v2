---
title: Transparent Forwarder
---

To consume the Razor Network price feeds, your contract should reference `ITransparentForwarder`. This is an interface that defines the external functions implemented by Data Feeds.

Function to fetch price the of an asset:

`getResult(bytes32 name)`: This function accepts the name as an argument. The `name` is a _keccak-256 hash_ of the collection name. Check https://razorscan.io/governance/datafeeds for a full list of active collection names.

Output:

1. **result**(uint256) - Current price of the collection
2. **power**(int8) - Power of the collection. Power is used to specify the decimal shifts required on the result.

Consider the following example:

If the result of the collection is **300050** and its power is **2**, this essentially indicates that the price of the collection (asset) is **$3000.50**. This adds a higher level of precision.

The price of the collection can be calculated by the following formula: `result * 10^-(power)`.

Code snippet to integrate Datafeed with `ITransparentForwarder` interface:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITransparentForwarder {
    /**
     * @dev using the hash of collection name, clients can query the result of that collection
     * @param _name bytes32 hash of the collection name
     * @return result of the collection and its power
     */
    function getResult(bytes32 _name) external payable returns (uint256, int8);
}

contract DataFeed {
    ITransparentForwarder public transparentForwarder;
    uint256 public latestResult;
    int8 public latestPower;

    constructor() {
        transparentForwarder = ITransparentForwarder(
            /* Transparent Forwarder contract address deployed on respective chains */
        );
    }

    /// @notice fetch collection result by name
    /// @param name bytes32 hash of the collection name
    /// @return result of the collection and its power
    /// @return power
    function getResult(bytes32 name) public payable returns (uint256, int8) {
        (uint256 result, int8 power) = transparentForwarder.getResult{
            value: msg.value
        }(name);
        latestResult = result;
        latestPower = power;
        return (result, power);
    }
}
```

**Note**: This example can be run on chains where the Transparent Forwarder contract is deployed. Details regarding deployed contracts and chains can be found [here](/docs/consume-data-feeds/deployment-details#supported-chains)
