---
title: Transparent Forwarder
---

To consume the Razor Network price feeds, your contract should reference `ITransparentForwarder`. This is an interface that defines the external functions implemented by Data Feeds.

- **`updateAndGetResult(bytes calldata _data)`**: This function requires `calldata` from the [REST API](./api.md) for a particular collection. The function updates the collections results to the latest values reported by the API and makes them available on-chain. This calldata constructed is unique for each collection and consists of `(merkleRoot, proof, result, signature)`. Where each parameter is described as follows: 
    - `merkleRoot(bytes32)`: The root of the Merkle tree created by the API service for the particular collection.
    - `proof(bytes32[])`: The Merkle proof for the result of the particular collection within the Merkle tree created. 
    - `result(uint256 result, int8 power, uint256 lastUpdatedTimestamp)`: The result of the collection reported.
    - `signature(bytes)`: The signature that was used to sign the reported collection values.

    The function returns the following:
    - **result** (uint256): Indicates the price of the collection.
    - **power** (int8): Represents the power of the collection, which is utilized to determine the necessary decimal shifts on the result.
    - **lastUpdatedTimestamp** (uint256): Marks the timestamp when the price feed was last updated.

    _Note: This function always returns the latest price reported._



- **`validateResult(bytes calldata _data)`**: This function requires `calldata` from the [REST API](./api.md) for a particular collection. The function checks the validity of the calldata provided and returns a boolean and the result of the collection from the calldata present.

    The function returns the following:
    - **valid** (bool): Indicates the validity of the calldata for a collection provided.
    - **result** (uint256): Indicates the price of the collection.
    - **power** (int8): Represents the power of the collection, which is utilized to determine the necessary decimal shifts on the result.
    - **lastUpdatedTimestamp** (uint256): Marks the timestamp when the price feed was last updated.



- **`getResult(bytes32 name)`**: This function requires the `name` parameter, a _keccak-256 hash_ of the collection name, as input. For a comprehensive list of active collection names, please refer to [RazorScan's datafeeds](https://razorscan.io/governance/datafeeds). Notably, for example, `keccak256(ETHUSD)` is hashed as `0x59102b37de83bdda9f38ac8254e596f0d9ac61d2035c07936675e87342817160`. This function retrieves the price of a specified collection but does not update it to the most recent value. Consequently, the _**price reported could be outdated**_.

    The function returns the following:
    - **result** (uint256): Indicates the price of the collection.
    - **power** (int8): Represents the power of the collection, which is utilized to determine the necessary decimal shifts on the result.
    - **lastUpdatedTimestamp** (uint256): Marks the timestamp when the price feed was last updated.


Consider the following example:

If the result of the collection is **300050** and its power is **2**, this essentially indicates that the price of the collection (asset) is **$3000.50**. This adds a higher level of precision.

The price of the collection can be calculated by the following formula: `result * 10^-(power)`.

Code snippet to integrate Datafeed with a `ITransparentForwarder` interface:

```solidity

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


interface ITransparentForwarder {
    /**
     * @notice Updates the result based on the provided data and returns the latest result
     * @dev The data will be updated only if the result is valid and is newer than the previous result.
     * Updation will be done by the clients, though once the result is updated, it wont be updated till the latest results
     * are sent again. Regardless of the updation, the result will be returned.
     * @param _data bytes data required to update the result
     * @return result of the collection, its power and timestamp
     */
    function updateAndGetResult(bytes calldata _data) external payable returns (uint256, int8, uint256);

    /**
     * @dev using the hash of collection name, clients can query the result of that collection
     * @param _name bytes32 hash of the collection name
     * @return result of the collection and its power
     */
    function getResult(bytes32 _name) external returns (uint256, int8, uint256);

    /**
     * @dev validates the result based on the provided data and returns the validity
     * @param _data bytes data required to validate the result
     * @return validity of the result
     */
    function validateResult(bytes calldata _data) external returns (bool, uint256, int8, uint256);
}


contract Client {
    ITransparentForwarder public transparentForwarder;
    uint256 public lastResult;
    int8 public lastPower;
    uint256 public lastTimestamp;
    bool public isResultValid;

    constructor(address _transparentForwarder) {
        transparentForwarder = ITransparentForwarder(_transparentForwarder);
    }

    function setTransparentForwarder(address _transparentForwarder) public {
        transparentForwarder = ITransparentForwarder(_transparentForwarder);
    }

    function updateAndGetResult(bytes calldata data) public payable returns (uint256, int8, uint256) {
        (uint256 result, int8 power, uint256 timestamp) = transparentForwarder.updateAndGetResult{value: msg.value}(data);

        lastResult = result;
        lastPower = power;
        lastTimestamp = timestamp;
        return (result, power, timestamp);
    }

    function getResult(bytes32 name) public returns (uint256, int8, uint256) {
        (uint256 result, int8 power, uint256 timestamp) = transparentForwarder.getResult(name);

        lastResult = result;
        lastPower = power;
        lastTimestamp = timestamp;
        return (result, power, timestamp);
    }

    function validateResult(bytes calldata data) public returns (bool) {
        (isResultValid, , , ) = transparentForwarder.validateResult(data);

        return isResultValid;
    }
}

```

**Note**: This example can be deployed on chains where the Transparent Forwarder contract is deployed. Details regarding deployed contracts and chains can be found [here](/docs/consume-data-feeds/deployment-details#supported-chains). 
