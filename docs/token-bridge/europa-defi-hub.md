# Europa DeFi Hub

## Ethereum to Europa Defi Hub

**Step 1**:Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=mainnet&to=turbulent-unique-scheat&token=razor&type=erc20).Connect wallet and switch the network to Ethereum.

**Step 2**: Click **Transfer**. This will trigger two transactions for the user to confirm:

- Approve the amount of **RAZOR** tokens to be spent by the Skale IMA contract.
- Deposit the **RAZOR** tokens into the Skale IMA contract to bridge tokens from Ethereum to Europa Schain.
- Once both transactions are confirmed, the bridging process will begin.

> **_NOTE:_** Bridge transfer typically takes 3-5 minutes.

![Ethereum to Europa Defi Hub](/img/bridge/portal-ethereum2europa.png)

## Europa Defi Hub to Ethereum

Before bridging tokens from Europa Defi Hub to Ethereum, make sure you have enough balance in Skale Exit Gas Wallet.

<details><summary>What is Skale Exit Gas Wallet?</summary>
<p>
To bridge funds from SKALE Chain to Ethereum Mainnet, you must first deposit funds into your SKALE Exit Gas Wallet. This wallet covers the transaction costs on Ethereum Mainnet when your funds are transferred to you.
<br />
<br />
The SKALE Exit Gas Wallet ensures that there are sufficient funds to pay for gas fees on transactions sent to Ethereum Mainnet. <b>It's important to note that any unused gas in this wallet should be manually claimed by you after your tokens have been received on Ethereum Mainnet.</b>

</p>
</details>

**Step 1:** Visit [SKALE Portal Bridge](https://portal.skale.space/bridge?from=elated-tan-skat&to=mainnet&token=razor&type=erc20). Connect your wallet and switch the network to Europa Defi Hub. Make sure selected token is RAZOR.

**Step 2:** Before proceeding with the bridge, ensure your **Exit Gas Wallet** is sufficiently funded with ETH for gas fees on Ethereum Mainnet.

- Navigate to the "Recharge Exit Gas Wallet" section.
- Enter the amount of ETH you wish to add to the Exit Gas Wallet (make sure to exceed the recommended minimum to avoid any issues due to potential network spikes).
- Click "Recharge Exit Gas Wallet" to complete the transaction.

![Gas wallet](/img/bridge/portal-gas-wallet.png)

> **_Note:_** The Gas Wallet balance is capped at a maximum of 1 ETH per address. If you withdraw the entire balance, you will need to redeposit ETH to bridge tokens again.

**Step 3:** Enter the amount of RAZOR tokens to be sent and click "Transfer." This will trigger 2 transactions for the user to confirm:

- Approve the spending of RAZOR tokens by the Skale IMA contract.
- Deposit RAZOR tokens to the Skale IMA contract to bridge tokens from Europa Defi Hub to Ethereum. The tokens will be burnt on the Europa Defi Hub and unlocked on Ethereum Mainnet to the user's address.

![Schain to Ethereum](/img/bridge/portal-europa2ethereum.png)

> **_NOTE:_** Once tokens are successfully bridged from Europa Defi Hub to Ethereum Mainnet, make sure to claim any unused gas from the **Exit Gas Wallet**. The bridge transfer typically takes 3-5 minutes.
