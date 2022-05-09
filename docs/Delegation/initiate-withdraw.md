## Initiate Withdraw {#initiate-withdraw}

Razor network is a proof of stake network. In order to participate in the network as a delegator, you will need to "Delegate" your RAZORs. RAZOR is (`ERC20` token standard) the native token in Razor Network.

> Warning: Razor network is in alpha state and is deployed on Skale v2 Testnet. Please use Testnet tokens only.

## Metamask Setup {#metamask-setup}

1. Click on `Connect Wallet` on the official Razor Network client <https://razorscan.io/>.
2. Switch to the Skale Testnet Network and connect Metamask wallet.
3. Click on the `+` icon to add the RAZOR contract address.
4. Alternatively, contract addresses and network details can be found [here](/docs/incentivised-testnet/deployment-details) if you would like to verify the addresses manually.

Note : _You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

# Initiate Withdraw

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note** : _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to “Skale Testnet” and navigate to [https://razorscan.io/staking](https://razorscan.io/staking).

![Screenshot](/img/2.png)

### Step 3 {#step-3}

Find the staker address in the Stakers table, click on Actions and now if the connected address has an unstake lock active, Initiate Withdraw will be clickable. It will also have a tooltip which specifies the epochs that it is to be called within.
_Note: This can also be done on staker or the delegator participants page._

![Screenshot](/img/14.png)

### Step 4 {#step-4}

A modal will show, with the corresponding Unstake Lock details. Use the state bar to make sure the current state is not `Propose` or `Dispute` and click the “Initiate” button and confirm the transaction.
_Note: Refer to the state bar to get the current state and an ETA for the next state._

![Screenshot](/img/15.png)

### Step 5 {#step-5}

![Screenshot](/img/12.png)

**Note** : _To get the exact values of the lock periods check Governance [here](https://razorscan.io/governance/values)_.
