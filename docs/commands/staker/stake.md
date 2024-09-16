---
title: Stake
---

If you have a minimum of 1000 RAZOR tokens in your account, you can stake those using the addStake command.

razor cli

```
$ ./razor addStake --address <address> --value <value> --logFile <filename>
```

docker

```
docker exec -it razor-go razor addStake --address <address> --value <value> --logFile <filename>
```

Example:

```
$ ./razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 1000 --logFile logs
```

_Note: --weiRazor flag can be passed to provide values in wei_

If you have a 1000.25 RAZOR tokens in your account, you can stake those using the stake command with weiRazor flag.

Example:

```
$ razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 1000250000000000000000 --weiRazor true --logFile logs
```

If you have a 5678.1001 RAZOR tokens in your account, you can stake those using the stake command with weiRazor flag.

Example:

```
$ ./razor addStake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 5678100100000000000000 --weiRazor true --logFile logs
```
