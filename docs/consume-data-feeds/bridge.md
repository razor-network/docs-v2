# Bridge Documentation

## Introduction

The Razor Oracle Network Bridge V2 comprises a suite of smart contracts in synergy with an API, facilitating the secure on-chain update of price feed data. This document provides an overview of the bridge's operation. A list of supported networks can be found [here](./deployment-details.md).

## Overview

The advent of Razor Network's Bridge V2 introduces a shift to a **pull-based** architecture. Contrary to the previous model where the oracle operator was responsible for updating price feeds on each blockchain, the new version empowers users to retrieve prices on-chain _as required_. Once the Razor Oracle reaches consensus on the price feeds, the data is authenticated by the oracle operator (a trusted entity) and stored off-chain. The newly introduced [REST API](./api.md) exposes this off-chain data, enabling users to execute a singular transaction that concurrently updates the on-chain price while utilizing it in subsequent protocols. Users can obtain the signed data from the off-chain service (REST API), which is then authenticated on-chain, thereby providing the user with the updated price. This mechanism enhances the scalability of Razor Oracle, allowing the update of numerous price feeds across various blockchains and bolstering the security of existing protocols by mitigating the risks associated with delayed oracle updates during periods of high or unpredictable gas prices.

### Contracts Overview

For each supported destination chain, the oracle operator deploys four contracts:

#### ResultManager
The ResultManager contract manages the state of collections (price feeds), encompassing the price data and the timestamp of the last update. It verifies the calldata using Merkle tree verification and confirms that the attestation was performed by the authorized oracle signer. Each active collection within the Razor Network Oracle is accessible on all supported destination chains.

#### Forwarder
The Forwarder contract is tasked with updating prices in the ResultManager contract and returning the stored price feed data to the client. It also maps the client's request to the corresponding function in the ResultManager contract. The three primary functions available to users are:

- `updateAndGetResult(bytes calldata)`: Updates the on-chain data with verified prices and retrieves the latest price feed data confirmed by the Razor Oracle.
- `getResult(bytes32 name)`: Retrieves the last stored result of the requested collection (price feed), which may return stale data.
- `validateResult(bytes calldata)`: Validates the calldata using Merkle verification and returns a boolean indicating the validity of the provided calldata and its result.

#### Staking
The Staking contract oversees fees and the whitelisting of clients. _While consuming price feeds is currently free, this may change in the future_.

#### TransparentForwarder
Clients and dApp developers interact with the TransparentForwarder contract to access price feed data. This contract serves as a proxy, redirecting all calls to the Forwarder contract.

**Note:** For detailed interaction instructions with the bridge, please refer to [TransparentForwarder](./transparent-forwarder.md).

### API Overview

The REST API communicates the Oracle Blocks, confirmed by Razor Network Oracles, to various destination chain contracts. Each collection's price data, signed by a trusted entity and organized into a Merkle tree for each confirmed Oracle Block, enables clients to request for the signed data required to verify and update the price on -chain based on the collection's name.

**Disclaimer:** The attestations done by the REST API service are currently centralized ie, performed by the trusted Razor Oracle Operator. Our ongoing research aims to transition to a decentralized attestation model in future implementations.


### Architecture Overview

![Screenshot](/img/bridge-v2-architecture.png)

