# Razor Chain

<!-- ## Ethereum to Razor Chain

1. Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=mainnet&to=turbulent-unique-scheat&token=razor&type=erc20).
2. Connect wallet and switch the network to Ethereum.
3. Once connected to Ethereum, Enter amount of RAZOR tokens to bridge in the From "Ethereum" card and then click on "Transfer". If you have .This will trigger 2 transactions for the user to confirm:

   - Allow amount of RAZOR tokens set to be spent by Skale IMA DepositBox contract. (Approve RAZOR tokens)
   - Depositing RAZOR tokens to DepositBox contract to bridge tokens from Ethereum to Schain. (Send RAZOR tokens to Bridge Contract)

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes.

![Ethereum to Razor Chain](/img/bridge/portal-e2s.png) -->

## Razor Chain to Ethereum

Before bridging tokens from Razor Skale Chain to Ethereum, make sure you have enough balance in Skale Exit Gas Wallet.

<details><summary>What is Skale Exit Gas Wallet?</summary>
<p>
To bridge funds from SKALE Chain to Ethereum Mainnet, you must first deposit funds into your SKALE Exit Gas Wallet. This wallet covers the transaction costs on Ethereum Mainnet when your funds are transferred to you.
<br />
<br />
The SKALE Exit Gas Wallet ensures that there are sufficient funds to pay for gas fees on transactions sent to Ethereum Mainnet. It's important to note that any unused gas in this wallet should be manually claimed by you after your tokens have been received on Ethereum Mainnet.

</p>
</details>

**Step 1:** Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=turbulent-unique-scheat&to=mainnet&token=razor&type=erc20&from-app=razor-network). Connect your wallet and switch the network to Razor SKALE Chain.

**Step 2:** Before proceeding with the bridge, ensure your **Exit Gas Wallet** is sufficiently funded with ETH for gas fees on Ethereum Mainnet.

- Navigate to the "Recharge Exit Gas Wallet" section.
- Enter the amount of ETH you wish to add to the Exit Gas Wallet (make sure to exceed the recommended minimum to avoid any issues due to potential network spikes).
- Click "Recharge Exit Gas Wallet" to complete the transaction.

![Gas wallet](/img/bridge/portal-gas-wallet.png)

> **_Note:_** The Gas Wallet balance is capped at a maximum of 1 ETH per address. If you withdraw the entire balance, you will need to redeposit ETH to bridge tokens again.

**Step 3:** Enter the amount of RAZOR tokens to be sent and click "Transfer." This will trigger 2 transactions for the user to confirm:

- Approve the spending of RAZOR tokens by the Skale IMA contract.
- Deposit RAZOR tokens to the Skale IMA contract to bridge tokens from Razor SKALE Chain to Ethereum. The tokens will be burnt on the Razor SKALE Chain and unlocked on Ethereum Mainnet to the user's address.

![Schain to Ethereum](/img/bridge/portal-s2e.png)

**Step 4:** Once tokens are successfully bridged from Razor to Ethereum Mainnet, make sure to withdraw any unused gas from the **Exit Gas Wallet**.

> **_NOTE:_** The bridge transfer typically takes 3-5 minutes.
