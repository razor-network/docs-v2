## Quick start - Unstake {#quick-start---unstake}

Razor network is a proof of stake network. In order to participate in the network as a delegator, you will need to "Delegate" your RAZORs. RAZOR is (`ERC20` token standard) the native token in Razor Network.

> Warning: Razor network is in alpha state and is deployed on Skale v2 Testnet. Please use Testnet tokens only.

## In Short: {#in-short}

Unstaking and withdrawing funds from Razor Network is a 3 step process.

1.  Unstake:
    After unstaking, the users sRAZOR tokens are locked in the Stake Manager contract. There is a time period set in which the user must call Initiate Withdraw and proceed to the next phase of the lock. Currently, the `withdrawInitiationPeriod` set is 5 epochs(Check Governance Parameters). If user Unstaked in epoch `T` the user must call Initiate Withdraw after epoch `T + 1` and before `T + 6` epoch.
    _Note_ : _Failing to call Initiate Withdraw within the specified epochs will result in a penalty via <ins>Reset Lock</ins>_.

2.  Initiate Withdraw:
    This call is _**not**_ allowed in _Propose_ and _Dispute_ States. If the current state is Propose or Dispute, wait for a few minutes before making the call. The initiate withdraw call will only succeed if the User has locked RAZOR and if the current epoch is within the `withdrawInitiationPeriod`. The users sRAZOR are burnt for RAZOR tokens, and locked for `withdrawLockPeriod` which is currently 1 epoch.
3.  Withdraw:
    Lastly, withdraw can be called anytime after the `withdrawLockPeriod` epoch has passed.

## Metamask Setup {#metamask-setup}

1. Click on `Connect Wallet` on the official Razor Network client <https://razorscan.io/>.
2. Switch to the Skale Testnet Network and connect Metamask wallet.
3. Click on the `+` icon to add the RAZOR contract address.
4. Alternatively, contract addresses and network details can be found [here](http://localhost:3000/docs/incentivised-testnet/deployment-details) if you would like to verify the addresses manually.

Note : _You can get the stakers sRAZOR address by clicking on the `+` icon on that stakers delegate/unstake modal._

# Unstaking

### Step 1 {#step-1}

Visit <https://razorscan.io/>

**Note** : _We recommend that all Delegators bookmark this specific URL to prevent any phishing attacks_.

![Screenshot](/img/1.png)

### Step 2 {#step-2}

Now, click on “Connect Wallet” from the top right corner and make sure your network is set to “Skale Testnet”.:

![Screenshot](/img/2.png)

### Step 3 {#step-3}

Navigate to your address by clicking on it on the top right corner of the screen. Click on the `Unstake` action from the Actions dropdown on the Delegated Table.
_Note: This can also be done on [https://razorscan.io/staking](https://razorscan.io/staking) or the particular stakers page._

![Screenshot](/img/9.png)

### Step 4 {#step-4}

Once you click on “Unstake” a modal will appear, enter the amount of sRAZOR that you want to unstake, and click on the “Unstake” button. There will be two transactions, Approve and Unstake respectively.
_Note: Users can add the stakers sRAZOR address using the `+` icon near the stakers address._

![Screenshot](/img/11.png)

### Step 8 {#step-8}

Once both transactions are successful, [Initiate Withdraw](/Delegation/delegate) will need to be called after the `unstakeLockPeriod` and within the `withdrawInitiationPeriod`.

![Screenshot](/img/12.png)

**Note** : _To get the exact values of the lock periods check Governance [here](https://razorscan.io/governance/values)_.
