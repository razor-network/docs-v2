# Staking

Razor network is a proof of stake network. In order to participate in the network as a validator, you will need to "Stake" your RAZORs. RAZORs are the native tokens in the network and they are compatible with the ERC20 tokens standard.

> Warning: Razor network is in alpha state and is deployed on Skale v2 Testnet. Please use Testnet tokens only.

## Get tokens {#get-tokens}

You will need some Skale Testnet Tokens to pay for transaction fees.
You can get testnet ETH tokens from here:
https://faucet.skale.network/

- Skale Endpoint: https://staging-v2.skalenodes.com/v1/whispering-turais
- Account: address which should receive the testnet tokens.

In order to get started, you will also need some RAZORs on Skale Testnet chain.

## Add Skale network to metamask

1. Use an ethereum compatible browser (e.g. Chrome browser with Metamask plugin)
2. In metamask, click on top right account icon > Settings > Add Network.
3. Fill in the following details:

   | Particulars        | Value                                                     |
   | ------------------ | --------------------------------------------------------- |
   | Network Name       | Skale Testnet v2                                          |
   | New RPC URL        | https://staging-v2.skalenodes.com/v1/whispering-turais    |
   | Chain ID           | 132333505628089                                           |
   | Currency Symbol    | ETH                                                       |
   | Block Explorer URL | https://whispering-turais.testnet-explorer.skalenodes.com |

   > **Note**: _You can also add network from https://razorscan.io/ by clicking on "Connect wallet" and switching network to Skale._

Now you are all set! Let's download the client and start staking!

## Using Docker {#using-docker}

It is recommended to run a **Razor Node** using **Docker**. This is because you dont need a complete development enviroment to run a node. Since code is updated and deployed frequently from our github repository, we keep the Razor Node docker image updated.

## Hardware Requirements {#hardware-requirements}

4gb RAM

4 Core (arm64 or amd64 architecture)

## Software dependencies {#software-dependencies}

Docker: You can find more information about installing docker [here](https://docs.docker.com/engine/install/).

Razor-Go(github): You can download the Razor-go:v1.0.3-incentivised-testnet-phase2-patch2 from [here](https://github.com/razor-network/razor-go/releases/tag/v1.0.3-incentivised-testnet-phase2-patch2).

You can download the Razor-go:v1.0.3-incentivised-testnet-phase2-patch2 from [here](https://hub.docker.com/layers/razor-go/razornetwork/razor-go/v1.0.3-incentivised-testnet-phase2-patch2/images/sha256-e3fc3d3abe1fad1e9ec13fec54e3419fa507dd60c00056e9c7c9215a87c9eecf?context=explore).

### Run the Razor Network Docker Node {#run-the-razor-network-docker-node}

    docker run -d -it --entrypoint /bin/sh --name razor-go -v "$(echo $HOME)"/.razor:/root/.razor razornetwork/razor-go:v1.1.2-internal-testnet

This spins up a razor-go docker image. You can find all the images on the [Razor Network dockerhub](https://hub.docker.com/u/razornetwork).

## Set Config {#set-config}

There are a set of parameters that are configurable. These include:

- Provider: The RPC URL of the provider you are using to connect to the blockchain.
- Gas Multiplier: The value with which the gas price will be multiplied while sending every transaction.
- Buffer Size: Buffer size determines, out of all blocks in a state, in how many blocks the voting or any other operation can be performed.
- Wait Time: This is the number of blocks the system will wait while voting.
- Gas Price: The value of gas price if you want to set manually. If you don't provide any value or simply keep it to 1, the razor client will automatically calculate the optimum gas price and send it.
- Log Level: Normally debug logs are not logged into the log file. But if you want you can set `logLevel` to `debug` and fetch the debug logs.
- Gas Limit: The value with which the gas limit will be multiplied while sending every transaction.

```
docker exec -it razor-go razor setConfig --provider https://staging-v2.skalenodes.com/v1/whispering-turais --gasmultiplier 1 --buffer 20 --wait 30 --gasprice 0 --logLevel debug --gasLimit 2
```

> **Note**: _This will create `razor.yaml` with all necessary parameter at `$HOME/.razor` directory. We can view that via command:`cat $HOME/.razor/razor.yaml` ._

## Commands {#commands}

Run the commands in following way:

    docker exec -it razor-go razor <command>

> **Note**: _It is recomended to use `--logFile <filename>` flag with every razor comand this will generate logfile in `.razor` directory which will be helpfull in debuging any issue._

Create an account using the following command:

    docker exec -it razor-go razor create

Import an account using the following command:

    docker exec -it razor-go razor import

Fund this account with Skale testnet tokens and RAZOR testnet tokens to start participating in the network.

You can use the full commands (stake) or the short form (s) as shown below.

Start staking using the `addStake` command

    docker exec -it razor-go razor addStake --address <account> --value <value> --logFile <filename>

where `address` is the address that contains RAZOR testnet tokens and `value` is the amount of RAZOR that you want to stake.

An example of this command would be:

    docker exec -it razor-go razor addStake --address 0x4561aE6Bd8aF4E6E8668C55496cF73F882CfcbFa --value 10000 --logFile logs

To start accepting delegation, use the delegation command in a new terminal:

    docker exec -it razor-go razor setDelegation --address <address> --status <bool> --commission <commission> --logFile <filename>

where `address` is the address that contains RAZOR testnet tokens, `status` is true or false to turn on or off delegation, and `commission` is the percentage of commission that you can set.

An example of this command would be:

    docker exec -it razor-go razor setDelegation --address 0x4561aE6Bd8aF4E6E8668C55496cF73F882CfcbFa --status true --commission 1 --logFile logs

It will enable delegation, and participants can delegate RAZOR tokens to your staker's account.

Start voting using the `vote` command

    docker exec -it razor-go razor vote --address <account> --logFile <filename>

> **Note**: _To run vote command in background you can use `tmux` for that._  
> 
>1. Run: `tmux new -s razor-go` 
>2. Run  vote command
>3. To exit from tmux session: press `ctrl+b`, release those keys and press `d` 
>4. To list your session: `tmux ls`
>5. To attach Session back: `tmux attach-session -t razor-go`

An example of this command would be:

    docker exec -it razor-go razor vote --address 0x4561aE6Bd8aF4E6E8668C55496cF73F882CfcbFa --logFile logs

If you have delegation enabled and have some commission set, then you can claim that earned commission anytime via the following command:

    docker exec -it razor-go razor claimCommission --address <address> --logFile <filename>

An example of this command would be:

    docker exec -it razor-go razor claimCommission --address 0x4561aE6Bd8aF4E6E8668C55496cF73F882CfcbFa --logFile logs

View Logs

    tail -f $HOME/.razor/[filename].log

An example of this command would be:

    tail -f $HOME/.razor/logs.log

That's it! You should have a staker up and running. Your node will start automatically fetching and answering queries. You must keep your computer online to be able to validate without any interruptions. You can monitor the logs, and use [RazorScan](https://razorscan.io) to monitor your staker.

For more details around all the commands of `razor-go`, please check out the `razor-go` [Readme](https://github.com/razor-network/razor-go#readme).

## Installation From Source {#installation-from-source}

If you would rather install from source, please follow Instructions here to [run a Razor Network node from source](https://github.com/razor-network/razor-go#building-the-source).
