---
title: Withdraw
---

Withdraw is only allowed after `Initiate Withdraw` is called. Withdraw will transfer locked $RAZOR tokens to the user's address.

## Using Razorscan (Recommended for beginners) {#withdraw-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/withdraw/Withdraw_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Europa Defi Hub". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

![Screenshot](/img/withdraw/Withdraw_step2.png)

### Step 3 {#step-3}

Click on your connected wallet address to get information on your actions. Navigate to the Delegated section on your page. Clicking on the "Action" will show you a list of actions that are allowed in the current Epoch.

**Note**: _Same action can be performed from staking page by finding the staker address and clicking on Action._

![Screenshot](/img/withdraw/Withdraw_step3.png)

### Step 4 {#step-4}

Once you have Initiated withdraw and `withdrawAfterPeriod` has passed, you can withdraw your RAZOR tokens any time. This can be done by clicking on staker action and then Withdraw.

![Screenshot](/img/withdraw/Withdraw_step4.png)

### Step 5 {#step-5}

Clicking on Withdraw will open a modal to withdraw the locked RAZOR. You can confirm the details if you would like and then click on Withdraw on the modal. Confirm the transaction, and your $RAZOR will be sent to your address.

![Screenshot](/img/withdraw/Withdraw_step5.png)

## Using SKALE Block Explorer (Alternative method) {#withdraw-block-explorer}

This method allows you to withdraw (unlock) your RAZOR tokens directly by interacting with the StakeManager smart contract through the SKALE Block Explorer. This is the final step in the withdrawal process and will transfer your locked RAZOR tokens back to your wallet.

### Prerequisites {#block-explorer-prerequisites-withdraw}

Before withdrawing via the block explorer, ensure you have:

1. **Metamask wallet** installed and configured
2. **Europa Defi Hub network** added to Metamask (see [network details](./razor-v2/mainnet.md))
3. **sFUEL tokens** for gas fees (get from [faucet](https://www.sfuelstation.com/))
4. **Completed initiate withdraw** - You must have called [Initiate Withdraw](./initiate-withdraw.md) previously
5. **Withdraw lock expired** - The `withdrawLockPeriod` must have passed

### Contract Addresses {#contract-addresses-withdraw}

**Mainnet (Europa Defi Hub):**
- StakeManager: [`0xd492408e4901CF658c7874285984F6D5Db648D1E`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E)

**Testnet (Europa Defi Hub Testnet):**
- StakeManager: [`0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012)

### Step-by-Step Instructions {#block-explorer-steps-withdraw}

#### Step 1: Verify Withdraw Lock Status {#verify-withdraw-lock}

Before calling withdraw, verify your withdraw lock is ready:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `locks` function
4. Enter your parameters:
   - **address**: Your wallet address
   - **tokenAddress**: The sRZR token address for your staker
   - **lockType**: `1` (for Withdraw lock)
5. Click "Query" and check the result:
   - `amount`: Should be greater than 0 (this is the RAZOR amount you'll receive)
   - `unlockAfter`: Should be less than or equal to current epoch

If `unlockAfter` is still greater than the current epoch, wait until the lock period expires.

#### Step 2: Find Your Staker ID {#find-staker-id-withdraw}

You need the Staker ID for your staker:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `getStakerId` function
4. Enter your wallet address
5. Click "Query" - the result is your Staker ID

Alternatively, you can find your Staker ID on [Razorscan](https://razorscan.io/staking).

#### Step 3: Navigate to StakeManager Contract {#navigate-stakemanager-withdraw}

1. Visit the **StakeManager contract** on the block explorer:
   - **Mainnet**: https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E
   - **Testnet**: https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012

2. Click "Connect Wallet" and approve the Metamask connection
3. Verify your wallet is connected and you're on the correct network (Europa Defi Hub)

#### Step 4: Execute Unlock Withdraw Function {#execute-unlock-withdraw}

1. Navigate to the **"Write Contract"** tab
2. Scroll down and find the **`unlockWithdraw`** function
3. Fill in the parameters:
   - **stakerId (uint32)**: Enter your Staker ID from Step 2 (e.g., `42`)

4. Click "Write" to submit the transaction
5. Review the transaction details in the Metamask popup
6. Click "Confirm" in Metamask

**Important Notes:**
- This function only requires the Staker ID parameter
- It will transfer your locked RAZOR tokens to your wallet
- This resets both your unstake and withdraw locks
- After withdrawal, you can stake or delegate again if you wish

#### Step 5: Verify Transaction {#verify-transaction-withdraw}

1. After confirming in Metamask, wait for the transaction to be processed
2. Once confirmed, you'll see a success message in the block explorer
3. Click on the transaction hash to view transaction details
4. You can verify your withdrawal by:
   - Checking the transaction logs for a `Withdrew` event
   - Checking your RAZOR token balance in Metamask
   - Visiting your wallet on [Razorscan](https://razorscan.io/) to verify locks are cleared

#### Step 6: Verify Your RAZOR Balance {#verify-razor-balance}

Your RAZOR tokens have been transferred back to your wallet:

1. Open Metamask and ensure you're on Europa Defi Hub network
2. Check your RAZOR token balance
3. You can now use these tokens as you wish (stake again, transfer, etc.)

### Common Issues and Troubleshooting {#troubleshooting-withdraw}

**Transaction fails with "Did not initiate withdraw"**
- You don't have an active withdraw lock
- You must call [Initiate Withdraw](./initiate-withdraw.md) first

**Transaction fails with "Withdraw epoch not reached"**
- The withdraw lock period hasn't expired yet
- Wait until the `unlockAfter` epoch has passed
- Check your lock status using the method in Step 1

**Transaction fails with "staker doesnt exist"**
- Invalid Staker ID
- Double-check your Staker ID is correct

**No RAZOR received after successful transaction**
- Check if you're looking at the correct wallet address
- Verify the transaction was actually successful in the block explorer
- Check transaction logs for the `Withdrew` event to see the amount transferred

### Understanding the Complete Withdrawal Process {#understanding-complete-withdrawal}

Congratulations! You've completed the full withdrawal process:

1. **[Unstake](./unstake.md)**: Locked sRZR tokens for 300 epochs ✓
2. **[Initiate Withdraw](./initiate-withdraw.md)**: Burned sRZR and locked RAZOR for 300 epochs ✓
3. **Withdraw** (this step): Claimed locked RAZOR tokens ✓

**What happens after withdrawal:**
- All your locks (unstake and withdraw) are reset
- You can stake or delegate again immediately if you wish
- Your RAZOR tokens are fully liquid in your wallet

### Lock Periods Summary {#lock-periods-withdraw}

For reference, here's the complete timeline:
- **Epoch T**: Unstake called
- **Epoch T+300**: Can call Initiate Withdraw (must do before T+450)
- **Epoch T2**: Initiate Withdraw called
- **Epoch T2+300**: Can call Withdraw (anytime after this)

Current network parameters (verify on [Razorscan Governance](https://razorscan.io/governance/values)):
- **unstakeLockPeriod**: 300 epochs
- **withdrawInitiationPeriod**: 150 epochs (window to call initiate withdraw)
- **withdrawLockPeriod**: 300 epochs

### Next Steps After Withdrawal {#next-steps-withdraw}

Now that you've successfully withdrawn your RAZOR tokens, you can:

1. **Stake again** - Become a validator by calling [Stake](./stake.md)
2. **Delegate again** - Delegate to a validator by calling [Delegate](./delegate.md)
3. **Transfer tokens** - Send RAZOR to another address
4. **Bridge tokens** - Move RAZOR to Ethereum via [SKALE Portal Bridge](https://portal.skale.space/bridge)

### Related Operations {#related-operations-withdraw}

**Before this operation:**
- [Unstake](./unstake.md) - Step 1 of the withdrawal process
- [Initiate Withdraw](./initiate-withdraw.md) - Step 2 of the withdrawal process

**After this operation (optional):**
- [Stake](./stake.md) - Stake your RAZOR tokens again
- [Delegate](./delegate.md) - Delegate to a validator
