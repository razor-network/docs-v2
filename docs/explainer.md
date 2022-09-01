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

#### Apart from being secure from such attacks, Razor Network has the following features: {#apart-from-being-secure-from-such-attacks-razor-network-has-the-following-features}

1. An oracle which is both fast and secure
2. Cover a large number of use cases by allowing results to be fetched both manually or automatically

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

Razor can be used to make two kinds of queries:

1. Automated mode queries
2. Manual mode queries

This allows Razor to cover a large number of use cases\.

For automated mode queries, the client must provide a URL, specify how the response should be processed to get the result\. The assigned validators will automatically fetch the URL, parse the results and report it to the network\. Since no manual intervention is necessary, the automated mode queries are answered relatively faster\.

##### Example of an automated mode query: {#example-of-an-automated-mode-query}

URL: [https://api\.gemini\.com/v1/pubticker/ethusd](https://api.gemini.com/v1/pubticker/ethusd)

Selector: “last”

The manual mode queries, on the other hand, do not require a source URL\. The assigned validators must manually fetch the data and report it to the network\. Such queries are suitable for applications such as prediction markets, where the stakes are high and a longer resolution period is acceptable\. Also, a precise URL may not be available for such a query at the time the query is formed\.

##### Example of a manual mode query: {#example-of-a-manual-mode-query}

Query: Who won the 2020 US election?

Data Source \(optional\): US Mainstream media and common knowledge

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

#### Dispute Resolution mechanism {#dispute-resolution-mechanism}

An attacker can bribe the majority of the stake in a trustless way and can compromise the results of the oracle\. To prevent this, Razor Network has an in\-built dispute resolution mechanism\.

Any result of the oracle can be disputed by paying the “Dispute bond”, which can be paid collectively\. The disputers win a reward of 50% of the dispute bond if they successfully dispute a round\.

If the bond is successfully paid within the dispute period, the query enters a dispute round\. In the dispute round, the stakes are higher, the amount of penalty for voting incoherently is higher and the queries are answered manually by the validators\. The results of the dispute round can be further disputed\. The amount of participating stake, and the dispute bond amount is doubled every round\. If the disputer wins the dispute, their dispute bond is refunded, else it is confiscated and rewarded to coherent validators\.

Due to this mechanism, even if an attacker compromises the oracle, the result will likely be disputed by an honest actor\. The attacker will have to pay double the bribe to compromise the dispute round\. Even if they are successful in doing that, that round will again likely be disputed and so on\. This can go on till the whole network participates in the dispute round\. If that round also fails to resolve the dispute, the network forks in two networks and the market decides the honest fork\.

### How does the protocol achieve protection from invalid query attacks? {#how-does-the-protocol-achieve-protection-from-invalid-query-attacks}

A client must pay a “validity bond” for making a query on Razor\. This is in addition to the transaction fee for making the query\. The validity bond will be confiscated if the query is ruled out as invalid, else it is refunded back to the client after the results are finalized\.

Since investigating query requires manual intervention, this can only be done in dispute rounds and manual rounds\.

An attacker may make an invalid query to the network in the following ways:

#### Invalid data\-source {#invalid-data-source}

The attacker may provide a data\-source which is non\-responsive, provides unreliable data, or lacks trustworthiness\.

#### Invalid query {#invalid-query}

The query itself may be invalid\. For example “Is this statement correct?” is an invalid query\.

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

State manager: Manage the state of the network.

Stake Manager: Staking and unstaking, penalties and rewards.

Vote Manager: Management of reported votes: commits and reveals.

Block Manager: Create new blocks on Razor Network.

Collection Manager: This contract manages queue of pending
queries and results of processed queries.

Delegator: Proxy contract provides access to the latest Collection manager result.

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

### How can a decentralized application use Razor? What is the information flow? {#how-can-a-decentralized-application-use-razor-what-is-the-information-flow}

How a prediction market can use Razor Network Oracle:

1. Alice creates a new betting contract: "Who wins the 2020 US election?"
2. Alice has to pay a "Validity bond" to guarantee that this is a valid query\. The validity bond will be paid back to her if the query is not ruled out as "Invalid"
3. Alice bets 1 ETH that "Trump" will win the election\.
4. Bob bets against Alice that "Andrew" will win the election\.
5. Different users can bet on different outcomes similarly\. All the bets will be locked in the smart contract until the bets are settled\.
6. The betting contract can only ask this question to the Razor oracle at a later date decided in advance\. Let's say December 2020\. And then settle the bet\. This action can be triggered by anyone but only after the specified date\.
7. Since this query will be initiated in the "manual" mode, no data source will be provided\. The validators will manually search the internet and report the winner of the election to the Razor Network\.
8. The result will be finalized in the Razor Network after the cycle is finished\.
9. After this happens, anyone can trigger the "settle" action in the betting smart contract\. The betting smart contract will then query the Razor smart contract to see the result, and then settle the bet accordingly\.
