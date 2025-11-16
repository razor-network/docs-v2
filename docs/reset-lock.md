---
title: Reset Lock
---

### Reset lock needs to be done in following scenarios:

1. Consider user had unstaked in epoch `T`. After unstaking, users sRAZOR tokens are locked in the Stake Manager contract.
2. User needs to `Initiate Withdraw` after epoch `T + 1` and before `T + 151`, this is known as the `withdrawInitiationPeriod`.
3. If the user does not call initiate withdraw within this period (`T + 1` and `T + 151` window), then the user needs to reset unstake lock.

   **Note**: _Penalty will be charged to the user while reseting unstake lock, this penalty is proportional to the users funds being unstaked_.

## Using Razorscan (Recommended for beginners) {#reset-lock-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/withdraw/Withdraw_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Europa Defi Hub". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

![Screenshot](/img/withdraw/Withdraw_step2.png)

### Step 3 {#step-3}

Click on your connected wallet address to get information on your actions. In delegated section, you would find the list of stakers that you have delegated to. Clicking on the "Action" will show you list of actions that can be performed for that particular staker.

**Note**: _Same action can be performed from staking page by clicking on staker action._

![Screenshot](/img/withdraw/Withdraw_step3.png)

### Step 4 {#step-4}

Click on Reset Lock in staker action dropdown and confirm the transaction. Now the unstake lock is reset, meaning the user will need to call `Initiate Withdraw` within the new withdrawInitiationPeriod set.
**Note**: _The option for "Reset lock" in action dropdown will be only enabled if it's required._

![Screenshot](/img/18.png)

## Using SKALE Block Explorer (Alternative method) {#reset-lock-block-explorer}

This method allows you to reset your unstake lock directly by interacting with the StakeManager smart contract through the SKALE Block Explorer. This is required when you miss the withdrawal initiation window after unstaking.

**Warning**: This operation incurs a penalty proportional to your unstaked funds. Only use this if you missed the `withdrawInitiationPeriod` window.

### Prerequisites {#block-explorer-prerequisites-reset}

Before resetting your lock via the block explorer, ensure you have:

1. **Metamask wallet** installed and configured
2. **Europa Defi Hub network** added to Metamask (see [network details](./razor-v2/mainnet.md))
3. **sFUEL tokens** for gas fees (get from [SKALE Portal](https://portal.skale.space/chains/europa) after connecting wallet)
4. **Completed unstaking** - You must have called [unstake](./unstake.md) previously
5. **Missed withdrawal window** - The `withdrawInitiationPeriod` has passed
6. **No existing withdraw lock** - You must not have an active withdraw lock

### Contract Addresses {#contract-addresses-reset}

**Mainnet (Europa Defi Hub):**
- StakeManager: [`0xd492408e4901CF658c7874285984F6D5Db648D1E`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E)

**Testnet (Europa Defi Hub Testnet):**
- StakeManager: [`0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012)

### Step-by-Step Instructions {#block-explorer-steps-reset}

#### Step 1: Verify You Need to Reset Lock {#verify-need-reset}

Before calling reset lock, verify you actually need it:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `locks` function
4. Enter your parameters:
   - **address**: Your wallet address
   - **tokenAddress**: The sRZR token address for your staker
   - **lockType**: `0` (for Unstake lock)
5. Click "Query" and check the result:
   - `amount`: Should be greater than 0
   - `unlockAfter`: If this is more than `withdrawInitiationPeriod` epochs in the past, you need to reset

**When to use Reset Lock:**
- You unstaked at epoch `T`
- Current epoch is greater than `T + 450` (unstakeLockPeriod + withdrawInitiationPeriod)
- You have not yet called initiate withdraw

#### Step 2: Understand the Penalty {#understand-penalty}

**Important**: Reset lock incurs a penalty!

- Penalty is calculated as: `penalty = (locked sRZR × resetUnstakeLockPenalty) / BASE_DENOMINATOR`
- The penalty amount is burned (permanently removed)
- Your remaining locked amount will be reduced by the penalty
- Check current `resetUnstakeLockPenalty` parameter on [Razorscan Governance](https://razorscan.io/governance/values)

**Example:**
- If you have 1000 sRZR locked and penalty is 1% (100/10000)
- Penalty = 1000 × 100 / 10000 = 10 sRZR
- Remaining locked = 990 sRZR

#### Step 3: Find Your Staker ID {#find-staker-id-reset}

You need the Staker ID for your staker:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `getStakerId` function
4. Enter your wallet address
5. Click "Query" - the result is your Staker ID

Alternatively, you can find your Staker ID on [Razorscan](https://razorscan.io/staking).

#### Step 4: Navigate to StakeManager Contract {#navigate-stakemanager-reset}

1. Visit the **StakeManager contract** on the block explorer:
   - **Mainnet**: https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E
   - **Testnet**: https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012

2. Click "Connect Wallet" and approve the Metamask connection
3. Verify your wallet is connected and you're on the correct network (Europa Defi Hub)

#### Step 5: Execute Reset Unstake Lock Function {#execute-reset-lock}

1. Navigate to the **"Write Contract"** tab
2. Scroll down and find the **`resetUnstakeLock`** function
3. Fill in the parameters:
   - **stakerId (uint32)**: Enter your Staker ID from Step 3 (e.g., `42`)

4. Click "Write" to submit the transaction
5. Review the transaction details in the Metamask popup
6. **Important**: Review the penalty that will be charged
7. Click "Confirm" in Metamask

**Important Notes:**
- This function only requires the Staker ID parameter
- A penalty will be automatically calculated and deducted
- The penalty amount (in sRZR) is burned
- Your unstake lock will be extended by `unstakeLockPeriod` (300 epochs) from the current epoch
- After reset, you can call [Initiate Withdraw](./initiate-withdraw.md) in the new window

#### Step 6: Verify Transaction {#verify-transaction-reset}

1. After confirming in Metamask, wait for the transaction to be processed
2. Once confirmed, you'll see a success message in the block explorer
3. Click on the transaction hash to view transaction details
4. You can verify your reset by:
   - Checking the transaction logs for a `ResetUnstakeLock` event
   - Querying the `locks` function to see your updated unstake lock with new `unlockAfter` epoch
   - Visiting your wallet on [Razorscan](https://razorscan.io/) to see your updated lock status

#### Step 7: Next Steps After Reset {#next-steps-reset}

After successfully resetting your lock:

1. **Wait for the new unstakeLockPeriod** (300 epochs from current epoch) to pass
2. **Call [Initiate Withdraw](./initiate-withdraw.md)** within the new `withdrawInitiationPeriod` window
3. **Don't miss the window again** - Set a reminder or calendar alert
4. Track your lock status on [Razorscan](https://razorscan.io/)

### Common Issues and Troubleshooting {#troubleshooting-reset}

**Transaction fails with "Unstake Lock doesnt exist"**
- You don't have an active unstake lock
- Verify you've called [unstake](./unstake.md) first
- Check your lock status using Step 1

**Transaction fails with "Withdraw Lock exists"**
- You have an active withdraw lock
- You cannot reset if you've already called initiate withdraw
- Complete the [Withdraw](./withdraw.md) process first

**Transaction fails with "staker doesnt exist"**
- Invalid Staker ID
- Double-check your Staker ID is correct

**Don't see resetUnstakeLock function in Write Contract tab**
- Scroll down further in the list
- Ensure you're on the correct StakeManager contract
- Try refreshing the page

**Penalty seems too high**
- The penalty is proportional to your locked amount
- Check the current `resetUnstakeLockPenalty` parameter on [Razorscan Governance](https://razorscan.io/governance/values)
- This is by design to discourage missing the withdrawal window

### Understanding the Reset Lock Mechanism {#understanding-reset-lock}

**Why does reset lock exist?**
- When you unstake, you have a limited window to initiate withdrawal
- If you miss this window, your lock expires but your funds remain locked
- Reset lock allows you to restart the process with a penalty

**Why is there a penalty?**
- To incentivize users to follow the withdrawal process correctly
- To compensate the network for the locked state of funds
- The penalty discourages repeated front-running attempts

**How to avoid needing reset lock:**
- Set calendar reminders for your withdrawal windows
- Use [Razorscan](https://razorscan.io/) to track your lock status
- Plan ahead and don't miss the `withdrawInitiationPeriod` window

### Timeline After Reset {#timeline-after-reset}

If you reset lock at epoch `T`:
1. **Epoch T**: Reset lock called, penalty deducted
2. **Epoch T+300**: Can call [Initiate Withdraw](./initiate-withdraw.md)
3. **Epoch T+450**: Must call initiate withdraw before this or need to reset again
4. **Epoch T2** (when initiate withdraw called): Initiate withdraw executed
5. **Epoch T2+300**: Can call [Withdraw](./withdraw.md)

### Lock Periods {#lock-periods-reset}

Current network parameters (verify on [Razorscan Governance](https://razorscan.io/governance/values)):
- **unstakeLockPeriod**: 300 epochs (new lock period after reset)
- **withdrawInitiationPeriod**: 150 epochs (window to call initiate withdraw)
- **resetUnstakeLockPenalty**: Check governance for current value (e.g., 100/10000 = 1%)

### Related Operations {#related-operations-reset}

**Before this operation:**
- [Unstake](./unstake.md) - Must have been completed and window missed

**After this operation:**
- Wait for new unstakeLockPeriod to pass
- [Initiate Withdraw](./initiate-withdraw.md) - Don't miss the window this time!
- [Withdraw](./withdraw.md) - Final step to claim RAZOR

**To avoid this operation:**
- Track your lock status carefully
- Set reminders for withdrawal windows
- Use Razorscan to monitor epochs and deadlines
