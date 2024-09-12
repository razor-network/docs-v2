---
title: Reset Lock
---

### Reset lock needs to be done in following scenarios:

1. Consider user had unstaked in epoch `T`. After unstaking, users sRAZOR tokens are locked in the Stake Manager contract.
2. User needs to `Initiate Withdraw` after epoch `T + 1` and before `T + 151`, this is known as the `withdrawInitiationPeriod`.
3. If the user does not call initiate withdraw within this period (`T + 1` and `T + 151` window), then the user needs to reset unstake lock.

   **Note**: _Penalty will be charged to the user while reseting unstake lock, this penalty is proportional to the users funds being unstaked_.

### Step 1 {#step-1}

Visit <https://v1.razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/withdraw/Withdraw_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Razor Schain". Next, visit https://v1.razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

![Screenshot](/img/withdraw/Withdraw_step2.png)

### Step 3 {#step-3}

Click on your connected wallet address to get information on your actions. In delegated section, you would find the list of stakers that you have delegated to. Clicking on the "Action" will show you list of actions that can be performed for that particular staker.

**Note**: _Same action can be performed from staking page by clicking on staker action._

![Screenshot](/img/withdraw/Withdraw_step3.png)

### Step 4 {#step-4}

Click on Reset Lock in staker action dropdown and confirm the transaction. Now the unstake lock is reset, meaning the user will need to call `Initiate Withdraw` within the new withdrawInitiationPeriod set.
**Note**: _The option for "Reset lock" in action dropdown will be only enabled if it's required._

![Screenshot](/img/18.png)
