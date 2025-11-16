---
title: Initiate Withdraw
---

Before withdrawing, user needs to initiate withdraw to lock the RAZOR amount that needs to be withdraw.

## Using Razorscan (Recommended for beginners) {#initiate-withdraw-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/initiate-withdraw/Initiate_Withdraw_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Europa Defi Hub". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

![Screenshot](/img/initiate-withdraw/Initiate_Withdraw_step2.png)

### Step 3 {#step-3}

Find the staker address in the Stakers table, click on Actions and now if the connected address has an unstake lock active, Initiate Withdraw will be allowed. It will also have a tooltip which specifies the epochs that it is to be called within.
**Note**: _This can also be done from the particular staker or delegator page._

![Screenshot](/img/initiate-withdraw/Initiate_Withdraw_step3.png)

### Step 4 {#step-4}

A modal will show, with the corresponding Unstake Lock details. Use the state bar to make sure the current state is not `Propose` or `Dispute` and click the “Initiate” button and confirm the transaction.
**Note**: _Refer to the state bar to get the current state and an ETA for the next state._

![Screenshot](/img/initiate-withdraw/Initiate_Withdraw_step4.png)

### Step 5 {#step-5}

Once the transaction is successful, [Withdraw](./withdraw.md) will need to be called after `T + withdrawLockPeriod` epoch. Consider `T` as epoch in which initiate withdraw was called.

![Screenshot](/img/initiate-withdraw/Initiate_Withdraw_step5.png)

**Note**: _To get the exact values of the lock periods check Governance [here](https://razorscan.io/governance/values)_.

## Using SKALE Block Explorer (Alternative method) {#initiate-withdraw-block-explorer}

This method allows you to initiate withdrawal directly by interacting with the StakeManager smart contract through the SKALE Block Explorer. This is recommended for advanced users who are comfortable with direct contract interaction.

### Prerequisites {#block-explorer-prerequisites-initiate}

Before initiating withdrawal via the block explorer, ensure you have:

1. **Metamask wallet** installed and configured
2. **Europa Defi Hub network** added to Metamask (see [network details](./razor-v2/mainnet.md))
3. **sFUEL tokens** for gas fees (get from [SKALE Portal](https://portal.skale.space/chains/europa) after connecting wallet)
4. **Completed unstaking** - You must have called [unstake](./unstake.md) previously
5. **Unstake lock expired** - The `unstakeLockPeriod` must have passed
6. **Within initiation window** - You must be within the `withdrawInitiationPeriod`
7. **Correct state** - Current state must NOT be Propose or Dispute (must be Commit state)

### Contract Addresses {#contract-addresses-initiate}

**Mainnet (Europa Defi Hub):**
- StakeManager: [`0xd492408e4901CF658c7874285984F6D5Db648D1E`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E)

**Testnet (Europa Defi Hub Testnet):**
- StakeManager: [`0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012)

### Step-by-Step Instructions {#block-explorer-steps-initiate}

#### Step 1: Verify Prerequisites {#verify-prerequisites}

Before calling initiate withdraw, verify:

**Check Unstake Lock Status:**
1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `locks` function
4. Enter your parameters:
   - **address**: Your wallet address
   - **tokenAddress**: The sRZR token address for your staker
   - **lockType**: `0` (for Unstake lock)
5. Click "Query" and check the result:
   - `amount`: Should be greater than 0
   - `unlockAfter`: Should be less than or equal to current epoch

**Check Current State:**
1. Find the `getState` function in the Read Contract tab
2. Enter `buffer` parameter (usually `5`)
3. Click "Query" - the result should be `0` (Commit state)
4. If it's `1` (Propose) or `2` (Dispute), wait a few minutes and try again

**Important**: Do NOT call initiate withdraw during Propose or Dispute states, as it will fail.

#### Step 2: Find Your Staker ID {#find-staker-id-initiate}

You need the Staker ID for your staker:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `getStakerId` function
4. Enter your wallet address
5. Click "Query" - the result is your Staker ID

Alternatively, you can find your Staker ID on [Razorscan](https://razorscan.io/staking).

#### Step 3: Navigate to StakeManager Contract {#navigate-stakemanager-initiate}

1. Visit the **StakeManager contract** on the block explorer:
   - **Mainnet**: https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E
   - **Testnet**: https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012

2. Click "Connect Wallet" and approve the Metamask connection
3. Verify your wallet is connected and you're on the correct network (Europa Defi Hub)

#### Step 4: Execute Initiate Withdraw Function {#execute-initiate-withdraw}

1. Navigate to the **"Write Contract"** tab
2. Scroll down and find the **`initiateWithdraw`** function
3. Fill in the parameters:
   - **stakerId (uint32)**: Enter your Staker ID from Step 2 (e.g., `42`)

4. Click "Write" to submit the transaction
5. Review the transaction details in the Metamask popup
6. Click "Confirm" in Metamask

**Important Notes:**
- This function only requires the Staker ID parameter
- It will burn your locked sRZR tokens and lock equivalent RAZOR tokens
- The RAZOR tokens will be locked for `withdrawLockPeriod` (currently 300 epochs)
- Must be called during Commit state (not Propose or Dispute)

#### Step 5: Verify Transaction {#verify-transaction-initiate}

1. After confirming in Metamask, wait for the transaction to be processed
2. Once confirmed, you'll see a success message in the block explorer
3. Click on the transaction hash to view transaction details
4. You can verify your initiate withdraw by:
   - Checking the transaction logs for a `WithdrawInitiated` event
   - Visiting your wallet on [Razorscan](https://razorscan.io/) to see your withdraw lock status
   - Querying the `locks` function with `lockType: 1` (Withdraw lock) to see your new lock

#### Step 6: Next Steps {#next-steps-initiate}

After successfully initiating withdrawal:

1. **Wait for withdrawLockPeriod** (currently 300 epochs) to pass
2. **Call [Withdraw](./withdraw.md)** to claim your RAZOR tokens
3. Track your lock status on [Razorscan](https://razorscan.io/)

### Common Issues and Troubleshooting {#troubleshooting-initiate}

**Transaction fails with "Unstake: NA Propose"**
- Current state is Propose
- Wait a few minutes for the state to change to Commit
- Check the current state using the method in Step 1

**Transaction fails with "Unstake: NA Dispute"**
- Current state is Dispute
- Wait a few minutes for the state to change to Commit
- Check the current state using the method in Step 1

**Transaction fails with "Did not unstake"**
- You don't have an active unstake lock
- You must call [unstake](./unstake.md) first

**Transaction fails with "Withdraw epoch not reached"**
- The unstake lock period hasn't expired yet
- Wait until the `unlockAfter` epoch has passed
- Check your lock status using the method in Step 1

**Transaction fails with "Initiation Period Passed"**
- You missed the withdrawal initiation window
- The unstake lock has expired beyond the `withdrawInitiationPeriod`
- You must call [Reset Lock](./reset-lock.md) (which incurs a penalty)

**Transaction fails with "Withdraw lock present"**
- You already have an active withdraw lock
- Complete the [Withdraw](./withdraw.md) process first

**Transaction fails with "staker doesnt exist"**
- Invalid Staker ID
- Double-check your Staker ID is correct

**Transaction fails with "No razor to withdraw"**
- The calculated RAZOR amount is 0
- This shouldn't happen if you followed the unstake process correctly

### Understanding the Withdrawal Process {#understanding-withdrawal}

The complete withdrawal process has 3 steps:

1. **[Unstake](./unstake.md)**: Lock sRZR tokens for `unstakeLockPeriod` (300 epochs)
2. **Initiate Withdraw** (this step): Burn sRZR and lock RAZOR for `withdrawLockPeriod` (300 epochs)
3. **[Withdraw](./withdraw.md)**: Claim locked RAZOR tokens

**Important Timing:**
- After unstaking at epoch `T`, you can initiate withdraw after epoch `T + 300`
- You must initiate withdraw before epoch `T + 450` (300 + 150 window)
- If you miss this window, you must call [Reset Lock](./reset-lock.md) with a penalty
- After initiating withdraw at epoch `T2`, you can withdraw after epoch `T2 + 300`

### State Requirements {#state-requirements}

**Why can't I call during Propose or Dispute?**
- During Propose and Dispute states, validators are actively participating in the consensus process
- Inactivity penalties are calculated during these states
- The initiate withdraw function calls `giveInactivityPenalties` which requires the state to be Commit
- This ensures all pending penalties are applied before withdrawal

**How to check current state:**
- Use Razorscan's state indicator on the homepage
- Query `getState` function on the StakeManager contract
- States cycle through: Commit → Propose → Dispute → Commit (approximately every few minutes)

### Lock Periods {#lock-periods-initiate}

Current network parameters (verify on [Razorscan Governance](https://razorscan.io/governance/values)):
- **unstakeLockPeriod**: 300 epochs (time after unstake before you can initiate withdraw)
- **withdrawInitiationPeriod**: 150 epochs (window to call initiate withdraw)
- **withdrawLockPeriod**: 300 epochs (time after initiate withdraw before you can withdraw)

### Related Operations {#related-operations-initiate}

**Before this operation:**
- [Unstake](./unstake.md) - Must be completed first

**After this operation:**
- Wait for withdrawLockPeriod to pass
- [Withdraw](./withdraw.md) - Claim your RAZOR tokens

**If you miss the window:**
- [Reset Lock](./reset-lock.md) - Extend the unstake lock (incurs penalty)
