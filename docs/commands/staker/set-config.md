---
title: Set Config
---

There are a set of parameters that are configurable. These include:

- Provider: The RPC URL of the provider you are using to connect to the blockchain.
- Gas Multiplier: The value with which the gas price will be multiplied while sending every transaction.
- Buffer Size: Buffer size determines, out of all blocks in a state, in how many blocks the voting or any other operation can be performed.
- Wait Time: This is the number of seconds the system will wait while voting.
- Gas Price: The value of gas price if you want to set manually. If you don't provide any value or simply keep it to 1, the razor client will automatically calculate the optimum gas price and send it.
- Log Level: Normally debug logs are not logged into the log file. But if you want you can set `logLevel` to `debug` and fetch the debug logs.
- Gas Limit: The value with which the gas limit will be multiplied while sending every transaction.
- Gas Limit Override: This value would be used as a gas limit for all the transactions instead of estimating for each transaction.
- RPC Timeout: Number of seconds after which any contract and client calls will time out if it's not responding.
- HTTP Timeout: This is the threshold number of seconds after which an HTTP request for a job will time out.
- Maximum size of log file: This is the maximum size of log file in MB
- Maximum number of backups of log file: This is the maximum number of old log files to retain.
- Maximum age of log file: This is the maximum number of days to retain old log files.
The config is set while the build is generated, but if you need to change any of the above parameter, you can use the `setConfig` command.

razor cli

```
$ ./razor setConfig --provider <rpc_provider> --gasmultiplier <multiplier_value> --buffer <buffer_percentage> --wait <wait_for_n_blocks> --gasprice <gas_price> --logLevel <debug_or_info> --gasLimit <gas_limit_multiplier> --gasLimitOverride <gas_limit_override> --rpcTimeout <rpc_timeout> --httpTimeout <http_timeout> --logFileMaxSize <file_max_size> --logFileMaxBackups <file_max_backups> --logFileMaxAge <file_max_age>
```

docker

```
docker exec -it razor-go razor setConfig --provider <rpc_provider> --gasmultiplier <multiplier_value> --buffer <buffer_percentage> --wait <wait_for_n_blocks> --gasprice <gas_price> --logLevel <debug_or_info> --gasLimit <gas_limit_multiplier> --gasLimitOverride <gas_limit_override> --rpcTimeout <rpc_timeout> --httpTimeout <http_timeout> --logFileMaxSize <file_max_size> --logFileMaxBackups <file_max_backups> --logFileMaxAge <file_max_age>
```

Example:

```
$ ./razor setConfig --provider https://mainnet.skalenodes.com/v1/elated-tan-skat --gasmultiplier 1 --buffer 5 --wait 1 --gasprice 0 --logLevel debug --gasLimit 2 --gasLimitOverride 30000000 --rpcTimeout 5 --httpTimeout 5 --logFileMaxSize 200 --logFileMaxBackups 10 --logFileMaxAge 60
```

Other than setting these parameters in the config, you can use different values of these parameters in different command. Just add the same flag to any command you want to use and the new config changes will appear for that command.

Example:

```
$ ./razor vote --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --gasprice 1
```

This will cause this particular vote command to run with a gas price of 10.
