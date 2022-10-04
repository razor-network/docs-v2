# Consuming Data feeds

Razor Network Data Feeds are the easiest and most reliable way to connect any smart contracts to fetch the current real world market price of an asset (called as a `collection`) in a single call.

To consume the Razor Network price feeds, your contract should reference `IResultHandler`. This is an interface which defines the external functions implemented by Data Feeds.

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

### attractive-merope

| Contract              | Address                                    | Chain Name        |
| --------------------- | ------------------------------------------ | ----------------- |
| ResultSender           | 0x48F3E84e6Ffaf3f55D44D141144a424a424dB83c | whispering-turais |
| ResultHandler Proxy          | 0x801DdA93f02C0b30E7495bCC788D51271863Ec8c | attractive-merope |


```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.2 (this will be updated once the contracts are released to npm.)
import "@razor-network/contracts/contracts/IResultHandler.sol";
contract DataFeed {
    IResultHandler internal resultHandler;

    constructor() {
        resultHandler = IResultHandler(0x801DdA93f02C0b30E7495bCC788D51271863Ec8c);
    }


    ///@dev using the hash of collection name, clients can query collection id with respect to its hash, 
    ///check https://razorscan.io/governance/datafeeds for a full list of active collection names
    ///@param _name bytes32 hash of the collection name
    ///@return collection ID
    function getCollectionID(bytes32 _name) 
    public 
    view 
    returns (uint16) {
       (uint16 id) = resultHandler.getCollectionID(_name);
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
        (uint256 result, int8 power) = resultHandler.getResult(_name);
        return (result, power);
    }


    ///@return ids of active collections in the oracle
    function getActiveCollections() 
    public
    view 
    returns (uint16[] memory) {
        (uint16[] memory activeCollectionIds) = resultHandler.getActiveCollections();
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
        (uint256 result, int8 power) = resultHandler.getResultFromID(_id);
        return (result, power);
    }
}

```

**Note**: This example can be run on **_attractive-merope_** chain.

### rinkeby

| Contract              | Address                                    | Chain Name        |
| --------------------- | ------------------------------------------ | ----------------- |
| ResultSender           | 0x48F3E84e6Ffaf3f55D44D141144a424a424dB83c | whispering-turais |
| ResultHandler Proxy          | 0xc0Db5ff39A1a5dA7F3dE0eBc7BC838B79A259A75 | rinkeby |


```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.2 (this will be updated once the contracts are released to npm.)
import "@razor-network/contracts/contracts/IResultHandler.sol";
contract DataFeed {
    IResultHandler internal resultHandler;

    constructor() {
        resultHandler = IResultHandler(0xc0Db5ff39A1a5dA7F3dE0eBc7BC838B79A259A75);
    }


    ///@dev using the hash of collection name, clients can query collection id with respect to its hash, 
    ///check https://razorscan.io/governance/datafeeds for a full list of active collection names
    ///@param _name bytes32 hash of the collection name
    ///@return collection ID
    function getCollectionID(bytes32 _name) 
    public 
    view 
    returns (uint16) {
       (uint16 id) = resultHandler.getCollectionID(_name);
       return id;
    }

    /// @notice fetch collection result by name
    /// @param _name bytes32 hash of the collection name
    /// @return result of the collection
    /// @return power
    function getResult(bytes32 _name)
        public
        view
        returns (uint256, int8)
    {
        (uint256 result, int8 power) = resultHandler.getResult(_name);
        return (result, power);
    }


    ///@return ids of active collections in the oracle
    function getActiveCollections() 
    public
    view 
    returns (uint16[] memory) {
        (uint16[] memory activeCollectionIds) = resultHandler.getActiveCollections();
        return activeCollectionIds;
    }

    /// @notice fetch collection result by Id
    /// @param _id collection ID
    /// @return result of the collection
    /// @return power
    function getResultFromID(uint16 _id) 
    public 
    view 
    returns (uint256, int8) {
        (uint256 result, int8 power) = resultHandler.getResultFromID(_id);
        return (result, power);
    }
}

```

**Note**: This example can be run on **_rinkeby_** chain.


<!-- ## Mainnet 

All the assets (collections) that can currently be consumed are available here [Razorscan](https://razorscan.io/asset/ethCollectionMedian).

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.2
import "@razor-network/contracts/contracts/IDelegator.sol";

contract DataFeed {
    IDelegator internal delegator;

    // Network: Razor Schain (turbulent-unique-scheat)
    // Delegator address: 0xC74745eA5a3fac1864FAcd8f48d72C21A4ab883D
    constructor() {
        delegator = IDelegator(0xC74745eA5a3fac1864FAcd8f48d72C21A4ab883D);
    }

    /// @notice fetch collection result by name
    /// @param _name bytes32 hash of the collection name
    /// @return result of the collection
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
    /// @return result of the collection
    /// @return power
    function getResultFromID(uint16 _id) public view returns (uint256, int8) {
        (uint256 result, int8 power) = delegator.getResultFromID(_id);
        return (result, power);
    }
}

```

**Note**: This example can be run on **_Razor Mainnet Schain_**. -->