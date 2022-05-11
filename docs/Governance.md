# Governance

Governance aims to enable the oracle network to do subjective decision making based on acceptions and rejections of the proposals. The proposals will be mostly around

1. Acception or Rejection of Data soruces collections.
2. Change in the parameters of the Validation layer.

It is quite important to whitelist of backlist the data sources to prevent any misinformation and DOS attacks.

**Note** - _Updated governance parameters can be checked [here](https://razorscan.io/governance/values)._

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
