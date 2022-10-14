# Consuming Data feeds

Razor Network Data Feeds are the easiest and most reliable way to connect any smart contracts to fetch the current real world market price of an asset (called as a `collection`) in a single call.

To consume the Razor Network price feeds, your contract should reference `IResultManager`. This is an interface which defines the external functions implemented by Data Feeds.

There are two functions which can fetch price of an asset:

1. `getResult(bytes32 name)`: This function accepts the name as an argument. The `name` is a _keccak-256 hash_ of the collection name. Check https://razorscan.io/governance/datafeeds for a full list of active collection names.
2. `getResultFromID(uint16 _id)`: This function accepts the id of the collection and returns the collections price and power.

Output:

1. **result**(uint256) - Current price of the collection
2. **power**(int8) - Power of the collection. Power is used to specify the decimal shifts required on the result.

Consider the following example:

If the result of the collection is **300050** and it's power is **2**, this essentially indicates that price of the collection (asset) is **$3000.50**. This adds a higher level of precision.

The price of collection can be calculated by the following formula: `result * 10^-(power)`.

## Testnet

All the assets (collections) that can currently be consumed are available here [Testnet Razorscan](https://staging.razorscan.io/governance/datafeeds).

| Contract      | Address                                    | Chain Name             |
| ------------- | ------------------------------------------ | ---------------------- |
| ResultManager | 0xF2aE9Fd8141E774A08EE3007dA76Ad9d058e713C | attractive-merope      |
| ResultManager | 0x455b3ef0167ecD30Ed7E431eA7b9162b16FE9566 | actual-secret-cebalrai |

### attractive-merope

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IResultManager {
    function getCollectionID(bytes32 _name) external view returns (uint16);

    function getResult(bytes32 _name) external view returns (uint256, int8);

    function getResultFromID(uint16 _id) external view returns (uint256, int8);

    function getActiveCollections() external view returns (uint16[] memory);

    function getCollectionStatus(uint16 _id) external view returns (bool);
}

contract DataFeed {
    IResultManager internal resultManager;

    constructor() {
        resultManager = IResultManager(0xF2aE9Fd8141E774A08EE3007dA76Ad9d058e713C);
    }


    ///@dev using the hash of collection name, clients can query collection id with respect to its hash,
    ///check https://razorscan.io/governance/datafeeds for a full list of active collection names
    ///@param _name bytes32 hash of the collection name
    ///@return collection ID
    function getCollectionID(bytes32 _name)
    public
    view
    returns (uint16) {
       (uint16 id) = resultManager.getCollectionID(_name);
       return id;
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
        (uint256 result, int8 power) = resultManager.getResult(_name);
        return (result, power);
    }


    ///@return ids of active collections in the oracle
    function getActiveCollections()
    public
    view
    returns (uint16[] memory) {
        (uint16[] memory activeCollectionIds) = resultManager.getActiveCollections();
        return activeCollectionIds;
    }

    /// @notice fetch collection result by Id
    /// @param _id collection ID
    /// @return result of the collection and its power
    /// @return power
    function getResultFromID(uint16 _id)
    public
    view
    returns (uint256, int8) {
        (uint256 result, int8 power) = resultManager.getResultFromID(_id);
        return (result, power);
    }


     /// @notice fetch collection status using id
     /// @param _id collection ID
     /// @return status of the collection
    function getCollectionStatus(uint16 _id) public view returns (bool) {
        return resultManager.getCollectionStatus(_id);
    }
}

```

**Note**: This example can be run on **_attractive-merope_** chain.

### actual-secret-cebalrai

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IResultManager {
    function getCollectionID(bytes32 _name) external view returns (uint16);

    function getResult(bytes32 _name) external view returns (uint256, int8);

    function getResultFromID(uint16 _id) external view returns (uint256, int8);

    function getActiveCollections() external view returns (uint16[] memory);

    function getCollectionStatus(uint16 _id) external view returns (bool);
}

contract DataFeed {
    IResultManager internal resultManager;

    constructor() {
        resultManager = IResultManager(0x455b3ef0167ecD30Ed7E431eA7b9162b16FE9566);
    }


    ///@dev using the hash of collection name, clients can query collection id with respect to its hash,
    ///check https://razorscan.io/governance/datafeeds for a full list of active collection names
    ///@param _name bytes32 hash of the collection name
    ///@return collection ID
    function getCollectionID(bytes32 _name)
    public
    view
    returns (uint16) {
       (uint16 id) = resultManager.getCollectionID(_name);
       return id;
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
        (uint256 result, int8 power) = resultManager.getResult(_name);
        return (result, power);
    }


    ///@return ids of active collections in the oracle
    function getActiveCollections()
    public
    view
    returns (uint16[] memory) {
        (uint16[] memory activeCollectionIds) = resultManager.getActiveCollections();
        return activeCollectionIds;
    }

    /// @notice fetch collection result by Id
    /// @param _id collection ID
    /// @return result of the collection and its power
    /// @return power
    function getResultFromID(uint16 _id)
    public
    view
    returns (uint256, int8) {
        (uint256 result, int8 power) = resultManager.getResultFromID(_id);
        return (result, power);
    }


     /// @notice fetch collection status using id
     /// @param _id collection ID
     /// @return status of the collection
    function getCollectionStatus(uint16 _id) public view returns (bool) {
        return resultManager.getCollectionStatus(_id);
    }
}


```

**Note**: This example can be run on **_actual-secret-cebalrai_** chain.
