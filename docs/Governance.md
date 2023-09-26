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

1. Start by visiting the [parameters](https://github.com/razor-network/parameters) repository. From there, fork the repository to your own GitHub account.

2. Navigate to the `mainnet/parameters.json` file in your forked repo. Update the necessary parameters according to the guidelines provided in [contributing.md](https://github.com/razor-network/parameters/blob/main/CONTRIBUTING.md). Once you've made the changes, initiate a pull request (PR) to the main branch of the original repository.

3. Upon creating the PR, the suggested changes to the parameters will be available for open discussion and review in the [GitHub discussion](https://github.com/razor-network/parameters/discussions). Community members can provide feedback and votes on the proposal. The final decision to update the governance parameters will be determined through a voting process on [snapshot](https://vote.razor.network/).

4. If your proposal secures the necessary votes within the allocated deadline, parameters changed will be incorporated, and your PR will be merged into the main branch. On the other hand if the proposal fails to gather the required votes within the deadline, the PR will be closed without merging, and the parameters will remain unchanged.

## Governance Parameters {#governance-parameters}

| Parameter                         | Description                                                                                                                                 | Default value     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Withdraw Lock Period              | The number of epochs for which the RAZORs are locked after initiating withdraw                                                              | 1                 |
| Max Alt Blocks                    | Maximum number of best proposed blocks to be considered for dispute                                                                         | 5                 |
| Max Commission                    | Maximum commission stakers can charge from delegators on their profits                                                                      | 20                |
| Penalty Not Reveal Num            | Percentage stake penalty to be given out for inactivity                                                                                     | 1000              |
| Grace Period                      | The number of epochs for which the staker wont be given inactivity penalties. Stakers inactive for more than grace period will be penalized | 8                 |
| Max Age                           | Maximum age a staker can have                                                                                                               | 100\*10000        |
| Min Stake                         | Minimum amount of stake required to participate                                                                                             | 20000\*(10\*\*18) |
| Block Reward                      | Reward given to staker whose block is confirmed                                                                                             | 100\*(10\*\*18)   |
| Escape Hatch Enabled              | The default admin role can remove all the funds incase of emergency                                                                         | true              |
| MaxTolerance                      | Maximum percentage deviation allowed from medians for all collections                                                                       | 1_000_000         |
| Epoch Limit For Update Commission | The number of epochs for which a staker cant change commission once set/change                                                              | 100               |
| Delta Commission                  | Maximum commission change a staker can do                                                                                                   | 20                |
| Unstake Lock Period               | The number of epochs for which the sRZRs are locked for calling `unstake`                                                                   | 1                 |
| Withdraw Initiation Period        | The number of epochs where staker/delegator needs to initiate withdraw                                                                      | 5                 |
| Reset Unstake Lock Penalty        | Percentage stake penalty from the locked amount for extending unstake lock incase withdrawInitiationPeriod was missed                       | 1                 |
| Min Safe Razor                    | Minimum amount of stake required to become a staker                                                                                         | 10000\*(10\*\*18) |
| To Assign                         | Maximum number of collections that can be assigned to the staker                                                                            | 5                 |
| Buffer                            | Delay between states                                                                                                                        | 5                 |
| SlashNums.bounty                  | Percent bounty from staker's stake to be received by the bounty hunter                                                                      | 500_000           |
| SlashNums.burn                    | Percent RAZOR burn from staker's stake                                                                                                      | 9_500_000         |
| SlashNums.keep                    | Percent from staker's stake to be kept by staker                                                                                            | 0                 |

**Note** - _Updated governance parameters can be checked [here](https://razorscan.io/governance/values)._

<!-- 1. Withdraw Lock Period

After unstake the funds will be locked for some time. Stakers can withdraw funds after withdraw lock period is compeleted.

2. Max Alt Blocks

The maximum number of blocks that can be added to Block Proposed List.

3. Max Tolerance

The noise in the Price that should be considered to avoid any penalties on staker, if there is difference btween the values proposed.

4. Withdraw Release Period

The tokens should be withdrawn withing specific epochs. If withdraw release period completes, stakers need to extend locks.

5. extand Lock Penalty

If by any chance staker misses the withdraw release period they can extend the withdraw lock by providing some penalty.

6. Slash Numerators

Staker's stake will be slashed if it performs any malicious activity on the network. It includes Bounty Hunter's Reward, and Burn Amount.

7. Grace Period

The period for which staker wont be charged any Penality if it does not participate in the network.

8. Minimum Stake

The Amount of Stake that any participant needs to Stake to become Staker on Razor network.

9. Max Commission

The amount of Commission staker can charge from Delegators.

10. Penalty Not Reveal Numerator

The penalty the staker needs to be charged if it does not reveal in specific epoch.

11. Base Denominator

This helps to decide the percentage calculation.

12. Escape Hatch

this decides, whether the admin should be allowed to unstake the funds from StakeManager contract in extreme cases. -->
