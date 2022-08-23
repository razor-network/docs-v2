# Razor Token bridge

[Razor Token bridge](https://bridge.razorscan.io/) allows to bridge $RAZOR tokens from Mainnet to Razor Schain and vice versa. Token bridge is powered by [Skale IMA](https://docs.skale.network/ima/1.3.x/).

## Bridge tokens from Mainnet to RAZOR Schain

1. Visit https://bridge.razorscan.io/
2. Connect wallet and switch the network to Ethereum.
3. Once connected to Ethereum, Enter amount of RAZOR tokens to bridge in Schain card and click "Bridge". These will trigger 2 transaction:

   - Allow amount of RAZOR tokens to be spent by Skale IMA DepositBox contract.
   - Depositing RAZOR tokens to DepositBox contract to bridge tokens from Mainnet to Schain.

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes

![Ethereum to Schain](/img/bridge/e2s.png)

## Bridge tokens from RAZOR Schain to Mainnet

Before bridging tokens from RAZOR Schain to Mainnet, make sure you have enough balance in Community Pool contract.

### What is Community Pool contract?

Community Pool contract is part of Skale IMA. Each user when bridge tokens from Schain to Mainnet the transaction needs to be made by IMA validators to unlock tokens for user. The fees that validators has spent for transaction needs to be reimburse from User Community Pool balance.

### How to recharge Community Pool wallet balance?

1. Visit https://bridge.razorscan.io/ and connect wallet, make sure the connected network is Ethereum.
2. In Recharge Community Pool card, enter amount of ETH that you want to add in Community Pool wallet and click "Recharge". Community Pool wallet balance can be withdraw anytime once after token bridge is completed.

![Recharge Community Pool wallet](/img/bridge/recharge.png)

1. Visit https://bridge.razorscan.io/
2. Connect wallet and switch the network to Razor Schain.
3. Once connected to Ethereum, Enter amount of RAZOR tokens in bridge to mainnet card and click "Bridge". These will trigger 2 transaction:
   - Allow amount of RAZOR tokens to be spent by Skale IMA DepositBoxERC20 contract.
   - Depositing RAZOR tokens to DepositBoxERC20 contract to bridge tokens from Schain to Ethereum mainnet. Tokens will be burnt on RAZOR Schain and unlocked on Ethereum mainnet for user address.

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes

![Schain to Ethereum](/img/bridge/s2e.png)
