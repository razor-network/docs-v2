---
title: Unstake
---

If you wish to unstake your funds, you can run the `unstake` command.

razor cli

```
$ ./razor unstake --address <address> --stakerId <staker_id> --value <value> --pow <power> --logFile <address>
```

docker

```
docker exec -it razor-go razor unstake --address <address> --stakerId <staker_id> --value <value> --pow <power> --logFile <address>
```

Example:

```
$ ./razor unstake --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --stakerId 1 --amount --pow 10 1000 --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```
