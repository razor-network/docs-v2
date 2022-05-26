---
title: Withdraw
---

Once `unstake` has been called, you can withdraw your funds using the `initiateWithdraw` and `unlockWithdraw` commands

You need to start the withdrawal process using `initiateWithdraw` command and once the withdraw lock period is over you can use `unlockWithdraw` command to get the RZR's back to your account.

razor cli

```
$ ./razor initiateWithdraw --address <address> --stakerId <staker_id>
```

```
$ ./razor unlockWithdraw --address <address> --stakerId <staker_id>
```

docker

```
docker exec -it razor-go razor initiateWithdraw --address <address> --stakerId <staker_id> --logFile <filename>
```

```
docker exec -it razor-go razor unlockWithdraw --address <address> --stakerId <staker_id> --logFile <filename>
```

Example:

```
$ ./razor initiateWithdraw --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --stakerId 1 --logFile logs
```

```
$ ./razor unlockWithdraw --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --stakerId 1 --logFile logs
```
