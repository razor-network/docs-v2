# Governance

Governance aims to enable the oracle network to do subjective decision-making based on acceptions and rejections of the proposals. The proposals will be mostly around

1. Acceptance or Rejection of Data sources collections.
2. Change in the parameters of the Validation layer.

It is quite important to add or remove the data sources to prevent any misinformation and DoS attacks.

The Razor Network governance portal can be accessed [here](https://vote.razor.network/). You need to hold $RAZOR tokens on Ethereum/Polygon Mainnet or $sRZR (staked $RAZOR tokens) on Razor SKALE Chain to be able to vote.

> **Note**: _As a delegator on the Razor Network, you are responsible for casting your governance votes. Currently, stakers to whom you've delegated cannot vote on your behalf._

## Add datasource through proposal

1. Please begin by visiting the [datasources](https://github.com/razor-network/datasources) repository on GitHub. Once there, proceed to fork the repository to your own GitHub account.

2. Next, make the necessary changes to the forked repository, incorporating the required information based on the [contributing.md](https://github.com/razor-network/datasources/blob/master/CONTRIBUTING.md) guidelines and project requirements. Once you have completed the changes, it's time to create a pull request (PR) to the 'master' branch of the original repository.

3. After submitting the PR, the proposed changes will be open for community discussion and review on [Github discussion](https://github.com/razor-network/governance/discussions). Community members can provide feedback and votes on the proposal. The final decision will be made through a voting process on [snapshot](https://vote.razor.network/).

4. The proposal on Snapshot will have a designated deadline by which the required number of votes must be obtained. If the proposal receives the necessary votes within the set deadline, new datasource will be added to the contract and the PR will be merged into the main repository.

5. However, if the required votes are not achieved within the specified deadline, the PR will be closed, and the proposed changes will not be incorporated.

All the available datasources can be found [here](https://razorscan.io/governance/datafeeds)

## Update governance parameters through proposal

> **Note**: _Currently, only the parameters associated with inactivity penalties, specifically `Penalty Not Reveal Num` and `Penalty Age Not Reveal Num`, are eligible for updates through a proposal._

1. Start by visiting the [parameters](https://github.com/razor-network/parameters) repository. From there, fork the repository to your own GitHub account.

2. Navigate to the `mainnet/parameters.json` file in your forked repo. Update the necessary parameters according to the guidelines provided in [contributing.md](https://github.com/razor-network/parameters/blob/main/CONTRIBUTING.md). Once you've made the changes, initiate a pull request (PR) to the main branch of the original repository.

3. Upon creating the PR, the suggested changes to the parameters will be available for open discussion and review in the [GitHub discussion](https://github.com/razor-network/parameters/discussions). Community members can provide feedback and votes on the proposal. The final decision to update the governance parameters will be determined through a voting process on [snapshot](https://vote.razor.network/).

4. If your proposal secures the necessary votes within the allocated deadline, parameters changed will be incorporated, and your PR will be merged into the main branch. On the other hand if the proposal fails to gather the required votes within the deadline, the PR will be closed without merging, and the parameters will remain unchanged.

## Governance Parameters {#governance-parameters}

These are the governance parameters that govern our protocol. A thorough understanding of these parameters is essential when proposing any changes. _Updated governance parameters can be checked [here](https://razorscan.io/governance/values)._

- [Withdraw Lock Period](#withdraw-lock-period)
- [Max Alt Blocks](#max-alt-blocks)
- [Max Commission](#max-commission)
- [Penalty Not Reveal Num](#penalty-not-reveal-num)
- [Penalty Age Not Reveal Num](#penalty-age-not-reveal-num)
- [Grace Period](#grace-period)
- [Max Age](#max-age)
- [Min Stake](#min-stake)
- [Block Reward](#block-reward)
- [Escape Hatch Enabled](#escape-hatch-enabled)
- [Max Tolerance](#max-tolerance)
- [Epoch Limit For Update Commission](#epoch-limit-for-update-commission)
- [Delta Commission](#delta-commission)
- [Unstake Lock Period](#unstake-lock-period)
- [Withdraw Initiation Period](#withdraw-initiation-period)
- [Reset Unstake Lock Penalty](#reset-unstake-lock-penalty)
- [Min Safe Razor](#min-safe-razor)
- [To Assign](#to-assign)
- [Buffer](#buffer)
- [SlashNums](#slashnums)

### Withdraw Lock Period

The Withdraw Lock Period is the number of epochs for which the RAZORs are locked after initiating a withdraw request.

### Max Alt Blocks

Max Alt Blocks refers to the maximum number of best-proposed blocks that will be considered for dispute resolution.

### Max Commission

Max Commission represents the maximum commission that stakers can charge from delegators on the profits generated.

### Penalty Not Reveal Num

The Penalty Not Reveal Num denotes the percentage of the stake that will be penalized for inactivity. This penalty is applied for each epoch of inactivity.

The penalty rate, represented by `penaltyNotRevealNum`, is calculated based on a predefined `BASE_DENOMINATOR` which is set to 10,000,000. The formula to determine the penalty percentage is:

`Percentage = (penaltyNotRevealNum / BASE_DENOMINATOR) * 100`

**Example**:

If `penaltyNotRevealNum` is set to 100, the penalty rate can be calculated as:

`Percentage = (100 / 10,000,000) * 100`

This results in a penalty rate of 0.001%. Thus, a `penaltyNotRevealNum` value of 100 corresponds to a penalty rate of 0.001%.

### Penalty Age Not Reveal Num

The Penalty Age Not Reveal Num denotes the percentage of the staker's age that will be penalized for inactivity. This penalty is applied for each epoch of inactivity.

The penalty age rate, represented by `penaltyAgeNotRevealNum`, is calculated based on a predefined `BASE_DENOMINATOR` which is set to 10,000,000. The formula to determine the penalty percentage is:

`Percentage = (penaltyAgeNotRevealNum / BASE_DENOMINATOR) * 100`

**Example**:

If `penaltyAgeNotRevealNum` is set to 100000, the penalty rate can be calculated as:

`Percentage = (100000 / 10,000,000) * 100`

This results in a penalty age rate of 1%. Thus, a `penaltyAgeNotRevealNum` value of 100000 corresponds to a penalty rate of 1%.

### Grace Period

The Grace Period is the number of epochs for which a staker won't be subjected to inactivity penalties. If a staker remains inactive for more epochs than the specified grace period, they may face penalties.

### Max Age

Max Age sets the maximum age that a staker can have.

### Min Stake

Min Stake defines the minimum amount of RAZOR tokens are required for an individual or entity to participate in network. It serves as a threshold for entry into the network.

### Block Reward

Block Reward is the reward given to a staker whose proposed block is confirmed.

### Escape Hatch Enabled

Escape Hatch Enabled refers to a feature where the default admin role has the ability to remove all the funds in case of an emergency or critical situation.

### Max Tolerance

Max Tolerance specifies the maximum percentage deviation allowed from medians for all collections.

### Epoch Limit For Update Commission

The Epoch Limit For Update Commission is the number of epochs for which a staker cannot change their commission rate once it has been set or changed. It imposes a time restriction on commission rate adjustments.

### Delta Commission

Delta Commission represents the maximum allowable change in commission that a staker can make. It sets a limit on how much a staker can increase or decrease their commission rate in a single adjustment.

### Unstake Lock Period

Unstake Lock Period is the number of epochs for which the sRZRs are locked after initiating an unstake request. During this period, the locked tokens cannot be unstaked or withdrawn.

### Withdraw Initiation Period

The Withdraw Initiation Period specifies the number of epochs during which a staker or delegator needs to initiate a withdraw request. After this period, they may face penalties if they have not initiated the withdrawal.

### Reset Unstake Lock Penalty

Reset Unstake Lock Penalty represents the percentage stake penalty applied to the locked amount when extending the unstake lock period in case the Withdraw Initiation Period was missed.

### Min Safe Razor

Min Safe Razor sets the minimum amount of stake or tokens required for an individual to become a staker in the network.

### To Assign

To Assign determines the maximum number of collections that can be assigned to a staker.

### Buffer

Buffer is the time delay between state changes, measured in seconds.

### SlashNums

SlashNums is a parameter that encompasses three distinct entities:

- **SlashNums.bounty:** Specifies the percentage of a bounty from a staker's stake that will be received by a bounty hunter.

- **SlashNums.burn:** Represents the percentage of a staker's stake that is burned as a penalty.

- **SlashNums.keep:** Indicates the percentage of a staker's stake that is retained by the staker themselves as a penalty for certain actions or violations. This parameter determines how much of the penalized stake is kept by the staker.
