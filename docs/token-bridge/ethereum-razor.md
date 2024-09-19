# Ethereum <-> Razor Chain Bridge

## Bridge tokens from Ethereum to RAZOR chain

1. Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=mainnet&to=turbulent-unique-scheat&token=razor&type=erc20)
2. Connect wallet and switch the network to Ethereum.
3. Once connected to Ethereum, Enter amount of RAZOR tokens to bridge in the From "Ethereum" card and then click on "Transfer". If you have .This will trigger 2 transactions for the user to confirm:

   - Allow amount of RAZOR tokens set to be spent by Skale IMA DepositBox contract. (Approve RAZOR tokens)
   - Depositing RAZOR tokens to DepositBox contract to bridge tokens from Ethereum to Schain. (Send RAZOR tokens to Bridge Contract)

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes.

![Ethereum to Schain](/img/bridge/portal-e2s.png)

## Bridge RAZOR tokens from Razor chain to Ethereum

Before bridging tokens from Razor Skale Chain to Ethereum, make sure you have enough balance in Skale Exit Gas Wallet.

<!-- ![Gas Wallet balance](/img/bridge/portal-gas-wallet.png) -->

### What is Skale Exit Gas Wallet?

A Skale Exit Gas Wallet is used to pay for gas fees on transactions sent to the Ethereum Mainnet. It ensures that users have the necessary funds to cover transaction costs. You can withdraw funds from your Skale Exit Gas Wallet at any time.

### How to Recharge Your Skale Exit Gas Wallet Balance

1. Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=turbulent-unique-scheat&to=mainnet&token=razor&type=erc20) and connect your wallet.
2. In the "Recharge Exit Gas Wallet" section, enter the amount of ETH you'd like to add to your Gas Wallet. Ensure the amount is above the recommended minimum, then click "Recharge Exit Gas Wallet." You can withdraw your Gas Wallet balance anytime after the token bridging process is completed.

> **_Note:_** The Gas Wallet balance is capped at a maximum of 1 ETH per address. If a user withdraws their entire Gas Wallet balance, they must redeposit ETH to bridge tokens from Razor SKALE Chain to Ethereum.

![Gas wallet](/img/bridge/portal-gas-wallet.png)

### Bridge

1. Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=turbulent-unique-scheat&to=mainnet&token=razor&type=erc20&from-app=razor-network)
2. Connect wallet and switch the network to Razor SKALE Chain.
3. Enter amount of RAZOR tokens to be sent and click "Transfer". This will trigger 2 transactions for the user to confirm:
   - Allow amount of RAZOR tokens to be spent by Skale IMA DepositBoxERC20 contract.
   - Depositing RAZOR tokens to DepositBoxERC20 contract to bridge tokens from Razor SKALE Chain to Ethereum. Tokens will be burnt on the Razor SKALE Chain and unlocked and sent to the users address on Ethereum Mainnet.

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes

![Schain to Ethereum](/img/bridge/portal-s2e.png)
