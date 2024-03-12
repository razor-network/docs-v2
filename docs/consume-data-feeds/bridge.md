# Bridge 


## Introduction

The Razor Oracle Network Bridge V2 are a set of smart contracts working in conjunction with an API that is used to securely update price feed data on-chain. The following is an overview of how the bridge works. A list of supported networks can be found [here](./deployment-details.md).


## Overview

With the release of Razor Networks Bridge V2,  the model shifts to a Pull based architecture. Instead of the oracle operator updating price feeds on each blockchain, this version allows users to pull prices on-chain only when they are _needed_. After the Razor Oracle has come to consensus on the prices for feeds, the data is then signed by a trusted party ie, the oracle operator and is stored off-chain. This off-chain data is made available by the new [REST API](./api.md) that has been introduced with this release. When an update is needed on-chain, users craft a single transaction that simultaneously updates the on-chain price and uses it in a downstream protocol. The data required for the transaction can be fetched from the off chain service(REST API), this signed data will then be verified on-chain and the updated price returned to the user.  This enables the Razor Oracle to update a large number of price feeds across many blockchains. This increases the security of existing protocols by eliminating the risk of delayed oracle updates during busy periods which lead to high or unpredictable gas prices.


### Contracts Overview

On each supported destination chain there are 4 contracts deployed by the oracle operator. They are:

#### ResultManager
This contract maintains the state of collections (price feeds) which includes the price related data and the last updated timestamp. The contract verifies the calldata using merkle tree verification and confirms the attestation was done by the authorised oracle signer. Each active collection on the Razor Network Oracle will be available to be used on any of the supported destination chains. 

#### Forwarder 
This contract is responsible for updating the prices on the **ResultManager** contract and returning the stored price feed data to the client. The contract has additional responsibilities of mapping the clients request to the related function on the ResultManager contract. The 3 main functions users will interact with are: 

- updateAndGetResult(bytes calldata): updates (stores the verified prices on-chain) and returns the latest price feed data confirmed by the Razor Oracle.
- getResult(bytes32 name): only returns the last stored result of the requested collection(price feed), could potentially return stale data.
- validateResult(bytes calldata): validates the calldata using merkle verification and then returns true or false depending on the validity of the calldata sent and its result.

#### Staking
The Staking contract is responsible for fees and whitelisting of clients. _Consuming price feeds is currently free, but this could potentially change in the near future._

#### TransparentForwarder
This is the only contract that users/client dapps will need to interact with to fetch price feed data. The contract simply acts as an interface that forwards all calls to the Forwarder contract. 


_Note:_ For more information on how to interact with the bridge please visit [TransparentForwarder](./transparent-forwarder.md). 


### API Overview

The REST API is used to relay the Oracle Blocks confirmed by the Razor Network Oracles, to different destination chain contracts. Each collection's price data is signed by a trusted party, and a merkle tree is generated for each Confirmed Oracle Block. The clients can then request the API to return the signed merkle data required to verify and update the price on-chain based on the collection's name. 

**Note**: The attestations done here are done by a _trusted party_ ie, Razor Oracle Operator. Therefore this is considered as a centralised authority. We are currently researching and working towards an architecture that will allow for decentralised attestations in the future.









