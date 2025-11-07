---
title: Unstake
---

During unstake, user sRAZOR token gets locked in contract. User can initiate withdraw for locked tokens in the next epoch.

## In Short: {#in-short}

Unstaking and withdrawing funds from Razor Network is a 3 step process.

1.  **Unstake**:
    After unstaking, the users sRAZOR tokens are locked in the Stake Manager contract for `unstakeLockPeriod` which is currently 300 epochs. There is a time period set in which the user must call Initiate Withdraw and proceed to the next phase of the lock. Currently, the `withdrawInitiationPeriod` set is 150 epochs (Check current network parameters [here](https://razorscan.io/governance/values)). If user Unstaked in epoch `T` the user must call Initiate Withdraw after epoch `T + 300` and before `T + 450` epoch.
    _Note_ : _Failing to call Initiate Withdraw within the specified epochs will result in a penalty via <ins>Reset Lock</ins>_.

2.  **Initiate Withdraw**:
    This call is _**not**_ allowed in _Propose_ and _Dispute_ States. If the current state is Propose or Dispute, wait for a few minutes before making the call. The initiate withdraw call will only succeed if the User has locked RAZOR and if the current epoch is within the `withdrawInitiationPeriod`. The users sRAZOR are burnt for RAZOR tokens, and locked for `withdrawLockPeriod` which is currently 300 epoch.
3.  **Withdraw**:
    Lastly, withdraw can be called anytime after the `withdrawLockPeriod` epochs has passed.

**Note**: _Please check the current network parameters [here](https://razorscan.io/governance/values).You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

## Using Razorscan (Recommended for beginners) {#unstake-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/unstake/unstake_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Europa Defi Hub". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

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

## Using SKALE Block Explorer (Alternative method) {#unstake-block-explorer}

This method allows you to unstake directly by interacting with the StakeManager smart contract through the SKALE Block Explorer. This is recommended for advanced users who are comfortable with direct contract interaction.

### Prerequisites {#block-explorer-prerequisites-unstake}

Before unstaking via the block explorer, ensure you have:

1. **Metamask wallet** installed and configured
2. **Europa Defi Hub network** added to Metamask (see [network details](./razor-v2/mainnet.md))
3. **sRZR tokens** (staked RAZOR tokens) in your wallet
4. **sFUEL tokens** for gas fees (get from [faucet](https://www.sfuelstation.com/))
5. **Staker ID** for the staker you want to unstake from
6. **No existing locks** - you cannot have an existing unstake or withdraw lock

### Contract Addresses {#contract-addresses-unstake}

**Mainnet (Europa Defi Hub):**
- StakeManager: [`0xd492408e4901CF658c7874285984F6D5Db648D1E`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E)

**Testnet (Europa Defi Hub Testnet):**
- StakeManager: [`0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012)

### Step-by-Step Instructions {#block-explorer-steps-unstake}

#### Step 1: Find Your Staker ID {#find-staker-id-unstake}

You need to know the Staker ID for the validator you're unstaking from:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `getStakerId` function
4. Enter your wallet address (if you're a staker) or the validator's address (if you delegated)
5. Click "Query" - the result is the Staker ID

Alternatively, you can find your Staker ID on [Razorscan](https://razorscan.io/staking).

#### Step 2: Check Your sRZR Balance {#check-srzr-balance}

You need to know how much sRZR (staked RAZOR) you have:

**Method 1: Using Razorscan**
1. Visit [Razorscan](https://razorscan.io/)
2. Connect your wallet
3. View your staking information to see your sRZR balance

**Method 2: Using Block Explorer**
1. Find the sRZR token contract address for your staker (each staker has a unique sRZR token)
2. Query the `balanceOf` function with your address
3. The result is your sRZR balance in wei

#### Step 3: Approve sRZR Transfer {#approve-srzr-transfer}

Before unstaking, you must approve the StakeManager contract to transfer your sRZR tokens:

1. Visit the **sRZR Token contract** on the block explorer
   - You can find the sRZR token address by querying the `getStaker` function with your Staker ID
   - Look for the `tokenAddress` field in the result

2. Click "Connect Wallet" and approve the Metamask connection
3. Navigate to the **"Write Contract"** tab
4. Find the **`approve`** function
5. Fill in the parameters:
   - **spender (address)**: Enter the StakeManager contract address:
     - Mainnet: `0xd492408e4901CF658c7874285984F6D5Db648D1E`
     - Testnet: `0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`
   - **amount (uint256)**: Enter the sRZR amount in wei that you want to unstake
6. Click "Write" and confirm the transaction in Metamask
7. Wait for the transaction to be confirmed

#### Step 4: Navigate to StakeManager Contract {#navigate-stakemanager-unstake}

1. Visit the **StakeManager contract** on the block explorer:
   - **Mainnet**: https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E
   - **Testnet**: https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012

2. Ensure your wallet is connected

#### Step 5: Execute Unstake Function {#execute-unstake}

1. Navigate to the **"Write Contract"** tab
2. Scroll down and find the **`unstake`** function
3. Fill in the parameters:
   - **stakerId (uint32)**: Enter the Staker ID from Step 1 (e.g., `42`)
   - **sAmount (uint256)**: Enter the amount of sRZR to unstake in wei (e.g., `1000000000000000000000` for 1000 sRZR)

4. Click "Write" to submit the transaction
5. Review the transaction details in the Metamask popup
6. Click "Confirm" in Metamask

**Important Notes:**
- The amount is in **sRZR** (staked RAZOR), not RAZOR
- You must not have an existing unstake or withdraw lock
- After unstaking, your sRZR tokens will be locked for `unstakeLockPeriod` (currently 300 epochs)
- You must call [Initiate Withdraw](./initiate-withdraw.md) within the `withdrawInitiationPeriod` (150 epochs)

#### Step 6: Verify Transaction {#verify-transaction-unstake}

1. After confirming in Metamask, wait for the transaction to be processed
2. Once confirmed, you'll see a success message in the block explorer
3. Click on the transaction hash to view transaction details
4. You can verify your unstake by:
   - Checking the transaction logs for an `Unstaked` event
   - Visiting your wallet on [Razorscan](https://razorscan.io/) to see your lock status

#### Step 7: Next Steps {#next-steps-unstake}

After successfully unstaking:

1. **Wait for unstakeLockPeriod** (currently 300 epochs) to pass
2. **Call [Initiate Withdraw](./initiate-withdraw.md)** within the withdrawal initiation window
3. If you miss the window, you'll need to call [Reset Lock](./reset-lock.md) (which incurs a penalty)

### Common Issues and Troubleshooting {#troubleshooting-unstake}

**Transaction fails with "Existing Withdraw Lock"**
- You already have a pending withdraw lock
- Complete the withdrawal process first before unstaking again

**Transaction fails with "Existing Unstake Lock"**
- You already have a pending unstake lock
- Complete the initiate withdraw and withdrawal process, or use [Reset Lock](./reset-lock.md)

**Transaction fails with "Invalid Amount"**
- You don't have enough sRZR tokens
- Check your sRZR balance using Step 2

**Transaction fails with "Non-Positive Amount"**
- The sAmount parameter is 0 or invalid
- Enter a value greater than 0

**Transaction fails with "Nonpositive stake"**
- The staker has no stake
- Verify you're using the correct Staker ID

**Transaction fails with "staker.id = 0"**
- Invalid Staker ID
- Double-check the Staker ID is correct

**Transaction fails with "ERC20: insufficient allowance"**
- You didn't complete Step 3 (sRZR approval), or approved an insufficient amount
- Go back to Step 3 and approve the correct amount

### Understanding sRZR Tokens {#understanding-srzr}

**What is sRZR?**
- sRZR (staked RAZOR) is an ERC20 token that represents your stake in a specific validator
- Each validator has their own unique sRZR token contract
- The ratio of sRZR to RAZOR changes based on rewards and penalties
- When you stake/delegate, you receive sRZR tokens
- When you unstake, you burn sRZR tokens to begin the withdrawal process

**sRZR to RAZOR Conversion:**
- The conversion rate is: `RAZOR amount = (sRZR amount × total staker stake) / total sRZR supply`
- This rate improves over time as rewards are earned
- You can view this ratio on Razorscan

### Wei Conversion Helper {#wei-conversion-unstake}

To convert sRZR amounts to wei for the smart contract:

- 100 sRZR = `100000000000000000000` wei
- 1000 sRZR = `1000000000000000000000` wei
- 5000 sRZR = `5000000000000000000000` wei

Formula: **sRZR amount × 1,000,000,000,000,000,000**

### Lock Periods {#lock-periods}

Current network parameters (verify on [Razorscan Governance](https://razorscan.io/governance/values)):
- **unstakeLockPeriod**: 300 epochs (time before you can call initiate withdraw)
- **withdrawInitiationPeriod**: 150 epochs (window to call initiate withdraw)
- **withdrawLockPeriod**: 300 epochs (time after initiate withdraw before you can withdraw)

### Related Operations {#related-operations-unstake}

After unstaking, you must complete the withdrawal process:
1. Wait for unstakeLockPeriod to pass
2. [Initiate Withdraw](./initiate-withdraw.md) - Burn sRZR and lock RAZOR
3. Wait for withdrawLockPeriod to pass
4. [Withdraw](./withdraw.md) - Claim your RAZOR tokens

If you miss the withdrawal initiation window:
- [Reset Lock](./reset-lock.md) - Extend the unstake lock (incurs penalty)
