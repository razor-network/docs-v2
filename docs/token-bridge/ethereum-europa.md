# Ethereum <-> Europa DeFi Hub bridge

## Bridging RAZOR tokens from Ethereum to Europa

1. Go to the [SKALE Bridge Portal](https://portal.skale.space/bridge).
2. Set the "From" chain to Ethereum and the "To" chain to Europa. Select the token as **RAZOR** and input the amount you wish to bridge.
3. Click **Transfer**. This will trigger two transactions for the user to confirm:
   - Approve the amount of **RAZOR** tokens to be spent by the SKALE IMA DepositBox contract.
   - Deposit the **RAZOR** tokens into the DepositBox contract to bridge tokens from Ethereum to Europa Schain.
4. Once both transactions are confirmed, the bridging process will begin.
   > **_NOTE:_** Bridge transfer typically takes 3-5 minutes.

## Bridging RAZOR tokens from Europa to Ethereum

1. Visit the [SKALE Bridge Portal](https://portal.skale.space/bridge).
2. Set the "From" chain to Europa and the "To" chain to Ethereum.
3. Ensure your **Exit Gas Wallet** has sufficient funds to cover Ethereum gas fees. If the balance is low, click **Recharge Exit Gas Wallet** and add the suggested amount. Any unused gas balance can be withdrawn after the bridging is completed.
4. Click **Transfer**. This will trigger two transactions for the user to confirm:
   - Approve the amount of **RAZOR** tokens to be spent by the SKALE IMA DepositBoxERC20 contract.
   - Deposit the **RAZOR** tokens into the DepositBoxERC20 contract to bridge tokens from Europa to Ethereum. During this process, the tokens will be burned on the Europa and subsequently unlocked and sent to the user's address on Ethereum Mainnet.
5. After confirming the transactions, the bridging process will begin.
   > **_NOTE:_** Bridge transfer typically takes 3-5 minutes.
