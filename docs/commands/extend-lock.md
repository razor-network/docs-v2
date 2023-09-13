---
title: Extend Lock
---

If the withdrawal period is over, then extendLock can be called to extend the lock period.

razor cli

```
$ ./razor extendLock --address <address> --stakerId <staker_id> --logFile <filename>
```

docker

```
docker exec -it razor-go razor extendLock --address <address> --stakerId <staker_id> --logFile <filename>
```

Example:

```
$ ./razor extendLock --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --stakerId 1 --logFile logs
```
