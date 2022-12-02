---
title: Unstake
---

During unstake, user sRAZOR token gets locked in contract. User can initiate withdraw for locked tokens in the next epoch.

## In Short: {#in-short}

Unstaking and withdrawing funds from Razor Network is a 3 step process.

1.  **Unstake**:
    After unstaking, the users sRAZOR tokens are locked in the Stake Manager contract for `unstakeLockPeriod` which is currently 300 epochs. There is a time period set in which the user must call Initiate Withdraw and proceed to the next phase of the lock. Currently, the `withdrawInitiationPeriod` set is 150 epochs (Check Governance Parameters [here](https://razorscan.io/governance/values)). If user Unstaked in epoch `T` the user must call Initiate Withdraw after epoch `T + 300` and before `T + 450` epoch.
    _Note_ : _Failing to call Initiate Withdraw within the specified epochs will result in a penalty via <ins>Reset Lock</ins>_.

2.  **Initiate Withdraw**:
    This call is _**not**_ allowed in _Propose_ and _Dispute_ States. If the current state is Propose or Dispute, wait for a few minutes before making the call. The initiate withdraw call will only succeed if the User has locked RAZOR and if the current epoch is within the `withdrawInitiationPeriod`. The users sRAZOR are burnt for RAZOR tokens, and locked for `withdrawLockPeriod` which is currently 300 epoch.
3.  **Withdraw**:
    Lastly, withdraw can be called anytime after the `withdrawLockPeriod` epochs has passed.

**Note**: _You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/unstake/unstake_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Razor Schain". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

**Note**: _This can also be done from the particular staker or delegator page._
![Screenshot](/img/unstake/unstake_step2.png)

<!-- ### Step 3 {#step-3}

Navigate to your address by clicking on it on the top right corner of the screen. Click on the `Unstake` action from the Actions dropdown on the Delegated Table.
_Note: This can also be done on [https://razorscan.io/staking](https://razorscan.io/staking) or the particular stakers page._

![Screenshot](/img/9.png) -->

### Step 3 {#step-3}

Navigate to staker address and Click on the Unstake action from the Actions dropdown on the stakers list table.

**Note**: _Users can add the stakers sRAZOR address using the `+` icon near the stakers address._

![Screenshot](/img/unstake/unstake_step3.png)

### Step 4 {#step-4}

Once both transactions are successful, [Initiate Withdraw](/docs/initiate-withdraw) will need to be called after the `unstakeLockPeriod` and within the `withdrawInitiationPeriod`.

![Screenshot](/img/unstake/unstake_step4.png)

**Note**: _To get the exact values of the lock periods check Governance [here](https://razorscan.io/governance/values)_.
