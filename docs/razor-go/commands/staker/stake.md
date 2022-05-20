---
title: Stake
---

If you have a minimum of 1000 razors in your account, you can stake those using the addStake command.

razor cli

```
$ ./razor addStake --address <address> --value <value> --logFile <address>
```

docker

```
docker exec -it razor-go razor addStake --address <address> --value <value> --logFile <address>
```

Example:

```
$ ./razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 1000 --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```

_Note: --pow flag is used to stake floating number stake_

_Note: Formula for calculating pow: (value \* (10**18)) / (10**x) where x is no of decimal places and value is integer_

_The value of pow is : 18 - x here_

If you have a 1000.25 razors in your account, you can stake those using the stake command with pow flag.

Example:

```
$ ./razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 100025 --pow 16 --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```

If you have a 5678.1001 razors in your account, you can stake those using the stake command with pow flag.

If you have a 5678.1001 razors in your account, you can stake those using the stake command with pow flag.

Example:

```
$ ./razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 56781001 --pow 14 --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```
