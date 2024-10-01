# Razor Chain

## Razor Chain to Ethereum

Before bridging tokens from Razor Skale Chain to Ethereum, make sure you have enough balance in Skale Exit Gas Wallet.

<details><summary>What is Skale Exit Gas Wallet?</summary>
<p>
To bridge funds from Razor SKALE chain to Ethereum Mainnet, you must first deposit funds into your SKALE Exit Gas Wallet. This wallet covers the transaction costs on Ethereum Mainnet when your funds are transferred to you.
<br />
<br />
The SKALE Exit Gas Wallet ensures that there are sufficient funds to pay for gas fees on transactions sent to Ethereum Mainnet. <b>Important: Once your tokens are received on Ethereum Mainnet, immediately claim all unused gas from this wallet.</b>

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

**Step 4:** Once tokens are successfully bridged from Razor Chain to Ethereum, make sure to withdraw any unused gas from the **Exit Gas Wallet** on Ethereum.

> **_NOTE:_** The bridge transfer typically takes 3-5 minutes.
