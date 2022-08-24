# Razor Token Bridge

[Razor Token Bridge](https://bridge.razorscan.io/) allows users to bridge $RAZOR tokens between Ethereum and Razor Schain.  The Token Bridge is powered by [Skale IMA](https://docs.skale.network/ima/1.3.x/).

## Bridge tokens from Ethereum to RAZOR Schain

1. Visit https://bridge.razorscan.io/
2. Connect wallet and switch the network to Ethereum.
3. Once connected to Ethereum, Enter amount of RAZOR tokens to bridge in the Schain card and click "Bridge". This will trigger 2 transactions for the user to confirm:

   - Allow amount of RAZOR tokens set to be spent by Skale IMA DepositBox contract. (Approve RAZOR tokens)
   - Depositing RAZOR tokens to DepositBox contract to bridge tokens from Ethereum to Schain. (Send RAZOR tokens to Bridge Contract)

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes.

![Ethereum to Schain](/img/bridge/e2s.png)

## Bridge tokens from RAZOR Schain to Ethereum

Before bridging tokens from RAZOR Schain to Ethereum, make sure you have enough balance in the Community Pool contract. Community Pool wallet is only on Ethereum.

![Community Pool wallet balance](/img/bridge/wallet.png)

### What is Community Pool contract?

Community Pool contract is part of the Skale IMA. When a user is bridging tokens from Schain to Ethereum the transaction needs to be verified and sent by IMA validators to unlock tokens for the user. The fees that validators have spent for the transactions needs to be reimbursed from the User Community Pool wallet balance. Keep in mind that any ETH deposited by the user to the Community Pool is only accessible by that user, and is **not** shared with a group of users. Any new address will need to deposit ETH to the Community Pool to be able to bridge from Razor Schain back to Ethereum. 

### How to recharge Community Pool wallet balance?

1. Visit https://bridge.razorscan.io/ and connect wallet, make sure the connected network is Ethereum.
2. In the Recharge Community Pool card, enter the amount of ETH that you want to add to the Community Pool wallet and click "Recharge". Community Pool wallet balance can be withdrawn anytime after token bridging is completed.

> **_NOTE:_** Community Pool balance is capped at a maximum of 1 ETH per address. If a user has withdrawn all their Community Pool balance, they will need to redeposit ETH to be able to bridge from Razor Schain to Ethereum.

![Recharge Community Pool wallet](/img/bridge/recharge.png)

### Bridge

1. Visit https://bridge.razorscan.io/
2. Connect wallet and switch the network to Razor Schain.
3. Enter amount of RAZOR tokens to be sent and click "Bridge". This will trigger 2 transactions for the user to confirm:
   - Allow amount of RAZOR tokens to be spent by Skale IMA DepositBoxERC20 contract.
   - Depositing RAZOR tokens to DepositBoxERC20 contract to bridge tokens from Razor Schain to Ethereum. Tokens will be burnt on the RAZOR Schain and unlocked and sent to the users address on Ethereum Mainnet.

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes

![Schain to Ethereum](/img/bridge/s2e.png)
