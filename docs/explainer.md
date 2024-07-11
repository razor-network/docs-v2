---
title: What is an Oracle?
---

An oracle is a bridge between the blockchain and the real world. They act as on-chain APIs you can query to get information into your smart contracts. This could be anything from price information to weather reports. Oracles can also be bi-directional, used to "send" data out to the real world.

### Why are they needed?

With a blockchain like Ethereum, you need every node in the network to replay every transaction and end up with the same result, guaranteed. APIs introduce potentially variable data. If you were sending ETH based on an agreed $USD value using a price API, the query would return a different result from one day to the next. Not to mention, the API could be hacked or deprecated. If this happens, the nodes in the network wouldn't be able to agree on Ethereum's current state, effectively breaking consensus.

Oracles solve this problem by posting the data on the blockchain. So any node replaying the transaction will use the same immutable data that's posted for all to see. To do this, an oracle is typically made up of a smart contract and some off-chain components that can query APIs, then periodically send transactions to update the smart contract's data.

# What is Razor Network?

This is an explanation of how Razor Network works to achieve its goals of providing a decentralized, trustworthy, fast and scalable way to provide external data to smart contracts\.

Anything which provides external data to a blockchain is called an “Oracle”\. Razor Network consists of validators who lock in their tokens as a “Stake” and provide data to the network\. The honest validators are rewarded and those who report incoherently are penalized\.

The core of Razor Network is a set of smart contracts, that can run on any Ethereum compatible blockchain\. Razor relies on the underlying blockchain for providing certain properties such as censorship resistance, security from network partition attacks, etc\.

### Goals of the protocol {#goals-of-the-protocol}

The goal of the project is to provide a decentralized way to verify and provide data to a blockchain\. Since entire economies are being built on top of blockchain which rely heavily on the external data, it is extremely important that the data is provided and aggregated in a decentralized way to avoid many kinds of attacks\.

The various kinds of attacks that can be faced by a decentralized oracle such as Razor are:

1. Takeover attack by controlling the majority of the validators
2. Bribe attack
3. Bribe signaling attack
4. Providing invalid or compromised data source
5. Making invalid queries to the oracle
6. Censoring reports of honest validators\.

### How does Razor Network compare to other oracles? {#how-does-razor-network-compare-to-other-oracles}

There is a clear need in the market for an oracle which is both fast and secure\. Razor network fills that gap\.

### How does the network achieve the goal of decentralization? {#how-does-the-network-achieve-the-goal-of-decentralization}

Decentralization is an important goal of the network\. This is because centralization puts a high amount of power in a small group of entities, which makes a lot of attacks feasible and, jeopardizes the trustworthiness of the protocol\.

We encourage decentralization in the protocol through the following ways:

1. A fair and wide distribution of tokens
2. The protocol is permissionless\. We, or anyone else, don’t have the power to decide who is allowed or otherwise, to participate in the network\.
3. Relies on decentralized, censorship\-resistant underlying blockchain
4. Queries are pseudorandomly assigned to the validators, making collusion and bribing difficult
5. Commit reveal scheme for revealing the “votes” and dispute mechanism makes it secure from bribing attacks\.

### What kind of queries can be made with Razor? {#what-kind-of-queries-can-be-made-with-razor}

Razor can be used to make price feed queries:

For automated mode queries, the client must provide a URL, specify how the response should be processed to get the result\. The assigned validators will automatically fetch the URL, parse the results and report it to the network\. Since no manual intervention is necessary, the automated mode queries are answered relatively faster\.

##### Example of an automated mode query: {#example-of-an-automated-mode-query}

URL: [https://api\.gemini\.com/v1/pubticker/ethusd](https://api.gemini.com/v1/pubticker/ethusd)

Selector: “last”

The manual mode queries, on the other hand, do not require a source URL\. The assigned validators must manually fetch the data and report it to the network\. Such queries are suitable for applications such as prediction markets, where the stakes are high and a longer resolution period is acceptable\. Also, a precise URL may not be available for such a query at the time the query is formed\.


### How are queries assigned to different validators? {#how-are-queries-assigned-to-different-validators}

Queries are pseudorandomly assigned to different validators\.

1. The higher the relative stake of a validator, the higher the chances of that particular validator to get a chance to participate in the current epoch\. So a subset of validators is selected in each round by lottery to avoid scalability issues and related attacks\. The equation which determines this is:

Where PRN is a pseudorandom number generator using a deterministic algorithm\.

S is the stake of the validator

Sm is the maximum stake currently staked in the network\.

D is the automatically adjusting difficulty factor\.

1. If the validator is selected in the lottery, they will be pseudorandomly assigned a query\.

E\.g\. let’s say we will be processing 4 queries this epoch\. All validators generate a pseudorandom number between 0 and 1\. If the generated number is between 0 and 0\.25, the first job will be assigned to that validator\. If it is between 0\.25 and 0\.5, second job and so on\.

### How are pseudorandom numbers generated in a secure way? {#how-are-pseudorandom-numbers-generated-in-a-secure-way}

For various operations of the protocol, we need to generate pseudorandom numbers in a trustless way\. The algorithm must be deterministic so that the calculation can be performed and verified on the blockchain\.

We currently use Ethereum block hashes to generate randomness\. This is deterministic since the block hashes are publically known and verifiable\.

A block hash is basically a random 256\-bit number\. Dividing it by 2^256 gives a random number between 0 and 1\. This is then used for various calculations in the protocol\.

### How does the protocol achieve protection from different bribing and collusion attacks? {#how-does-the-protocol-achieve-protection-from-different-bribing-and-collusion-attacks}

The protocol has several countermeasures to prevent such attacks\.

#### Commit \- reveal mechanism {#commit---reveal-mechanism}

When validators report a data point, they report it in a secret way, during the commit state of the epoch\. They create a “hash” of the data point along with a secret and report that hash\. Hence no one other than the validator themselves knows their own vote\. This makes the reporting process discreet and avoids anyone’s votes being influenced by other validators’ votes\.

In the reveal state of the epoch, all validators reveal the secret along with their vote\. The hash of this must match the hash reported by the validator in the commit state, otherwise, it will not be accepted by the smart contract\.

If anyone prematurely reveals their secret during the “commit” state, anyone can report it to the smart contract and slash their entire stake\. Hence validators are heavily disincentivized to share their secrets\. Due to this mechanism, it becomes difficult to prove to the briber that you have voted in one way or the other\.

### How does the protocol achieve protection from various network attacks? {#how-does-the-protocol-achieve-protection-from-various-network-attacks}

#### Network partitioning, eclipse attacks, censorship attacks {#network-partitioning-eclipse-attacks-censorship-attacks}

Razor is a set of smart contracts running on the underlying blockchain. It is the job of the underlying blockchain to protect itself on such attacks. We will either be using Ethereum main net which is secure from such attacks or a scalability solution that has the same properties.

#### Frontrunning attacks {#frontrunning-attacks}

The smart contracts have been carefully designed to make front running either impossible or indifferent from a normal transaction.

#### Transaction withholding attack {#transaction-withholding-attack}

A validator can vote for epoch (e). The miner may withhold this transaction for (n) epochs and mine it in epoch (e + n). This may penalize the honest validator since the transactions on Razor network are time-sensitive and the result of a data feed may be different at epoch (e) and (e + n).

To prevent this from happening, the epoch is included in all transactions on the network and only transactions from the current epoch are considered valid. This is an extra precaution as withholding attacks will fail in a censorship-resistant network.

### How are potential smart contract vulnerabilities addressed? {#how-are-potential-smart-contract-vulnerabilities-addressed}

#### Out of gas vulnerabilities {#out-of-gas-vulnerabilities}

In these types of vulnerabilities, the smart contract is stuck in a state because the state changing function requires gas that is higher than the gas limit of the network.

The smart contracts have been carefully designed to avoid loops. In the case where loops are unavoidable, such transactions are allowed to be completed in batches to avoid out of gas errors.

A lot of the calculations are outsourced to the validators in a trustless manner.

#### Re-entrancy attacks {#re-entrancy-attacks}

Re-entrancy attacks are kept in mind while developing the smart contracts.

#### Other bugs and vulnerabilities {#other-bugs-and-vulnerabilities}

Smart contracts will be audited to make sure the contracts are bug-free.

### Smart contract/network architecture {#smart-contractnetwork-architecture}

A simplified network and smart contract architecture is shown below. The illustration shows the case where the client application is hosted on the same blockchain as Razor Network smart contracts. The case where the application is on a different network is not shown.

![Architecture](/img/contracts.jpg)
_Smart contracts and network architecture_

Functions of the various contracts:

**State Manager**: Manage the state of the network.

**Stake Manager**: Staking and unstaking, penalties and rewards.

**Vote Manager**: Management of reported votes: commits and reveals.

**Block Manager**: Create new blocks on Razor Network.

**Collection Manager**: This contract manages queue of pending
queries and results of processed queries.

**Delegator**: Proxy contract provides access to the latest Collection manager result.

Various utility libraries, storage contracts, and interfaces are not shown for clarity purposes.

### How is the required scalability achieved? {#how-is-the-required-scalability-achieved}

Razor relies on an underlying blockchain for various features such as:

1. Achieving low\-level consensus
2. Host EVM smart contracts
3. Store data
4. Protect from double\-spending attacks
5. Avoid censorship attacks
6. Avoid network partitioning and eclipse attacks and so on

Since all the operations and communication in Razor happens via transactions on the blockchain, the underlying blockchain must be able to handle the capacity requirement in addition to the desired features mentioned above\.
