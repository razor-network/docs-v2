---
title: Reset Lock
---

### Reset lock needs to be done in following scenarios:

1. Consider user had unstaked in `T` epoch. After unstake, user sRAZOR tokens are locked in Stake Manager contract.
2. User needs to Initiate withdraw after epoch `T + 1` and before `T + 6`.
3. But user didn't the initiated withdraw in `T + 1` and `T + 6` window, then user needs to reset unstake lock.

   _Note_ : _Penalty will be charged to user while reseting unstake lock_.

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note** : _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to “Skale Testnet”. Next, visit [https://razorscan.io/staking](https://razorscan.io/staking) or click on “Participants” from the sidebar on the left and you should see the screen below:

![Screenshot](/img/2.png)

### Step 3 {#step-3}

Click on your connected wallet address to get information on your actions. In delegated section, you would find the list of stakers that you have delegated. Clicking on the "Action" will show you list of action that can be performed for particular staker.

**Note** - _Same action can be performed from staking page by clicking on staker action._

![Screenshot](/img/7.png)

### Step 4 {#step-4}

Click on Reset Lock in staker action dropdown.
**Note** - _The option for "Reset lock" in action dropdown will be only enabled if it's required._

![Screenshot](/img/18.png)
