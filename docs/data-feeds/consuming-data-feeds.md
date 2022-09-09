# Consuming Data feeds

Razor Network Data Feeds are the easiest and most reliable way to connect any smart contracts to fetch the current real world market price of an asset (called as a collection) in a single call.

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


## Testnet 
All the assets (collections) that can currently be consumed are available here [Testnet Razorscan](https://staging.razorscan.io/asset/ethCollectionMedian).

## Contract Address

| Contract              | Address                                    | Chain Name        |
| --------------------- | ------------------------------------------ | ----------------- |
| ResultHandler         | 0x70B2c30B048cE877DbFD5f43Dc8431aacD947747 | attractive-merope |
| MessageProxy  (IMA)        | 0xd2AAa00100000000000000000000000000000000 | attractive-merope |
| ResultProxy           | 0xee150054a6c201D3a55A31Cc16e52E55DeD195b5 | whispering-turais |
| MessageProxy  (IMA)        | 0xd2AAa00100000000000000000000000000000000 | whispering-turais |
| ResultProxy (rinkeby) | 0x54EB375F80f6feCA26BaA49A76dc7FB35bd04a03 | whispering-turais |
| ResultHandler         | 0x10144adD7B8cB532BE580cf508837f155416D21A | Mainnet (rinkeby) |
| MessageProxy          | 0x656fb12abab353FB1875a4e3Dc4D70179CB85BA4 | Mainnet (rinkeby) |

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @razor-network/contracts@1.0.2
import "@razor-network/contracts/contracts/IDelegator.sol";

contract DataFeed {
    IDelegator internal delegator;

    // Network: Attractive Merope
    // ResultHandlerProxy address: 0x70B2c30B048cE877DbFD5f43Dc8431aacD947747
    constructor() {
        delegator = IDelegator(0x70B2c30B048cE877DbFD5f43Dc8431aacD947747);
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



## Mainnet 

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

**Note**: This example can be run on **_Razor Mainnet Schain_**.