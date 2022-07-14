# Penalties and Rewards

Razor network has carefully designed ensuring that all the honest stakers get rewarded and malicous nodes get penalised. In order to prevent 51% takeover attack, the stakers with 51% of infulence are deincetivised heavily.

## Influence, Reputation And Maturity {#influence-reputation-and-maturity}

Razor network measures the reputation of every staker based on different factors like Stake. Whenver any staker performs stake action, it gets its reputation increased and vice versa.

        Reputation = Minimum(Log(m+s),Rc);

        Here, m is the maturity and s is the smoothing factor(to prevent high rate of growth) And Rc is the upper limit of Reputation.

With Reputation and staker's stake, Infulence of Staker is calculated.

        Influence = Reputation * Stake

## Penalties {#penalties}

### Penalty for Wrong Block Proposed {#penalty-for-wrong-block-proposed}

If staker tries to propose an invalid block, then any staker can dispute on that by calculating the correct values. We assume that each staker uses the same client and data without any modifications. hence if there is any malicious activity done, staker's stake will be slashed. In case of slashed staker's stake will be used based on governance params `SlashNums`. SlashNums has 3 component:

1. `bounty` - percentage of staker's stage rewarded as bounty to disputer (Default: 5%)
2. `burn` - percentage of RAZOR burnt from staker's stake (Default: 95%)
3. `keep` - percentage of staker's stake to be kept with staker (Default: 0%)

All governance parameters and it's current value can be found on [Razorscan](https://razorscan.io/governance/values)

### Voting Penalites {#voting-penalites}

If any staker, does not participate in epoch and do not provide the commit, then she will get its influence reduced by 1%. And if she commits and do not reveal then there will be signigicant amount of penality on influence.

### Inactivity Penalty {#inactivity-penalty}

If any staker, does not vote in epoch/s, then staker will be penalised through inactivity penalty mechanism. Inactivity penalty reduces stake and influence of the staker in the network. Stake penalty is directly proportional to staker's stake, inactive epochs and `penaltyNotRevealNum`. Similarly influence(age) penalty is directly proportional to staker influence(age), inactive epochs and `penaltyAgeNotRevealNum`, where `penaltyNotRevealNum` and `penaltyAgeNotRevealNum` are governance parameters.

### Unstake Penalty {#unstake-penalty}

If the staker or delegator is not able to unstake and withdraw the funds in the window predefined by the protocol then delegator/staker will be penalised while resetting unstake lock. By default staker/delegator once they unstake their funds, initiate withdraw needs to be called in the epoch window as per protocol. Epoch window depends on `unstakeLockPeriod` and `withdrawInitiationPeriod` which is governance parameters, if the staker/delegator is not able to initiate withdraw in this epoch window, Reset Lock needs to be called to unlock the funds again during which **Unstake Penalty** will be given out. **Unstake Penalty** depends on `resetUnstakeLockPenalty` which is again a governance parameters. Once initiate withdraw is successfull, staker/delegator can call Withdraw after `withdrawLockPeriod` (governance parameter) epoch.

Let's consider an example to understand how Unstake Penalty works?
Suppose a delegator/staker unstake 100,000 sRZR from staker at `x` epoch. If the `unstakeLockPeriod` is `1` (default) and `withdrawInitiationPeriod` is `5` (default), then delegator/staker can call initiate withdraw in between `x + 1` and `x + 5` epochs. If they have unstake funds in 1st epoch, then initiate withdraw can be called in between 2nd and 6th epoch inclusive. If they fails to call Initiate Withdraw in this window, then Unstake penalty will be given out during Reset Lock and needs to follow the cycle again. Unstake penalty depends on `resetUnstakeLockPenalty` which is `1%` by default, that indicates that `1%` of the locked amount will be deducted as Unstake penalty. Once Initiate Withdraw is successful, withdraw can be called based on `withdrawLockPeriod` which is `1` by default, which means if they Initiate Withdraw in `n`th epoch, then withdraw can be called anytime after `n + 1` epoch.

## Rewards {#rewards}

For every participation in each epoch, staker will be incentivized with an increase in influence on the network. It is also known as Voting Rewards

If there is malicious block being created, the disputer will get some percentage of the slashed stake of the staker as a reward.

### Block Reward {#block-reward}

A block Reward will be awarded to stakers if all the given conditions satisfy.

1. Staker proposes a valid block in Propose state
2. Staker has highest priority for becoming the block producer for epoch.
3. No one has proven block as malicious block.
4. Staker confirms the block and submits to client.

The block Reward will be given in the 5th State , Confirm State.
