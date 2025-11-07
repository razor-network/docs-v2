---
title: Delegate
---

Razor network is a proof of stake network. In order to participate in the network as a delegator, you will need to "Delegate" your RAZORs. RAZOR is (`ERC20` token standard) the native token in Razor Network.

In order to delegate, you will also need some RAZOR tokens on Europa Defi Hub. You can bridge RAZOR tokens from Ethereum to Europa Defi Hub using [SKALE Portal Bridge](https://portal.skale.space/bridge?from=mainnet&to=elated-tan-skat&token=razor&type=erc20). More info regarding RAZOR Token bridge can be found [here](/docs/token-bridge/europa-defi-hub#ethereum-to-europa-defi-hub). To pay transaction fees on Europa Defi Hub you will require sFUEL to pay for gas, you can get sFUEL from [Faucet](https://www.sfuelstation.com/).

<!-- > Warning: Razor network is in alpha state and is deployed on Skale v2 Testnet. Please use Testnet tokens only. -->

## Metamask Setup {#metamask-setup}

1. Click on `Connect Wallet` on the official Razor Network client <https://razorscan.io/>.
2. Switch to the Europa Defi Hub Network and connect Metamask wallet.
3. Click on the `+` icon to add the RAZOR contract address.
4. Alternatively, contract addresses and network details can be found [here](./razor-v2/mainnet.md) if you would like to verify the addresses manually.

**Note**: _You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

## Using Razorscan (Recommended for beginners) {#delegation-on-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/delegate/Delegation_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Europa Defi Hub". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

![Screenshot](/img/delegate/delegation_step2.png)

### Step 3 {#step-3}

Click on the “Action” button next to the staker of your choice to delegate your RAZOR tokens to them. You can choose a staker based on activity, commission, stake, APR, age, etc.

**Note**: _Commission here refers to the percentage of the rewards earned on the delegated funds charged by the staker._

### Step 4 {#step-4}

Click on the Delegate action, you will be shown a modal with more information on the staker. Input the number of RAZOR tokens you want to delegate and click on “Approve & Delegate”.

**Note**: _Make sure the network is correct and the connected wallet has RAZOR and enough tokens for gas as required._

![Screenshot](/img/4.png)

### Step 5 {#step-5}

On the Metamask popup click on “Confirm”. There will be an update on the web application once the transactions are successful.

**Note**: _Two transactions, the first to Approve and the second to Delegate tokens. Make sure to confirm both._

![Screenshot](/img/delegate/metamask-delegate.png)

### Step 6 {#step-6}

Click on your connected wallet address to get information on your actions.

![Screenshot](/img//delegate/delegation_step6.png)

## Using SKALE Block Explorer (Alternative method) {#delegation-block-explorer}

This method allows you to interact directly with the StakeManager smart contract through the SKALE Block Explorer. This is recommended for advanced users who are comfortable with direct contract interaction.

### Prerequisites {#block-explorer-prerequisites}

Before delegating via the block explorer, ensure you have:

1. **Metamask wallet** installed and configured
2. **Europa Defi Hub network** added to Metamask (see [network details](./razor-v2/mainnet.md))
3. **RAZOR tokens** on Europa Defi Hub (bridge from Ethereum via [SKALE Portal](https://portal.skale.space/bridge?from=mainnet&to=elated-tan-skat&token=razor&type=erc20))
4. **sFUEL tokens** for gas fees (get from [faucet](https://www.sfuelstation.com/))
5. **Staker ID** of the validator you want to delegate to

### Contract Addresses {#contract-addresses}

**Mainnet (Europa Defi Hub):**
- StakeManager: [`0xd492408e4901CF658c7874285984F6D5Db648D1E`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E)
- RAZOR Token: [`0xCA46B70cA3c510Ce9D0c43D25817032e2F5354c0`](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xCA46B70cA3c510Ce9D0c43D25817032e2F5354c0)

**Testnet (Europa Defi Hub Testnet):**
- StakeManager: [`0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012)
- RAZOR Token: [`0x99Be5a5749bA2bccfC4Bb6584cA0E405A16586C4`](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x99Be5a5749bA2bccfC4Bb6584cA0E405A16586C4)

### Step-by-Step Instructions {#block-explorer-steps}

#### Step 1: Find the Staker ID {#find-staker-id}

First, you need to know the Staker ID of the validator you want to delegate to. You can find this on [Razorscan](https://razorscan.io/staking) by looking at the staker list, or query it from the contract:

1. Visit the StakeManager contract on the block explorer (links above)
2. Go to the "Read Contract" tab
3. Find the `getStakerId` function
4. Enter the validator's wallet address
5. Click "Query" - the result is the Staker ID (note: returns 0 if the address is not a staker)

#### Step 2: Approve RAZOR Tokens {#approve-tokens}

Before delegating, you must approve the StakeManager contract to spend your RAZOR tokens:

1. Visit the **RAZOR Token contract** on the block explorer (use links above)
2. Click "Connect Wallet" and approve the Metamask connection
3. Verify your wallet is connected and you're on the correct network (Europa Defi Hub)
4. Navigate to the **"Write Contract"** tab
5. Find the **`approve`** function
6. Fill in the parameters:
   - **spender (address)**: Enter the StakeManager contract address:
     - Mainnet: `0xd492408e4901CF658c7874285984F6D5Db648D1E`
     - Testnet: `0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012`
   - **amount (uint256)**: Enter the amount in wei (e.g., for 1000 RAZOR, enter `1000000000000000000000`)
7. Click "Write" and confirm the transaction in Metamask
8. Wait for the transaction to be confirmed

**Note**: _1 RAZOR = 10^18 wei. To convert: multiply your RAZOR amount by 1000000000000000000_

#### Step 3: Navigate to StakeManager Contract {#navigate-stakemanager}

1. Visit the **StakeManager contract** on the block explorer:
   - **Mainnet**: https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xd492408e4901CF658c7874285984F6D5Db648D1E
   - **Testnet**: https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0xbeCf5d1b74d0C2A6388c65491BBb4aD3880cD012

2. Ensure your wallet is still connected (if not, click "Connect Wallet" again)

#### Step 4: Execute Delegate Function {#execute-delegate}

1. Navigate to the **"Write Contract"** tab
2. Scroll down and find the **`delegate`** function
3. Fill in the parameters:
   - **stakerId (uint32)**: Enter the Staker ID from Step 1 (e.g., `42`)
   - **amount (uint256)**: Enter the delegation amount in wei (e.g., for 1000 RAZOR, enter `1000000000000000000000`)

4. Click "Write" to submit the transaction
5. Review the transaction details in the Metamask popup
6. Click "Confirm" in Metamask

**Important Notes:**
- The staker must have **delegation enabled** (`acceptDelegation = true`)
- You cannot delegate to yourself if you're already a staker
- The staker must not be slashed
- Ensure you've completed the token approval in Step 2

#### Step 5: Verify Transaction {#verify-transaction}

1. After confirming in Metamask, wait for the transaction to be processed
2. Once confirmed, you'll see a success message in the block explorer
3. Click on the transaction hash to view transaction details
4. You can verify your delegation by:
   - Checking the transaction logs for a `Delegated` event
   - Visiting your wallet on [Razorscan](https://razorscan.io/) to see your delegation

### Common Issues and Troubleshooting {#troubleshooting}

**Transaction fails with "Delegetion not accpected"**
- The staker has not enabled delegation acceptance
- Choose a different staker who accepts delegation

**Transaction fails with "ERC20: insufficient allowance"**
- You didn't complete Step 2 (token approval), or approved an insufficient amount
- Go back to Step 2 and approve the correct amount

**Transaction fails with "Staker cannot delegate themself"**
- You're trying to delegate to your own staker ID
- Stakers cannot delegate to themselves; they should use the `stake` function instead

**Transaction fails with "Staker is slashed"**
- The staker you're trying to delegate to has been slashed
- Choose a different staker

**Invalid Staker ID**
- Double-check the Staker ID is correct
- Ensure the staker exists by querying `getStaker` with the ID

### Wei Conversion Helper {#wei-conversion}

To convert RAZOR amounts to wei for the smart contract:

- 100 RAZOR = `100000000000000000000` wei
- 1000 RAZOR = `1000000000000000000000` wei
- 5000 RAZOR = `5000000000000000000000` wei

Formula: **RAZOR amount × 1,000,000,000,000,000,000**

### Related Operations {#related-operations}

After delegating, you may want to:
- [Unstake](./unstake.md) - Begin the unstaking process
- [Withdraw](./withdraw.md) - Complete withdrawal after unstaking period
