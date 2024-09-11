---
title: Delegate
---

Razor network is a proof of stake network. In order to participate in the network as a delegator, you will need to "Delegate" your RAZORs. RAZOR is (`ERC20` token standard) the native token in Razor Network.

In order to delegate, you will also need some RAZORs on Razor Schain. You can bridge RAZOR tokens from Ethereum to Razor Schain using [Razor Token Bridge](https://bridge.razorscan.io/). More info regarding RAZOR Token bridge can be found [here](docs/token-bridge/ethereum-razor). To pay transaction fees on Razor Schain you will require sFUEL to pay for gas, you can get sFUEL from [Faucet](https://faucet.razorscan.io/).

<!-- > Warning: Razor network is in alpha state and is deployed on Skale v2 Testnet. Please use Testnet tokens only. -->

## Metamask Setup {#metamask-setup}

1. Click on `Connect Wallet` on the official Razor Network client <https://razorscan.io/>.
2. Switch to the Razor Schain Network and connect Metamask wallet.
3. Click on the `+` icon to add the RAZOR contract address.
4. Alternatively, contract addresses and network details can be found [here](./mainnet/deployment-details.md) if you would like to verify the addresses manually.

**Note**: _You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

## Delegation on Razorscan {#delegation-on-razorscan}

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note**: _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/delegate/Delegation_step1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to "Razor Schain". Next, visit https://razorscan.io/staking or click on “Staking” from the menu bar on the header and you should see the screen below:

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
