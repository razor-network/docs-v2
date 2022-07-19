# Penalties and Rewards

Razor network was carefully designed to ensure that all honest stakers get rewarded and all malicious nodes get penalised. In order to prevent 51% takeover attack, the stakers with 51% of influence are disincentivized heavily from going rogue.

## Influence, Reputation And Maturity {#influence-reputation-and-maturity}

Razor network measures the reputation of every staker based on different factors like Stake. Whenever any staker performs the stake action, its reputation increases and vice versa.

        Reputation = Minimum(Log(m+s),Rc);

        Here, m is the maturity and s is the smoothing factor(to prevent high rate of growth) And Rc is the upper limit of Reputation.

With Reputation and staker's stake, Influence of the Staker is calculated.

        Influence = Reputation * Stake

## Penalties {#penalties}

### Penalty for Wrong Block Proposed {#penalty-for-wrong-block-proposed}

If a Staker tries to propose an invalid block, then any staker can dispute that block by calculating the correct values. We assume that each staker uses the same client and data without any modifications. Hence if there is any malicious activity done, staker's stake will be slashed. In case of slashing of the staker's stake, stake will be consumed based on governance params `SlashNums`. SlashNums has 3 component:

1. `bounty` - percentage of staker's stage rewarded as bounty to disputer (Default: 5%)
2. `burn` - percentage of RAZOR burnt from staker's stake (Default: 95%)
3. `keep` - percentage of staker's stake to be kept with staker (Default: 0%)

All governance parameters and it's current value can be found on [Razorscan](https://razorscan.io/governance/values).

### Inactivity Penalty {#inactivity-penalty}

If any staker, does not vote in epoch/s, then the staker will be penalised through the inactivity penalty mechanism. Inactivity penalty reduces stake and influence of the staker in the network. Stake penalty is directly proportional to staker's stake, inactive epochs and `penaltyNotRevealNum`. Similarly influence(age) penalty is directly proportional to staker influence(age), inactive epochs and `penaltyAgeNotRevealNum`, where `penaltyNotRevealNum` and `penaltyAgeNotRevealNum` are governance parameters.

### Unstake Penalty {#unstake-penalty}

If the staker or delegator is not able to unstake and withdraw the funds in the window defined by the protocol then the delegator/staker will be penalised while resetting unstake lock. By default staker/delegator once they Unstake their funds, Initiate Withdraw needs to be called in the epoch window defined by the protocol, currently it is 5 epochs. Epoch window depends on `unstakeLockPeriod` and `withdrawInitiationPeriod` which are governance parameters, if the staker/delegator is not able to initiate withdraw in this epoch window, Reset Lock needs to be called to unlock the funds again during which **Unstake Penalty** will be applied to the locked funds. **Unstake Penalty** depends on `resetUnstakeLockPenalty` which is again a governance parameter. Once initiate withdraw is successfull, the staker/delegator can call Withdraw after `withdrawLockPeriod` (governance parameter) epoch. There are possible penalties only associated with the Initiate Withdraw phase, after that Withdraw can be called without facing any penalties. 

Let's consider an example to understand how Unstake Penalty works?

Suppose a delegator/staker unstakes 100,000 sRZR from staker at `x` epoch. If the `unstakeLockPeriod` is `1` (default) and `withdrawInitiationPeriod` is `5` (default), then delegator/staker will need to call Initiate Withdraw in between `x + 1` and `x + 5` epochs. If they have unstake funds in 1st epoch, then initiate withdraw can be called in between 2nd and 6th epoch inclusive. If they fail to call Initiate Withdraw in this window, then Unstake penalty will be given out during Reset Lock, which will need to be called to unlock the funds and the Unstake process will start over. Unstake penalty depends on `resetUnstakeLockPenalty` which is `1%` by default, that indicates that `1%` of the locked amount will be deducted as Unstake penalty. Once Initiate Withdraw is successful, withdraw can be called based on `withdrawLockPeriod` which is `1` by default, which means if they Initiate Withdraw in `n`th epoch, then withdraw can be called anytime after `n + 1` epoch.

## Rewards {#rewards}

For every participation in each epoch, staker will be incentivized with an increase in influence on the network. It is also known as Voting Rewards

If there is a malicious block being created, the disputer will get some percentage of the slashed stake of the staker as a bounty reward.

### Block Reward {#block-reward}

A block Reward will be awarded to stakers if all the given conditions are met.

1. Staker proposes a valid block in Propose state
2. Staker has highest priority for becoming the block producer for that epoch.
3. No one has proven block as malicious block.
4. Staker confirms the block and submits to client.

The block Reward will be given in the 5th State , Confirm State.
